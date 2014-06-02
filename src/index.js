import {HeaderElement} from "spa-2014-header";
import {ChatBoxElement} from "spa-2014-chat-box";
import {ChatPanelElement} from "spa-2014-chat-panel";
import {RecentMessagesElement} from "spa-2014-recent-messages";

import {SpaApplicationElement} from "./SpaApplicationElement";

document.registerElement("spa2014-header", HeaderElement);
document.registerElement("spa2014-chat-box", ChatBoxElement);
document.registerElement("spa-2014-app", SpaApplicationElement);
document.registerElement("spa-2014-chat-panel", ChatPanelElement);
document.registerElement("spa2014-recent-messages", RecentMessagesElement);

export function insertApplicationElements() {
}