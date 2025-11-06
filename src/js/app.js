import "../scss/style.scss";
import brone from "./files/brone.js";
import burger from "./files/burger.js";
import burgerTabs from "./files/burgerTabs.js";
import formBarScroll from "./files/formBarScroll.js";
import headerScroll from "./files/headerScroll.js";
import map from "./files/map.js";
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

Fancybox.bind("[data-fancybox]", {});
