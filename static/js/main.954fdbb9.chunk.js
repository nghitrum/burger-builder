(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,function(e,t,a){e.exports={Logo:"Logo_Logo__3tJ9M"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,a){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(29),a(2)),i=a(3),s=a(4),d=a(5),u=a(15),m=a.n(u),g=a(16),p=a.n(g),_=function(e){return r.a.createElement("div",{className:m.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:p.a,alt:"Burger Builder"}))},h=a(10),b=a.n(h),E=function(e){return r.a.createElement("li",{className:b.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?b.a.active:null},e.children))},v=a(17),f=a.n(v),B=function(e){return r.a.createElement("ul",{className:f.a.NavigationItems},r.a.createElement(E,{link:"/",active:!0},"Burger Builder"),r.a.createElement(E,{link:"/"},"Checkout"))},C=a(18),k=a.n(C),w=function(e){return r.a.createElement("div",{onClick:e.clicked,className:k.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},N=a(8),S=a.n(N),y=function(e){return r.a.createElement("header",{className:S.a.Toolbar},r.a.createElement(w,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:S.a.Logo},r.a.createElement(_,null)),r.a.createElement("nav",{className:S.a.DesktopOnly},r.a.createElement(B,null)))},O=a(19),D=a.n(O),T=function(e){return r.a.createElement(n.Fragment,null,e.show?r.a.createElement("div",{className:D.a.Backdrop,onClick:e.clicked}):null)},L=a(6),I=a.n(L),j=function(e){var t=e.open?[I.a.SideDrawer,I.a.Open].join(" "):[I.a.SideDrawer,I.a.Close].join(" ");return r.a.createElement(n.Fragment,null,r.a.createElement(T,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t},r.a.createElement("div",{className:I.a.Logo},r.a.createElement(_,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},x=a(20),M=a.n(x),H=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n.state={showSideDrawer:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(y,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(j,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:M.a.Content},this.props.children))}}]),a}(n.Component),P=a(9),F=a(23),Y=a(1),A=a.n(Y),J=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:A.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:A.a.BreadTop},r.a.createElement("div",{className:A.a.Seeds1}),r.a.createElement("div",{className:A.a.Seeds1}));break;case"meat":t=r.a.createElement("div",{className:A.a.Meat});break;case"salad":t=r.a.createElement("div",{className:A.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:A.a.Bacon});break;case"cheese":t=r.a.createElement("div",{className:A.a.Cheese})}return t},R=a(21),K=a.n(R),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(J,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:K.a.Burger},r.a.createElement(J,{type:"bread-top"}),t,r.a.createElement(J,{type:"bread-bottom"}))},U=a(7),W=a.n(U),q=function(e){return r.a.createElement("div",{className:W.a.BuildControl},r.a.createElement("div",{className:W.a.Label},e.label),r.a.createElement("button",{className:W.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:W.a.More,onClick:e.added},"More"))},z=a(11),Q=a.n(z),V=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meet",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),V.map((function(t){return r.a.createElement(q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},$=a(22),G=a.n($),ee=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(T,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:G.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},te=a(12),ae=a.n(te),ne=function(e){return r.a.createElement("button",{className:[ae.a.Button,ae.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},re=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total prices: \u20ac",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(ne,{btnType:"Danger",clicked:e.purchaseCanceled},"CANCEL"),r.a.createElement(ne,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},le={salad:.5,cheese:1,meat:1.5,bacon:.5},oe=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(P.a)({},n.state.ingredients);a[e]=t;var r=le[e],l=n.state.totalPrice+r;n.setState({totalPrice:l,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=Object(P.a)({},n.state.ingredients);r[e]=a;var l=le[e],o=n.state.totalPrice-l;n.setState({totalPrice:o,ingredients:r}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){console.log("continued")},n.state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},n}return Object(i.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(P.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(n.Fragment,null,r.a.createElement(ee,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(re,{price:this.state.totalPrice,ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(X,{ingredients:this.state.ingredients}),r.a.createElement(Z,{price:this.state.totalPrice,disabled:e,purchasable:this.state.purchasable,ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,ordered:this.purchaseHandler}))}}]),a}(n.Component),ce=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(oe,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.954fdbb9.chunk.js.map