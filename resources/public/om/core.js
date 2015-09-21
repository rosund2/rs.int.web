// Compiled by ClojureScript 1.7.10 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = {};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.display_name[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core.display_name["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


om.core.IInitState = {};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.init_state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core.init_state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


om.core.IShouldUpdate = {};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.should_update[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,next_props,next_state);
} else {
var m__5152__auto____$1 = (om.core.should_update["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


om.core.IWillMount = {};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.will_mount[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


om.core.IDidMount = {};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.did_mount[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


om.core.IWillUnmount = {};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.will_unmount[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


om.core.IWillUpdate = {};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.will_update[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,next_props,next_state);
} else {
var m__5152__auto____$1 = (om.core.will_update["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


om.core.IDidUpdate = {};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.did_update[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__5152__auto____$1 = (om.core.did_update["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


om.core.IWillReceiveProps = {};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.will_receive_props[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,next_props);
} else {
var m__5152__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


om.core.IRender = {};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.render[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core.render["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


om.core.IRenderProps = {};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.render_props[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,props,state);
} else {
var m__5152__auto____$1 = (om.core.render_props["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


om.core.IRenderState = {};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core.render_state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,state);
} else {
var m__5152__auto____$1 = (om.core.render_state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


om.core.ICheckState = {};


om.core.IOmSwap = {};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__5152__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


om.core.IGetState = {};

om.core._get_state = (function om$core$_get_state(){
var args6532 = [];
var len__5554__auto___6535 = arguments.length;
var i__5555__auto___6536 = (0);
while(true){
if((i__5555__auto___6536 < len__5554__auto___6535)){
args6532.push((arguments[i__5555__auto___6536]));

var G__6537 = (i__5555__auto___6536 + (1));
i__5555__auto___6536 = G__6537;
continue;
} else {
}
break;
}

var G__6534 = args6532.length;
switch (G__6534) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6532.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core._get_state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,ks);
} else {
var m__5152__auto____$1 = (om.core._get_state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = {};

om.core._get_render_state = (function om$core$_get_render_state(){
var args6541 = [];
var len__5554__auto___6544 = arguments.length;
var i__5555__auto___6545 = (0);
while(true){
if((i__5555__auto___6545 < len__5554__auto___6544)){
args6541.push((arguments[i__5555__auto___6545]));

var G__6546 = (i__5555__auto___6545 + (1));
i__5555__auto___6545 = G__6546;
continue;
} else {
}
break;
}

var G__6543 = args6541.length;
switch (G__6543) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6541.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_render_state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_render_state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,ks);
} else {
var m__5152__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = {};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var args6550 = [];
var len__5554__auto___6553 = arguments.length;
var i__5555__auto___6554 = (0);
while(true){
if((i__5555__auto___6554 < len__5554__auto___6553)){
args6550.push((arguments[i__5555__auto___6554]));

var G__6555 = (i__5555__auto___6554 + (1));
i__5555__auto___6554 = G__6555;
continue;
} else {
}
break;
}

var G__6552 = args6550.length;
switch (G__6552) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6550.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,val,render);
} else {
var m__5152__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,ks,val,render);
} else {
var m__5152__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = {};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_queue[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,c);
} else {
var m__5152__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


om.core.IValue = {};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5151__auto__ = (((x == null))?null:x);
var m__5152__auto__ = (om.core._value[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,x);
} else {
var m__5152__auto____$1 = (om.core._value["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = {};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5151__auto__ = (((cursor == null))?null:cursor);
var m__5152__auto__ = (om.core._path[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,cursor);
} else {
var m__5152__auto____$1 = (om.core._path["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5151__auto__ = (((cursor == null))?null:cursor);
var m__5152__auto__ = (om.core._state[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,cursor);
} else {
var m__5152__auto____$1 = (om.core._state["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


om.core.IToCursor = {};

om.core._to_cursor = (function om$core$_to_cursor(){
var args6565 = [];
var len__5554__auto___6568 = arguments.length;
var i__5555__auto___6569 = (0);
while(true){
if((i__5555__auto___6569 < len__5554__auto___6568)){
args6565.push((arguments[i__5555__auto___6569]));

var G__6570 = (i__5555__auto___6569 + (1));
i__5555__auto___6569 = G__6570;
continue;
} else {
}
break;
}

var G__6567 = args6565.length;
switch (G__6567) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6565.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5151__auto__ = (((value == null))?null:value);
var m__5152__auto__ = (om.core._to_cursor[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,value,state);
} else {
var m__5152__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5151__auto__ = (((value == null))?null:value);
var m__5152__auto__ = (om.core._to_cursor[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,value,state,path);
} else {
var m__5152__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = {};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5151__auto__ = (((cursor == null))?null:cursor);
var m__5152__auto__ = (om.core._derive[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,cursor,derived,state,path);
} else {
var m__5152__auto____$1 = (om.core._derive["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = {};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5151__auto__ = (((cursor == null))?null:cursor);
var m__5152__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,cursor,korks,f,tag);
} else {
var m__5152__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


om.core.INotify = {};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5151__auto__ = (((x == null))?null:x);
var m__5152__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,x,key,tx_listen);
} else {
var m__5152__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5151__auto__ = (((x == null))?null:x);
var m__5152__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,x,key);
} else {
var m__5152__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5151__auto__ = (((x == null))?null:x);
var m__5152__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__5152__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


om.core.IRootProperties = {};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,id,p,val);
} else {
var m__5152__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,id,p);
} else {
var m__5152__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,id);
} else {
var m__5152__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_property[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,id,p);
} else {
var m__5152__auto____$1 = (om.core._get_property["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


om.core.IRootKey = {};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5151__auto__ = (((cursor == null))?null:cursor);
var m__5152__auto__ = (om.core._root_key[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,cursor);
} else {
var m__5152__auto____$1 = (om.core._root_key["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


om.core.IAdapt = {};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._adapt[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,other);
} else {
var m__5152__auto____$1 = (om.core._adapt["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = {};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,c);
} else {
var m__5152__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$,c);
} else {
var m__5152__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5151__auto__ = (((this$ == null))?null:this$);
var m__5152__auto__ = (om.core._get_deps[goog.typeOf(x__5151__auto__)]);
if(!((m__5152__auto__ == null))){
return m__5152__auto__.call(null,this$);
} else {
var m__5152__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5152__auto____$1 == null))){
return m__5152__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var args6590 = [];
var len__5554__auto___6594 = arguments.length;
var i__5555__auto___6595 = (0);
while(true){
if((i__5555__auto___6595 < len__5554__auto___6594)){
args6590.push((arguments[i__5555__auto___6595]));

var G__6596 = (i__5555__auto___6595 + (1));
i__5555__auto___6595 = G__6596;
continue;
} else {
}
break;
}

var G__6592 = args6590.length;
switch (G__6592) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6590.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__6593 = (x.props["__om_cursor"]);
var G__6593__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__6593,korks__$1):G__6593);
return G__6593__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var args6598 = [];
var len__5554__auto___6601 = arguments.length;
var i__5555__auto___6602 = (0);
while(true){
if((i__5555__auto___6602 < len__5554__auto___6601)){
args6598.push((arguments[i__5555__auto___6602]));

var G__6603 = (i__5555__auto___6602 + (1));
i__5555__auto___6602 = G__6603;
continue;
} else {
}
break;
}

var G__6600 = args6598.length;
switch (G__6600) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6598.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var args6605 = [];
var len__5554__auto___6608 = arguments.length;
var i__5555__auto___6609 = (0);
while(true){
if((i__5555__auto___6609 < len__5554__auto___6608)){
args6605.push((arguments[i__5555__auto___6609]));

var G__6610 = (i__5555__auto___6609 + (1));
i__5555__auto___6609 = G__6610;
continue;
} else {
}
break;
}

var G__6607 = args6605.length;
switch (G__6607) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6605.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__6613 = state;
(G__6613["__om_prev_state"] = (state["__om_state"]));

(G__6613["__om_state"] = pending_state);

(G__6613["__om_pending_state"] = null);

return G__6613;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var args6614 = [];
var len__5554__auto___6617 = arguments.length;
var i__5555__auto___6618 = (0);
while(true){
if((i__5555__auto___6618 < len__5554__auto___6617)){
args6614.push((arguments[i__5555__auto___6618]));

var G__6619 = (i__5555__auto___6618 + (1));
i__5555__auto___6618 = G__6619;
continue;
} else {
}
break;
}

var G__6616 = args6614.length;
switch (G__6616) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6614.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4515__auto__ = props;
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4515__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_6643 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4515__auto__ = (state_6643["__om_prev_state"]);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return (state_6643["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__6624 = cljs.core.seq.call(null,refs);
var chunk__6625 = null;
var count__6626 = (0);
var i__6627 = (0);
while(true){
if((i__6627 < count__6626)){
var ref = cljs.core._nth.call(null,chunk__6625,i__6627);
om.core.unobserve.call(null,this$,ref);

var G__6644 = seq__6624;
var G__6645 = chunk__6625;
var G__6646 = count__6626;
var G__6647 = (i__6627 + (1));
seq__6624 = G__6644;
chunk__6625 = G__6645;
count__6626 = G__6646;
i__6627 = G__6647;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__6624);
if(temp__4425__auto____$1){
var seq__6624__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6624__$1)){
var c__5299__auto__ = cljs.core.chunk_first.call(null,seq__6624__$1);
var G__6648 = cljs.core.chunk_rest.call(null,seq__6624__$1);
var G__6649 = c__5299__auto__;
var G__6650 = cljs.core.count.call(null,c__5299__auto__);
var G__6651 = (0);
seq__6624 = G__6648;
chunk__6625 = G__6649;
count__6626 = G__6650;
i__6627 = G__6651;
continue;
} else {
var ref = cljs.core.first.call(null,seq__6624__$1);
om.core.unobserve.call(null,this$,ref);

var G__6652 = cljs.core.next.call(null,seq__6624__$1);
var G__6653 = null;
var G__6654 = (0);
var G__6655 = (0);
seq__6624 = G__6652;
chunk__6625 = G__6653;
count__6626 = G__6654;
i__6627 = G__6655;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4503__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4503__auto__)){
var and__4503__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4503__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4503__auto____$1;
}
} else {
return and__4503__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4503__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4503__auto__){
return cljs.core.some.call(null,((function (and__4503__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__6621_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__6621_SHARP_);
});})(and__4503__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4503__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_6630 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_6631 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_6632 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_6633 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_6634 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_6634;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_6633;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_6632;

om.core._STAR_state_STAR_ = _STAR_state_STAR_6631;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_6630;
}}),(function (next_props,next_state){
var this$ = this;
var c_6656 = om.core.children.call(null,this$);
if(((!((c_6656 == null)))?(((false) || (c_6656.om$core$IWillUpdate$))?true:(((!c_6656.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_6656):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_6656))){
var state_6657 = this$.state;
om.core.will_update.call(null,c_6656,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4515__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4515__auto__ = id;
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_6658 = om.core.children.call(null,this$);
if(((!((c_6658 == null)))?(((false) || (c_6658.om$core$IWillMount$))?true:(((!c_6658.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_6658):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_6658))){
om.core.will_mount.call(null,c_6658);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x6660 = obj;
x6660.om$core$ISetState$ = true;

x6660.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x6660){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4503__auto__ = !((app_state == null));
if(and__4503__auto__){
return render;
} else {
return and__4503__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x6660))
;

x6660.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x6660){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4503__auto__ = !((app_state == null));
if(and__4503__auto__){
return render;
} else {
return and__4503__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x6660))
;

x6660.om$core$IGetRenderState$ = true;

x6660.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x6660){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x6660))
;

x6660.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x6660){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x6660))
;

x6660.om$core$IGetState$ = true;

x6660.om$core$IGetState$_get_state$arity$1 = ((function (x6660){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4515__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return (state["__om_state"]);
}
});})(x6660))
;

x6660.om$core$IGetState$_get_state$arity$2 = ((function (x6660){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x6660))
;

return x6660;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4515__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4515__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_6670 = om.core.children.call(null,this$);
if(((!((c_6670 == null)))?(((false) || (c_6670.om$core$IWillMount$))?true:(((!c_6670.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_6670):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_6670))){
om.core.will_mount.call(null,c_6670);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__6664 = cljs.core.seq.call(null,refs);
var chunk__6665 = null;
var count__6666 = (0);
var i__6667 = (0);
while(true){
if((i__6667 < count__6666)){
var ref = cljs.core._nth.call(null,chunk__6665,i__6667);
om.core.unobserve.call(null,this$,ref);

var G__6671 = seq__6664;
var G__6672 = chunk__6665;
var G__6673 = count__6666;
var G__6674 = (i__6667 + (1));
seq__6664 = G__6671;
chunk__6665 = G__6672;
count__6666 = G__6673;
i__6667 = G__6674;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__6664);
if(temp__4425__auto____$1){
var seq__6664__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6664__$1)){
var c__5299__auto__ = cljs.core.chunk_first.call(null,seq__6664__$1);
var G__6675 = cljs.core.chunk_rest.call(null,seq__6664__$1);
var G__6676 = c__5299__auto__;
var G__6677 = cljs.core.count.call(null,c__5299__auto__);
var G__6678 = (0);
seq__6664 = G__6675;
chunk__6665 = G__6676;
count__6666 = G__6677;
i__6667 = G__6678;
continue;
} else {
var ref = cljs.core.first.call(null,seq__6664__$1);
om.core.unobserve.call(null,this$,ref);

var G__6679 = cljs.core.next.call(null,seq__6664__$1);
var G__6680 = null;
var G__6681 = (0);
var G__6682 = (0);
seq__6664 = G__6679;
chunk__6665 = G__6680;
count__6666 = G__6681;
i__6667 = G__6682;
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
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_6683 = this$.props;
var c_6684 = om.core.children.call(null,this$);
if(((!((c_6684 == null)))?(((false) || (c_6684.om$core$IWillUpdate$))?true:(((!c_6684.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_6684):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_6684))){
var state_6685 = this$.state;
om.core.will_update.call(null,c_6684,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_6686 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4515__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x6688 = cljs.core.clj__GT_js.call(null,methods$);
x6688.om$core$ISetState$ = true;

x6688.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x6688){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4503__auto__ = !((gstate == null));
if(and__4503__auto__){
return render;
} else {
return and__4503__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x6688))
;

x6688.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x6688){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x6688))
;

x6688.om$core$IGetRenderState$ = true;

x6688.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x6688){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x6688))
;

x6688.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x6688){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x6688))
;

x6688.om$core$IGetState$ = true;

x6688.om$core$IGetState$_get_state$arity$1 = ((function (x6688){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4515__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x6688))
;

x6688.om$core$IGetState$_get_state$arity$2 = ((function (x6688){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x6688))
;

return x6688;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__6692){
var vec__6693 = p__6692;
var k = cljs.core.nth.call(null,vec__6693,(0),null);
var v = cljs.core.nth.call(null,vec__6693,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__6694 = null;
var G__6694__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6694__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6694 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6694__2.call(this,self__,k);
case 3:
return G__6694__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6694.cljs$core$IFn$_invoke$arity$2 = G__6694__2;
G__6694.cljs$core$IFn$_invoke$arity$3 = G__6694__3;
return G__6694;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args6691){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6691)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5094__auto__,writer__5095__auto__,opt__5096__auto__){
return cljs.core._write.call(null,writer__5095__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__6696 = null;
var G__6696__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6696__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6696 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6696__2.call(this,self__,k);
case 3:
return G__6696__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6696.cljs$core$IFn$_invoke$arity$2 = G__6696__2;
G__6696.cljs$core$IFn$_invoke$arity$3 = G__6696__3;
return G__6696;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args6695){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6695)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5094__auto__,writer__5095__auto__,opt__5096__auto__){
return cljs.core._write.call(null,writer__5095__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x6698 = cljs.core.clone.call(null,val);
x6698.cljs$core$IDeref$ = true;

x6698.cljs$core$IDeref$_deref$arity$1 = ((function (x6698){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x6698))
;

x6698.om$core$ICursor$ = true;

x6698.om$core$ICursor$_path$arity$1 = ((function (x6698){
return (function (_){
var ___$1 = this;
return path;
});})(x6698))
;

x6698.om$core$ICursor$_state$arity$1 = ((function (x6698){
return (function (_){
var ___$1 = this;
return state;
});})(x6698))
;

x6698.om$core$ITransact$ = true;

x6698.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x6698){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x6698))
;

x6698.cljs$core$IEquiv$ = true;

x6698.cljs$core$IEquiv$_equiv$arity$2 = ((function (x6698){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x6698))
;

return x6698;
});
om.core.to_cursor = (function om$core$to_cursor(){
var args6699 = [];
var len__5554__auto___6704 = arguments.length;
var i__5555__auto___6705 = (0);
while(true){
if((i__5555__auto___6705 < len__5554__auto___6704)){
args6699.push((arguments[i__5555__auto___6705]));

var G__6706 = (i__5555__auto___6705 + (1));
i__5555__auto___6705 = G__6706;
continue;
} else {
}
break;
}

var G__6701 = args6699.length;
switch (G__6701) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6699.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x6711 = cljs.core.clone.call(null,x);
x6711.cljs$core$ICloneable$ = true;

x6711.cljs$core$ICloneable$_clone$arity$1 = ((function (x6711){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x6711))
;

x6711.om$core$IAdapt$ = true;

x6711.om$core$IAdapt$_adapt$arity$2 = ((function (x6711){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x6711))
;

x6711.om$core$ICursorDerive$ = true;

x6711.om$core$ICursorDerive$_derive$arity$4 = ((function (x6711){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x6711))
;

x6711.om$core$ITransact$ = true;

x6711.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x6711){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x6711))
;

return x6711;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(((!((cursor == null)))?(((false) || (cursor.om$core$IOmRef$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x6719 = cljs.core.clone.call(null,cursor);
x6719.om$core$ICursorDerive$ = true;

x6719.om$core$ICursorDerive$_derive$arity$4 = ((function (x6719,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x6719,path,storage))
;

x6719.om$core$IOmRef$ = true;

x6719.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x6719,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x6719,path,storage))
;

x6719.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x6719,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x6719,path,storage))
;

x6719.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x6719,path,storage){
return (function (_){
var ___$1 = this;
var seq__6720 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__6721 = null;
var count__6722 = (0);
var i__6723 = (0);
while(true){
if((i__6723 < count__6722)){
var c = cljs.core._nth.call(null,chunk__6721,i__6723);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__6724 = seq__6720;
var G__6725 = chunk__6721;
var G__6726 = count__6722;
var G__6727 = (i__6723 + (1));
seq__6720 = G__6724;
chunk__6721 = G__6725;
count__6722 = G__6726;
i__6723 = G__6727;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6720);
if(temp__4425__auto__){
var seq__6720__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6720__$1)){
var c__5299__auto__ = cljs.core.chunk_first.call(null,seq__6720__$1);
var G__6728 = cljs.core.chunk_rest.call(null,seq__6720__$1);
var G__6729 = c__5299__auto__;
var G__6730 = cljs.core.count.call(null,c__5299__auto__);
var G__6731 = (0);
seq__6720 = G__6728;
chunk__6721 = G__6729;
count__6722 = G__6730;
i__6723 = G__6731;
continue;
} else {
var c = cljs.core.first.call(null,seq__6720__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__6732 = cljs.core.next.call(null,seq__6720__$1);
var G__6733 = null;
var G__6734 = (0);
var G__6735 = (0);
seq__6720 = G__6732;
chunk__6721 = G__6733;
count__6722 = G__6734;
i__6723 = G__6735;
continue;
}
} else {
return null;
}
}
break;
}
});})(x6719,path,storage))
;

x6719.om$core$IOmRef$_get_deps$arity$1 = ((function (x6719,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x6719,path,storage))
;

x6719.om$core$ITransact$ = true;

x6719.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x6719,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x6719,path,storage))
;

return x6719;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4515__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4515__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var args6736 = [];
var len__5554__auto___6743 = arguments.length;
var i__5555__auto___6744 = (0);
while(true){
if((i__5555__auto___6744 < len__5554__auto___6743)){
args6736.push((arguments[i__5555__auto___6744]));

var G__6745 = (i__5555__auto___6744 + (1));
i__5555__auto___6744 = G__6745;
continue;
} else {
}
break;
}

var G__6738 = args6736.length;
switch (G__6738) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6736.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__6739_6747 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__6740_6748 = null;
var count__6741_6749 = (0);
var i__6742_6750 = (0);
while(true){
if((i__6742_6750 < count__6741_6749)){
var f_6751 = cljs.core._nth.call(null,chunk__6740_6748,i__6742_6750);
f_6751.call(null);

var G__6752 = seq__6739_6747;
var G__6753 = chunk__6740_6748;
var G__6754 = count__6741_6749;
var G__6755 = (i__6742_6750 + (1));
seq__6739_6747 = G__6752;
chunk__6740_6748 = G__6753;
count__6741_6749 = G__6754;
i__6742_6750 = G__6755;
continue;
} else {
var temp__4425__auto___6756 = cljs.core.seq.call(null,seq__6739_6747);
if(temp__4425__auto___6756){
var seq__6739_6757__$1 = temp__4425__auto___6756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6739_6757__$1)){
var c__5299__auto___6758 = cljs.core.chunk_first.call(null,seq__6739_6757__$1);
var G__6759 = cljs.core.chunk_rest.call(null,seq__6739_6757__$1);
var G__6760 = c__5299__auto___6758;
var G__6761 = cljs.core.count.call(null,c__5299__auto___6758);
var G__6762 = (0);
seq__6739_6747 = G__6759;
chunk__6740_6748 = G__6760;
count__6741_6749 = G__6761;
i__6742_6750 = G__6762;
continue;
} else {
var f_6763 = cljs.core.first.call(null,seq__6739_6757__$1);
f_6763.call(null);

var G__6764 = cljs.core.next.call(null,seq__6739_6757__$1);
var G__6765 = null;
var G__6766 = (0);
var G__6767 = (0);
seq__6739_6747 = G__6764;
chunk__6740_6748 = G__6765;
count__6741_6749 = G__6766;
i__6742_6750 = G__6767;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4515__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__4515__auto__){
return or__4515__auto__;
} else {
var or__4515__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__4515__auto____$1){
return or__4515__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var args6778 = [];
var len__5554__auto___6781 = arguments.length;
var i__5555__auto___6782 = (0);
while(true){
if((i__5555__auto___6782 < len__5554__auto___6781)){
args6778.push((arguments[i__5555__auto___6782]));

var G__6783 = (i__5555__auto___6782 + (1));
i__5555__auto___6782 = G__6783;
continue;
} else {
}
break;
}

var G__6780 = args6778.length;
switch (G__6780) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6778.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4515__auto__ = descriptor;
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
var or__4515__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4515__auto____$1)){
return or__4515__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var args6785 = [];
var len__5554__auto___6788 = arguments.length;
var i__5555__auto___6789 = (0);
while(true){
if((i__5555__auto___6789 < len__5554__auto___6788)){
args6785.push((arguments[i__5555__auto___6789]));

var G__6790 = (i__5555__auto___6789 + (1));
i__5555__auto___6789 = G__6790;
continue;
} else {
}
break;
}

var G__6787 = args6785.length;
switch (G__6787) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6785.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var args6792 = [];
var len__5554__auto___6797 = arguments.length;
var i__5555__auto___6798 = (0);
while(true){
if((i__5555__auto___6798 < len__5554__auto___6797)){
args6792.push((arguments[i__5555__auto___6798]));

var G__6799 = (i__5555__auto___6798 + (1));
i__5555__auto___6798 = G__6799;
continue;
} else {
}
break;
}

var G__6794 = args6792.length;
switch (G__6794) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6792.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__6795 = m;
var map__6795__$1 = ((((!((map__6795 == null)))?((((map__6795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6795):map__6795);
var key = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4515__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__6795,map__6795__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__6795,map__6795__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__6795,map__6795__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__6795,map__6795__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4515__auto__ = rkey;
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var args6801 = [];
var len__5554__auto___6804 = arguments.length;
var i__5555__auto___6805 = (0);
while(true){
if((i__5555__auto___6805 < len__5554__auto___6804)){
args6801.push((arguments[i__5555__auto___6805]));

var G__6806 = (i__5555__auto___6805 + (1));
i__5555__auto___6805 = G__6806;
continue;
} else {
}
break;
}

var G__6803 = args6801.length;
switch (G__6803) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6801.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var args6808 = [];
var len__5554__auto___6811 = arguments.length;
var i__5555__auto___6812 = (0);
while(true){
if((i__5555__auto___6812 < len__5554__auto___6811)){
args6808.push((arguments[i__5555__auto___6812]));

var G__6813 = (i__5555__auto___6812 + (1));
i__5555__auto___6812 = G__6813;
continue;
} else {
}
break;
}

var G__6810 = args6808.length;
switch (G__6810) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6808.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_6831 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_6832 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_6833 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x6824_6834 = state;
x6824_6834.om$core$IRootProperties$ = true;

x6824_6834.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_6831,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_6831,cljs.core.dissoc,id,k);
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_6831,cljs.core.dissoc,id);
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$IRootProperties$_get_property$arity$3 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_6831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$INotify$ = true;

x6824_6834.om$core$INotify$_listen_BANG_$arity$3 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_6832,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_6832,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$INotify$_notify_BANG_$arity$3 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__6825_6835 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_6832));
var chunk__6826_6836 = null;
var count__6827_6837 = (0);
var i__6828_6838 = (0);
while(true){
if((i__6828_6838 < count__6827_6837)){
var vec__6829_6839 = cljs.core._nth.call(null,chunk__6826_6836,i__6828_6838);
var __6840 = cljs.core.nth.call(null,vec__6829_6839,(0),null);
var f_6841 = cljs.core.nth.call(null,vec__6829_6839,(1),null);
f_6841.call(null,tx_data,root_cursor);

var G__6842 = seq__6825_6835;
var G__6843 = chunk__6826_6836;
var G__6844 = count__6827_6837;
var G__6845 = (i__6828_6838 + (1));
seq__6825_6835 = G__6842;
chunk__6826_6836 = G__6843;
count__6827_6837 = G__6844;
i__6828_6838 = G__6845;
continue;
} else {
var temp__4425__auto___6846 = cljs.core.seq.call(null,seq__6825_6835);
if(temp__4425__auto___6846){
var seq__6825_6847__$1 = temp__4425__auto___6846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6825_6847__$1)){
var c__5299__auto___6848 = cljs.core.chunk_first.call(null,seq__6825_6847__$1);
var G__6849 = cljs.core.chunk_rest.call(null,seq__6825_6847__$1);
var G__6850 = c__5299__auto___6848;
var G__6851 = cljs.core.count.call(null,c__5299__auto___6848);
var G__6852 = (0);
seq__6825_6835 = G__6849;
chunk__6826_6836 = G__6850;
count__6827_6837 = G__6851;
i__6828_6838 = G__6852;
continue;
} else {
var vec__6830_6853 = cljs.core.first.call(null,seq__6825_6847__$1);
var __6854 = cljs.core.nth.call(null,vec__6830_6853,(0),null);
var f_6855 = cljs.core.nth.call(null,vec__6830_6853,(1),null);
f_6855.call(null,tx_data,root_cursor);

var G__6856 = cljs.core.next.call(null,seq__6825_6847__$1);
var G__6857 = null;
var G__6858 = (0);
var G__6859 = (0);
seq__6825_6835 = G__6856;
chunk__6826_6836 = G__6857;
count__6827_6837 = G__6858;
i__6828_6838 = G__6859;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$IRenderQueue$ = true;

x6824_6834.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_6833);
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_6833),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_6833,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

x6824_6834.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x6824_6834,properties_6831,listeners_6832,render_queue_6833){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_6833,cljs.core.empty);
});})(x6824_6834,properties_6831,listeners_6832,render_queue_6833))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x6861 = cljs.core.clone.call(null,cursor);
x6861.cljs$core$ICloneable$ = true;

x6861.cljs$core$ICloneable$_clone$arity$1 = ((function (x6861){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x6861))
;

x6861.om$core$IAdapt$ = true;

x6861.om$core$IAdapt$_adapt$arity$2 = ((function (x6861){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x6861))
;

x6861.om$core$IRootKey$ = true;

x6861.om$core$IRootKey$_root_key$arity$1 = ((function (x6861){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x6861))
;

return x6861;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__6862){
var map__6926 = p__6862;
var map__6926__$1 = ((((!((map__6926 == null)))?((((map__6926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6926):map__6926);
var options = map__6926__$1;
var target = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__6926__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__6989 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__6989,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__6989,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4515__auto__ = adapt;
if(cljs.core.truth_(or__4515__auto__)){
return or__4515__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_6990 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_6959 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_6960 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_6961 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_6962 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_6962;

om.core._STAR_state_STAR_ = _STAR_state_STAR_6961;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_6960;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_6959;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_6990);
} else {
}
}

var queue_6991 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_6991)){
} else {
var seq__6963_6992 = cljs.core.seq.call(null,queue_6991);
var chunk__6964_6993 = null;
var count__6965_6994 = (0);
var i__6966_6995 = (0);
while(true){
if((i__6966_6995 < count__6965_6994)){
var c_6996 = cljs.core._nth.call(null,chunk__6964_6993,i__6966_6995);
if(cljs.core.truth_(c_6996.isMounted())){
var temp__4425__auto___6997 = (c_6996.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___6997)){
var next_props_6998 = temp__4425__auto___6997;
(c_6996.props["__om_cursor"] = next_props_6998);

(c_6996.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4515__auto__ = !((function (){var G__6968 = om.core.children.call(null,c_6996);
if(!((G__6968 == null))){
if((false) || (G__6968.om$core$ICheckState$)){
return true;
} else {
if((!G__6968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6968);
}
})());
if(or__4515__auto__){
return or__4515__auto__;
} else {
return c_6996.shouldComponentUpdate(c_6996.props,c_6996.state);
}
})())){
c_6996.forceUpdate();
} else {
}
} else {
}

var G__6999 = seq__6963_6992;
var G__7000 = chunk__6964_6993;
var G__7001 = count__6965_6994;
var G__7002 = (i__6966_6995 + (1));
seq__6963_6992 = G__6999;
chunk__6964_6993 = G__7000;
count__6965_6994 = G__7001;
i__6966_6995 = G__7002;
continue;
} else {
var temp__4425__auto___7003 = cljs.core.seq.call(null,seq__6963_6992);
if(temp__4425__auto___7003){
var seq__6963_7004__$1 = temp__4425__auto___7003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6963_7004__$1)){
var c__5299__auto___7005 = cljs.core.chunk_first.call(null,seq__6963_7004__$1);
var G__7006 = cljs.core.chunk_rest.call(null,seq__6963_7004__$1);
var G__7007 = c__5299__auto___7005;
var G__7008 = cljs.core.count.call(null,c__5299__auto___7005);
var G__7009 = (0);
seq__6963_6992 = G__7006;
chunk__6964_6993 = G__7007;
count__6965_6994 = G__7008;
i__6966_6995 = G__7009;
continue;
} else {
var c_7010 = cljs.core.first.call(null,seq__6963_7004__$1);
if(cljs.core.truth_(c_7010.isMounted())){
var temp__4425__auto___7011__$1 = (c_7010.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___7011__$1)){
var next_props_7012 = temp__4425__auto___7011__$1;
(c_7010.props["__om_cursor"] = next_props_7012);

(c_7010.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4515__auto__ = !((function (){var G__6970 = om.core.children.call(null,c_7010);
if(!((G__6970 == null))){
if((false) || (G__6970.om$core$ICheckState$)){
return true;
} else {
if((!G__6970.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6970);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6970);
}
})());
if(or__4515__auto__){
return or__4515__auto__;
} else {
return c_7010.shouldComponentUpdate(c_7010.props,c_7010.state);
}
})())){
c_7010.forceUpdate();
} else {
}
} else {
}

var G__7013 = cljs.core.next.call(null,seq__6963_7004__$1);
var G__7014 = null;
var G__7015 = (0);
var G__7016 = (0);
seq__6963_6992 = G__7013;
chunk__6964_6993 = G__7014;
count__6965_6994 = G__7015;
i__6966_6995 = G__7016;
continue;
}
} else {
}
}
break;
}
}

var _refs_7017 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_7017)){
} else {
var seq__6971_7018 = cljs.core.seq.call(null,_refs_7017);
var chunk__6972_7019 = null;
var count__6973_7020 = (0);
var i__6974_7021 = (0);
while(true){
if((i__6974_7021 < count__6973_7020)){
var vec__6975_7022 = cljs.core._nth.call(null,chunk__6972_7019,i__6974_7021);
var path_7023__$1 = cljs.core.nth.call(null,vec__6975_7022,(0),null);
var cs_7024 = cljs.core.nth.call(null,vec__6975_7022,(1),null);
var cs_7025__$1 = cljs.core.deref.call(null,cs_7024);
var seq__6976_7026 = cljs.core.seq.call(null,cs_7025__$1);
var chunk__6977_7027 = null;
var count__6978_7028 = (0);
var i__6979_7029 = (0);
while(true){
if((i__6979_7029 < count__6978_7028)){
var vec__6980_7030 = cljs.core._nth.call(null,chunk__6977_7027,i__6979_7029);
var id_7031 = cljs.core.nth.call(null,vec__6980_7030,(0),null);
var c_7032 = cljs.core.nth.call(null,vec__6980_7030,(1),null);
if(cljs.core.truth_(c_7032.shouldComponentUpdate(c_7032.props,c_7032.state))){
c_7032.forceUpdate();
} else {
}

var G__7033 = seq__6976_7026;
var G__7034 = chunk__6977_7027;
var G__7035 = count__6978_7028;
var G__7036 = (i__6979_7029 + (1));
seq__6976_7026 = G__7033;
chunk__6977_7027 = G__7034;
count__6978_7028 = G__7035;
i__6979_7029 = G__7036;
continue;
} else {
var temp__4425__auto___7037 = cljs.core.seq.call(null,seq__6976_7026);
if(temp__4425__auto___7037){
var seq__6976_7038__$1 = temp__4425__auto___7037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6976_7038__$1)){
var c__5299__auto___7039 = cljs.core.chunk_first.call(null,seq__6976_7038__$1);
var G__7040 = cljs.core.chunk_rest.call(null,seq__6976_7038__$1);
var G__7041 = c__5299__auto___7039;
var G__7042 = cljs.core.count.call(null,c__5299__auto___7039);
var G__7043 = (0);
seq__6976_7026 = G__7040;
chunk__6977_7027 = G__7041;
count__6978_7028 = G__7042;
i__6979_7029 = G__7043;
continue;
} else {
var vec__6981_7044 = cljs.core.first.call(null,seq__6976_7038__$1);
var id_7045 = cljs.core.nth.call(null,vec__6981_7044,(0),null);
var c_7046 = cljs.core.nth.call(null,vec__6981_7044,(1),null);
if(cljs.core.truth_(c_7046.shouldComponentUpdate(c_7046.props,c_7046.state))){
c_7046.forceUpdate();
} else {
}

var G__7047 = cljs.core.next.call(null,seq__6976_7038__$1);
var G__7048 = null;
var G__7049 = (0);
var G__7050 = (0);
seq__6976_7026 = G__7047;
chunk__6977_7027 = G__7048;
count__6978_7028 = G__7049;
i__6979_7029 = G__7050;
continue;
}
} else {
}
}
break;
}

var G__7051 = seq__6971_7018;
var G__7052 = chunk__6972_7019;
var G__7053 = count__6973_7020;
var G__7054 = (i__6974_7021 + (1));
seq__6971_7018 = G__7051;
chunk__6972_7019 = G__7052;
count__6973_7020 = G__7053;
i__6974_7021 = G__7054;
continue;
} else {
var temp__4425__auto___7055 = cljs.core.seq.call(null,seq__6971_7018);
if(temp__4425__auto___7055){
var seq__6971_7056__$1 = temp__4425__auto___7055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6971_7056__$1)){
var c__5299__auto___7057 = cljs.core.chunk_first.call(null,seq__6971_7056__$1);
var G__7058 = cljs.core.chunk_rest.call(null,seq__6971_7056__$1);
var G__7059 = c__5299__auto___7057;
var G__7060 = cljs.core.count.call(null,c__5299__auto___7057);
var G__7061 = (0);
seq__6971_7018 = G__7058;
chunk__6972_7019 = G__7059;
count__6973_7020 = G__7060;
i__6974_7021 = G__7061;
continue;
} else {
var vec__6982_7062 = cljs.core.first.call(null,seq__6971_7056__$1);
var path_7063__$1 = cljs.core.nth.call(null,vec__6982_7062,(0),null);
var cs_7064 = cljs.core.nth.call(null,vec__6982_7062,(1),null);
var cs_7065__$1 = cljs.core.deref.call(null,cs_7064);
var seq__6983_7066 = cljs.core.seq.call(null,cs_7065__$1);
var chunk__6984_7067 = null;
var count__6985_7068 = (0);
var i__6986_7069 = (0);
while(true){
if((i__6986_7069 < count__6985_7068)){
var vec__6987_7070 = cljs.core._nth.call(null,chunk__6984_7067,i__6986_7069);
var id_7071 = cljs.core.nth.call(null,vec__6987_7070,(0),null);
var c_7072 = cljs.core.nth.call(null,vec__6987_7070,(1),null);
if(cljs.core.truth_(c_7072.shouldComponentUpdate(c_7072.props,c_7072.state))){
c_7072.forceUpdate();
} else {
}

var G__7073 = seq__6983_7066;
var G__7074 = chunk__6984_7067;
var G__7075 = count__6985_7068;
var G__7076 = (i__6986_7069 + (1));
seq__6983_7066 = G__7073;
chunk__6984_7067 = G__7074;
count__6985_7068 = G__7075;
i__6986_7069 = G__7076;
continue;
} else {
var temp__4425__auto___7077__$1 = cljs.core.seq.call(null,seq__6983_7066);
if(temp__4425__auto___7077__$1){
var seq__6983_7078__$1 = temp__4425__auto___7077__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6983_7078__$1)){
var c__5299__auto___7079 = cljs.core.chunk_first.call(null,seq__6983_7078__$1);
var G__7080 = cljs.core.chunk_rest.call(null,seq__6983_7078__$1);
var G__7081 = c__5299__auto___7079;
var G__7082 = cljs.core.count.call(null,c__5299__auto___7079);
var G__7083 = (0);
seq__6983_7066 = G__7080;
chunk__6984_7067 = G__7081;
count__6985_7068 = G__7082;
i__6986_7069 = G__7083;
continue;
} else {
var vec__6988_7084 = cljs.core.first.call(null,seq__6983_7078__$1);
var id_7085 = cljs.core.nth.call(null,vec__6988_7084,(0),null);
var c_7086 = cljs.core.nth.call(null,vec__6988_7084,(1),null);
if(cljs.core.truth_(c_7086.shouldComponentUpdate(c_7086.props,c_7086.state))){
c_7086.forceUpdate();
} else {
}

var G__7087 = cljs.core.next.call(null,seq__6983_7078__$1);
var G__7088 = null;
var G__7089 = (0);
var G__7090 = (0);
seq__6983_7066 = G__7087;
chunk__6984_7067 = G__7088;
count__6985_7068 = G__7089;
i__6986_7069 = G__7090;
continue;
}
} else {
}
}
break;
}

var G__7091 = cljs.core.next.call(null,seq__6971_7056__$1);
var G__7092 = null;
var G__7093 = (0);
var G__7094 = (0);
seq__6971_7018 = G__7091;
chunk__6972_7019 = G__7092;
count__6973_7020 = G__7093;
i__6974_7021 = G__7094;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6926,map__6926__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var args7097 = [];
var len__5554__auto___7100 = arguments.length;
var i__5555__auto___7101 = (0);
while(true){
if((i__5555__auto___7101 < len__5554__auto___7100)){
args7097.push((arguments[i__5555__auto___7101]));

var G__7102 = (i__5555__auto___7101 + (1));
i__5555__auto___7101 = G__7102;
continue;
} else {
}
break;
}

var G__7099 = args7097.length;
switch (G__7099) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7097.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var args7104 = [];
var len__5554__auto___7107 = arguments.length;
var i__5555__auto___7108 = (0);
while(true){
if((i__5555__auto___7108 < len__5554__auto___7107)){
args7104.push((arguments[i__5555__auto___7108]));

var G__7109 = (i__5555__auto___7108 + (1));
i__5555__auto___7108 = G__7109;
continue;
} else {
}
break;
}

var G__7106 = args7104.length;
switch (G__7106) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7104.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var args7113 = [];
var len__5554__auto___7116 = arguments.length;
var i__5555__auto___7117 = (0);
while(true){
if((i__5555__auto___7117 < len__5554__auto___7116)){
args7113.push((arguments[i__5555__auto___7117]));

var G__7118 = (i__5555__auto___7117 + (1));
i__5555__auto___7117 = G__7118;
continue;
} else {
}
break;
}

var G__7115 = args7113.length;
switch (G__7115) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7113.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4425__auto__ = owner.refs;
if(cljs.core.truth_(temp__4425__auto__)){
var refs = temp__4425__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var args7120 = [];
var len__5554__auto___7123 = arguments.length;
var i__5555__auto___7124 = (0);
while(true){
if((i__5555__auto___7124 < len__5554__auto___7123)){
args7120.push((arguments[i__5555__auto___7124]));

var G__7125 = (i__5555__auto___7124 + (1));
i__5555__auto___7124 = G__7125;
continue;
} else {
}
break;
}

var G__7122 = args7120.length;
switch (G__7122) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7120.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var args7127 = [];
var len__5554__auto___7130 = arguments.length;
var i__5555__auto___7131 = (0);
while(true){
if((i__5555__auto___7131 < len__5554__auto___7130)){
args7127.push((arguments[i__5555__auto___7131]));

var G__7132 = (i__5555__auto___7131 + (1));
i__5555__auto___7131 = G__7132;
continue;
} else {
}
break;
}

var G__7129 = args7127.length;
switch (G__7129) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7127.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var args7134 = [];
var len__5554__auto___7137 = arguments.length;
var i__5555__auto___7138 = (0);
while(true){
if((i__5555__auto___7138 < len__5554__auto___7137)){
args7134.push((arguments[i__5555__auto___7138]));

var G__7139 = (i__5555__auto___7138 + (1));
i__5555__auto___7138 = G__7139;
continue;
} else {
}
break;
}

var G__7136 = args7134.length;
switch (G__7136) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7134.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var args7141 = [];
var len__5554__auto___7144 = arguments.length;
var i__5555__auto___7145 = (0);
while(true){
if((i__5555__auto___7145 < len__5554__auto___7144)){
args7141.push((arguments[i__5555__auto___7145]));

var G__7146 = (i__5555__auto___7145 + (1));
i__5555__auto___7145 = G__7146;
continue;
} else {
}
break;
}

var G__7143 = args7141.length;
switch (G__7143) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7141.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var args7148 = [];
var len__5554__auto___7151 = arguments.length;
var i__5555__auto___7152 = (0);
while(true){
if((i__5555__auto___7152 < len__5554__auto___7151)){
args7148.push((arguments[i__5555__auto___7152]));

var G__7153 = (i__5555__auto___7152 + (1));
i__5555__auto___7152 = G__7153;
continue;
} else {
}
break;
}

var G__7150 = args7148.length;
switch (G__7150) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7148.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map