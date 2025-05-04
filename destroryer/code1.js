gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDgunObjects1= [];
gdjs.mainCode.GDgunObjects2= [];
gdjs.mainCode.GDgunObjects3= [];
gdjs.mainCode.GDgunObjects4= [];
gdjs.mainCode.GDgunObjects5= [];
gdjs.mainCode.GDtimerObjects1= [];
gdjs.mainCode.GDtimerObjects2= [];
gdjs.mainCode.GDtimerObjects3= [];
gdjs.mainCode.GDtimerObjects4= [];
gdjs.mainCode.GDtimerObjects5= [];
gdjs.mainCode.GDstoryObjects1= [];
gdjs.mainCode.GDstoryObjects2= [];
gdjs.mainCode.GDstoryObjects3= [];
gdjs.mainCode.GDstoryObjects4= [];
gdjs.mainCode.GDstoryObjects5= [];
gdjs.mainCode.GDtimesupObjects1= [];
gdjs.mainCode.GDtimesupObjects2= [];
gdjs.mainCode.GDtimesupObjects3= [];
gdjs.mainCode.GDtimesupObjects4= [];
gdjs.mainCode.GDtimesupObjects5= [];
gdjs.mainCode.GDconfettiObjects1= [];
gdjs.mainCode.GDconfettiObjects2= [];
gdjs.mainCode.GDconfettiObjects3= [];
gdjs.mainCode.GDconfettiObjects4= [];
gdjs.mainCode.GDconfettiObjects5= [];
gdjs.mainCode.GDexploObjects1= [];
gdjs.mainCode.GDexploObjects2= [];
gdjs.mainCode.GDexploObjects3= [];
gdjs.mainCode.GDexploObjects4= [];
gdjs.mainCode.GDexploObjects5= [];
gdjs.mainCode.GDNewSpriteObjects1= [];
gdjs.mainCode.GDNewSpriteObjects2= [];
gdjs.mainCode.GDNewSpriteObjects3= [];
gdjs.mainCode.GDNewSpriteObjects4= [];
gdjs.mainCode.GDNewSpriteObjects5= [];
gdjs.mainCode.GDStoneObjects1= [];
gdjs.mainCode.GDStoneObjects2= [];
gdjs.mainCode.GDStoneObjects3= [];
gdjs.mainCode.GDStoneObjects4= [];
gdjs.mainCode.GDStoneObjects5= [];
gdjs.mainCode.GDStoneleftObjects1= [];
gdjs.mainCode.GDStoneleftObjects2= [];
gdjs.mainCode.GDStoneleftObjects3= [];
gdjs.mainCode.GDStoneleftObjects4= [];
gdjs.mainCode.GDStoneleftObjects5= [];
gdjs.mainCode.GDStonerightObjects1= [];
gdjs.mainCode.GDStonerightObjects2= [];
gdjs.mainCode.GDStonerightObjects3= [];
gdjs.mainCode.GDStonerightObjects4= [];
gdjs.mainCode.GDStonerightObjects5= [];
gdjs.mainCode.GDswordObjects1= [];
gdjs.mainCode.GDswordObjects2= [];
gdjs.mainCode.GDswordObjects3= [];
gdjs.mainCode.GDswordObjects4= [];
gdjs.mainCode.GDswordObjects5= [];
gdjs.mainCode.GDBlackSpaceObjects1= [];
gdjs.mainCode.GDBlackSpaceObjects2= [];
gdjs.mainCode.GDBlackSpaceObjects3= [];
gdjs.mainCode.GDBlackSpaceObjects4= [];
gdjs.mainCode.GDBlackSpaceObjects5= [];
gdjs.mainCode.GDRedExplosionObjects1= [];
gdjs.mainCode.GDRedExplosionObjects2= [];
gdjs.mainCode.GDRedExplosionObjects3= [];
gdjs.mainCode.GDRedExplosionObjects4= [];
gdjs.mainCode.GDRedExplosionObjects5= [];
gdjs.mainCode.GDStoneNophyObjects1= [];
gdjs.mainCode.GDStoneNophyObjects2= [];
gdjs.mainCode.GDStoneNophyObjects3= [];
gdjs.mainCode.GDStoneNophyObjects4= [];
gdjs.mainCode.GDStoneNophyObjects5= [];
gdjs.mainCode.GDscoretxtObjects1= [];
gdjs.mainCode.GDscoretxtObjects2= [];
gdjs.mainCode.GDscoretxtObjects3= [];
gdjs.mainCode.GDscoretxtObjects4= [];
gdjs.mainCode.GDscoretxtObjects5= [];


