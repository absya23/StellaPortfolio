import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { Icon } from "@iconify/vue";
import AOS from "aos";
import CountUp from "vue-countup-v3";
import "aos/dist/aos.css";
AOS.init({
	duration: 1000,
});
createApp(App)
	.component("Icon", Icon)
	.component("CountUp", CountUp)
	.mount("#app");
