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
;;               [lein-figwheel "0.3.5"]
               [cider/cider-nrepl "0.9.1"]]
  
     :source-paths ["src/" "src-cljs/"]
  
     :cljsbuild {:builds {:system {:source-paths ["src" "src-cljs"]
                                   ;;:figwheel { :on-jsload "system.client.test/on-js-reload" }
                                   :compiler {:output-to "resources/public/system.js"
                                              :output-dir "resources/public/"                                           
                                              :optimizations :none                                           
                                              :pretty-print true
                                              :cache-analysis true}}}}
     ;;[:base :system :user :provided :dev]
     :profiles {:provided {:dependencies [[org.clojure/clojurescript "1.7.10"]
                                          [org.omcljs/om "0.8.8"]]}}
  
     :clean-targets ^{:protect false} ["resources/public/out"]
     :figwheel {
                ;; :http-server-root "public" ;; default and assumes "resources" 
                ;; :server-port 3449 ;; default
                ;; :server-ip "127.0.0.1" 

                :css-dirs ["resources/public/css"] ;; watch and update CSS

                ;; Start an nREPL server into the running figwheel process
                ;; :nrepl-port 7888

                ;; Server Ring Handler (optional)
                ;; if you want to embed a ring handler into the figwheel http-kit
                ;; server, this is for simple ring servers, if this
                ;; doesn't work for you just run your own server :)
                ;; :ring-handler hello_world.server/handler

                ;; To be able to open files in your editor from the heads up display
                ;; you will need to put a script on your path.
                ;; that script will have to take a file path and a line number
                ;; ie. in  ~/bin/myfile-opener
                ;; #! /bin/sh
                ;; emacsclient -n +$2 $1
                ;;
                ;; :open-file-command "myfile-opener"

                ;; if you want to disable the REPL
                ;; :repl false

                ;; to configure a different figwheel logfile path
                ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
                })

