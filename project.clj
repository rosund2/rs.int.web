 (defproject rs.int.web "0.0.1-SNAPSHOT"
     :description "web interface project with security enabled"
     :url "http://www.github.com/rosund2/rs.int.web"
     :license {:name "Eclipse Public License"
               :url "http://www.eclipse.org/legal/epl-v10.html"}
     :dependencies [[org.clojure/clojure "1.7.0"]
                    [com.stuartsierra/component "0.2.3"]
                    [compojure "1.1.6"]
                    [hiccup "1.0.5"]
                    [ring-server "0.3.1"]
                    [ring/ring-defaults "0.1.5"]
                    [ring/ring-jetty-adapter "1.3.2"]]
  
     :plugins [[lein-cljsbuild "1.1.0"]
               [cider/cider-nrepl "0.9.1"]]
  
     :source-paths ["src/" "src-cljs/"]

  
     :cljsbuild {:builds {:system {:source-paths ["src" "src-cljs"]
                                   ;;:figwheel { :on-jsload "system.client.test/on-js-reload" }
                                   :compiler {:output-to "resources/public/system.js"
                                              :output-dir "resources/public/"                                           
                                              :optimizations :none                                           
                                              :pretty-print true
                                              :cache-analysis true}}}}
     ;;
     ;; lifecycle keywords
     ;;[:base :system :user :provided :dev]
     ;;
     :profiles {:provided {:dependencies [[org.clojure/clojurescript "1.7.10"]
                                          [org.omcljs/om "0.8.8"]]}
                :dev {:source-paths ["dev"]}}
  
     :clean-targets ^{:protect false} ["resources/public/out"]

     ;; Plan to add injections of pprint ie here. 
     ;;:user {:injections []}
     )

