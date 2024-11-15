# UtilityBarExternalLinkTab

## Overview
The **UtilityBarExternalLinkTab** project enhances Salesforce's utility bar by introducing a tab for external links. It uses Aura components, LWC, and custom metadata to provide a flexible and dynamic solution for users to access external resources directly from Salesforce.

---

## Key Features
- 📌 **Custom Metadata**: Configure links dynamically without hardcoding.
- ⚡ **Aura and LWC Integration**: Reusable components for seamless utility bar functionality.
- 🌐 **Visualforce Support**: Backward compatibility with Salesforce Classic.

---

## Components
1. **Aura Components**
   - `External_Links_Wrapper.cmp`: Renders external links dynamically.
   - Supporting files: `Controller`, `Renderer`, and metadata XML.

2. **LWC**
   - `utilityBarLinkComponent`: A Lightning Web Component for improved styling and interactivity.

3. **Visualforce Page**
   - `ExternalLinkWrapperVF.page`: Provides fallback support for external links.

4. **Custom Metadata**
   - Configure external links with labels, URLs, and additional options.

---

## How It Works
1. **Custom Metadata Setup**:
   - Admins create external link records using custom metadata types.
2. **Dynamic Rendering**:
   - Components fetch and display links dynamically based on metadata.
3. **Utility Bar Integration**:
   - Add the components to the utility bar for easy access.

---

## Screenshots
Here’s a preview of the Utility Bar in action:

### **1. Utility Bar with External Links**
![Utility Bar Preview](force-app/screenshots/utility-bar-preview.png)

### **2. Metadata Configuration Example**
![Metadata Configuration](force-app/screenshots/metadata-configuration.png)

---

## Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/barx2os/UtilityBarExternalLinkTab.git
