import co from "co";

export function loginAndInitializeApplication(userName, password) {
	co(loadApplicationData)();
}

function *loadApplicationData() {
	var loginJson = yield get("data/login-user-pass.json");

	if (loginJson === "true") {
		var contactsJson = yield get("data/contacts-user.json");
		var recentMessages = yield get("data/recent-messages-user.json");

		console.log(contactsJson);
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

	xhr.open("GET", url);
	xhr.send();

	return promise;
}

//Communication at start up involves getting login permission.
//Getting a list of contacts given a username and their status.
//Getting a list of recent messages.

export class CommunicationService {
	constructor(applicationActions) {
		this.applicationActions = applicationActions;
	}

	initializeApplication() {
		co(this.loadApplicationData)();
	}

	*loadApplicationData() {
		var loginJson = yield get("data/login-user-pass.json");

		if (loginJson === "true") {
			var contactsJson = yield get("data/contacts-user.json");
			var recentMessages = yield get("data/recent-messages-user.json");

			console.log(contactsJson);
		}
	}
}