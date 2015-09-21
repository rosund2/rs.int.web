// Compiled by ClojureScript 1.7.10 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t23895 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23895 = (function (fn_handler,f,meta23896){
this.fn_handler = fn_handler;
this.f = f;
this.meta23896 = meta23896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23897,meta23896__$1){
var self__ = this;
var _23897__$1 = this;
return (new cljs.core.async.t23895(self__.fn_handler,self__.f,meta23896__$1));
});

cljs.core.async.t23895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23897){
var self__ = this;
var _23897__$1 = this;
return self__.meta23896;
});

cljs.core.async.t23895.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta23896","meta23896",-1439837498,null)], null);
});

cljs.core.async.t23895.cljs$lang$type = true;

cljs.core.async.t23895.cljs$lang$ctorStr = "cljs.core.async/t23895";

cljs.core.async.t23895.cljs$lang$ctorPrWriter = (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t23895");
});

cljs.core.async.__GT_t23895 = (function cljs$core$async$fn_handler_$___GT_t23895(fn_handler__$1,f__$1,meta23896){
return (new cljs.core.async.t23895(fn_handler__$1,f__$1,meta23896));
});

}

return (new cljs.core.async.t23895(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args23900 = [];
var len__16390__auto___23903 = arguments.length;
var i__16391__auto___23904 = (0);
while(true){
if((i__16391__auto___23904 < len__16390__auto___23903)){
args23900.push((arguments[i__16391__auto___23904]));

var G__23905 = (i__16391__auto___23904 + (1));
i__16391__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var G__23902 = args23900.length;
switch (G__23902) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23900.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args23907 = [];
var len__16390__auto___23910 = arguments.length;
var i__16391__auto___23911 = (0);
while(true){
if((i__16391__auto___23911 < len__16390__auto___23910)){
args23907.push((arguments[i__16391__auto___23911]));

var G__23912 = (i__16391__auto___23911 + (1));
i__16391__auto___23911 = G__23912;
continue;
} else {
}
break;
}

var G__23909 = args23907.length;
switch (G__23909) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23907.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23914 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23914);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23914,ret){
return (function (){
return fn1.call(null,val_23914);
});})(val_23914,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args23915 = [];
var len__16390__auto___23918 = arguments.length;
var i__16391__auto___23919 = (0);
while(true){
if((i__16391__auto___23919 < len__16390__auto___23918)){
args23915.push((arguments[i__16391__auto___23919]));

var G__23920 = (i__16391__auto___23919 + (1));
i__16391__auto___23919 = G__23920;
continue;
} else {
}
break;
}

var G__23917 = args23915.length;
switch (G__23917) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23915.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16235__auto___23922 = n;
var x_23923 = (0);
while(true){
if((x_23923 < n__16235__auto___23922)){
(a[x_23923] = (0));

var G__23924 = (x_23923 + (1));
x_23923 = G__23924;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23925 = (i + (1));
i = G__23925;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t23929 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23929 = (function (alt_flag,flag,meta23930){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23930 = meta23930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23931,meta23930__$1){
var self__ = this;
var _23931__$1 = this;
return (new cljs.core.async.t23929(self__.alt_flag,self__.flag,meta23930__$1));
});})(flag))
;

cljs.core.async.t23929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23931){
var self__ = this;
var _23931__$1 = this;
return self__.meta23930;
});})(flag))
;

cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t23929.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23930","meta23930",1062561590,null)], null);
});})(flag))
;

cljs.core.async.t23929.cljs$lang$type = true;

cljs.core.async.t23929.cljs$lang$ctorStr = "cljs.core.async/t23929";

cljs.core.async.t23929.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t23929");
});})(flag))
;

cljs.core.async.__GT_t23929 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t23929(alt_flag__$1,flag__$1,meta23930){
return (new cljs.core.async.t23929(alt_flag__$1,flag__$1,meta23930));
});})(flag))
;

}

return (new cljs.core.async.t23929(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t23935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23935 = (function (alt_handler,flag,cb,meta23936){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23936 = meta23936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23937,meta23936__$1){
var self__ = this;
var _23937__$1 = this;
return (new cljs.core.async.t23935(self__.alt_handler,self__.flag,self__.cb,meta23936__$1));
});

cljs.core.async.t23935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23937){
var self__ = this;
var _23937__$1 = this;
return self__.meta23936;
});

cljs.core.async.t23935.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t23935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t23935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23936","meta23936",-1183880523,null)], null);
});

cljs.core.async.t23935.cljs$lang$type = true;

cljs.core.async.t23935.cljs$lang$ctorStr = "cljs.core.async/t23935";

cljs.core.async.t23935.cljs$lang$ctorPrWriter = (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t23935");
});

cljs.core.async.__GT_t23935 = (function cljs$core$async$alt_handler_$___GT_t23935(alt_handler__$1,flag__$1,cb__$1,meta23936){
return (new cljs.core.async.t23935(alt_handler__$1,flag__$1,cb__$1,meta23936));
});

}

