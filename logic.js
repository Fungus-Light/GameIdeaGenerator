function GetRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function SetContent(content){
    document.getElementById("idea_content").innerText=content;
}

function GetTheme(){
    return theme[GetRandom(0,theme.length-1)]
}

function GetCharactor(){
    let num=amount[GetRandom(0,amount.length-1)];
    let cha=character[GetRandom(0,character.length-1)];
    let des=character_description[GetRandom(0,character_description.length-1)];
    return num+des+cha;
}

function GetItem(){
    let num=amount[GetRandom(0,amount.length-1)];
    let ite=items[GetRandom(0,items.length-1)];
    return num+ite; 
}

function GetGoal(){
    let act=actions[GetRandom(0,actions.length-1)];
    let select=GetRandom(0,1);
    if(select==0){
        return act+GetItem();
    }else{
        return act+GetCharactor();
    }
}

function GetPlace(){
    return place[GetRandom(0,place.length-1)];
}

function GetMood(){
    return mood[GetRandom(0,mood.length-1)];
}

function GetType(){
    return type[GetRandom(0,type.length-1)];
}

function GetArt(){
    return art[GetRandom(0,art.length-1)];
}

function GetImportance(){
    return importance[GetRandom(0,importance.length-1)];
}

function Generate(){
    let template=GetRandom(0,3);
    switch(template){
        case 0:
            return '一款发生在'+GetPlace()+'的'+GetMood()+GetType()+'，主题是'+GetTheme()+'，你将要演扮演'+GetCharactor()+GetGoal();
        case 1:
            return '一款拥有'+GetArt()+'画面的'+GetType()+'，为了展现'+GetTheme()+'，以及传达了'+GetMood()+'的情绪';
        case 2:
            return '发生在'+GetPlace()+'，'+GetCharactor()+GetGoal()+'的讲述关于'+GetTheme()+'的'+GetType();
        case 3:
            return '一款注重于'+GetImportance()+'的'+GetMood()+GetType()+'，游戏的主题是'+GetTheme();
        default:
            return '一款发生在'+GetPlace()+'的'+GetMood()+GetType()+'，主题是'+GetTheme()+'，你将要演扮演'+GetCharactor()+GetGoal();
    }
}

function Click(){
    SetContent(Generate());
}