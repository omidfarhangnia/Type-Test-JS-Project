var TestWords = `brave trouble concern know cry property fist page mixture lover insist workshop close opinion recruit mix qualify head field possibility claim confine forecast wing liberal disagreement tumble handy lifestyle army bomber reproduction direction dine break exceed pony revolutionary fur rebel announcement prey fascinate debut enhance devote roll expect death similar snuggle edition divide need crime possible diet compartment researcher investment dimension thumb relate roof provincial auction bedroom achieve account disaster stop zone quarter banner bomber galaxy admiration rock slow philosophy constant night ideology differ glory responsible bench great drop initiative rocket community study hostility director compose screen grain evolution`;
// استفاده میکنم RegEX من برای اینکه این کلامات را تک تک در یک آرایه قرار بدم اینجا از 
TestWords = TestWords.match(/(\w+)/g);

const TestCountainerWords = document.getElementById("test__countainer__words")
const WordInput = document.getElementById("word__input");
const RemainTimerCountainer = document.querySelector(".test__countainer--timer");
const RemaindTimer = document.getElementById("show__remaind__time");
const RestartBtn = document.getElementById("Restart__button");

// این فانکشن برای این است که با یک کلیک تایمر قطع شود

RemainTimerCountainer.addEventListener("click" , HideTimerText)
function HideTimerText(){
    if(RemaindTimer.classList.contains("invisible")){
        RemaindTimer.classList.remove("invisible");
    }
    else{
        RemaindTimer.classList.add("invisible");
    }
}