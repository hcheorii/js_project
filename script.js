const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
    let now = new Date();
    let Year = padZero(now.getFullYear());
    let Month = padZero(now.getMonth() + 1);
    let Date = padZero(now.getDate());
    let Hour = padZero(now.getHours());
    let Minute = padZero(now.getMinutes());
    let Second = padZero(now.getSeconds());

    todayDiv.textContent = `${Year}년 ${Month}월 ${Date}일`;
    timeDiv.textContent = `${Hour}시 ${Minute}분 ${Second}초`;
}

function padZero(data) {
    return data < 10 ? `0${data}` : data;
}

getTime();
setInterval(getTime, 1000);
