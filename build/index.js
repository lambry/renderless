!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e){e.exports=JSON.parse('{"number":{"type":"number","default":10},"columns":{"type":"number","default":1},"type":{"type":"string","default":"post"},"taxonomy":{"type":"string","default":""},"term":{"type":"array","default":[],"items":{"type":"number"}},"order":{"type":"string","default":"ID"},"meta":{"type":"string","default":""},"sort":{"type":"string","default":"ASC"}}')},function(e,t,n){var r=n(16),o=n(17),a=n(6),i=n(18);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(5);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){var r=n(13),o=n(14),a=n(6),i=n(15);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,n){var r=n(5);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(7),a=n(1),i=n(8),u=n.n(i),c=n(4),l=n.n(c),s=n(9),f=n(10),p=n.n(f),b=n(11),m=n(2),d=[{value:"ID",label:Object(r.__)("ID","postie")},{value:"date",label:Object(r.__)("Publish Date","postie")},{value:"modified",label:Object(r.__)("Modified Date","postie")},{value:"title",label:Object(r.__)("Title","postie")},{value:"name",label:Object(r.__)("Slug","postie")},{value:"menu_order",label:Object(r.__)("Menu Order","postie")},{value:"rand",label:Object(r.__)("Random","postie")},{value:"meta",label:Object(r.__)("Custom Field","postie")}],y=[{value:"ASC",label:Object(r.__)("Ascending","postie")},{value:"DESC",label:Object(r.__)("Descending","postie")}],v=n(12),O=n.n(v);function j(e){return O()({path:"/postie/".concat(e)})}function _(e){return new URLSearchParams(e).toString()}var g=n(3);Object(o.registerBlockType)("lambry/postie",{icon:function(){return Object(a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M11,4 L4,4 L4,20 L11,20 L11,10 L4,10 L4,8 L11,8 L11,4 Z M13,4 L13,14 L20,14 L20,16 L13,16 L13,20 L20,20 L20,4 L13,4 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"}))},title:Object(r.__)("Postie","postie"),description:Object(r.__)("Posts, pages and custom types.","postie"),attributes:g,category:"widgets",supports:{align:!0,html:!1},edit:function(e){var t=e.attributes,n=e.setAttributes,o=t.number,i=t.columns,c=t.type,f=t.taxonomy,v=t.term,O=t.order,h=t.meta,x=t.sort,S=Object(s.useSelect)((function(e){return e("core").getPostTypes()}))||[],C=Object(a.useState)([]),w=l()(C,2),E=w[0],L=w[1],P=Object(a.useState)([]),A=l()(P,2),T=A[0],M=A[1],I=Object(a.useState)([]),D=l()(I,2),B=D[0],F=D[1];return Object(a.useEffect)((function(){c&&j("taxonomies/".concat(c)).then(L),f&&j("terms/".concat(f)).then(M),"meta"===O&&j("meta/?".concat(_(t))).then(F)}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)(b.InspectorControls,null,Object(a.createElement)(m.PanelBody,{title:Object(r.__)("Display","postie")},Object(a.createElement)(m.RangeControl,{min:1,max:100,label:Object(r.__)("Number","postie"),value:o,onChange:function(e){return n({number:e})}}),Object(a.createElement)(m.RangeControl,{min:1,max:6,label:Object(r.__)("Columns","postie"),value:i,onChange:function(e){return n({columns:e})}})),Object(a.createElement)(m.PanelBody,{title:Object(r.__)("Source","postie")},Object(a.createElement)(m.SelectControl,{label:Object(r.__)("Post Type","postie"),value:c,options:S.map((function(e){return{label:e.name,value:e.slug}})),onChange:function(e){return function(e){n({type:e,term:g.term.default,taxonomy:g.taxonomy.default}),j("taxonomies/".concat(e)).then(L)}(e)}}),c&&!!E.length&&Object(a.createElement)(m.SelectControl,{label:Object(r.__)("Taxonomy","postie"),value:f,options:[{label:Object(r.__)("Select taxonomy","postie"),value:""}].concat(u()(E)),onChange:function(e){return function(e){if(n({taxonomy:e,term:g.term.default}),!e)return M([]);j("terms/".concat(e)).then(M)}(e)}}),f&&!!T.length&&Object(a.createElement)(m.FormTokenField,{label:Object(r.__)("Terms","postie"),value:v.map((function(e){var t;return{id:e,value:null===(t=T.find((function(t){return t.id===e})))||void 0===t?void 0:t.value}})),suggestions:T.map((function(e){return e.value})),onChange:function(e){return function(e){return n({term:e.map((function(e){var t;return null===(t=T.find((function(t){var n=t.id;return t.value===e||n===e.id})))||void 0===t?void 0:t.id}))})}(e)}})),Object(a.createElement)(m.PanelBody,{title:Object(r.__)("Order","postie")},Object(a.createElement)(m.SelectControl,{label:Object(r.__)("Order By","postie"),value:O,options:d,onChange:function(e){return function(e){n({order:e}),"meta"===e?j("meta/?".concat(_(t))).then(F):n({meta:g.meta.default})}(e)}}),"meta"===O&&Object(a.createElement)(m.SelectControl,{label:Object(r.__)("Select Field","postie"),value:h,options:B,onChange:function(e){return n({meta:e})}}),"rand"!==O&&Object(a.createElement)(m.SelectControl,{label:Object(r.__)("Sort Order","postie"),value:x,options:y,onChange:function(e){return n({sort:e})}}))),Object(a.createElement)(p.a,{block:"lambry/postie",attributes:t}))},save:function(){return null}})}]);