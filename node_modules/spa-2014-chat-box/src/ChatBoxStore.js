import {Store} from 'flux-es6';

export default class extends Store {
    getState() {
        return '';
    }

    handleAction() {
        this.emitChange();

        return true;
    }
}