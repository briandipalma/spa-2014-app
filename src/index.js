import {HeaderElement} from "spa-2014-header";
import {RecentMessagesElement} from "spa-2014-recent-messages";

document.registerElement("spa2014-header", HeaderElement);
document.registerElement("spa2014-recent-messages", RecentMessagesElement);

export function insertApplicationElements() {
	document.body.innerHTML = "<spa2014-header></spa2014-header>\
								<spa2014-recent-messages></spa2014-recent-messages>";
}