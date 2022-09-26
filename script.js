var TestWords = `brave trouble concern know cry property fist page mixture lover insist workshop close opinion recruit mix qualify head field possibility claim confine forecast wing liberal disagreement tumble handy lifestyle army bomber reproduction direction dine break exceed pony revolutionary fur rebel announcement prey fascinate debut enhance devote roll expect death similar snuggle edition divide need crime possible diet compartment researcher investment dimension thumb relate roof provincial auction bedroom achieve account disaster stop zone quarter banner bomber galaxy admiration rock slow philosophy constant night ideology differ glory responsible bench great drop initiative rocket community study hostility director compose screen grain evolution`;
// استفاده میکنم RegEX من برای اینکه این کلامات را تک تک در یک آرایه قرار بدم اینجا از 
TestWords = TestWords.match(/(\w+)/g);

const MainContainer = document.getElementById("main__container")
const StartBtn = document.getElementById("start__button")
const TestCountainerWords = document.getElementById("test__countainer__words")
const WordInput = document.getElementById("word__input");
const RemainTimerContainer = document.querySelector(".test__countainer--timer");
const RemaindTimer = document.getElementById("show__remaind__time");
const RestartBtn = document.getElementById("Restart__button");
const CountDownContainer = document.getElementById("CountDown__container")

// این فانکشن برای این است که تست تایپ بعد از استارت شروع شود
StartBtn.addEventListener("click" , StartTypeTest)
function StartTypeTest(){
    AddTheClass(MainContainer , "d-none");
    RemoveTheClass(CountDownContainer , "d-none")
    AddTheClass(StartBtn , "d-none");
    RemoveTheClass(TestCountainerWords , "d-none");
    RemoveTheClass(CountDownContainer , "d-none");
}
// این فانکشن برای این است که با یک کلیک تایمر قطع شود
RemainTimerContainer.addEventListener("click" , HideTimerText)
function HideTimerText(){
    if(RemaindTimer.classList.contains("invisible")){
        RemoveTheClass(RemaindTimer , "invisible")
    }
    else{
        AddTheClass(RemaindTimer , "invisible")
    }
}
function RemoveTheClass(element , className){
    element.classList.remove(className);
}
function AddTheClass(element , className){
    element.classList.add(className);
}
function ChangeTheClass(element , OldClass , NewClass){
    RemoveTheClass(element , OldClass)
    AddTheClass(element , NewClass)
}