var TestWords = `brave trouble concern know cry property fist page mixture lover insist workshop close opinion recruit mix qualify head field possibility claim confine forecast wing liberal disagreement tumble handy lifestyle army bomber reproduction direction dine break exceed pony revolutionary fur rebel announcement prey fascinate debut enhance devote roll expect death similar snuggle edition divide need crime possible diet compartment researcher investment dimension thumb relate roof provincial auction bedroom achieve account disaster stop zone quarter banner bomber galaxy admiration rock slow philosophy constant night ideology differ glory responsible bench great drop initiative rocket community study hostility director compose screen grain evolution`;
// استفاده میکنم RegEX من برای اینکه این کلامات را تک تک در یک آرایه قرار بدم اینجا از 
TestWords = TestWords.match(/(\w+)/g);
const MainContainer = document.getElementById("main__container")
const StartBtn = document.getElementById("start__button")
const TestCountainerWords = document.getElementById("test__countainer__words")
const WordInput = document.getElementById("word__input");
const RemainTimerContainer = document.querySelector(".test__countainer--timer");
const RemaindTimer = document.getElementById("show__remaind__time");
const RemainTimerMin = document.getElementById("show__remaind__time--minute");
const RemainTimerSec = document.getElementById("show__remaind__time--second");
const RestartBtn = document.getElementById("Restart__button");
const CountDownContainer = document.getElementById("CountDown__container")
const CountDownContainerText = document.getElementById("CountDown__container--text");
const TimesUpMessage = document.getElementById("Times__Up__message");
const LastUserResult = document.querySelector(".Last__user__result");
const LastUserResultAnimation = document.querySelector(".Last__user__result--animation");
const LastUserResultDatas = document.querySelector(".Last__user__result--datas");
const UserTypeScore = document.getElementById("Last__user__result--usertypescore");
const bubbleNum1 = document.querySelector(".bubble__num--1");
const bubbleNum2 = document.querySelector(".bubble__num--2");
const bubbleNum3 = document.querySelector(".bubble__num--3");
const bubbleNum4 = document.querySelector(".bubble__num--4");
const bubbleNum5 = document.querySelector(".bubble__num--5");
const ResultContainer = document.querySelector(".result__container");
const ClearHistoryBtn = document.getElementById("ClearHistory");
const SelectedTimeBadge = document.getElementById("SelectedTimeBadge");
const SelectingTimePart = document.querySelector(".selecting__time__part")
let CurrentWord;
var TheTimeInTimer;
var UserScore = 0;
var UserScoreHistory;
var SelectedMinute;
window.addEventListener("load" , () => {
    UserScoreHistory = localStorage.getItem("UserScoreHistory");
    if(UserScoreHistory == null) return;
    MakingDataReadyAndShowResult();
});
ClearHistoryBtn.addEventListener("click" , () => {
    localStorage.clear();
    ResultContainer.innerHTML = "";
})
// این فانکشن برای این است که تست تایپ بعد از استارت شروع شود
StartBtn.addEventListener("click" , StartTypeTest);
RestartBtn.addEventListener("click" , RestartTypeTest);
function StartTypeTest(){
    RemaindTimer.innerHTML = `0${SelectedMinute}:00`;
    UserScore = 0;
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
    AddTheClass(SelectingTimePart , "d-none");
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
    var SelectedMinute_Clone = SelectedMinute - 1;
    var SecondContainer = 59;
    // 1 2 3 5
    TheTimeInTimer = setInterval(() => {
        // برای تبدیل اعداد زیر ده ثانیه به 09 یا 08 یا 07
        if(SecondContainer < 10){
            RemaindTimer.innerHTML = `0${SelectedMinute_Clone}:0${SecondContainer}`;  
        }else{
            RemaindTimer.innerHTML = `0${SelectedMinute_Clone}:${SecondContainer}`;
        }
        SecondContainer--
        if(SecondContainer == -1 && SelectedMinute_Clone != 0){
            SelectedMinute_Clone--
            SecondContainer = 59;
        }
        else if(SecondContainer == -1 && SelectedMinute_Clone == 0){
            // در اینجا برای اینکه 00 در تایمر من نمایش داده شود من باید از عدد منفی یک استفاده میکردم
            var UserScoreWithWPM = Math.ceil(UserScore / SelectedMinute);
            clearTimeout(TheTimeInTimer);
            AddTheClass(TestCountainerWords , "d-none");
            RemoveTheClass(TimesUpMessage , "d-none");
            RemoveTheClass(LastUserResult , "d-none");
            UserTypeScore.innerHTML = UserScoreWithWPM;
            TheProcessOfTypeTest(UserScoreWithWPM)
            setTimeout(() => {
                AddTheClass(LastUserResultAnimation , "d-none");
                RemoveTheClass(LastUserResultDatas , "d-none");
            }, 1300);
            SetDatasInStorage(UserScoreWithWPM);
            MakingDataReadyAndShowResult();
        }
    }, 30);
}
// این فانکشن برای ری استارت است اما قبل از اینکه دوباره از فانکشن استار تایپ تست استفاده کنم باید مقادیر اولیه هر المان را به آن برگردانم
function RestartTypeTest(){
    CountDownContainerText.innerHTML = "Ready!"; 
    RemaindTimer.innerHTML = "01:00";
    AddTheClass(TimesUpMessage , "d-none");
    clearInterval(TheTimeInTimer);
    StartTypeTest();
    RemoveTheClass(RemaindTimer , "invisible");
    AddTheClass(LastUserResult , "d-none");
    AddTheClass(LastUserResultDatas , "d-none");
    RemoveTheClass(LastUserResultAnimation , "d-none");
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
        // برای اینکه وقتی کاربرد اینپوت را خالی میکند کلاس درست بودن از آن حذف شود
        RemoveTheClass(CurrentWord , "Its__True")
    }
    if(CurrentWord.innerHTML === CurrentValue){
        // این فانکشن در صورت درست بودن کلمه را رد میکند
        SelectNewWord(CurrentWord);
        // حساب کننده نمره کاربر
        CalcTheScore(CurrentWord.innerHTML);
        // بعد از رد شدن کلمه ما نیاز داریم که اینپوت دوباره تیمز شود
        ClearInput(TypeTestInput);
    }
    // این شرط برای زمانی است که کاربرد کلمه را اشتباه وارد کرده و یا کامل وارد نکرده
    // اما دکمه اسپیس را میزند و به کلمه بعد میرود و نمره کلمه را نیز از دست میدهد
    if(CurrentValue[CurrentValue.length - 1] == " "){
        ClearInput(TypeTestInput);
        SelectNewWord(CurrentWord);
    }
}
// این فانکشن در صورت درست بودن کلمه را رد میکند
function SelectNewWord(CurrentWord){
    AddTheClass(CurrentWord , "d-none");
    RemoveTheClass(CurrentWord , "current__word");
    var NextWord = CurrentWord.nextElementSibling;
    AddTheClass(NextWord , "current__word");
}
// این فانکشن هر بار که صدا زده میشود به نمره کاربرد یک عدد اضافه میکند
function CalcTheScore(CurrentWord){
    UserScore++;
    if(CurrentWord.length < 10) return;
    UserScore++;
    // این شرط به کلمات طولانی تر از ده یک امتیاز اضافه میدهد
}
// با این فانکشن روی چراغ های از حرفه ای تا ضعیف نسبت به سرعت تایپ کنترل داریم
function TheProcessOfTypeTest(UserScoreWithWPM){
    if(UserScoreWithWPM <= 10) return;
    AddTheClass(bubbleNum1 , "On__bubble");
    if(UserScoreWithWPM < 30) return;
    AddTheClass(bubbleNum2 , "On__bubble");
    if(UserScoreWithWPM < 50) return;
    AddTheClass(bubbleNum3 , "On__bubble");
    if(UserScoreWithWPM < 70) return;
    AddTheClass(bubbleNum4 , "On__bubble");
    if(UserScoreWithWPM < 90) return;
    AddTheClass(bubbleNum5 , "On__bubble");
}
// با این فانکشن مقادیر را در یوزر اسکور ذخیره میکنیم
function SetDatasInStorage(UserScoreWithWPM){
    function CheckTheNum(Num){
        if(String(Num).length < 2){
            Num = "0" + Num;
        }
        return Num;
    }
    let Preset = new Date();
    let FullDate = `${CheckTheNum(Preset.getDate())}/${CheckTheNum(Preset.getMonth())}/${Preset.getFullYear()}`;
    var LocalStorageData = (localStorage.getItem("UserScoreHistory") == null) ? "" : localStorage.getItem("UserScoreHistory");
    LocalStorageData = LocalStorageData + `{"UserScore":"${UserScoreWithWPM}","Time":"${CheckTheNum(Preset.getHours())}:${CheckTheNum(Preset.getMinutes())}","FullDate":"${FullDate}"},`;
    localStorage.setItem("UserScoreHistory" , LocalStorageData);
}
function MakingDataReadyAndShowResult(){
    UserScoreHistory = localStorage.getItem("UserScoreHistory");
    // در اینجا من باید آخرین , را از آخر این استرینح حذف کنم که با جسون به مشکل نخورم
    if(typeof(UserScoreHistory) == "string"){
        UserScoreHistory = `[${UserScoreHistory.slice(0 , UserScoreHistory.length - 1)}]`;
        UserScoreHistory = JSON.parse(UserScoreHistory);
    }
    FillResultPart(UserScoreHistory);
}
// با این فانکشن به تعداد تاریخچه ای که داریم برنامه برای ما آکاردیون ایجاد میکند
function FillResultPart(UserScoreHistory){  
    var ContainerAll = `<div class="accordion" id="Score__history__Result">`;
    for(var i = 0; i < UserScoreHistory.length; i++){
        ContainerAll += `
        <div class="accordion-item" id="Header__num${i + 1}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#btn__num__${i + 1}" aria-expanded="${(i == 0) ? true : false}" aria-controls="btn__num__${i + 1}">
                Score : ${UserScoreHistory[i].UserScore}
            </button>
        </div>
        <div id="btn__num__${i + 1}" class="accordion-collapse collapse" aria-labelledby="Header__num${i + 1}" data-bs-parent="#Score__history__Result">
            <div class="accordion-body">
                <span class="Time__container">
                    Time : ${UserScoreHistory[i].Time}
                <span>
                <hr>
                <span class="FullDate__container">
                    Date : ${UserScoreHistory[i].FullDate}
                </span>
            </div>
        </div>
        `;
    }
    ContainerAll += `</div>`;
    ResultContainer.innerHTML += ContainerAll;
}
function SelectTimeForTest(element){
    SelectedMinute = element.innerText.match(/^(\d+)/g)[0];
    // با این کار من عددی را که هر المان رویش نوشته شده دریافت میکنم
    SelectedTimeBadge.innerHTML = `${SelectedMinute} Min`;
    RemaindTimer.innerHTML = `0${SelectedMinute}:00`
    StartBtn.disabled = false;
}