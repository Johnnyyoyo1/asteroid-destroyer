gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDlogoObjects1= [];
gdjs.startCode.GDlogoObjects2= [];
gdjs.startCode.GDlogoObjects3= [];
gdjs.startCode.GDlogoObjects4= [];
gdjs.startCode.GDlogoObjects5= [];
gdjs.startCode.GDstarObjects1= [];
gdjs.startCode.GDstarObjects2= [];
gdjs.startCode.GDstarObjects3= [];
gdjs.startCode.GDstarObjects4= [];
gdjs.startCode.GDstarObjects5= [];
gdjs.startCode.GDstartObjects1= [];
gdjs.startCode.GDstartObjects2= [];
gdjs.startCode.GDstartObjects3= [];
gdjs.startCode.GDstartObjects4= [];
gdjs.startCode.GDstartObjects5= [];
gdjs.startCode.GDnameObjects1= [];
gdjs.startCode.GDnameObjects2= [];
gdjs.startCode.GDnameObjects3= [];
gdjs.startCode.GDnameObjects4= [];
gdjs.startCode.GDnameObjects5= [];
gdjs.startCode.GDstonespawnerObjects1= [];
gdjs.startCode.GDstonespawnerObjects2= [];
gdjs.startCode.GDstonespawnerObjects3= [];
gdjs.startCode.GDstonespawnerObjects4= [];
gdjs.startCode.GDstonespawnerObjects5= [];
gdjs.startCode.GDPixelFlameObjects1= [];
gdjs.startCode.GDPixelFlameObjects2= [];
gdjs.startCode.GDPixelFlameObjects3= [];
gdjs.startCode.GDPixelFlameObjects4= [];
gdjs.startCode.GDPixelFlameObjects5= [];
gdjs.startCode.GDPixelSmokeObjects1= [];
gdjs.startCode.GDPixelSmokeObjects2= [];
gdjs.startCode.GDPixelSmokeObjects3= [];
gdjs.startCode.GDPixelSmokeObjects4= [];
gdjs.startCode.GDPixelSmokeObjects5= [];
gdjs.startCode.GDwhite_9595circleObjects1= [];
gdjs.startCode.GDwhite_9595circleObjects2= [];
gdjs.startCode.GDwhite_9595circleObjects3= [];
gdjs.startCode.GDwhite_9595circleObjects4= [];
gdjs.startCode.GDwhite_9595circleObjects5= [];
gdjs.startCode.GDexplosionObjects1= [];
gdjs.startCode.GDexplosionObjects2= [];
gdjs.startCode.GDexplosionObjects3= [];
gdjs.startCode.GDexplosionObjects4= [];
gdjs.startCode.GDexplosionObjects5= [];
gdjs.startCode.GDbeforeObjects1= [];
gdjs.startCode.GDbeforeObjects2= [];
gdjs.startCode.GDbeforeObjects3= [];
gdjs.startCode.GDbeforeObjects4= [];
gdjs.startCode.GDbeforeObjects5= [];
gdjs.startCode.GDStoneObjects1= [];
gdjs.startCode.GDStoneObjects2= [];
gdjs.startCode.GDStoneObjects3= [];
gdjs.startCode.GDStoneObjects4= [];
gdjs.startCode.GDStoneObjects5= [];
gdjs.startCode.GDStoneleftObjects1= [];
gdjs.startCode.GDStoneleftObjects2= [];
gdjs.startCode.GDStoneleftObjects3= [];
gdjs.startCode.GDStoneleftObjects4= [];
gdjs.startCode.GDStoneleftObjects5= [];
gdjs.startCode.GDStonerightObjects1= [];
gdjs.startCode.GDStonerightObjects2= [];
gdjs.startCode.GDStonerightObjects3= [];
gdjs.startCode.GDStonerightObjects4= [];
gdjs.startCode.GDStonerightObjects5= [];
gdjs.startCode.GDswordObjects1= [];
gdjs.startCode.GDswordObjects2= [];
gdjs.startCode.GDswordObjects3= [];
gdjs.startCode.GDswordObjects4= [];
gdjs.startCode.GDswordObjects5= [];
gdjs.startCode.GDBlackSpaceObjects1= [];
gdjs.startCode.GDBlackSpaceObjects2= [];
gdjs.startCode.GDBlackSpaceObjects3= [];
gdjs.startCode.GDBlackSpaceObjects4= [];
gdjs.startCode.GDBlackSpaceObjects5= [];
gdjs.startCode.GDRedExplosionObjects1= [];
gdjs.startCode.GDRedExplosionObjects2= [];
gdjs.startCode.GDRedExplosionObjects3= [];
gdjs.startCode.GDRedExplosionObjects4= [];
gdjs.startCode.GDRedExplosionObjects5= [];
gdjs.startCode.GDStoneNophyObjects1= [];
gdjs.startCode.GDStoneNophyObjects2= [];
gdjs.startCode.GDStoneNophyObjects3= [];
gdjs.startCode.GDStoneNophyObjects4= [];
gdjs.startCode.GDStoneNophyObjects5= [];
gdjs.startCode.GDscoretxtObjects1= [];
gdjs.startCode.GDscoretxtObjects2= [];
gdjs.startCode.GDscoretxtObjects3= [];
gdjs.startCode.GDscoretxtObjects4= [];
gdjs.startCode.GDscoretxtObjects5= [];


