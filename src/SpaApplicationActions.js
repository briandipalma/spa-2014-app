import SpaApplicationConstants from './SpaApplicationConstants';

export default class {
    constructor(spaApplicationDispatcher) {
        this.spaApplicationDispatcher = spaApplicationDispatcher;
    }

    applicationStatusChanged(applicationStatus) {
        this.spaApplicationDispatcher.handleServerAction({
            actionType: SpaApplicationConstants.APPLICATION_STATUS_CHANGED,
            applicationStatus: applicationStatus
        });
    }
};