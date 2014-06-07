import {createStoreAndActions} from "flux-es6";

import SpaApplicationStore from "./SpaApplicationStore";
import SpaApplicationActions from "./SpaApplicationActions";

import "../style/index.css!";
import spaApplicationTemplate from "../template/spaApplication.text!";

export default class extends HTMLElement {
	// Fires when an instance of the SpaApplicationElement is created
	createdCallback() {
		var [spaApplicationStore, spaApplicationActions] = createStoreAndActions(SpaApplicationStore, SpaApplicationActions);

		this.innerHTML = spaApplicationTemplate;
		this.spaApplicationStore = spaApplicationStore;
		this.spaApplicationActions = spaApplicationActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		this.mainApplicationArea = this.querySelector("div.logged-out");

		this.spaApplicationStore.addChangeListenerAndNotify(this.spaApplicationStoreChanged, this);

		window.setTimeout(() => this.spaApplicationActions.applicationLoaded(this), 120);
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