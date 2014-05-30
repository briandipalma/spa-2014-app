import {createStoreAndActions} from "./index";

import "../style/index.css!";
import recentMessagesTemplate from "../template/recentMessages.text!";

export class RecentMessagesElement extends HTMLElement {
	// Fires when an instance of the RecentMessagesElement is created
	createdCallback() {
		var [recentMessagesStore, recentMessagesActions] = createStoreAndActions();

		this.innerHTML = recentMessagesTemplate;
		this.recentMessagesStore = recentMessagesStore;
		this.recentMessagesActions = recentMessagesActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		this.recentMessagesList = this.querySelector("ul");
		this.addEventListener("click", (mouseEvent) => this._onRecentMessagesClicked(mouseEvent));

		this.recentMessagesStore.addChangeListener(this.recentMessagesStoreChanged, this);
		this.recentMessagesStoreChanged();
	}

	// Fires when the instance is removed from the document
	detachedCallback() {}

	// Fires when an attribute is added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {}

	render() {
		var documentFragment = document.createDocumentFragment();

		this.props.forEach((userState, userName) => {
			var messageLI = document.createElement('li');

			messageLI.textContent = userName;
			messageLI.className = userState.status + " " + userState.messageOutstanding;
			documentFragment.appendChild(messageLI);
		});

		this.recentMessagesList.innerHTML = "";
		this.recentMessagesList.appendChild(documentFragment);
	}

	recentMessagesStoreChanged() {
		this.props = this.recentMessagesStore.getState();
		this.render();
	}

	_onRecentMessagesClicked(mouseEvent) {
		if (mouseEvent.target.tagName === "LI") {
			this.recentMessagesActions.messageSelected(mouseEvent.target.textContent);
		}
	}
}