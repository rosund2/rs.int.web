// Compiled by ClojureScript 1.7.10 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__16397__auto__ = [];
var len__16390__auto___22778 = arguments.length;
var i__16391__auto___22779 = (0);
while(true){
if((i__16391__auto___22779 < len__16390__auto___22778)){
args__16397__auto__.push((arguments[i__16391__auto___22779]));

var G__22780 = (i__16391__auto___22779 + (1));
i__16391__auto___22779 = G__22780;
continue;
} else {
}
break;
}

var argseq__16398__auto__ = ((((2) < args__16397__auto__.length))?(new cljs.core.IndexedSeq(args__16397__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16398__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__22770_22781 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__22771_22782 = null;
var count__22772_22783 = (0);
var i__22773_22784 = (0);
while(true){
if((i__22773_22784 < count__22772_22783)){
var k_22785 = cljs.core._nth.call(null,chunk__22771_22782,i__22773_22784);
e.setAttribute(cljs.core.name.call(null,k_22785),cljs.core.get.call(null,attrs,k_22785));

var G__22786 = seq__22770_22781;
var G__22787 = chunk__22771_22782;
var G__22788 = count__22772_22783;
var G__22789 = (i__22773_22784 + (1));
seq__22770_22781 = G__22786;
chunk__22771_22782 = G__22787;
count__22772_22783 = G__22788;
i__22773_22784 = G__22789;
continue;
} else {
var temp__4425__auto___22790 = cljs.core.seq.call(null,seq__22770_22781);
if(temp__4425__auto___22790){
var seq__22770_22791__$1 = temp__4425__auto___22790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22770_22791__$1)){
var c__16135__auto___22792 = cljs.core.chunk_first.call(null,seq__22770_22791__$1);
var G__22793 = cljs.core.chunk_rest.call(null,seq__22770_22791__$1);
var G__22794 = c__16135__auto___22792;
var G__22795 = cljs.core.count.call(null,c__16135__auto___22792);
var G__22796 = (0);
seq__22770_22781 = G__22793;
chunk__22771_22782 = G__22794;
count__22772_22783 = G__22795;
i__22773_22784 = G__22796;
continue;
} else {
var k_22797 = cljs.core.first.call(null,seq__22770_22791__$1);
e.setAttribute(cljs.core.name.call(null,k_22797),cljs.core.get.call(null,attrs,k_22797));

var G__22798 = cljs.core.next.call(null,seq__22770_22791__$1);
var G__22799 = null;
var G__22800 = (0);
var G__22801 = (0);
seq__22770_22781 = G__22798;
chunk__22771_22782 = G__22799;
count__22772_22783 = G__22800;
i__22773_22784 = G__22801;
continue;
}
} else {
}
}
break;
}

var seq__22774_22802 = cljs.core.seq.call(null,children);
var chunk__22775_22803 = null;
var count__22776_22804 = (0);
var i__22777_22805 = (0);
while(true){
if((i__22777_22805 < count__22776_22804)){
var ch_22806 = cljs.core._nth.call(null,chunk__22775_22803,i__22777_22805);
e.appendChild(ch_22806);

var G__22807 = seq__22774_22802;
var G__22808 = chunk__22775_22803;
var G__22809 = count__22776_22804;
var G__22810 = (i__22777_22805 + (1));
seq__22774_22802 = G__22807;
chunk__22775_22803 = G__22808;
count__22776_22804 = G__22809;
i__22777_22805 = G__22810;
continue;
} else {
var temp__4425__auto___22811 = cljs.core.seq.call(null,seq__22774_22802);
if(temp__4425__auto___22811){
var seq__22774_22812__$1 = temp__4425__auto___22811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22774_22812__$1)){
var c__16135__auto___22813 = cljs.core.chunk_first.call(null,seq__22774_22812__$1);
var G__22814 = cljs.core.chunk_rest.call(null,seq__22774_22812__$1);
var G__22815 = c__16135__auto___22813;
var G__22816 = cljs.core.count.call(null,c__16135__auto___22813);
var G__22817 = (0);
seq__22774_22802 = G__22814;
chunk__22775_22803 = G__22815;
count__22776_22804 = G__22816;
i__22777_22805 = G__22817;
continue;
} else {
var ch_22818 = cljs.core.first.call(null,seq__22774_22812__$1);
e.appendChild(ch_22818);

var G__22819 = cljs.core.next.call(null,seq__22774_22812__$1);
var G__22820 = null;
var G__22821 = (0);
var G__22822 = (0);
seq__22774_22802 = G__22819;
chunk__22775_22803 = G__22820;
count__22776_22804 = G__22821;
i__22777_22805 = G__22822;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq22767){
var G__22768 = cljs.core.first.call(null,seq22767);
var seq22767__$1 = cljs.core.next.call(null,seq22767);
var G__22769 = cljs.core.first.call(null,seq22767__$1);
var seq22767__$2 = cljs.core.next.call(null,seq22767__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__22768,G__22769,seq22767__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16245__auto__,prefer_table__16246__auto__,method_cache__16247__auto__,cached_hierarchy__16248__auto__,hierarchy__16249__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16245__auto__,prefer_table__16246__auto__,method_cache__16247__auto__,cached_hierarchy__16248__auto__,hierarchy__16249__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16249__auto__,method_table__16245__auto__,prefer_table__16246__auto__,method_cache__16247__auto__,cached_hierarchy__16248__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_22823 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_22823.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_22823.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_22823.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_22823);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__22824,st_map){
var map__22829 = p__22824;
var map__22829__$1 = ((((!((map__22829 == null)))?((((map__22829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22829):map__22829);
var container_el = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22829,map__22829__$1,container_el){
return (function (p__22831){
var vec__22832 = p__22831;
var k = cljs.core.nth.call(null,vec__22832,(0),null);
var v = cljs.core.nth.call(null,vec__22832,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22829,map__22829__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__22833,dom_str){
var map__22836 = p__22833;
var map__22836__$1 = ((((!((map__22836 == null)))?((((map__22836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22836):map__22836);
var c = map__22836__$1;
var content_area_el = cljs.core.get.call(null,map__22836__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__22838){
var map__22841 = p__22838;
var map__22841__$1 = ((((!((map__22841 == null)))?((((map__22841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22841):map__22841);
var content_area_el = cljs.core.get.call(null,map__22841__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_22884){
var state_val_22885 = (state_22884[(1)]);
if((state_val_22885 === (1))){
var inst_22869 = (state_22884[(7)]);
var inst_22869__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22870 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22871 = ["10px","10px","100%","68px","1.0"];
var inst_22872 = cljs.core.PersistentHashMap.fromArrays(inst_22870,inst_22871);
var inst_22873 = cljs.core.merge.call(null,inst_22872,style);
var inst_22874 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22869__$1,inst_22873);
var inst_22875 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22869__$1,msg);
var inst_22876 = cljs.core.async.timeout.call(null,(300));
var state_22884__$1 = (function (){var statearr_22886 = state_22884;
(statearr_22886[(7)] = inst_22869__$1);

(statearr_22886[(8)] = inst_22874);

(statearr_22886[(9)] = inst_22875);

return statearr_22886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22884__$1,(2),inst_22876);
} else {
if((state_val_22885 === (2))){
var inst_22869 = (state_22884[(7)]);
var inst_22878 = (state_22884[(2)]);
var inst_22879 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22880 = ["auto"];
var inst_22881 = cljs.core.PersistentHashMap.fromArrays(inst_22879,inst_22880);
var inst_22882 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22869,inst_22881);
var state_22884__$1 = (function (){var statearr_22887 = state_22884;
(statearr_22887[(10)] = inst_22878);

return statearr_22887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22884__$1,inst_22882);
} else {
return null;
}
}
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto____0 = (function (){
var statearr_22891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22891[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto__);

(statearr_22891[(1)] = (1));

return statearr_22891;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto____1 = (function (state_22884){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e22892){if((e22892 instanceof Object)){
var ex__18020__auto__ = e22892;
var statearr_22893_22895 = state_22884;
(statearr_22893_22895[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22896 = state_22884;
state_22884 = G__22896;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto__ = function(state_22884){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto____1.call(this,state_22884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_22894 = f__18082__auto__.call(null);
(statearr_22894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_22894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__22898 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__22898,(0),null);
var ln = cljs.core.nth.call(null,vec__22898,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__22901 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__22901,(0),null);
var file_line = cljs.core.nth.call(null,vec__22901,(1),null);
var file_column = cljs.core.nth.call(null,vec__22901,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22901,file_name,file_line,file_column){
return (function (p1__22899_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__22899_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__22901,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__15351__auto__ = file_line;
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
var and__15339__auto__ = cause;
if(cljs.core.truth_(and__15339__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__15339__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__22904 = figwheel.client.heads_up.ensure_container.call(null);
var map__22904__$1 = ((((!((map__22904 == null)))?((((map__22904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22904):map__22904);
var content_area_el = cljs.core.get.call(null,map__22904__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_22952){
var state_val_22953 = (state_22952[(1)]);
if((state_val_22953 === (1))){
var inst_22935 = (state_22952[(7)]);
var inst_22935__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22936 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22937 = ["0.0"];
var inst_22938 = cljs.core.PersistentHashMap.fromArrays(inst_22936,inst_22937);
var inst_22939 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22935__$1,inst_22938);
var inst_22940 = cljs.core.async.timeout.call(null,(300));
var state_22952__$1 = (function (){var statearr_22954 = state_22952;
(statearr_22954[(8)] = inst_22939);

(statearr_22954[(7)] = inst_22935__$1);

return statearr_22954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22952__$1,(2),inst_22940);
} else {
if((state_val_22953 === (2))){
var inst_22935 = (state_22952[(7)]);
var inst_22942 = (state_22952[(2)]);
var inst_22943 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22944 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22945 = cljs.core.PersistentHashMap.fromArrays(inst_22943,inst_22944);
var inst_22946 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22935,inst_22945);
var inst_22947 = cljs.core.async.timeout.call(null,(200));
var state_22952__$1 = (function (){var statearr_22955 = state_22952;
(statearr_22955[(9)] = inst_22942);

(statearr_22955[(10)] = inst_22946);

return statearr_22955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22952__$1,(3),inst_22947);
} else {
if((state_val_22953 === (3))){
var inst_22935 = (state_22952[(7)]);
var inst_22949 = (state_22952[(2)]);
var inst_22950 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22935,"");
var state_22952__$1 = (function (){var statearr_22956 = state_22952;
(statearr_22956[(11)] = inst_22949);

return statearr_22956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22952__$1,inst_22950);
} else {
return null;
}
}
}
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18017__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18017__auto____0 = (function (){
var statearr_22960 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22960[(0)] = figwheel$client$heads_up$clear_$_state_machine__18017__auto__);

(statearr_22960[(1)] = (1));

return statearr_22960;
});
var figwheel$client$heads_up$clear_$_state_machine__18017__auto____1 = (function (state_22952){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e22961){if((e22961 instanceof Object)){
var ex__18020__auto__ = e22961;
var statearr_22962_22964 = state_22952;
(statearr_22962_22964[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22965 = state_22952;
state_22952 = G__22965;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18017__auto__ = function(state_22952){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18017__auto____1.call(this,state_22952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18017__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18017__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_22963 = f__18082__auto__.call(null);
(statearr_22963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_22963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_22997){
var state_val_22998 = (state_22997[(1)]);
if((state_val_22998 === (1))){
var inst_22987 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22997__$1,(2),inst_22987);
} else {
if((state_val_22998 === (2))){
var inst_22989 = (state_22997[(2)]);
var inst_22990 = cljs.core.async.timeout.call(null,(400));
var state_22997__$1 = (function (){var statearr_22999 = state_22997;
(statearr_22999[(7)] = inst_22989);

return statearr_22999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22997__$1,(3),inst_22990);
} else {
if((state_val_22998 === (3))){
var inst_22992 = (state_22997[(2)]);
var inst_22993 = figwheel.client.heads_up.clear.call(null);
var state_22997__$1 = (function (){var statearr_23000 = state_22997;
(statearr_23000[(8)] = inst_22992);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22997__$1,(4),inst_22993);
} else {
if((state_val_22998 === (4))){
var inst_22995 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22997__$1,inst_22995);
} else {
return null;
}
}
}
}
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto____0 = (function (){
var statearr_23004 = [null,null,null,null,null,null,null,null,null];
(statearr_23004[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto__);

(statearr_23004[(1)] = (1));

return statearr_23004;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto____1 = (function (state_22997){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_22997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e23005){if((e23005 instanceof Object)){
var ex__18020__auto__ = e23005;
var statearr_23006_23008 = state_22997;
(statearr_23006_23008[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23009 = state_22997;
state_22997 = G__23009;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto__ = function(state_22997){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto____1.call(this,state_22997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_23007 = f__18082__auto__.call(null);
(statearr_23007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_23007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map