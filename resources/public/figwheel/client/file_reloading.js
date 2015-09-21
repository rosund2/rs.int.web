// Compiled by ClojureScript 1.7.10 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__23076_SHARP_,p2__23077_SHARP_){
var and__15339__auto__ = p1__23076_SHARP_;
if(cljs.core.truth_(and__15339__auto__)){
return p2__23077_SHARP_;
} else {
return and__15339__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__15351__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__15351__auto__){
return or__15351__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__15351__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__15351__auto__){
return or__15351__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__15351__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16249__auto__,method_table__16245__auto__,prefer_table__16246__auto__,method_cache__16247__auto__,cached_hierarchy__16248__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23078){
var map__23079 = p__23078;
var map__23079__$1 = ((((!((map__23079 == null)))?((((map__23079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var file = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23081){
var map__23082 = p__23081;
var map__23082__$1 = ((((!((map__23082 == null)))?((((map__23082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23082):map__23082);
var namespace = cljs.core.get.call(null,map__23082__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16249__auto__,method_table__16245__auto__,prefer_table__16246__auto__,method_cache__16247__auto__,cached_hierarchy__16248__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23084){if((e23084 instanceof Error)){
var e = e23084;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23084;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args23085 = [];
var len__16390__auto___23088 = arguments.length;
var i__16391__auto___23089 = (0);
while(true){
if((i__16391__auto___23089 < len__16390__auto___23088)){
args23085.push((arguments[i__16391__auto___23089]));

var G__23090 = (i__16391__auto___23089 + (1));
i__16391__auto___23089 = G__23090;
continue;
} else {
}
break;
}

var G__23087 = args23085.length;
switch (G__23087) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23085.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23092,callback){
var map__23095 = p__23092;
var map__23095__$1 = ((((!((map__23095 == null)))?((((map__23095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23095):map__23095);
var file_msg = map__23095__$1;
var request_url = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23095,map__23095__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23095,map__23095__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23097){
var map__23100 = p__23097;
var map__23100__$1 = ((((!((map__23100 == null)))?((((map__23100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23100):map__23100);
var file_msg = map__23100__$1;
var namespace = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__15351__auto__ = meta_data;
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__15339__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__15339__auto__){
var or__15351__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
var or__15351__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15351__auto____$1)){
return or__15351__auto____$1;
} else {
var and__15339__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__15339__auto____$1){
var or__15351__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__15351__auto____$2){
return or__15351__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__15339__auto____$1;
}
}
}
} else {
return and__15339__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23102,callback){
var map__23105 = p__23102;
var map__23105__$1 = ((((!((map__23105 == null)))?((((map__23105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23105):map__23105);
var file_msg = map__23105__$1;
var request_url = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18081__auto___23193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___23193,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___23193,out){
return (function (state_23175){
var state_val_23176 = (state_23175[(1)]);
if((state_val_23176 === (1))){
var inst_23153 = cljs.core.nth.call(null,files,(0),null);
var inst_23154 = cljs.core.nthnext.call(null,files,(1));
var inst_23155 = files;
var state_23175__$1 = (function (){var statearr_23177 = state_23175;
(statearr_23177[(7)] = inst_23153);

(statearr_23177[(8)] = inst_23154);

(statearr_23177[(9)] = inst_23155);

return statearr_23177;
})();
var statearr_23178_23194 = state_23175__$1;
(statearr_23178_23194[(2)] = null);

(statearr_23178_23194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (2))){
var inst_23158 = (state_23175[(10)]);
var inst_23155 = (state_23175[(9)]);
var inst_23158__$1 = cljs.core.nth.call(null,inst_23155,(0),null);
var inst_23159 = cljs.core.nthnext.call(null,inst_23155,(1));
var inst_23160 = (inst_23158__$1 == null);
var inst_23161 = cljs.core.not.call(null,inst_23160);
var state_23175__$1 = (function (){var statearr_23179 = state_23175;
(statearr_23179[(11)] = inst_23159);

(statearr_23179[(10)] = inst_23158__$1);

return statearr_23179;
})();
if(inst_23161){
var statearr_23180_23195 = state_23175__$1;
(statearr_23180_23195[(1)] = (4));

} else {
var statearr_23181_23196 = state_23175__$1;
(statearr_23181_23196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (3))){
var inst_23173 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23175__$1,inst_23173);
} else {
if((state_val_23176 === (4))){
var inst_23158 = (state_23175[(10)]);
var inst_23163 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23158);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23175__$1,(7),inst_23163);
} else {
if((state_val_23176 === (5))){
var inst_23169 = cljs.core.async.close_BANG_.call(null,out);
var state_23175__$1 = state_23175;
var statearr_23182_23197 = state_23175__$1;
(statearr_23182_23197[(2)] = inst_23169);

(statearr_23182_23197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (6))){
var inst_23171 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23183_23198 = state_23175__$1;
(statearr_23183_23198[(2)] = inst_23171);

(statearr_23183_23198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (7))){
var inst_23159 = (state_23175[(11)]);
var inst_23165 = (state_23175[(2)]);
var inst_23166 = cljs.core.async.put_BANG_.call(null,out,inst_23165);
var inst_23155 = inst_23159;
var state_23175__$1 = (function (){var statearr_23184 = state_23175;
(statearr_23184[(9)] = inst_23155);

(statearr_23184[(12)] = inst_23166);

return statearr_23184;
})();
var statearr_23185_23199 = state_23175__$1;
(statearr_23185_23199[(2)] = null);

(statearr_23185_23199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18081__auto___23193,out))
;
return ((function (switch__18016__auto__,c__18081__auto___23193,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto____0 = (function (){
var statearr_23189 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23189[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto__);

(statearr_23189[(1)] = (1));

return statearr_23189;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto____1 = (function (state_23175){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_23175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object)){
var ex__18020__auto__ = e23190;
var statearr_23191_23200 = state_23175;
(statearr_23191_23200[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23201 = state_23175;
state_23175 = G__23201;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto__ = function(state_23175){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto____1.call(this,state_23175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___23193,out))
})();
var state__18083__auto__ = (function (){var statearr_23192 = f__18082__auto__.call(null);
(statearr_23192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___23193);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___23193,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__23202,p__23203){
var map__23208 = p__23202;
var map__23208__$1 = ((((!((map__23208 == null)))?((((map__23208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23208):map__23208);
var opts = map__23208__$1;
var url_rewriter = cljs.core.get.call(null,map__23208__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23209 = p__23203;
var map__23209__$1 = ((((!((map__23209 == null)))?((((map__23209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23209):map__23209);
var file_msg = map__23209__$1;
var file = cljs.core.get.call(null,map__23209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23212,opts){
var map__23216 = p__23212;
var map__23216__$1 = ((((!((map__23216 == null)))?((((map__23216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23216):map__23216);
var eval_body__$1 = cljs.core.get.call(null,map__23216__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23216__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__15339__auto__ = eval_body__$1;
if(cljs.core.truth_(and__15339__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__15339__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23218){var e = e23218;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23223,p__23224){
var map__23452 = p__23223;
var map__23452__$1 = ((((!((map__23452 == null)))?((((map__23452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23452):map__23452);
var opts = map__23452__$1;
var before_jsload = cljs.core.get.call(null,map__23452__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23452__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__23452__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__23453 = p__23224;
var map__23453__$1 = ((((!((map__23453 == null)))?((((map__23453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23453):map__23453);
var msg = map__23453__$1;
var files = cljs.core.get.call(null,map__23453__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (state_23594){
var state_val_23595 = (state_23594[(1)]);
if((state_val_23595 === (7))){
var inst_23470 = (state_23594[(7)]);
var inst_23467 = (state_23594[(8)]);
var inst_23468 = (state_23594[(9)]);
var inst_23469 = (state_23594[(10)]);
var inst_23475 = cljs.core._nth.call(null,inst_23468,inst_23470);
var inst_23476 = figwheel.client.file_reloading.eval_body.call(null,inst_23475,opts);
var inst_23477 = (inst_23470 + (1));
var tmp23596 = inst_23467;
var tmp23597 = inst_23468;
var tmp23598 = inst_23469;
var inst_23467__$1 = tmp23596;
var inst_23468__$1 = tmp23597;
var inst_23469__$1 = tmp23598;
var inst_23470__$1 = inst_23477;
var state_23594__$1 = (function (){var statearr_23599 = state_23594;
(statearr_23599[(7)] = inst_23470__$1);

(statearr_23599[(8)] = inst_23467__$1);

(statearr_23599[(11)] = inst_23476);

(statearr_23599[(9)] = inst_23468__$1);

(statearr_23599[(10)] = inst_23469__$1);

return statearr_23599;
})();
var statearr_23600_23679 = state_23594__$1;
(statearr_23600_23679[(2)] = null);

(statearr_23600_23679[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (20))){
var inst_23512 = (state_23594[(12)]);
var inst_23516 = (state_23594[(13)]);
var inst_23519 = (state_23594[(14)]);
var inst_23513 = (state_23594[(15)]);
var inst_23517 = (state_23594[(16)]);
var inst_23522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23524 = (function (){var all_files = inst_23512;
var files_SINGLEQUOTE_ = inst_23513;
var res_SINGLEQUOTE_ = inst_23516;
var res = inst_23517;
var files_not_loaded = inst_23519;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_23512,inst_23516,inst_23519,inst_23513,inst_23517,inst_23522,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (p__23523){
var map__23601 = p__23523;
var map__23601__$1 = ((((!((map__23601 == null)))?((((map__23601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23601):map__23601);
var namespace = cljs.core.get.call(null,map__23601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23601__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_23512,inst_23516,inst_23519,inst_23513,inst_23517,inst_23522,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23525 = cljs.core.map.call(null,inst_23524,inst_23517);
var inst_23526 = cljs.core.pr_str.call(null,inst_23525);
var inst_23527 = figwheel.client.utils.log.call(null,inst_23526);
var inst_23528 = (function (){var all_files = inst_23512;
var files_SINGLEQUOTE_ = inst_23513;
var res_SINGLEQUOTE_ = inst_23516;
var res = inst_23517;
var files_not_loaded = inst_23519;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_23512,inst_23516,inst_23519,inst_23513,inst_23517,inst_23522,inst_23524,inst_23525,inst_23526,inst_23527,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_23512,inst_23516,inst_23519,inst_23513,inst_23517,inst_23522,inst_23524,inst_23525,inst_23526,inst_23527,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23529 = setTimeout(inst_23528,(10));
var state_23594__$1 = (function (){var statearr_23603 = state_23594;
(statearr_23603[(17)] = inst_23522);

(statearr_23603[(18)] = inst_23527);

return statearr_23603;
})();
var statearr_23604_23680 = state_23594__$1;
(statearr_23604_23680[(2)] = inst_23529);

(statearr_23604_23680[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (27))){
var state_23594__$1 = state_23594;
var statearr_23605_23681 = state_23594__$1;
(statearr_23605_23681[(2)] = false);

(statearr_23605_23681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (1))){
var inst_23459 = (state_23594[(19)]);
var inst_23456 = before_jsload.call(null,files);
var inst_23457 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23458 = (function (){return ((function (inst_23459,inst_23456,inst_23457,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (p1__23219_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23219_SHARP_);
});
;})(inst_23459,inst_23456,inst_23457,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23459__$1 = cljs.core.filter.call(null,inst_23458,files);
var inst_23460 = cljs.core.not_empty.call(null,inst_23459__$1);
var state_23594__$1 = (function (){var statearr_23606 = state_23594;
(statearr_23606[(19)] = inst_23459__$1);

(statearr_23606[(20)] = inst_23457);

(statearr_23606[(21)] = inst_23456);

return statearr_23606;
})();
if(cljs.core.truth_(inst_23460)){
var statearr_23607_23682 = state_23594__$1;
(statearr_23607_23682[(1)] = (2));

} else {
var statearr_23608_23683 = state_23594__$1;
(statearr_23608_23683[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (24))){
var state_23594__$1 = state_23594;
var statearr_23609_23684 = state_23594__$1;
(statearr_23609_23684[(2)] = null);

(statearr_23609_23684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (39))){
var state_23594__$1 = state_23594;
var statearr_23610_23685 = state_23594__$1;
(statearr_23610_23685[(2)] = null);

(statearr_23610_23685[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (4))){
var inst_23504 = (state_23594[(2)]);
var inst_23505 = (function (){return ((function (inst_23504,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (p1__23220_SHARP_){
var and__15339__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23220_SHARP_);
if(cljs.core.truth_(and__15339__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23220_SHARP_));
} else {
return and__15339__auto__;
}
});
;})(inst_23504,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23506 = cljs.core.filter.call(null,inst_23505,files);
var state_23594__$1 = (function (){var statearr_23611 = state_23594;
(statearr_23611[(22)] = inst_23506);

(statearr_23611[(23)] = inst_23504);

return statearr_23611;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_23612_23686 = state_23594__$1;
(statearr_23612_23686[(1)] = (16));

} else {
var statearr_23613_23687 = state_23594__$1;
(statearr_23613_23687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (15))){
var inst_23494 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23614_23688 = state_23594__$1;
(statearr_23614_23688[(2)] = inst_23494);

(statearr_23614_23688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (21))){
var state_23594__$1 = state_23594;
var statearr_23615_23689 = state_23594__$1;
(statearr_23615_23689[(2)] = null);

(statearr_23615_23689[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (31))){
var inst_23551 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23616_23690 = state_23594__$1;
(statearr_23616_23690[(2)] = inst_23551);

(statearr_23616_23690[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (32))){
var inst_23539 = (state_23594[(24)]);
var inst_23556 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23539);
var state_23594__$1 = state_23594;
var statearr_23617_23691 = state_23594__$1;
(statearr_23617_23691[(2)] = inst_23556);

(statearr_23617_23691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (40))){
var inst_23562 = (state_23594[(25)]);
var inst_23580 = (state_23594[(2)]);
var inst_23581 = cljs.core.not_empty.call(null,inst_23562);
var state_23594__$1 = (function (){var statearr_23618 = state_23594;
(statearr_23618[(26)] = inst_23580);

return statearr_23618;
})();
if(cljs.core.truth_(inst_23581)){
var statearr_23619_23692 = state_23594__$1;
(statearr_23619_23692[(1)] = (41));

} else {
var statearr_23620_23693 = state_23594__$1;
(statearr_23620_23693[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (33))){
var inst_23539 = (state_23594[(24)]);
var state_23594__$1 = state_23594;
var statearr_23621_23694 = state_23594__$1;
(statearr_23621_23694[(2)] = inst_23539);

(statearr_23621_23694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (13))){
var inst_23480 = (state_23594[(27)]);
var inst_23484 = cljs.core.chunk_first.call(null,inst_23480);
var inst_23485 = cljs.core.chunk_rest.call(null,inst_23480);
var inst_23486 = cljs.core.count.call(null,inst_23484);
var inst_23467 = inst_23485;
var inst_23468 = inst_23484;
var inst_23469 = inst_23486;
var inst_23470 = (0);
var state_23594__$1 = (function (){var statearr_23622 = state_23594;
(statearr_23622[(7)] = inst_23470);

(statearr_23622[(8)] = inst_23467);

(statearr_23622[(9)] = inst_23468);

(statearr_23622[(10)] = inst_23469);

return statearr_23622;
})();
var statearr_23623_23695 = state_23594__$1;
(statearr_23623_23695[(2)] = null);

(statearr_23623_23695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (22))){
var inst_23519 = (state_23594[(14)]);
var inst_23532 = (state_23594[(2)]);
var inst_23533 = cljs.core.not_empty.call(null,inst_23519);
var state_23594__$1 = (function (){var statearr_23624 = state_23594;
(statearr_23624[(28)] = inst_23532);

return statearr_23624;
})();
if(cljs.core.truth_(inst_23533)){
var statearr_23625_23696 = state_23594__$1;
(statearr_23625_23696[(1)] = (23));

} else {
var statearr_23626_23697 = state_23594__$1;
(statearr_23626_23697[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (36))){
var state_23594__$1 = state_23594;
var statearr_23627_23698 = state_23594__$1;
(statearr_23627_23698[(2)] = null);

(statearr_23627_23698[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (41))){
var inst_23562 = (state_23594[(25)]);
var inst_23583 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23562);
var inst_23584 = cljs.core.pr_str.call(null,inst_23583);
var inst_23585 = [cljs.core.str("not required: "),cljs.core.str(inst_23584)].join('');
var inst_23586 = figwheel.client.utils.log.call(null,inst_23585);
var state_23594__$1 = state_23594;
var statearr_23628_23699 = state_23594__$1;
(statearr_23628_23699[(2)] = inst_23586);

(statearr_23628_23699[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (43))){
var inst_23589 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23629_23700 = state_23594__$1;
(statearr_23629_23700[(2)] = inst_23589);

(statearr_23629_23700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (29))){
var state_23594__$1 = state_23594;
var statearr_23630_23701 = state_23594__$1;
(statearr_23630_23701[(2)] = true);

(statearr_23630_23701[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (6))){
var inst_23501 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23631_23702 = state_23594__$1;
(statearr_23631_23702[(2)] = inst_23501);

(statearr_23631_23702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (28))){
var inst_23554 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23554)){
var statearr_23632_23703 = state_23594__$1;
(statearr_23632_23703[(1)] = (32));

} else {
var statearr_23633_23704 = state_23594__$1;
(statearr_23633_23704[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (25))){
var inst_23592 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23594__$1,inst_23592);
} else {
if((state_val_23595 === (34))){
var inst_23560 = (state_23594[(29)]);
var inst_23559 = (state_23594[(2)]);
var inst_23560__$1 = cljs.core.get.call(null,inst_23559,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23561 = cljs.core.get.call(null,inst_23559,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_23562 = cljs.core.get.call(null,inst_23559,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23563 = cljs.core.not_empty.call(null,inst_23560__$1);
var state_23594__$1 = (function (){var statearr_23634 = state_23594;
(statearr_23634[(29)] = inst_23560__$1);

(statearr_23634[(25)] = inst_23562);

(statearr_23634[(30)] = inst_23561);

return statearr_23634;
})();
if(cljs.core.truth_(inst_23563)){
var statearr_23635_23705 = state_23594__$1;
(statearr_23635_23705[(1)] = (35));

} else {
var statearr_23636_23706 = state_23594__$1;
(statearr_23636_23706[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (17))){
var inst_23506 = (state_23594[(22)]);
var state_23594__$1 = state_23594;
var statearr_23637_23707 = state_23594__$1;
(statearr_23637_23707[(2)] = inst_23506);

(statearr_23637_23707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (3))){
var state_23594__$1 = state_23594;
var statearr_23638_23708 = state_23594__$1;
(statearr_23638_23708[(2)] = null);

(statearr_23638_23708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (12))){
var inst_23497 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23639_23709 = state_23594__$1;
(statearr_23639_23709[(2)] = inst_23497);

(statearr_23639_23709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (2))){
var inst_23459 = (state_23594[(19)]);
var inst_23466 = cljs.core.seq.call(null,inst_23459);
var inst_23467 = inst_23466;
var inst_23468 = null;
var inst_23469 = (0);
var inst_23470 = (0);
var state_23594__$1 = (function (){var statearr_23640 = state_23594;
(statearr_23640[(7)] = inst_23470);

(statearr_23640[(8)] = inst_23467);

(statearr_23640[(9)] = inst_23468);

(statearr_23640[(10)] = inst_23469);

return statearr_23640;
})();
var statearr_23641_23710 = state_23594__$1;
(statearr_23641_23710[(2)] = null);

(statearr_23641_23710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (23))){
var inst_23512 = (state_23594[(12)]);
var inst_23516 = (state_23594[(13)]);
var inst_23519 = (state_23594[(14)]);
var inst_23539 = (state_23594[(24)]);
var inst_23513 = (state_23594[(15)]);
var inst_23517 = (state_23594[(16)]);
var inst_23535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23538 = (function (){var all_files = inst_23512;
var files_SINGLEQUOTE_ = inst_23513;
var res_SINGLEQUOTE_ = inst_23516;
var res = inst_23517;
var files_not_loaded = inst_23519;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_23512,inst_23516,inst_23519,inst_23539,inst_23513,inst_23517,inst_23535,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (p__23537){
var map__23642 = p__23537;
var map__23642__$1 = ((((!((map__23642 == null)))?((((map__23642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23642):map__23642);
var meta_data = cljs.core.get.call(null,map__23642__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_23512,inst_23516,inst_23519,inst_23539,inst_23513,inst_23517,inst_23535,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23539__$1 = cljs.core.group_by.call(null,inst_23538,inst_23519);
var inst_23541 = (inst_23539__$1 == null);
var inst_23542 = cljs.core.not.call(null,inst_23541);
var state_23594__$1 = (function (){var statearr_23644 = state_23594;
(statearr_23644[(31)] = inst_23535);

(statearr_23644[(24)] = inst_23539__$1);

return statearr_23644;
})();
if(inst_23542){
var statearr_23645_23711 = state_23594__$1;
(statearr_23645_23711[(1)] = (26));

} else {
var statearr_23646_23712 = state_23594__$1;
(statearr_23646_23712[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (35))){
var inst_23560 = (state_23594[(29)]);
var inst_23565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23560);
var inst_23566 = cljs.core.pr_str.call(null,inst_23565);
var inst_23567 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23566)].join('');
var inst_23568 = figwheel.client.utils.log.call(null,inst_23567);
var state_23594__$1 = state_23594;
var statearr_23647_23713 = state_23594__$1;
(statearr_23647_23713[(2)] = inst_23568);

(statearr_23647_23713[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (19))){
var inst_23512 = (state_23594[(12)]);
var inst_23516 = (state_23594[(13)]);
var inst_23513 = (state_23594[(15)]);
var inst_23517 = (state_23594[(16)]);
var inst_23516__$1 = (state_23594[(2)]);
var inst_23517__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23516__$1);
var inst_23518 = (function (){var all_files = inst_23512;
var files_SINGLEQUOTE_ = inst_23513;
var res_SINGLEQUOTE_ = inst_23516__$1;
var res = inst_23517__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_23512,inst_23516,inst_23513,inst_23517,inst_23516__$1,inst_23517__$1,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (p1__23222_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23222_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_23512,inst_23516,inst_23513,inst_23517,inst_23516__$1,inst_23517__$1,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23519 = cljs.core.filter.call(null,inst_23518,inst_23516__$1);
var inst_23520 = cljs.core.not_empty.call(null,inst_23517__$1);
var state_23594__$1 = (function (){var statearr_23648 = state_23594;
(statearr_23648[(13)] = inst_23516__$1);

(statearr_23648[(14)] = inst_23519);

(statearr_23648[(16)] = inst_23517__$1);

return statearr_23648;
})();
if(cljs.core.truth_(inst_23520)){
var statearr_23649_23714 = state_23594__$1;
(statearr_23649_23714[(1)] = (20));

} else {
var statearr_23650_23715 = state_23594__$1;
(statearr_23650_23715[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (11))){
var state_23594__$1 = state_23594;
var statearr_23651_23716 = state_23594__$1;
(statearr_23651_23716[(2)] = null);

(statearr_23651_23716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (9))){
var inst_23499 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23652_23717 = state_23594__$1;
(statearr_23652_23717[(2)] = inst_23499);

(statearr_23652_23717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (5))){
var inst_23470 = (state_23594[(7)]);
var inst_23469 = (state_23594[(10)]);
var inst_23472 = (inst_23470 < inst_23469);
var inst_23473 = inst_23472;
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23473)){
var statearr_23653_23718 = state_23594__$1;
(statearr_23653_23718[(1)] = (7));

} else {
var statearr_23654_23719 = state_23594__$1;
(statearr_23654_23719[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (14))){
var inst_23480 = (state_23594[(27)]);
var inst_23489 = cljs.core.first.call(null,inst_23480);
var inst_23490 = figwheel.client.file_reloading.eval_body.call(null,inst_23489,opts);
var inst_23491 = cljs.core.next.call(null,inst_23480);
var inst_23467 = inst_23491;
var inst_23468 = null;
var inst_23469 = (0);
var inst_23470 = (0);
var state_23594__$1 = (function (){var statearr_23655 = state_23594;
(statearr_23655[(7)] = inst_23470);

(statearr_23655[(32)] = inst_23490);

(statearr_23655[(8)] = inst_23467);

(statearr_23655[(9)] = inst_23468);

(statearr_23655[(10)] = inst_23469);

return statearr_23655;
})();
var statearr_23656_23720 = state_23594__$1;
(statearr_23656_23720[(2)] = null);

(statearr_23656_23720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (26))){
var inst_23539 = (state_23594[(24)]);
var inst_23544 = inst_23539.cljs$lang$protocol_mask$partition0$;
var inst_23545 = (inst_23544 & (64));
var inst_23546 = inst_23539.cljs$core$ISeq$;
var inst_23547 = (inst_23545) || (inst_23546);
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23547)){
var statearr_23657_23721 = state_23594__$1;
(statearr_23657_23721[(1)] = (29));

} else {
var statearr_23658_23722 = state_23594__$1;
(statearr_23658_23722[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (16))){
var inst_23506 = (state_23594[(22)]);
var inst_23508 = (function (){var all_files = inst_23506;
return ((function (all_files,inst_23506,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function (p1__23221_SHARP_){
return cljs.core.update_in.call(null,p1__23221_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_23506,state_val_23595,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var inst_23509 = cljs.core.map.call(null,inst_23508,inst_23506);
var state_23594__$1 = state_23594;
var statearr_23659_23723 = state_23594__$1;
(statearr_23659_23723[(2)] = inst_23509);

(statearr_23659_23723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (38))){
var inst_23561 = (state_23594[(30)]);
var inst_23574 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23561);
var inst_23575 = cljs.core.pr_str.call(null,inst_23574);
var inst_23576 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_23575)].join('');
var inst_23577 = figwheel.client.utils.log.call(null,inst_23576);
var state_23594__$1 = state_23594;
var statearr_23660_23724 = state_23594__$1;
(statearr_23660_23724[(2)] = inst_23577);

(statearr_23660_23724[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (30))){
var state_23594__$1 = state_23594;
var statearr_23661_23725 = state_23594__$1;
(statearr_23661_23725[(2)] = false);

(statearr_23661_23725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (10))){
var inst_23480 = (state_23594[(27)]);
var inst_23482 = cljs.core.chunked_seq_QMARK_.call(null,inst_23480);
var state_23594__$1 = state_23594;
if(inst_23482){
var statearr_23662_23726 = state_23594__$1;
(statearr_23662_23726[(1)] = (13));

} else {
var statearr_23663_23727 = state_23594__$1;
(statearr_23663_23727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (18))){
var inst_23512 = (state_23594[(12)]);
var inst_23513 = (state_23594[(15)]);
var inst_23512__$1 = (state_23594[(2)]);
var inst_23513__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_23512__$1);
var inst_23514 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23513__$1);
var state_23594__$1 = (function (){var statearr_23664 = state_23594;
(statearr_23664[(12)] = inst_23512__$1);

(statearr_23664[(15)] = inst_23513__$1);

return statearr_23664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23594__$1,(19),inst_23514);
} else {
if((state_val_23595 === (42))){
var state_23594__$1 = state_23594;
var statearr_23665_23728 = state_23594__$1;
(statearr_23665_23728[(2)] = null);

(statearr_23665_23728[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (37))){
var inst_23561 = (state_23594[(30)]);
var inst_23571 = (state_23594[(2)]);
var inst_23572 = cljs.core.not_empty.call(null,inst_23561);
var state_23594__$1 = (function (){var statearr_23666 = state_23594;
(statearr_23666[(33)] = inst_23571);

return statearr_23666;
})();
if(cljs.core.truth_(inst_23572)){
var statearr_23667_23729 = state_23594__$1;
(statearr_23667_23729[(1)] = (38));

} else {
var statearr_23668_23730 = state_23594__$1;
(statearr_23668_23730[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (8))){
var inst_23480 = (state_23594[(27)]);
var inst_23467 = (state_23594[(8)]);
var inst_23480__$1 = cljs.core.seq.call(null,inst_23467);
var state_23594__$1 = (function (){var statearr_23669 = state_23594;
(statearr_23669[(27)] = inst_23480__$1);

return statearr_23669;
})();
if(inst_23480__$1){
var statearr_23670_23731 = state_23594__$1;
(statearr_23670_23731[(1)] = (10));

} else {
var statearr_23671_23732 = state_23594__$1;
(statearr_23671_23732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
;
return ((function (switch__18016__auto__,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto____0 = (function (){
var statearr_23675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23675[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto__);

(statearr_23675[(1)] = (1));

return statearr_23675;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto____1 = (function (state_23594){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_23594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e23676){if((e23676 instanceof Object)){
var ex__18020__auto__ = e23676;
var statearr_23677_23733 = state_23594;
(statearr_23677_23733[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23734 = state_23594;
state_23594 = G__23734;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto__ = function(state_23594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto____1.call(this,state_23594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
})();
var state__18083__auto__ = (function (){var statearr_23678 = f__18082__auto__.call(null);
(statearr_23678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_23678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__,map__23452,map__23452__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__23453,map__23453__$1,msg,files))
);

return c__18081__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23737,link){
var map__23740 = p__23737;
var map__23740__$1 = ((((!((map__23740 == null)))?((((map__23740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23740):map__23740);
var file = cljs.core.get.call(null,map__23740__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23740,map__23740__$1,file){
return (function (p1__23735_SHARP_,p2__23736_SHARP_){
if(cljs.core._EQ_.call(null,p1__23735_SHARP_,p2__23736_SHARP_)){
return p1__23735_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23740,map__23740__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23746){
var map__23747 = p__23746;
var map__23747__$1 = ((((!((map__23747 == null)))?((((map__23747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23747):map__23747);
var match_length = cljs.core.get.call(null,map__23747__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23747__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23742_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23742_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args23749 = [];
var len__16390__auto___23752 = arguments.length;
var i__16391__auto___23753 = (0);
while(true){
if((i__16391__auto___23753 < len__16390__auto___23752)){
args23749.push((arguments[i__16391__auto___23753]));

var G__23754 = (i__16391__auto___23753 + (1));
i__16391__auto___23753 = G__23754;
continue;
} else {
}
break;
}

var G__23751 = args23749.length;
switch (G__23751) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23749.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23756){
var map__23759 = p__23756;
var map__23759__$1 = ((((!((map__23759 == null)))?((((map__23759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23759):map__23759);
var f_data = map__23759__$1;
var file = cljs.core.get.call(null,map__23759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__23759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__15351__auto__ = request_url;
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23761,files_msg){
var map__23784 = p__23761;
var map__23784__$1 = ((((!((map__23784 == null)))?((((map__23784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23784):map__23784);
var opts = map__23784__$1;
var on_cssload = cljs.core.get.call(null,map__23784__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23786_23806 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23787_23807 = null;
var count__23788_23808 = (0);
var i__23789_23809 = (0);
while(true){
if((i__23789_23809 < count__23788_23808)){
var f_23810 = cljs.core._nth.call(null,chunk__23787_23807,i__23789_23809);
figwheel.client.file_reloading.reload_css_file.call(null,f_23810);

var G__23811 = seq__23786_23806;
var G__23812 = chunk__23787_23807;
var G__23813 = count__23788_23808;
var G__23814 = (i__23789_23809 + (1));
seq__23786_23806 = G__23811;
chunk__23787_23807 = G__23812;
count__23788_23808 = G__23813;
i__23789_23809 = G__23814;
continue;
} else {
var temp__4425__auto___23815 = cljs.core.seq.call(null,seq__23786_23806);
if(temp__4425__auto___23815){
var seq__23786_23816__$1 = temp__4425__auto___23815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23786_23816__$1)){
var c__16135__auto___23817 = cljs.core.chunk_first.call(null,seq__23786_23816__$1);
var G__23818 = cljs.core.chunk_rest.call(null,seq__23786_23816__$1);
var G__23819 = c__16135__auto___23817;
var G__23820 = cljs.core.count.call(null,c__16135__auto___23817);
var G__23821 = (0);
seq__23786_23806 = G__23818;
chunk__23787_23807 = G__23819;
count__23788_23808 = G__23820;
i__23789_23809 = G__23821;
continue;
} else {
var f_23822 = cljs.core.first.call(null,seq__23786_23816__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23822);

var G__23823 = cljs.core.next.call(null,seq__23786_23816__$1);
var G__23824 = null;
var G__23825 = (0);
var G__23826 = (0);
seq__23786_23806 = G__23823;
chunk__23787_23807 = G__23824;
count__23788_23808 = G__23825;
i__23789_23809 = G__23826;
continue;
}
} else {
}
}
break;
}

var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__,map__23784,map__23784__$1,opts,on_cssload){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__,map__23784,map__23784__$1,opts,on_cssload){
return (function (state_23796){
var state_val_23797 = (state_23796[(1)]);
if((state_val_23797 === (1))){
var inst_23790 = cljs.core.async.timeout.call(null,(100));
var state_23796__$1 = state_23796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23796__$1,(2),inst_23790);
} else {
if((state_val_23797 === (2))){
var inst_23792 = (state_23796[(2)]);
var inst_23793 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_23794 = on_cssload.call(null,inst_23793);
var state_23796__$1 = (function (){var statearr_23798 = state_23796;
(statearr_23798[(7)] = inst_23792);

return statearr_23798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23796__$1,inst_23794);
} else {
return null;
}
}
});})(c__18081__auto__,map__23784,map__23784__$1,opts,on_cssload))
;
return ((function (switch__18016__auto__,c__18081__auto__,map__23784,map__23784__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto____0 = (function (){
var statearr_23802 = [null,null,null,null,null,null,null,null];
(statearr_23802[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto__);

(statearr_23802[(1)] = (1));

return statearr_23802;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto____1 = (function (state_23796){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_23796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e23803){if((e23803 instanceof Object)){
var ex__18020__auto__ = e23803;
var statearr_23804_23827 = state_23796;
(statearr_23804_23827[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23828 = state_23796;
state_23796 = G__23828;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto__ = function(state_23796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto____1.call(this,state_23796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__,map__23784,map__23784__$1,opts,on_cssload))
})();
var state__18083__auto__ = (function (){var statearr_23805 = f__18082__auto__.call(null);
(statearr_23805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_23805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__,map__23784,map__23784__$1,opts,on_cssload))
);

return c__18081__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map