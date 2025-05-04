gdjs.infoCode = {};
gdjs.infoCode.localVariables = [];
gdjs.infoCode.GDnameObjects1_1final = [];

gdjs.infoCode.GDnameObjects1= [];
gdjs.infoCode.GDnameObjects2= [];
gdjs.infoCode.GDnameObjects3= [];
gdjs.infoCode.GDmenubuttonObjects1= [];
gdjs.infoCode.GDmenubuttonObjects2= [];
gdjs.infoCode.GDmenubuttonObjects3= [];
gdjs.infoCode.GDdatatypecheckObjects1= [];
gdjs.infoCode.GDdatatypecheckObjects2= [];
gdjs.infoCode.GDdatatypecheckObjects3= [];
gdjs.infoCode.GDsubmitObjects1= [];
gdjs.infoCode.GDsubmitObjects2= [];
gdjs.infoCode.GDsubmitObjects3= [];
gdjs.infoCode.GDTBDObjects1= [];
gdjs.infoCode.GDTBDObjects2= [];
gdjs.infoCode.GDTBDObjects3= [];
gdjs.infoCode.GDStoneObjects1= [];
gdjs.infoCode.GDStoneObjects2= [];
gdjs.infoCode.GDStoneObjects3= [];
gdjs.infoCode.GDStoneleftObjects1= [];
gdjs.infoCode.GDStoneleftObjects2= [];
gdjs.infoCode.GDStoneleftObjects3= [];
gdjs.infoCode.GDStonerightObjects1= [];
gdjs.infoCode.GDStonerightObjects2= [];
gdjs.infoCode.GDStonerightObjects3= [];
gdjs.infoCode.GDswordObjects1= [];
gdjs.infoCode.GDswordObjects2= [];
gdjs.infoCode.GDswordObjects3= [];
gdjs.infoCode.GDBlackSpaceObjects1= [];
gdjs.infoCode.GDBlackSpaceObjects2= [];
gdjs.infoCode.GDBlackSpaceObjects3= [];
gdjs.infoCode.GDRedExplosionObjects1= [];
gdjs.infoCode.GDRedExplosionObjects2= [];
gdjs.infoCode.GDRedExplosionObjects3= [];
gdjs.infoCode.GDStoneNophyObjects1= [];
gdjs.infoCode.GDStoneNophyObjects2= [];
gdjs.infoCode.GDStoneNophyObjects3= [];
gdjs.infoCode.GDscoretxtObjects1= [];
gdjs.infoCode.GDscoretxtObjects2= [];
gdjs.infoCode.GDscoretxtObjects3= [];


gdjs.infoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.infoCode.GDnameObjects1, gdjs.infoCode.GDnameObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.infoCode.GDnameObjects2.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects2[0].getBehavior("Text").getText())) > 12);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.infoCode.GDdatatypecheckObjects1, gdjs.infoCode.GDdatatypecheckObjects2);

gdjs.copyArray(gdjs.infoCode.GDsubmitObjects1, gdjs.infoCode.GDsubmitObjects2);

{for(var i = 0, len = gdjs.infoCode.GDdatatypecheckObjects2.length ;i < len;++i) {
    gdjs.infoCode.GDdatatypecheckObjects2[i].getBehavior("Text").setText("12 characters only.");
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects2.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects2[i].setColor("71;71;71");
}
}}

}


