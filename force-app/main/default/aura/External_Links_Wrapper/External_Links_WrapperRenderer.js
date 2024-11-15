({
    afterRender: function (component, helper) {
        this.superAfterRender();

        // Attach event listener to the LWC component
        const lwcUtilityBarComp = component.find('lwcUtilityBarComp');
        if (lwcUtilityBarComp) {
            const domNode = lwcUtilityBarComp.getElement();
            if (domNode) {
                domNode.addEventListener('opennewsubtab', function (evt) {
                    const urlToPass = evt.detail.urlToPass;
                    const workspaceAPI = component.find('workspace');

                    if (workspaceAPI && urlToPass) {
                        workspaceAPI.openTab({
                            url: `/apex/ExternalLinkWrapperVF?url=${encodeURIComponent(urlToPass)}`,
                            focus: true
                        })
                        .then((response) => {
                            console.log('Tab opened with ID:', response);
                        })
                        .catch((error) => {
                            console.error('Error opening tab:', error);
                        });
                    } else {
                        console.warn('Workspace API not available or invalid URL.');
                    }
                });
            } else {
                console.error('DOM Node is null. Ensure LWC component is rendered.');
            }
        }
    }
});
