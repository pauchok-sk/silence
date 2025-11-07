import "../scss/style.scss";
import brone from "./files/brone.js";
import burger from "./files/burger.js";
import burgerTabs from "./files/burgerTabs.js";
import formBarScroll from "./files/formBarScroll.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import scrollables from "./files/scrollalbes.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
burger();
burgerTabs();
sliders();
headerScroll();
formBarScroll();
brone();
map();
inputmask();
scrollables();

AOS.init();
Fancybox.bind("[data-fancybox]", {});
// Fancybox.show([{type: "inline", src: "#modal-brone"}])
