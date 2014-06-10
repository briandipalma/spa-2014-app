import {createStoreAndActions} from 'flux-es6';

import RecentMessagesStore from './RecentMessagesStore';
import RecentMessagesActions from './RecentMessagesActions';

import recentMessagesTemplate from '../template/recentMessages.text!';

export class RecentMessagesElement extends HTMLElement {
	// Fires when an instance of the RecentMessagesElement is created
	createdCallback() {
		var [store, actions] = createStoreAndActions(RecentMessagesStore, RecentMessagesActions);

		this.innerHTML = recentMessagesTemplate;
		this.recentMessagesStore = store;
		this.recentMessagesActions = actions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		this.recentMessagesList = this.querySelector('ul');
		this.addEventListener('click', (mouseEvent) => this._onRecentMessagesClicked(mouseEvent));

		this.recentMessagesStore.addChangeListenerAndNotify(this.recentMessagesStoreChanged, this);
	}

	get recentMessagesDispatcher() {
		return this.recentMessagesActions.recentMessagesDispatcher;
	}

	render() {
		var documentFragment = document.createDocumentFragment();

		this.props.forEach((userState, userName) => {
			var messageLI = document.createElement('li');

			messageLI.textContent = userName;
			messageLI.className = userState.status + ' ' + userState.messageOutstanding;
			documentFragment.appendChild(messageLI);
		});

		this.recentMessagesList.innerHTML = '';
		this.recentMessagesList.appendChild(documentFragment);
	}

	recentMessagesStoreChanged() {
		this.props = this.recentMessagesStore.getState();
		this.render();
	}

	_onRecentMessagesClicked(mouseEvent) {
		if (mouseEvent.target.tagName === 'LI') {
			this.recentMessagesActions.messageSelected(mouseEvent.target.textContent);
		}
	}
}