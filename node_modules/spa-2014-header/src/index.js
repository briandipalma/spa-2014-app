import {Dispatcher} from "flux-es6";

import HeaderStore from "./HeaderStore";
import HeaderActions from "./HeaderActions";

export function createStoreAndActions() {
    var headerStore = new HeaderStore();
    var headerDispatcher = new Dispatcher();
    var headerActions = new HeaderActions(headerDispatcher);
    
    headerDispatcher.register((payload) => headerStore.handleDispatcherAction(payload));

    return [headerStore, headerActions];
}

export {HeaderElement} from "./HeaderElement";