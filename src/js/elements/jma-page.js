import {
    LitElement, html, customElement, property, css
  } from 'lit-element';

import "@material/mwc-top-app-bar-fixed";
import "@material/mwc-drawer";
import "@material/mwc-button";
import "@material/mwc-icon-button";
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

  export class JMAPage extends LitElement {

    static get styles() {
        return css`

          :host {
            z-index: 3;
            width: 100%;
          }
            mwc-list-item.drawer-link {
                border-bottom-right-radius: 25px;
                border-top-right-radius: 25px;
            }
            #masthead-title {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            [slot="appContent"] {
                height: 100%;
                overflow: auto;
            }

            mwc-button {
                --mdc-theme-primary: var(--mdc-theme-on-primary);

            }
            a {
                text-decoration: none;
            }
            a:visited {
                color: inherit;
              }
            a:link {
                color: inherit;
            }
                    
        `;
      }

    constructor() {
      super();
      

    }

  
    /**
     * Create an observed property. Triggers update on change.
     */
    static get properties() {
        return { 
          /*state: { type: String },
          flagSrc: {type: String}*/
        };
      }
  
    /**
     * Implement `render` to define a template for your element.
     */
    render(){

      return html`
        <mwc-drawer hasHeader type="modal" id="mwc-drawer">
            <span slot="title">John McKnitt Alexander</span>
            <span slot="subtitle">NSDAR - Houston, TX</span>
            <!-- Add links under here For the side drawer-->
            <mwc-list>
                <!--Home-->
                <a href="./"><mwc-list-item class="drawer-link">Home</mwc-list-item></a>
                <a href="./articletest.html"><mwc-list-item class="drawer-link">Article Test</mwc-list-item></a>
            </mwc-list>
            

            <div id="appContent" slot="appContent">
                <mwc-top-app-bar-fixed>
                    <mwc-icon-button class="drawer-icon" id="open-drawer" slot="navigationIcon" icon="menu"></mwc-icon-button>

                    <div id="masthead-title" slot="title">John McKnitt Alexander, NSDAR</div>

                    <a href="./" slot="actionItems"><mwc-button class="drawer-link" label="Home"></mwc-button></a>
                    <a href="./articletest.html" slot="actionItems"><mwc-button class="drawer-link" label="Article Test"></mwc-button></a>
                </mwc-top-app-bar-fixed>
                <slot></slot>

            </div>

        </mwc-drawer>
     
      `;
    }
  }

  customElements.define('jma-page', JMAPage);

