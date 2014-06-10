import co from 'co';

//Communication at start up involves getting login permission.
//Getting a list of contacts given a username and their status.
//Getting a list of recent messages.

export class CommunicationService {
	constructor(applicationActions) {
		this.applicationActions = applicationActions;
	}

	initializeApplication(username, password) {
		co(this.loadApplicationData(username, password))();
	}

	*loadApplicationData(username, password) {
		var loginJson = yield get('data/login-user-pass.json');

		if (loginJson === 'true') {
			this.applicationActions.loggedIn();

			var contactsJson = yield get('data/contacts-user.json');

			var chatMessagesJson = yield get('data/chat-messages.json');
			var chatMessages = new Map(JSON.parse(chatMessagesJson));

			this.applicationActions.messagesReceived(chatMessages);

			var recentMessages = yield get('data/recent-messages-user.json');
			var recentMessagesState = new Map(JSON.parse(recentMessages));

			this.applicationActions.recentMessagesListArrived(recentMessagesState);
		} else {
			this.applicationActions.loginError();
		}
	}
}

function get(url) {
	var xhr = new XMLHttpRequest();
	var promise = new Promise((resolve, reject) => {
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				resolve(xhr.response);
			}
		}
	});

	xhr.open('GET', url);
	xhr.send();

	return promise;
}