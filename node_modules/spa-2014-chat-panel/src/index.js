import {Dispatcher} from "flux-es6";

import ChatPanelStore from "./ChatPanelStore";
import ChatPanelActions from "./ChatPanelActions";

export function createStoreAndActions() {
    var chatPanelDispatcher = new Dispatcher();
    var chatPanelStore = new ChatPanelStore();
    var chatPanelActions = new ChatPanelActions(chatPanelDispatcher);

    chatPanelDispatcher.register((payload) => chatPanelStore.handleDispatcherAction(payload));

    return [chatPanelStore, chatPanelActions];
}

export {ChatPanelElement} from "./ChatPanelElement";