{

/* Reuse gdjs.infoCode.GDnameObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InputValidation__lettersandnums.func(runtimeScene, (( gdjs.infoCode.GDnameObjects1.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.infoCode.GDdatatypecheckObjects1 */
/* Reuse gdjs.infoCode.GDsubmitObjects1 */
{for(var i = 0, len = gdjs.infoCode.GDdatatypecheckObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDdatatypecheckObjects1[i].getBehavior("Text").setText("Letters and numbers only.");
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].setColor("71;71;71");
}
}}

}


};gdjs.infoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("menubutton"), gdjs.infoCode.GDmenubuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("scoretxt"), gdjs.infoCode.GDscoretxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("submit"), gdjs.infoCode.GDsubmitObjects1);
{for(var i = 0, len = gdjs.infoCode.GDscoretxtObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDscoretxtObjects1[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.infoCode.GDscoretxtObjects1[i].getWidth()) / 2),120);
}
}{for(var i = 0, len = gdjs.infoCode.GDscoretxtObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDscoretxtObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.infoCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDnameObjects1[i].setCenterPositionInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2),200);
}
}{for(var i = 0, len = gdjs.infoCode.GDmenubuttonObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDmenubuttonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menubutton"), gdjs.infoCode.GDmenubuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.infoCode.GDmenubuttonObjects1.length;i<l;++i) {
    if ( gdjs.infoCode.GDmenubuttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.infoCode.GDmenubuttonObjects1[k] = gdjs.infoCode.GDmenubuttonObjects1[i];
        ++k;
    }
}
gdjs.infoCode.GDmenubuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("submit"), gdjs.infoCode.GDsubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.infoCode.GDsubmitObjects1.length;i<l;++i) {
    if ( gdjs.infoCode.GDsubmitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.infoCode.GDsubmitObjects1[k] = gdjs.infoCode.GDsubmitObjects1[i];
        ++k;
    }
}
gdjs.infoCode.GDsubmitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("score").setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("name").setString((( gdjs.infoCode.GDnameObjects1.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.firebaseTools.firestore.addDocument("leaderboard", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.infoCode.GDnameObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.infoCode.GDnameObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects2);
isConditionTrue_1 = !(gdjs.evtsExt__InputValidation__lettersandnums.func(runtimeScene, (( gdjs.infoCode.GDnameObjects2.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects2[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.infoCode.GDnameObjects2.length; j < jLen ; ++j) {
        if ( gdjs.infoCode.GDnameObjects1_1final.indexOf(gdjs.infoCode.GDnameObjects2[j]) === -1 )
            gdjs.infoCode.GDnameObjects1_1final.push(gdjs.infoCode.GDnameObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.infoCode.GDnameObjects2.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects2[0].getBehavior("Text").getText())) > 12);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.infoCode.GDnameObjects2.length; j < jLen ; ++j) {
        if ( gdjs.infoCode.GDnameObjects1_1final.indexOf(gdjs.infoCode.GDnameObjects2[j]) === -1 )
            gdjs.infoCode.GDnameObjects1_1final.push(gdjs.infoCode.GDnameObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.infoCode.GDnameObjects1_1final, gdjs.infoCode.GDnameObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("datatypecheck"), gdjs.infoCode.GDdatatypecheckObjects1);
gdjs.copyArray(runtimeScene.getObjects("submit"), gdjs.infoCode.GDsubmitObjects1);
{for(var i = 0, len = gdjs.infoCode.GDdatatypecheckObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDdatatypecheckObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{ //Subevents
gdjs.infoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InputValidation__lettersandnums.func(runtimeScene, (( gdjs.infoCode.GDnameObjects1.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.infoCode.GDnameObjects1.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects1[0].getBehavior("Text").getText())) <= 12);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("datatypecheck"), gdjs.infoCode.GDdatatypecheckObjects1);
gdjs.copyArray(runtimeScene.getObjects("submit"), gdjs.infoCode.GDsubmitObjects1);
{for(var i = 0, len = gdjs.infoCode.GDdatatypecheckObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDdatatypecheckObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].activateBehavior("ButtonFSM", true);
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.infoCode.GDnameObjects1.length === 0 ) ? "" :gdjs.infoCode.GDnameObjects1[0].getBehavior("Text").getText())) <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("submit"), gdjs.infoCode.GDsubmitObjects1);
{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].setColor("71;71;71");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("datatypecheck"), gdjs.infoCode.GDdatatypecheckObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.infoCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("submit"), gdjs.infoCode.GDsubmitObjects1);
{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].setColor("71;71;71");
}
}{for(var i = 0, len = gdjs.infoCode.GDsubmitObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDsubmitObjects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.infoCode.GDdatatypecheckObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDdatatypecheckObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.infoCode.GDdatatypecheckObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDdatatypecheckObjects1[i].getBehavior("Text").setText("Submitted");
}
}{for(var i = 0, len = gdjs.infoCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.infoCode.GDnameObjects1[i].setReadOnly(true);
}
}}

}


};

