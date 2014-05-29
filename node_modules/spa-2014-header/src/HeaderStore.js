import Emitr from "emitr";

import HeaderConstants from "./HeaderConstants";

var CHANGE_EVENT = 'change';

var headerState = {
    loginState: "logged-out",
    loginErrorState: "no-error"
};

function setHeaderState(loginState, loginErrorState) {
    headerState.loginState = loginState;
    headerState.loginErrorState = loginErrorState;
}

export default class extends Emitr {
    getState() {
        return headerState;
    }

    handleDispatcherAction(payload) {
        var action = payload.action;

        switch (action.actionType) {
            case HeaderConstants.LOGGED_IN:
                setHeaderState("logged-in", "no-error");
                break;
            case HeaderConstants.LOGGING_IN:
                setHeaderState("logging-in", "no-error");
                break;
            case HeaderConstants.LOGGED_OUT:
                setHeaderState("logged-out", "no-error");
                break;
            case HeaderConstants.LOGGING_OUT:
                setHeaderState("logging-out", "no-error");
                break;
            case HeaderConstants.LOGIN_ERROR:
                setHeaderState("logged-out", "error");
                break;
            case HeaderConstants.LOGIN_ERROR_CLEARED:
                headerState.loginErrorState = "no-error";
                break;
            default:
                return true;
        }

        this.emitChange();

        return true;
    }

    emitChange() {
        this.trigger(CHANGE_EVENT);
    }

    /**
     * @param {function} callback
     */
    addChangeListener(callback, context) {
        this.on(CHANGE_EVENT, callback, context);
    }

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}