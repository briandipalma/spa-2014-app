/** @module server/lib/server */

"use strict";

var staticServer,
    open = require("open"),
    http = require("http"),
    listen = require("in-a-storm"),
    program = require("commander"),
    nodeStatic = require("node-static"),
    serverOptions = {
    	headers: { "Cache-Control": "no-cache, must-revalidate" }
    };

/**
 * Request listener passed into node's http server.
 * 
 * @private
 * @param {http.ClientRequest} request - Client request.
 * @param {http.ServerResponse} response - Server response.
 */
function clientRequestHandler(request, response) {
	request.addListener("end", requestEndedListener).resume();
	
	function requestEndedListener() {
		staticServer.serve(request, response);
	}
}

/**
 * Called once the web server is bound to a port.
 * 
 * @private
 * @param {number} serverPort - Port web server is bound to.
 */
function webServerBoundToPort(serverPort) {
	staticServer = new nodeStatic.Server(".", serverOptions);

	var URI = "http://localhost:" + serverPort;

	console.info("Server available at", URI);
	
	open(URI);
}

/**
 * Called if binding to a port failed.
 * 
 * @private
 * @param {Object} error - An error that prevented port binding.
 */
function errorBindingWebServerToPort(error) {
	console.error(error);
}

/**
 * Function which allows a user to configure and launch a server.
 * 
 * @alias module:server/lib/server
 * @param {Array} serverArguments - Arguments used to configure server.
 */
function parseArgumentsAndLaunchServer(serverArguments) {
	program.
		version("0.0.0").
		option("-p, --port [port]", "Server port", process.env.PORT || 8080).
		parse(serverArguments);

	var webServer = http.createServer(clientRequestHandler);
	
	listen(webServer, program.port).
		then(webServerBoundToPort).
		catch(errorBindingWebServerToPort);
}

module.exports = parseArgumentsAndLaunchServer;
