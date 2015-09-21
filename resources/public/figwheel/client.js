// Compiled by ClojureScript 1.7.10 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21977__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21978__i = 0, G__21978__a = new Array(arguments.length -  0);
while (G__21978__i < G__21978__a.length) {G__21978__a[G__21978__i] = arguments[G__21978__i + 0]; ++G__21978__i;}
  args = new cljs.core.IndexedSeq(G__21978__a,0);
} 
return G__21977__delegate.call(this,args);};
G__21977.cljs$lang$maxFixedArity = 0;
G__21977.cljs$lang$applyTo = (function (arglist__21979){
var args = cljs.core.seq(arglist__21979);
return G__21977__delegate(args);
});
G__21977.cljs$core$IFn$_invoke$arity$variadic = G__21977__delegate;
return G__21977;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21980){
var map__21983 = p__21980;
var map__21983__$1 = ((((!((map__21983 == null)))?((((map__21983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21983):map__21983);
var message = cljs.core.get.call(null,map__21983__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21983__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__15351__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__15339__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__15339__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__15339__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18081__auto___22113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___22113,ch){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___22113,ch){
return (function (state_22087){
var state_val_22088 = (state_22087[(1)]);
if((state_val_22088 === (7))){
var inst_22083 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22089_22114 = state_22087__$1;
(statearr_22089_22114[(2)] = inst_22083);

(statearr_22089_22114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (1))){
var state_22087__$1 = state_22087;
var statearr_22090_22115 = state_22087__$1;
(statearr_22090_22115[(2)] = null);

(statearr_22090_22115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (4))){
var inst_22051 = (state_22087[(7)]);
var inst_22051__$1 = (state_22087[(2)]);
var state_22087__$1 = (function (){var statearr_22091 = state_22087;
(statearr_22091[(7)] = inst_22051__$1);

return statearr_22091;
})();
if(cljs.core.truth_(inst_22051__$1)){
var statearr_22092_22116 = state_22087__$1;
(statearr_22092_22116[(1)] = (5));

} else {
var statearr_22093_22117 = state_22087__$1;
(statearr_22093_22117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (13))){
var state_22087__$1 = state_22087;
var statearr_22094_22118 = state_22087__$1;
(statearr_22094_22118[(2)] = null);

(statearr_22094_22118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (6))){
var state_22087__$1 = state_22087;
var statearr_22095_22119 = state_22087__$1;
(statearr_22095_22119[(2)] = null);

(statearr_22095_22119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (3))){
var inst_22085 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22087__$1,inst_22085);
} else {
if((state_val_22088 === (12))){
var inst_22058 = (state_22087[(8)]);
var inst_22071 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22058);
var inst_22072 = cljs.core.first.call(null,inst_22071);
var inst_22073 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22072);
var inst_22074 = console.warn("Figwheel: Not loading code with warnings - ",inst_22073);
var state_22087__$1 = state_22087;
var statearr_22096_22120 = state_22087__$1;
(statearr_22096_22120[(2)] = inst_22074);

(statearr_22096_22120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (2))){
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22087__$1,(4),ch);
} else {
if((state_val_22088 === (11))){
var inst_22067 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22097_22121 = state_22087__$1;
(statearr_22097_22121[(2)] = inst_22067);

(statearr_22097_22121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (9))){
var inst_22057 = (state_22087[(9)]);
var inst_22069 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22057,opts);
var state_22087__$1 = state_22087;
if(cljs.core.truth_(inst_22069)){
var statearr_22098_22122 = state_22087__$1;
(statearr_22098_22122[(1)] = (12));

} else {
var statearr_22099_22123 = state_22087__$1;
(statearr_22099_22123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (5))){
var inst_22051 = (state_22087[(7)]);
var inst_22057 = (state_22087[(9)]);
var inst_22053 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22054 = (new cljs.core.PersistentArrayMap(null,2,inst_22053,null));
var inst_22055 = (new cljs.core.PersistentHashSet(null,inst_22054,null));
var inst_22056 = figwheel.client.focus_msgs.call(null,inst_22055,inst_22051);
var inst_22057__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22056);
var inst_22058 = cljs.core.first.call(null,inst_22056);
var inst_22059 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22057__$1,opts);
var state_22087__$1 = (function (){var statearr_22100 = state_22087;
(statearr_22100[(8)] = inst_22058);

(statearr_22100[(9)] = inst_22057__$1);

return statearr_22100;
})();
if(cljs.core.truth_(inst_22059)){
var statearr_22101_22124 = state_22087__$1;
(statearr_22101_22124[(1)] = (8));

} else {
var statearr_22102_22125 = state_22087__$1;
(statearr_22102_22125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (14))){
var inst_22077 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22103_22126 = state_22087__$1;
(statearr_22103_22126[(2)] = inst_22077);

(statearr_22103_22126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (10))){
var inst_22079 = (state_22087[(2)]);
var state_22087__$1 = (function (){var statearr_22104 = state_22087;
(statearr_22104[(10)] = inst_22079);

return statearr_22104;
})();
var statearr_22105_22127 = state_22087__$1;
(statearr_22105_22127[(2)] = null);

(statearr_22105_22127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (8))){
var inst_22058 = (state_22087[(8)]);
var inst_22061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22062 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22058);
var inst_22063 = cljs.core.async.timeout.call(null,(1000));
var inst_22064 = [inst_22062,inst_22063];
var inst_22065 = (new cljs.core.PersistentVector(null,2,(5),inst_22061,inst_22064,null));
var state_22087__$1 = state_22087;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22087__$1,(11),inst_22065);
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
});})(c__18081__auto___22113,ch))
;
return ((function (switch__18016__auto__,c__18081__auto___22113,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18017__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18017__auto____0 = (function (){
var statearr_22109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22109[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18017__auto__);

(statearr_22109[(1)] = (1));

return statearr_22109;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18017__auto____1 = (function (state_22087){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e22110){if((e22110 instanceof Object)){
var ex__18020__auto__ = e22110;
var statearr_22111_22128 = state_22087;
(statearr_22111_22128[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22129 = state_22087;
state_22087 = G__22129;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18017__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18017__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18017__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18017__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___22113,ch))
})();
var state__18083__auto__ = (function (){var statearr_22112 = f__18082__auto__.call(null);
(statearr_22112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___22113);

return statearr_22112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___22113,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22130_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22130_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_22137 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22137){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22136 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22135,_STAR_print_newline_STAR_22136,base_path_22137){
return (function() { 
var G__22138__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22139__i = 0, G__22139__a = new Array(arguments.length -  0);
while (G__22139__i < G__22139__a.length) {G__22139__a[G__22139__i] = arguments[G__22139__i + 0]; ++G__22139__i;}
  args = new cljs.core.IndexedSeq(G__22139__a,0);
} 
return G__22138__delegate.call(this,args);};
G__22138.cljs$lang$maxFixedArity = 0;
G__22138.cljs$lang$applyTo = (function (arglist__22140){
var args = cljs.core.seq(arglist__22140);
return G__22138__delegate(args);
});
G__22138.cljs$core$IFn$_invoke$arity$variadic = G__22138__delegate;
return G__22138;
})()
;})(_STAR_print_fn_STAR_22135,_STAR_print_newline_STAR_22136,base_path_22137))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22136;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22135;
}}catch (e22134){if((e22134 instanceof Error)){
var e = e22134;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22137], null));
} else {
var e = e22134;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22137))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22141){
var map__22148 = p__22141;
var map__22148__$1 = ((((!((map__22148 == null)))?((((map__22148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22148):map__22148);
var opts = map__22148__$1;
var build_id = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22148,map__22148__$1,opts,build_id){
return (function (p__22150){
var vec__22151 = p__22150;
var map__22152 = cljs.core.nth.call(null,vec__22151,(0),null);
var map__22152__$1 = ((((!((map__22152 == null)))?((((map__22152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22152):map__22152);
var msg = map__22152__$1;
var msg_name = cljs.core.get.call(null,map__22152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22151,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22151,map__22152,map__22152__$1,msg,msg_name,_,map__22148,map__22148__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22151,map__22152,map__22152__$1,msg,msg_name,_,map__22148,map__22148__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22148,map__22148__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22158){
var vec__22159 = p__22158;
var map__22160 = cljs.core.nth.call(null,vec__22159,(0),null);
var map__22160__$1 = ((((!((map__22160 == null)))?((((map__22160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22160):map__22160);
var msg = map__22160__$1;
var msg_name = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22159,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22162){
var map__22172 = p__22162;
var map__22172__$1 = ((((!((map__22172 == null)))?((((map__22172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22172):map__22172);
var on_compile_warning = cljs.core.get.call(null,map__22172__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22172__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22172,map__22172__$1,on_compile_warning,on_compile_fail){
return (function (p__22174){
var vec__22175 = p__22174;
var map__22176 = cljs.core.nth.call(null,vec__22175,(0),null);
var map__22176__$1 = ((((!((map__22176 == null)))?((((map__22176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22176):map__22176);
var msg = map__22176__$1;
var msg_name = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22175,(1));
var pred__22178 = cljs.core._EQ_;
var expr__22179 = msg_name;
if(cljs.core.truth_(pred__22178.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22179))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22178.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22179))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22172,map__22172__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__,msg_hist,msg_names,msg){
return (function (state_22380){
var state_val_22381 = (state_22380[(1)]);
if((state_val_22381 === (7))){
var inst_22314 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22382_22423 = state_22380__$1;
(statearr_22382_22423[(2)] = inst_22314);

(statearr_22382_22423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (20))){
var inst_22342 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22342)){
var statearr_22383_22424 = state_22380__$1;
(statearr_22383_22424[(1)] = (22));

} else {
var statearr_22384_22425 = state_22380__$1;
(statearr_22384_22425[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (27))){
var inst_22354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22355 = figwheel.client.heads_up.display_warning.call(null,inst_22354);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(30),inst_22355);
} else {
if((state_val_22381 === (1))){
var inst_22302 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22302)){
var statearr_22385_22426 = state_22380__$1;
(statearr_22385_22426[(1)] = (2));

} else {
var statearr_22386_22427 = state_22380__$1;
(statearr_22386_22427[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (24))){
var inst_22370 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22387_22428 = state_22380__$1;
(statearr_22387_22428[(2)] = inst_22370);

(statearr_22387_22428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (4))){
var inst_22378 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22380__$1,inst_22378);
} else {
if((state_val_22381 === (15))){
var inst_22330 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22331 = figwheel.client.format_messages.call(null,inst_22330);
var inst_22332 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22333 = figwheel.client.heads_up.display_error.call(null,inst_22331,inst_22332);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(18),inst_22333);
} else {
if((state_val_22381 === (21))){
var inst_22372 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22388_22429 = state_22380__$1;
(statearr_22388_22429[(2)] = inst_22372);

(statearr_22388_22429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (31))){
var inst_22361 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(34),inst_22361);
} else {
if((state_val_22381 === (32))){
var state_22380__$1 = state_22380;
var statearr_22389_22430 = state_22380__$1;
(statearr_22389_22430[(2)] = null);

(statearr_22389_22430[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (33))){
var inst_22366 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22390_22431 = state_22380__$1;
(statearr_22390_22431[(2)] = inst_22366);

(statearr_22390_22431[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (13))){
var inst_22320 = (state_22380[(2)]);
var inst_22321 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22322 = figwheel.client.format_messages.call(null,inst_22321);
var inst_22323 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22324 = figwheel.client.heads_up.display_error.call(null,inst_22322,inst_22323);
var state_22380__$1 = (function (){var statearr_22391 = state_22380;
(statearr_22391[(7)] = inst_22320);

return statearr_22391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(14),inst_22324);
} else {
if((state_val_22381 === (22))){
var inst_22344 = figwheel.client.heads_up.clear.call(null);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(25),inst_22344);
} else {
if((state_val_22381 === (29))){
var inst_22368 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22392_22432 = state_22380__$1;
(statearr_22392_22432[(2)] = inst_22368);

(statearr_22392_22432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (6))){
var inst_22310 = figwheel.client.heads_up.clear.call(null);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(9),inst_22310);
} else {
if((state_val_22381 === (28))){
var inst_22359 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22359)){
var statearr_22393_22433 = state_22380__$1;
(statearr_22393_22433[(1)] = (31));

} else {
var statearr_22394_22434 = state_22380__$1;
(statearr_22394_22434[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (25))){
var inst_22346 = (state_22380[(2)]);
var inst_22347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22348 = figwheel.client.heads_up.display_warning.call(null,inst_22347);
var state_22380__$1 = (function (){var statearr_22395 = state_22380;
(statearr_22395[(8)] = inst_22346);

return statearr_22395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(26),inst_22348);
} else {
if((state_val_22381 === (34))){
var inst_22363 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22396_22435 = state_22380__$1;
(statearr_22396_22435[(2)] = inst_22363);

(statearr_22396_22435[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (17))){
var inst_22374 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22397_22436 = state_22380__$1;
(statearr_22397_22436[(2)] = inst_22374);

(statearr_22397_22436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (3))){
var inst_22316 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22316)){
var statearr_22398_22437 = state_22380__$1;
(statearr_22398_22437[(1)] = (10));

} else {
var statearr_22399_22438 = state_22380__$1;
(statearr_22399_22438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (12))){
var inst_22376 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22400_22439 = state_22380__$1;
(statearr_22400_22439[(2)] = inst_22376);

(statearr_22400_22439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (2))){
var inst_22304 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22304)){
var statearr_22401_22440 = state_22380__$1;
(statearr_22401_22440[(1)] = (5));

} else {
var statearr_22402_22441 = state_22380__$1;
(statearr_22402_22441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (23))){
var inst_22352 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22352)){
var statearr_22403_22442 = state_22380__$1;
(statearr_22403_22442[(1)] = (27));

} else {
var statearr_22404_22443 = state_22380__$1;
(statearr_22404_22443[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (19))){
var inst_22339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22340 = figwheel.client.heads_up.append_message.call(null,inst_22339);
var state_22380__$1 = state_22380;
var statearr_22405_22444 = state_22380__$1;
(statearr_22405_22444[(2)] = inst_22340);

(statearr_22405_22444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (11))){
var inst_22328 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22328)){
var statearr_22406_22445 = state_22380__$1;
(statearr_22406_22445[(1)] = (15));

} else {
var statearr_22407_22446 = state_22380__$1;
(statearr_22407_22446[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (9))){
var inst_22312 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22408_22447 = state_22380__$1;
(statearr_22408_22447[(2)] = inst_22312);

(statearr_22408_22447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (5))){
var inst_22306 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(8),inst_22306);
} else {
if((state_val_22381 === (14))){
var inst_22326 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22409_22448 = state_22380__$1;
(statearr_22409_22448[(2)] = inst_22326);

(statearr_22409_22448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (26))){
var inst_22350 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22410_22449 = state_22380__$1;
(statearr_22410_22449[(2)] = inst_22350);

(statearr_22410_22449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (16))){
var inst_22337 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22380__$1 = state_22380;
if(cljs.core.truth_(inst_22337)){
var statearr_22411_22450 = state_22380__$1;
(statearr_22411_22450[(1)] = (19));

} else {
var statearr_22412_22451 = state_22380__$1;
(statearr_22412_22451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (30))){
var inst_22357 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22413_22452 = state_22380__$1;
(statearr_22413_22452[(2)] = inst_22357);

(statearr_22413_22452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (10))){
var inst_22318 = figwheel.client.heads_up.clear.call(null);
var state_22380__$1 = state_22380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22380__$1,(13),inst_22318);
} else {
if((state_val_22381 === (18))){
var inst_22335 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22414_22453 = state_22380__$1;
(statearr_22414_22453[(2)] = inst_22335);

(statearr_22414_22453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22381 === (8))){
var inst_22308 = (state_22380[(2)]);
var state_22380__$1 = state_22380;
var statearr_22415_22454 = state_22380__$1;
(statearr_22415_22454[(2)] = inst_22308);

(statearr_22415_22454[(1)] = (7));


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
});})(c__18081__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18016__auto__,c__18081__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto____0 = (function (){
var statearr_22419 = [null,null,null,null,null,null,null,null,null];
(statearr_22419[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto__);

(statearr_22419[(1)] = (1));

return statearr_22419;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto____1 = (function (state_22380){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e22420){if((e22420 instanceof Object)){
var ex__18020__auto__ = e22420;
var statearr_22421_22455 = state_22380;
(statearr_22421_22455[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22456 = state_22380;
state_22380 = G__22456;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto__ = function(state_22380){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto____1.call(this,state_22380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__,msg_hist,msg_names,msg))
})();
var state__18083__auto__ = (function (){var statearr_22422 = f__18082__auto__.call(null);
(statearr_22422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_22422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__,msg_hist,msg_names,msg))
);

return c__18081__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18081__auto___22519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___22519,ch){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___22519,ch){
return (function (state_22502){
var state_val_22503 = (state_22502[(1)]);
if((state_val_22503 === (1))){
var state_22502__$1 = state_22502;
var statearr_22504_22520 = state_22502__$1;
(statearr_22504_22520[(2)] = null);

(statearr_22504_22520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (2))){
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22502__$1,(4),ch);
} else {
if((state_val_22503 === (3))){
var inst_22500 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22502__$1,inst_22500);
} else {
if((state_val_22503 === (4))){
var inst_22490 = (state_22502[(7)]);
var inst_22490__$1 = (state_22502[(2)]);
var state_22502__$1 = (function (){var statearr_22505 = state_22502;
(statearr_22505[(7)] = inst_22490__$1);

return statearr_22505;
})();
if(cljs.core.truth_(inst_22490__$1)){
var statearr_22506_22521 = state_22502__$1;
(statearr_22506_22521[(1)] = (5));

} else {
var statearr_22507_22522 = state_22502__$1;
(statearr_22507_22522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (5))){
var inst_22490 = (state_22502[(7)]);
var inst_22492 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22490);
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22502__$1,(8),inst_22492);
} else {
if((state_val_22503 === (6))){
var state_22502__$1 = state_22502;
var statearr_22508_22523 = state_22502__$1;
(statearr_22508_22523[(2)] = null);

(statearr_22508_22523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (7))){
var inst_22498 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22509_22524 = state_22502__$1;
(statearr_22509_22524[(2)] = inst_22498);

(statearr_22509_22524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (8))){
var inst_22494 = (state_22502[(2)]);
var state_22502__$1 = (function (){var statearr_22510 = state_22502;
(statearr_22510[(8)] = inst_22494);

return statearr_22510;
})();
var statearr_22511_22525 = state_22502__$1;
(statearr_22511_22525[(2)] = null);

(statearr_22511_22525[(1)] = (2));


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
});})(c__18081__auto___22519,ch))
;
return ((function (switch__18016__auto__,c__18081__auto___22519,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18017__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18017__auto____0 = (function (){
var statearr_22515 = [null,null,null,null,null,null,null,null,null];
(statearr_22515[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18017__auto__);

(statearr_22515[(1)] = (1));

return statearr_22515;
});
var figwheel$client$heads_up_plugin_$_state_machine__18017__auto____1 = (function (state_22502){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e22516){if((e22516 instanceof Object)){
var ex__18020__auto__ = e22516;
var statearr_22517_22526 = state_22502;
(statearr_22517_22526[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22527 = state_22502;
state_22502 = G__22527;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18017__auto__ = function(state_22502){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18017__auto____1.call(this,state_22502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18017__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18017__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___22519,ch))
})();
var state__18083__auto__ = (function (){var statearr_22518 = f__18082__auto__.call(null);
(statearr_22518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___22519);

return statearr_22518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___22519,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_22548){
var state_val_22549 = (state_22548[(1)]);
if((state_val_22549 === (1))){
var inst_22543 = cljs.core.async.timeout.call(null,(3000));
var state_22548__$1 = state_22548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22548__$1,(2),inst_22543);
} else {
if((state_val_22549 === (2))){
var inst_22545 = (state_22548[(2)]);
var inst_22546 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22548__$1 = (function (){var statearr_22550 = state_22548;
(statearr_22550[(7)] = inst_22545);

return statearr_22550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22548__$1,inst_22546);
} else {
return null;
}
}
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18017__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18017__auto____0 = (function (){
var statearr_22554 = [null,null,null,null,null,null,null,null];
(statearr_22554[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18017__auto__);

(statearr_22554[(1)] = (1));

return statearr_22554;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18017__auto____1 = (function (state_22548){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e22555){if((e22555 instanceof Object)){
var ex__18020__auto__ = e22555;
var statearr_22556_22558 = state_22548;
(statearr_22556_22558[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22559 = state_22548;
state_22548 = G__22559;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18017__auto__ = function(state_22548){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18017__auto____1.call(this,state_22548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18017__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18017__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_22557 = f__18082__auto__.call(null);
(statearr_22557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_22557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22560){
var map__22567 = p__22560;
var map__22567__$1 = ((((!((map__22567 == null)))?((((map__22567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22567):map__22567);
var ed = map__22567__$1;
var formatted_exception = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22569_22573 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22570_22574 = null;
var count__22571_22575 = (0);
var i__22572_22576 = (0);
while(true){
if((i__22572_22576 < count__22571_22575)){
var msg_22577 = cljs.core._nth.call(null,chunk__22570_22574,i__22572_22576);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22577);

var G__22578 = seq__22569_22573;
var G__22579 = chunk__22570_22574;
var G__22580 = count__22571_22575;
var G__22581 = (i__22572_22576 + (1));
seq__22569_22573 = G__22578;
chunk__22570_22574 = G__22579;
count__22571_22575 = G__22580;
i__22572_22576 = G__22581;
continue;
} else {
var temp__4425__auto___22582 = cljs.core.seq.call(null,seq__22569_22573);
if(temp__4425__auto___22582){
var seq__22569_22583__$1 = temp__4425__auto___22582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22569_22583__$1)){
var c__16135__auto___22584 = cljs.core.chunk_first.call(null,seq__22569_22583__$1);
var G__22585 = cljs.core.chunk_rest.call(null,seq__22569_22583__$1);
var G__22586 = c__16135__auto___22584;
var G__22587 = cljs.core.count.call(null,c__16135__auto___22584);
var G__22588 = (0);
seq__22569_22573 = G__22585;
chunk__22570_22574 = G__22586;
count__22571_22575 = G__22587;
i__22572_22576 = G__22588;
continue;
} else {
var msg_22589 = cljs.core.first.call(null,seq__22569_22583__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22589);

var G__22590 = cljs.core.next.call(null,seq__22569_22583__$1);
var G__22591 = null;
var G__22592 = (0);
var G__22593 = (0);
seq__22569_22573 = G__22590;
chunk__22570_22574 = G__22591;
count__22571_22575 = G__22592;
i__22572_22576 = G__22593;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22594){
var map__22597 = p__22594;
var map__22597__$1 = ((((!((map__22597 == null)))?((((map__22597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22597):map__22597);
var w = map__22597__$1;
var message = cljs.core.get.call(null,map__22597__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__15339__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__15339__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__15339__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__22605 = cljs.core.seq.call(null,plugins);
var chunk__22606 = null;
var count__22607 = (0);
var i__22608 = (0);
while(true){
if((i__22608 < count__22607)){
var vec__22609 = cljs.core._nth.call(null,chunk__22606,i__22608);
var k = cljs.core.nth.call(null,vec__22609,(0),null);
var plugin = cljs.core.nth.call(null,vec__22609,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22611 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22605,chunk__22606,count__22607,i__22608,pl_22611,vec__22609,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22611.call(null,msg_hist);
});})(seq__22605,chunk__22606,count__22607,i__22608,pl_22611,vec__22609,k,plugin))
);
} else {
}

var G__22612 = seq__22605;
var G__22613 = chunk__22606;
var G__22614 = count__22607;
var G__22615 = (i__22608 + (1));
seq__22605 = G__22612;
chunk__22606 = G__22613;
count__22607 = G__22614;
i__22608 = G__22615;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22605);
if(temp__4425__auto__){
var seq__22605__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22605__$1)){
var c__16135__auto__ = cljs.core.chunk_first.call(null,seq__22605__$1);
var G__22616 = cljs.core.chunk_rest.call(null,seq__22605__$1);
var G__22617 = c__16135__auto__;
var G__22618 = cljs.core.count.call(null,c__16135__auto__);
var G__22619 = (0);
seq__22605 = G__22616;
chunk__22606 = G__22617;
count__22607 = G__22618;
i__22608 = G__22619;
continue;
} else {
var vec__22610 = cljs.core.first.call(null,seq__22605__$1);
var k = cljs.core.nth.call(null,vec__22610,(0),null);
var plugin = cljs.core.nth.call(null,vec__22610,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22620 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22605,chunk__22606,count__22607,i__22608,pl_22620,vec__22610,k,plugin,seq__22605__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22620.call(null,msg_hist);
});})(seq__22605,chunk__22606,count__22607,i__22608,pl_22620,vec__22610,k,plugin,seq__22605__$1,temp__4425__auto__))
);
} else {
}

var G__22621 = cljs.core.next.call(null,seq__22605__$1);
var G__22622 = null;
var G__22623 = (0);
var G__22624 = (0);
seq__22605 = G__22621;
chunk__22606 = G__22622;
count__22607 = G__22623;
i__22608 = G__22624;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args22625 = [];
var len__16390__auto___22628 = arguments.length;
var i__16391__auto___22629 = (0);
while(true){
if((i__16391__auto___22629 < len__16390__auto___22628)){
args22625.push((arguments[i__16391__auto___22629]));

var G__22630 = (i__16391__auto___22629 + (1));
i__16391__auto___22629 = G__22630;
continue;
} else {
}
break;
}

var G__22627 = args22625.length;
switch (G__22627) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22625.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__16397__auto__ = [];
var len__16390__auto___22636 = arguments.length;
var i__16391__auto___22637 = (0);
while(true){
if((i__16391__auto___22637 < len__16390__auto___22636)){
args__16397__auto__.push((arguments[i__16391__auto___22637]));

var G__22638 = (i__16391__auto___22637 + (1));
i__16391__auto___22637 = G__22638;
continue;
} else {
}
break;
}

var argseq__16398__auto__ = ((((0) < args__16397__auto__.length))?(new cljs.core.IndexedSeq(args__16397__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__16398__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22633){
var map__22634 = p__22633;
var map__22634__$1 = ((((!((map__22634 == null)))?((((map__22634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22634):map__22634);
var opts = map__22634__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22632){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22632));
});

//# sourceMappingURL=client.js.map