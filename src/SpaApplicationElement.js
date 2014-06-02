import "../style/index.css!";
import spaApplicationTemplate from "../template/spaApplication.text!";

export class SpaApplicationElement extends HTMLElement {
	// Fires when an instance of the SpaApplicationElement is created
	createdCallback() {
		this.innerHTML = spaApplicationTemplate;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {}

	// Fires when the instance is removed from the document
	detachedCallback() {}

	// Fires when an attribute is added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {}
}