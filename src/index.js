import {HeaderElement} from 'spa-2014-header';
import {ChatBoxElement} from 'spa-2014-chat-box';
import {ChatPanelElement} from 'spa-2014-chat-panel';
import {ContactsListElement} from 'spa-2014-contacts-list';
import {RecentMessagesElement} from 'spa-2014-recent-messages';

import SpaApplicationElement from './SpaApplicationElement';

export function registerApplicationElements() {
	document.registerElement('spa2014-header', HeaderElement);
	document.registerElement('spa2014-chat-box', ChatBoxElement);
	document.registerElement('spa2014-chat-panel', ChatPanelElement);
	document.registerElement('spa2014-contacts-list', ContactsListElement);
	document.registerElement('spa2014-recent-messages', RecentMessagesElement);
	document.registerElement('spa2014-app', SpaApplicationElement);
}