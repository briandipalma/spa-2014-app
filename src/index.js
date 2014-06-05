import {Dispatcher} from "flux-es6";
import {HeaderElement} from "spa-2014-header";
import {ChatBoxElement} from "spa-2014-chat-box";
import {ChatPanelElement} from "spa-2014-chat-panel";
import {RecentMessagesElement} from "spa-2014-recent-messages";

import SpaApplicationStore from "./SpaApplicationStore";
import SpaApplicationActions from "./SpaApplicationActions";
import SpaApplicationElement from "./SpaApplicationElement";

export function registerApplicationElements() {
	document.registerElement("spa2014-header", HeaderElement);
	document.registerElement("spa2014-chat-box", ChatBoxElement);
	document.registerElement("spa-2014-chat-panel", ChatPanelElement);
	document.registerElement("spa2014-recent-messages", RecentMessagesElement);
	document.registerElement("spa-2014-app", SpaApplicationElement);
}

export function createStoreAndActions() {
	var spaApplicationDispatcher = new Dispatcher();
	var spaApplicationStore = new SpaApplicationStore();
	var spaApplicationActions = new SpaApplicationActions(spaApplicationDispatcher);

	spaApplicationDispatcher.register((payload) => spaApplicationStore.handleDispatcherAction(payload));

	return [spaApplicationStore, spaApplicationActions];
}