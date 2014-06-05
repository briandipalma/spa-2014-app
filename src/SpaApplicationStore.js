import {Store} from 'flux-es6';
import {HeaderConstants} from 'spa-2014-header';

import SpaApplicationConstants from './SpaApplicationConstants';
import {CommunicationService} from './communication/CommunicationService';

var applicationState = {
	applicationStatus: "offline"
};

export default class extends Store {
    getState() {
        return applicationState;
    }

    handleDispatcherAction(payload) {
        var action = payload.action;

        switch (action.actionType) {
			case SpaApplicationConstants.APPLICATION_LOADED:
				this._applicationLoaded(action.applicationElement);
                break;
			case HeaderConstants.LOGGING_IN:
				this._communicationService.initializeApplication(action.username, action.password);
				break;
			case HeaderConstants.LOGGED_IN:
				applicationState.applicationStatus = "";
                break;
            default:
                return true;
        }

        this.emitChange();

        return true;
    }

	_applicationLoaded(applicationElement) {
		var applicationHeader = applicationElement.querySelector('spa2014-header');
		var recentMessages = applicationElement.querySelector('spa2014-recent-messages');
		var headerDispatcher = applicationHeader.headerDispatcher;
		var spaApplicationActions = applicationElement.spaApplicationActions;

		spaApplicationActions._headerActions = applicationHeader.headerActions;
		spaApplicationActions._recentMessagesActions = recentMessages.recentMessagesActions;

		headerDispatcher.register((payload) => this.handleDispatcherAction(payload));

		this._communicationService = new CommunicationService(spaApplicationActions);
	}
}