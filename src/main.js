// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import { Button, Select } from 'element-ui';
import BaiduMap from 'vue-baidu-map'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'K2Scr7HDs2hCXYRcnNplUurcMQmiUwXM'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
