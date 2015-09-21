(ns system.client.test
  (:require 
    [cljs.reader :as reader]
    [goog.events :as events]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true])
  
   (:import [goog.net XhrIo]
            goog.net.EventType
            [goog.events EventType]))

(def app-state 
  (atom  {:contacts
          [{:first "ABen" :last "Bitdiddle" :email "benb@mit.edu"}
           {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
           {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
           {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
           {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
           {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}
           {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(declare contact-view)

(defn contacts-view [data owner]
  (om/component 
    (dom/div nil
               (dom/h2 nil "Contact lista")
               (apply dom/ul nil
                      (om/build-all contact-view (:contacts data))))) 
  #_(reify
    om/IRender
    (render [this]
      (dom/div nil
               (dom/h2 nil "Contact list")
               (apply dom/ul nil
                      (om/build-all contact-view (:contacts data)))))))

(declare display-name)

(defn contact-view [contact owner]
  (om/component 
    (dom/li #js {:style #js {:color "green" :size "30px"}} 
               (display-name contact)))  
  #_(reify
    om/IRender
    (render [this]
      (dom/li #js {:style #js {:color "green" :size "30px"}} 
               (display-name contact)))))

(declare middle-name)

(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(om/root contacts-view 
         app-state
         {:target (.getElementById js/document "scriptid")})


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
        #js {"Content-Type" "application/edn"}))))

#_(system.client.test/edn-xhr {:method :get 
                              :url "/" 
                              :data nil 
                              :on-complete #(.log js/console %1)})

(defn on-js-reload [])
