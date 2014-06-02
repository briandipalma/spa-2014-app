import {Store} from 'flux-es6';

import SpaApplicationConstants from './SpaApplicationConstants';

var applicationState = {
	applicationStatus: ""
};

export default class extends Store {
    getState() {
        return applicationState;
    }

    handleDispatcherAction(payload) {
        var action = payload.action;

        switch (action.actionType) {
            case SpaApplicationConstants.APPLICATION_STATUS_CHANGED:
                applicationState.applicationStatus = action.applicationStatus;
                break;
            default:
                return true;
        }

        this.emitChange();

        return true;
    }
}