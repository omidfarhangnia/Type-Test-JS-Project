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
const CountDownContainerText = document.getElementById("CountDown__container--text");

// این فانکشن برای این است که تست تایپ بعد از استارت شروع شود
StartBtn.addEventListener("click" , StartTypeTest)
function StartTypeTest(){
    AddTheClass(MainContainer , "d-none");
    RemoveTheClass(CountDownContainer , "d-none");
    AddTheClass(StartBtn , "d-none");
    RemoveTheClass(TestCountainerWords , "d-none");
    RemoveTheClass(CountDownContainer , "d-none");
    RestartBtn.disabled = false;
    StartCountingDown()
    PutWordsInContainer(TestWords);
    HideTimerText();
    setTimeout(StartingTimer, 4000);
}
// این فانکشن برای این است که با یک کلیک تایمر دیده نمیشود اما همچنان تایمر به کارش ادامه میدهد
RemainTimerContainer.addEventListener("click" , HideTimerText)
function HideTimerText(){
    if(RemaindTimer.classList.contains("invisible")){
        RemoveTheClass(RemaindTimer , "invisible")
    }
    else{
        AddTheClass(RemaindTimer , "invisible")
    }
}
// چون در جاهای زیادی نیاز بود که کلاسی را حذف کنم بخاطر همین این فانکشن را برای جلوگیری از تکرار کد ساختم
function RemoveTheClass(element , className){
    element.classList.remove(className);
}
// چون در جاهای زیادی نیاز بود که کلاسی را اضافه کنم بخاطر همین این فانکشن را برای جلوگیری از تکرار کد ساختم
function AddTheClass(element , className){
    element.classList.add(className);
}
// این فانکشن شامل اتقاقاتی هست که قبل از شروع تست رخ میدهد مثل شروع شدن شمارش معکوس و آماده شدن تست هم جزیی از کار این فانکشن است
function StartCountingDown(){
    setTimeout(() => {
        CountDownContainerText.innerHTML = 3;
        CountDownContainerText.style.animation = "PulseAnimation 1s ease-in infinite";
    }, 1000);
    setTimeout(() => {
        CountDownContainerText.innerHTML = 2;
    }, 2000);
    setTimeout(() => {
        CountDownContainerText.innerHTML = 1;
    }, 3000);
    setTimeout(() => {
        AddTheClass(CountDownContainer , "d-none");
        RemoveTheClass(MainContainer , "d-none");
    }, 4000);
}
// این فانکشن برای گذاشتن کلامت در کانتینر آن ها است
function PutWordsInContainer(WordArray){
    var RandomWords = "";
    for(var i = 0; i < WordArray.length; i++){
        RandomWords += `<span>${WordArray[i]} </span>` ;
    }
    TestCountainerWords.innerHTML = RandomWords;
}
function StartingTimer(){
    var SecondContainer = 59;
    var TheTimeInTimer = setInterval(() => {
        // برای تبدیل اعداد زیر ده ثانیه به 09 یا 08 یا 07
        if(SecondContainer < 10){
            RemaindTimer.innerHTML = `00:0${SecondContainer}`;  
        }else{
            RemaindTimer.innerHTML = `00:${SecondContainer}`;
        }
        SecondContainer--
        if(SecondContainer == -1){
            // در اینجا برای اینکه 00 در تایمر من نمایش داده شود من باید از عدد منفی یک استفاده میکردم
            clearTimeout(TheTimeInTimer);
        }
    }, 1000);
}