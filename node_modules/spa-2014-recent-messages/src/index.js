import {Dispatcher} from "flux-es6";

import RecentMessagesStore from "./RecentMessagesStore";
import RecentMessagesActions from "./RecentMessagesActions";

export function createStoreAndActions() {
    var recentMessagesDispatcher = new Dispatcher();
    var recentMessagesStore = new RecentMessagesStore();
    var recentMessagesActions = new RecentMessagesActions(recentMessagesDispatcher);
    
    recentMessagesDispatcher.register((payload) => recentMessagesStore.handleDispatcherAction(payload));

    return [recentMessagesStore, recentMessagesActions];
}

export {RecentMessagesElement} from "./RecentMessagesElement";