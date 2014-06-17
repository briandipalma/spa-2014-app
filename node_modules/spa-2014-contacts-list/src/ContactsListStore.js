import {Store} from 'flux-es6';

import {ContactsListConstants} from './ContactsListConstants';

var contacts = new Map([
	["guybedford", {"status": "online", "imageSource": "https://avatars0.githubusercontent.com/u/598730?s=140"}],
	["arv", {"status": "online", "imageSource": "https://avatars3.githubusercontent.com/u/45845?s=140"}],
	["kybernetikos", {"status": "offline", "imageSource": "https://avatars3.githubusercontent.com/u/430980?s=140"}]
]);

export default class extends Store {
	getState() {
		return contacts;
	}

	handleAction(payload) {
		var action = payload.action;

		switch (action.actionType) {
			case ContactsListConstants.CONTACT_STATUS_CHANGED:
				var contact = action.contact;
				contacts.get(contact).status = action.status;
				break;
			case ContactsListConstants.CONTACTS_LIST_RECEIVED:
				contacts = action.contacts;
				break;
			default:
				return true;
		}

		this.emitChange();

		return true;
	}
}