import {Store} from 'flux-es6';

import ChatBoxConstants from './ChatBoxConstants';

export default class extends Store {
    getState() {
        return "";
    }

    handleDispatcherAction(payload) {
        this.emitChange();

        return true;
    }
}