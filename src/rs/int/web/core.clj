(ns rs.int.web.core
  (:require 
   [com.stuartsierra.component :as c]
   [rs.int.web.http :as sh]))

;;
;; This is just to run this specific component
;; Creating a system map
;; Currently we have no configuration elements
;;
(defn new-system [config]
 (c/system-map
   :webprovider (c/using
                  (sh/new-webserver {:port 3000 :join? false})
                  [:app])

   ;; In theory there should be a set of statefull components
   ;; included in this app, and it should be added to the webproviders
   ;; bootstrap
   :app (c/using
             {}
             [])))

;;
;; System creation and lifecycle methods
;;
(defonce system (new-system {}))

(alter-var-root #'*out* (constantly *out*))

(defn start-system! []
  (let [sys (alter-var-root #'system c/start)]
    (println "system started!")))

(defn stop-system! []
  (alter-var-root #'system c/stop))

(defn restart-system! []
  (stop-system!)
  (start-system!))

;;
;; *** Main ***
;;
(defn -main []
  (prn "for one reason main was triggered"))




