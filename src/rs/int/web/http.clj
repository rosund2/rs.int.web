(ns rs.int.web.http
  (:require [compojure.core :refer [defroutes routes GET POST]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [ring.util.response :refer [response]]
            [hiccup.middleware :refer [wrap-base-url]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [com.stuartsierra.component :as c]
            [ring.adapter.jetty :as jetty]
            [rs.int.web.db :as db]
            [hiccup.page :refer [html5 include-css include-js]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [rs.int.web.pages :as pages]))


(defroutes api-routes
  (POST "/login" [user password]
        (println "login request for:" user)
        ;;
        ;; if user & password is nil
        ;; else if user pass is ok
        ;; create a user cookie and add to
        ;; response
        ;;
        (response "ok"))


  (POST "/logout" request

        ))

(defn- wrap-object [f k m]
  "returns a chainhandler that assocs a key and value to a request"
  (fn [req] (f (assoc req k m))))

(defn- make-handler [webapp]
  (do
    (-> #'api-routes
        ;;
        ;; Injecting webapplication into request map
        ;;
        (wrap-object ::web-app webapp)
        (wrap-defaults
         (assoc-in site-defaults [:security :anti-forgery] false)))))

(defrecord WebServer [webapp config jetty]
  c/Lifecycle
  (start [this]
    (when-not (:jetty this)
      (let [handler (make-handler webapp)]
        (assoc this :jetty (jetty/run-jetty (#'make-handler webapp) config)))))
  (stop [this]
    (when (:jetty this)
      (.stop (get this :jetty))
      (assoc this :jetty nil))))

;; TODO: destructor config keys
(defn new-webserver [config]
  (map->WebServer {:config config}))





