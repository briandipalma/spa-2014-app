import SpaApplicationConstants from './SpaApplicationConstants';

export default class {
    constructor(spaApplicationDispatcher) {
        this.spaApplicationDispatcher = spaApplicationDispatcher;
    }

	applicationLoaded(applicationElement) {
        this.spaApplicationDispatcher.handleViewAction({
            actionType: SpaApplicationConstants.APPLICATION_LOADED,
            applicationElement: applicationElement
        });
    }

	loggedIn() {
		this._headerActions.loggedIn();
	}

	loginError() {
		this._headerActions.loginError();
	}

	recentMessagesListArrived(recentMessagesState) {
		this._recentMessagesActions.messageListArrived(recentMessagesState);
	}
};