gdjs.mainCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.mainCode.asyncCallback9671772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("scoretxt"), gdjs.mainCode.GDscoretxtObjects4);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mainCode.GDtimerObjects4);
{for(var i = 0, len = gdjs.mainCode.GDscoretxtObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDscoretxtObjects4[i].getBehavior("Tween").addObjectPositionYTween2("tsdown", 32, "easeOutQuint", 1.5, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDtimerObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDtimerObjects4[i].getBehavior("Tween").addObjectPositionYTween2("tsdown", 64, "easeOutQuint", 1.5, false);
}
}
{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.mainCode.asyncCallback9671772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback15874300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("story"), gdjs.mainCode.GDstoryObjects3);

{for(var i = 0, len = gdjs.mainCode.GDstoryObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDstoryObjects3[i].getBehavior("Tween").addObjectPositionYTween2("storysecondup\n", -(100), "easeInQuint", 2.5, true);
}
}
{ //Subevents
gdjs.mainCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
for (const obj of gdjs.mainCode.GDstoryObjects2) asyncObjectsList.addObject("story", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.mainCode.asyncCallback15874300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("story"), gdjs.mainCode.GDstoryObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtsExt__CountdownTimer__SetCountdown.func(runtimeScene, "countdown", 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.mainCode.GDstoryObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDstoryObjects2[i].getBehavior("Tween").addObjectPositionYTween2("storyfirstup\n", 185, "easeOutQuint", 2.5, false);
}
}
{ //Subevents
gdjs.mainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("scoretxt"), gdjs.mainCode.GDscoretxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mainCode.GDtimerObjects2);
{for(var i = 0, len = gdjs.mainCode.GDscoretxtObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDscoretxtObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.mainCode.GDtimerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtimerObjects2[i].getBehavior("Text").setText("Time: " + gdjs.evtTools.common.toString(gdjs.evtsExt__CountdownTimer__RemainingTime.func(runtimeScene, "countdown", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + "s");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("story"), gdjs.mainCode.GDstoryObjects1);
gdjs.copyArray(runtimeScene.getObjects("timesup"), gdjs.mainCode.GDtimesupObjects1);
{for(var i = 0, len = gdjs.mainCode.GDstoryObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDstoryObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.mainCode.GDtimesupObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtimesupObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStoneObjects4Objects = Hashtable.newFrom({"Stone": gdjs.mainCode.GDStoneObjects4});
gdjs.mainCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == gdjs.random(10);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDStoneObjects4 */
{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDswordObjects3Objects = Hashtable.newFrom({"sword": gdjs.mainCode.GDswordObjects3});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStoneObjects3Objects = Hashtable.newFrom({"Stone": gdjs.mainCode.GDStoneObjects3});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStoneleftObjects3Objects = Hashtable.newFrom({"Stoneleft": gdjs.mainCode.GDStoneleftObjects3});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStonerightObjects3Objects = Hashtable.newFrom({"Stoneright": gdjs.mainCode.GDStonerightObjects3});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDexploObjects3Objects = Hashtable.newFrom({"explo": gdjs.mainCode.GDexploObjects3});
gdjs.mainCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(gdjs.mainCode.GDStoneObjects3, gdjs.mainCode.GDStoneObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDStoneObjects4.length;i<l;++i) {
    if ( gdjs.mainCode.GDStoneObjects4[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDStoneObjects4[k] = gdjs.mainCode.GDStoneObjects4[i];
        ++k;
    }
}
gdjs.mainCode.GDStoneObjects4.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.mainCode.GDStoneleftObjects3, gdjs.mainCode.GDStoneleftObjects4);

gdjs.copyArray(gdjs.mainCode.GDStonerightObjects3, gdjs.mainCode.GDStonerightObjects4);

{for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects4[i].getBehavior("Animation").setAnimationIndex(0);
}
for(var i = 0, len = gdjs.mainCode.GDStonerightObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

/* Reuse gdjs.mainCode.GDStoneObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDStoneObjects3.length;i<l;++i) {
    if ( gdjs.mainCode.GDStoneObjects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDStoneObjects3[k] = gdjs.mainCode.GDStoneObjects3[i];
        ++k;
    }
}
gdjs.mainCode.GDStoneObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDStoneleftObjects3 */
/* Reuse gdjs.mainCode.GDStonerightObjects3 */
{for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
for(var i = 0, len = gdjs.mainCode.GDStonerightObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}}

}


};gdjs.mainCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.mainCode.GDStoneObjects4);
{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].returnVariable(gdjs.mainCode.GDStoneObjects4[i].getVariables().getFromIndex(0).getChild("X")).setNumber((gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").getLinearVelocityX()));
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].returnVariable(gdjs.mainCode.GDStoneObjects4[i].getVariables().getFromIndex(0).getChild("Y")).setNumber((gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").getLinearVelocityY()));
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].returnVariable(gdjs.mainCode.GDStoneObjects4[i].getVariables().getFromIndex(0).getChild("Ang")).setNumber((gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").getAngularVelocity()));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.mainCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("sword"), gdjs.mainCode.GDswordObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDswordObjects3.length;i<l;++i) {
    if ( gdjs.mainCode.GDswordObjects3[i].getBehavior("Opacity").getOpacity() > 224 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDswordObjects3[k] = gdjs.mainCode.GDswordObjects3[i];
        ++k;
    }
}
gdjs.mainCode.GDswordObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDswordObjects3Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStoneObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDswordObjects3.length;i<l;++i) {
    if ( gdjs.mainCode.GDswordObjects3[i].getBehavior("Resizable").getWidth() > 50 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDswordObjects3[k] = gdjs.mainCode.GDswordObjects3[i];
        ++k;
    }
}
gdjs.mainCode.GDswordObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDStoneObjects3 */
gdjs.mainCode.GDStoneleftObjects3.length = 0;

gdjs.mainCode.GDStonerightObjects3.length = 0;

gdjs.mainCode.GDexploObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStoneleftObjects3Objects, (( gdjs.mainCode.GDStoneObjects3.length === 0 ) ? 0 :gdjs.mainCode.GDStoneObjects3[0].getCenterXInScene()), (( gdjs.mainCode.GDStoneObjects3.length === 0 ) ? 0 :gdjs.mainCode.GDStoneObjects3[0].getCenterYInScene()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStonerightObjects3Objects, (( gdjs.mainCode.GDStoneObjects3.length === 0 ) ? 0 :gdjs.mainCode.GDStoneObjects3[0].getCenterXInScene()), (( gdjs.mainCode.GDStoneObjects3.length === 0 ) ? 0 :gdjs.mainCode.GDStoneObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Physics2").setLinearVelocityX(((gdjs.mainCode.GDStoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDStoneObjects3[0].getVariables()).getFromIndex(0).getChild("X").getAsNumber());
}
for(var i = 0, len = gdjs.mainCode.GDStonerightObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Physics2").setLinearVelocityX(((gdjs.mainCode.GDStoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDStoneObjects3[0].getVariables()).getFromIndex(0).getChild("X").getAsNumber());
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Physics2").setLinearVelocityY(((gdjs.mainCode.GDStoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDStoneObjects3[0].getVariables()).getFromIndex(0).getChild("Y").getAsNumber());
}
for(var i = 0, len = gdjs.mainCode.GDStonerightObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Physics2").setLinearVelocityY(((gdjs.mainCode.GDStoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDStoneObjects3[0].getVariables()).getFromIndex(0).getChild("Y").getAsNumber());
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Physics2").setAngularVelocity(((gdjs.mainCode.GDStoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDStoneObjects3[0].getVariables()).getFromIndex(0).getChild("Ang").getAsNumber());
}
for(var i = 0, len = gdjs.mainCode.GDStonerightObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Physics2").setAngularVelocity(((gdjs.mainCode.GDStoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDStoneObjects3[0].getVariables()).getFromIndex(0).getChild("Ang").getAsNumber());
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Physics2").applyImpulse(10, 0, (gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Physics2").getMassCenterX()), (gdjs.mainCode.GDStoneleftObjects3[i].getBehavior("Physics2").getMassCenterY()));
}
}{for(var i = 0, len = gdjs.mainCode.GDStonerightObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Physics2").applyImpulse(-(10), 0, (gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Physics2").getMassCenterX()), (gdjs.mainCode.GDStonerightObjects3[i].getBehavior("Physics2").getMassCenterY()));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDexploObjects3Objects, (( gdjs.mainCode.GDStoneObjects3.length === 0 ) ? 0 :gdjs.mainCode.GDStoneObjects3[0].getCenterXInScene()), (( gdjs.mainCode.GDStoneObjects3.length === 0 ) ? 0 :gdjs.mainCode.GDStoneObjects3[0].getCenterYInScene()), "fire");
}{for(var i = 0, len = gdjs.mainCode.GDexploObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDexploObjects3[i].setAngle(0 + gdjs.randomFloatInRange(-(15), 15));
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.mainCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.mainCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "gun", 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.mainCode.GDgunObjects4);
gdjs.mainCode.GDStoneObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDStoneObjects4Objects, (( gdjs.mainCode.GDgunObjects4.length === 0 ) ? 0 :gdjs.mainCode.GDgunObjects4[0].getPointX("")), (( gdjs.mainCode.GDgunObjects4.length === 0 ) ? 0 :gdjs.mainCode.GDgunObjects4[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").applyPolarForce(270 + gdjs.randomInRange(-(30), 30), 500, (gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").getMassCenterX()), (gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").getMassCenterY()));
}
}{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].getBehavior("Physics2").applyAngularImpulse(gdjs.evtsExt__sq__randomnon0.func(runtimeScene, -(3), 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.mainCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.mainCode.GDStoneObjects4);
gdjs.copyArray(runtimeScene.getObjects("Stoneleft"), gdjs.mainCode.GDStoneleftObjects4);
gdjs.copyArray(runtimeScene.getObjects("Stoneright"), gdjs.mainCode.GDStonerightObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDStoneObjects4.length;i<l;++i) {
    if ( gdjs.mainCode.GDStoneObjects4[i].getY() > 500 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDStoneObjects4[k] = gdjs.mainCode.GDStoneObjects4[i];
        ++k;
    }
}
gdjs.mainCode.GDStoneObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDStoneleftObjects4.length;i<l;++i) {
    if ( gdjs.mainCode.GDStoneleftObjects4[i].getY() > 500 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDStoneleftObjects4[k] = gdjs.mainCode.GDStoneleftObjects4[i];
        ++k;
    }
}
gdjs.mainCode.GDStoneleftObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDStonerightObjects4.length;i<l;++i) {
    if ( gdjs.mainCode.GDStonerightObjects4[i].getY() > 500 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDStonerightObjects4[k] = gdjs.mainCode.GDStonerightObjects4[i];
        ++k;
    }
}
gdjs.mainCode.GDStonerightObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDStoneObjects4 */
/* Reuse gdjs.mainCode.GDStoneleftObjects4 */
/* Reuse gdjs.mainCode.GDStonerightObjects4 */
{for(var i = 0, len = gdjs.mainCode.GDStoneObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneObjects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDStoneleftObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStoneleftObjects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDStonerightObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDStonerightObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.mainCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDswordObjects3Objects = Hashtable.newFrom({"sword": gdjs.mainCode.GDswordObjects3});
gdjs.mainCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.mainCode.GDswordObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDswordObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.mainCode.GDswordObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDswordObjects3[i].getBehavior("Resizable").setWidth(gdjs.evtsExt__sq__distance.func(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber(), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.mainCode.GDswordObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDswordObjects3[i].getBehavior("Resizable").setHeight(Math.min(gdjs.evtsExt__sq__distance.func(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber(), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), 7));
}
}{for(var i = 0, len = gdjs.mainCode.GDswordObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDswordObjects3[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 0.2, true);
}
}{for(var i = 0, len = gdjs.mainCode.GDswordObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDswordObjects3[i].rotateTowardPosition(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber(), 0, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}}

}


};gdjs.mainCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "swipe", 0.02, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.mainCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


gdjs.mainCode.eventsList7(runtimeScene, asyncObjectsList);
}


{


gdjs.mainCode.eventsList9(runtimeScene, asyncObjectsList);
}


};gdjs.mainCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CountdownTimer__IsTimerFinished.func(runtimeScene, "countdown", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.mainCode.asyncCallback10280596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
{gdjs.evtsExt__CountdownTimer__StartCountdown.func(runtimeScene, "countdown", false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.mainCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.mainCode.asyncCallback10280596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.mainCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDconfettiObjects3Objects = Hashtable.newFrom({"confetti": gdjs.mainCode.GDconfettiObjects3});
gdjs.mainCode.asyncCallback13612748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "info", false);
}gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.mainCode.asyncCallback13612748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback14050812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("scoretxt"), gdjs.mainCode.GDscoretxtObjects4);
gdjs.copyArray(asyncObjectsList.getObjects("timesup"), gdjs.mainCode.GDtimesupObjects4);

