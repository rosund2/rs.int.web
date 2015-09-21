// Compiled by ClojureScript 1.7.10 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('system.client.test');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__18124__delegate = function (x){
if(cljs.core.truth_(system.client.test.on_js_reload)){
return cljs.core.apply.call(null,system.client.test.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'system.client.test/on-js-reload' is missing");
}
};
var G__18124 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__18125__i = 0, G__18125__a = new Array(arguments.length -  0);
while (G__18125__i < G__18125__a.length) {G__18125__a[G__18125__i] = arguments[G__18125__i + 0]; ++G__18125__i;}
  x = new cljs.core.IndexedSeq(G__18125__a,0);
} 
return G__18124__delegate.call(this,x);};
G__18124.cljs$lang$maxFixedArity = 0;
G__18124.cljs$lang$applyTo = (function (arglist__18126){
var x = cljs.core.seq(arglist__18126);
return G__18124__delegate(x);
});
G__18124.cljs$core$IFn$_invoke$arity$variadic = G__18124__delegate;
return G__18124;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"system",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map