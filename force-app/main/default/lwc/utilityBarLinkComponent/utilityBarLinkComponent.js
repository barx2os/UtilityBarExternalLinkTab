import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getUtilityBarLink from '@salesforce/apex/UtilityBarLinkController.getUtilityBarLink';

export default class UtilityBarLinkComponent extends NavigationMixin(LightningElement) {
    @track utilityBarLinks;

    connectedCallback() {
        // Fetch links from Apex
        getUtilityBarLink()
            .then((result) => {
                this.utilityBarLinks = result;
            })
            .catch((error) => {
                console.error('Error fetching links:', error);
            });
    }

    openLink(event) {
        const urlToPass = event.target.getAttribute('data-url');
        const openInConsole = event.target.getAttribute('data-opentab') === 'true';

        if (openInConsole) {
            // Dispatch event for Aura to handle console app logic
            const openTabEvent = new CustomEvent('opennewsubtab', {
                detail: { urlToPass },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(openTabEvent);
        } else {
            // Fallback to NavigationMixin for opening links
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: urlToPass
                }
            });
        }
    }
}
