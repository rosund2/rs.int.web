// Compiled by ClojureScript 1.7.10 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23026_23040 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23027_23041 = null;
var count__23028_23042 = (0);
var i__23029_23043 = (0);
while(true){
if((i__23029_23043 < count__23028_23042)){
var f_23044 = cljs.core._nth.call(null,chunk__23027_23041,i__23029_23043);
cljs.core.println.call(null,"  ",f_23044);

var G__23045 = seq__23026_23040;
var G__23046 = chunk__23027_23041;
var G__23047 = count__23028_23042;
var G__23048 = (i__23029_23043 + (1));
seq__23026_23040 = G__23045;
chunk__23027_23041 = G__23046;
count__23028_23042 = G__23047;
i__23029_23043 = G__23048;
continue;
} else {
var temp__4425__auto___23049 = cljs.core.seq.call(null,seq__23026_23040);
if(temp__4425__auto___23049){
var seq__23026_23050__$1 = temp__4425__auto___23049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23026_23050__$1)){
var c__16135__auto___23051 = cljs.core.chunk_first.call(null,seq__23026_23050__$1);
var G__23052 = cljs.core.chunk_rest.call(null,seq__23026_23050__$1);
var G__23053 = c__16135__auto___23051;
var G__23054 = cljs.core.count.call(null,c__16135__auto___23051);
var G__23055 = (0);
seq__23026_23040 = G__23052;
chunk__23027_23041 = G__23053;
count__23028_23042 = G__23054;
i__23029_23043 = G__23055;
continue;
} else {
var f_23056 = cljs.core.first.call(null,seq__23026_23050__$1);
cljs.core.println.call(null,"  ",f_23056);

var G__23057 = cljs.core.next.call(null,seq__23026_23050__$1);
var G__23058 = null;
var G__23059 = (0);
var G__23060 = (0);
seq__23026_23040 = G__23057;
chunk__23027_23041 = G__23058;
count__23028_23042 = G__23059;
i__23029_23043 = G__23060;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23061 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__15351__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23061);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23061)))?cljs.core.second.call(null,arglists_23061):arglists_23061));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23031 = null;
var count__23032 = (0);
var i__23033 = (0);
while(true){
if((i__23033 < count__23032)){
var vec__23034 = cljs.core._nth.call(null,chunk__23031,i__23033);
var name = cljs.core.nth.call(null,vec__23034,(0),null);
var map__23035 = cljs.core.nth.call(null,vec__23034,(1),null);
var map__23035__$1 = ((((!((map__23035 == null)))?((((map__23035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23035):map__23035);
var doc = cljs.core.get.call(null,map__23035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23062 = seq__23030;
var G__23063 = chunk__23031;
var G__23064 = count__23032;
var G__23065 = (i__23033 + (1));
seq__23030 = G__23062;
chunk__23031 = G__23063;
count__23032 = G__23064;
i__23033 = G__23065;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23030);
if(temp__4425__auto__){
var seq__23030__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23030__$1)){
var c__16135__auto__ = cljs.core.chunk_first.call(null,seq__23030__$1);
var G__23066 = cljs.core.chunk_rest.call(null,seq__23030__$1);
var G__23067 = c__16135__auto__;
var G__23068 = cljs.core.count.call(null,c__16135__auto__);
var G__23069 = (0);
seq__23030 = G__23066;
chunk__23031 = G__23067;
count__23032 = G__23068;
i__23033 = G__23069;
continue;
} else {
var vec__23037 = cljs.core.first.call(null,seq__23030__$1);
var name = cljs.core.nth.call(null,vec__23037,(0),null);
var map__23038 = cljs.core.nth.call(null,vec__23037,(1),null);
var map__23038__$1 = ((((!((map__23038 == null)))?((((map__23038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23038):map__23038);
var doc = cljs.core.get.call(null,map__23038__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23038__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23070 = cljs.core.next.call(null,seq__23030__$1);
var G__23071 = null;
var G__23072 = (0);
var G__23073 = (0);
seq__23030 = G__23070;
chunk__23031 = G__23071;
count__23032 = G__23072;
i__23033 = G__23073;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map