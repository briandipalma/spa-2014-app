import {Store} from 'flux-es6';
import {HeaderConstants} from 'spa-2014-header';
import {ChatBoxConstants} from 'spa-2014-chat-box';
import {RecentMessagesConstants} from 'spa-2014-recent-messages';

import SpaApplicationConstants from './SpaApplicationConstants';
import {CommunicationService} from './communication/CommunicationService';

var applicationState = {
	applicationStatus: "logged-out"
};

export default class extends Store {
    getState() {
        return applicationState;
    }

    handleAction(payload) {
        var action = payload.action;

        switch (action.actionType) {
			case SpaApplicationConstants.APPLICATION_LOADED:
				this._applicationLoaded(action.applicationElement);
                break;
			case HeaderConstants.LOGGED_IN:
				applicationState.applicationStatus = "";
                break;
			case HeaderConstants.LOGGING_IN:
				this._communicationService.initializeApplication(action.username, action.password);
				break;
			case HeaderConstants.LOGGED_OUT:
				applicationState.applicationStatus = "logged-out";
				break;
			case HeaderConstants.LOGGING_OUT:
				//TODO:
                break;
			case RecentMessagesConstants.MESSAGE_SELECTED:
				this._chatPanelActions.recentConversationSelected(action.userName);
                break;
			case ChatBoxConstants.SEND_MESSAGE:
				//TODO:
				break;
            default:
                return true;
        }

        this.emitChange();

        return true;
    }

	_applicationLoaded(applicationElement) {
		var chatPanel = applicationElement.querySelector('spa2014-chat-panel');
		var applicationHeader = applicationElement.querySelector('spa2014-header');
		var recentMessages = applicationElement.querySelector('spa2014-recent-messages');
		var headerDispatcher = applicationHeader.headerDispatcher;
		var spaApplicationActions = applicationElement.spaApplicationActions;
		var recentMessagesDispatcher = recentMessages.recentMessagesDispatcher;

		spaApplicationActions._chatPanelActions = chatPanel.chatPanelActions;
		spaApplicationActions._headerActions = applicationHeader.headerActions;
		spaApplicationActions._recentMessagesActions = recentMessages.recentMessagesActions;

		headerDispatcher.register((payload) => this.handleAction(payload));
		recentMessagesDispatcher.register((payload) => this.handleAction(payload));

		this._chatPanelActions = chatPanel.chatPanelActions;
		this._communicationService = new CommunicationService(spaApplicationActions);
	}
}