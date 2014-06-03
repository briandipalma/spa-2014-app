import SpaApplicationConstants from './SpaApplicationConstants';

export default class {
    constructor(spaApplicationDispatcher) {
        this.spaApplicationDispatcher = spaApplicationDispatcher;
    }

	applicationLoaded(applicationElement) {
        this.spaApplicationDispatcher.handleViewAction({
            actionType: SpaApplicationConstants.APPLICATION_LOADED,
            applicationElement: applicationElement
        });
    }

    applicationStatusChanged(applicationStatus) {
        this.spaApplicationDispatcher.handleServerAction({
            actionType: SpaApplicationConstants.APPLICATION_STATUS_CHANGED,
            applicationStatus: applicationStatus
        });
    }
};