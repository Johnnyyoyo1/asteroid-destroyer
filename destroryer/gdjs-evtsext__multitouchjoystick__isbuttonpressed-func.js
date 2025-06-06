
if (typeof gdjs.evtsExt__MultitouchJoystick__IsButtonPressed !== "undefined") {
  gdjs.evtsExt__MultitouchJoystick__IsButtonPressed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MultitouchJoystick__IsButtonPressed = {};


gdjs.evtsExt__MultitouchJoystick__IsButtonPressed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__MultitouchJoystick").getChild("Controllers").getChild(eventsFunctionContext.getArgument("ControllerIdentifier")).getChild("Buttons").getChild(eventsFunctionContext.getArgument("Button")).getChild("State")) == "Pressed";
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MultitouchJoystick__IsButtonPressed.func = function(runtimeScene, ControllerIdentifier, Button, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ControllerIdentifier") return ControllerIdentifier;
if (argName === "Button") return Button;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MultitouchJoystick__IsButtonPressed.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MultitouchJoystick__IsButtonPressed.registeredGdjsCallbacks = [];