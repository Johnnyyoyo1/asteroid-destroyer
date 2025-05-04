
if (typeof gdjs.evtsExt__sq__distance !== "undefined") {
  gdjs.evtsExt__sq__distance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__sq__distance = {};


gdjs.evtsExt__sq__distance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.sqrt(gdjs.evtsExt__sq__square.func(runtimeScene, eventsFunctionContext.getArgument("PointA_X") - eventsFunctionContext.getArgument("PointB_X"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtsExt__sq__square.func(runtimeScene, eventsFunctionContext.getArgument("PointA_Y") - eventsFunctionContext.getArgument("PointB_Y"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__sq__distance.func = function(runtimeScene, PointA_X, PointB_X, PointA_Y, PointB_Y, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("sq"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("sq"),
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
if (argName === "PointA_X") return PointA_X;
if (argName === "PointB_X") return PointB_X;
if (argName === "PointA_Y") return PointA_Y;
if (argName === "PointB_Y") return PointB_Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__sq__distance.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__sq__distance.registeredGdjsCallbacks = [];