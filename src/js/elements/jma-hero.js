import {
    LitElement, html, customElement, property, css
  } from 'lit-element';

import simpleParallax from 'simple-parallax-js';


  export class JMAHero extends LitElement {

    static get styles() {
        return css`

          :host {

            width: 100%;
            height: 40vh;
          }
          #hero {
              width: 100%;
              height: 40vh; 
              object-fit: cover;
          }
          
                    
        `;
      }

    constructor() {
      super(); 
      

    }

    //handle changed properties
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            if(propName === "scrollTarget") {
                this.buildParalax();
            }
        });
    }

    //on ready
    firstUpdated(changedProperties) {
        this.buildParalax();
    }

    buildParalax() {
        
        if(this.heroParalax) {
            this.heroParalax.destroy();
        }
        let image = this.shadowRoot.querySelector("#hero");
        this.heroParalax = new simpleParallax(image);
        
        if(this.scrollTarget) {
            this.heroParalax.customContainer = this.scrollTarget;
        }
        
    }

  
    /**
     * Create an observed property. Triggers update on change.
     */
    static get properties() {
        return { 
          src: {
              type: String,
              
            },
            scrollTarget: {
                type: Object, 
            }
        };
      }
  
    /**
     * Implement `render` to define a template for your element.
     */
    render(){

      return html`
        <img id="hero" src="${this.src}"/>
     
      `;
    }
  }

  customElements.define('jma-hero', JMAHero);

