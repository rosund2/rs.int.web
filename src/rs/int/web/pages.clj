(ns rs.int.web.pages
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn base [title & args]  
  (list [:head
         [:title title]
         (include-css "/css/style.css")]
        [:body 
         args
         (include-js "goog/base.js")
         (include-js "system.js")
         [:script {:type "text/javascript"} "goog.require(\"system.client.test\")"] ]))

(defn home []  
  (html5        
    (base "Simple react based page" 
          [:h1 "OM testing"]
          [:div#scriptid "script container"])))
