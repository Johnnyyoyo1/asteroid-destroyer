
if (typeof gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way !== "undefined") {
  gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way = {};


gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MultitouchJoystick__JoystickForce.func(runtimeScene, eventsFunctionContext.getArgument("ControllerIdentifier"), eventsFunctionContext.getArgument("JoystickIdentifier"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > gdjs.evtsExt__MultitouchJoystick__DeadZone.func(runtimeScene, eventsFunctionContext.getArgument("ControllerIdentifier"), eventsFunctionContext.getArgument("JoystickIdentifier"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MultitouchJoystick__Angle8WayDirection.func(runtimeScene, gdjs.evtsExt__MultitouchJoystick__JoystickAngle.func(runtimeScene, eventsFunctionContext.getArgument("ControllerIdentifier"), eventsFunctionContext.getArgument("JoystickIdentifier"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getArgument("Direction"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way.func = function(runtimeScene, ControllerIdentifier, JoystickIdentifier, Direction, parentEventsFunctionContext) {
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
if (argName === "JoystickIdentifier") return JoystickIdentifier;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MultitouchJoystick__DirectionPushed8Way.registeredGdjsCallbacks = [];