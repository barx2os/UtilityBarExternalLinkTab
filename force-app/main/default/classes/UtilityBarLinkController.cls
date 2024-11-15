public with sharing class UtilityBarLinkController {
    
    @AuraEnabled
    public static List<Utility_Bar_Link__mdt> getUtilityBarLink(){
        try {
            return [SELECT MasterLabel, Active_Link__c, Link_URL__c, Open_In_Console_Tab__c, Order__c 
                    FROM Utility_Bar_Link__mdt WHERE Active_Link__c = TRUE ORDER BY Order__c ASC];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}