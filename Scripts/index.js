var today = moment();
var btnSubmit = document.getElementById("btnSubmit");
var tbDate = document.getElementById("tbDate");
var tbEventName = document.getElementById("tbEventName");
var tbTime = document.getElementById("tbTime");
var form = document.getElementById("form");
var countDownHeader = document.getElementById("countDownHeader");
var headerEvent = document.getElementById("headerEvent");
var card = document.getElementById("card");
var run = false;
var end = today;

card.style.display = "none";

window.onload = function () {
    init();
}

var init = function () {
    form.reset();
    tbDate.setAttribute("min", today.format("YYYY-MM-DD"));
}

var setCountdown = function () {
    end = tbDate.value;
    var time = tbTime.value.length === 0 ? "00:00" : tbTime.value;
    end = end + " " + time
    run = true;
    headerEvent.innerHTML = tbEventName.value;
    card.style.display = "block";

}

btnSubmit.onclick = function () {
    form.reportValidity();
    if (form.checkValidity()) {
        setCountdown();
        init();
    }
}

setInterval(function () {
    if (run) {
        countDownHeader.innerHTML = countdownFunc();
    }
});

var countdownFunc = function () {
    var countdownDate = moment(end);
    var diffDuration = moment.duration((countdownDate.diff(moment())));
    var days = diffDuration.days() <= 0 ? 0 : diffDuration.days();
    var hours = diffDuration.hours() <= 0 ? 0 : diffDuration.hours();
    var minutes = diffDuration.minutes() <= 0 ? 0 : diffDuration.minutes();
    var seconds = diffDuration.seconds() <= 0 ? 0 : diffDuration.seconds();

    return days + "D:" + hours + "h:" + minutes + "m:" + seconds + "s";
}
