/** Custom Element Imports */
import "@material/mwc-drawer";
import "@material/mwc-top-app-bar-fixed";

import "../elements/jma-page";
import "../elements/jma-hero";

/** Other JS Imports */

/** CSS Imports */
import "../../styles/common.css";


/** Page Code */

/** Get Elements  */
let hero = document.getElementById("hero");
let page = document.getElementById("page");



customElements.whenDefined("jma-page").then(() => {
    /** Set hero's scroll container */
    console.log(page.shadowRoot.querySelector("#appContent"))
	hero.scrollTarget = page.shadowRoot.querySelector("#appContent");

});


