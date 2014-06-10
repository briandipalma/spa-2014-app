import {Store} from 'flux-es6';

import ChatPanelConstants from './ChatPanelConstants';

var messages = new Map();
var messagesFromSelectedConversation = [];

export default class extends Store {
    getState() {
        return messagesFromSelectedConversation;
    }

    handleAction(payload) {
		var action = payload.action;

		switch (action.actionType) {
            case ChatPanelConstants.MESSAGE_RECEIVED:
				messages.get(action.userName).push(action.messageData);
                break;
            case ChatPanelConstants.MESSAGES_RECEIVED:
                messages = action.messages;
                break;
            case ChatPanelConstants.RECENT_CONVERSATION_SELECTED:
				messagesFromSelectedConversation = messages.get(action.userName);
                break;
            default:
                return true;
        }

        this.emitChange();

        return true;
    }
}