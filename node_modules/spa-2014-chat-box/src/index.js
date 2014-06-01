import {Dispatcher} from "flux-es6";

import ChatBoxStore from "./ChatBoxStore";
import ChatBoxActions from "./ChatBoxActions";

export function createStoreAndActions() {
    var chatBoxDispatcher = new Dispatcher();
    var chatBoxStore = new ChatBoxStore();
    var chatBoxActions = new ChatBoxActions(chatBoxDispatcher);

    chatBoxDispatcher.register((payload) => chatBoxStore.handleDispatcherAction(payload));

    return [chatBoxStore, chatBoxActions];
}

export {ChatBoxElement} from "./ChatBoxElement";