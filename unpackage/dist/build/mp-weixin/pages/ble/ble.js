(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ble/ble"],{"25d4":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},"48be":function(e,n,t){"use strict";var o=t("ff4e"),a=t.n(o);a.a},5148:function(e,n,t){"use strict";t.r(n);var o=t("25d4"),a=t("da76");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("48be");var l=t("2877"),c=Object(l["a"])(a["default"],o["a"],o["b"],!1,null,"e2fced08",null);n["default"]=c.exports},c8db:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("2630"),a={data:function(){return{bleData:[],bleIndex:[],modalName:"",available:!1,discovering:!1}},mounted:function(){var e=this;(0,o.getisLogin)(),e.initBle(),setInterval(function(){setTimeout(function(){e.available||e.initBle()},0)},2e3)},methods:{hideModal:function(){this.modalName=""},ab2hex:function(e){var n=Array.prototype.map.call(new Uint8Array(e),function(e){return("00"+e.toString(16)).slice(-2)});return n.join("")},getBleState:function(){var n=this;e.onBluetoothAdapterStateChange(function(e){n.available=e.available,n.discovering=e.discovering,console.log("蓝牙是否可用："+e.available),console.log("蓝牙是否搜索："+e.discovering),n.available?n.modalName="":n.modalName="isOpenBle"})},initBle:function(){var n=this,t=1;e.openBluetoothAdapter({success:function(o){console.log(o),"openBluetoothAdapter:ok"==o.errMsg&&(console.log("************************初始化蓝牙成功************************"),n.getBleState(),e.startBluetoothDevicesDiscovery({services:[],success:function(o){console.log("************************开始搜寻旧蓝牙************************"),e.getBluetoothDevices({success:function(e){console.log(e),e.devices[0]&&console.log(n.ab2hex(e.devices[0].advertisData))}}),console.log("************************开始搜寻新蓝牙************************"),e.onBluetoothDeviceFound(function(e){console.log("************************新蓝牙 "+t+"************************"),t++;var o=e.devices[0];-1==n.bleIndex.indexOf(o.deviceId)&&(""==o.name?(n.bleData.push({name:o.deviceId,id:o.deviceId,tag:!1}),n.bleIndex.push(o.deviceId)):(n.bleData.push({name:o.name,id:o.deviceId,tag:!0}),n.bleIndex.push(o.deviceId)))})}}))},fail:function(e){(e.errCode="10001")&&(n.modalName="isOpenBle")}})}}};n.default=a}).call(this,t("543d")["default"])},da76:function(e,n,t){"use strict";t.r(n);var o=t("c8db"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},ff4e:function(e,n,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ble/ble-create-component',
    {
        'pages/ble/ble-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5148"))
        })
    },
    [['pages/ble/ble-create-component']]
]);                
