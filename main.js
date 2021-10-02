function getComponentEventList(componentId, event, componentTypeFromGenericBlock) {
    const componentIdOrTypeToEventCode = {
      '3cd636c4-9f8c-46d9-afe5-b36c110e120c' : {'Click' : () => [async function(component) {

await (new Promise((setStateResolve) => {
this.setState(function(prevState, props) {
const nextState = this.spreadCopy(prevState);

  ( function(){
    const setterValue = String((parseFloat((this.getProp("6cd3e801-216b-46d0-a741-c885d2ff8b2f", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("09ee4322-1f4c-4624-a3dc-39e7adf32299", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("5a712a37-99d1-4f69-97f9-6395482f124b", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("9450c030-235c-4178-bd04-44e1f8904cd1", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("0a2db5ec-785a-433c-8f65-4444acb74420", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("8872bcb9-cba3-4f7f-9549-2130850dbbf6", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("deb579fe-9c91-46ad-8db7-89a7101c0a6c", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat(parseFloat((this.getProp("48f17427-cf48-404e-9db3-16070161a159", "Text", typeof nextState === "undefined" ? this.state : nextState)))  +  parseFloat((this.getProp("f5ab1118-9900-495c-8034-611fbceee962", "Text", typeof nextState === "undefined" ? this.state : nextState))))))))))));
    const componentNameOrId = "ddd77722-b8bf-4288-afe6-dbce6bdc9498";
    this.setCustomProp(componentNameOrId, "Text", setterValue, function(e,t){var n;if(e&&e.split){for(var a=e.split(/(\\{1,}n)/g),r=0;r<a.length;r++)"\\n"==a[r]&&(a[r]="\n"),a[r].match(/\\{2,}n/g)&&(a[r]=a[r].substr(1));n=a.join("")}else n=e;t.properties=Object.assign({},t.properties,{Text:e,children:n})}, nextState);

  }).call(this);

return nextState;
}, setStateResolve);
}));

}.bind(this)]}
    }

    let eventListFunctionFromGeneric = [];
    if (componentIdOrTypeToEventCode[componentTypeFromGenericBlock] &&
        componentIdOrTypeToEventCode[componentTypeFromGenericBlock][event]) {
      eventListFunctionFromGeneric = componentIdOrTypeToEventCode[componentTypeFromGenericBlock][event]();
    }

    let eventListFunctionFromSpecific = [];
    if (componentIdOrTypeToEventCode[componentId] &&
      componentIdOrTypeToEventCode[componentId][event]) {
    eventListFunctionFromSpecific = componentIdOrTypeToEventCode[componentId][event]();
  }

    return eventListFunctionFromSpecific.concat(eventListFunctionFromGeneric);
}



function convertUndefinedToEmptyString(value) { return (value === undefined ? "" : value); }


(function() {
const componentId = "3cd636c4-9f8c-46d9-afe5-b36c110e120c";

const componentIdToSet = (typeof moduleComponentId !== 'undefined' && typeof moduleTypeId !== 'undefined' && false)
  ? moduleComponentId : "3cd636c4-9f8c-46d9-afe5-b36c110e120c";

this.setPropDirectly(componentIdToSet, 'Click',
async function() {
await Promise.all((getComponentEventList.call(this, componentId, 'Click', 'Button')).map(
  eventFxn => new Promise (eventFxn.bind(this, componentId, ))))
}.bind(this), state);

}).call(this);
