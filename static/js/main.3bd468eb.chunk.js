(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{300:function(t,a){},352:function(t,a,e){},369:function(t,a,e){},407:function(t,a,e){},443:function(t,a,e){"use strict";e.r(a);var r=e(7),n=e(0),c=e(98),s=e(52),i=(e(115),e(455)),o=e(61),d=e(67),l=e.n(d),u=(e(352),Object(d.connect)((function(t){return{onSize:t.products.onSize}}))((function(t){var a=t.dispatch,e=t.onSize;return Object(r.jsxs)("div",{className:"boxs",children:[Object(r.jsx)("h1",{children:"Sizes:"}),Object(r.jsx)(c.a,{gutter:[30,20],children:["XS","S","M","ML","L","XL","XXL"].map((function(t,n){return Object(r.jsx)(s.a,{children:Object(r.jsx)(i.a,{checked:e.includes(t),onClick:function(){a({type:"products/changeOnSize",payload:{checked:!e.includes(t),size:t}})},children:t})},t+n)}))}),Object(r.jsx)(o.a,{style:{width:"100%"},onClick:function(){a({type:"products/updateList",payload:{sizes:e}})},children:"\u7b5b\u9009"})]})}))),p=e(457),j=e(451),f=e(220),O=e(449),y=e(450),h=e(458),b=e(243),m=e(459),x=(e(369),e(454)),g=Object(d.connect)((function(t){var a=t.products,e=t.loading;return{products:a.sortData,importLoading:e.effects["products/fetch"],getLoading:e.effects["products/setStorage"],load:a.load}}))((function(t){var a=t.dispatch,e=t.products,i=t.importLoading,d=t.getLoading,l=t.load;return Object(n.useEffect)((function(){window.localStorage.show_data?a({type:"products/setStorage",payload:{load:!1}}):a({type:"products/fetch",payload:{page:1,load:!0}})}),[]),Object(r.jsxs)("div",{className:"allWife",children:[Object(r.jsxs)(c.a,{className:"choose",gutter:[10,10],children:[Object(r.jsxs)(s.a,{xs:24,sm:12,children:["\u53d1\u73b0",e.length,"\u4ef6\u5546\u54c1"]}),Object(r.jsxs)(s.a,{xs:24,sm:12,children:["\u6392\u5e8f\xa0\xa0",Object(r.jsx)(p.a,{overlay:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Item,{onClick:function(){a({type:"products/recoverDefault"})},children:"\u9ed8\u8ba4\u6392\u5e8f"}),Object(r.jsx)(j.a.Item,{onClick:function(){a({type:"products/changeUp"})},children:"\u4ef7\u683c\u5347\u5e8f"}),Object(r.jsx)(j.a.Item,{onClick:function(){a({type:"products/changeDown"})},children:"\u4ef7\u683c\u964d\u5e8f"})]}),children:Object(r.jsxs)("a",{className:"ant-dropdown-link",onClick:function(t){return t.preventDefault()},children:["\u6392\u5e8f\u9009\u62e9 ",Object(r.jsx)(x.a,{})]})})]})]}),Object(r.jsx)(f.a,{tip:"\u52a0\u8f7d\u4e2d",spinning:l?i:d,style:{marginTop:"200px"},children:Object(r.jsx)(c.a,{gutter:[20,20],children:e.map((function(t,e){return Object(r.jsx)(s.a,{xs:24,sm:12,md:12,lg:8,xl:6,xxl:6,children:Object(r.jsxs)(O.a,{bordered:!0,hoverable:!0,className:"wife",children:[Object(r.jsx)(y.a,{src:"./img/".concat(t.sku,"_1.jpg"),alt:"\u56fe\u7247\u672a\u52a0\u8f7d",style:{width:"100%"}}),Object(r.jsxs)("div",{className:"price",children:[Object(r.jsx)("div",{className:"show-title",children:t.title}),Object(r.jsx)("hr",{className:"line"}),t.currencyFormat,Object(r.jsxs)("span",{className:"show-price",children:[" ",t.price.toFixed(2)]})]}),Object(r.jsx)(h.a,{content:t.availableSizes.map((function(e,n){return Object(r.jsx)(o.a,{className:"size-title",disabled:0===t.installments,onClick:function(){a({type:"cart/addCart",payload:{product_id:t.id,quantity:t.installments>0?1:0,size:e,product:t}}),b.b.success("\u6dfb\u52a0\u8d2d\u7269\u8f66\u6210\u529f"),0===t.installments&&b.b.warning("\u5546\u54c1\u88ab\u4e70\u5b8c\u5566")},children:e},n)})),title:"\u5c3a\u7801\u9009\u62e9",children:Object(r.jsx)(o.a,{type:"primary",size:"large",style:{width:"100%"},children:"\u6dfb\u52a0"})}),Object(r.jsx)(m.a,{className:"tag",color:"#2db7f5",children:t.isFreeShipping?"isFreeShipping":"noFreeShipping"}),Object(r.jsxs)("span",{className:"kucun",children:["\u5e93\u5b58\uff1a",t.installments]})]})},e+t)}))})})]})})),v=e(5),w=e(456),S=e(453),_=e(448),N=e(452),z=e(460),J=Object(z.a)({scriptUrl:"//at.alicdn.com/t/font_2254369_ekk34fcauud.js"}),k=(e(407),Object(d.connect)((function(t){return{data:t.cart.data}}))((function(t){var a=t.data,e=t.dispatch;Object(n.useEffect)((function(){window.localStorage.cart_data&&e({type:"cart/updateCart"})}),[]);var i=Object(n.useState)(0),d=Object(v.a)(i,2),l=d[0],u=d[1],p=Object(n.useState)(!1),j=Object(v.a)(p,2),f=j[0],O=j[1],h=a.reduce((function(t,a){return t+a.quantity*a.product.price}),0).toFixed(2),b=a.reduce((function(t,a){return t+a.quantity}),0);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"small_cart",children:[Object(r.jsx)(J,{type:"icon-gouwuche",onClick:function(){u(1)}}),Object(r.jsx)(w.a,{count:b,className:"head-example"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(S.a,{title:Object(r.jsx)("div",{className:"inside-cart",children:Object(r.jsxs)("div",{className:"content-title",children:[Object(r.jsx)(J,{type:"icon-gouwuche1"}),Object(r.jsx)(w.a,{count:b,className:"badge-inside"}),Object(r.jsx)("span",{className:"cart-title",children:"Cart"})]})}),footer:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"total",children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(s.a,{span:12,children:"\u603b\u4ef7"}),Object(r.jsxs)(s.a,{span:12,children:["$",h]})]})}),Object(r.jsx)(o.a,{type:"primary",style:{marginTop:"20px"},block:!0,onClick:function(){O(!0)},children:"\u6e05\u7a7a\u8d2d\u7269\u8f66"})]}),placement:"right",closable:!0,onClose:function(){u(0)},visible:l,width:"".concat(function(){var t=0,a=document.documentElement.clientWidth;return a>1300?t=30:a<=1300&&a>1e3?t=40:a<=1e3&&a>700?t=60:a<=700&&a>600?t=70:a<=600&&(t=100),t}(),"%"),children:[Object(r.jsx)(_.b,{bordered:!0,dataSource:a,itemLayout:"vertical",size:"large",renderItem:function(t,a){return Object(r.jsx)(_.b.Item,{children:Object(r.jsxs)(c.a,{gutter:[10,0],children:[Object(r.jsx)(s.a,{span:8,children:Object(r.jsx)(y.a,{src:"./img/".concat(t.product.sku,"_2.jpg"),alt:"\u88c2\u5f00",className:"imgs"})}),Object(r.jsxs)(s.a,{span:8,children:[Object(r.jsx)("p",{children:t.product.title}),Object(r.jsx)("div",{className:"cart-good-name",children:Object(r.jsxs)("span",{children:[t.size," | ",t.product.style]})}),Object(r.jsxs)("p",{className:"cart-quantity",children:["Quantity:",t.quantity]})]}),Object(r.jsxs)(s.a,{span:8,className:"cart_right",children:[Object(r.jsx)(o.a,{className:"exit",onClick:function(a){e({type:"cart/deleteItem",payload:{delete_id:t.product_id,size:t.size,index:a,quantity:t.quantity}})},children:"\xd7"}),Object(r.jsx)("div",{className:"cart-good-price-box",children:Object(r.jsxs)("p",{className:"cart-good-price",children:[t.product.currencyFormat,t.product.price.toFixed(2)]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,{type:"primary",disabled:1===t.quantity,onClick:function(){e({type:"cart/decrease",payload:{id:t.product_id,Csize:t.size}})},size:"small",children:"-"}),"\xa0",Object(r.jsx)(o.a,{type:"primary",onClick:function(){e({type:"cart/increase",payload:{id:t.product_id,remainder:t.product.installments>0?1:0,Csize:t.size}})},size:"small",children:"+"})]})]})]})},t.sku)}}),Object(r.jsxs)(N.a,{title:"\u6e05\u7a7a\u8d2d\u7269\u8f66",visible:f,onOk:function(){e({type:"cart/clearCar",payload:{cart_quantity:a}}),O(!1)},onCancel:function(){O(!1)},children:[Object(r.jsxs)("p",{children:["\u786e\u8ba4\u6e05\u7a7a\u8d2d\u7269\u8f66\u5417\uff1f\u5f53\u524d\u603b\u4ef7",Object(r.jsxs)("span",{style:{fontWeight:"500",fontSize:"20px"},children:["$",h]}),"\uff0c \u603b\u5171",Object(r.jsx)("strong",{style:{fontSize:"20px"},children:b}),"\u4ef6\u5546\u54c1"]}),Object(r.jsx)("p",{children:"\u6ca1\u6709\u7ed3\u7b97\u9875\u9762\u5c31\u76f4\u63a5\u5199\u4e2a\u6e05\u7a7a\u8d2d\u7269\u8f66"})]})]})})]})})));var D=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(s.a,{xs:24,md:6,span:6,children:Object(r.jsx)(u,{})}),Object(r.jsx)(s.a,{xs:24,md:16,span:16,children:Object(r.jsx)(g,{})}),Object(r.jsx)(s.a,{span:2,children:Object(r.jsx)(k,{})})]})})},I=e(8),C=e(1),q=e(11),L=e.n(q),G=e(62),F=e(238),X=e.n(F),U=function(){var t=Object(G.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.a.get("https://www.fastmock.site/mock/b3fb1711049eb284f006b4d4f1e2664b/shop/api/shop").then((function(t){return t.data})).catch((function(t){alert("\u6ca1\u62ff\u5230\u6570\u636e\u554a\uff01\uff01\uff01")}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M={namespace:"products",state:{data:[],sortData:[],onSize:["XS","S","M","ML","L","XL","XXL"],load:null},effects:{fetch:L.a.mark((function t(a,e){var r,n,c,s,i,o,d;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload,n=r.page,c=void 0===n?1:n,s=r.load,i=e.call,o=e.put,t.next=4,i(U,{page:c});case 4:return d=t.sent,t.next=7,o({type:"save",payload:{data:d}});case 7:return t.next=9,o({type:"updateList2",payload:{load:s}});case 9:case"end":return t.stop()}}),t)})),recoverDefault:L.a.mark((function t(a,e){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.payload,r=e.put,t.next=4,r({type:"sortGoodDefault"});case 4:case"end":return t.stop()}}),t)})),changeUp:L.a.mark((function t(a,e){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.payload,e.call,r=e.put,t.next=4,r({type:"sortGoodUp"});case 4:case"end":return t.stop()}}),t)})),changeDown:L.a.mark((function t(a,e){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.payload,e.call,r=e.put,t.next=4,r({type:"sortGoodDown"});case 4:case"end":return t.stop()}}),t)})),setStorage:L.a.mark((function t(a,e){var r,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload.load,n=e.put,t.next=4,n({type:"storageData",payload:{paroduct_data:JSON.parse(window.localStorage.paroduct_data),show_data:JSON.parse(window.localStorage.show_data),paroduct_size:JSON.parse(window.localStorage.paroduct_size)}});case 4:return t.next=6,n({type:"updateList1",payload:{load:r}});case 6:case"end":return t.stop()}}),t)}))},reducers:{updateList1:function(t,a){var e=a.payload;return Object(C.a)(Object(C.a)({},t),{},{load:e.load})},updateList2:function(t,a){var e=a.payload;return Object(C.a)(Object(C.a)({},t),{},{load:e.load})},save:function(t,a){var e=a.payload,r=t.onSize,n=window.localStorage,c=JSON.stringify(e.data),s=JSON.stringify(e.data),i=JSON.stringify(r);return n.setItem("paroduct_data",c),n.setItem("show_data",s),n.setItem("paroduct_size",i),Object(C.a)(Object(C.a)({},t),{},{data:e.data,sortData:e.data})},loseItem:function(t,a){var e=a.payload,r=t.data.map((function(t){return t.id===e.product_id&&t.installments>0?(--t.installments,t):t})),n=t.sortData.map((function(t){return t.id===e.product_id&&t.installments>0?(--t.installments,t):t})),c=window.localStorage,s=JSON.stringify(r),i=JSON.stringify(n);return c.setItem("paroduct_data",s),c.setItem("show_data",i),Object(C.a)(Object(C.a)({},t),{},{data:r,sortData:n})},addGood:function(t,a){var e=a.payload,r=t.data.map((function(t){return t.id===e.id&&t.installments>0?(--t.installments,t):t})),n=t.sortData.map((function(t){return t.id===e.id&&t.installments>0?(--t.installments,t):t})),c=window.localStorage,s=JSON.stringify(r),i=JSON.stringify(n);return c.setItem("paroduct_data",s),c.setItem("show_data",i),Object(C.a)(Object(C.a)({},t),{},{data:r,sortData:n})},cutGood:function(t,a){var e=a.payload,r=t.data.map((function(t){return t.id===e.id?(t.installments+=1,t):t})),n=t.sortData.map((function(t){return t.id===e.id?(t.installments+=1,t):t})),c=window.localStorage,s=JSON.stringify(r),i=JSON.stringify(n);return c.setItem("paroduct_data",s),c.setItem("show_data",i),Object(C.a)(Object(C.a)({},t),{},{data:r,sortData:n})},sortGoodDefault:function(t,a){for(var e=t.sortData,r=JSON.parse(JSON.stringify(e)),n=0;n<r.length-1;n++)for(var c=n;c<r.length-1;c++)if(r[n].id>r[n+1].id){var s;s=r[n],r[n]=r[n+1],r[n+1]=s}var i=window.localStorage,o=JSON.stringify(r);return i.setItem("show_data",o),Object(C.a)(Object(C.a)({},t),{},{sortData:r})},sortGoodUp:function(t,a){for(var e=t.sortData.map((function(t){return t.price})).sort((function(t,a){return t-a})),r=JSON.parse(JSON.stringify(t.sortData)),n=[],c=0;c<e.length;c++)for(var s=0;s<t.sortData.length;s++){var i;(null===(i=r[s])||void 0===i?void 0:i.price)!==e[c]||(n.push(r[s]),r.splice(s,1))}var o=window.localStorage,d=JSON.stringify(n);return o.setItem("show_data",d),Object(C.a)(Object(C.a)({},t),{},{sortData:n})},sortGoodDown:function(t,a){for(var e=t.sortData.map((function(t){return t.price})).sort((function(t,a){return a-t})),r=JSON.parse(JSON.stringify(t.sortData)),n=[],c=0;c<e.length;c++)for(var s=0;s<t.sortData.length;s++){var i;(null===(i=r[s])||void 0===i?void 0:i.price)!==e[c]||(n.push(r[s]),r.splice(s,1))}var o=window.localStorage,d=JSON.stringify(n);return o.setItem("show_data",d),Object(C.a)(Object(C.a)({},t),{},{sortData:n})},recover:function(t,a){for(var e=a.payload,r=JSON.parse(JSON.stringify(t.data)),n=0;n<e.cart_quantity.length;n++)for(var c=0;c<r.length;c++)r[c].id===e.cart_quantity[n].product_id&&(r[c].installments+=e.cart_quantity[n].quantity);for(var s=JSON.parse(JSON.stringify(t.sortData)),i=0;i<e.cart_quantity.length;i++)for(var o=0;o<s.length;o++)s[o].id===e.cart_quantity[i].product_id&&(s[o].installments+=e.cart_quantity[i].quantity);var d=window.localStorage,l=JSON.stringify(r),u=JSON.stringify(s);return d.setItem("paroduct_data",l),d.setItem("show_data",u),Object(C.a)(Object(C.a)({},t),{},{data:r,sortData:s})},recoverItem:function(t,a){for(var e=a.payload,r=JSON.parse(JSON.stringify(t.data)),n=0;n<r.length;n++)if(r[n].id===e.delete_id){r[n].installments+=e.quantity;break}for(var c=JSON.parse(JSON.stringify(t.sortData)),s=0;s<c.length;s++)if(c[s].id===e.delete_id){c[s].installments+=e.quantity;break}var i=window.localStorage,o=JSON.stringify(r),d=JSON.stringify(c);return i.setItem("paroduct_data",o),i.setItem("show_data",d),Object(C.a)(Object(C.a)({},t),{},{data:r,sortData:c})},changeOnSize:function(t,a){var e=a.payload,r=e.checked,n=e.size,c=t.onSize;c=r?[].concat(Object(I.a)(c),[n]):c.filter((function(t){return t!==n}));var s=window.localStorage,i=JSON.stringify(c);return s.setItem("paroduct_size",i),Object(C.a)(Object(C.a)({},t),{},{onSize:c})},updateList:function(t,a){a.payload.sizes;for(var e=t.data,r=t.onSize,n=JSON.parse(JSON.stringify(e)),c=[],s=0;s<r.length;s++)for(var i=0;i<n.length;i++)n[i].availableSizes.includes(r[s])&&(c.push(n[i]),n.splice(i,1),--i);var o=window.localStorage,d=JSON.stringify(c);return o.setItem("show_data",d),Object(C.a)(Object(C.a)({},t),{},{sortData:c})},storageData:function(t,a){var e=a.payload;return Object(C.a)(Object(C.a)({},t),{},{data:e.paroduct_data,sortData:e.show_data,onSize:e.paroduct_size})}}},E={namespace:"cart",state:{data:[]},reducers:{saveItem:function(t,a){var e=a.payload,r=[],n=t.data.find((function(t){return t.product_id===e.product_id&&t.size===e.size}));n?(n.quantity+=e.quantity,r=t.data.map((function(t){return t.product_id===n.product_id&&t.size===n.size?n:t}))):r=[].concat(Object(I.a)(t.data),[e]);var c=window.localStorage,s=JSON.stringify(r);return c.setItem("cart_data",s),{data:r}},cleanCar:function(t,a){var e=[],r=window.localStorage,n=JSON.stringify(e);return r.setItem("cart_data",n),{data:e}},deleteItem_cart:function(t,a){var e=a.payload,r=JSON.parse(JSON.stringify(t.data));r.splice(e.index,1);var n=window.localStorage,c=JSON.stringify(r);return n.setItem("cart_data",c),{data:r}},addOne:function(t,a){var e=a.payload,r=[],n=t.data.find((function(t){return t.product_id===e.id&&t.size===e.Csize}));n&&(n.quantity+=e.remainder,r=t.data.map((function(t){return t.product_id===n.product_id&&t.size===e.Csize?n:t})));var c=window.localStorage,s=JSON.stringify(r);return c.setItem("cart_data",s),{data:r}},cutOne:function(t,a){var e=a.payload,r=[],n=t.data.find((function(t){return t.product_id===e.id&&t.size===e.Csize}));n&&(n.quantity=n.quantity-1,r=t.data.map((function(t){return t.product_id===n.product_id&&t.size===e.Csize?n:t})));var c=window.localStorage,s=JSON.stringify(r);return c.setItem("cart_data",s),{data:r}},updateCartData:function(t,a){var e=a.payload;return Object(C.a)(Object(C.a)({},t),{},{data:e.cart_data})}},effects:{addCart:L.a.mark((function t(a,e){var r,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload,e.call,n=e.put,t.next=4,n({type:"products/loseItem",payload:r});case 4:return t.next=6,n({type:"saveItem",payload:r});case 6:case"end":return t.stop()}}),t)})),increase:L.a.mark((function t(a,e){var r,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload,e.call,n=e.put,t.next=4,n({type:"products/addGood",payload:r});case 4:return t.next=6,n({type:"addOne",payload:r});case 6:case"end":return t.stop()}}),t)})),decrease:L.a.mark((function t(a,e){var r,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload,e.call,n=e.put,t.next=4,n({type:"products/cutGood",payload:r});case 4:return t.next=6,n({type:"cutOne",payload:r});case 6:case"end":return t.stop()}}),t)})),clearCar:L.a.mark((function t(a,e){var r,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload,e.call,n=e.put,t.next=4,n({type:"cleanCar"});case 4:return t.next=6,n({type:"products/recover",payload:r});case 6:case"end":return t.stop()}}),t)})),deleteItem:L.a.mark((function t(a,e){var r,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.payload,e.call,n=e.put,t.next=4,n({type:"deleteItem_cart",payload:r});case 4:return t.next=6,n({type:"products/recoverItem",payload:r});case 6:case"end":return t.stop()}}),t)})),updateCart:L.a.mark((function t(a,e){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.payload,r=e.put,t.next=4,r({type:"updateCartData",payload:{cart_data:JSON.parse(window.localStorage.cart_data)}});case 4:case"end":return t.stop()}}),t)}))}},W=e(242),T=l()();T.use(Object(W.a)()),T.router((function(){return Object(r.jsx)(D,{})})),T.model(M),T.model(E),T.start("#root")}},[[443,1,2]]]);
//# sourceMappingURL=main.3bd468eb.chunk.js.map