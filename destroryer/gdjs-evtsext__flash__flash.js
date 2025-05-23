
gdjs.evtsExt__Flash__Flash = gdjs.evtsExt__Flash__Flash || {};

/**
 * Behavior generated from Flash visibility (blink)
 */
gdjs.evtsExt__Flash__Flash.Flash = class Flash extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Flash__Flash.Flash.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HalfPeriodTime = behaviorData.HalfPeriodTime !== undefined ? behaviorData.HalfPeriodTime : Number("0.1") || 0;
    this._behaviorData.IsFlashing = false;
    this._behaviorData.FlashDuration = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HalfPeriodTime !== newBehaviorData.HalfPeriodTime)
      this._behaviorData.HalfPeriodTime = newBehaviorData.HalfPeriodTime;
    if (oldBehaviorData.IsFlashing !== newBehaviorData.IsFlashing)
      this._behaviorData.IsFlashing = newBehaviorData.IsFlashing;
    if (oldBehaviorData.FlashDuration !== newBehaviorData.FlashDuration)
      this._behaviorData.FlashDuration = newBehaviorData.FlashDuration;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    HalfPeriodTime: this._behaviorData.HalfPeriodTime,
    IsFlashing: this._behaviorData.IsFlashing,
    FlashDuration: this._behaviorData.FlashDuration,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.HalfPeriodTime !== undefined)
      this._behaviorData.HalfPeriodTime = networkSyncData.props.HalfPeriodTime;
    if (networkSyncData.props.IsFlashing !== undefined)
      this._behaviorData.IsFlashing = networkSyncData.props.IsFlashing;
    if (networkSyncData.props.FlashDuration !== undefined)
      this._behaviorData.FlashDuration = networkSyncData.props.FlashDuration;
  }

  // Properties:
  
  _getHalfPeriodTime() {
    return this._behaviorData.HalfPeriodTime !== undefined ? this._behaviorData.HalfPeriodTime : Number("0.1") || 0;
  }
  _setHalfPeriodTime(newValue) {
    this._behaviorData.HalfPeriodTime = newValue;
  }
  _getIsFlashing() {
    return this._behaviorData.IsFlashing !== undefined ? this._behaviorData.IsFlashing : false;
  }
  _setIsFlashing(newValue) {
    this._behaviorData.IsFlashing = newValue;
  }
  _toggleIsFlashing() {
    this._setIsFlashing(!this._getIsFlashing());
  }
  _getFlashDuration() {
    return this._behaviorData.FlashDuration !== undefined ? this._behaviorData.FlashDuration : Number("0") || 0;
  }
  _setFlashDuration(newValue) {
    this._behaviorData.FlashDuration = newValue;
  }
}

/**
 * Shared data generated from Flash visibility (blink)
 */
gdjs.evtsExt__Flash__Flash.Flash.SharedData = class FlashSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Flash__Flash.Flash.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Flash_FlashSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Flash_FlashSharedData = new gdjs.evtsExt__Flash__Flash.Flash.SharedData(
      initialData
    );
  }
  return instanceContainer._Flash_FlashSharedData;
}

// Methods:
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595Flash_9546Flash_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Visibility_Timer") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2 */
{gdjs.evtsExt__Flash__ToggleVisibility.func(runtimeScene, gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595Flash_9546Flash_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("Flash_Visibility_Timer");
}
}}

}


};gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Visibility_Duration_Timer") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595Flash_9546Flash_9546prototype_9546FlashContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1});
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1 */
{gdjs.evtsExt__Flash__ToggleVisibility.func(runtimeScene, gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595Flash_9546Flash_9546prototype_9546FlashContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Visibility_Timer");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Visibility_Duration_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFlashDuration(eventsFunctionContext.getArgument("FlashDuration"));
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.Flash = function(FlashDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
if (argName === "FlashDuration") return FlashDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Visibility_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Visibility_Duration_Timer");
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.Stop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime(); }}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTime = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHalfPeriodTime(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTime = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Flash::Flash", gdjs.evtsExt__Flash__Flash.Flash);
