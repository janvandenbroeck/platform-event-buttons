({
	doInit : function(component, event, helper) {
        var eventName = component.get("v.eventName");
		if(!eventName.includes("__e")) {
            helper.displayToast(component, "error", "event name (" + eventName + ")  should be the API name (including '__e')");
            return;
        }
        var action = component.get("c.checkEvent");
        
        action.setParams({eventName: eventName});
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                if (!response.getReturnValue()){
                    helper.displayToast(component, "error", "event name (" + eventName + ")  could not be found");
            		return;
                }
            }
            else if (response.getState() === "ERROR") {
				helper.displayToast(component, "error", "event name (" + eventName + ")  could not be found");
                var errors = response.getError();
	            if (errors && errors[0] && errors[0].message) {
               		console.log("Error message: " + errors[0].message); 
                }
            }
        });
        $A.enqueueAction(action);
        
        
	},
    sendEvent : function(component, event, helper) {
  		var eventName = component.get("v.eventName");
        var actionnr = event.getSource().getLocalId().substring(6);
        
       	var eventContent = component.get('v.action'+ actionnr + '_event');
        try {
    		var event_obj = JSON.parse(eventContent);
        	event_obj.sobjectType = eventName;
        	eventContent = JSON.stringify(event_obj);
		}
		catch(err) {
    		helper.displayToast(component, "error", "Could not parse JSON of the event for action " + actionnr);
		}
        console.log(eventContent);
        
        var action = component.get("c.publishEvent");
        action.setParams({eventValue: eventContent});
        
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") { 
                component.set('v.action' + actionnr + '_OK', 'true'); 
            }
            else if (response.getState() === "ERROR") {
                component.set('v.action' + actionnr + '_OK', 'false');
                var errors = response.getError();
	            if (errors && errors[0] && errors[0].message) {
               		console.log("Error message: " + errors[0].message); 
                }
            }
        });
        $A.enqueueAction(action);

    },
    resetStatus : function(component, event, helper) {
    	component.set("v.action1_OK", " ");
    	component.set("v.action2_OK", " ");
    	component.set("v.action3_OK", " ");
    	component.set("v.action4_OK", " ");
    	component.set("v.action5_OK", " ");
    	component.set("v.action6_OK", " ");
    	component.set("v.action7_OK", " ");
    	component.set("v.action8_OK", " ");
        var div1 = component.find("msg");
        div1.set("v.body", '');
    }
    
    
})