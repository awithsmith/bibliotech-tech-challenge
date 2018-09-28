/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';

/* Extend the base PolymerElement class */
class MyNewView extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
    <div class="card">
           <iron-image src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
         </div>
      `;
    }
  }

/* Register the new element with the browser */
window.customElements.define('my-new-view', MyNewView);
