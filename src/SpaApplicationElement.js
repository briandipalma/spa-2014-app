import {createStoreAndActions} from "./index";

import "../style/index.css!";
import spaApplicationTemplate from "../template/spaApplication.text!";

export default class extends HTMLElement {
	// Fires when an instance of the SpaApplicationElement is created
	createdCallback() {
		var [spaApplicationStore, spaApplicationActions] = createStoreAndActions();

		this.innerHTML = spaApplicationTemplate;
		this.spaApplicationStore = spaApplicationStore;
		this.spaApplicationActions = spaApplicationActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		this.mainApplicationArea = this.querySelector("div.logged-out");

		this.spaApplicationStore.addChangeListener(this.spaApplicationStoreChanged, this);
		this.spaApplicationStoreChanged();
		this.spaApplicationActions.applicationLoaded(this);
	}

	// Fires when the instance is removed from the document
	detachedCallback() {}

	// Fires when an attribute is added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {}

	render() {
		this.mainApplicationArea.className = this.props.applicationStatus;
	}

	spaApplicationStoreChanged() {
		this.props = this.spaApplicationStore.getState();
		this.render();
	}
}