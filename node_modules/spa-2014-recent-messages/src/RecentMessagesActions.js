import {RecentMessagesConstants} from './RecentMessagesConstants';

export default class {
    constructor(recentMessagesDispatcher) {
        this.recentMessagesDispatcher = recentMessagesDispatcher;
    }

    messageArrived(userName) {
        this.recentMessagesDispatcher.handleServerAction({
            actionType: RecentMessagesConstants.MESSAGE_ARRIVED,
            userName: userName
        });
    }

    messageSelected(userName) {
        this.recentMessagesDispatcher.handleViewAction({
            actionType: RecentMessagesConstants.MESSAGE_SELECTED,
            userName: userName
        });
    }

    userStatusChanged(userName, status) {
        this.recentMessagesDispatcher.handleServerAction({
            actionType: RecentMessagesConstants.USER_STATUS_CHANGED,
            userName: userName,
            status: status
        });
    }

    messageListArrived(messagesState) {
        this.recentMessagesDispatcher.handleServerAction({
            actionType: RecentMessagesConstants.MESSAGE_LIST_ARRIVED,
            messagesState: messagesState
        });
    }
};