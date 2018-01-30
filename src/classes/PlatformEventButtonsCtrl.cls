public class PlatformEventButtonsCtrl {
    
    @AuraEnabled
    public static Boolean checkEvent(String eventName) {
        Boolean result = System.Schema.getGlobalDescribe().containsKey(eventName.toLowerCase());
        return result;
    }
    
    @AuraEnabled
    public static void publishEvent(sObject eventValue) {
     	System.debug('Publishing Event:' + eventValue);
       	Database.SaveResult result = EventBus.publish(eventValue);
        
        if (!result.isSuccess()) {
            for (Database.Error error : result.getErrors()) {
                System.debug('Error returned: ' +  error.getStatusCode() +' - '+  error.getMessage());
                throw new AuraHandledException('Error creating event: ' + error.getMessage());
            }
        }
        else {
            System.debug('OK :)');
        }
        
    }
}