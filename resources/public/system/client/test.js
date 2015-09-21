// Compiled by ClojureScript 1.7.10 {}
goog.provide('system.client.test');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('cljs.reader');
system.client.test.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"ABen",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"D",new cljs.core.Keyword(null,"last","last",1105735132),"Effect",new cljs.core.Keyword(null,"email","email",1415816706),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null)], null)], null));
system.client.test.contacts_view = (function system$client$test$contacts_view(data,owner){
if(typeof system.client.test.t9555 !== 'undefined'){
} else {

/**
* @constructor
*/
system.client.test.t9555 = (function (contacts_view,data,owner,meta9556){
this.contacts_view = contacts_view;
this.data = data;
this.owner = owner;
this.meta9556 = meta9556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
system.client.test.t9555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9557,meta9556__$1){
var self__ = this;
var _9557__$1 = this;
return (new system.client.test.t9555(self__.contacts_view,self__.data,self__.owner,meta9556__$1));
});

system.client.test.t9555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9557){
var self__ = this;
var _9557__$1 = this;
return self__.meta9556;
});

system.client.test.t9555.prototype.om$core$IRender$ = true;

system.client.test.t9555.prototype.om$core$IRender$render$arity$1 = (function (this__9544__auto__){
var self__ = this;
var this__9544__auto____$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"Contact lista"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,system.client.test.contact_view,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

system.client.test.t9555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"contacts-view","contacts-view",-1128678803,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9556","meta9556",-869112730,null)], null);
});

system.client.test.t9555.cljs$lang$type = true;

system.client.test.t9555.cljs$lang$ctorStr = "system.client.test/t9555";

system.client.test.t9555.cljs$lang$ctorPrWriter = (function (this__8388__auto__,writer__8389__auto__,opt__8390__auto__){
return cljs.core._write.call(null,writer__8389__auto__,"system.client.test/t9555");
});

system.client.test.__GT_t9555 = (function system$client$test$contacts_view_$___GT_t9555(contacts_view__$1,data__$1,owner__$1,meta9556){
return (new system.client.test.t9555(contacts_view__$1,data__$1,owner__$1,meta9556));
});

}

return (new system.client.test.t9555(system$client$test$contacts_view,data,owner,null));
});
system.client.test.contact_view = (function system$client$test$contact_view(contact,owner){
if(typeof system.client.test.t9561 !== 'undefined'){
} else {

/**
* @constructor
*/
system.client.test.t9561 = (function (contact_view,contact,owner,meta9562){
this.contact_view = contact_view;
this.contact = contact;
this.owner = owner;
this.meta9562 = meta9562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
system.client.test.t9561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9563,meta9562__$1){
var self__ = this;
var _9563__$1 = this;
return (new system.client.test.t9561(self__.contact_view,self__.contact,self__.owner,meta9562__$1));
});

system.client.test.t9561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9563){
var self__ = this;
var _9563__$1 = this;
return self__.meta9562;
});

system.client.test.t9561.prototype.om$core$IRender$ = true;

system.client.test.t9561.prototype.om$core$IRender$render$arity$1 = (function (this__9544__auto__){
var self__ = this;
var this__9544__auto____$1 = this;
return React.DOM.li({"style": {"color": "green", "size": "30px"}},system.client.test.display_name.call(null,self__.contact));
});

system.client.test.t9561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"contact-view","contact-view",1690125007,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9562","meta9562",490767698,null)], null);
});

system.client.test.t9561.cljs$lang$type = true;

system.client.test.t9561.cljs$lang$ctorStr = "system.client.test/t9561";

system.client.test.t9561.cljs$lang$ctorPrWriter = (function (this__8388__auto__,writer__8389__auto__,opt__8390__auto__){
return cljs.core._write.call(null,writer__8389__auto__,"system.client.test/t9561");
});

system.client.test.__GT_t9561 = (function system$client$test$contact_view_$___GT_t9561(contact_view__$1,contact__$1,owner__$1,meta9562){
return (new system.client.test.t9561(contact_view__$1,contact__$1,owner__$1,meta9562));
});

}

return (new system.client.test.t9561(system$client$test$contact_view,contact,owner,null));
});
system.client.test.display_name = (function system$client$test$display_name(p__9564){
var map__9567 = p__9564;
var map__9567__$1 = ((((!((map__9567 == null)))?((((map__9567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9567):map__9567);
var contact = map__9567__$1;
var first = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(system.client.test.middle_name.call(null,contact))].join('');
});
system.client.test.middle_name = (function system$client$test$middle_name(p__9569){
var map__9572 = p__9569;
var map__9572__$1 = ((((!((map__9572 == null)))?((((map__9572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9572):map__9572);
var middle = cljs.core.get.call(null,map__9572__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__9572__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
if(cljs.core.truth_(middle)){
return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else {
return null;
}
}
});
om.core.root.call(null,system.client.test.contacts_view,system.client.test.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("scriptid")], null));
system.client.test.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
system.client.test.edn_xhr = (function system$client$test$edn_xhr(p__9574){
var map__9577 = p__9574;
var map__9577__$1 = ((((!((map__9577 == null)))?((((map__9577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9577):map__9577);
var method = cljs.core.get.call(null,map__9577__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.call(null,map__9577__$1,new cljs.core.Keyword(null,"url","url",276297046));
var data = cljs.core.get.call(null,map__9577__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_complete = cljs.core.get.call(null,map__9577__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__9577,map__9577__$1,method,url,data,on_complete){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__9577,map__9577__$1,method,url,data,on_complete))
);

return xhr.send(url,system.client.test.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
system.client.test.on_js_reload = (function system$client$test$on_js_reload(){
return null;
});

//# sourceMappingURL=test.js.map