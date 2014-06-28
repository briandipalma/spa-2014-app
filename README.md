# spa-2014-app

Topic - Workflow
---------------------

http://slides.com/kybernetikos/pacman#/

Workshop - Integrate with other Custom Elements.
-------------------------------------------------

After completing the first part of the workshop

	https://github.com/briandipalma/spa-2014-communicator

and the second

	https://github.com/briandipalma/spa-2014-contacts-list

we can move onto integrating the custom elemen package we have worked on into an application.

To start

	git clone https://github.com/briandipalma/spa-2014-app

1. Open `src/index.js` and `template/spaApplication.text`

	All the application Custom Elements are imported and registered in this module.
	The application template is in the `template/spaApplication.text` file.

2. Serve the package

	All these packages can be served by a static server rooted at the package directory.
	One is included in the package and can be launched with the command.

	```bash
	$ npm run serve
	```

	The included server will serve the package at `http://127.0.0.1:8080`

3. Log in

	Navigating to `http://127.0.0.1:8080` will present you with a simple login form.
	Entering any username and password will work to login.
	Investigating the DOM will show the Custom Elements registered in `src/index.js`.

	The application will show an old version of the `spa2014-contacts-list`.

4. Integrate the latest version

	We will use the `npm` package manager to link to the latest version of the `spa2014-contacts-list` package.
	Open a cmd window, navigate to your `spa2014-contacts-list` package and enter `npm link`.

	In windows the next step needs to be run as administrator.

	Open a cmd window navigate in the `spa-2014-app` directory and run `npm link spa-2014-contacts-list`.

	Reloading the application will show the latest `spa2014-contacts-list` package.

A more normal workflow would have linked the two package together during development and once development was finished
a new version of `spa2014-contacts-list` would have been released.
For the purposes of the workshop though we wanted to focus on a Custom Element package on its own.
