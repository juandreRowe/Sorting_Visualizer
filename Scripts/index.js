const numberOfBars = 50;
var bars = new Array(numberOfBars);

function fillChart() {
    clearChart();
    bars = new Array();
    var chart = document.getElementById("graph");
    for (var i = 0; i < numberOfBars; i++) {
        var bar = document.createElement("div");
        bar.setAttribute("id", i.toString());
        bar.classList.add("bar");
        bars[i] = randomNumber();
        bar.style.height = bars[i] + "px";
        chart.appendChild(bar);
    }
}

function randomNumber() {
    return (Math.floor(Math.random() * 600) + 1);
}

function clearChart() {
    var chart = document.getElementById("graph");
    chart.innerHTML = "";
    i = 0;
}                 //  set your counter to 1

//function myLoop() {         //  create a loop function
//    setTimeout(function () {   //  call a 3s setTimeout when the loop is called
//        var bar = document.getElementById(i.toString());//  your code here
//        bar.classList.add("green");
//        i++;                    //  increment the counter
//        if (i < numberOfBars) {           //  if the counter < 10, call the loop function
//            myLoop();             //  ..  again which will trigger another 
//        }                       //  ..  setTimeout()
//    }, 10)
//}

function myLoop(x) {         //  create a loop function
    setTimeout(function () {   //  call a 3s setTimeout when the loop is called
        var bar = document.getElementById(x.toString());//  your code here
        bar.classList.add("green");
                               //  increment the counter
        if (x < numberOfBars) {           //  if the counter < 10, call the loop function
            myLoop(x);             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
    }, 1)
}


let i = 0
let flag = true;

function bubbleSort() {
    setTimeout(function ()
    {
        if (i < numberOfBars) {
            let j = 0;
            while (j < numberOfBars - i - 1) {
                if (bars[j] < bars[j + 1]) {
                    var temp = bars[j];
                    bars[j] = bars[j + 1];
                    bars[j + 1] = temp;
                }
                j++;
            }
            i++;
            fillChartFromArray();
            bubbleSort();
        }
        
        
    }, 100);
    fillChartFromArray();
    i = 0;
}

let n = numberOfBars;
var swapped = true;
function wikiSort() {
    setTimeout(function ()
    {
        if (swapped === true) {
            swapped = false;
            let k = 0;
            while (k < n - 1) {
                if (bars[k] > bars[k + 1]) {
                    var temp = bars[k];
                    bars[k] = bars[k + 1];
                    bars[k + 1] = temp;
                    swapped = true;
                }
                k++;
                fillChartFromArray();
                wikiSort();
            }
            n--;
        }
        n = numberOfBars;
    }, 0.2);
}

let f = true;
let q = numberOfBars;
async function thirdSort() {
    //let promise = new Promise(() => {
    //    setTimeout(() => fillChartFromArray(), 100);
    //});
    while (f) {
        f = false;
        let p = 0;
        while (p < q - 1) {
            if (bars[p] > bars[p + 1]) {
                var temp = bars[p];
                bars[p] = bars[p + 1];
                bars[p + 1] = temp;
                f = true;
            }
            p++;
            await new Promise(resolve => setTimeout(resolve, 1));
            fillChartFromArray();
        }
        q--;
    }
    q = numberOfBars;
    f = true;
    //let result = await promise;
}

async function thirdSortReverse() {
    //let promise = new Promise(() => {
    //    setTimeout(() => fillChartFromArray(), 100);
    //});
    while (f) {
        f = false;
        let p = 0;
        while (p < q - 1) {
            if (bars[p] < bars[p + 1]) {
                var temp = bars[p];
                bars[p] = bars[p + 1];
                bars[p + 1] = temp;
                f = true;
            }
            p++;
            await new Promise(resolve => setTimeout(resolve, 1));
            fillChartFromArray();
        }
        q--;
    }
    q = numberOfBars;
    f = true;
    //let result = await promise;
}

async function selectionSort() {
    var i, j, first, temp;
    for (i = bars.length - 1; i > 0; i--) {
        first = 0;
        for (j = 1; j <= i; j++) {
            if (bars[j] < bars[first]) {
                first = j;
            }
        }
        temp = bars[first];
        bars[first] = bars[i];
        bars[i] = temp;
        await new Promise(resolve => setTimeout(resolve, 100));
        fillChartFromArray();
    }
}

async function insertionSort() {
    let i = 1;
    while (i < bars.length) {
        let j = i;
        while (j > 0 && bars[j - 1] > bars[j]) {
            var temp = bars[j - 1];
            bars[j - 1] = bars[j];
            bars[j] = temp;
            j--;
            await new Promise(resolve => setTimeout(resolve, 75));
            fillChartFromArray();
        }
        i++;
    }
}

function fillChartFromArray() {
    clearChart();
    var chart = document.getElementById("graph");
    for (var i = 0; i < numberOfBars; i++) {
        var bar = document.createElement("div");
        bar.setAttribute("id", i.toString());
        bar.classList.add("bar");
        bar.style.height = bars[i] + "px";
        chart.appendChild(bar);
    }
}
