import {createStoreAndActions} from "./index";

import "../style/index.css!";
import chatBoxTemplate from "../template/chatBox.text!";

export class ChatBoxElement extends HTMLElement {
	// Fires when an instance of the RecentMessagesElement is created
	createdCallback() {
		var [chatBoxStore, chatBoxActions] = createStoreAndActions();

		this.innerHTML = chatBoxTemplate;
		this.chatBoxStore = chatBoxStore;
		this.chatBoxActions = chatBoxActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		var sendButton = this.querySelector("button");
		this._chatBoxTextArea = this.querySelector("textarea");

		sendButton.addEventListener("click", () => this._sendMessage());
		this._chatBoxTextArea.addEventListener("keydown", (keyboardEvent) => this._chatBoxKeydownListener(keyboardEvent));

		this.chatBoxStore.addChangeListener(this.chatBoxStoreChanged, this);
		this.chatBoxStoreChanged();
	}

	// Fires when the instance is removed from the document
	detachedCallback() {}

	// Fires when an attribute is added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {}

	render() {
		this._chatBoxTextArea.value = this.props;
	}

	chatBoxStoreChanged() {
		this.props = this.chatBoxStore.getState();
		this.render();
	}

	_sendMessage() {
		this.chatBoxActions.sendMessage(this._chatBoxTextArea.value);
	}

	_chatBoxKeydownListener({key: key, keyIdentifier: keyId}) {
		if (key === "Enter" || keyId === "Enter") {
			this._sendMessage();
		}
	}
}