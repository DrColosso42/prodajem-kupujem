(this.webpackJsonpassajt=this.webpackJsonpassajt||[]).push([[0],{35:function(n,e,t){},36:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var i,a,r,o,s,c,d,l,j,h,b,p,u,m,x,f=t(2),g=t.n(f),O=t(25),w=t.n(O),v=(t(35),t(36),t(9)),k=t(3),y=t(4),z=t(16),M=t(29),P="#003368",E=y.a.section(i||(i=Object(k.a)(["\n  position: fixed;\n  z-index: 50;\n  top: 0;\n  width: 100%;\n  /* background: ","; */\n\n  background: #f6f8f8;\n  box-shadow: ",";\n  transition: 0.3s ease-in;\n"])),(function(n){return n.background?"#f6f8f8":"transparent"}),(function(n){return n.background?"0px 0px 5px rgba(0,0,0,0.3)":"transparent"})),C=y.a.nav(a||(a=Object(k.a)(["\n  width: 100%;\n  background: transparent;\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  justify-content: space-between;\n"]))),S=y.a.div(r||(r=Object(k.a)(["\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 2rem;\n  width: 200px;\n  line-height: 1;\n  color: ",";\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n  }\n"])),"#FF1E00"),F=y.a.ul(o||(o=Object(k.a)(["\n  list-style-type: none;\n  display: flex;\n  width: 40%;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n\n  @media screen and (max-width: 800px) {\n    display: none;\n  }\n"]))),K=Object(y.a)(z.b)(s||(s=Object(k.a)(["\n  color: rgba(0, 54, 101, 0.8);\n  text-decoration: none;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  transition: 0.2s ease-in;\n  text-align: center;\n  padding: 1% 3%;\n  border-radius: 4px;\n  position: relative;\n\n  &:hover {\n    /* /* background: ",'; */\n    color: rgba(0, 54, 101, 1);\n\n    &::after {\n      width: 60%;\n    }\n  }\n\n  &::after {\n    content: "";\n\n    height: 1px;\n    background: ',";\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 10%;\n    /* border-radius: 3px; */\n    transition: 0.15s ease-in;\n    width: 0%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n\n    &:hover {\n      background: transparent;\n      color: ",";\n    }\n  }\n"])),P,P,P),N=y.a.p(c||(c=Object(k.a)(["\n  margin: 0;\n  padding: 0;\n  color: ",";\n  font-size: 1.15rem;\n\n  @media screen and (max-width: 800px) {\n    display: none;\n  }\n"])),P),R=y.a.div(d||(d=Object(k.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  overflow: hidden;\n  transition: 0.5s ease-in-out;\n"])),(function(n){return n.open?"40vh":"0"})),B=Object(y.a)(M.a)(l||(l=Object(k.a)(["\n  color: ",";\n  font-size: 2rem;\n"])),P),D=t(1),L=function(){var n=Object(f.useState)(0),e=Object(v.a)(n,2),t=e[0],i=e[1],a=Object(f.useState)(!1),r=Object(v.a)(a,2),o=r[0],s=r[1],c=Object(f.useState)(!1),d=Object(v.a)(c,2),l=d[0],j=d[1],h=Math.floor(17e3*Math.random()),b=h+5e3,p=window.innerWidth;function u(){var n=b-h;b-=Math.floor(Math.random()*(.1*n-.01*n)+.01*n),i(b),b-100>h&&window.setTimeout(u,10)}function m(){s(!o)}return Object(f.useEffect)((function(){u()}),[]),window.addEventListener("scroll",(function(){window.scrollY>0?j(!0):j(!1)})),Object(D.jsxs)(E,{background:l,children:[Object(D.jsxs)(C,{children:[Object(D.jsxs)(S,{children:[Object(D.jsx)("span",{style:{color:"#003368",display:"block"},children:"PRODAJEM"}),"KUPUJEM"]}),Object(D.jsxs)(N,{children:["Trenutno postavljeno ",t," oglasa!"]}),p>800?Object(D.jsxs)(F,{children:[Object(D.jsx)(K,{to:"/",children:"Po\u010detna"}),Object(D.jsx)(K,{to:"/create",children:"Postavi Oglas"}),Object(D.jsx)(K,{to:"/about",children:"O Nama"})]}):Object(D.jsx)(B,{onClick:m})]}),Object(D.jsxs)(R,{open:o,children:[Object(D.jsx)(K,{onClick:m,to:"/",children:"Pocetna"}),Object(D.jsx)(K,{onClick:m,to:"/create",children:"Postavi Oglas"}),Object(D.jsx)(K,{onClick:m,to:"/about",children:"O Nama"})]})]})},T=t(5),A=t(12),I=y.a.div(j||(j=Object(k.a)(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 90vh;\n  margin-top: 10vh;\n"]))),J=y.a.div(h||(h=Object(k.a)(["\n  width: 100%;\n  position: relative;\n  height: 90vh;\n  background: red;\n  display: flex;\n  /* overflow: hidden; */\n  flex-shrink: 0;\n  transform: translateX(","%);\n  transition: ",";\n"])),(function(n){return n.offset}),(function(n){return n.transition})),V=y.a.div(b||(b=Object(k.a)(["\n  height: 100%;\n  width: 100%;\n  background-size: cover !important;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 10%;\n"]))),U=Object(y.a)(A.a)(p||(p=Object(k.a)(["\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  z-index: 5;\n  font-size: 4rem;\n  transition: 0.2s ease;\n\n  &:hover {\n    color: rgba(255, 255, 255, 0.8);\n    cursor: pointer;\n  }\n"]))),q=Object(y.a)(A.b)(u||(u=Object(k.a)(["\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  z-index: 5;\n  font-size: 4rem;\n  transition: 0.2s ease;\n\n  &:hover {\n    color: rgba(255, 255, 255, 0.8);\n    cursor: pointer;\n  }\n"]))),Y=y.a.h1(m||(m=Object(k.a)(["\n  color: white;\n  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);\n  font-size: 3.5rem;\n  color: white;\n\n  @media screen and (max-width: 800px) {\n    font-size: 2rem;\n  }\n"]))),$=y.a.p(x||(x=Object(k.a)(["\n  color: white;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 1.5rem;\n  font-style: italic;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1rem;\n  }\n"]))),_=t.p+"static/media/img1.ccf3a613.jpg",W=t.p+"static/media/img2.9860a7dd.jpg",X=t.p+"static/media/img3.c58878ad.jpg",Z=t.p+"static/media/img4.27118e0c.jpg",G=t.p+"static/media/img5.0e0bc6b7.jpg";var H,Q,nn,en,tn,an,rn,on,sn,cn,dn,ln,jn,hn,bn,pn,un,mn,xn,fn,gn,On,wn,vn,kn,yn,zn,Mn,Pn,En,Cn,Sn,Fn,Kn,Nn,Rn,Bn,Dn,Ln,Tn,An,In,Jn,Vn,Un=function(){var n=Object(f.useState)(-100),e=Object(v.a)(n,2),t=e[0],i=e[1],a=Object(f.useState)("0.5s ease-in-out"),r=Object(v.a)(a,2),o=r[0],s=r[1],c=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=t,a=n?-1:1;(e+=100*a)<=-600?window.setTimeout((function(){s("none"),i(-100)}),500):e>=0&&window.setTimeout((function(){s("none"),i(-500)}),500),s("0.5s ease-in-out"),i(e)};!function(n,e){var t=Object(f.useRef)(),i=Object(f.useRef)(n);Object(f.useEffect)((function(){i.current=n}),[n]),Object(f.useEffect)((function(){if("number"===typeof e)return t.current=window.setInterval((function(){return i.current()}),e),function(){return window.clearInterval(t.current)}}),[e])}((function(){c()}),5e3);return Object(D.jsxs)(I,{children:[Object(D.jsx)(U,{onClick:function(){c(!1)}}),Object(D.jsx)(q,{onClick:function(){c(!0,!1)}}),Object(D.jsxs)(J,{offset:t,transition:o,children:[Object(D.jsxs)(V,{style:{background:"url(".concat(G,")")},children:[Object(D.jsx)(Y,{children:"Bezbedno do vas!"}),Object(D.jsx)($,{children:"Prodajem Kupujem obezbe\u0111uje siguran prevoz bilo koje vrste robe u saradnji sa partnerskim kurirskim slu\u017ebama!"})]}),Object(D.jsxs)(V,{style:{background:"url(".concat(_,")")},children:[Object(D.jsx)(Y,{children:"Dobrodo\u0161li na Prodajem Kupujem!"}),Object(D.jsx)($,{children:"Prvi i najve\u0107i sajt za ogla\u0161avanje na teritoriji Republike Srbije!"})]}),Object(D.jsxs)(V,{style:{background:"url(".concat(W,")")},children:[Object(D.jsx)(Y,{children:"Upoznajte na\u0161 tim!"}),Object(D.jsx)($,{children:"Tim vrhunskih stru\u010dnjaka u svim granama industrije!"})]}),Object(D.jsxs)(V,{style:{background:"url(".concat(X,")")},children:[Object(D.jsx)(Y,{children:"Prodajem Kupujem u Va\u0161em dzepu!"}),Object(D.jsx)($,{children:"Od sada na\u0161u aplikaciju mo\u017eete preuzeti na Va\u0161 pametni telefon i postavljati oglase gde god da se nalazite!"})]}),Object(D.jsxs)(V,{style:{background:"url(".concat(Z,")")},children:[Object(D.jsx)(Y,{children:"Pouzdanost na prvom mestu!"}),Object(D.jsx)($,{children:"Najkvalitetniji hardver i struc\u010di operatori obezbedjuju korisnicima Prodajem Kupujem neometano kori\u0161\u0107enje na\u0161eg Web Sajta!"})]}),Object(D.jsxs)(V,{style:{background:"url(".concat(G,")")},children:[Object(D.jsx)(Y,{children:"Bezbedno do vas!"}),Object(D.jsx)($,{children:"Prodajem Kupujem obezbe\u0111uje siguran prevoz bilo koje vrste robe u saradnji sa partnerskim kurirskim slu\u017ebama!"})]}),Object(D.jsxs)(V,{style:{background:"url(".concat(_,")")},children:[Object(D.jsx)(Y,{children:"Dobrodosli na Prodajem Kupujem!"}),Object(D.jsx)($,{children:"Prvi i najve\u0107i sajt za ogla\u0161avanje na teritoriji Republike Srbije!"})]})]})]})},qn="#FF1E00",Yn=y.a.section(H||(H=Object(k.a)(['\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  background: #f6f8f8;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Roboto";\n  /* color: #212121; */\n  color: rgba(0, 51, 104, 1);\n  /* color: black; */\n']))),$n=y.a.h1(Q||(Q=Object(k.a)(['\n  align-self: flex-start;\n  color: black;\n  margin: 0 10%;\n  font-size: 2.5rem;\n  position: relative;\n  text-align: left;\n  padding: 1% 0;\n\n  &::after {\n    content: "";\n    width: 50%;\n    height: 10px;\n    background: linear-gradient(-90deg, ',", ","), ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 10px;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n    padding: 3% 0;\n    font-weight: bold;\n\n    &::after {\n      height: 8px;\n      left: 0;\n      top: 0;\n    }\n  }\n"])),"#003368",qn,qn),_n=y.a.p(nn||(nn=Object(k.a)(["\n  width: 60%;\n  text-align: center;\n  font-size: 1.25rem;\n  line-height: 3rem;\n  margin: 2% 0 2% 0;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1rem;\n    line-height: 1.5rem;\n    width: 80%;\n    margin: 10% 0 10% 0;\n  }\n"]))),Wn=y.a.div(en||(en=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 70%;\n  height: 50vh;\n  @media screen and (max-width: 800px) {\n    height: 30vh;\n    width: 90%;\n  }\n"]))),Xn=y.a.img(tn||(tn=Object(k.a)(["\n  width: ","%;\n  height: ","%;\n  object-fit: cover;\n  padding: 0.3%;\n"])),(function(n){return n.width}),(function(n){return n.height})),Zn=function(){return Object(D.jsxs)(Yn,{children:[Object(D.jsx)($n,{children:"Ko smo mi?"}),Object(D.jsx)(_n,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cumque laudantium sit maxime, impedit natus nostrum cupiditate possimus soluta perspiciatis quis doloremque repudiandae at quia voluptatem. Mollitia unde vel corporis dolores quia, deserunt deleniti debitis minima corrupti. Expedita eligendi!"}),Object(D.jsxs)(Wn,{children:[Object(D.jsx)(Xn,{src:_,width:30,height:65}),Object(D.jsx)(Xn,{src:W,width:30,height:65}),Object(D.jsx)(Xn,{src:X,width:30,height:65}),Object(D.jsx)(Xn,{src:Z,width:45,height:35}),Object(D.jsx)(Xn,{src:G,width:45,height:35})]})]})},Gn=t(30),Hn="#FF1E00",Qn=y.a.section(an||(an=Object(k.a)(['\n  height: 45vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  /* font-family: "Lato"; */\n  width: 100%;\n']))),ne=y.a.div(rn||(rn=Object(k.a)(["\n  height: 40vh;\n\n  display: flex;\n  width: 100%;\n"]))),ee=y.a.div(on||(on=Object(k.a)(["\n  width: ","%;\n  height: ","%;\n  transition: opacity 0.5s ease-in;\n  opacity: ","%;\n  flex-shrink: 0;\n"])),(function(n){return n.active?100:0}),(function(n){return n.active?100:0}),(function(n){return n.active?100:0})),te=y.a.div(sn||(sn=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]))),ie=Object(y.a)(A.a)(cn||(cn=Object(k.a)(["\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  transform: translateY(-50%);\n  color: rgba(0, 51, 104, 0.5);\n  z-index: 5;\n  font-size: 4rem;\n  transition: 0.2s ease;\n\n  &:hover {\n    color: rgba(0, 51, 104, 0.8);\n    cursor: pointer;\n  }\n  @media screen and (max-width: 800px) {\n    font-size: 2rem;\n  }\n"]))),ae=Object(y.a)(A.b)(dn||(dn=Object(k.a)(["\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  transform: translateY(-50%);\n  color: rgba(0, 51, 104, 0.5);\n  z-index: 5;\n  font-size: 4rem;\n  transition: 0.2s ease;\n\n  &:hover {\n    color: rgba(0, 51, 104, 0.8);\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 2rem;\n  }\n"]))),re=y.a.h1(ln||(ln=Object(k.a)(["\n  font-size: 2rem;\n  user-select: none;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n  }\n"]))),oe=y.a.div(jn||(jn=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  width: 30%;\n  justify-content: center;\n  margin: 1% 0 2.5% 0;\n\n  @media screen and (max-width: 800px) {\n    width: 60%;\n  }\n"]))),se=Object(y.a)(Gn.a)(hn||(hn=Object(k.a)(["\n  color: #003368;\n  font-size: 1.5rem;\n  width: 7%;\n"]))),ce=y.a.p(bn||(bn=Object(k.a)(["\n  color: rgba(0, 51, 104, 0.3);\n  font-style: italic;\n  font-size: 1.5rem;\n  user-select: none;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1rem;\n    width: 80%;\n    text-align: center;\n  }\n"]))),de=y.a.h1(pn||(pn=Object(k.a)(['\n  align-self: flex-end;\n  margin: 0 10%;\n  font-size: 2.5rem;\n  position: relative;\n  text-align: left;\n  padding: 1% 0;\n\n  &::after {\n    content: "";\n    width: 50%;\n    height: 10px;\n    background: linear-gradient(-90deg, ',", ","), ",";\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-radius: 10px;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n    padding: 3% 0;\n    font-weight: bold;\n    align-self: flex-start;\n\n    &::after {\n      height: 8px;\n      left: 0;\n      top: 0;\n    }\n  }\n"])),"#003368",Hn,Hn),le=[{name:"Nenad",stars:[1,2,3,4],review:"Ovo je test da li se cujemo kako treba!",color:"blue"},{name:"Bradi\u0107",stars:[1,2,3],review:"Ovo nije normalno",color:"red"},{name:"Danijel",stars:[1,2,3,4,5],review:"Nikad negus penal!",color:"blue"},{name:"Milo\u0161",stars:[1,2,3,4,5],review:"Ovo je test da li se cujemo kako treba!",color:"red"},{name:"Marko",stars:[1,2,3,4,5],review:"Svaka \u010dast",color:"red"},{name:"Uro\u0161",stars:[1,2,3,4,5],review:"Brate kakav je ovo sajt, \u0161ta je ovo",color:"red"},{name:"Mi-Jo",stars:[1,2,3,4],review:"\u017dili mi ruka, posetite poslovneautomobile.com",color:"red"}],je=function(){var n=Object(f.useState)(0),e=Object(v.a)(n,2),t=e[0],i=e[1],a=le.length;return Object(D.jsxs)(Qn,{children:[Object(D.jsx)(de,{children:"\u0160ta ka\u017eu o nama?"}),Object(D.jsx)(ie,{onClick:function(){i(0===t?a-1:t-1)}}),Object(D.jsx)(ae,{onClick:function(){i(t===a-1?0:t+1)}}),Object(D.jsx)(ne,{children:le.map((function(n,e){return Object(D.jsx)(ee,{active:e===t,children:t===e?Object(D.jsxs)(te,{color:n.color,children:[Object(D.jsx)(re,{children:n.name}),Object(D.jsx)(oe,{children:n.stars.map((function(n,e){return Object(D.jsx)(se,{},e)}))}),Object(D.jsxs)(ce,{children:["\u275d ",n.review," \u275e"]})]}):Object(D.jsx)(D.Fragment,{})},e)}))})]})},he=t(18),be="#FF1E00",pe=y.a.section(un||(un=Object(k.a)(["\n  display: flex;\n  height: 30vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),ue=y.a.h1(mn||(mn=Object(k.a)(['\n  align-self: flex-start;\n  margin: 0 10%;\n  font-size: 2.5rem;\n  position: relative;\n  text-align: left;\n  padding: 1% 0;\n\n  &::after {\n    content: "";\n    width: 50%;\n    height: 10px;\n    background: linear-gradient(-90deg, ',", ","), ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 10px;\n  }\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n    padding: 3% 0;\n    font-weight: bold;\n\n    &::after {\n      height: 8px;\n      left: 0;\n      top: 0;\n    }\n  }\n"])),"#003368",be,be),me=y.a.div(xn||(xn=Object(k.a)(["\n  width: 50%;\n  height: 30vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),xe=y.a.a(fn||(fn=Object(k.a)(["\n  margin: 0 0;\n  transition: 0.1s ease-in;\n  font-size: 6rem;\n  color: rgba(0, 51, 104, 0.5);\n\n  &:hover {\n    transform: scale(114%);\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 3rem;\n    margin: 0 8%;\n  }\n"]))),fe=Object(y.a)(he.a)(gn||(gn=Object(k.a)(["\n  cursor: pointer;\n"]))),ge=Object(y.a)(he.b)(On||(On=Object(k.a)(["\n  cursor: pointer;\n"]))),Oe=Object(y.a)(he.c)(wn||(wn=Object(k.a)(["\n  cursor: pointer;\n"]))),we=function(){return Object(D.jsxs)(pe,{children:[Object(D.jsx)(ue,{children:"Dru\u0161tvene mre\u017ee"}),Object(D.jsxs)(me,{children:[Object(D.jsx)(xe,{href:"https://facebook.com",target:"_blank",children:Object(D.jsx)(fe,{})}),Object(D.jsx)(xe,{href:"https://instagram.com",target:"_blank",children:Object(D.jsx)(ge,{})}),Object(D.jsx)(xe,{href:"https://youtube.com",target:"_blank",children:Object(D.jsx)(Oe,{})})]})]})},ve=y.a.section(vn||(vn=Object(k.a)(["\n  min-height: 25vh;\n  background: rgba(0, 51, 104, 1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n"]))),ke=y.a.p(kn||(kn=Object(k.a)(["\n  font-size: 1rem;\n  color: white;\n  text-align: center;\n  @media screen and (max-width: 800px) {\n    font-size: 0.8rem;\n  }\n"]))),ye=y.a.div(yn||(yn=Object(k.a)(["\n  display: flex;\n  width: 80%;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 0.5%;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    height: 50vh;\n  }\n"]))),ze=y.a.div(zn||(zn=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  height: 15vh;\n  color: white;\n  text-align: left;\n  font-weight: 300;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n    align-items: center;\n\n    h1 {\n      width: 90%;\n    }\n    div {\n      width: 90%;\n    }\n  }\n"]))),Me=y.a.div(Mn||(Mn=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  height: 15vh;\n  color: white;\n  text-align: left;\n  font-weight: 300;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n    align-items: center;\n    h1 {\n      width: 90%;\n    }\n    div {\n      width: 90%;\n    }\n  }\n"]))),Pe=function(){return Object(D.jsxs)(ve,{children:[Object(D.jsx)(ke,{children:"\xa9\ufe0f PRODAJEM KUPUJEM 2021 - Nenad Pe\u0161i\u0107"}),Object(D.jsxs)(ye,{children:[Object(D.jsxs)(Me,{children:[Object(D.jsx)("h1",{children:"Kontakt"}),Object(D.jsxs)("div",{children:["+381 61 669233, ",Object(D.jsx)("br",{}),"+381 11 321521,",Object(D.jsx)("br",{}),"Radno Vreme: 9-17h"]})]}),Object(D.jsxs)(ze,{children:[Object(D.jsx)("h1",{children:"Prona\u0111ite Nas"}),Object(D.jsxs)("div",{children:["Bezanijska 13, ",Object(D.jsx)("br",{}),"Beograd 11070,",Object(D.jsx)("br",{}),"Radno Vreme: 9-17h"]})]})]})]})},Ee="#003368",Ce="#FF1E00",Se=y.a.section(Pn||(Pn=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n"]))),Fe=y.a.h1(En||(En=Object(k.a)(['\n  align-self: flex-start;\n  color: black;\n  margin: 0 10%;\n  font-size: 2.5rem;\n  position: relative;\n  text-align: left;\n  padding: 1% 0;\n\n  &::after {\n    content: "";\n    width: 50%;\n    height: 10px;\n    background: linear-gradient(-90deg, ',", ","), ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 10px;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n    padding: 3% 0;\n    font-weight: bold;\n\n    &::after {\n      height: 8px;\n      left: 0;\n      top: 0;\n    }\n  }\n"])),Ee,Ce,Ce),Ke=y.a.p(Cn||(Cn=Object(k.a)(["\n  /* width: 90%; */\n  color: ",";\n  font-size: 2rem;\n  line-height: 2.3rem;\n  color: black;\n  font-weight: 300;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.2rem;\n    line-height: 1.4rem;\n    width: 70%;\n  }\n"])),Ee),Ne=y.a.h3(Sn||(Sn=Object(k.a)(['\n  font-size: 4rem;\n  position: relative;\n  height: 6rem;\n  width: 6rem;\n  z-index: 5;\n  text-align: center;\n\n  &::before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(-90deg, ',", ",');\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    z-index: 3;\n  }\n  &::after {\n    content: "','";\n    width: 80%;\n    height: 80%;\n    background: #f6f8f8;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    z-index: 3;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 2rem;\n    height: 3rem;\n    width: 3rem;\n  }\n'])),Ce,Ee,(function(n){return n.number})),Re=y.a.div(Fn||(Fn=Object(k.a)(["\n  display: flex;\n  width: 60%;\n  height: 15vh;\n\n  justify-content: space-evenly;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),Be=function(){return Object(D.jsxs)(Se,{children:[Object(D.jsx)(Fe,{children:"Kako do va\u0161eg oglasa?"}),Object(D.jsxs)(Re,{children:[Object(D.jsx)(Ke,{children:"Potrebno je da se registrujete besplatno na Prodajem Kupujem!"}),Object(D.jsx)(Ne,{number:"1"})]}),Object(D.jsxs)(Re,{children:[Object(D.jsx)(Ne,{number:"2"}),Object(D.jsx)(Ke,{children:"Nakon registracije, potrebno je potvrditi Va\u0161u email adresu!"})]}),Object(D.jsxs)(Re,{children:[Object(D.jsx)(Ke,{children:"Popunite podatke o stvari koju prodajete u formi ispod!"}),Object(D.jsx)(Ne,{number:"3"})]}),Object(D.jsxs)(Re,{children:[Object(D.jsx)(Ne,{number:"4"}),Object(D.jsx)(Ke,{children:"Klikom na dugme ispod Va\u0161 oglas je postavljen i \u010deka na kupca!"})]})]})},De="#003368",Le="#FF1E00",Te=y.a.h1(Kn||(Kn=Object(k.a)(["\n  align-self: ",';\n  color: black;\n  margin: 0 10%;\n  font-size: 2.5rem;\n  position: relative;\n  text-align: left;\n  padding: 1% 0;\n\n  &::after {\n    content: "";\n    width: 50%;\n    height: 10px;\n    background: linear-gradient(-90deg, ',", ","), ",";\n    position: absolute;\n    top: 0;\n    ",";\n    border-radius: 10px;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.5rem;\n    padding: 3% 0;\n    font-weight: bold;\n\n    &::after {\n      height: 8px;\n    }\n  }\n"])),(function(n){return n.left?"flex-start":"flex-end"}),De,Le,Le,(function(n){return n.left?"left: 0":"right: 0"})),Ae=y.a.section(Nn||(Nn=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n  min-height: 80vh;\n  padding-bottom: 5%;\n"]))),Ie=y.a.div(Rn||(Rn=Object(k.a)(["\n  width: 45%;\n  min-height: 50vh;\n  padding: 3% 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: ",";\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n    align-items: center;\n  }\n"])),(function(n){return n.left?"flex-start":"flex-end"})),Je=y.a.div(Bn||(Bn=Object(k.a)(["\n  width: 60%;\n  min-height: 50vh;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 4% 0;\n  flex-wrap: wrap;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),Ve=y.a.img(Dn||(Dn=Object(k.a)(["\n  width: 25%;\n\n  @media screen and (max-width: 800px) {\n    display: none;\n  }\n"]))),Ue=y.a.input(Ln||(Ln=Object(k.a)(["\n  width: 100%;\n  border: ",";\n  outline: none;\n  border-radius: 5px;\n  height: 4vh;\n  line-height: 4vh;\n  font-size: 1.1rem;\n  background: transparent;\n  margin: 5px 0 0 0;\n  transition: 0.1s ease-in;\n  padding: 3%;\n\n  &:focus {\n    border: 1px solid rgba(0, 51, 104, 1);\n  }\n"])),(function(n){return n.error?"1px solid ".concat(Le):"1px solid rgba(0, 51, 104, 0.2)"})),qe=y.a.span(Tn||(Tn=Object(k.a)(["\n  width: 50%;\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding-left: 1%;\n"]))),Ye=y.a.span(An||(An=Object(k.a)(["\n  width: 100%;\n  margin-top: 5px;\n  color: ",";\n  padding-left: 1%;\n  font-size: 0.8rem;\n  font-weight: bold;\n  display: ",";\n"])),Le,(function(n){return n.error?"block":"none"})),$e=y.a.div(In||(In=Object(k.a)(["\n  width: 60%;\n  min-height: 8vh;\n  margin: 1% 0;\n\n  @media screen and (max-width: 800px) {\n    width: 70%;\n  }\n"]))),_e=y.a.input(Jn||(Jn=Object(k.a)(["\n  width: 232px;\n  height: 52px;\n  background: #f6f8f8;\n  color: black;\n  font-weight: bold;\n  text-transform: uppercase;\n  outline: none;\n  border: 0;\n  cursor: pointer;\n  transition: 0.1s ease-in;\n  font-size: 1.6rem;\n\n  &:hover {\n    color: rgba(255, 255, 255, 0.9);\n    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),\n      linear-gradient(-90deg, ",", ",");\n  }\n  @media screen and (max-width: 800px) {\n    width: 184px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n"])),De,Le),We=y.a.div(Vn||(Vn=Object(k.a)(["\n  width: 240px;\n  height: 60px;\n  background: linear-gradient(-90deg, ",", ",");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    width: 192px;\n    height: 48px;\n  }\n"])),De,Le),Xe=t.p+"static/media/clipboard.bcf97d97.png",Ze=t.p+"static/media/envelope1.62e90dc5.png",Ge=t(17),He=t(23),Qe=function(n){var e=Object(f.useState)({name:"",email:"",password:"",password2:"",title:"",desc:"",price:""}),t=Object(v.a)(e,2),i=t[0],a=t[1],r=Object(f.useState)({}),o=Object(v.a)(r,2),s=o[0],c=o[1];return{handleChange:function(n){var e=n.target,t=e.name,r=e.value;a(Object(He.a)(Object(He.a)({},i),{},Object(Ge.a)({},t,r)))},values:i,handleSubmit:function(e){e.preventDefault(),c(n(i))},errors:s}},nt=function(n){var e={};return n.name.trim()||(e.name="Morate uneti ime!"),n.email.trim()?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n.email).toLowerCase())||(e.email="Adresa mora biti validna"):e.email="Morate uneti email!",n.password.trim()?/^(?=.*[0-9])(?=.*[a-z])([a-z0-9]{8})$/.test(String(n.password))||(e.password="\u0160ifra mora da sadr\u017ei: 8 karaktera i broj"):e.password="Morate uneti \u0161ifru",n.password2.trim()?n.password.trim()!==n.password2.trim()&&(e.password2="\u0160ifre moraju da se podudaraju!"):e.password2="Morate uneti \u0161ifru!",n.title.trim()||(e.title="Morate uneti ime oglasa!"),n.desc.trim()||(e.desc="Morate uneti opis oglasa!"),n.price.trim()?/^[0-9]*$/.test(n.price.trim())||(e.price="Cena mora biti broj"):e.price="Morate uneti cenu!",e},et=function(){var n=Qe(nt),e=n.handleChange,t=n.values,i=n.handleSubmit,a=n.errors;return Object(D.jsx)("form",{method:"POST",onSubmit:i,children:Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Te,{left:!1,children:"Registracija"}),Object(D.jsxs)(Je,{children:[Object(D.jsxs)(Ie,{left:!0,children:[Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"name",type:"text",placeholder:"Va\u0161e Ime",isError:""!==a.name&&a.name,errMsg:a.name}}),Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"email",type:"text",placeholder:"Email",isError:""!==a.email&&a.email,errMsg:a.email}}),Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"password",type:"password",placeholder:"Lozinka",isError:""!==a.password&&a.password,errMsg:a.password}}),Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"password2",type:"password",placeholder:"Ponovite Lozinku",isError:""!==a.password2&&a.password2,errMsg:a.password2}})]}),Object(D.jsx)(Ve,{src:Ze})]}),Object(D.jsx)(Te,{left:!0,children:"Informacije o oglasu"}),Object(D.jsxs)(Je,{children:[Object(D.jsx)(Ve,{src:Xe}),Object(D.jsxs)(Ie,{left:!1,children:[Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"title",type:"text",placeholder:"Naslov Oglasa",isError:""!==a.title&&a.title,errMsg:a.title}}),Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"desc",type:"text",placeholder:"Opis",isError:""!==a.desc&&a.desc,errMsg:a.desc}}),Object(D.jsx)(tt,{data:{handleChange:e,values:t,code:"price",type:"text",placeholder:"Cena",isError:""!==a.price&&a.price,errMsg:a.price}})]})]}),Object(D.jsx)(We,{children:Object(D.jsx)(_e,{type:"submit",value:"Postavi Oglas"})})]})})},tt=function(n){var e=n.data;return Object(D.jsxs)($e,{children:[Object(D.jsx)(qe,{children:e.placeholder}),Object(D.jsx)(Ue,{onChange:e.handleChange,value:e.values[e.code],id:e.code,name:e.code,type:e.type,error:e.isError}),Object(D.jsx)(Ye,{error:e.isError,children:e.errMsg})]})};function it(){return Object(D.jsx)("h2",{children:"About"})}var at=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(z.a,{children:[Object(D.jsx)(L,{}),Object(D.jsxs)(T.c,{children:[Object(D.jsx)(T.a,{path:"/about",children:Object(D.jsx)(it,{})}),Object(D.jsxs)(T.a,{path:"/create",children:[Object(D.jsx)(Be,{}),Object(D.jsx)(et,{})]}),Object(D.jsxs)(T.a,{path:"/",children:[Object(D.jsx)(Un,{}),Object(D.jsx)(Zn,{}),Object(D.jsx)(je,{}),Object(D.jsx)(we,{}),Object(D.jsx)(Pe,{})]})]})]})})},rt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};w.a.render(Object(D.jsx)(g.a.StrictMode,{children:Object(D.jsx)(at,{})}),document.getElementById("root")),rt()}},[[44,1,2]]]);
//# sourceMappingURL=main.23c199e9.chunk.js.map