import {HeaderConstants} from "./HeaderConstants";

export default class {
    constructor(headerDispatcher) {
        this.headerDispatcher = headerDispatcher;
    }

    loggedIn() {
        this.headerDispatcher.handleServerAction({
            actionType: HeaderConstants.LOGGED_IN
        });
    }

    login(username, password) {
        this.headerDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGING_IN,
            username: username,
            password: password
        });
    }

    loggedOut() {
        this.headerDispatcher.handleServerAction({
            actionType: HeaderConstants.LOGGED_OUT
        });
    }

    logout() {
        this.headerDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGING_OUT
        });
    }

    loginError() {
        this.headerDispatcher.handleServerAction({
            actionType: HeaderConstants.LOGIN_ERROR
        });
    }

    loginErrorCleared() {
        this.headerDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGIN_ERROR_CLEARED
        });
    }
};