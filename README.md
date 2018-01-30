# Platform Event Buttons

Sometimes it's useful during demos to have an easy, pre-configured, persistent, and off-screen way to send platform events.

This is the component that does that.

For example, you're rocking the orchestration view of Salesforce IoT on screen, showcasing your awesome props, and sending events according to the storyline from the Salesforce app while no-one is looking.

Up to 8 action buttons can be defined, each with a separate payload.

An Indication appears next to the button when the event is successfully submitted.

## Installation
Deploy this package to your org, or create the components manually.

## Configuration
1. Go to the Lightning App builder and open the Platform Events Buttons page.
2. Configure the properties for your use-case (Specify the event name, configure one or more actions). Use the tooltips for assistance. It helps to put the actions in a logical sequence for your story.
3. Activate the page (Top right of the App Builder: Activation)
4. Go to mobile navigation under Setup > Apps > Mobile Apps > Salesforce > Salesforce Navigation and add Platform Events Buttons to your Salesforce app navigation, preferably somewhere near the top.
5. To change the actions, or the events sent per action, go back to the Lightning Page Builder and edit the properties of the component.

## Usage
From your mobile phone, hit the right buttons to execute the flow of your demo.

## License
Please see LICENSE.txt.
This is not an official or endorsed tool.
