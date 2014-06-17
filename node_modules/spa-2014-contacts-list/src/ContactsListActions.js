import {ContactsListConstants} from "./ContactsListConstants";

export default class {
	constructor(contactsListDispatcher) {
		this.contactsListDispatcher = contactsListDispatcher;
	}

	contactSelected(contact) {
		this.contactsListDispatcher.handleViewAction({
			actionType: ContactsListConstants.CONTACT_SELECTED,
			contact: contact
		});
	}

	contactStatusChanged(contact, status) {
		this.contactsListDispatcher.handleServerAction({
			actionType: ContactsListConstants.CONTACT_STATUS_CHANGED,
			contact: contact,
			status: status
		});
	}

	contactsListReceived(contacts) {
		this.contactsListDispatcher.handleServerAction({
			actionType: ContactsListConstants.CONTACTS_LIST_RECEIVED,
			contacts: contacts
		});
	}
};