gdjs.infoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.infoCode.GDnameObjects1.length = 0;
gdjs.infoCode.GDnameObjects2.length = 0;
gdjs.infoCode.GDnameObjects3.length = 0;
gdjs.infoCode.GDmenubuttonObjects1.length = 0;
gdjs.infoCode.GDmenubuttonObjects2.length = 0;
gdjs.infoCode.GDmenubuttonObjects3.length = 0;
gdjs.infoCode.GDdatatypecheckObjects1.length = 0;
gdjs.infoCode.GDdatatypecheckObjects2.length = 0;
gdjs.infoCode.GDdatatypecheckObjects3.length = 0;
gdjs.infoCode.GDsubmitObjects1.length = 0;
gdjs.infoCode.GDsubmitObjects2.length = 0;
gdjs.infoCode.GDsubmitObjects3.length = 0;
gdjs.infoCode.GDTBDObjects1.length = 0;
gdjs.infoCode.GDTBDObjects2.length = 0;
gdjs.infoCode.GDTBDObjects3.length = 0;
gdjs.infoCode.GDStoneObjects1.length = 0;
gdjs.infoCode.GDStoneObjects2.length = 0;
gdjs.infoCode.GDStoneObjects3.length = 0;
gdjs.infoCode.GDStoneleftObjects1.length = 0;
gdjs.infoCode.GDStoneleftObjects2.length = 0;
gdjs.infoCode.GDStoneleftObjects3.length = 0;
gdjs.infoCode.GDStonerightObjects1.length = 0;
gdjs.infoCode.GDStonerightObjects2.length = 0;
gdjs.infoCode.GDStonerightObjects3.length = 0;
gdjs.infoCode.GDswordObjects1.length = 0;
gdjs.infoCode.GDswordObjects2.length = 0;
gdjs.infoCode.GDswordObjects3.length = 0;
gdjs.infoCode.GDBlackSpaceObjects1.length = 0;
gdjs.infoCode.GDBlackSpaceObjects2.length = 0;
gdjs.infoCode.GDBlackSpaceObjects3.length = 0;
gdjs.infoCode.GDRedExplosionObjects1.length = 0;
gdjs.infoCode.GDRedExplosionObjects2.length = 0;
gdjs.infoCode.GDRedExplosionObjects3.length = 0;
gdjs.infoCode.GDStoneNophyObjects1.length = 0;
gdjs.infoCode.GDStoneNophyObjects2.length = 0;
gdjs.infoCode.GDStoneNophyObjects3.length = 0;
gdjs.infoCode.GDscoretxtObjects1.length = 0;
gdjs.infoCode.GDscoretxtObjects2.length = 0;
gdjs.infoCode.GDscoretxtObjects3.length = 0;

gdjs.infoCode.eventsList1(runtimeScene);
gdjs.infoCode.GDnameObjects1.length = 0;
gdjs.infoCode.GDnameObjects2.length = 0;
gdjs.infoCode.GDnameObjects3.length = 0;
gdjs.infoCode.GDmenubuttonObjects1.length = 0;
gdjs.infoCode.GDmenubuttonObjects2.length = 0;
gdjs.infoCode.GDmenubuttonObjects3.length = 0;
gdjs.infoCode.GDdatatypecheckObjects1.length = 0;
gdjs.infoCode.GDdatatypecheckObjects2.length = 0;
gdjs.infoCode.GDdatatypecheckObjects3.length = 0;
gdjs.infoCode.GDsubmitObjects1.length = 0;
gdjs.infoCode.GDsubmitObjects2.length = 0;
gdjs.infoCode.GDsubmitObjects3.length = 0;
gdjs.infoCode.GDTBDObjects1.length = 0;
gdjs.infoCode.GDTBDObjects2.length = 0;
gdjs.infoCode.GDTBDObjects3.length = 0;
gdjs.infoCode.GDStoneObjects1.length = 0;
gdjs.infoCode.GDStoneObjects2.length = 0;
gdjs.infoCode.GDStoneObjects3.length = 0;
gdjs.infoCode.GDStoneleftObjects1.length = 0;
gdjs.infoCode.GDStoneleftObjects2.length = 0;
gdjs.infoCode.GDStoneleftObjects3.length = 0;
gdjs.infoCode.GDStonerightObjects1.length = 0;
gdjs.infoCode.GDStonerightObjects2.length = 0;
gdjs.infoCode.GDStonerightObjects3.length = 0;
gdjs.infoCode.GDswordObjects1.length = 0;
gdjs.infoCode.GDswordObjects2.length = 0;
gdjs.infoCode.GDswordObjects3.length = 0;
gdjs.infoCode.GDBlackSpaceObjects1.length = 0;
gdjs.infoCode.GDBlackSpaceObjects2.length = 0;
gdjs.infoCode.GDBlackSpaceObjects3.length = 0;
gdjs.infoCode.GDRedExplosionObjects1.length = 0;
gdjs.infoCode.GDRedExplosionObjects2.length = 0;
gdjs.infoCode.GDRedExplosionObjects3.length = 0;
gdjs.infoCode.GDStoneNophyObjects1.length = 0;
gdjs.infoCode.GDStoneNophyObjects2.length = 0;
gdjs.infoCode.GDStoneNophyObjects3.length = 0;
gdjs.infoCode.GDscoretxtObjects1.length = 0;
gdjs.infoCode.GDscoretxtObjects2.length = 0;
gdjs.infoCode.GDscoretxtObjects3.length = 0;


return;

}

gdjs['infoCode'] = gdjs.infoCode;
