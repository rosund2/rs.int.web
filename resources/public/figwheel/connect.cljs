(ns figwheel.connect (:require [system.client.test] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/system.client.test.on-js-reload (apply js/system.client.test.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'system.client.test/on-js-reload' is missing"))), :build-id "system", :websocket-url "ws://localhost:3449/figwheel-ws"})

