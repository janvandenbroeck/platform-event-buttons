({
	displayToast : function(component, type, message) {
    	$A.createComponents([
                ["ui:message", {"title":"Error", "severity":type}],
                ["ui:outputText", {"value":message}]
                ],
                function(components, status, errorMessage){
                    if (status === "SUCCESS") {
                        var message = components[0];
                        var outputText = components[1];
                        // set the body of the ui:message to be the ui:outputText
                        message.set("v.body", outputText);
                        var div1 = component.find("msg");
                        div1.set("v.body", message);
                    }
                    else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.")
                    }
                    else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                    }
                });
    }
})