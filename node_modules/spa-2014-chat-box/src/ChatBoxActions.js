import {ChatBoxConstants} from './ChatBoxConstants';

export default class {
    constructor(chatBoxDispatcher) {
        this.chatBoxDispatcher = chatBoxDispatcher;
    }

    sendMessage(messageText) {
        this.chatBoxDispatcher.handleViewAction({
            actionType: ChatBoxConstants.SEND_MESSAGE,
            messageText: messageText
        });
    }
};