gdjs.startCode.asyncCallback15911020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("star"), gdjs.startCode.GDstarObjects4);

{for(var i = 0, len = gdjs.startCode.GDstarObjects4.length ;i < len;++i) {
    gdjs.startCode.GDstarObjects4[i].activateBehavior("EllipseMovement", true);
}
}gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
for (const obj of gdjs.startCode.GDstarObjects3) asyncObjectsList.addObject("star", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startCode.asyncCallback15911020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.asyncCallback15911868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("star"), gdjs.startCode.GDstarObjects3);

{for(var i = 0, len = gdjs.startCode.GDstarObjects3.length ;i < len;++i) {
    gdjs.startCode.GDstarObjects3[i].activateBehavior("EllipseMovement", true);
}
}gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
for (const obj of gdjs.startCode.GDstarObjects2) asyncObjectsList.addObject("star", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.startCode.asyncCallback15911868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("star"), gdjs.startCode.GDstarObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstarObjects3.length;i<l;++i) {
    if ( gdjs.startCode.GDstarObjects3[i].getVariableNumber(gdjs.startCode.GDstarObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstarObjects3[k] = gdjs.startCode.GDstarObjects3[i];
        ++k;
    }
}
gdjs.startCode.GDstarObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDstarObjects3 */
{for(var i = 0, len = gdjs.startCode.GDstarObjects3.length ;i < len;++i) {
    gdjs.startCode.GDstarObjects3[i].activateBehavior("EllipseMovement", true);
}
}}

}


