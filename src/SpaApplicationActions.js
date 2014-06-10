import SpaApplicationConstants from './SpaApplicationConstants';

export default class {
	constructor(spaApplicationDispatcher) {
		this.spaApplicationDispatcher = spaApplicationDispatcher;
	}

	/**
	 * Application actions.
	 */

	applicationLoaded(applicationElement) {
		this.spaApplicationDispatcher.handleViewAction({
			actionType: SpaApplicationConstants.APPLICATION_LOADED,
			applicationElement: applicationElement
		});
	}

	/**
	 * Header actions.
	 */

	loggedIn() {
		this._headerActions.loggedIn();
	}

	loggedOut() {
		this._headerActions.loggedOut();
	}

	loginError() {
		this._headerActions.loginError();
	}

	/**
	 * Recent messages actions.
	 */

	messageArrived(userName) {
		this._recentMessagesActions.messageArrived(userName);
	}

	userStatusChanged(userName, status) {
		this._recentMessagesActions.messageArrived(userName, status);
	}

	recentMessagesListArrived(recentMessagesState) {
		this._recentMessagesActions.messageListArrived(recentMessagesState);
	}

	/**
	 * Chat panel actions.
	 */

	messageReceived(userName, messageData) {
		this._chatPanelActions.messageReceived(userName, messageData);
	}

	messagesReceived(messages) {
		this._chatPanelActions.messagesReceived(messages);
	}
};