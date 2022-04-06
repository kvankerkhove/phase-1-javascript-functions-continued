function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

mondayWork();
mondayWork('walk my dog');

function wrapAdjective(visualFlair = "*") {
    return function (adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");