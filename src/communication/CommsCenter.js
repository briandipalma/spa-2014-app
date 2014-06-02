import co from "co";

export function loginAndInitializeApplication(userName, password) {
	co(function *(){
		var packageJson = yield get("package.json");

		console.log(packageJson);
	})();
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