{for(var i = 0, len = gdjs.mainCode.GDscoretxtObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDscoretxtObjects4[i].getBehavior("Tween").addObjectPositionTween2("fade", (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.mainCode.GDscoretxtObjects4[i].getWidth()) / 2), 120, "easeOutQuad", 2, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDtimesupObjects4.length ;i < len;++i) {
    gdjs.mainCode.GDtimesupObjects4[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 2.5, true);
}
}
{ //Subevents
gdjs.mainCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
for (const obj of gdjs.mainCode.GDtimesupObjects3) asyncObjectsList.addObject("timesup", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.mainCode.asyncCallback14050812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback14441756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("timesup"), gdjs.mainCode.GDtimesupObjects3);

gdjs.mainCode.GDconfettiObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDconfettiObjects3Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.mainCode.GDconfettiObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDconfettiObjects3[i].getBehavior("Resizable").setSize(400, 400);
}
}{for(var i = 0, len = gdjs.mainCode.GDtimesupObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDtimesupObjects3[i].getBehavior("Text").setText("You did it!");
}
}
{ //Subevents
gdjs.mainCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
for (const obj of gdjs.mainCode.GDtimesupObjects2) asyncObjectsList.addObject("timesup", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.mainCode.asyncCallback14441756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback14502556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mainCode.GDtimerObjects2);
gdjs.copyArray(runtimeScene.getObjects("timesup"), gdjs.mainCode.GDtimesupObjects2);
{for(var i = 0, len = gdjs.mainCode.GDtimesupObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtimesupObjects2[i].getBehavior("Tween").addObjectPositionYTween2("storyfirstup\n", 185, "easeOutQuint", 2.5, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDtimerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtimerObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 2, false);
}
}
{ //Subevents
gdjs.mainCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mainCode.asyncCallback14502556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CountdownTimer__IsTimerFinished.func(runtimeScene, "countdown", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11171308);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "info");
}
{ //Subevents
gdjs.mainCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.mainCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.mainCode.GDconfettiObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDconfettiObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDconfettiObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDconfettiObjects2[k] = gdjs.mainCode.GDconfettiObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDconfettiObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDconfettiObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDconfettiObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDconfettiObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("explo"), gdjs.mainCode.GDexploObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDexploObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDexploObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDexploObjects2[k] = gdjs.mainCode.GDexploObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDexploObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDexploObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDexploObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDexploObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("scoretxt"), gdjs.mainCode.GDscoretxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("story"), gdjs.mainCode.GDstoryObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mainCode.GDtimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("timesup"), gdjs.mainCode.GDtimesupObjects1);
{for(var i = 0, len = gdjs.mainCode.GDscoretxtObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDscoretxtObjects1[i].setFontName("assets\\Times New Roman.ttf");
}
for(var i = 0, len = gdjs.mainCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtimerObjects1[i].setFontName("assets\\Times New Roman.ttf");
}
for(var i = 0, len = gdjs.mainCode.GDstoryObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDstoryObjects1[i].setFontName("assets\\Times New Roman.ttf");
}
for(var i = 0, len = gdjs.mainCode.GDtimesupObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtimesupObjects1[i].setFontName("assets\\Times New Roman.ttf");
}
}}

}


};gdjs.mainCode.eventsList20 = function(runtimeScene) {

{


gdjs.mainCode.eventsList3(runtimeScene);
}


{


gdjs.mainCode.eventsList13(runtimeScene);
}


{


gdjs.mainCode.eventsList18(runtimeScene);
}


{


gdjs.mainCode.eventsList19(runtimeScene);
}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDgunObjects1.length = 0;
gdjs.mainCode.GDgunObjects2.length = 0;
gdjs.mainCode.GDgunObjects3.length = 0;
gdjs.mainCode.GDgunObjects4.length = 0;
gdjs.mainCode.GDgunObjects5.length = 0;
gdjs.mainCode.GDtimerObjects1.length = 0;
gdjs.mainCode.GDtimerObjects2.length = 0;
gdjs.mainCode.GDtimerObjects3.length = 0;
gdjs.mainCode.GDtimerObjects4.length = 0;
gdjs.mainCode.GDtimerObjects5.length = 0;
gdjs.mainCode.GDstoryObjects1.length = 0;
gdjs.mainCode.GDstoryObjects2.length = 0;
gdjs.mainCode.GDstoryObjects3.length = 0;
gdjs.mainCode.GDstoryObjects4.length = 0;
gdjs.mainCode.GDstoryObjects5.length = 0;
gdjs.mainCode.GDtimesupObjects1.length = 0;
gdjs.mainCode.GDtimesupObjects2.length = 0;
gdjs.mainCode.GDtimesupObjects3.length = 0;
gdjs.mainCode.GDtimesupObjects4.length = 0;
gdjs.mainCode.GDtimesupObjects5.length = 0;
gdjs.mainCode.GDconfettiObjects1.length = 0;
gdjs.mainCode.GDconfettiObjects2.length = 0;
gdjs.mainCode.GDconfettiObjects3.length = 0;
gdjs.mainCode.GDconfettiObjects4.length = 0;
gdjs.mainCode.GDconfettiObjects5.length = 0;
gdjs.mainCode.GDexploObjects1.length = 0;
gdjs.mainCode.GDexploObjects2.length = 0;
gdjs.mainCode.GDexploObjects3.length = 0;
gdjs.mainCode.GDexploObjects4.length = 0;
gdjs.mainCode.GDexploObjects5.length = 0;
gdjs.mainCode.GDNewSpriteObjects1.length = 0;
gdjs.mainCode.GDNewSpriteObjects2.length = 0;
gdjs.mainCode.GDNewSpriteObjects3.length = 0;
gdjs.mainCode.GDNewSpriteObjects4.length = 0;
gdjs.mainCode.GDNewSpriteObjects5.length = 0;
gdjs.mainCode.GDStoneObjects1.length = 0;
gdjs.mainCode.GDStoneObjects2.length = 0;
gdjs.mainCode.GDStoneObjects3.length = 0;
gdjs.mainCode.GDStoneObjects4.length = 0;
gdjs.mainCode.GDStoneObjects5.length = 0;
gdjs.mainCode.GDStoneleftObjects1.length = 0;
gdjs.mainCode.GDStoneleftObjects2.length = 0;
gdjs.mainCode.GDStoneleftObjects3.length = 0;
gdjs.mainCode.GDStoneleftObjects4.length = 0;
gdjs.mainCode.GDStoneleftObjects5.length = 0;
gdjs.mainCode.GDStonerightObjects1.length = 0;
gdjs.mainCode.GDStonerightObjects2.length = 0;
gdjs.mainCode.GDStonerightObjects3.length = 0;
gdjs.mainCode.GDStonerightObjects4.length = 0;
gdjs.mainCode.GDStonerightObjects5.length = 0;
gdjs.mainCode.GDswordObjects1.length = 0;
gdjs.mainCode.GDswordObjects2.length = 0;
gdjs.mainCode.GDswordObjects3.length = 0;
gdjs.mainCode.GDswordObjects4.length = 0;
gdjs.mainCode.GDswordObjects5.length = 0;
gdjs.mainCode.GDBlackSpaceObjects1.length = 0;
gdjs.mainCode.GDBlackSpaceObjects2.length = 0;
gdjs.mainCode.GDBlackSpaceObjects3.length = 0;
gdjs.mainCode.GDBlackSpaceObjects4.length = 0;
gdjs.mainCode.GDBlackSpaceObjects5.length = 0;
gdjs.mainCode.GDRedExplosionObjects1.length = 0;
gdjs.mainCode.GDRedExplosionObjects2.length = 0;
gdjs.mainCode.GDRedExplosionObjects3.length = 0;
gdjs.mainCode.GDRedExplosionObjects4.length = 0;
gdjs.mainCode.GDRedExplosionObjects5.length = 0;
gdjs.mainCode.GDStoneNophyObjects1.length = 0;
gdjs.mainCode.GDStoneNophyObjects2.length = 0;
gdjs.mainCode.GDStoneNophyObjects3.length = 0;
gdjs.mainCode.GDStoneNophyObjects4.length = 0;
gdjs.mainCode.GDStoneNophyObjects5.length = 0;
gdjs.mainCode.GDscoretxtObjects1.length = 0;
gdjs.mainCode.GDscoretxtObjects2.length = 0;
gdjs.mainCode.GDscoretxtObjects3.length = 0;
gdjs.mainCode.GDscoretxtObjects4.length = 0;
gdjs.mainCode.GDscoretxtObjects5.length = 0;

gdjs.mainCode.eventsList20(runtimeScene);
gdjs.mainCode.GDgunObjects1.length = 0;
gdjs.mainCode.GDgunObjects2.length = 0;
gdjs.mainCode.GDgunObjects3.length = 0;
gdjs.mainCode.GDgunObjects4.length = 0;
gdjs.mainCode.GDgunObjects5.length = 0;
gdjs.mainCode.GDtimerObjects1.length = 0;
gdjs.mainCode.GDtimerObjects2.length = 0;
gdjs.mainCode.GDtimerObjects3.length = 0;
gdjs.mainCode.GDtimerObjects4.length = 0;
gdjs.mainCode.GDtimerObjects5.length = 0;
gdjs.mainCode.GDstoryObjects1.length = 0;
gdjs.mainCode.GDstoryObjects2.length = 0;
gdjs.mainCode.GDstoryObjects3.length = 0;
gdjs.mainCode.GDstoryObjects4.length = 0;
gdjs.mainCode.GDstoryObjects5.length = 0;
gdjs.mainCode.GDtimesupObjects1.length = 0;
gdjs.mainCode.GDtimesupObjects2.length = 0;
gdjs.mainCode.GDtimesupObjects3.length = 0;
gdjs.mainCode.GDtimesupObjects4.length = 0;
gdjs.mainCode.GDtimesupObjects5.length = 0;
gdjs.mainCode.GDconfettiObjects1.length = 0;
gdjs.mainCode.GDconfettiObjects2.length = 0;
gdjs.mainCode.GDconfettiObjects3.length = 0;
gdjs.mainCode.GDconfettiObjects4.length = 0;
gdjs.mainCode.GDconfettiObjects5.length = 0;
gdjs.mainCode.GDexploObjects1.length = 0;
gdjs.mainCode.GDexploObjects2.length = 0;
gdjs.mainCode.GDexploObjects3.length = 0;
gdjs.mainCode.GDexploObjects4.length = 0;
gdjs.mainCode.GDexploObjects5.length = 0;
gdjs.mainCode.GDNewSpriteObjects1.length = 0;
gdjs.mainCode.GDNewSpriteObjects2.length = 0;
gdjs.mainCode.GDNewSpriteObjects3.length = 0;
gdjs.mainCode.GDNewSpriteObjects4.length = 0;
gdjs.mainCode.GDNewSpriteObjects5.length = 0;
gdjs.mainCode.GDStoneObjects1.length = 0;
gdjs.mainCode.GDStoneObjects2.length = 0;
gdjs.mainCode.GDStoneObjects3.length = 0;
gdjs.mainCode.GDStoneObjects4.length = 0;
gdjs.mainCode.GDStoneObjects5.length = 0;
gdjs.mainCode.GDStoneleftObjects1.length = 0;
gdjs.mainCode.GDStoneleftObjects2.length = 0;
gdjs.mainCode.GDStoneleftObjects3.length = 0;
gdjs.mainCode.GDStoneleftObjects4.length = 0;
gdjs.mainCode.GDStoneleftObjects5.length = 0;
gdjs.mainCode.GDStonerightObjects1.length = 0;
gdjs.mainCode.GDStonerightObjects2.length = 0;
gdjs.mainCode.GDStonerightObjects3.length = 0;
gdjs.mainCode.GDStonerightObjects4.length = 0;
gdjs.mainCode.GDStonerightObjects5.length = 0;
gdjs.mainCode.GDswordObjects1.length = 0;
gdjs.mainCode.GDswordObjects2.length = 0;
gdjs.mainCode.GDswordObjects3.length = 0;
gdjs.mainCode.GDswordObjects4.length = 0;
gdjs.mainCode.GDswordObjects5.length = 0;
gdjs.mainCode.GDBlackSpaceObjects1.length = 0;
gdjs.mainCode.GDBlackSpaceObjects2.length = 0;
gdjs.mainCode.GDBlackSpaceObjects3.length = 0;
gdjs.mainCode.GDBlackSpaceObjects4.length = 0;
gdjs.mainCode.GDBlackSpaceObjects5.length = 0;
gdjs.mainCode.GDRedExplosionObjects1.length = 0;
gdjs.mainCode.GDRedExplosionObjects2.length = 0;
gdjs.mainCode.GDRedExplosionObjects3.length = 0;
gdjs.mainCode.GDRedExplosionObjects4.length = 0;
gdjs.mainCode.GDRedExplosionObjects5.length = 0;
gdjs.mainCode.GDStoneNophyObjects1.length = 0;
gdjs.mainCode.GDStoneNophyObjects2.length = 0;
gdjs.mainCode.GDStoneNophyObjects3.length = 0;
gdjs.mainCode.GDStoneNophyObjects4.length = 0;
gdjs.mainCode.GDStoneNophyObjects5.length = 0;
gdjs.mainCode.GDscoretxtObjects1.length = 0;
gdjs.mainCode.GDscoretxtObjects2.length = 0;
gdjs.mainCode.GDscoretxtObjects3.length = 0;
gdjs.mainCode.GDscoretxtObjects4.length = 0;
gdjs.mainCode.GDscoretxtObjects5.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
