(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{287:function(t,o,e){var content=e(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(109).default)("7e6e2e46",content,!0,{sourceMap:!1})},302:function(t,o,e){"use strict";var r=e(2),n=e(4),c=e(38),d=e(25),f=e(31),l=e(194),h=e(13),x=e(3),m=e(193),$=e(135),v=e(303),k=e(304),C=e(79),_=e(305),w=[],A=n(w.sort),y=n(w.push),S=x((function(){w.sort(void 0)})),z=x((function(){w.sort(null)})),M=$("sort"),B=!x((function(){if(C)return C<70;if(!(v&&v>3)){if(k)return!0;if(_)return _<603;var code,t,o,e,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(e=0;e<47;e++)w.push({k:t+e,v:o})}for(w.sort((function(a,b){return b.v-a.v})),e=0;e<w.length;e++)t=w[e].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:S||!z||!M||!B},{sort:function(t){void 0!==t&&c(t);var o=d(this);if(B)return void 0===t?A(o):A(o,t);var e,r,n=[],x=f(o);for(r=0;r<x;r++)r in o&&y(n,o[r]);for(m(n,function(t){return function(o,e){return void 0===e?-1:void 0===o?1:void 0!==t?+t(o,e)||0:h(o)>h(e)?1:-1}}(t)),e=n.length,r=0;r<e;)o[r]=n[r++];for(;r<x;)l(o,r++);return o}})},303:function(t,o,e){var r=e(63).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},304:function(t,o,e){var r=e(63);t.exports=/MSIE|Trident/.test(r)},305:function(t,o,e){var r=e(63).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},306:function(t,o,e){"use strict";e(287)},307:function(t,o,e){var r=e(108)((function(i){return i[1]}));r.push([t.i,".box[data-v-7535d08d]{box-shadow:3px 3px 8px 1px rgba(0,0,0,.502)}",""]),r.locals={},t.exports=r},310:function(t,o,e){"use strict";e.r(o);e(302);var r={name:"CardAdmin",data:function(){return{produtos:[],rota:this.$route.path}},props:{botao:String},created:function(){var t=this;this.$nuxt.$on("Todos",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("Pizzas",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC&filter=pizza").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("Sobremesas",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC&filter=sobremesa").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("Lanches",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&filter=x-").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("Acais",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&filter=a%C3%A7ai").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("Bebidas",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&filter=bebida").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("filtroBaixo",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&max=25&min=5").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("filtroMedio",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&max=45&min=26").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("filtroAlto",(function(){t.$axios.$get("https://tegra-food-skyot.herokuapp.com/products?page=1&max=1000&min=46").then((function(o){t.produtos=o.data}))})),this.$nuxt.$on("organizar",(function(){t.produtos.sort((function(a,b){return a.title<b.title?-1:a.title>b.title?1:0}))}))},methods:{mostrarAlert:function(){$nuxt.$emit("mensagemCarrinho")}}},n=(e(306),e(46)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",t._l(t.produtos,(function(o){return e("div",{key:o.id,staticClass:"h-32 mt-2 border-[0.25px] border-[#000000de] border-solid rounded-lg flex items-center justify-around box"},[e("img",{staticClass:"w-1/5 mr-2 ml-3 lg:mr-5 lg:ml-3",attrs:{src:o.image,alt:"imagem de comida"}}),t._v(" "),e("div",{staticClass:"w-full p-3"},[e("h3",{staticClass:"font-bold text-[#223263] text-base md:text-lg lg:text-2xl text-shadow"},[t._v(t._s(o.title))]),t._v(" "),e("p",{staticClass:"font-medium text-[#00000080] text-sm md:text-base "},[t._v("("+t._s(o.description)+")")])]),t._v(" "),e("div",{staticClass:"w-2/5 lg:w-1/4 pr-3"},[e("p",{staticClass:"font-bold text-lg md:text-xl pb-1 text-[#223263] text-center"},[t._v("R$ "+t._s(o.price))]),t._v(" "),e("button",{staticClass:"box w-full h-10 lg:h-12 bg-[#DC9000] rounded text-white md:font-bold",on:{click:function(o){return t.mostrarAlert()}}},[t._v(t._s(t.botao)+"\n            ")])])])})),0)}),[],!1,null,"7535d08d",null);o.default=component.exports}}]);