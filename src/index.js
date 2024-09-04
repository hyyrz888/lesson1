console.log(1);

import index from "./components/index.esm.js";
import App from "./App.vue";
import "./theme/variables/light.less"; // 亮色主题
import "./theme/variables/dark.less"; // 暗色主题
import "./theme/variables/component.less";
import "./theme/iconfont.less";
import "@htfed/base-css";
import "./index.css";

console.log(index);

import { createApp } from "vue";

createApp(App).use(index).mount("#app");
