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
let CurrentWord;
var TheTimeInTimer;

// این فانکشن برای این است که تست تایپ بعد از استارت شروع شود
StartBtn.addEventListener("click" , StartTypeTest);
RestartBtn.addEventListener("click" , RestartTypeTest);
function StartTypeTest(){
    AddTheClass(MainContainer , "d-none");
    RemoveTheClass(CountDownContainer , "d-none");
    AddTheClass(StartBtn , "d-none");
    RemoveTheClass(TestCountainerWords , "d-none");
    RemoveTheClass(CountDownContainer , "d-none");
    RestartBtn.disabled = false;
    StartCountingDown()
    PutWordsInContainer(TestWords);
    RemoveTheClass(RemaindTimer , "invisible");
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
// فانکشنی که بتوانم با آن در آن واحد هم کلاسی را حذف و هم کلاسی را اضافه کنم
function ReplaceTheClass(element , NewClass , OldClass){
    AddTheClass(element , NewClass);
    RemoveTheClass(element , OldClass);
}
// این فانکشن شامل اتقاقاتی هست که قبل از شروع تست رخ میدهد مثل شروع شدن شمارش معکوس و آماده شدن تست هم جزیی از کار این فانکشن است
function StartCountingDown(){
    CountDownContainerText.style.animation = "PulseAnimation 1s ease-in infinite";
    setTimeout(() => {
        CountDownContainerText.innerHTML = 3;
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
        if(i == 0){
            RandomWords += `<span class="Test__words d-inline-block current__word">${WordArray[i]} </span>` ;
        }else{
            RandomWords += `<span class="Test__words d-inline-block">${WordArray[i]} </span>` ;
        }
    }
    TestCountainerWords.innerHTML = RandomWords;
}
// فانکشنی برای شروع کار تایمر
function StartingTimer(){
    var SecondContainer = 59;
    TheTimeInTimer = setInterval(() => {
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
            /********************removing the word container******************/ 
            /*************** giving score function ******************/
            /********************* adding the score in top of the elements ************************/
            /******************************adding score to the score container****************************/
        }
    }, 1000);
}
// این فانکشن برای ری استارت است اما قبل از اینکه دوباره از فانکشن استار تایپ تست استفاده کنم باید مقادیر اولیه هر المان را به آن برگردانم
function RestartTypeTest(){
    CountDownContainerText.innerHTML = "Ready!"; 
    RemaindTimer.innerHTML = "01:00";
    clearInterval(TheTimeInTimer);
    StartTypeTest();
    RemoveTheClass(RemaindTimer , "invisible");
}
WordInput.addEventListener("input" , CheckTheSituation)
// من با این فانکشن کاری کردم که تایپ کردن در اینپوت خارج از تست غیر ممکن شود
function CheckTheSituation(TypeTestInput){
    if(TestCountainerWords.classList.contains("d-none")){
        ClearInput(TypeTestInput)
    }else{
        CheckWords(TypeTestInput)
    }
}
function ClearInput(TypeTestInput){
    TypeTestInput.target.value = "";
}
function CheckWords(TypeTestInput){
    var CurrentValue = TypeTestInput.target.value;
    CurrentWord = document.querySelector(".current__word");
    if(CurrentWord.innerHTML.startsWith(CurrentValue)){
        ReplaceTheClass(CurrentWord , "Its__True" , "Its__False");
    }else{
        ReplaceTheClass(CurrentWord , "Its__False" , "Its__True");
    }
    if(CurrentValue == ""){
        RemoveTheClass(CurrentWord , "Its__True")
    }
    if(CurrentWord.innerHTML === CurrentValue){
        SelectNewWord(CurrentWord);
        ClearInput(TypeTestInput);
    }
}
function SelectNewWord(CurrentWord){
    AddTheClass(CurrentWord , "d-none");
    RemoveTheClass(CurrentWord , "current__word");
    var NextElement = CurrentWord.nextElementSibling;
    AddTheClass(NextElement , "current__word");
    CalcTheScore()
}