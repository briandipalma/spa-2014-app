import {createStoreAndActions} from 'flux-es6';

import ChatPanelStore from './ChatPanelStore';
import ChatPanelActions from './ChatPanelActions';

export class ChatPanelElement extends HTMLElement {
	// Fires when an instance of the ChatPanelElement is created
	createdCallback() {
		var [chatPanelStore, chatPanelActions] = createStoreAndActions(ChatPanelStore, ChatPanelActions);

		this.chatPanelStore = chatPanelStore;
		this.chatPanelActions = chatPanelActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		this.chatPanelStore.addChangeListenerAndNotify(this.chatPanelStoreChanged, this);
	}

	render() {
		var documentFragment = document.createDocumentFragment();

		this.props.forEach((messageData) => {
			var messageDiv = document.createElement('div');
			var message = document.createElement('div');
			var userName = document.createElement('div');

			userName.textContent = messageData.userName;
			message.textContent = messageData.messageText;
			messageDiv.appendChild(userName);
			messageDiv.appendChild(message);

			documentFragment.appendChild(messageDiv);
		});

		this.innerHTML = '';
		this.appendChild(documentFragment);
	}

	chatPanelStoreChanged() {
		this.props = this.chatPanelStore.getState();
		this.render();
	}
}