import {createStoreAndActions} from 'flux-es6';

import ChatBoxStore from './ChatBoxStore';
import ChatBoxActions from './ChatBoxActions';

import chatBoxTemplate from '../template/chatBox.text!';

export class ChatBoxElement extends HTMLElement {
	// Fires when an instance of the ChatBoxElement is created
	createdCallback() {
		var [chatBoxStore, chatBoxActions] = createStoreAndActions(ChatBoxStore, ChatBoxActions);

		this.innerHTML = chatBoxTemplate;
		this.chatBoxStore = chatBoxStore;
		this.chatBoxActions = chatBoxActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		var sendButton = this.querySelector("button");
		sendButton.addEventListener("click", () => this._sendMessage());

		this._chatBoxTextArea = this.querySelector("textarea");
		this._chatBoxTextArea.addEventListener("keydown", (keyboardEvent) => this._chatBoxKeydownListener(keyboardEvent));

		this.chatBoxStore.addChangeListenerAndNotify(this.chatBoxStoreChanged, this);
	}

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
		if (key === 'Enter' || keyId === 'Enter') {
			this._sendMessage();
		}
	}
}