{

gdjs.copyArray(asyncObjectsList.getObjects("star"), gdjs.startCode.GDstarObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstarObjects3.length;i<l;++i) {
    if ( gdjs.startCode.GDstarObjects3[i].getVariableNumber(gdjs.startCode.GDstarObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstarObjects3[k] = gdjs.startCode.GDstarObjects3[i];
        ++k;
    }
}
gdjs.startCode.GDstarObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.startCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{

gdjs.copyArray(asyncObjectsList.getObjects("star"), gdjs.startCode.GDstarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstarObjects2.length;i<l;++i) {
    if ( gdjs.startCode.GDstarObjects2[i].getVariableNumber(gdjs.startCode.GDstarObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstarObjects2[k] = gdjs.startCode.GDstarObjects2[i];
        ++k;
    }
}
gdjs.startCode.GDstarObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.startCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.startCode.asyncCallback15909428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
{ //Subevents
gdjs.startCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
for (const obj of gdjs.startCode.GDstarObjects1) asyncObjectsList.addObject("star", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.startCode.asyncCallback15909428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDStoneNophyObjects1Objects = Hashtable.newFrom({"StoneNophy": gdjs.startCode.GDStoneNophyObjects1});
gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDPixelFlameObjects1ObjectsGDgdjs_9546startCode_9546GDPixelSmokeObjects1Objects = Hashtable.newFrom({"PixelFlame": gdjs.startCode.GDPixelFlameObjects1, "PixelSmoke": gdjs.startCode.GDPixelSmokeObjects1});
gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDStoneNophyObjects1Objects = Hashtable.newFrom({"StoneNophy": gdjs.startCode.GDStoneNophyObjects1});
gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDStoneNophyObjects1Objects = Hashtable.newFrom({"StoneNophy": gdjs.startCode.GDStoneNophyObjects1});
gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDbeforeObjects2Objects = Hashtable.newFrom({"before": gdjs.startCode.GDbeforeObjects2});
gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDexplosionObjects3Objects = Hashtable.newFrom({"explosion": gdjs.startCode.GDexplosionObjects3});
gdjs.startCode.asyncCallback15917612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.startCode.asyncCallback15917612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.asyncCallback15916748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.startCode.GDlogoObjects4);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.startCode.GDnameObjects4);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.startCode.GDstarObjects4);
gdjs.copyArray(asyncObjectsList.getObjects("start"), gdjs.startCode.GDstartObjects4);

{for(var i = 0, len = gdjs.startCode.GDlogoObjects4.length ;i < len;++i) {
    gdjs.startCode.GDlogoObjects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.startCode.GDstartObjects4.length ;i < len;++i) {
    gdjs.startCode.GDstartObjects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.startCode.GDnameObjects4.length ;i < len;++i) {
    gdjs.startCode.GDnameObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.startCode.GDstarObjects4.length ;i < len;++i) {
    gdjs.startCode.GDstarObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.startCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
/* Don't save start as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startCode.asyncCallback15916748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.asyncCallback15916532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.startCode.GDexplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDexplosionObjects3Objects, 200, 130, "explo");
}{for(var i = 0, len = gdjs.startCode.GDexplosionObjects3.length ;i < len;++i) {
    gdjs.startCode.GDexplosionObjects3[i].getBehavior("Tween").addObjectScaleTween3("blowup", 20, "easeInQuint", 1, false, false);
}
}
{ //Subevents
gdjs.startCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
/* Don't save start as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startCode.asyncCallback15916532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.asyncCallback15914940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PixelFlame"), gdjs.startCode.GDPixelFlameObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("PixelSmoke"), gdjs.startCode.GDPixelSmokeObjects2);

gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.startCode.GDStoneObjects2);
gdjs.startCode.GDbeforeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDbeforeObjects2Objects, 200, 130, "explo");
}{for(var i = 0, len = gdjs.startCode.GDPixelFlameObjects2.length ;i < len;++i) {
    gdjs.startCode.GDPixelFlameObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.startCode.GDPixelSmokeObjects2.length ;i < len;++i) {
    gdjs.startCode.GDPixelSmokeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.startCode.GDStoneObjects2.length ;i < len;++i) {
    gdjs.startCode.GDStoneObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.startCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
for (const obj of gdjs.startCode.GDPixelFlameObjects1) asyncObjectsList.addObject("PixelFlame", obj);
for (const obj of gdjs.startCode.GDPixelSmokeObjects1) asyncObjectsList.addObject("PixelSmoke", obj);
for (const obj of gdjs.startCode.GDstartObjects1) asyncObjectsList.addObject("start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.startCode.asyncCallback15914940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackSpace"), gdjs.startCode.GDBlackSpaceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDBlackSpaceObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDBlackSpaceObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDBlackSpaceObjects1[k] = gdjs.startCode.GDBlackSpaceObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDBlackSpaceObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.startCode.GDstartObjects1);
gdjs.startCode.GDPixelFlameObjects1.length = 0;

gdjs.startCode.GDPixelSmokeObjects1.length = 0;

gdjs.startCode.GDStoneNophyObjects1.length = 0;

{for(var i = 0, len = gdjs.startCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "main");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDStoneNophyObjects1Objects, -(150), -(150), "rock");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDPixelFlameObjects1ObjectsGDgdjs_9546startCode_9546GDPixelSmokeObjects1Objects, -(150), -(150), "fire");
}{for(var i = 0, len = gdjs.startCode.GDPixelFlameObjects1.length ;i < len;++i) {
    gdjs.startCode.GDPixelFlameObjects1[i].getBehavior("Sticker").Stick(gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDStoneNophyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.startCode.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.startCode.GDPixelSmokeObjects1[i].getBehavior("Sticker").Stick(gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDStoneNophyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.startCode.GDStoneNophyObjects1.length ;i < len;++i) {
    gdjs.startCode.GDStoneNophyObjects1[i].getBehavior("Tween").addObjectPositionTween2("crash", 200, 130, "easeOutCirc", 3, true);
}
}{for(var i = 0, len = gdjs.startCode.GDStoneNophyObjects1.length ;i < len;++i) {
    gdjs.startCode.GDStoneNophyObjects1[i].getBehavior("Tween").addObjectScaleTween3("shrink", 0.04, "easeInOutSine", 2, false, true);
}
}{for(var i = 0, len = gdjs.startCode.GDPixelFlameObjects1.length ;i < len;++i) {
    gdjs.startCode.GDPixelFlameObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0.04, "easeInOutSine", 2, false);
}
for(var i = 0, len = gdjs.startCode.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.startCode.GDPixelSmokeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0.04, "easeInOutSine", 2, false);
}
}
{ //Subevents
gdjs.startCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.startCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.startCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.startCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.startCode.GDstartObjects1);
{for(var i = 0, len = gdjs.startCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.startCode.GDlogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.startCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.startCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.startCode.GDnameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.startCode.GDstartObjects1);
{for(var i = 0, len = gdjs.startCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartObjects1[i].getBehavior("Flash").Flash(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.startCode.GDstarObjects1);
{for(var i = 0, len = gdjs.startCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstarObjects1[i].activateBehavior("EllipseMovement", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.startCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.startCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StoneNophy"), gdjs.startCode.GDStoneNophyObjects1);
{for(var i = 0, len = gdjs.startCode.GDStoneNophyObjects1.length ;i < len;++i) {
    gdjs.startCode.GDStoneNophyObjects1[i].rotate(90, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("before"), gdjs.startCode.GDbeforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("explosion"), gdjs.startCode.GDexplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDbeforeObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDbeforeObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDbeforeObjects1[k] = gdjs.startCode.GDbeforeObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDbeforeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.startCode.GDexplosionObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDexplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDexplosionObjects1[k] = gdjs.startCode.GDexplosionObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDexplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDbeforeObjects1 */
/* Reuse gdjs.startCode.GDexplosionObjects1 */
{for(var i = 0, len = gdjs.startCode.GDbeforeObjects1.length ;i < len;++i) {
    gdjs.startCode.GDbeforeObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.startCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.startCode.GDexplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDlogoObjects1.length = 0;
gdjs.startCode.GDlogoObjects2.length = 0;
gdjs.startCode.GDlogoObjects3.length = 0;
gdjs.startCode.GDlogoObjects4.length = 0;
gdjs.startCode.GDlogoObjects5.length = 0;
gdjs.startCode.GDstarObjects1.length = 0;
gdjs.startCode.GDstarObjects2.length = 0;
gdjs.startCode.GDstarObjects3.length = 0;
gdjs.startCode.GDstarObjects4.length = 0;
gdjs.startCode.GDstarObjects5.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDstartObjects3.length = 0;
gdjs.startCode.GDstartObjects4.length = 0;
gdjs.startCode.GDstartObjects5.length = 0;
gdjs.startCode.GDnameObjects1.length = 0;
gdjs.startCode.GDnameObjects2.length = 0;
gdjs.startCode.GDnameObjects3.length = 0;
gdjs.startCode.GDnameObjects4.length = 0;
gdjs.startCode.GDnameObjects5.length = 0;
gdjs.startCode.GDstonespawnerObjects1.length = 0;
gdjs.startCode.GDstonespawnerObjects2.length = 0;
gdjs.startCode.GDstonespawnerObjects3.length = 0;
gdjs.startCode.GDstonespawnerObjects4.length = 0;
gdjs.startCode.GDstonespawnerObjects5.length = 0;
gdjs.startCode.GDPixelFlameObjects1.length = 0;
gdjs.startCode.GDPixelFlameObjects2.length = 0;
gdjs.startCode.GDPixelFlameObjects3.length = 0;
gdjs.startCode.GDPixelFlameObjects4.length = 0;
gdjs.startCode.GDPixelFlameObjects5.length = 0;
gdjs.startCode.GDPixelSmokeObjects1.length = 0;
gdjs.startCode.GDPixelSmokeObjects2.length = 0;
gdjs.startCode.GDPixelSmokeObjects3.length = 0;
gdjs.startCode.GDPixelSmokeObjects4.length = 0;
gdjs.startCode.GDPixelSmokeObjects5.length = 0;
gdjs.startCode.GDwhite_9595circleObjects1.length = 0;
gdjs.startCode.GDwhite_9595circleObjects2.length = 0;
gdjs.startCode.GDwhite_9595circleObjects3.length = 0;
gdjs.startCode.GDwhite_9595circleObjects4.length = 0;
gdjs.startCode.GDwhite_9595circleObjects5.length = 0;
gdjs.startCode.GDexplosionObjects1.length = 0;
gdjs.startCode.GDexplosionObjects2.length = 0;
gdjs.startCode.GDexplosionObjects3.length = 0;
gdjs.startCode.GDexplosionObjects4.length = 0;
gdjs.startCode.GDexplosionObjects5.length = 0;
gdjs.startCode.GDbeforeObjects1.length = 0;
gdjs.startCode.GDbeforeObjects2.length = 0;
gdjs.startCode.GDbeforeObjects3.length = 0;
gdjs.startCode.GDbeforeObjects4.length = 0;
gdjs.startCode.GDbeforeObjects5.length = 0;
gdjs.startCode.GDStoneObjects1.length = 0;
gdjs.startCode.GDStoneObjects2.length = 0;
gdjs.startCode.GDStoneObjects3.length = 0;
gdjs.startCode.GDStoneObjects4.length = 0;
gdjs.startCode.GDStoneObjects5.length = 0;
gdjs.startCode.GDStoneleftObjects1.length = 0;
gdjs.startCode.GDStoneleftObjects2.length = 0;
gdjs.startCode.GDStoneleftObjects3.length = 0;
gdjs.startCode.GDStoneleftObjects4.length = 0;
gdjs.startCode.GDStoneleftObjects5.length = 0;
gdjs.startCode.GDStonerightObjects1.length = 0;
gdjs.startCode.GDStonerightObjects2.length = 0;
gdjs.startCode.GDStonerightObjects3.length = 0;
gdjs.startCode.GDStonerightObjects4.length = 0;
gdjs.startCode.GDStonerightObjects5.length = 0;
gdjs.startCode.GDswordObjects1.length = 0;
gdjs.startCode.GDswordObjects2.length = 0;
gdjs.startCode.GDswordObjects3.length = 0;
gdjs.startCode.GDswordObjects4.length = 0;
gdjs.startCode.GDswordObjects5.length = 0;
gdjs.startCode.GDBlackSpaceObjects1.length = 0;
gdjs.startCode.GDBlackSpaceObjects2.length = 0;
gdjs.startCode.GDBlackSpaceObjects3.length = 0;
gdjs.startCode.GDBlackSpaceObjects4.length = 0;
gdjs.startCode.GDBlackSpaceObjects5.length = 0;
gdjs.startCode.GDRedExplosionObjects1.length = 0;
gdjs.startCode.GDRedExplosionObjects2.length = 0;
gdjs.startCode.GDRedExplosionObjects3.length = 0;
gdjs.startCode.GDRedExplosionObjects4.length = 0;
gdjs.startCode.GDRedExplosionObjects5.length = 0;
gdjs.startCode.GDStoneNophyObjects1.length = 0;
gdjs.startCode.GDStoneNophyObjects2.length = 0;
gdjs.startCode.GDStoneNophyObjects3.length = 0;
gdjs.startCode.GDStoneNophyObjects4.length = 0;
gdjs.startCode.GDStoneNophyObjects5.length = 0;
gdjs.startCode.GDscoretxtObjects1.length = 0;
gdjs.startCode.GDscoretxtObjects2.length = 0;
gdjs.startCode.GDscoretxtObjects3.length = 0;
gdjs.startCode.GDscoretxtObjects4.length = 0;
gdjs.startCode.GDscoretxtObjects5.length = 0;

gdjs.startCode.eventsList9(runtimeScene);
gdjs.startCode.GDlogoObjects1.length = 0;
gdjs.startCode.GDlogoObjects2.length = 0;
gdjs.startCode.GDlogoObjects3.length = 0;
gdjs.startCode.GDlogoObjects4.length = 0;
gdjs.startCode.GDlogoObjects5.length = 0;
gdjs.startCode.GDstarObjects1.length = 0;
gdjs.startCode.GDstarObjects2.length = 0;
gdjs.startCode.GDstarObjects3.length = 0;
gdjs.startCode.GDstarObjects4.length = 0;
gdjs.startCode.GDstarObjects5.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDstartObjects3.length = 0;
gdjs.startCode.GDstartObjects4.length = 0;
gdjs.startCode.GDstartObjects5.length = 0;
gdjs.startCode.GDnameObjects1.length = 0;
gdjs.startCode.GDnameObjects2.length = 0;
gdjs.startCode.GDnameObjects3.length = 0;
gdjs.startCode.GDnameObjects4.length = 0;
gdjs.startCode.GDnameObjects5.length = 0;
gdjs.startCode.GDstonespawnerObjects1.length = 0;
gdjs.startCode.GDstonespawnerObjects2.length = 0;
gdjs.startCode.GDstonespawnerObjects3.length = 0;
gdjs.startCode.GDstonespawnerObjects4.length = 0;
gdjs.startCode.GDstonespawnerObjects5.length = 0;
gdjs.startCode.GDPixelFlameObjects1.length = 0;
gdjs.startCode.GDPixelFlameObjects2.length = 0;
gdjs.startCode.GDPixelFlameObjects3.length = 0;
gdjs.startCode.GDPixelFlameObjects4.length = 0;
gdjs.startCode.GDPixelFlameObjects5.length = 0;
gdjs.startCode.GDPixelSmokeObjects1.length = 0;
gdjs.startCode.GDPixelSmokeObjects2.length = 0;
gdjs.startCode.GDPixelSmokeObjects3.length = 0;
gdjs.startCode.GDPixelSmokeObjects4.length = 0;
gdjs.startCode.GDPixelSmokeObjects5.length = 0;
gdjs.startCode.GDwhite_9595circleObjects1.length = 0;
gdjs.startCode.GDwhite_9595circleObjects2.length = 0;
gdjs.startCode.GDwhite_9595circleObjects3.length = 0;
gdjs.startCode.GDwhite_9595circleObjects4.length = 0;
gdjs.startCode.GDwhite_9595circleObjects5.length = 0;
gdjs.startCode.GDexplosionObjects1.length = 0;
gdjs.startCode.GDexplosionObjects2.length = 0;
gdjs.startCode.GDexplosionObjects3.length = 0;
gdjs.startCode.GDexplosionObjects4.length = 0;
gdjs.startCode.GDexplosionObjects5.length = 0;
gdjs.startCode.GDbeforeObjects1.length = 0;
gdjs.startCode.GDbeforeObjects2.length = 0;
gdjs.startCode.GDbeforeObjects3.length = 0;
gdjs.startCode.GDbeforeObjects4.length = 0;
gdjs.startCode.GDbeforeObjects5.length = 0;
gdjs.startCode.GDStoneObjects1.length = 0;
gdjs.startCode.GDStoneObjects2.length = 0;
gdjs.startCode.GDStoneObjects3.length = 0;
gdjs.startCode.GDStoneObjects4.length = 0;
gdjs.startCode.GDStoneObjects5.length = 0;
gdjs.startCode.GDStoneleftObjects1.length = 0;
gdjs.startCode.GDStoneleftObjects2.length = 0;
gdjs.startCode.GDStoneleftObjects3.length = 0;
gdjs.startCode.GDStoneleftObjects4.length = 0;
gdjs.startCode.GDStoneleftObjects5.length = 0;
gdjs.startCode.GDStonerightObjects1.length = 0;
gdjs.startCode.GDStonerightObjects2.length = 0;
gdjs.startCode.GDStonerightObjects3.length = 0;
gdjs.startCode.GDStonerightObjects4.length = 0;
gdjs.startCode.GDStonerightObjects5.length = 0;
gdjs.startCode.GDswordObjects1.length = 0;
gdjs.startCode.GDswordObjects2.length = 0;
gdjs.startCode.GDswordObjects3.length = 0;
gdjs.startCode.GDswordObjects4.length = 0;
gdjs.startCode.GDswordObjects5.length = 0;
gdjs.startCode.GDBlackSpaceObjects1.length = 0;
gdjs.startCode.GDBlackSpaceObjects2.length = 0;
gdjs.startCode.GDBlackSpaceObjects3.length = 0;
gdjs.startCode.GDBlackSpaceObjects4.length = 0;
gdjs.startCode.GDBlackSpaceObjects5.length = 0;
gdjs.startCode.GDRedExplosionObjects1.length = 0;
gdjs.startCode.GDRedExplosionObjects2.length = 0;
gdjs.startCode.GDRedExplosionObjects3.length = 0;
gdjs.startCode.GDRedExplosionObjects4.length = 0;
gdjs.startCode.GDRedExplosionObjects5.length = 0;
gdjs.startCode.GDStoneNophyObjects1.length = 0;
gdjs.startCode.GDStoneNophyObjects2.length = 0;
gdjs.startCode.GDStoneNophyObjects3.length = 0;
gdjs.startCode.GDStoneNophyObjects4.length = 0;
gdjs.startCode.GDStoneNophyObjects5.length = 0;
gdjs.startCode.GDscoretxtObjects1.length = 0;
gdjs.startCode.GDscoretxtObjects2.length = 0;
gdjs.startCode.GDscoretxtObjects3.length = 0;
gdjs.startCode.GDscoretxtObjects4.length = 0;
gdjs.startCode.GDscoretxtObjects5.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