return (new cljs.core.async.t23935(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23938_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23938_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23939_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23939_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15351__auto__ = wport;
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23940 = (i + (1));
i = G__23940;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15351__auto__ = ret;
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__15339__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__15339__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__15339__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__16397__auto__ = [];
var len__16390__auto___23946 = arguments.length;
var i__16391__auto___23947 = (0);
while(true){
if((i__16391__auto___23947 < len__16390__auto___23946)){
args__16397__auto__.push((arguments[i__16391__auto___23947]));

var G__23948 = (i__16391__auto___23947 + (1));
i__16391__auto___23947 = G__23948;
continue;
} else {
}
break;
}

var argseq__16398__auto__ = ((((1) < args__16397__auto__.length))?(new cljs.core.IndexedSeq(args__16397__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16398__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23943){
var map__23944 = p__23943;
var map__23944__$1 = ((((!((map__23944 == null)))?((((map__23944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23944):map__23944);
var opts = map__23944__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23941){
var G__23942 = cljs.core.first.call(null,seq23941);
var seq23941__$1 = cljs.core.next.call(null,seq23941);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23942,seq23941__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args23949 = [];
var len__16390__auto___23999 = arguments.length;
var i__16391__auto___24000 = (0);
while(true){
if((i__16391__auto___24000 < len__16390__auto___23999)){
args23949.push((arguments[i__16391__auto___24000]));

var G__24001 = (i__16391__auto___24000 + (1));
i__16391__auto___24000 = G__24001;
continue;
} else {
}
break;
}

var G__23951 = args23949.length;
switch (G__23951) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23949.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18081__auto___24003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___24003){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___24003){
return (function (state_23975){
var state_val_23976 = (state_23975[(1)]);
if((state_val_23976 === (7))){
var inst_23971 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23977_24004 = state_23975__$1;
(statearr_23977_24004[(2)] = inst_23971);

(statearr_23977_24004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (1))){
var state_23975__$1 = state_23975;
var statearr_23978_24005 = state_23975__$1;
(statearr_23978_24005[(2)] = null);

(statearr_23978_24005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (4))){
var inst_23954 = (state_23975[(7)]);
var inst_23954__$1 = (state_23975[(2)]);
var inst_23955 = (inst_23954__$1 == null);
var state_23975__$1 = (function (){var statearr_23979 = state_23975;
(statearr_23979[(7)] = inst_23954__$1);

return statearr_23979;
})();
if(cljs.core.truth_(inst_23955)){
var statearr_23980_24006 = state_23975__$1;
(statearr_23980_24006[(1)] = (5));

} else {
var statearr_23981_24007 = state_23975__$1;
(statearr_23981_24007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (13))){
var state_23975__$1 = state_23975;
var statearr_23982_24008 = state_23975__$1;
(statearr_23982_24008[(2)] = null);

(statearr_23982_24008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (6))){
var inst_23954 = (state_23975[(7)]);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(11),to,inst_23954);
} else {
if((state_val_23976 === (3))){
var inst_23973 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23975__$1,inst_23973);
} else {
if((state_val_23976 === (12))){
var state_23975__$1 = state_23975;
var statearr_23983_24009 = state_23975__$1;
(statearr_23983_24009[(2)] = null);

(statearr_23983_24009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (2))){
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(4),from);
} else {
if((state_val_23976 === (11))){
var inst_23964 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23964)){
var statearr_23984_24010 = state_23975__$1;
(statearr_23984_24010[(1)] = (12));

} else {
var statearr_23985_24011 = state_23975__$1;
(statearr_23985_24011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (9))){
var state_23975__$1 = state_23975;
var statearr_23986_24012 = state_23975__$1;
(statearr_23986_24012[(2)] = null);

(statearr_23986_24012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (5))){
var state_23975__$1 = state_23975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23987_24013 = state_23975__$1;
(statearr_23987_24013[(1)] = (8));

} else {
var statearr_23988_24014 = state_23975__$1;
(statearr_23988_24014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (14))){
var inst_23969 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23989_24015 = state_23975__$1;
(statearr_23989_24015[(2)] = inst_23969);

(statearr_23989_24015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (10))){
var inst_23961 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23990_24016 = state_23975__$1;
(statearr_23990_24016[(2)] = inst_23961);

(statearr_23990_24016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (8))){
var inst_23958 = cljs.core.async.close_BANG_.call(null,to);
var state_23975__$1 = state_23975;
var statearr_23991_24017 = state_23975__$1;
(statearr_23991_24017[(2)] = inst_23958);

(statearr_23991_24017[(1)] = (10));


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
});})(c__18081__auto___24003))
;
return ((function (switch__18016__auto__,c__18081__auto___24003){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_23995 = [null,null,null,null,null,null,null,null];
(statearr_23995[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_23995[(1)] = (1));

return statearr_23995;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_23975){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_23975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e23996){if((e23996 instanceof Object)){
var ex__18020__auto__ = e23996;
var statearr_23997_24018 = state_23975;
(statearr_23997_24018[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24019 = state_23975;
state_23975 = G__24019;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___24003))
})();
var state__18083__auto__ = (function (){var statearr_23998 = f__18082__auto__.call(null);
(statearr_23998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___24003);

return statearr_23998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___24003))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24203){
var vec__24204 = p__24203;
var v = cljs.core.nth.call(null,vec__24204,(0),null);
var p = cljs.core.nth.call(null,vec__24204,(1),null);
var job = vec__24204;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18081__auto___24386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___24386,res,vec__24204,v,p,job,jobs,results){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___24386,res,vec__24204,v,p,job,jobs,results){
return (function (state_24209){
var state_val_24210 = (state_24209[(1)]);
if((state_val_24210 === (1))){
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24209__$1,(2),res,v);
} else {
if((state_val_24210 === (2))){
var inst_24206 = (state_24209[(2)]);
var inst_24207 = cljs.core.async.close_BANG_.call(null,res);
var state_24209__$1 = (function (){var statearr_24211 = state_24209;
(statearr_24211[(7)] = inst_24206);

return statearr_24211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24209__$1,inst_24207);
} else {
return null;
}
}
});})(c__18081__auto___24386,res,vec__24204,v,p,job,jobs,results))
;
return ((function (switch__18016__auto__,c__18081__auto___24386,res,vec__24204,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0 = (function (){
var statearr_24215 = [null,null,null,null,null,null,null,null];
(statearr_24215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__);

(statearr_24215[(1)] = (1));

return statearr_24215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1 = (function (state_24209){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24216){if((e24216 instanceof Object)){
var ex__18020__auto__ = e24216;
var statearr_24217_24387 = state_24209;
(statearr_24217_24387[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24388 = state_24209;
state_24209 = G__24388;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = function(state_24209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1.call(this,state_24209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___24386,res,vec__24204,v,p,job,jobs,results))
})();
var state__18083__auto__ = (function (){var statearr_24218 = f__18082__auto__.call(null);
(statearr_24218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___24386);

return statearr_24218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___24386,res,vec__24204,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24219){
var vec__24220 = p__24219;
var v = cljs.core.nth.call(null,vec__24220,(0),null);
var p = cljs.core.nth.call(null,vec__24220,(1),null);
var job = vec__24220;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16235__auto___24389 = n;
var __24390 = (0);
while(true){
if((__24390 < n__16235__auto___24389)){
var G__24221_24391 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24221_24391) {
case "compute":
var c__18081__auto___24393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24390,c__18081__auto___24393,G__24221_24391,n__16235__auto___24389,jobs,results,process,async){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (__24390,c__18081__auto___24393,G__24221_24391,n__16235__auto___24389,jobs,results,process,async){
return (function (state_24234){
var state_val_24235 = (state_24234[(1)]);
if((state_val_24235 === (1))){
var state_24234__$1 = state_24234;
var statearr_24236_24394 = state_24234__$1;
(statearr_24236_24394[(2)] = null);

(statearr_24236_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24235 === (2))){
var state_24234__$1 = state_24234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24234__$1,(4),jobs);
} else {
if((state_val_24235 === (3))){
var inst_24232 = (state_24234[(2)]);
var state_24234__$1 = state_24234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24234__$1,inst_24232);
} else {
if((state_val_24235 === (4))){
var inst_24224 = (state_24234[(2)]);
var inst_24225 = process.call(null,inst_24224);
var state_24234__$1 = state_24234;
if(cljs.core.truth_(inst_24225)){
var statearr_24237_24395 = state_24234__$1;
(statearr_24237_24395[(1)] = (5));

} else {
var statearr_24238_24396 = state_24234__$1;
(statearr_24238_24396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24235 === (5))){
var state_24234__$1 = state_24234;
var statearr_24239_24397 = state_24234__$1;
(statearr_24239_24397[(2)] = null);

(statearr_24239_24397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24235 === (6))){
var state_24234__$1 = state_24234;
var statearr_24240_24398 = state_24234__$1;
(statearr_24240_24398[(2)] = null);

(statearr_24240_24398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24235 === (7))){
var inst_24230 = (state_24234[(2)]);
var state_24234__$1 = state_24234;
var statearr_24241_24399 = state_24234__$1;
(statearr_24241_24399[(2)] = inst_24230);

(statearr_24241_24399[(1)] = (3));


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
});})(__24390,c__18081__auto___24393,G__24221_24391,n__16235__auto___24389,jobs,results,process,async))
;
return ((function (__24390,switch__18016__auto__,c__18081__auto___24393,G__24221_24391,n__16235__auto___24389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0 = (function (){
var statearr_24245 = [null,null,null,null,null,null,null];
(statearr_24245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__);

(statearr_24245[(1)] = (1));

return statearr_24245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1 = (function (state_24234){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24246){if((e24246 instanceof Object)){
var ex__18020__auto__ = e24246;
var statearr_24247_24400 = state_24234;
(statearr_24247_24400[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24401 = state_24234;
state_24234 = G__24401;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = function(state_24234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1.call(this,state_24234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__;
})()
;})(__24390,switch__18016__auto__,c__18081__auto___24393,G__24221_24391,n__16235__auto___24389,jobs,results,process,async))
})();
var state__18083__auto__ = (function (){var statearr_24248 = f__18082__auto__.call(null);
(statearr_24248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___24393);

return statearr_24248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(__24390,c__18081__auto___24393,G__24221_24391,n__16235__auto___24389,jobs,results,process,async))
);


break;
case "async":
var c__18081__auto___24402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24390,c__18081__auto___24402,G__24221_24391,n__16235__auto___24389,jobs,results,process,async){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (__24390,c__18081__auto___24402,G__24221_24391,n__16235__auto___24389,jobs,results,process,async){
return (function (state_24261){
var state_val_24262 = (state_24261[(1)]);
if((state_val_24262 === (1))){
var state_24261__$1 = state_24261;
var statearr_24263_24403 = state_24261__$1;
(statearr_24263_24403[(2)] = null);

(statearr_24263_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (2))){
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24261__$1,(4),jobs);
} else {
if((state_val_24262 === (3))){
var inst_24259 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24261__$1,inst_24259);
} else {
if((state_val_24262 === (4))){
var inst_24251 = (state_24261[(2)]);
var inst_24252 = async.call(null,inst_24251);
var state_24261__$1 = state_24261;
if(cljs.core.truth_(inst_24252)){
var statearr_24264_24404 = state_24261__$1;
(statearr_24264_24404[(1)] = (5));

} else {
var statearr_24265_24405 = state_24261__$1;
(statearr_24265_24405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (5))){
var state_24261__$1 = state_24261;
var statearr_24266_24406 = state_24261__$1;
(statearr_24266_24406[(2)] = null);

(statearr_24266_24406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (6))){
var state_24261__$1 = state_24261;
var statearr_24267_24407 = state_24261__$1;
(statearr_24267_24407[(2)] = null);

(statearr_24267_24407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (7))){
var inst_24257 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24268_24408 = state_24261__$1;
(statearr_24268_24408[(2)] = inst_24257);

(statearr_24268_24408[(1)] = (3));


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
});})(__24390,c__18081__auto___24402,G__24221_24391,n__16235__auto___24389,jobs,results,process,async))
;
return ((function (__24390,switch__18016__auto__,c__18081__auto___24402,G__24221_24391,n__16235__auto___24389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0 = (function (){
var statearr_24272 = [null,null,null,null,null,null,null];
(statearr_24272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__);

(statearr_24272[(1)] = (1));

return statearr_24272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1 = (function (state_24261){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24273){if((e24273 instanceof Object)){
var ex__18020__auto__ = e24273;
var statearr_24274_24409 = state_24261;
(statearr_24274_24409[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24410 = state_24261;
state_24261 = G__24410;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = function(state_24261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1.call(this,state_24261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__;
})()
;})(__24390,switch__18016__auto__,c__18081__auto___24402,G__24221_24391,n__16235__auto___24389,jobs,results,process,async))
})();
var state__18083__auto__ = (function (){var statearr_24275 = f__18082__auto__.call(null);
(statearr_24275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___24402);

return statearr_24275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(__24390,c__18081__auto___24402,G__24221_24391,n__16235__auto___24389,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24411 = (__24390 + (1));
__24390 = G__24411;
continue;
} else {
}
break;
}

var c__18081__auto___24412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___24412,jobs,results,process,async){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___24412,jobs,results,process,async){
return (function (state_24297){
var state_val_24298 = (state_24297[(1)]);
if((state_val_24298 === (1))){
var state_24297__$1 = state_24297;
var statearr_24299_24413 = state_24297__$1;
(statearr_24299_24413[(2)] = null);

(statearr_24299_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (2))){
var state_24297__$1 = state_24297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24297__$1,(4),from);
} else {
if((state_val_24298 === (3))){
var inst_24295 = (state_24297[(2)]);
var state_24297__$1 = state_24297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24297__$1,inst_24295);
} else {
if((state_val_24298 === (4))){
var inst_24278 = (state_24297[(7)]);
var inst_24278__$1 = (state_24297[(2)]);
var inst_24279 = (inst_24278__$1 == null);
var state_24297__$1 = (function (){var statearr_24300 = state_24297;
(statearr_24300[(7)] = inst_24278__$1);

return statearr_24300;
})();
if(cljs.core.truth_(inst_24279)){
var statearr_24301_24414 = state_24297__$1;
(statearr_24301_24414[(1)] = (5));

} else {
var statearr_24302_24415 = state_24297__$1;
(statearr_24302_24415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (5))){
var inst_24281 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24297__$1 = state_24297;
var statearr_24303_24416 = state_24297__$1;
(statearr_24303_24416[(2)] = inst_24281);

(statearr_24303_24416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (6))){
var inst_24278 = (state_24297[(7)]);
var inst_24283 = (state_24297[(8)]);
var inst_24283__$1 = cljs.core.async.chan.call(null,(1));
var inst_24284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24285 = [inst_24278,inst_24283__$1];
var inst_24286 = (new cljs.core.PersistentVector(null,2,(5),inst_24284,inst_24285,null));
var state_24297__$1 = (function (){var statearr_24304 = state_24297;
(statearr_24304[(8)] = inst_24283__$1);

return statearr_24304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24297__$1,(8),jobs,inst_24286);
} else {
if((state_val_24298 === (7))){
var inst_24293 = (state_24297[(2)]);
var state_24297__$1 = state_24297;
var statearr_24305_24417 = state_24297__$1;
(statearr_24305_24417[(2)] = inst_24293);

(statearr_24305_24417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (8))){
var inst_24283 = (state_24297[(8)]);
var inst_24288 = (state_24297[(2)]);
var state_24297__$1 = (function (){var statearr_24306 = state_24297;
(statearr_24306[(9)] = inst_24288);

return statearr_24306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24297__$1,(9),results,inst_24283);
} else {
if((state_val_24298 === (9))){
var inst_24290 = (state_24297[(2)]);
var state_24297__$1 = (function (){var statearr_24307 = state_24297;
(statearr_24307[(10)] = inst_24290);

return statearr_24307;
})();
var statearr_24308_24418 = state_24297__$1;
(statearr_24308_24418[(2)] = null);

(statearr_24308_24418[(1)] = (2));


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
});})(c__18081__auto___24412,jobs,results,process,async))
;
return ((function (switch__18016__auto__,c__18081__auto___24412,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0 = (function (){
var statearr_24312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__);

(statearr_24312[(1)] = (1));

return statearr_24312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1 = (function (state_24297){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24313){if((e24313 instanceof Object)){
var ex__18020__auto__ = e24313;
var statearr_24314_24419 = state_24297;
(statearr_24314_24419[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24420 = state_24297;
state_24297 = G__24420;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = function(state_24297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1.call(this,state_24297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___24412,jobs,results,process,async))
})();
var state__18083__auto__ = (function (){var statearr_24315 = f__18082__auto__.call(null);
(statearr_24315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___24412);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___24412,jobs,results,process,async))
);


var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__,jobs,results,process,async){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__,jobs,results,process,async){
return (function (state_24353){
var state_val_24354 = (state_24353[(1)]);
if((state_val_24354 === (7))){
var inst_24349 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24355_24421 = state_24353__$1;
(statearr_24355_24421[(2)] = inst_24349);

(statearr_24355_24421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (20))){
var state_24353__$1 = state_24353;
var statearr_24356_24422 = state_24353__$1;
(statearr_24356_24422[(2)] = null);

(statearr_24356_24422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (1))){
var state_24353__$1 = state_24353;
var statearr_24357_24423 = state_24353__$1;
(statearr_24357_24423[(2)] = null);

(statearr_24357_24423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (4))){
var inst_24318 = (state_24353[(7)]);
var inst_24318__$1 = (state_24353[(2)]);
var inst_24319 = (inst_24318__$1 == null);
var state_24353__$1 = (function (){var statearr_24358 = state_24353;
(statearr_24358[(7)] = inst_24318__$1);

return statearr_24358;
})();
if(cljs.core.truth_(inst_24319)){
var statearr_24359_24424 = state_24353__$1;
(statearr_24359_24424[(1)] = (5));

} else {
var statearr_24360_24425 = state_24353__$1;
(statearr_24360_24425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (15))){
var inst_24331 = (state_24353[(8)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24353__$1,(18),to,inst_24331);
} else {
if((state_val_24354 === (21))){
var inst_24344 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24361_24426 = state_24353__$1;
(statearr_24361_24426[(2)] = inst_24344);

(statearr_24361_24426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (13))){
var inst_24346 = (state_24353[(2)]);
var state_24353__$1 = (function (){var statearr_24362 = state_24353;
(statearr_24362[(9)] = inst_24346);

return statearr_24362;
})();
var statearr_24363_24427 = state_24353__$1;
(statearr_24363_24427[(2)] = null);

(statearr_24363_24427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (6))){
var inst_24318 = (state_24353[(7)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24353__$1,(11),inst_24318);
} else {
if((state_val_24354 === (17))){
var inst_24339 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
if(cljs.core.truth_(inst_24339)){
var statearr_24364_24428 = state_24353__$1;
(statearr_24364_24428[(1)] = (19));

} else {
var statearr_24365_24429 = state_24353__$1;
(statearr_24365_24429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (3))){
var inst_24351 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24353__$1,inst_24351);
} else {
if((state_val_24354 === (12))){
var inst_24328 = (state_24353[(10)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24353__$1,(14),inst_24328);
} else {
if((state_val_24354 === (2))){
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24353__$1,(4),results);
} else {
if((state_val_24354 === (19))){
var state_24353__$1 = state_24353;
var statearr_24366_24430 = state_24353__$1;
(statearr_24366_24430[(2)] = null);

(statearr_24366_24430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (11))){
var inst_24328 = (state_24353[(2)]);
var state_24353__$1 = (function (){var statearr_24367 = state_24353;
(statearr_24367[(10)] = inst_24328);

return statearr_24367;
})();
var statearr_24368_24431 = state_24353__$1;
(statearr_24368_24431[(2)] = null);

(statearr_24368_24431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (9))){
var state_24353__$1 = state_24353;
var statearr_24369_24432 = state_24353__$1;
(statearr_24369_24432[(2)] = null);

(statearr_24369_24432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (5))){
var state_24353__$1 = state_24353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24370_24433 = state_24353__$1;
(statearr_24370_24433[(1)] = (8));

} else {
var statearr_24371_24434 = state_24353__$1;
(statearr_24371_24434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (14))){
var inst_24331 = (state_24353[(8)]);
var inst_24333 = (state_24353[(11)]);
var inst_24331__$1 = (state_24353[(2)]);
var inst_24332 = (inst_24331__$1 == null);
var inst_24333__$1 = cljs.core.not.call(null,inst_24332);
var state_24353__$1 = (function (){var statearr_24372 = state_24353;
(statearr_24372[(8)] = inst_24331__$1);

(statearr_24372[(11)] = inst_24333__$1);

return statearr_24372;
})();
if(inst_24333__$1){
var statearr_24373_24435 = state_24353__$1;
(statearr_24373_24435[(1)] = (15));

} else {
var statearr_24374_24436 = state_24353__$1;
(statearr_24374_24436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (16))){
var inst_24333 = (state_24353[(11)]);
var state_24353__$1 = state_24353;
var statearr_24375_24437 = state_24353__$1;
(statearr_24375_24437[(2)] = inst_24333);

(statearr_24375_24437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (10))){
var inst_24325 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24376_24438 = state_24353__$1;
(statearr_24376_24438[(2)] = inst_24325);

(statearr_24376_24438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (18))){
var inst_24336 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24377_24439 = state_24353__$1;
(statearr_24377_24439[(2)] = inst_24336);

(statearr_24377_24439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (8))){
var inst_24322 = cljs.core.async.close_BANG_.call(null,to);
var state_24353__$1 = state_24353;
var statearr_24378_24440 = state_24353__$1;
(statearr_24378_24440[(2)] = inst_24322);

(statearr_24378_24440[(1)] = (10));


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
});})(c__18081__auto__,jobs,results,process,async))
;
return ((function (switch__18016__auto__,c__18081__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0 = (function (){
var statearr_24382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__);

(statearr_24382[(1)] = (1));

return statearr_24382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1 = (function (state_24353){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24383){if((e24383 instanceof Object)){
var ex__18020__auto__ = e24383;
var statearr_24384_24441 = state_24353;
(statearr_24384_24441[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24442 = state_24353;
state_24353 = G__24442;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__ = function(state_24353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1.call(this,state_24353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__,jobs,results,process,async))
})();
var state__18083__auto__ = (function (){var statearr_24385 = f__18082__auto__.call(null);
(statearr_24385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_24385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__,jobs,results,process,async))
);

return c__18081__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args24443 = [];
var len__16390__auto___24446 = arguments.length;
var i__16391__auto___24447 = (0);
while(true){
if((i__16391__auto___24447 < len__16390__auto___24446)){
args24443.push((arguments[i__16391__auto___24447]));

var G__24448 = (i__16391__auto___24447 + (1));
i__16391__auto___24447 = G__24448;
continue;
} else {
}
break;
}

var G__24445 = args24443.length;
switch (G__24445) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24443.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args24450 = [];
var len__16390__auto___24453 = arguments.length;
var i__16391__auto___24454 = (0);
while(true){
if((i__16391__auto___24454 < len__16390__auto___24453)){
args24450.push((arguments[i__16391__auto___24454]));

var G__24455 = (i__16391__auto___24454 + (1));
i__16391__auto___24454 = G__24455;
continue;
} else {
}
break;
}

var G__24452 = args24450.length;
switch (G__24452) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24450.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args24457 = [];
var len__16390__auto___24510 = arguments.length;
var i__16391__auto___24511 = (0);
while(true){
if((i__16391__auto___24511 < len__16390__auto___24510)){
args24457.push((arguments[i__16391__auto___24511]));

var G__24512 = (i__16391__auto___24511 + (1));
i__16391__auto___24511 = G__24512;
continue;
} else {
}
break;
}

var G__24459 = args24457.length;
switch (G__24459) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24457.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18081__auto___24514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___24514,tc,fc){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___24514,tc,fc){
return (function (state_24485){
var state_val_24486 = (state_24485[(1)]);
if((state_val_24486 === (7))){
var inst_24481 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24487_24515 = state_24485__$1;
(statearr_24487_24515[(2)] = inst_24481);

(statearr_24487_24515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (1))){
var state_24485__$1 = state_24485;
var statearr_24488_24516 = state_24485__$1;
(statearr_24488_24516[(2)] = null);

(statearr_24488_24516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (4))){
var inst_24462 = (state_24485[(7)]);
var inst_24462__$1 = (state_24485[(2)]);
var inst_24463 = (inst_24462__$1 == null);
var state_24485__$1 = (function (){var statearr_24489 = state_24485;
(statearr_24489[(7)] = inst_24462__$1);

return statearr_24489;
})();
if(cljs.core.truth_(inst_24463)){
var statearr_24490_24517 = state_24485__$1;
(statearr_24490_24517[(1)] = (5));

} else {
var statearr_24491_24518 = state_24485__$1;
(statearr_24491_24518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (13))){
var state_24485__$1 = state_24485;
var statearr_24492_24519 = state_24485__$1;
(statearr_24492_24519[(2)] = null);

(statearr_24492_24519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (6))){
var inst_24462 = (state_24485[(7)]);
var inst_24468 = p.call(null,inst_24462);
var state_24485__$1 = state_24485;
if(cljs.core.truth_(inst_24468)){
var statearr_24493_24520 = state_24485__$1;
(statearr_24493_24520[(1)] = (9));

} else {
var statearr_24494_24521 = state_24485__$1;
(statearr_24494_24521[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (3))){
var inst_24483 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24485__$1,inst_24483);
} else {
if((state_val_24486 === (12))){
var state_24485__$1 = state_24485;
var statearr_24495_24522 = state_24485__$1;
(statearr_24495_24522[(2)] = null);

(statearr_24495_24522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (2))){
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24485__$1,(4),ch);
} else {
if((state_val_24486 === (11))){
var inst_24462 = (state_24485[(7)]);
var inst_24472 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24485__$1,(8),inst_24472,inst_24462);
} else {
if((state_val_24486 === (9))){
var state_24485__$1 = state_24485;
var statearr_24496_24523 = state_24485__$1;
(statearr_24496_24523[(2)] = tc);

(statearr_24496_24523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (5))){
var inst_24465 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24466 = cljs.core.async.close_BANG_.call(null,fc);
var state_24485__$1 = (function (){var statearr_24497 = state_24485;
(statearr_24497[(8)] = inst_24465);

return statearr_24497;
})();
var statearr_24498_24524 = state_24485__$1;
(statearr_24498_24524[(2)] = inst_24466);

(statearr_24498_24524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (14))){
var inst_24479 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24499_24525 = state_24485__$1;
(statearr_24499_24525[(2)] = inst_24479);

(statearr_24499_24525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (10))){
var state_24485__$1 = state_24485;
var statearr_24500_24526 = state_24485__$1;
(statearr_24500_24526[(2)] = fc);

(statearr_24500_24526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (8))){
var inst_24474 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
if(cljs.core.truth_(inst_24474)){
var statearr_24501_24527 = state_24485__$1;
(statearr_24501_24527[(1)] = (12));

} else {
var statearr_24502_24528 = state_24485__$1;
(statearr_24502_24528[(1)] = (13));

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
});})(c__18081__auto___24514,tc,fc))
;
return ((function (switch__18016__auto__,c__18081__auto___24514,tc,fc){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_24506 = [null,null,null,null,null,null,null,null,null];
(statearr_24506[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_24506[(1)] = (1));

return statearr_24506;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_24485){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24507){if((e24507 instanceof Object)){
var ex__18020__auto__ = e24507;
var statearr_24508_24529 = state_24485;
(statearr_24508_24529[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24530 = state_24485;
state_24485 = G__24530;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_24485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_24485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___24514,tc,fc))
})();
var state__18083__auto__ = (function (){var statearr_24509 = f__18082__auto__.call(null);
(statearr_24509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___24514);

return statearr_24509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___24514,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_24577){
var state_val_24578 = (state_24577[(1)]);
if((state_val_24578 === (1))){
var inst_24563 = init;
var state_24577__$1 = (function (){var statearr_24579 = state_24577;
(statearr_24579[(7)] = inst_24563);

return statearr_24579;
})();
var statearr_24580_24595 = state_24577__$1;
(statearr_24580_24595[(2)] = null);

(statearr_24580_24595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24578 === (2))){
var state_24577__$1 = state_24577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24577__$1,(4),ch);
} else {
if((state_val_24578 === (3))){
var inst_24575 = (state_24577[(2)]);
var state_24577__$1 = state_24577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24577__$1,inst_24575);
} else {
if((state_val_24578 === (4))){
var inst_24566 = (state_24577[(8)]);
var inst_24566__$1 = (state_24577[(2)]);
var inst_24567 = (inst_24566__$1 == null);
var state_24577__$1 = (function (){var statearr_24581 = state_24577;
(statearr_24581[(8)] = inst_24566__$1);

return statearr_24581;
})();
if(cljs.core.truth_(inst_24567)){
var statearr_24582_24596 = state_24577__$1;
(statearr_24582_24596[(1)] = (5));

} else {
var statearr_24583_24597 = state_24577__$1;
(statearr_24583_24597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24578 === (5))){
var inst_24563 = (state_24577[(7)]);
var state_24577__$1 = state_24577;
var statearr_24584_24598 = state_24577__$1;
(statearr_24584_24598[(2)] = inst_24563);

(statearr_24584_24598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24578 === (6))){
var inst_24563 = (state_24577[(7)]);
var inst_24566 = (state_24577[(8)]);
var inst_24570 = f.call(null,inst_24563,inst_24566);
var inst_24563__$1 = inst_24570;
var state_24577__$1 = (function (){var statearr_24585 = state_24577;
(statearr_24585[(7)] = inst_24563__$1);

return statearr_24585;
})();
var statearr_24586_24599 = state_24577__$1;
(statearr_24586_24599[(2)] = null);

(statearr_24586_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24578 === (7))){
var inst_24573 = (state_24577[(2)]);
var state_24577__$1 = state_24577;
var statearr_24587_24600 = state_24577__$1;
(statearr_24587_24600[(2)] = inst_24573);

(statearr_24587_24600[(1)] = (3));


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
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18017__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18017__auto____0 = (function (){
var statearr_24591 = [null,null,null,null,null,null,null,null,null];
(statearr_24591[(0)] = cljs$core$async$reduce_$_state_machine__18017__auto__);

(statearr_24591[(1)] = (1));

return statearr_24591;
});
var cljs$core$async$reduce_$_state_machine__18017__auto____1 = (function (state_24577){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24592){if((e24592 instanceof Object)){
var ex__18020__auto__ = e24592;
var statearr_24593_24601 = state_24577;
(statearr_24593_24601[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24602 = state_24577;
state_24577 = G__24602;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18017__auto__ = function(state_24577){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18017__auto____1.call(this,state_24577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18017__auto____0;
cljs$core$async$reduce_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18017__auto____1;
return cljs$core$async$reduce_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_24594 = f__18082__auto__.call(null);
(statearr_24594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_24594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args24603 = [];
var len__16390__auto___24655 = arguments.length;
var i__16391__auto___24656 = (0);
while(true){
if((i__16391__auto___24656 < len__16390__auto___24655)){
args24603.push((arguments[i__16391__auto___24656]));

var G__24657 = (i__16391__auto___24656 + (1));
i__16391__auto___24656 = G__24657;
continue;
} else {
}
break;
}

var G__24605 = args24603.length;
switch (G__24605) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24603.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_24630){
var state_val_24631 = (state_24630[(1)]);
if((state_val_24631 === (7))){
var inst_24612 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24632_24659 = state_24630__$1;
(statearr_24632_24659[(2)] = inst_24612);

(statearr_24632_24659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (1))){
var inst_24606 = cljs.core.seq.call(null,coll);
var inst_24607 = inst_24606;
var state_24630__$1 = (function (){var statearr_24633 = state_24630;
(statearr_24633[(7)] = inst_24607);

return statearr_24633;
})();
var statearr_24634_24660 = state_24630__$1;
(statearr_24634_24660[(2)] = null);

(statearr_24634_24660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (4))){
var inst_24607 = (state_24630[(7)]);
var inst_24610 = cljs.core.first.call(null,inst_24607);
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24630__$1,(7),ch,inst_24610);
} else {
if((state_val_24631 === (13))){
var inst_24624 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24635_24661 = state_24630__$1;
(statearr_24635_24661[(2)] = inst_24624);

(statearr_24635_24661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (6))){
var inst_24615 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
if(cljs.core.truth_(inst_24615)){
var statearr_24636_24662 = state_24630__$1;
(statearr_24636_24662[(1)] = (8));

} else {
var statearr_24637_24663 = state_24630__$1;
(statearr_24637_24663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (3))){
var inst_24628 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24630__$1,inst_24628);
} else {
if((state_val_24631 === (12))){
var state_24630__$1 = state_24630;
var statearr_24638_24664 = state_24630__$1;
(statearr_24638_24664[(2)] = null);

(statearr_24638_24664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (2))){
var inst_24607 = (state_24630[(7)]);
var state_24630__$1 = state_24630;
if(cljs.core.truth_(inst_24607)){
var statearr_24639_24665 = state_24630__$1;
(statearr_24639_24665[(1)] = (4));

} else {
var statearr_24640_24666 = state_24630__$1;
(statearr_24640_24666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (11))){
var inst_24621 = cljs.core.async.close_BANG_.call(null,ch);
var state_24630__$1 = state_24630;
var statearr_24641_24667 = state_24630__$1;
(statearr_24641_24667[(2)] = inst_24621);

(statearr_24641_24667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (9))){
var state_24630__$1 = state_24630;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24642_24668 = state_24630__$1;
(statearr_24642_24668[(1)] = (11));

} else {
var statearr_24643_24669 = state_24630__$1;
(statearr_24643_24669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (5))){
var inst_24607 = (state_24630[(7)]);
var state_24630__$1 = state_24630;
var statearr_24644_24670 = state_24630__$1;
(statearr_24644_24670[(2)] = inst_24607);

(statearr_24644_24670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (10))){
var inst_24626 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24645_24671 = state_24630__$1;
(statearr_24645_24671[(2)] = inst_24626);

(statearr_24645_24671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (8))){
var inst_24607 = (state_24630[(7)]);
var inst_24617 = cljs.core.next.call(null,inst_24607);
var inst_24607__$1 = inst_24617;
var state_24630__$1 = (function (){var statearr_24646 = state_24630;
(statearr_24646[(7)] = inst_24607__$1);

return statearr_24646;
})();
var statearr_24647_24672 = state_24630__$1;
(statearr_24647_24672[(2)] = null);

(statearr_24647_24672[(1)] = (2));


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
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_24651 = [null,null,null,null,null,null,null,null];
(statearr_24651[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_24651[(1)] = (1));

return statearr_24651;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_24630){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_24630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e24652){if((e24652 instanceof Object)){
var ex__18020__auto__ = e24652;
var statearr_24653_24673 = state_24630;
(statearr_24653_24673[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24674 = state_24630;
state_24630 = G__24674;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_24630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_24630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_24654 = f__18082__auto__.call(null);
(statearr_24654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15987__auto__ = (((_ == null))?null:_);
var m__15988__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,_);
} else {
var m__15988__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__15988__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m,ch);
} else {
var m__15988__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m);
} else {
var m__15988__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t24900 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24900 = (function (mult,ch,cs,meta24901){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24901 = meta24901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24902,meta24901__$1){
var self__ = this;
var _24902__$1 = this;
return (new cljs.core.async.t24900(self__.mult,self__.ch,self__.cs,meta24901__$1));
});})(cs))
;

cljs.core.async.t24900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24902){
var self__ = this;
var _24902__$1 = this;
return self__.meta24901;
});})(cs))
;

cljs.core.async.t24900.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24900.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24900.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24900.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24900.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t24900.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24901","meta24901",215699736,null)], null);
});})(cs))
;

cljs.core.async.t24900.cljs$lang$type = true;

cljs.core.async.t24900.cljs$lang$ctorStr = "cljs.core.async/t24900";

cljs.core.async.t24900.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t24900");
});})(cs))
;

cljs.core.async.__GT_t24900 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t24900(mult__$1,ch__$1,cs__$1,meta24901){
return (new cljs.core.async.t24900(mult__$1,ch__$1,cs__$1,meta24901));
});})(cs))
;

}

return (new cljs.core.async.t24900(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18081__auto___25121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___25121,cs,m,dchan,dctr,done){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___25121,cs,m,dchan,dctr,done){
return (function (state_25033){
var state_val_25034 = (state_25033[(1)]);
if((state_val_25034 === (7))){
var inst_25029 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25035_25122 = state_25033__$1;
(statearr_25035_25122[(2)] = inst_25029);

(statearr_25035_25122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (20))){
var inst_24934 = (state_25033[(7)]);
var inst_24944 = cljs.core.first.call(null,inst_24934);
var inst_24945 = cljs.core.nth.call(null,inst_24944,(0),null);
var inst_24946 = cljs.core.nth.call(null,inst_24944,(1),null);
var state_25033__$1 = (function (){var statearr_25036 = state_25033;
(statearr_25036[(8)] = inst_24945);

return statearr_25036;
})();
if(cljs.core.truth_(inst_24946)){
var statearr_25037_25123 = state_25033__$1;
(statearr_25037_25123[(1)] = (22));

} else {
var statearr_25038_25124 = state_25033__$1;
(statearr_25038_25124[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (27))){
var inst_24981 = (state_25033[(9)]);
var inst_24976 = (state_25033[(10)]);
var inst_24905 = (state_25033[(11)]);
var inst_24974 = (state_25033[(12)]);
var inst_24981__$1 = cljs.core._nth.call(null,inst_24974,inst_24976);
var inst_24982 = cljs.core.async.put_BANG_.call(null,inst_24981__$1,inst_24905,done);
var state_25033__$1 = (function (){var statearr_25039 = state_25033;
(statearr_25039[(9)] = inst_24981__$1);

return statearr_25039;
})();
if(cljs.core.truth_(inst_24982)){
var statearr_25040_25125 = state_25033__$1;
(statearr_25040_25125[(1)] = (30));

} else {
var statearr_25041_25126 = state_25033__$1;
(statearr_25041_25126[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (1))){
var state_25033__$1 = state_25033;
var statearr_25042_25127 = state_25033__$1;
(statearr_25042_25127[(2)] = null);

(statearr_25042_25127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (24))){
var inst_24934 = (state_25033[(7)]);
var inst_24951 = (state_25033[(2)]);
var inst_24952 = cljs.core.next.call(null,inst_24934);
var inst_24914 = inst_24952;
var inst_24915 = null;
var inst_24916 = (0);
var inst_24917 = (0);
var state_25033__$1 = (function (){var statearr_25043 = state_25033;
(statearr_25043[(13)] = inst_24951);

(statearr_25043[(14)] = inst_24915);

(statearr_25043[(15)] = inst_24916);

(statearr_25043[(16)] = inst_24914);

(statearr_25043[(17)] = inst_24917);

return statearr_25043;
})();
var statearr_25044_25128 = state_25033__$1;
(statearr_25044_25128[(2)] = null);

(statearr_25044_25128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (39))){
var state_25033__$1 = state_25033;
var statearr_25048_25129 = state_25033__$1;
(statearr_25048_25129[(2)] = null);

(statearr_25048_25129[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (4))){
var inst_24905 = (state_25033[(11)]);
var inst_24905__$1 = (state_25033[(2)]);
var inst_24906 = (inst_24905__$1 == null);
var state_25033__$1 = (function (){var statearr_25049 = state_25033;
(statearr_25049[(11)] = inst_24905__$1);

return statearr_25049;
})();
if(cljs.core.truth_(inst_24906)){
var statearr_25050_25130 = state_25033__$1;
(statearr_25050_25130[(1)] = (5));

} else {
var statearr_25051_25131 = state_25033__$1;
(statearr_25051_25131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (15))){
var inst_24915 = (state_25033[(14)]);
var inst_24916 = (state_25033[(15)]);
var inst_24914 = (state_25033[(16)]);
var inst_24917 = (state_25033[(17)]);
var inst_24930 = (state_25033[(2)]);
var inst_24931 = (inst_24917 + (1));
var tmp25045 = inst_24915;
var tmp25046 = inst_24916;
var tmp25047 = inst_24914;
var inst_24914__$1 = tmp25047;
var inst_24915__$1 = tmp25045;
var inst_24916__$1 = tmp25046;
var inst_24917__$1 = inst_24931;
var state_25033__$1 = (function (){var statearr_25052 = state_25033;
(statearr_25052[(18)] = inst_24930);

(statearr_25052[(14)] = inst_24915__$1);

(statearr_25052[(15)] = inst_24916__$1);

(statearr_25052[(16)] = inst_24914__$1);

(statearr_25052[(17)] = inst_24917__$1);

return statearr_25052;
})();
var statearr_25053_25132 = state_25033__$1;
(statearr_25053_25132[(2)] = null);

(statearr_25053_25132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (21))){
var inst_24955 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25057_25133 = state_25033__$1;
(statearr_25057_25133[(2)] = inst_24955);

(statearr_25057_25133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (31))){
var inst_24981 = (state_25033[(9)]);
var inst_24985 = done.call(null,null);
var inst_24986 = cljs.core.async.untap_STAR_.call(null,m,inst_24981);
var state_25033__$1 = (function (){var statearr_25058 = state_25033;
(statearr_25058[(19)] = inst_24985);

return statearr_25058;
})();
var statearr_25059_25134 = state_25033__$1;
(statearr_25059_25134[(2)] = inst_24986);

(statearr_25059_25134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (32))){
var inst_24976 = (state_25033[(10)]);
var inst_24975 = (state_25033[(20)]);
var inst_24973 = (state_25033[(21)]);
var inst_24974 = (state_25033[(12)]);
var inst_24988 = (state_25033[(2)]);
var inst_24989 = (inst_24976 + (1));
var tmp25054 = inst_24975;
var tmp25055 = inst_24973;
var tmp25056 = inst_24974;
var inst_24973__$1 = tmp25055;
var inst_24974__$1 = tmp25056;
var inst_24975__$1 = tmp25054;
var inst_24976__$1 = inst_24989;
var state_25033__$1 = (function (){var statearr_25060 = state_25033;
(statearr_25060[(10)] = inst_24976__$1);

(statearr_25060[(20)] = inst_24975__$1);

(statearr_25060[(22)] = inst_24988);

(statearr_25060[(21)] = inst_24973__$1);

(statearr_25060[(12)] = inst_24974__$1);

return statearr_25060;
})();
var statearr_25061_25135 = state_25033__$1;
(statearr_25061_25135[(2)] = null);

(statearr_25061_25135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (40))){
var inst_25001 = (state_25033[(23)]);
var inst_25005 = done.call(null,null);
var inst_25006 = cljs.core.async.untap_STAR_.call(null,m,inst_25001);
var state_25033__$1 = (function (){var statearr_25062 = state_25033;
(statearr_25062[(24)] = inst_25005);

return statearr_25062;
})();
var statearr_25063_25136 = state_25033__$1;
(statearr_25063_25136[(2)] = inst_25006);

(statearr_25063_25136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (33))){
var inst_24992 = (state_25033[(25)]);
var inst_24994 = cljs.core.chunked_seq_QMARK_.call(null,inst_24992);
var state_25033__$1 = state_25033;
if(inst_24994){
var statearr_25064_25137 = state_25033__$1;
(statearr_25064_25137[(1)] = (36));

} else {
var statearr_25065_25138 = state_25033__$1;
(statearr_25065_25138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (13))){
var inst_24924 = (state_25033[(26)]);
var inst_24927 = cljs.core.async.close_BANG_.call(null,inst_24924);
var state_25033__$1 = state_25033;
var statearr_25066_25139 = state_25033__$1;
(statearr_25066_25139[(2)] = inst_24927);

(statearr_25066_25139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (22))){
var inst_24945 = (state_25033[(8)]);
var inst_24948 = cljs.core.async.close_BANG_.call(null,inst_24945);
var state_25033__$1 = state_25033;
var statearr_25067_25140 = state_25033__$1;
(statearr_25067_25140[(2)] = inst_24948);

(statearr_25067_25140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (36))){
var inst_24992 = (state_25033[(25)]);
var inst_24996 = cljs.core.chunk_first.call(null,inst_24992);
var inst_24997 = cljs.core.chunk_rest.call(null,inst_24992);
var inst_24998 = cljs.core.count.call(null,inst_24996);
var inst_24973 = inst_24997;
var inst_24974 = inst_24996;
var inst_24975 = inst_24998;
var inst_24976 = (0);
var state_25033__$1 = (function (){var statearr_25068 = state_25033;
(statearr_25068[(10)] = inst_24976);

(statearr_25068[(20)] = inst_24975);

(statearr_25068[(21)] = inst_24973);

(statearr_25068[(12)] = inst_24974);

return statearr_25068;
})();
var statearr_25069_25141 = state_25033__$1;
(statearr_25069_25141[(2)] = null);

(statearr_25069_25141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (41))){
var inst_24992 = (state_25033[(25)]);
var inst_25008 = (state_25033[(2)]);
var inst_25009 = cljs.core.next.call(null,inst_24992);
var inst_24973 = inst_25009;
var inst_24974 = null;
var inst_24975 = (0);
var inst_24976 = (0);
var state_25033__$1 = (function (){var statearr_25070 = state_25033;
(statearr_25070[(10)] = inst_24976);

(statearr_25070[(27)] = inst_25008);

(statearr_25070[(20)] = inst_24975);

(statearr_25070[(21)] = inst_24973);

(statearr_25070[(12)] = inst_24974);

return statearr_25070;
})();
var statearr_25071_25142 = state_25033__$1;
(statearr_25071_25142[(2)] = null);

(statearr_25071_25142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (43))){
var state_25033__$1 = state_25033;
var statearr_25072_25143 = state_25033__$1;
(statearr_25072_25143[(2)] = null);

(statearr_25072_25143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (29))){
var inst_25017 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25073_25144 = state_25033__$1;
(statearr_25073_25144[(2)] = inst_25017);

(statearr_25073_25144[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (44))){
var inst_25026 = (state_25033[(2)]);
var state_25033__$1 = (function (){var statearr_25074 = state_25033;
(statearr_25074[(28)] = inst_25026);

return statearr_25074;
})();
var statearr_25075_25145 = state_25033__$1;
(statearr_25075_25145[(2)] = null);

(statearr_25075_25145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (6))){
var inst_24965 = (state_25033[(29)]);
var inst_24964 = cljs.core.deref.call(null,cs);
var inst_24965__$1 = cljs.core.keys.call(null,inst_24964);
var inst_24966 = cljs.core.count.call(null,inst_24965__$1);
var inst_24967 = cljs.core.reset_BANG_.call(null,dctr,inst_24966);
var inst_24972 = cljs.core.seq.call(null,inst_24965__$1);
var inst_24973 = inst_24972;
var inst_24974 = null;
var inst_24975 = (0);
var inst_24976 = (0);
var state_25033__$1 = (function (){var statearr_25076 = state_25033;
(statearr_25076[(30)] = inst_24967);

(statearr_25076[(10)] = inst_24976);

(statearr_25076[(20)] = inst_24975);

(statearr_25076[(29)] = inst_24965__$1);

(statearr_25076[(21)] = inst_24973);

(statearr_25076[(12)] = inst_24974);

return statearr_25076;
})();
var statearr_25077_25146 = state_25033__$1;
(statearr_25077_25146[(2)] = null);

(statearr_25077_25146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (28))){
var inst_24992 = (state_25033[(25)]);
var inst_24973 = (state_25033[(21)]);
var inst_24992__$1 = cljs.core.seq.call(null,inst_24973);
var state_25033__$1 = (function (){var statearr_25078 = state_25033;
(statearr_25078[(25)] = inst_24992__$1);

return statearr_25078;
})();
if(inst_24992__$1){
var statearr_25079_25147 = state_25033__$1;
(statearr_25079_25147[(1)] = (33));

} else {
var statearr_25080_25148 = state_25033__$1;
(statearr_25080_25148[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (25))){
var inst_24976 = (state_25033[(10)]);
var inst_24975 = (state_25033[(20)]);
var inst_24978 = (inst_24976 < inst_24975);
var inst_24979 = inst_24978;
var state_25033__$1 = state_25033;
if(cljs.core.truth_(inst_24979)){
var statearr_25081_25149 = state_25033__$1;
(statearr_25081_25149[(1)] = (27));

} else {
var statearr_25082_25150 = state_25033__$1;
(statearr_25082_25150[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (34))){
var state_25033__$1 = state_25033;
var statearr_25083_25151 = state_25033__$1;
(statearr_25083_25151[(2)] = null);

(statearr_25083_25151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (17))){
var state_25033__$1 = state_25033;
var statearr_25084_25152 = state_25033__$1;
(statearr_25084_25152[(2)] = null);

(statearr_25084_25152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (3))){
var inst_25031 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25033__$1,inst_25031);
} else {
if((state_val_25034 === (12))){
var inst_24960 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25085_25153 = state_25033__$1;
(statearr_25085_25153[(2)] = inst_24960);

(statearr_25085_25153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (2))){
var state_25033__$1 = state_25033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25033__$1,(4),ch);
} else {
if((state_val_25034 === (23))){
var state_25033__$1 = state_25033;
var statearr_25086_25154 = state_25033__$1;
(statearr_25086_25154[(2)] = null);

(statearr_25086_25154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (35))){
var inst_25015 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25087_25155 = state_25033__$1;
(statearr_25087_25155[(2)] = inst_25015);

(statearr_25087_25155[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (19))){
var inst_24934 = (state_25033[(7)]);
var inst_24938 = cljs.core.chunk_first.call(null,inst_24934);
var inst_24939 = cljs.core.chunk_rest.call(null,inst_24934);
var inst_24940 = cljs.core.count.call(null,inst_24938);
var inst_24914 = inst_24939;
var inst_24915 = inst_24938;
var inst_24916 = inst_24940;
var inst_24917 = (0);
var state_25033__$1 = (function (){var statearr_25088 = state_25033;
(statearr_25088[(14)] = inst_24915);

(statearr_25088[(15)] = inst_24916);

(statearr_25088[(16)] = inst_24914);

(statearr_25088[(17)] = inst_24917);

return statearr_25088;
})();
var statearr_25089_25156 = state_25033__$1;
(statearr_25089_25156[(2)] = null);

(statearr_25089_25156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (11))){
var inst_24914 = (state_25033[(16)]);
var inst_24934 = (state_25033[(7)]);
var inst_24934__$1 = cljs.core.seq.call(null,inst_24914);
var state_25033__$1 = (function (){var statearr_25090 = state_25033;
(statearr_25090[(7)] = inst_24934__$1);

return statearr_25090;
})();
if(inst_24934__$1){
var statearr_25091_25157 = state_25033__$1;
(statearr_25091_25157[(1)] = (16));

} else {
var statearr_25092_25158 = state_25033__$1;
(statearr_25092_25158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (9))){
var inst_24962 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25093_25159 = state_25033__$1;
(statearr_25093_25159[(2)] = inst_24962);

(statearr_25093_25159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (5))){
var inst_24912 = cljs.core.deref.call(null,cs);
var inst_24913 = cljs.core.seq.call(null,inst_24912);
var inst_24914 = inst_24913;
var inst_24915 = null;
var inst_24916 = (0);
var inst_24917 = (0);
var state_25033__$1 = (function (){var statearr_25094 = state_25033;
(statearr_25094[(14)] = inst_24915);

(statearr_25094[(15)] = inst_24916);

(statearr_25094[(16)] = inst_24914);

(statearr_25094[(17)] = inst_24917);

return statearr_25094;
})();
var statearr_25095_25160 = state_25033__$1;
(statearr_25095_25160[(2)] = null);

(statearr_25095_25160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (14))){
var state_25033__$1 = state_25033;
var statearr_25096_25161 = state_25033__$1;
(statearr_25096_25161[(2)] = null);

(statearr_25096_25161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (45))){
var inst_25023 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25097_25162 = state_25033__$1;
(statearr_25097_25162[(2)] = inst_25023);

(statearr_25097_25162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (26))){
var inst_24965 = (state_25033[(29)]);
var inst_25019 = (state_25033[(2)]);
var inst_25020 = cljs.core.seq.call(null,inst_24965);
var state_25033__$1 = (function (){var statearr_25098 = state_25033;
(statearr_25098[(31)] = inst_25019);

return statearr_25098;
})();
if(inst_25020){
var statearr_25099_25163 = state_25033__$1;
(statearr_25099_25163[(1)] = (42));

} else {
var statearr_25100_25164 = state_25033__$1;
(statearr_25100_25164[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (16))){
var inst_24934 = (state_25033[(7)]);
var inst_24936 = cljs.core.chunked_seq_QMARK_.call(null,inst_24934);
var state_25033__$1 = state_25033;
if(inst_24936){
var statearr_25101_25165 = state_25033__$1;
(statearr_25101_25165[(1)] = (19));

} else {
var statearr_25102_25166 = state_25033__$1;
(statearr_25102_25166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (38))){
var inst_25012 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25103_25167 = state_25033__$1;
(statearr_25103_25167[(2)] = inst_25012);

(statearr_25103_25167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (30))){
var state_25033__$1 = state_25033;
var statearr_25104_25168 = state_25033__$1;
(statearr_25104_25168[(2)] = null);

(statearr_25104_25168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (10))){
var inst_24915 = (state_25033[(14)]);
var inst_24917 = (state_25033[(17)]);
var inst_24923 = cljs.core._nth.call(null,inst_24915,inst_24917);
var inst_24924 = cljs.core.nth.call(null,inst_24923,(0),null);
var inst_24925 = cljs.core.nth.call(null,inst_24923,(1),null);
var state_25033__$1 = (function (){var statearr_25105 = state_25033;
(statearr_25105[(26)] = inst_24924);

return statearr_25105;
})();
if(cljs.core.truth_(inst_24925)){
var statearr_25106_25169 = state_25033__$1;
(statearr_25106_25169[(1)] = (13));

} else {
var statearr_25107_25170 = state_25033__$1;
(statearr_25107_25170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (18))){
var inst_24958 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25108_25171 = state_25033__$1;
(statearr_25108_25171[(2)] = inst_24958);

(statearr_25108_25171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (42))){
var state_25033__$1 = state_25033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25033__$1,(45),dchan);
} else {
if((state_val_25034 === (37))){
var inst_24905 = (state_25033[(11)]);
var inst_24992 = (state_25033[(25)]);
var inst_25001 = (state_25033[(23)]);
var inst_25001__$1 = cljs.core.first.call(null,inst_24992);
var inst_25002 = cljs.core.async.put_BANG_.call(null,inst_25001__$1,inst_24905,done);
var state_25033__$1 = (function (){var statearr_25109 = state_25033;
(statearr_25109[(23)] = inst_25001__$1);

return statearr_25109;
})();
if(cljs.core.truth_(inst_25002)){
var statearr_25110_25172 = state_25033__$1;
(statearr_25110_25172[(1)] = (39));

} else {
var statearr_25111_25173 = state_25033__$1;
(statearr_25111_25173[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (8))){
var inst_24916 = (state_25033[(15)]);
var inst_24917 = (state_25033[(17)]);
var inst_24919 = (inst_24917 < inst_24916);
var inst_24920 = inst_24919;
var state_25033__$1 = state_25033;
if(cljs.core.truth_(inst_24920)){
var statearr_25112_25174 = state_25033__$1;
(statearr_25112_25174[(1)] = (10));

} else {
var statearr_25113_25175 = state_25033__$1;
(statearr_25113_25175[(1)] = (11));

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
}
}
});})(c__18081__auto___25121,cs,m,dchan,dctr,done))
;
return ((function (switch__18016__auto__,c__18081__auto___25121,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18017__auto__ = null;
var cljs$core$async$mult_$_state_machine__18017__auto____0 = (function (){
var statearr_25117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25117[(0)] = cljs$core$async$mult_$_state_machine__18017__auto__);

(statearr_25117[(1)] = (1));

return statearr_25117;
});
var cljs$core$async$mult_$_state_machine__18017__auto____1 = (function (state_25033){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_25033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e25118){if((e25118 instanceof Object)){
var ex__18020__auto__ = e25118;
var statearr_25119_25176 = state_25033;
(statearr_25119_25176[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25177 = state_25033;
state_25033 = G__25177;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18017__auto__ = function(state_25033){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18017__auto____1.call(this,state_25033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18017__auto____0;
cljs$core$async$mult_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18017__auto____1;
return cljs$core$async$mult_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___25121,cs,m,dchan,dctr,done))
})();
var state__18083__auto__ = (function (){var statearr_25120 = f__18082__auto__.call(null);
(statearr_25120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___25121);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___25121,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args25178 = [];
var len__16390__auto___25181 = arguments.length;
var i__16391__auto___25182 = (0);
while(true){
if((i__16391__auto___25182 < len__16390__auto___25181)){
args25178.push((arguments[i__16391__auto___25182]));

var G__25183 = (i__16391__auto___25182 + (1));
i__16391__auto___25182 = G__25183;
continue;
} else {
}
break;
}

var G__25180 = args25178.length;
switch (G__25180) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25178.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m,ch);
} else {
var m__15988__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m,ch);
} else {
var m__15988__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m);
} else {
var m__15988__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m,state_map);
} else {
var m__15988__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15987__auto__ = (((m == null))?null:m);
var m__15988__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,m,mode);
} else {
var m__15988__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__16397__auto__ = [];
var len__16390__auto___25197 = arguments.length;
var i__16391__auto___25198 = (0);
while(true){
if((i__16391__auto___25198 < len__16390__auto___25197)){
args__16397__auto__.push((arguments[i__16391__auto___25198]));

var G__25199 = (i__16391__auto___25198 + (1));
i__16391__auto___25198 = G__25199;
continue;
} else {
}
break;
}

var argseq__16398__auto__ = ((((3) < args__16397__auto__.length))?(new cljs.core.IndexedSeq(args__16397__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16398__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25191){
var map__25192 = p__25191;
var map__25192__$1 = ((((!((map__25192 == null)))?((((map__25192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25192):map__25192);
var opts = map__25192__$1;
var statearr_25194_25200 = state;
(statearr_25194_25200[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25192,map__25192__$1,opts){
return (function (val){
var statearr_25195_25201 = state;
(statearr_25195_25201[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25192,map__25192__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25196_25202 = state;
(statearr_25196_25202[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25187){
var G__25188 = cljs.core.first.call(null,seq25187);
var seq25187__$1 = cljs.core.next.call(null,seq25187);
var G__25189 = cljs.core.first.call(null,seq25187__$1);
var seq25187__$2 = cljs.core.next.call(null,seq25187__$1);
var G__25190 = cljs.core.first.call(null,seq25187__$2);
var seq25187__$3 = cljs.core.next.call(null,seq25187__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25188,G__25189,G__25190,seq25187__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25366 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25366 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25367){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25367 = meta25367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25368,meta25367__$1){
var self__ = this;
var _25368__$1 = this;
return (new cljs.core.async.t25366(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25367__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25368){
var self__ = this;
var _25368__$1 = this;
return self__.meta25367;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25366.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25367","meta25367",1093706797,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25366.cljs$lang$type = true;

cljs.core.async.t25366.cljs$lang$ctorStr = "cljs.core.async/t25366";

cljs.core.async.t25366.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t25366");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25366 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25366(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25367){
return (new cljs.core.async.t25366(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25367));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25366(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18081__auto___25529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___25529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___25529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25466){
var state_val_25467 = (state_25466[(1)]);
if((state_val_25467 === (7))){
var inst_25384 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25468_25530 = state_25466__$1;
(statearr_25468_25530[(2)] = inst_25384);

(statearr_25468_25530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (20))){
var inst_25396 = (state_25466[(7)]);
var state_25466__$1 = state_25466;
var statearr_25469_25531 = state_25466__$1;
(statearr_25469_25531[(2)] = inst_25396);

(statearr_25469_25531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (27))){
var state_25466__$1 = state_25466;
var statearr_25470_25532 = state_25466__$1;
(statearr_25470_25532[(2)] = null);

(statearr_25470_25532[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (1))){
var inst_25372 = (state_25466[(8)]);
var inst_25372__$1 = calc_state.call(null);
var inst_25374 = (inst_25372__$1 == null);
var inst_25375 = cljs.core.not.call(null,inst_25374);
var state_25466__$1 = (function (){var statearr_25471 = state_25466;
(statearr_25471[(8)] = inst_25372__$1);

return statearr_25471;
})();
if(inst_25375){
var statearr_25472_25533 = state_25466__$1;
(statearr_25472_25533[(1)] = (2));

} else {
var statearr_25473_25534 = state_25466__$1;
(statearr_25473_25534[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (24))){
var inst_25419 = (state_25466[(9)]);
var inst_25440 = (state_25466[(10)]);
var inst_25426 = (state_25466[(11)]);
var inst_25440__$1 = inst_25419.call(null,inst_25426);
var state_25466__$1 = (function (){var statearr_25474 = state_25466;
(statearr_25474[(10)] = inst_25440__$1);

return statearr_25474;
})();
if(cljs.core.truth_(inst_25440__$1)){
var statearr_25475_25535 = state_25466__$1;
(statearr_25475_25535[(1)] = (29));

} else {
var statearr_25476_25536 = state_25466__$1;
(statearr_25476_25536[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (4))){
var inst_25387 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25387)){
var statearr_25477_25537 = state_25466__$1;
(statearr_25477_25537[(1)] = (8));

} else {
var statearr_25478_25538 = state_25466__$1;
(statearr_25478_25538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (15))){
var inst_25413 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25413)){
var statearr_25479_25539 = state_25466__$1;
(statearr_25479_25539[(1)] = (19));

} else {
var statearr_25480_25540 = state_25466__$1;
(statearr_25480_25540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (21))){
var inst_25418 = (state_25466[(12)]);
var inst_25418__$1 = (state_25466[(2)]);
var inst_25419 = cljs.core.get.call(null,inst_25418__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25420 = cljs.core.get.call(null,inst_25418__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25421 = cljs.core.get.call(null,inst_25418__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25466__$1 = (function (){var statearr_25481 = state_25466;
(statearr_25481[(12)] = inst_25418__$1);

(statearr_25481[(9)] = inst_25419);

(statearr_25481[(13)] = inst_25420);

return statearr_25481;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25466__$1,(22),inst_25421);
} else {
if((state_val_25467 === (31))){
var inst_25448 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25448)){
var statearr_25482_25541 = state_25466__$1;
(statearr_25482_25541[(1)] = (32));

} else {
var statearr_25483_25542 = state_25466__$1;
(statearr_25483_25542[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (32))){
var inst_25425 = (state_25466[(14)]);
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25466__$1,(35),out,inst_25425);
} else {
if((state_val_25467 === (33))){
var inst_25418 = (state_25466[(12)]);
var inst_25396 = inst_25418;
var state_25466__$1 = (function (){var statearr_25484 = state_25466;
(statearr_25484[(7)] = inst_25396);

return statearr_25484;
})();
var statearr_25485_25543 = state_25466__$1;
(statearr_25485_25543[(2)] = null);

(statearr_25485_25543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (13))){
var inst_25396 = (state_25466[(7)]);
var inst_25403 = inst_25396.cljs$lang$protocol_mask$partition0$;
var inst_25404 = (inst_25403 & (64));
var inst_25405 = inst_25396.cljs$core$ISeq$;
var inst_25406 = (inst_25404) || (inst_25405);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25406)){
var statearr_25486_25544 = state_25466__$1;
(statearr_25486_25544[(1)] = (16));

} else {
var statearr_25487_25545 = state_25466__$1;
(statearr_25487_25545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (22))){
var inst_25425 = (state_25466[(14)]);
var inst_25426 = (state_25466[(11)]);
var inst_25424 = (state_25466[(2)]);
var inst_25425__$1 = cljs.core.nth.call(null,inst_25424,(0),null);
var inst_25426__$1 = cljs.core.nth.call(null,inst_25424,(1),null);
var inst_25427 = (inst_25425__$1 == null);
var inst_25428 = cljs.core._EQ_.call(null,inst_25426__$1,change);
var inst_25429 = (inst_25427) || (inst_25428);
var state_25466__$1 = (function (){var statearr_25488 = state_25466;
(statearr_25488[(14)] = inst_25425__$1);

(statearr_25488[(11)] = inst_25426__$1);

return statearr_25488;
})();
if(cljs.core.truth_(inst_25429)){
var statearr_25489_25546 = state_25466__$1;
(statearr_25489_25546[(1)] = (23));

} else {
var statearr_25490_25547 = state_25466__$1;
(statearr_25490_25547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (36))){
var inst_25418 = (state_25466[(12)]);
var inst_25396 = inst_25418;
var state_25466__$1 = (function (){var statearr_25491 = state_25466;
(statearr_25491[(7)] = inst_25396);

return statearr_25491;
})();
var statearr_25492_25548 = state_25466__$1;
(statearr_25492_25548[(2)] = null);

(statearr_25492_25548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (29))){
var inst_25440 = (state_25466[(10)]);
var state_25466__$1 = state_25466;
var statearr_25493_25549 = state_25466__$1;
(statearr_25493_25549[(2)] = inst_25440);

(statearr_25493_25549[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (6))){
var state_25466__$1 = state_25466;
var statearr_25494_25550 = state_25466__$1;
(statearr_25494_25550[(2)] = false);

(statearr_25494_25550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (28))){
var inst_25436 = (state_25466[(2)]);
var inst_25437 = calc_state.call(null);
var inst_25396 = inst_25437;
var state_25466__$1 = (function (){var statearr_25495 = state_25466;
(statearr_25495[(7)] = inst_25396);

(statearr_25495[(15)] = inst_25436);

return statearr_25495;
})();
var statearr_25496_25551 = state_25466__$1;
(statearr_25496_25551[(2)] = null);

(statearr_25496_25551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (25))){
var inst_25462 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25497_25552 = state_25466__$1;
(statearr_25497_25552[(2)] = inst_25462);

(statearr_25497_25552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (34))){
var inst_25460 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25498_25553 = state_25466__$1;
(statearr_25498_25553[(2)] = inst_25460);

(statearr_25498_25553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (17))){
var state_25466__$1 = state_25466;
var statearr_25499_25554 = state_25466__$1;
(statearr_25499_25554[(2)] = false);

(statearr_25499_25554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (3))){
var state_25466__$1 = state_25466;
var statearr_25500_25555 = state_25466__$1;
(statearr_25500_25555[(2)] = false);

(statearr_25500_25555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (12))){
var inst_25464 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25466__$1,inst_25464);
} else {
if((state_val_25467 === (2))){
var inst_25372 = (state_25466[(8)]);
var inst_25377 = inst_25372.cljs$lang$protocol_mask$partition0$;
var inst_25378 = (inst_25377 & (64));
var inst_25379 = inst_25372.cljs$core$ISeq$;
var inst_25380 = (inst_25378) || (inst_25379);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25380)){
var statearr_25501_25556 = state_25466__$1;
(statearr_25501_25556[(1)] = (5));

} else {
var statearr_25502_25557 = state_25466__$1;
(statearr_25502_25557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (23))){
var inst_25425 = (state_25466[(14)]);
var inst_25431 = (inst_25425 == null);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25431)){
var statearr_25503_25558 = state_25466__$1;
(statearr_25503_25558[(1)] = (26));

} else {
var statearr_25504_25559 = state_25466__$1;
(statearr_25504_25559[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (35))){
var inst_25451 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25451)){
var statearr_25505_25560 = state_25466__$1;
(statearr_25505_25560[(1)] = (36));

} else {
var statearr_25506_25561 = state_25466__$1;
(statearr_25506_25561[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (19))){
var inst_25396 = (state_25466[(7)]);
var inst_25415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25396);
var state_25466__$1 = state_25466;
var statearr_25507_25562 = state_25466__$1;
(statearr_25507_25562[(2)] = inst_25415);

(statearr_25507_25562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (11))){
var inst_25396 = (state_25466[(7)]);
var inst_25400 = (inst_25396 == null);
var inst_25401 = cljs.core.not.call(null,inst_25400);
var state_25466__$1 = state_25466;
if(inst_25401){
var statearr_25508_25563 = state_25466__$1;
(statearr_25508_25563[(1)] = (13));

} else {
var statearr_25509_25564 = state_25466__$1;
(statearr_25509_25564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (9))){
var inst_25372 = (state_25466[(8)]);
var state_25466__$1 = state_25466;
var statearr_25510_25565 = state_25466__$1;
(statearr_25510_25565[(2)] = inst_25372);

(statearr_25510_25565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (5))){
var state_25466__$1 = state_25466;
var statearr_25511_25566 = state_25466__$1;
(statearr_25511_25566[(2)] = true);

(statearr_25511_25566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (14))){
var state_25466__$1 = state_25466;
var statearr_25512_25567 = state_25466__$1;
(statearr_25512_25567[(2)] = false);

(statearr_25512_25567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (26))){
var inst_25426 = (state_25466[(11)]);
var inst_25433 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25426);
var state_25466__$1 = state_25466;
var statearr_25513_25568 = state_25466__$1;
(statearr_25513_25568[(2)] = inst_25433);

(statearr_25513_25568[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (16))){
var state_25466__$1 = state_25466;
var statearr_25514_25569 = state_25466__$1;
(statearr_25514_25569[(2)] = true);

(statearr_25514_25569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (38))){
var inst_25456 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25515_25570 = state_25466__$1;
(statearr_25515_25570[(2)] = inst_25456);

(statearr_25515_25570[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (30))){
var inst_25419 = (state_25466[(9)]);
var inst_25420 = (state_25466[(13)]);
var inst_25426 = (state_25466[(11)]);
var inst_25443 = cljs.core.empty_QMARK_.call(null,inst_25419);
var inst_25444 = inst_25420.call(null,inst_25426);
var inst_25445 = cljs.core.not.call(null,inst_25444);
var inst_25446 = (inst_25443) && (inst_25445);
var state_25466__$1 = state_25466;
var statearr_25516_25571 = state_25466__$1;
(statearr_25516_25571[(2)] = inst_25446);

(statearr_25516_25571[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (10))){
var inst_25372 = (state_25466[(8)]);
var inst_25392 = (state_25466[(2)]);
var inst_25393 = cljs.core.get.call(null,inst_25392,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25394 = cljs.core.get.call(null,inst_25392,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25395 = cljs.core.get.call(null,inst_25392,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25396 = inst_25372;
var state_25466__$1 = (function (){var statearr_25517 = state_25466;
(statearr_25517[(7)] = inst_25396);

(statearr_25517[(16)] = inst_25394);

(statearr_25517[(17)] = inst_25395);

(statearr_25517[(18)] = inst_25393);

return statearr_25517;
})();
var statearr_25518_25572 = state_25466__$1;
(statearr_25518_25572[(2)] = null);

(statearr_25518_25572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (18))){
var inst_25410 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25519_25573 = state_25466__$1;
(statearr_25519_25573[(2)] = inst_25410);

(statearr_25519_25573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (37))){
var state_25466__$1 = state_25466;
var statearr_25520_25574 = state_25466__$1;
(statearr_25520_25574[(2)] = null);

(statearr_25520_25574[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (8))){
var inst_25372 = (state_25466[(8)]);
var inst_25389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25372);
var state_25466__$1 = state_25466;
var statearr_25521_25575 = state_25466__$1;
(statearr_25521_25575[(2)] = inst_25389);

(statearr_25521_25575[(1)] = (10));


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
});})(c__18081__auto___25529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18016__auto__,c__18081__auto___25529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18017__auto__ = null;
var cljs$core$async$mix_$_state_machine__18017__auto____0 = (function (){
var statearr_25525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25525[(0)] = cljs$core$async$mix_$_state_machine__18017__auto__);

(statearr_25525[(1)] = (1));

return statearr_25525;
});
var cljs$core$async$mix_$_state_machine__18017__auto____1 = (function (state_25466){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_25466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e25526){if((e25526 instanceof Object)){
var ex__18020__auto__ = e25526;
var statearr_25527_25576 = state_25466;
(statearr_25527_25576[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25577 = state_25466;
state_25466 = G__25577;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18017__auto__ = function(state_25466){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18017__auto____1.call(this,state_25466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18017__auto____0;
cljs$core$async$mix_$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18017__auto____1;
return cljs$core$async$mix_$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___25529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18083__auto__ = (function (){var statearr_25528 = f__18082__auto__.call(null);
(statearr_25528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___25529);

return statearr_25528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___25529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15987__auto__ = (((p == null))?null:p);
var m__15988__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__15988__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15987__auto__ = (((p == null))?null:p);
var m__15988__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,p,v,ch);
} else {
var m__15988__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args25580 = [];
var len__16390__auto___25583 = arguments.length;
var i__16391__auto___25584 = (0);
while(true){
if((i__16391__auto___25584 < len__16390__auto___25583)){
args25580.push((arguments[i__16391__auto___25584]));

var G__25585 = (i__16391__auto___25584 + (1));
i__16391__auto___25584 = G__25585;
continue;
} else {
}
break;
}

var G__25582 = args25580.length;
switch (G__25582) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25580.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15987__auto__ = (((p == null))?null:p);
var m__15988__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,p);
} else {
var m__15988__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15987__auto__ = (((p == null))?null:p);
var m__15988__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15987__auto__)]);
if(!((m__15988__auto__ == null))){
return m__15988__auto__.call(null,p,v);
} else {
var m__15988__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15988__auto____$1 == null))){
return m__15988__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args25588 = [];
var len__16390__auto___25713 = arguments.length;
var i__16391__auto___25714 = (0);
while(true){
if((i__16391__auto___25714 < len__16390__auto___25713)){
args25588.push((arguments[i__16391__auto___25714]));

var G__25715 = (i__16391__auto___25714 + (1));
i__16391__auto___25714 = G__25715;
continue;
} else {
}
break;
}

var G__25590 = args25588.length;
switch (G__25590) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25588.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__15351__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__15351__auto__)){
return or__15351__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15351__auto__,mults){
return (function (p1__25587_SHARP_){
if(cljs.core.truth_(p1__25587_SHARP_.call(null,topic))){
return p1__25587_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25587_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15351__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25591 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25591 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25592){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25592 = meta25592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25593,meta25592__$1){
var self__ = this;
var _25593__$1 = this;
return (new cljs.core.async.t25591(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25592__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25593){
var self__ = this;
var _25593__$1 = this;
return self__.meta25592;
});})(mults,ensure_mult))
;

cljs.core.async.t25591.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25591.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25591.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25591.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25591.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t25591.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25591.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25592","meta25592",-151638450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t25591.cljs$lang$type = true;

cljs.core.async.t25591.cljs$lang$ctorStr = "cljs.core.async/t25591";

cljs.core.async.t25591.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t25591");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25591 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t25591(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25592){
return (new cljs.core.async.t25591(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25592));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25591(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18081__auto___25717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___25717,mults,ensure_mult,p){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___25717,mults,ensure_mult,p){
return (function (state_25665){
var state_val_25666 = (state_25665[(1)]);
if((state_val_25666 === (7))){
var inst_25661 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25667_25718 = state_25665__$1;
(statearr_25667_25718[(2)] = inst_25661);

(statearr_25667_25718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (20))){
var state_25665__$1 = state_25665;
var statearr_25668_25719 = state_25665__$1;
(statearr_25668_25719[(2)] = null);

(statearr_25668_25719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (1))){
var state_25665__$1 = state_25665;
var statearr_25669_25720 = state_25665__$1;
(statearr_25669_25720[(2)] = null);

(statearr_25669_25720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (24))){
var inst_25644 = (state_25665[(7)]);
var inst_25653 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25644);
var state_25665__$1 = state_25665;
var statearr_25670_25721 = state_25665__$1;
(statearr_25670_25721[(2)] = inst_25653);

(statearr_25670_25721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (4))){
var inst_25596 = (state_25665[(8)]);
var inst_25596__$1 = (state_25665[(2)]);
var inst_25597 = (inst_25596__$1 == null);
var state_25665__$1 = (function (){var statearr_25671 = state_25665;
(statearr_25671[(8)] = inst_25596__$1);

return statearr_25671;
})();
if(cljs.core.truth_(inst_25597)){
var statearr_25672_25722 = state_25665__$1;
(statearr_25672_25722[(1)] = (5));

} else {
var statearr_25673_25723 = state_25665__$1;
(statearr_25673_25723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (15))){
var inst_25638 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25674_25724 = state_25665__$1;
(statearr_25674_25724[(2)] = inst_25638);

(statearr_25674_25724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (21))){
var inst_25658 = (state_25665[(2)]);
var state_25665__$1 = (function (){var statearr_25675 = state_25665;
(statearr_25675[(9)] = inst_25658);

return statearr_25675;
})();
var statearr_25676_25725 = state_25665__$1;
(statearr_25676_25725[(2)] = null);

(statearr_25676_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (13))){
var inst_25620 = (state_25665[(10)]);
var inst_25622 = cljs.core.chunked_seq_QMARK_.call(null,inst_25620);
var state_25665__$1 = state_25665;
if(inst_25622){
var statearr_25677_25726 = state_25665__$1;
(statearr_25677_25726[(1)] = (16));

} else {
var statearr_25678_25727 = state_25665__$1;
(statearr_25678_25727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (22))){
var inst_25650 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
if(cljs.core.truth_(inst_25650)){
var statearr_25679_25728 = state_25665__$1;
(statearr_25679_25728[(1)] = (23));

} else {
var statearr_25680_25729 = state_25665__$1;
(statearr_25680_25729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (6))){
var inst_25644 = (state_25665[(7)]);
var inst_25646 = (state_25665[(11)]);
var inst_25596 = (state_25665[(8)]);
var inst_25644__$1 = topic_fn.call(null,inst_25596);
var inst_25645 = cljs.core.deref.call(null,mults);
var inst_25646__$1 = cljs.core.get.call(null,inst_25645,inst_25644__$1);
var state_25665__$1 = (function (){var statearr_25681 = state_25665;
(statearr_25681[(7)] = inst_25644__$1);

(statearr_25681[(11)] = inst_25646__$1);

return statearr_25681;
})();
if(cljs.core.truth_(inst_25646__$1)){
var statearr_25682_25730 = state_25665__$1;
(statearr_25682_25730[(1)] = (19));

} else {
var statearr_25683_25731 = state_25665__$1;
(statearr_25683_25731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (25))){
var inst_25655 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25684_25732 = state_25665__$1;
(statearr_25684_25732[(2)] = inst_25655);

(statearr_25684_25732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (17))){
var inst_25620 = (state_25665[(10)]);
var inst_25629 = cljs.core.first.call(null,inst_25620);
var inst_25630 = cljs.core.async.muxch_STAR_.call(null,inst_25629);
var inst_25631 = cljs.core.async.close_BANG_.call(null,inst_25630);
var inst_25632 = cljs.core.next.call(null,inst_25620);
var inst_25606 = inst_25632;
var inst_25607 = null;
var inst_25608 = (0);
var inst_25609 = (0);
var state_25665__$1 = (function (){var statearr_25685 = state_25665;
(statearr_25685[(12)] = inst_25609);

(statearr_25685[(13)] = inst_25631);

(statearr_25685[(14)] = inst_25608);

(statearr_25685[(15)] = inst_25607);

(statearr_25685[(16)] = inst_25606);

return statearr_25685;
})();
var statearr_25686_25733 = state_25665__$1;
(statearr_25686_25733[(2)] = null);

(statearr_25686_25733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (3))){
var inst_25663 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25665__$1,inst_25663);
} else {
if((state_val_25666 === (12))){
var inst_25640 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25687_25734 = state_25665__$1;
(statearr_25687_25734[(2)] = inst_25640);

(statearr_25687_25734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (2))){
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(4),ch);
} else {
if((state_val_25666 === (23))){
var state_25665__$1 = state_25665;
var statearr_25688_25735 = state_25665__$1;
(statearr_25688_25735[(2)] = null);

(statearr_25688_25735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (19))){
var inst_25646 = (state_25665[(11)]);
var inst_25596 = (state_25665[(8)]);
var inst_25648 = cljs.core.async.muxch_STAR_.call(null,inst_25646);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(22),inst_25648,inst_25596);
} else {
if((state_val_25666 === (11))){
var inst_25606 = (state_25665[(16)]);
var inst_25620 = (state_25665[(10)]);
var inst_25620__$1 = cljs.core.seq.call(null,inst_25606);
var state_25665__$1 = (function (){var statearr_25689 = state_25665;
(statearr_25689[(10)] = inst_25620__$1);

return statearr_25689;
})();
if(inst_25620__$1){
var statearr_25690_25736 = state_25665__$1;
(statearr_25690_25736[(1)] = (13));

} else {
var statearr_25691_25737 = state_25665__$1;
(statearr_25691_25737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (9))){
var inst_25642 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25692_25738 = state_25665__$1;
(statearr_25692_25738[(2)] = inst_25642);

(statearr_25692_25738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (5))){
var inst_25603 = cljs.core.deref.call(null,mults);
var inst_25604 = cljs.core.vals.call(null,inst_25603);
var inst_25605 = cljs.core.seq.call(null,inst_25604);
var inst_25606 = inst_25605;
var inst_25607 = null;
var inst_25608 = (0);
var inst_25609 = (0);
var state_25665__$1 = (function (){var statearr_25693 = state_25665;
(statearr_25693[(12)] = inst_25609);

(statearr_25693[(14)] = inst_25608);

(statearr_25693[(15)] = inst_25607);

(statearr_25693[(16)] = inst_25606);

return statearr_25693;
})();
var statearr_25694_25739 = state_25665__$1;
(statearr_25694_25739[(2)] = null);

(statearr_25694_25739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (14))){
var state_25665__$1 = state_25665;
var statearr_25698_25740 = state_25665__$1;
(statearr_25698_25740[(2)] = null);

(statearr_25698_25740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (16))){
var inst_25620 = (state_25665[(10)]);
var inst_25624 = cljs.core.chunk_first.call(null,inst_25620);
var inst_25625 = cljs.core.chunk_rest.call(null,inst_25620);
var inst_25626 = cljs.core.count.call(null,inst_25624);
var inst_25606 = inst_25625;
var inst_25607 = inst_25624;
var inst_25608 = inst_25626;
var inst_25609 = (0);
var state_25665__$1 = (function (){var statearr_25699 = state_25665;
(statearr_25699[(12)] = inst_25609);

(statearr_25699[(14)] = inst_25608);

(statearr_25699[(15)] = inst_25607);

(statearr_25699[(16)] = inst_25606);

return statearr_25699;
})();
var statearr_25700_25741 = state_25665__$1;
(statearr_25700_25741[(2)] = null);

(statearr_25700_25741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (10))){
var inst_25609 = (state_25665[(12)]);
var inst_25608 = (state_25665[(14)]);
var inst_25607 = (state_25665[(15)]);
var inst_25606 = (state_25665[(16)]);
var inst_25614 = cljs.core._nth.call(null,inst_25607,inst_25609);
var inst_25615 = cljs.core.async.muxch_STAR_.call(null,inst_25614);
var inst_25616 = cljs.core.async.close_BANG_.call(null,inst_25615);
var inst_25617 = (inst_25609 + (1));
var tmp25695 = inst_25608;
var tmp25696 = inst_25607;
var tmp25697 = inst_25606;
var inst_25606__$1 = tmp25697;
var inst_25607__$1 = tmp25696;
var inst_25608__$1 = tmp25695;
var inst_25609__$1 = inst_25617;
var state_25665__$1 = (function (){var statearr_25701 = state_25665;
(statearr_25701[(12)] = inst_25609__$1);

(statearr_25701[(17)] = inst_25616);

(statearr_25701[(14)] = inst_25608__$1);

(statearr_25701[(15)] = inst_25607__$1);

(statearr_25701[(16)] = inst_25606__$1);

return statearr_25701;
})();
var statearr_25702_25742 = state_25665__$1;
(statearr_25702_25742[(2)] = null);

(statearr_25702_25742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (18))){
var inst_25635 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25703_25743 = state_25665__$1;
(statearr_25703_25743[(2)] = inst_25635);

(statearr_25703_25743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (8))){
var inst_25609 = (state_25665[(12)]);
var inst_25608 = (state_25665[(14)]);
var inst_25611 = (inst_25609 < inst_25608);
var inst_25612 = inst_25611;
var state_25665__$1 = state_25665;
if(cljs.core.truth_(inst_25612)){
var statearr_25704_25744 = state_25665__$1;
(statearr_25704_25744[(1)] = (10));

} else {
var statearr_25705_25745 = state_25665__$1;
(statearr_25705_25745[(1)] = (11));

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
});})(c__18081__auto___25717,mults,ensure_mult,p))
;
return ((function (switch__18016__auto__,c__18081__auto___25717,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_25709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25709[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_25709[(1)] = (1));

return statearr_25709;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_25665){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_25665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e25710){if((e25710 instanceof Object)){
var ex__18020__auto__ = e25710;
var statearr_25711_25746 = state_25665;
(statearr_25711_25746[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25747 = state_25665;
state_25665 = G__25747;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_25665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_25665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___25717,mults,ensure_mult,p))
})();
var state__18083__auto__ = (function (){var statearr_25712 = f__18082__auto__.call(null);
(statearr_25712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___25717);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___25717,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args25748 = [];
var len__16390__auto___25751 = arguments.length;
var i__16391__auto___25752 = (0);
while(true){
if((i__16391__auto___25752 < len__16390__auto___25751)){
args25748.push((arguments[i__16391__auto___25752]));

var G__25753 = (i__16391__auto___25752 + (1));
i__16391__auto___25752 = G__25753;
continue;
} else {
}
break;
}

var G__25750 = args25748.length;
switch (G__25750) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25748.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args25755 = [];
var len__16390__auto___25758 = arguments.length;
var i__16391__auto___25759 = (0);
while(true){
if((i__16391__auto___25759 < len__16390__auto___25758)){
args25755.push((arguments[i__16391__auto___25759]));

var G__25760 = (i__16391__auto___25759 + (1));
i__16391__auto___25759 = G__25760;
continue;
} else {
}
break;
}

var G__25757 = args25755.length;
switch (G__25757) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25755.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args25762 = [];
var len__16390__auto___25833 = arguments.length;
var i__16391__auto___25834 = (0);
while(true){
if((i__16391__auto___25834 < len__16390__auto___25833)){
args25762.push((arguments[i__16391__auto___25834]));

var G__25835 = (i__16391__auto___25834 + (1));
i__16391__auto___25834 = G__25835;
continue;
} else {
}
break;
}

var G__25764 = args25762.length;
switch (G__25764) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25762.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18081__auto___25837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___25837,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___25837,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25803){
var state_val_25804 = (state_25803[(1)]);
if((state_val_25804 === (7))){
var state_25803__$1 = state_25803;
var statearr_25805_25838 = state_25803__$1;
(statearr_25805_25838[(2)] = null);

(statearr_25805_25838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (1))){
var state_25803__$1 = state_25803;
var statearr_25806_25839 = state_25803__$1;
(statearr_25806_25839[(2)] = null);

(statearr_25806_25839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (4))){
var inst_25767 = (state_25803[(7)]);
var inst_25769 = (inst_25767 < cnt);
var state_25803__$1 = state_25803;
if(cljs.core.truth_(inst_25769)){
var statearr_25807_25840 = state_25803__$1;
(statearr_25807_25840[(1)] = (6));

} else {
var statearr_25808_25841 = state_25803__$1;
(statearr_25808_25841[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (15))){
var inst_25799 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25809_25842 = state_25803__$1;
(statearr_25809_25842[(2)] = inst_25799);

(statearr_25809_25842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (13))){
var inst_25792 = cljs.core.async.close_BANG_.call(null,out);
var state_25803__$1 = state_25803;
var statearr_25810_25843 = state_25803__$1;
(statearr_25810_25843[(2)] = inst_25792);

(statearr_25810_25843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (6))){
var state_25803__$1 = state_25803;
var statearr_25811_25844 = state_25803__$1;
(statearr_25811_25844[(2)] = null);

(statearr_25811_25844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (3))){
var inst_25801 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25803__$1,inst_25801);
} else {
if((state_val_25804 === (12))){
var inst_25789 = (state_25803[(8)]);
var inst_25789__$1 = (state_25803[(2)]);
var inst_25790 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25789__$1);
var state_25803__$1 = (function (){var statearr_25812 = state_25803;
(statearr_25812[(8)] = inst_25789__$1);

return statearr_25812;
})();
if(cljs.core.truth_(inst_25790)){
var statearr_25813_25845 = state_25803__$1;
(statearr_25813_25845[(1)] = (13));

} else {
var statearr_25814_25846 = state_25803__$1;
(statearr_25814_25846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (2))){
var inst_25766 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25767 = (0);
var state_25803__$1 = (function (){var statearr_25815 = state_25803;
(statearr_25815[(9)] = inst_25766);

(statearr_25815[(7)] = inst_25767);

return statearr_25815;
})();
var statearr_25816_25847 = state_25803__$1;
(statearr_25816_25847[(2)] = null);

(statearr_25816_25847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (11))){
var inst_25767 = (state_25803[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25803,(10),Object,null,(9));
var inst_25776 = chs__$1.call(null,inst_25767);
var inst_25777 = done.call(null,inst_25767);
var inst_25778 = cljs.core.async.take_BANG_.call(null,inst_25776,inst_25777);
var state_25803__$1 = state_25803;
var statearr_25817_25848 = state_25803__$1;
(statearr_25817_25848[(2)] = inst_25778);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25803__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (9))){
var inst_25767 = (state_25803[(7)]);
var inst_25780 = (state_25803[(2)]);
var inst_25781 = (inst_25767 + (1));
var inst_25767__$1 = inst_25781;
var state_25803__$1 = (function (){var statearr_25818 = state_25803;
(statearr_25818[(10)] = inst_25780);

(statearr_25818[(7)] = inst_25767__$1);

return statearr_25818;
})();
var statearr_25819_25849 = state_25803__$1;
(statearr_25819_25849[(2)] = null);

(statearr_25819_25849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (5))){
var inst_25787 = (state_25803[(2)]);
var state_25803__$1 = (function (){var statearr_25820 = state_25803;
(statearr_25820[(11)] = inst_25787);

return statearr_25820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25803__$1,(12),dchan);
} else {
if((state_val_25804 === (14))){
var inst_25789 = (state_25803[(8)]);
var inst_25794 = cljs.core.apply.call(null,f,inst_25789);
var state_25803__$1 = state_25803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25803__$1,(16),out,inst_25794);
} else {
if((state_val_25804 === (16))){
var inst_25796 = (state_25803[(2)]);
var state_25803__$1 = (function (){var statearr_25821 = state_25803;
(statearr_25821[(12)] = inst_25796);

return statearr_25821;
})();
var statearr_25822_25850 = state_25803__$1;
(statearr_25822_25850[(2)] = null);

(statearr_25822_25850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (10))){
var inst_25771 = (state_25803[(2)]);
var inst_25772 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25803__$1 = (function (){var statearr_25823 = state_25803;
(statearr_25823[(13)] = inst_25771);

return statearr_25823;
})();
var statearr_25824_25851 = state_25803__$1;
(statearr_25824_25851[(2)] = inst_25772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25803__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25804 === (8))){
var inst_25785 = (state_25803[(2)]);
var state_25803__$1 = state_25803;
var statearr_25825_25852 = state_25803__$1;
(statearr_25825_25852[(2)] = inst_25785);

(statearr_25825_25852[(1)] = (5));


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
});})(c__18081__auto___25837,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18016__auto__,c__18081__auto___25837,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_25829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25829[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_25829[(1)] = (1));

return statearr_25829;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_25803){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_25803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e25830){if((e25830 instanceof Object)){
var ex__18020__auto__ = e25830;
var statearr_25831_25853 = state_25803;
(statearr_25831_25853[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25854 = state_25803;
state_25803 = G__25854;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_25803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_25803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___25837,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18083__auto__ = (function (){var statearr_25832 = f__18082__auto__.call(null);
(statearr_25832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___25837);

return statearr_25832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___25837,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args25856 = [];
var len__16390__auto___25912 = arguments.length;
var i__16391__auto___25913 = (0);
while(true){
if((i__16391__auto___25913 < len__16390__auto___25912)){
args25856.push((arguments[i__16391__auto___25913]));

var G__25914 = (i__16391__auto___25913 + (1));
i__16391__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var G__25858 = args25856.length;
switch (G__25858) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25856.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18081__auto___25916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___25916,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___25916,out){
return (function (state_25888){
var state_val_25889 = (state_25888[(1)]);
if((state_val_25889 === (7))){
var inst_25868 = (state_25888[(7)]);
var inst_25867 = (state_25888[(8)]);
var inst_25867__$1 = (state_25888[(2)]);
var inst_25868__$1 = cljs.core.nth.call(null,inst_25867__$1,(0),null);
var inst_25869 = cljs.core.nth.call(null,inst_25867__$1,(1),null);
var inst_25870 = (inst_25868__$1 == null);
var state_25888__$1 = (function (){var statearr_25890 = state_25888;
(statearr_25890[(7)] = inst_25868__$1);

(statearr_25890[(8)] = inst_25867__$1);

(statearr_25890[(9)] = inst_25869);

return statearr_25890;
})();
if(cljs.core.truth_(inst_25870)){
var statearr_25891_25917 = state_25888__$1;
(statearr_25891_25917[(1)] = (8));

} else {
var statearr_25892_25918 = state_25888__$1;
(statearr_25892_25918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (1))){
var inst_25859 = cljs.core.vec.call(null,chs);
var inst_25860 = inst_25859;
var state_25888__$1 = (function (){var statearr_25893 = state_25888;
(statearr_25893[(10)] = inst_25860);

return statearr_25893;
})();
var statearr_25894_25919 = state_25888__$1;
(statearr_25894_25919[(2)] = null);

(statearr_25894_25919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (4))){
var inst_25860 = (state_25888[(10)]);
var state_25888__$1 = state_25888;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25888__$1,(7),inst_25860);
} else {
if((state_val_25889 === (6))){
var inst_25884 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25895_25920 = state_25888__$1;
(statearr_25895_25920[(2)] = inst_25884);

(statearr_25895_25920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (3))){
var inst_25886 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25888__$1,inst_25886);
} else {
if((state_val_25889 === (2))){
var inst_25860 = (state_25888[(10)]);
var inst_25862 = cljs.core.count.call(null,inst_25860);
var inst_25863 = (inst_25862 > (0));
var state_25888__$1 = state_25888;
if(cljs.core.truth_(inst_25863)){
var statearr_25897_25921 = state_25888__$1;
(statearr_25897_25921[(1)] = (4));

} else {
var statearr_25898_25922 = state_25888__$1;
(statearr_25898_25922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (11))){
var inst_25860 = (state_25888[(10)]);
var inst_25877 = (state_25888[(2)]);
var tmp25896 = inst_25860;
var inst_25860__$1 = tmp25896;
var state_25888__$1 = (function (){var statearr_25899 = state_25888;
(statearr_25899[(10)] = inst_25860__$1);

(statearr_25899[(11)] = inst_25877);

return statearr_25899;
})();
var statearr_25900_25923 = state_25888__$1;
(statearr_25900_25923[(2)] = null);

(statearr_25900_25923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (9))){
var inst_25868 = (state_25888[(7)]);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25888__$1,(11),out,inst_25868);
} else {
if((state_val_25889 === (5))){
var inst_25882 = cljs.core.async.close_BANG_.call(null,out);
var state_25888__$1 = state_25888;
var statearr_25901_25924 = state_25888__$1;
(statearr_25901_25924[(2)] = inst_25882);

(statearr_25901_25924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (10))){
var inst_25880 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25902_25925 = state_25888__$1;
(statearr_25902_25925[(2)] = inst_25880);

(statearr_25902_25925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (8))){
var inst_25868 = (state_25888[(7)]);
var inst_25867 = (state_25888[(8)]);
var inst_25869 = (state_25888[(9)]);
var inst_25860 = (state_25888[(10)]);
var inst_25872 = (function (){var cs = inst_25860;
var vec__25865 = inst_25867;
var v = inst_25868;
var c = inst_25869;
return ((function (cs,vec__25865,v,c,inst_25868,inst_25867,inst_25869,inst_25860,state_val_25889,c__18081__auto___25916,out){
return (function (p1__25855_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25855_SHARP_);
});
;})(cs,vec__25865,v,c,inst_25868,inst_25867,inst_25869,inst_25860,state_val_25889,c__18081__auto___25916,out))
})();
var inst_25873 = cljs.core.filterv.call(null,inst_25872,inst_25860);
var inst_25860__$1 = inst_25873;
var state_25888__$1 = (function (){var statearr_25903 = state_25888;
(statearr_25903[(10)] = inst_25860__$1);

return statearr_25903;
})();
var statearr_25904_25926 = state_25888__$1;
(statearr_25904_25926[(2)] = null);

(statearr_25904_25926[(1)] = (2));


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
});})(c__18081__auto___25916,out))
;
return ((function (switch__18016__auto__,c__18081__auto___25916,out){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_25908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25908[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_25908[(1)] = (1));

return statearr_25908;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_25888){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_25888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e25909){if((e25909 instanceof Object)){
var ex__18020__auto__ = e25909;
var statearr_25910_25927 = state_25888;
(statearr_25910_25927[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25928 = state_25888;
state_25888 = G__25928;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_25888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_25888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___25916,out))
})();
var state__18083__auto__ = (function (){var statearr_25911 = f__18082__auto__.call(null);
(statearr_25911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___25916);

return statearr_25911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___25916,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args25929 = [];
var len__16390__auto___25978 = arguments.length;
var i__16391__auto___25979 = (0);
while(true){
if((i__16391__auto___25979 < len__16390__auto___25978)){
args25929.push((arguments[i__16391__auto___25979]));

var G__25980 = (i__16391__auto___25979 + (1));
i__16391__auto___25979 = G__25980;
continue;
} else {
}
break;
}

var G__25931 = args25929.length;
switch (G__25931) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25929.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18081__auto___25982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___25982,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___25982,out){
return (function (state_25955){
var state_val_25956 = (state_25955[(1)]);
if((state_val_25956 === (7))){
var inst_25937 = (state_25955[(7)]);
var inst_25937__$1 = (state_25955[(2)]);
var inst_25938 = (inst_25937__$1 == null);
var inst_25939 = cljs.core.not.call(null,inst_25938);
var state_25955__$1 = (function (){var statearr_25957 = state_25955;
(statearr_25957[(7)] = inst_25937__$1);

return statearr_25957;
})();
if(inst_25939){
var statearr_25958_25983 = state_25955__$1;
(statearr_25958_25983[(1)] = (8));

} else {
var statearr_25959_25984 = state_25955__$1;
(statearr_25959_25984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (1))){
var inst_25932 = (0);
var state_25955__$1 = (function (){var statearr_25960 = state_25955;
(statearr_25960[(8)] = inst_25932);

return statearr_25960;
})();
var statearr_25961_25985 = state_25955__$1;
(statearr_25961_25985[(2)] = null);

(statearr_25961_25985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (4))){
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25955__$1,(7),ch);
} else {
if((state_val_25956 === (6))){
var inst_25950 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25962_25986 = state_25955__$1;
(statearr_25962_25986[(2)] = inst_25950);

(statearr_25962_25986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (3))){
var inst_25952 = (state_25955[(2)]);
var inst_25953 = cljs.core.async.close_BANG_.call(null,out);
var state_25955__$1 = (function (){var statearr_25963 = state_25955;
(statearr_25963[(9)] = inst_25952);

return statearr_25963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25955__$1,inst_25953);
} else {
if((state_val_25956 === (2))){
var inst_25932 = (state_25955[(8)]);
var inst_25934 = (inst_25932 < n);
var state_25955__$1 = state_25955;
if(cljs.core.truth_(inst_25934)){
var statearr_25964_25987 = state_25955__$1;
(statearr_25964_25987[(1)] = (4));

} else {
var statearr_25965_25988 = state_25955__$1;
(statearr_25965_25988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (11))){
var inst_25932 = (state_25955[(8)]);
var inst_25942 = (state_25955[(2)]);
var inst_25943 = (inst_25932 + (1));
var inst_25932__$1 = inst_25943;
var state_25955__$1 = (function (){var statearr_25966 = state_25955;
(statearr_25966[(8)] = inst_25932__$1);

(statearr_25966[(10)] = inst_25942);

return statearr_25966;
})();
var statearr_25967_25989 = state_25955__$1;
(statearr_25967_25989[(2)] = null);

(statearr_25967_25989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (9))){
var state_25955__$1 = state_25955;
var statearr_25968_25990 = state_25955__$1;
(statearr_25968_25990[(2)] = null);

(statearr_25968_25990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (5))){
var state_25955__$1 = state_25955;
var statearr_25969_25991 = state_25955__$1;
(statearr_25969_25991[(2)] = null);

(statearr_25969_25991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (10))){
var inst_25947 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25970_25992 = state_25955__$1;
(statearr_25970_25992[(2)] = inst_25947);

(statearr_25970_25992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (8))){
var inst_25937 = (state_25955[(7)]);
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25955__$1,(11),out,inst_25937);
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
});})(c__18081__auto___25982,out))
;
return ((function (switch__18016__auto__,c__18081__auto___25982,out){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_25974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25974[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_25974[(1)] = (1));

return statearr_25974;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_25955){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_25955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e25975){if((e25975 instanceof Object)){
var ex__18020__auto__ = e25975;
var statearr_25976_25993 = state_25955;
(statearr_25976_25993[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25994 = state_25955;
state_25955 = G__25994;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_25955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_25955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___25982,out))
})();
var state__18083__auto__ = (function (){var statearr_25977 = f__18082__auto__.call(null);
(statearr_25977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___25982);

return statearr_25977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___25982,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26002 = (function (map_LT_,f,ch,meta26003){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26003 = meta26003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26004,meta26003__$1){
var self__ = this;
var _26004__$1 = this;
return (new cljs.core.async.t26002(self__.map_LT_,self__.f,self__.ch,meta26003__$1));
});

cljs.core.async.t26002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26004){
var self__ = this;
var _26004__$1 = this;
return self__.meta26003;
});

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26005 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26005 = (function (map_LT_,f,ch,meta26003,_,fn1,meta26006){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26003 = meta26003;
this._ = _;
this.fn1 = fn1;
this.meta26006 = meta26006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26007,meta26006__$1){
var self__ = this;
var _26007__$1 = this;
return (new cljs.core.async.t26005(self__.map_LT_,self__.f,self__.ch,self__.meta26003,self__._,self__.fn1,meta26006__$1));
});})(___$1))
;

cljs.core.async.t26005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26007){
var self__ = this;
var _26007__$1 = this;
return self__.meta26006;
});})(___$1))
;

cljs.core.async.t26005.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25995_SHARP_){
return f1.call(null,(((p1__25995_SHARP_ == null))?null:self__.f.call(null,p1__25995_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26005.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26003","meta26003",-487065544,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t26002","cljs.core.async/t26002",45264322,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26006","meta26006",174125758,null)], null);
});})(___$1))
;

cljs.core.async.t26005.cljs$lang$type = true;

cljs.core.async.t26005.cljs$lang$ctorStr = "cljs.core.async/t26005";

cljs.core.async.t26005.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t26005");
});})(___$1))
;

cljs.core.async.__GT_t26005 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26005(map_LT___$1,f__$1,ch__$1,meta26003__$1,___$2,fn1__$1,meta26006){
return (new cljs.core.async.t26005(map_LT___$1,f__$1,ch__$1,meta26003__$1,___$2,fn1__$1,meta26006));
});})(___$1))
;

}

return (new cljs.core.async.t26005(self__.map_LT_,self__.f,self__.ch,self__.meta26003,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15339__auto__ = ret;
if(cljs.core.truth_(and__15339__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__15339__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26003","meta26003",-487065544,null)], null);
});

cljs.core.async.t26002.cljs$lang$type = true;

cljs.core.async.t26002.cljs$lang$ctorStr = "cljs.core.async/t26002";

cljs.core.async.t26002.cljs$lang$ctorPrWriter = (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t26002");
});

cljs.core.async.__GT_t26002 = (function cljs$core$async$map_LT__$___GT_t26002(map_LT___$1,f__$1,ch__$1,meta26003){
return (new cljs.core.async.t26002(map_LT___$1,f__$1,ch__$1,meta26003));
});

}

return (new cljs.core.async.t26002(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26011 = (function (map_GT_,f,ch,meta26012){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26012 = meta26012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26013,meta26012__$1){
var self__ = this;
var _26013__$1 = this;
return (new cljs.core.async.t26011(self__.map_GT_,self__.f,self__.ch,meta26012__$1));
});

cljs.core.async.t26011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26013){
var self__ = this;
var _26013__$1 = this;
return self__.meta26012;
});

cljs.core.async.t26011.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26011.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26011.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26012","meta26012",867841006,null)], null);
});

cljs.core.async.t26011.cljs$lang$type = true;

cljs.core.async.t26011.cljs$lang$ctorStr = "cljs.core.async/t26011";

cljs.core.async.t26011.cljs$lang$ctorPrWriter = (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t26011");
});

cljs.core.async.__GT_t26011 = (function cljs$core$async$map_GT__$___GT_t26011(map_GT___$1,f__$1,ch__$1,meta26012){
return (new cljs.core.async.t26011(map_GT___$1,f__$1,ch__$1,meta26012));
});

}

return (new cljs.core.async.t26011(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26017 = (function (filter_GT_,p,ch,meta26018){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26018 = meta26018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26019,meta26018__$1){
var self__ = this;
var _26019__$1 = this;
return (new cljs.core.async.t26017(self__.filter_GT_,self__.p,self__.ch,meta26018__$1));
});

cljs.core.async.t26017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26019){
var self__ = this;
var _26019__$1 = this;
return self__.meta26018;
});

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26018","meta26018",-1339974691,null)], null);
});

cljs.core.async.t26017.cljs$lang$type = true;

cljs.core.async.t26017.cljs$lang$ctorStr = "cljs.core.async/t26017";

cljs.core.async.t26017.cljs$lang$ctorPrWriter = (function (this__15930__auto__,writer__15931__auto__,opt__15932__auto__){
return cljs.core._write.call(null,writer__15931__auto__,"cljs.core.async/t26017");
});

cljs.core.async.__GT_t26017 = (function cljs$core$async$filter_GT__$___GT_t26017(filter_GT___$1,p__$1,ch__$1,meta26018){
return (new cljs.core.async.t26017(filter_GT___$1,p__$1,ch__$1,meta26018));
});

}

return (new cljs.core.async.t26017(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args26020 = [];
var len__16390__auto___26064 = arguments.length;
var i__16391__auto___26065 = (0);
while(true){
if((i__16391__auto___26065 < len__16390__auto___26064)){
args26020.push((arguments[i__16391__auto___26065]));

var G__26066 = (i__16391__auto___26065 + (1));
i__16391__auto___26065 = G__26066;
continue;
} else {
}
break;
}

var G__26022 = args26020.length;
switch (G__26022) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26020.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18081__auto___26068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___26068,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___26068,out){
return (function (state_26043){
var state_val_26044 = (state_26043[(1)]);
if((state_val_26044 === (7))){
var inst_26039 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26045_26069 = state_26043__$1;
(statearr_26045_26069[(2)] = inst_26039);

(statearr_26045_26069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (1))){
var state_26043__$1 = state_26043;
var statearr_26046_26070 = state_26043__$1;
(statearr_26046_26070[(2)] = null);

(statearr_26046_26070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (4))){
var inst_26025 = (state_26043[(7)]);
var inst_26025__$1 = (state_26043[(2)]);
var inst_26026 = (inst_26025__$1 == null);
var state_26043__$1 = (function (){var statearr_26047 = state_26043;
(statearr_26047[(7)] = inst_26025__$1);

return statearr_26047;
})();
if(cljs.core.truth_(inst_26026)){
var statearr_26048_26071 = state_26043__$1;
(statearr_26048_26071[(1)] = (5));

} else {
var statearr_26049_26072 = state_26043__$1;
(statearr_26049_26072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (6))){
var inst_26025 = (state_26043[(7)]);
var inst_26030 = p.call(null,inst_26025);
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_26030)){
var statearr_26050_26073 = state_26043__$1;
(statearr_26050_26073[(1)] = (8));

} else {
var statearr_26051_26074 = state_26043__$1;
(statearr_26051_26074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (3))){
var inst_26041 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26043__$1,inst_26041);
} else {
if((state_val_26044 === (2))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(4),ch);
} else {
if((state_val_26044 === (11))){
var inst_26033 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26052_26075 = state_26043__$1;
(statearr_26052_26075[(2)] = inst_26033);

(statearr_26052_26075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (9))){
var state_26043__$1 = state_26043;
var statearr_26053_26076 = state_26043__$1;
(statearr_26053_26076[(2)] = null);

(statearr_26053_26076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (5))){
var inst_26028 = cljs.core.async.close_BANG_.call(null,out);
var state_26043__$1 = state_26043;
var statearr_26054_26077 = state_26043__$1;
(statearr_26054_26077[(2)] = inst_26028);

(statearr_26054_26077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (10))){
var inst_26036 = (state_26043[(2)]);
var state_26043__$1 = (function (){var statearr_26055 = state_26043;
(statearr_26055[(8)] = inst_26036);

return statearr_26055;
})();
var statearr_26056_26078 = state_26043__$1;
(statearr_26056_26078[(2)] = null);

(statearr_26056_26078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (8))){
var inst_26025 = (state_26043[(7)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26043__$1,(11),out,inst_26025);
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
});})(c__18081__auto___26068,out))
;
return ((function (switch__18016__auto__,c__18081__auto___26068,out){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_26060 = [null,null,null,null,null,null,null,null,null];
(statearr_26060[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_26060[(1)] = (1));

return statearr_26060;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_26043){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_26043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e26061){if((e26061 instanceof Object)){
var ex__18020__auto__ = e26061;
var statearr_26062_26079 = state_26043;
(statearr_26062_26079[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26080 = state_26043;
state_26043 = G__26080;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___26068,out))
})();
var state__18083__auto__ = (function (){var statearr_26063 = f__18082__auto__.call(null);
(statearr_26063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___26068);

return statearr_26063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___26068,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args26081 = [];
var len__16390__auto___26084 = arguments.length;
var i__16391__auto___26085 = (0);
while(true){
if((i__16391__auto___26085 < len__16390__auto___26084)){
args26081.push((arguments[i__16391__auto___26085]));

var G__26086 = (i__16391__auto___26085 + (1));
i__16391__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var G__26083 = args26081.length;
switch (G__26083) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26081.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto__){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto__){
return (function (state_26253){
var state_val_26254 = (state_26253[(1)]);
if((state_val_26254 === (7))){
var inst_26249 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26255_26296 = state_26253__$1;
(statearr_26255_26296[(2)] = inst_26249);

(statearr_26255_26296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (20))){
var inst_26219 = (state_26253[(7)]);
var inst_26230 = (state_26253[(2)]);
var inst_26231 = cljs.core.next.call(null,inst_26219);
var inst_26205 = inst_26231;
var inst_26206 = null;
var inst_26207 = (0);
var inst_26208 = (0);
var state_26253__$1 = (function (){var statearr_26256 = state_26253;
(statearr_26256[(8)] = inst_26207);

(statearr_26256[(9)] = inst_26230);

(statearr_26256[(10)] = inst_26205);

(statearr_26256[(11)] = inst_26208);

(statearr_26256[(12)] = inst_26206);

return statearr_26256;
})();
var statearr_26257_26297 = state_26253__$1;
(statearr_26257_26297[(2)] = null);

(statearr_26257_26297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (1))){
var state_26253__$1 = state_26253;
var statearr_26258_26298 = state_26253__$1;
(statearr_26258_26298[(2)] = null);

(statearr_26258_26298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (4))){
var inst_26194 = (state_26253[(13)]);
var inst_26194__$1 = (state_26253[(2)]);
var inst_26195 = (inst_26194__$1 == null);
var state_26253__$1 = (function (){var statearr_26259 = state_26253;
(statearr_26259[(13)] = inst_26194__$1);

return statearr_26259;
})();
if(cljs.core.truth_(inst_26195)){
var statearr_26260_26299 = state_26253__$1;
(statearr_26260_26299[(1)] = (5));

} else {
var statearr_26261_26300 = state_26253__$1;
(statearr_26261_26300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (15))){
var state_26253__$1 = state_26253;
var statearr_26265_26301 = state_26253__$1;
(statearr_26265_26301[(2)] = null);

(statearr_26265_26301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (21))){
var state_26253__$1 = state_26253;
var statearr_26266_26302 = state_26253__$1;
(statearr_26266_26302[(2)] = null);

(statearr_26266_26302[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (13))){
var inst_26207 = (state_26253[(8)]);
var inst_26205 = (state_26253[(10)]);
var inst_26208 = (state_26253[(11)]);
var inst_26206 = (state_26253[(12)]);
var inst_26215 = (state_26253[(2)]);
var inst_26216 = (inst_26208 + (1));
var tmp26262 = inst_26207;
var tmp26263 = inst_26205;
var tmp26264 = inst_26206;
var inst_26205__$1 = tmp26263;
var inst_26206__$1 = tmp26264;
var inst_26207__$1 = tmp26262;
var inst_26208__$1 = inst_26216;
var state_26253__$1 = (function (){var statearr_26267 = state_26253;
(statearr_26267[(8)] = inst_26207__$1);

(statearr_26267[(14)] = inst_26215);

(statearr_26267[(10)] = inst_26205__$1);

(statearr_26267[(11)] = inst_26208__$1);

(statearr_26267[(12)] = inst_26206__$1);

return statearr_26267;
})();
var statearr_26268_26303 = state_26253__$1;
(statearr_26268_26303[(2)] = null);

(statearr_26268_26303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (22))){
var state_26253__$1 = state_26253;
var statearr_26269_26304 = state_26253__$1;
(statearr_26269_26304[(2)] = null);

(statearr_26269_26304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (6))){
var inst_26194 = (state_26253[(13)]);
var inst_26203 = f.call(null,inst_26194);
var inst_26204 = cljs.core.seq.call(null,inst_26203);
var inst_26205 = inst_26204;
var inst_26206 = null;
var inst_26207 = (0);
var inst_26208 = (0);
var state_26253__$1 = (function (){var statearr_26270 = state_26253;
(statearr_26270[(8)] = inst_26207);

(statearr_26270[(10)] = inst_26205);

(statearr_26270[(11)] = inst_26208);

(statearr_26270[(12)] = inst_26206);

return statearr_26270;
})();
var statearr_26271_26305 = state_26253__$1;
(statearr_26271_26305[(2)] = null);

(statearr_26271_26305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (17))){
var inst_26219 = (state_26253[(7)]);
var inst_26223 = cljs.core.chunk_first.call(null,inst_26219);
var inst_26224 = cljs.core.chunk_rest.call(null,inst_26219);
var inst_26225 = cljs.core.count.call(null,inst_26223);
var inst_26205 = inst_26224;
var inst_26206 = inst_26223;
var inst_26207 = inst_26225;
var inst_26208 = (0);
var state_26253__$1 = (function (){var statearr_26272 = state_26253;
(statearr_26272[(8)] = inst_26207);

(statearr_26272[(10)] = inst_26205);

(statearr_26272[(11)] = inst_26208);

(statearr_26272[(12)] = inst_26206);

return statearr_26272;
})();
var statearr_26273_26306 = state_26253__$1;
(statearr_26273_26306[(2)] = null);

(statearr_26273_26306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (3))){
var inst_26251 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26253__$1,inst_26251);
} else {
if((state_val_26254 === (12))){
var inst_26239 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26274_26307 = state_26253__$1;
(statearr_26274_26307[(2)] = inst_26239);

(statearr_26274_26307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (2))){
var state_26253__$1 = state_26253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26253__$1,(4),in$);
} else {
if((state_val_26254 === (23))){
var inst_26247 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26275_26308 = state_26253__$1;
(statearr_26275_26308[(2)] = inst_26247);

(statearr_26275_26308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (19))){
var inst_26234 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26276_26309 = state_26253__$1;
(statearr_26276_26309[(2)] = inst_26234);

(statearr_26276_26309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (11))){
var inst_26219 = (state_26253[(7)]);
var inst_26205 = (state_26253[(10)]);
var inst_26219__$1 = cljs.core.seq.call(null,inst_26205);
var state_26253__$1 = (function (){var statearr_26277 = state_26253;
(statearr_26277[(7)] = inst_26219__$1);

return statearr_26277;
})();
if(inst_26219__$1){
var statearr_26278_26310 = state_26253__$1;
(statearr_26278_26310[(1)] = (14));

} else {
var statearr_26279_26311 = state_26253__$1;
(statearr_26279_26311[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (9))){
var inst_26241 = (state_26253[(2)]);
var inst_26242 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26253__$1 = (function (){var statearr_26280 = state_26253;
(statearr_26280[(15)] = inst_26241);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26242)){
var statearr_26281_26312 = state_26253__$1;
(statearr_26281_26312[(1)] = (21));

} else {
var statearr_26282_26313 = state_26253__$1;
(statearr_26282_26313[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (5))){
var inst_26197 = cljs.core.async.close_BANG_.call(null,out);
var state_26253__$1 = state_26253;
var statearr_26283_26314 = state_26253__$1;
(statearr_26283_26314[(2)] = inst_26197);

(statearr_26283_26314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (14))){
var inst_26219 = (state_26253[(7)]);
var inst_26221 = cljs.core.chunked_seq_QMARK_.call(null,inst_26219);
var state_26253__$1 = state_26253;
if(inst_26221){
var statearr_26284_26315 = state_26253__$1;
(statearr_26284_26315[(1)] = (17));

} else {
var statearr_26285_26316 = state_26253__$1;
(statearr_26285_26316[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (16))){
var inst_26237 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26286_26317 = state_26253__$1;
(statearr_26286_26317[(2)] = inst_26237);

(statearr_26286_26317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (10))){
var inst_26208 = (state_26253[(11)]);
var inst_26206 = (state_26253[(12)]);
var inst_26213 = cljs.core._nth.call(null,inst_26206,inst_26208);
var state_26253__$1 = state_26253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26253__$1,(13),out,inst_26213);
} else {
if((state_val_26254 === (18))){
var inst_26219 = (state_26253[(7)]);
var inst_26228 = cljs.core.first.call(null,inst_26219);
var state_26253__$1 = state_26253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26253__$1,(20),out,inst_26228);
} else {
if((state_val_26254 === (8))){
var inst_26207 = (state_26253[(8)]);
var inst_26208 = (state_26253[(11)]);
var inst_26210 = (inst_26208 < inst_26207);
var inst_26211 = inst_26210;
var state_26253__$1 = state_26253;
if(cljs.core.truth_(inst_26211)){
var statearr_26287_26318 = state_26253__$1;
(statearr_26287_26318[(1)] = (10));

} else {
var statearr_26288_26319 = state_26253__$1;
(statearr_26288_26319[(1)] = (11));

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
});})(c__18081__auto__))
;
return ((function (switch__18016__auto__,c__18081__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18017__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18017__auto____0 = (function (){
var statearr_26292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26292[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18017__auto__);

(statearr_26292[(1)] = (1));

return statearr_26292;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18017__auto____1 = (function (state_26253){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_26253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e26293){if((e26293 instanceof Object)){
var ex__18020__auto__ = e26293;
var statearr_26294_26320 = state_26253;
(statearr_26294_26320[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26321 = state_26253;
state_26253 = G__26321;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18017__auto__ = function(state_26253){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18017__auto____1.call(this,state_26253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18017__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18017__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto__))
})();
var state__18083__auto__ = (function (){var statearr_26295 = f__18082__auto__.call(null);
(statearr_26295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto__);

return statearr_26295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto__))
);

return c__18081__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args26322 = [];
var len__16390__auto___26325 = arguments.length;
var i__16391__auto___26326 = (0);
while(true){
if((i__16391__auto___26326 < len__16390__auto___26325)){
args26322.push((arguments[i__16391__auto___26326]));

var G__26327 = (i__16391__auto___26326 + (1));
i__16391__auto___26326 = G__26327;
continue;
} else {
}
break;
}

var G__26324 = args26322.length;
switch (G__26324) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26322.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args26329 = [];
var len__16390__auto___26332 = arguments.length;
var i__16391__auto___26333 = (0);
while(true){
if((i__16391__auto___26333 < len__16390__auto___26332)){
args26329.push((arguments[i__16391__auto___26333]));

var G__26334 = (i__16391__auto___26333 + (1));
i__16391__auto___26333 = G__26334;
continue;
} else {
}
break;
}

var G__26331 = args26329.length;
switch (G__26331) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26329.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args26336 = [];
var len__16390__auto___26387 = arguments.length;
var i__16391__auto___26388 = (0);
while(true){
if((i__16391__auto___26388 < len__16390__auto___26387)){
args26336.push((arguments[i__16391__auto___26388]));

var G__26389 = (i__16391__auto___26388 + (1));
i__16391__auto___26388 = G__26389;
continue;
} else {
}
break;
}

var G__26338 = args26336.length;
switch (G__26338) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26336.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18081__auto___26391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___26391,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___26391,out){
return (function (state_26362){
var state_val_26363 = (state_26362[(1)]);
if((state_val_26363 === (7))){
var inst_26357 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26364_26392 = state_26362__$1;
(statearr_26364_26392[(2)] = inst_26357);

(statearr_26364_26392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (1))){
var inst_26339 = null;
var state_26362__$1 = (function (){var statearr_26365 = state_26362;
(statearr_26365[(7)] = inst_26339);

return statearr_26365;
})();
var statearr_26366_26393 = state_26362__$1;
(statearr_26366_26393[(2)] = null);

(statearr_26366_26393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (4))){
var inst_26342 = (state_26362[(8)]);
var inst_26342__$1 = (state_26362[(2)]);
var inst_26343 = (inst_26342__$1 == null);
var inst_26344 = cljs.core.not.call(null,inst_26343);
var state_26362__$1 = (function (){var statearr_26367 = state_26362;
(statearr_26367[(8)] = inst_26342__$1);

return statearr_26367;
})();
if(inst_26344){
var statearr_26368_26394 = state_26362__$1;
(statearr_26368_26394[(1)] = (5));

} else {
var statearr_26369_26395 = state_26362__$1;
(statearr_26369_26395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (6))){
var state_26362__$1 = state_26362;
var statearr_26370_26396 = state_26362__$1;
(statearr_26370_26396[(2)] = null);

(statearr_26370_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (3))){
var inst_26359 = (state_26362[(2)]);
var inst_26360 = cljs.core.async.close_BANG_.call(null,out);
var state_26362__$1 = (function (){var statearr_26371 = state_26362;
(statearr_26371[(9)] = inst_26359);

return statearr_26371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26362__$1,inst_26360);
} else {
if((state_val_26363 === (2))){
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26362__$1,(4),ch);
} else {
if((state_val_26363 === (11))){
var inst_26342 = (state_26362[(8)]);
var inst_26351 = (state_26362[(2)]);
var inst_26339 = inst_26342;
var state_26362__$1 = (function (){var statearr_26372 = state_26362;
(statearr_26372[(10)] = inst_26351);

(statearr_26372[(7)] = inst_26339);

return statearr_26372;
})();
var statearr_26373_26397 = state_26362__$1;
(statearr_26373_26397[(2)] = null);

(statearr_26373_26397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (9))){
var inst_26342 = (state_26362[(8)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26362__$1,(11),out,inst_26342);
} else {
if((state_val_26363 === (5))){
var inst_26342 = (state_26362[(8)]);
var inst_26339 = (state_26362[(7)]);
var inst_26346 = cljs.core._EQ_.call(null,inst_26342,inst_26339);
var state_26362__$1 = state_26362;
if(inst_26346){
var statearr_26375_26398 = state_26362__$1;
(statearr_26375_26398[(1)] = (8));

} else {
var statearr_26376_26399 = state_26362__$1;
(statearr_26376_26399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (10))){
var inst_26354 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26377_26400 = state_26362__$1;
(statearr_26377_26400[(2)] = inst_26354);

(statearr_26377_26400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (8))){
var inst_26339 = (state_26362[(7)]);
var tmp26374 = inst_26339;
var inst_26339__$1 = tmp26374;
var state_26362__$1 = (function (){var statearr_26378 = state_26362;
(statearr_26378[(7)] = inst_26339__$1);

return statearr_26378;
})();
var statearr_26379_26401 = state_26362__$1;
(statearr_26379_26401[(2)] = null);

(statearr_26379_26401[(1)] = (2));


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
});})(c__18081__auto___26391,out))
;
return ((function (switch__18016__auto__,c__18081__auto___26391,out){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_26383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26383[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_26383[(1)] = (1));

return statearr_26383;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_26362){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_26362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e26384){if((e26384 instanceof Object)){
var ex__18020__auto__ = e26384;
var statearr_26385_26402 = state_26362;
(statearr_26385_26402[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26403 = state_26362;
state_26362 = G__26403;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_26362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_26362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___26391,out))
})();
var state__18083__auto__ = (function (){var statearr_26386 = f__18082__auto__.call(null);
(statearr_26386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___26391);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___26391,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args26404 = [];
var len__16390__auto___26474 = arguments.length;
var i__16391__auto___26475 = (0);
while(true){
if((i__16391__auto___26475 < len__16390__auto___26474)){
args26404.push((arguments[i__16391__auto___26475]));

var G__26476 = (i__16391__auto___26475 + (1));
i__16391__auto___26475 = G__26476;
continue;
} else {
}
break;
}

var G__26406 = args26404.length;
switch (G__26406) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26404.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18081__auto___26478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___26478,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___26478,out){
return (function (state_26444){
var state_val_26445 = (state_26444[(1)]);
if((state_val_26445 === (7))){
var inst_26440 = (state_26444[(2)]);
var state_26444__$1 = state_26444;
var statearr_26446_26479 = state_26444__$1;
(statearr_26446_26479[(2)] = inst_26440);

(statearr_26446_26479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (1))){
var inst_26407 = (new Array(n));
var inst_26408 = inst_26407;
var inst_26409 = (0);
var state_26444__$1 = (function (){var statearr_26447 = state_26444;
(statearr_26447[(7)] = inst_26408);

(statearr_26447[(8)] = inst_26409);

return statearr_26447;
})();
var statearr_26448_26480 = state_26444__$1;
(statearr_26448_26480[(2)] = null);

(statearr_26448_26480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (4))){
var inst_26412 = (state_26444[(9)]);
var inst_26412__$1 = (state_26444[(2)]);
var inst_26413 = (inst_26412__$1 == null);
var inst_26414 = cljs.core.not.call(null,inst_26413);
var state_26444__$1 = (function (){var statearr_26449 = state_26444;
(statearr_26449[(9)] = inst_26412__$1);

return statearr_26449;
})();
if(inst_26414){
var statearr_26450_26481 = state_26444__$1;
(statearr_26450_26481[(1)] = (5));

} else {
var statearr_26451_26482 = state_26444__$1;
(statearr_26451_26482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (15))){
var inst_26434 = (state_26444[(2)]);
var state_26444__$1 = state_26444;
var statearr_26452_26483 = state_26444__$1;
(statearr_26452_26483[(2)] = inst_26434);

(statearr_26452_26483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (13))){
var state_26444__$1 = state_26444;
var statearr_26453_26484 = state_26444__$1;
(statearr_26453_26484[(2)] = null);

(statearr_26453_26484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (6))){
var inst_26409 = (state_26444[(8)]);
var inst_26430 = (inst_26409 > (0));
var state_26444__$1 = state_26444;
if(cljs.core.truth_(inst_26430)){
var statearr_26454_26485 = state_26444__$1;
(statearr_26454_26485[(1)] = (12));

} else {
var statearr_26455_26486 = state_26444__$1;
(statearr_26455_26486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (3))){
var inst_26442 = (state_26444[(2)]);
var state_26444__$1 = state_26444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26444__$1,inst_26442);
} else {
if((state_val_26445 === (12))){
var inst_26408 = (state_26444[(7)]);
var inst_26432 = cljs.core.vec.call(null,inst_26408);
var state_26444__$1 = state_26444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26444__$1,(15),out,inst_26432);
} else {
if((state_val_26445 === (2))){
var state_26444__$1 = state_26444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26444__$1,(4),ch);
} else {
if((state_val_26445 === (11))){
var inst_26424 = (state_26444[(2)]);
var inst_26425 = (new Array(n));
var inst_26408 = inst_26425;
var inst_26409 = (0);
var state_26444__$1 = (function (){var statearr_26456 = state_26444;
(statearr_26456[(7)] = inst_26408);

(statearr_26456[(10)] = inst_26424);

(statearr_26456[(8)] = inst_26409);

return statearr_26456;
})();
var statearr_26457_26487 = state_26444__$1;
(statearr_26457_26487[(2)] = null);

(statearr_26457_26487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (9))){
var inst_26408 = (state_26444[(7)]);
var inst_26422 = cljs.core.vec.call(null,inst_26408);
var state_26444__$1 = state_26444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26444__$1,(11),out,inst_26422);
} else {
if((state_val_26445 === (5))){
var inst_26408 = (state_26444[(7)]);
var inst_26412 = (state_26444[(9)]);
var inst_26409 = (state_26444[(8)]);
var inst_26417 = (state_26444[(11)]);
var inst_26416 = (inst_26408[inst_26409] = inst_26412);
var inst_26417__$1 = (inst_26409 + (1));
var inst_26418 = (inst_26417__$1 < n);
var state_26444__$1 = (function (){var statearr_26458 = state_26444;
(statearr_26458[(12)] = inst_26416);

(statearr_26458[(11)] = inst_26417__$1);

return statearr_26458;
})();
if(cljs.core.truth_(inst_26418)){
var statearr_26459_26488 = state_26444__$1;
(statearr_26459_26488[(1)] = (8));

} else {
var statearr_26460_26489 = state_26444__$1;
(statearr_26460_26489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (14))){
var inst_26437 = (state_26444[(2)]);
var inst_26438 = cljs.core.async.close_BANG_.call(null,out);
var state_26444__$1 = (function (){var statearr_26462 = state_26444;
(statearr_26462[(13)] = inst_26437);

return statearr_26462;
})();
var statearr_26463_26490 = state_26444__$1;
(statearr_26463_26490[(2)] = inst_26438);

(statearr_26463_26490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (10))){
var inst_26428 = (state_26444[(2)]);
var state_26444__$1 = state_26444;
var statearr_26464_26491 = state_26444__$1;
(statearr_26464_26491[(2)] = inst_26428);

(statearr_26464_26491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26445 === (8))){
var inst_26408 = (state_26444[(7)]);
var inst_26417 = (state_26444[(11)]);
var tmp26461 = inst_26408;
var inst_26408__$1 = tmp26461;
var inst_26409 = inst_26417;
var state_26444__$1 = (function (){var statearr_26465 = state_26444;
(statearr_26465[(7)] = inst_26408__$1);

(statearr_26465[(8)] = inst_26409);

return statearr_26465;
})();
var statearr_26466_26492 = state_26444__$1;
(statearr_26466_26492[(2)] = null);

(statearr_26466_26492[(1)] = (2));


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
});})(c__18081__auto___26478,out))
;
return ((function (switch__18016__auto__,c__18081__auto___26478,out){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_26470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26470[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_26470[(1)] = (1));

return statearr_26470;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_26444){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_26444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e26471){if((e26471 instanceof Object)){
var ex__18020__auto__ = e26471;
var statearr_26472_26493 = state_26444;
(statearr_26472_26493[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26494 = state_26444;
state_26444 = G__26494;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_26444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_26444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___26478,out))
})();
var state__18083__auto__ = (function (){var statearr_26473 = f__18082__auto__.call(null);
(statearr_26473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___26478);

return statearr_26473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___26478,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args26495 = [];
var len__16390__auto___26569 = arguments.length;
var i__16391__auto___26570 = (0);
while(true){
if((i__16391__auto___26570 < len__16390__auto___26569)){
args26495.push((arguments[i__16391__auto___26570]));

var G__26571 = (i__16391__auto___26570 + (1));
i__16391__auto___26570 = G__26571;
continue;
} else {
}
break;
}

var G__26497 = args26495.length;
switch (G__26497) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26495.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18081__auto___26573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18081__auto___26573,out){
return (function (){
var f__18082__auto__ = (function (){var switch__18016__auto__ = ((function (c__18081__auto___26573,out){
return (function (state_26539){
var state_val_26540 = (state_26539[(1)]);
if((state_val_26540 === (7))){
var inst_26535 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26541_26574 = state_26539__$1;
(statearr_26541_26574[(2)] = inst_26535);

(statearr_26541_26574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (1))){
var inst_26498 = [];
var inst_26499 = inst_26498;
var inst_26500 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26539__$1 = (function (){var statearr_26542 = state_26539;
(statearr_26542[(7)] = inst_26499);

(statearr_26542[(8)] = inst_26500);

return statearr_26542;
})();
var statearr_26543_26575 = state_26539__$1;
(statearr_26543_26575[(2)] = null);

(statearr_26543_26575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (4))){
var inst_26503 = (state_26539[(9)]);
var inst_26503__$1 = (state_26539[(2)]);
var inst_26504 = (inst_26503__$1 == null);
var inst_26505 = cljs.core.not.call(null,inst_26504);
var state_26539__$1 = (function (){var statearr_26544 = state_26539;
(statearr_26544[(9)] = inst_26503__$1);

return statearr_26544;
})();
if(inst_26505){
var statearr_26545_26576 = state_26539__$1;
(statearr_26545_26576[(1)] = (5));

} else {
var statearr_26546_26577 = state_26539__$1;
(statearr_26546_26577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (15))){
var inst_26529 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26547_26578 = state_26539__$1;
(statearr_26547_26578[(2)] = inst_26529);

(statearr_26547_26578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (13))){
var state_26539__$1 = state_26539;
var statearr_26548_26579 = state_26539__$1;
(statearr_26548_26579[(2)] = null);

(statearr_26548_26579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (6))){
var inst_26499 = (state_26539[(7)]);
var inst_26524 = inst_26499.length;
var inst_26525 = (inst_26524 > (0));
var state_26539__$1 = state_26539;
if(cljs.core.truth_(inst_26525)){
var statearr_26549_26580 = state_26539__$1;
(statearr_26549_26580[(1)] = (12));

} else {
var statearr_26550_26581 = state_26539__$1;
(statearr_26550_26581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (3))){
var inst_26537 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26539__$1,inst_26537);
} else {
if((state_val_26540 === (12))){
var inst_26499 = (state_26539[(7)]);
var inst_26527 = cljs.core.vec.call(null,inst_26499);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26539__$1,(15),out,inst_26527);
} else {
if((state_val_26540 === (2))){
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26539__$1,(4),ch);
} else {
if((state_val_26540 === (11))){
var inst_26503 = (state_26539[(9)]);
var inst_26507 = (state_26539[(10)]);
var inst_26517 = (state_26539[(2)]);
var inst_26518 = [];
var inst_26519 = inst_26518.push(inst_26503);
var inst_26499 = inst_26518;
var inst_26500 = inst_26507;
var state_26539__$1 = (function (){var statearr_26551 = state_26539;
(statearr_26551[(7)] = inst_26499);

(statearr_26551[(11)] = inst_26519);

(statearr_26551[(12)] = inst_26517);

(statearr_26551[(8)] = inst_26500);

return statearr_26551;
})();
var statearr_26552_26582 = state_26539__$1;
(statearr_26552_26582[(2)] = null);

(statearr_26552_26582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (9))){
var inst_26499 = (state_26539[(7)]);
var inst_26515 = cljs.core.vec.call(null,inst_26499);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26539__$1,(11),out,inst_26515);
} else {
if((state_val_26540 === (5))){
var inst_26503 = (state_26539[(9)]);
var inst_26507 = (state_26539[(10)]);
var inst_26500 = (state_26539[(8)]);
var inst_26507__$1 = f.call(null,inst_26503);
var inst_26508 = cljs.core._EQ_.call(null,inst_26507__$1,inst_26500);
var inst_26509 = cljs.core.keyword_identical_QMARK_.call(null,inst_26500,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26510 = (inst_26508) || (inst_26509);
var state_26539__$1 = (function (){var statearr_26553 = state_26539;
(statearr_26553[(10)] = inst_26507__$1);

return statearr_26553;
})();
if(cljs.core.truth_(inst_26510)){
var statearr_26554_26583 = state_26539__$1;
(statearr_26554_26583[(1)] = (8));

} else {
var statearr_26555_26584 = state_26539__$1;
(statearr_26555_26584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (14))){
var inst_26532 = (state_26539[(2)]);
var inst_26533 = cljs.core.async.close_BANG_.call(null,out);
var state_26539__$1 = (function (){var statearr_26557 = state_26539;
(statearr_26557[(13)] = inst_26532);

return statearr_26557;
})();
var statearr_26558_26585 = state_26539__$1;
(statearr_26558_26585[(2)] = inst_26533);

(statearr_26558_26585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (10))){
var inst_26522 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26559_26586 = state_26539__$1;
(statearr_26559_26586[(2)] = inst_26522);

(statearr_26559_26586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (8))){
var inst_26503 = (state_26539[(9)]);
var inst_26499 = (state_26539[(7)]);
var inst_26507 = (state_26539[(10)]);
var inst_26512 = inst_26499.push(inst_26503);
var tmp26556 = inst_26499;
var inst_26499__$1 = tmp26556;
var inst_26500 = inst_26507;
var state_26539__$1 = (function (){var statearr_26560 = state_26539;
(statearr_26560[(7)] = inst_26499__$1);

(statearr_26560[(14)] = inst_26512);

(statearr_26560[(8)] = inst_26500);

return statearr_26560;
})();
var statearr_26561_26587 = state_26539__$1;
(statearr_26561_26587[(2)] = null);

(statearr_26561_26587[(1)] = (2));


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
});})(c__18081__auto___26573,out))
;
return ((function (switch__18016__auto__,c__18081__auto___26573,out){
return (function() {
var cljs$core$async$state_machine__18017__auto__ = null;
var cljs$core$async$state_machine__18017__auto____0 = (function (){
var statearr_26565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26565[(0)] = cljs$core$async$state_machine__18017__auto__);

(statearr_26565[(1)] = (1));

return statearr_26565;
});
var cljs$core$async$state_machine__18017__auto____1 = (function (state_26539){
while(true){
var ret_value__18018__auto__ = (function (){try{while(true){
var result__18019__auto__ = switch__18016__auto__.call(null,state_26539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18019__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object)){
var ex__18020__auto__ = e26566;
var statearr_26567_26588 = state_26539;
(statearr_26567_26588[(5)] = ex__18020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26589 = state_26539;
state_26539 = G__26589;
continue;
} else {
return ret_value__18018__auto__;
}
break;
}
});
cljs$core$async$state_machine__18017__auto__ = function(state_26539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18017__auto____1.call(this,state_26539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18017__auto____0;
cljs$core$async$state_machine__18017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18017__auto____1;
return cljs$core$async$state_machine__18017__auto__;
})()
;})(switch__18016__auto__,c__18081__auto___26573,out))
})();
var state__18083__auto__ = (function (){var statearr_26568 = f__18082__auto__.call(null);
(statearr_26568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18081__auto___26573);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18083__auto__);
});})(c__18081__auto___26573,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map