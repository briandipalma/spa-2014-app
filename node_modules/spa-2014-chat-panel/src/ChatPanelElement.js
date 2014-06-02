import {createStoreAndActions} from "./index";

import "../style/index.css!";

export class ChatBoxElement extends HTMLElement {
	// Fires when an instance of the RecentMessagesElement is created
	createdCallback() {
		var [chatBoxStore, chatBoxActions] = createStoreAndActions();

		this.chatBoxStore = chatBoxStore;
		this.chatBoxActions = chatBoxActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		this.chatBoxStore.addChangeListener(this.chatBoxStoreChanged, this);
		this.chatBoxStoreChanged();
	}

	// Fires when the instance is removed from the document
	detachedCallback() {}

	// Fires when an attribute is added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {}

	render() {
		var documentFragment = document.createDocumentFragment();

		this.props.forEach((messageData) => {
			var messageDiv = document.createElement('div');
			var messageSpan = document.createElement('span');
			var userNameSpan = document.createElement('span');

			userNameSpan.textContent = messageData.userName;
			messageSpan.textContent = messageData.messageText;
			messageDiv.appendChild(userNameSpan);
			messageDiv.appendChild(messageSpan);

			documentFragment.appendChild(messageDiv);
		});

		this.innerHTML = "";
		this.appendChild(documentFragment);
	}

	chatBoxStoreChanged() {
		this.props = this.chatBoxStore.getState();
		this.render();
	}
}