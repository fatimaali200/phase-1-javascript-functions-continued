//Define a Function Using Function Declaration
function saturdayFun(activity="roller-skate"){
    
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("play football");

//Define Function Expression
let mondayWork=function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
};
mondayWork();
mondayWork("go to park");

//wrapAdjective
function wrapAdjective(outerString="*") {
    const innerFunction = function (innerString="*") {
      return `You are ${outerString}${innerString}${outerString}!`;
    };
    return innerFunction;
}
wrapAdjective();
wrapAdjective("%")("a dedicated programmer"); 