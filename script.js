

let btn = document.getElementById('button');

function getTime() {
    let hours = document.getElementById('hours');
    let mins = document.getElementById('mins');
    let secs = document.getElementById('secs');
    let amPm = document.getElementById('ap');

    let date = new Date();
    let hrs = date.getHours();
    let ms = date.getMinutes();
    let ss = date.getSeconds();
    amPm.innerHTML = (hrs >= 12) ? 'PM' : 'AM'
    hours.innerHTML = hrs;
    mins.innerHTML = ms;
    secs.innerHTML = ss;

}

setInterval(getTime,1000);


function Makediv() {
    let arrData = [];
    let container = document.createElement('div');
    container.id = "dynamic-block";

    document.getElementById('grid-left').appendChild(container);

    let invalue = document.getElementById('mng');
    let value = invalue.options[invalue.selectedIndex].text;
    if(value !== 'Default'){
        arrData.push("Wake up time " + ': ' + value);
    }
    else{
        console.log(value);
    }

    let invalue2 = document.getElementById('lun');
    let value1 = invalue2.options[invalue2.selectedIndex].text;
    if(value1 !== 'Default'){
        arrData.push("Lunch time " + ': ' + value1);
    }
    else{
        console.log(value);
    }

    let invalue3 = document.getElementById('eve');
    let value2 = invalue3.options[invalue3.selectedIndex].text;
    if(value2 !== 'Default'){
        arrData.push("Nap time " + ': ' + value2);
    }
    else{
        console.log(value);
    }

    let invalue4 = document.getElementById('nap');
    let value3 = invalue4.options[invalue4.selectedIndex].text;
    if(value3 !== 'Default'){
        arrData.push("Night time " + ': ' + value3);
    }
    else{
        console.log(value);
    }

    arrData.forEach((elem) => {
        let li = document.createElement("li");
        li.innerText = elem;
        document.getElementById('dynamic-block').appendChild(li);
    })

    console.log(arrData);

}


function setTime() {
    let time = new Date().getHours();
    let val1 = document.getElementById('mng').value;
    let val2 = document.getElementById('lun').value;
    let val3 = document.getElementById('eve').value;
    let val4 = document.getElementById('nap').value;

    if(val1 == time) {
        document.getElementById('grid-text').innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById('grid-txt1').innerHTML = "GOOD MORNING!! WAKE UP !!";
        document.getElementById('img').src =  './assets/Group\ 5183-1.svg';
    }
    if(val2 == time) {
        document.getElementById('grid-text').innerHTML = "LET'S HAVE SOME LUNCH !!"
        document.getElementById('grid-txt1').innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById('img').src = './assets/Group 5183.png';
    }
    if(val3 == time) {
        document.getElementById('grid-text').innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById('grid-txt1').innerHTML = "GOOD EVENING !!";
        document.getElementById('img').src = './assets/lunch_image.png';
    }
    if(val4 == time) {
        document.getElementById('grid-text').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById('grid-txt1').innerHTML = "GOOD NIGHT !!";
        document.getElementById('img').src = './assets/nightTime.png';
    }

    Makediv();
}