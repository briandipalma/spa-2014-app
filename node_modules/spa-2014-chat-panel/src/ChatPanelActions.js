import ChatPanelConstants from './ChatPanelConstants';

export default class {
    constructor(chatPanelDispatcher) {
        this.chatPanelDispatcher = chatPanelDispatcher;
    }

    messageReceived(userName, messageData) {
        this.chatPanelDispatcher.handleServerAction({
            actionType: ChatPanelConstants.MESSAGE_RECEIVED,
			userName: userName,
            messageData: messageData
        });
    }

	messagesReceived(messages) {
		this.chatPanelDispatcher.handleServerAction({
			actionType: ChatPanelConstants.MESSAGES_RECEIVED,
			messages: messages
		});
	}

	recentConversationSelected(userName) {
		this.chatPanelDispatcher.handleViewAction({
			actionType: ChatPanelConstants.RECENT_CONVERSATION_SELECTED,
			userName: userName
		});
	}
};