let Wordclock;
//comments are default greyscale
var primary = "#ffffff"; //255
var secondary = "#282828"; //40
var back = "#000000"; //0
let imageBackground = false;

let d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
let month = d.getMonth();
let date = d.getDate();
let day = d.getDay();

let JSONResponse;
let JSONParsed;

const token = '';

function trimLastMinuteDigit(input) {
    const inputStr = input.toString();
    const lastDigit = inputStr.slice(-1);
    return lastDigit;
}

function preload() {
    Wordclock = loadFont('Wordclock.otf');
    img = loadImage('template combinations/qlocktwotemplatev2 1,2,3,13,14,21,22,23,31.jpg');
}

//due to an issue with the "Wordclock" font, only one character
//can be drawn with the text method at a time

function drawBase() {
    fill(secondary);

    //original qlocktwo
    background(back);

    if (imageBackground) {
        image(img, -540, -960, 1080, 1920);
    }

    fill(secondary);

    //original qlocktwo
    //row 1
    text("I", -364, -732);
    text("T", -296, -732);
    text("L", -226, -732);
    text("I", -159, -732);
    text("S", -91, -732);
    text("A", -23, -732);
    text("S", 46, -732);
    text("A", 114, -732);
    text("M", 182, -732);
    text("P", 251, -732);
    text("M", 319, -732);

    //row 2
    text("A", -364, -657);
    text("C", -296, -657);
    text("Q", -226, -657);
    text("U", -159, -657);
    text("A", -91, -657);
    text("R", -23, -657);
    text("T", 46, -657);
    text("E", 114, -657);
    text("R", 182, -657);
    text("D", 251, -657);
    text("C", 319, -657);

    //row 3
    text("T", -364, -581);
    text("W", -296, -581);
    text("E", -226, -581);
    text("N", -159, -581);
    text("T", -91, -581);
    text("Y", -23, -581);
    text("F", 46, -581);
    text("I", 114, -581);
    text("V", 182, -581);
    text("E", 251, -581);
    text("X", 319, -581);

    //row 4
    text("H", -364, -506);
    text("A", -296, -506);
    text("L", -226, -506);
    text("F", -159, -506);
    text("S", -91, -506);
    text("T", -23, -506);
    text("E", 46, -506);
    text("N", 114, -506);
    text("F", 182, -506);
    text("T", 251, -506);
    text("O", 319, -506);

    //row 5
    text("P", -364, -430);
    text("A", -296, -430);
    text("S", -226, -430);
    text("T", -159, -430);
    text("E", -91, -430);
    text("R", -23, -430);
    text("U", 46, -430);
    text("N", 114, -430);
    text("I", 182, -430);
    text("N", 251, -430);
    text("E", 319, -430);

    //row 6
    text("O", -364, -355);
    text("N", -296, -355);
    text("E", -226, -355);
    text("S", -159, -355);
    text("I", -91, -355);
    text("X", -23, -355);
    text("T", 46, -355);
    text("H", 114, -355);
    text("R", 182, -355);
    text("E", 251, -355);
    text("E", 319, -355);

    //row 7
    text("F", -364, -279);
    text("O", -296, -279);
    text("U", -226, -279);
    text("R", -159, -279);
    text("F", -91, -279);
    text("I", -23, -279);
    text("V", 46, -279);
    text("E", 114, -279);
    text("T", 182, -279);
    text("W", 251, -279);
    text("O", 319, -279);

    //row 8
    text("E", -364, -204);
    text("I", -296, -204);
    text("G", -226, -204);
    text("H", -159, -204);
    text("T", -91, -204);
    text("E", -23, -204);
    text("L", 46, -204);
    text("E", 114, -204);
    text("V", 182, -204);
    text("E", 251, -204);
    text("N", 319, -204);

    //row 9
    text("S", -364, -128);
    text("E", -296, -128);
    text("V", -226, -128);
    text("E", -159, -128);
    text("N", -91, -128);
    text("T", -23, -128);
    text("W", 46, -128);
    text("E", 114, -128);
    text("L", 182, -128);
    text("V", 251, -128);
    text("E", 319, -128);

    //row 10
    text("T", -364, -53);
    text("E", -296, -53);
    text("N", -226, -53);
    text("S", -159, -53);
    text("E", -91, -53);
    text("O", -23, -53);
    text("C", 46, -53);
    text("L", 114, -53);
    text("O", 182, -53);
    text("C", 251, -53);
    text("K", 319, -53);

    //day of the week
    //row 11
    text("O", -364, 23);
    text("N", -296, 23);
    text("L", -226, 23);
    text("M", -159, 23);
    text("O", -91, 23);
    text("N", -23, 23);
    text("T", 46, 23);
    text("H", 114, 23);
    text("U", 182, 23);
    text("R", 251, 23);
    text("S", 319, 23);

    //row 12
    text("W", -364, 98);
    text("E", -296, 98);
    text("D", -226, 98);
    text("N", -159, 98);
    text("E", -91, 98);
    text("S", -23, 98);
    text("T", 46, 98);
    text("U", 114, 98);
    text("E", 182, 98);
    text("S", 251, 98);
    text("Y", 319, 98);

    //row 13
    text("F", -364, 174);
    text("R", -296, 174);
    text("I", -226, 174);
    text("S", -159, 174);
    text("A", -91, 174);
    text("T", -23, 174);
    text("U", 46, 174);
    text("R", 114, 174);
    text("S", 182, 174);
    text("U", 251, 174);
    text("N", 319, 174);

    //row 14
    text("D", -364, 249);
    text("A", -296, 249);
    text("Y", -226, 249);
    text("X", -159, 249);
    text("Y", -91, 249);
    text("J", -23, 249);
    text("A", 46, 249);
    text("N", 114, 249);
    text("F", 182, 249);
    text("E", 251, 249);
    text("B", 319, 249);

    //row 15
    text("M", -364, 325);
    text("A", -296, 325);
    text("Y", -226, 325);
    text("M", -159, 325);
    text("A", -91, 325);
    text("R", -23, 325);
    text("A", 46, 325);
    text("P", 114, 325);
    text("R", 182, 325);
    text("I", 251, 325);
    text("L", 319, 325);

    //row 16
    text("J", -364, 400);
    text("U", -296, 400);
    text("N", -226, 400);
    text("E", -159, 400);
    text("J", -91, 400);
    text("U", -23, 400);
    text("L", 46, 400);
    text("Y", 114, 400);
    text("A", 182, 400);
    text("U", 251, 400);
    text("G", 319, 400);

    //row 17
    text("S", -364, 476);
    text("E", -296, 476);
    text("P", -226, 476);
    text("T", -159, 476);
    text("O", -91, 476);
    text("C", -23, 476);
    text("T", 46, 476);
    text("W", 114, 476);
    text("N", 182, 476);
    text("O", 251, 476);
    text("V", 319, 476);

    //row 18 constant
    text("D", -364, 551);
    text("E", -296, 551);
    text("C", -226, 551);
    text("Q", -159, 551);

    //ellipses
    strokeWeight(0);
    stroke(0);

    //top left
    ellipse(-482, -902, 15);
    //top right
    ellipse(482, -902, 15);
    //bottom right
    ellipse(482, 902, 15);
    //bottom left
    ellipse(-482, 902, 15);
}

function drawLayout1() {
    fill(secondary);

    //row 18 1,2,3,13,14,21,22,23,31
    text("T", -91, 551);
    text("W", -23, 551);
    text("E", 46, 551);
    text("N", 114, 551);
    text("T", 182, 551);
    text("Y", 251, 551);
    text("C", 319, 551);

    //row 19
    text("T", -364, 627);
    text("H", -296, 627);
    text("I", -226, 627);
    text("R", -159, 627);
    text("T", -91, 627);
    text("Y", -23, 627);
    text("F", 46, 627);
    text("I", 114, 627);
    text("R", 182, 627);
    text("S", 251, 627);
    text("T", 319, 627);

    //row 20
    text("S", -364, 702);
    text("E", -296, 702);
    text("C", -226, 702);
    text("O", -159, 702);
    text("N", -91, 702);
    text("D", -23, 702);
    text("T", 46, 702);
    text("H", 114, 702);
    text("I", 182, 702);
    text("R", 251, 702);
    text("D", 319, 702);

    //row 21
    text("B", -364, 778);
    text("F", -296, 778);
    text("O", -226, 778);
    text("U", -159, 778);
    text("R", -91, 778);
    text("T", -23, 778);
    text("E", 46, 778);
    text("E", 114, 778);
    text("N", 182, 778);
    text("T", 251, 778);
    text("H", 319, 778);
}

function drawLayout2() {
    fill(secondary);

    //row 18 4,5,6,8,9,15,16,18,24,25,26,28,29
    text("T", -91, 551);
    text("W", -23, 551);
    text("E", 46, 551);
    text("N", 114, 551);
    text("T", 182, 551);
    text("Y", 251, 551);
    text("C", 319, 551);

    //row 19
    text("F", -364, 627);
    text("O", -296, 627);
    text("U", -226, 627);
    text("R", -159, 627);
    text("T", -91, 627);
    text("H", -23, 627);
    text("F", 46, 627);
    text("I", 114, 627);
    text("F", 182, 627);
    text("T", 251, 627);
    text("H", 319, 627);

    //row 20
    text("S", -364, 702);
    text("I", -296, 702);
    text("X", -226, 702);
    text("T", -159, 702);
    text("H", -91, 702);
    text("E", -23, 702);
    text("I", 46, 702);
    text("G", 114, 702);
    text("H", 182, 702);
    text("T", 251, 702);
    text("H", 319, 702);

    //row 21
    text("N", -364, 778);
    text("I", -296, 778);
    text("N", -226, 778);
    text("T", -159, 778);
    text("H", -91, 778);
    text("T", -23, 778);
    text("E", 46, 778);
    text("E", 114, 778);
    text("N", 182, 778);
    text("T", 251, 778);
    text("H", 319, 778);
}

function drawLayout3() {
    fill(secondary);

    //row 18 7,10,17,19,27
    text("T", -91, 551);
    text("W", -23, 551);
    text("E", 46, 551);
    text("N", 114, 551);
    text("T", 182, 551);
    text("Y", 251, 551);
    text("C", 319, 551);

    //row 19
    text("S", -364, 627);
    text("E", -296, 627);
    text("V", -226, 627);
    text("E", -159, 627);
    text("N", -91, 627);
    text("T", -23, 627);
    text("H", 46, 627);
    text("T", 114, 627);
    text("S", 182, 627);
    text("I", 251, 627);
    text("X", 319, 627);

    //row 20
    text("T", -364, 702);
    text("E", -296, 702);
    text("N", -226, 702);
    text("T", -159, 702);
    text("H", -91, 702);
    text("B", -23, 702);
    text("S", 46, 702);
    text("N", 114, 702);
    text("I", 182, 702);
    text("N", 251, 702);
    text("E", 319, 702);

    //row 21
    text("N", -364, 778);
    text("I", -296, 778);
    text("N", -226, 778);
    text("E", -159, 778);
    text("T", -91, 778);
    text("E", -23, 778);
    text("E", 46, 778);
    text("N", 114, 778);
    text("T", 182, 778);
    text("H", 251, 778);
    text("Z", 319, 778);
}

function drawLayout4() {
    fill(secondary);

    //row 18 7,10,17,19,27
    text("T", -91, 551);
    text("W", -23, 551);
    text("E", 46, 551);
    text("L", 114, 551);
    text("F", 182, 551);
    text("T", 251, 551);
    text("H", 319, 551);

    //row 19
    text("E", -364, 627);
    text("L", -296, 627);
    text("E", -226, 627);
    text("V", -159, 627);
    text("E", -91, 627);
    text("N", -23, 627);
    text("T", 46, 627);
    text("H", 114, 627);
    text("C", 182, 627);
    text("S", 251, 627);
    text("C", 319, 627);

    //row 20
    text("T", -364, 702);
    text("W", -296, 702);
    text("E", -226, 702);
    text("N", -159, 702);
    text("T", -91, 702);
    text("I", -23, 702);
    text("E", 46, 702);
    text("T", 114, 702);
    text("H", 182, 702);
    text("F", 251, 702);
    text("U", 319, 702);

    //row 21
    text("P", -364, 778);
    text("M", -296, 778);
    text("T", -226, 778);
    text("H", -159, 778);
    text("I", -91, 778);
    text("R", -23, 778);
    text("T", 46, 778);
    text("I", 114, 778);
    text("E", 182, 778);
    text("T", 251, 778);
    text("H", 319, 778);
}

function itIs() {
    fill(primary);
    text("I", -364, -732);
    text("T", -296, -732);

    text("I", -159, -732);
    text("S", -91, -732);
}

function quarter() {
    fill(primary);
    text("A", -364, -657);

    text("Q", -226, -657);
    text("U", -159, -657);
    text("A", -91, -657);
    text("R", -23, -657);
    text("T", 46, -657);
    text("E", 114, -657);
    text("R", 182, -657);
}

function twenty() {
    fill(primary);
    text("T", -364, -581);
    text("W", -296, -581);
    text("E", -226, -581);
    text("N", -159, -581);
    text("T", -91, -581);
    text("Y", -23, -581);
}

function five() {
    fill(primary);
    text("F", 46, -581);
    text("I", 114, -581);
    text("V", 182, -581);
    text("E", 251, -581);
}

function half() {
    fill(primary);
    text("H", -364, -506);
    text("A", -296, -506);
    text("L", -226, -506);
    text("F", -159, -506);
}

function ten() {
    fill(primary);
    text("T", -23, -506);
    text("E", 46, -506);
    text("N", 114, -506);
}

function to() {
    fill(primary);
    text("T", 251, -506);
    text("O", 319, -506);
}

function past() {
    fill(primary);
    text("P", -364, -430);
    text("A", -296, -430);
    text("S", -226, -430);
    text("T", -159, -430);
}

//hour functions
function hourOne() {
    fill(primary);
    text("O", -364, -355);
    text("N", -296, -355);
    text("E", -226, -355);
}

function hourTwo() {
    fill(primary);
    text("T", 182, -279);
    text("W", 251, -279);
    text("O", 319, -279);
}

function hourThree() {
    fill(primary);
    text("T", 46, -355);
    text("H", 114, -355);
    text("R", 182, -355);
    text("E", 251, -355);
    text("E", 319, -355);
}

function hourFour() {
    fill(primary);
    text("F", -364, -279);
    text("O", -296, -279);
    text("U", -226, -279);
    text("R", -159, -279);
}

function hourFive() {
    fill(primary);
    text("F", -91, -279);
    text("I", -23, -279);
    text("V", 46, -279);
    text("E", 114, -279);
}

function hourSix() {
    fill(primary);
    text("S", -159, -355);
    text("I", -91, -355);
    text("X", -23, -355);
}

function hourSeven() {
    fill(primary);
    text("S", -364, -128);
    text("E", -296, -128);
    text("V", -226, -128);
    text("E", -159, -128);
    text("N", -91, -128);
}

function hourEight() {
    fill(primary);
    text("E", -364, -204);
    text("I", -296, -204);
    text("G", -226, -204);
    text("H", -159, -204);
    text("T", -91, -204);
}

function hourNine() {
    fill(primary);
    text("N", 114, -430);
    text("I", 182, -430);
    text("N", 251, -430);
    text("E", 319, -430);
}

function hourTen() {
    fill(primary);
    text("T", -364, -53);
    text("E", -296, -53);
    text("N", -226, -53);
}

function hourEleven() {
    fill(primary);
    text("E", -23, -204);
    text("L", 46, -204);
    text("E", 114, -204);
    text("V", 182, -204);
    text("E", 251, -204);
    text("N", 319, -204);
}

function hourTwelve() {
    fill(primary);
    text("T", -23, -128);
    text("W", 46, -128);
    text("E", 114, -128);
    text("L", 182, -128);
    text("V", 251, -128);
    text("E", 319, -128);
}

function oClock() {
    fill(primary);
    text("O", -23, -53);
    text("C", 46, -53);
    text("L", 114, -53);
    text("O", 182, -53);
    text("C", 251, -53);
    text("K", 319, -53);
}

function on() {
    fill(primary);
    text("O", -364, 23);
    text("N", -296, 23);
}

function mon() {
    fill(primary);
    text("M", -159, 23);
    text("O", -91, 23);
    text("N", -23, 23);
}

function sun() {
    fill(primary);
    text("S", 182, 174);
    text("U", 251, 174);
    text("N", 319, 174);
}

function wednes() {
    fill(primary);
    text("W", -364, 98);
    text("E", -296, 98);
    text("D", -226, 98);
    text("N", -159, 98);
    text("E", -91, 98);
    text("S", -23, 98);
}

function tues() {
    fill(primary);
    text("T", 46, 98);
    text("U", 114, 98);
    text("E", 182, 98);
    text("S", 251, 98);
}

function fri() {
    fill(primary);
    text("F", -364, 174);
    text("R", -296, 174);
    text("I", -226, 174);
}

function satur() {
    fill(primary);
    text("S", -159, 174);
    text("A", -91, 174);
    text("T", -23, 174);
    text("U", 46, 174);
    text("R", 114, 174);
}

function thurs() {
    fill(primary);
    text("T", 46, 23);
    text("H", 114, 23);
    text("U", 182, 23);
    text("R", 251, 23);
    text("S", 319, 23);
}

function dayOfTheWeek() {
    fill(primary);
    text("D", -364, 249);
    text("A", -296, 249);
    text("Y", -226, 249);
}

function jan() {
    fill(primary);
    text("J", -23, 249);
    text("A", 46, 249);
    text("N", 114, 249);
}

function feb() {
    fill(primary);
    text("F", 182, 249);
    text("E", 251, 249);
    text("B", 319, 249);
}

function may() {
    fill(primary);
    text("M", -364, 325);
    text("A", -296, 325);
    text("Y", -226, 325);
}

function mar() {
    fill(primary);
    text("M", -159, 325);
    text("A", -91, 325);
    text("R", -23, 325);
}

function april() {
    fill(primary);
    text("A", 46, 325);
    text("P", 114, 325);
    text("R", 182, 325);
    text("I", 251, 325);
    text("L", 319, 325);
}

function june() {
    fill(primary);
    text("J", -364, 400);
    text("U", -296, 400);
    text("N", -226, 400);
    text("E", -159, 400);
}

function july() {
    fill(primary);
    text("J", -91, 400);
    text("U", -23, 400);
    text("L", 46, 400);
    text("Y", 114, 400);
}

function aug() {
    fill(primary);
    text("A", 182, 400);
    text("U", 251, 400);
    text("G", 319, 400);
}

function sept() {
    fill(primary);
    text("S", -364, 476);
    text("E", -296, 476);
    text("P", -226, 476);
    text("T", -159, 476);
}

function oct() {
    fill(primary);
    text("O", -91, 476);
    text("C", -23, 476);
    text("T", 46, 476);
}

function nov() {
    fill(primary);
    text("N", 182, 476);
    text("O", 251, 476);
    text("V", 319, 476);
}

function dec() {
    fill(primary);
    text("D", -364, 551);
    text("E", -296, 551);
    text("C", -226, 551);
}

function drawCurrentTime() {
    //ellipse logic
    //One ellipse
    if (trimLastMinuteDigit(minute) == 1 || trimLastMinuteDigit(minute) == 6) {
        strokeWeight(0);
        stroke(0);

        //top left
        fill(primary);
        ellipse(-482, -902, 15);
    }

    //Two ellipses
    if (trimLastMinuteDigit(minute) == 2 || trimLastMinuteDigit(minute) == 7) {
        strokeWeight(0);
        stroke(0);

        fill(primary);
        //top left
        ellipse(-482, -902, 15);
        //top right
        ellipse(482, -902, 15);
    }

    //Three ellipses
    if (trimLastMinuteDigit(minute) == 3 || trimLastMinuteDigit(minute) == 8) {
        strokeWeight(0);
        stroke(0);

        fill(primary);
        //top left
        ellipse(-482, -902, 15);
        //top right
        ellipse(482, -902, 15);
        //bottom right
        ellipse(482, 902, 15);
    }

    //Four ellipses
    if (trimLastMinuteDigit(minute) == 4 || trimLastMinuteDigit(minute) == 9) {
        strokeWeight(0);
        stroke(0);

        fill(primary);
        //top left
        ellipse(-482, -902, 15);
        //top right
        ellipse(482, -902, 15);
        //bottom right
        ellipse(482, 902, 15);
        //bottom left
        ellipse(-482, 902, 15);
    }

    //Top of the hour
    if (minute >= 0 && minute <= 34) {
        //hour one
        if (hour == 1 || hour == 13) {
            hourOne();
        }

        //hour two
        if (hour == 2 || hour == 14) {
            hourTwo();
        }

        //hour three
        if (hour == 3 || hour == 15) {
            hourThree();
        }

        //hour four
        if (hour == 4 || hour == 16) {
            hourFour();
        }

        //hour five
        if (hour == 5 || hour == 17) {
            hourFive();
        }

        //hour six
        if (hour == 6 || hour == 18) {
            hourSix();
        }

        //hour seven
        if (hour == 7 || hour == 19) {
            hourSeven();
        }

        //hour eight
        if (hour == 8 || hour == 20) {
            hourEight();
        }

        //hour nine
        if (hour == 9 || hour == 21) {
            hourNine();
        }

        //hour ten
        if (hour == 10 || hour == 22) {
            hourTen();
        }

        //hour eleven
        if (hour == 11 || hour == 23) {
            hourEleven();
        }

        //hour twelve
        if (hour == 0 || hour == 12) {
            hourTwelve();
        }

        //bottom of the hour
    } else if (minute >= 35 && minute <= 59) {
        //hour one
        if (hour == 1 || hour == 13) {
            hourTwo();
        }

        //hour two
        if (hour == 2 || hour == 14) {
            hourThree();
        }

        //hour three
        if (hour == 3 || hour == 15) {
            hourFour();
        }

        //hour four
        if (hour == 4 || hour == 16) {
            hourFive();
        }

        //hour five
        if (hour == 5 || hour == 17) {
            hourSix();
        }

        //hour six
        if (hour == 6 || hour == 18) {
            hourSeven();
        }

        //hour seven
        if (hour == 7 || hour == 19) {
            hourEight();
        }

        //hour eight
        if (hour == 8 || hour == 20) {
            hourNine();
        }

        //hour nine
        if (hour == 9 || hour == 21) {
            hourTen();
        }

        //hour ten
        if (hour == 10 || hour == 22) {
            hourEleven();
        }

        //hour eleven
        if (hour == 11 || hour == 23) {
            hourTwelve();
        }

        //hour twelve
        if (hour == 0 || hour == 12) {
            hourOne();
        }
    }

    if (minute >= 0 && minute <= 4) {
        itIs();
        oClock();
    }

    if (minute >= 5 && minute <= 9) {
        five();
        past();
    }

    if (minute >= 10 && minute <= 14) {
        ten();
        past();
    }

    if (minute >= 15 && minute <= 19) {
        quarter();
        past();
    }

    if (minute >= 20 && minute <= 24) {
        twenty();
        past();
    }

    if (minute >= 25 && minute <= 29) {
        twenty();
        five();
        past();
    }

    if (minute >= 30 && minute <= 34) {
        itIs();
        half();
        past();
    }

    if (minute >= 35 && minute <= 39) {
        twenty();
        five();
        to();
    }

    if (minute >= 40 && minute <= 44) {
        twenty();
        to();
    }

    if (minute >= 45 && minute <= 49) {
        quarter();
        to();
    }

    if (minute >= 50 && minute <= 54) {
        ten();
        to();
    }

    if (minute >= 55 && minute <= 59) {
        five();
        to();
    }

    on();

    switch (day) {
        case 0:
            sun();
            break;
        case 1:
            mon();
            break;
        case 2:
            tues();
            break;
        case 3:
            wednes();
            break;
        case 4:
            thurs();
            break;
        case 5:
            fri();
            break;
        case 6:
            satur();
            break;
    }

    dayOfTheWeek();

    switch (month) {
        case 0:
            jan();
            break;
        case 1:
            feb();
            break;
        case 2:
            mar();
            break;
        case 3:
            april();
            break;
        case 4:
            may();
            break;
        case 5:
            june();
            break;
        case 6:
            july();
            break;
        case 7:
            aug();
            break;
        case 8:
            sept();
            break;
        case 9:
            oct();
            break;
        case 10:
            nov();
            break;
        case 11:
            dec();
            break;
    }

    if (date === 1 || date === 2 || date === 3 || date === 13 || date === 14 ||
        date === 21 || date === 22 || date === 23 || date === 31) {
        drawLayout1();

        switch (date) {
            case 1:
                fill(primary);
                text("F", 46, 627);
                text("I", 114, 627);
                text("R", 182, 627);
                text("S", 251, 627);
                text("T", 319, 627);
                break;
            case 2:
                fill(primary);
                text("S", -364, 702);
                text("E", -296, 702);
                text("C", -226, 702);
                text("O", -159, 702);
                text("N", -91, 702);
                text("D", -23, 702);
                break;
            case 3:
                fill(primary);
                text("T", 46, 702);
                text("H", 114, 702);
                text("I", 182, 702);
                text("R", 251, 702);
                text("D", 319, 702);
                break;
            case 13:
                fill(primary);
                text("T", -364, 627);
                text("H", -296, 627);
                text("I", -226, 627);
                text("R", -159, 627);

                text("T", -23, 778);
                text("E", 46, 778);
                text("E", 114, 778);
                text("N", 182, 778);
                text("T", 251, 778);
                text("H", 319, 778);
                break;
            case 14:
                fill(primary);
                text("F", -296, 778);
                text("O", -226, 778);
                text("U", -159, 778);
                text("R", -91, 778);
                text("T", -23, 778);
                text("E", 46, 778);
                text("E", 114, 778);
                text("N", 182, 778);
                text("T", 251, 778);
                text("H", 319, 778);
                break;
            case 21:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("F", 46, 627);
                text("I", 114, 627);
                text("R", 182, 627);
                text("S", 251, 627);
                text("T", 319, 627);
                break;
            case 22:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("S", -364, 702);
                text("E", -296, 702);
                text("C", -226, 702);
                text("O", -159, 702);
                text("N", -91, 702);
                text("D", -23, 702);
                break;
            case 23:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("T", 46, 702);
                text("H", 114, 702);
                text("I", 182, 702);
                text("R", 251, 702);
                text("D", 319, 702);
                break;
            case 31:
                fill(primary);
                text("T", -364, 627);
                text("H", -296, 627);
                text("I", -226, 627);
                text("R", -159, 627);
                text("T", -91, 627);
                text("Y", -23, 627);
                text("F", 46, 627);
                text("I", 114, 627);
                text("R", 182, 627);
                text("S", 251, 627);
                text("T", 319, 627);
                break;
        }

    } else if (date === 4 || date === 5 || date === 6 || date === 8 || date === 9 ||
        date === 15 || date === 16 || date === 18 || date === 24 || date === 25 ||
        date === 26 || date === 28 || date === 29) {
        drawLayout2();

        switch (date) {
            case 5:
                fill(primary);
                text("F", 46, 627);
                text("I", 114, 627);
                text("F", 182, 627);
                text("T", 251, 627);
                text("H", 319, 627);
                break;
            case 6:
                fill(primary);
                text("S", -364, 702);
                text("I", -296, 702);
                text("X", -226, 702);
                text("T", -159, 702);
                text("H", -91, 702);
                break;
            case 8:
                fill(primary);
                text("E", -23, 702);
                text("I", 46, 702);
                text("G", 114, 702);
                text("H", 182, 702);
                text("T", 251, 702);
                text("H", 319, 702);
                break;
            case 9:
                fill(primary);
                text("N", -364, 778);
                text("I", -296, 778);
                text("N", -226, 778);
                text("T", -159, 778);
                text("H", -91, 778);
                break;
            case 15:
                fill(primary);
                text("F", 46, 627);
                text("I", 114, 627);
                text("F", 182, 627);
                text("T", 251, 627);

                text("T", -23, 778);
                text("E", 46, 778);
                text("E", 114, 778);
                text("N", 182, 778);
                text("T", 251, 778);
                text("H", 319, 778);
                break;
            case 16:
                fill(primary);
                text("S", -364, 702);
                text("I", -296, 702);
                text("X", -226, 702);

                text("T", -23, 778);
                text("E", 46, 778);
                text("E", 114, 778);
                text("N", 182, 778);
                text("T", 251, 778);
                text("H", 319, 778);
                break;
            case 18:
                fill(primary);
                text("E", -23, 702);
                text("I", 46, 702);
                text("G", 114, 702);
                text("H", 182, 702);

                text("T", -23, 778);
                text("E", 46, 778);
                text("E", 114, 778);
                text("N", 182, 778);
                text("T", 251, 778);
                text("H", 319, 778);
                break;
            case 24:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("F", -364, 627);
                text("O", -296, 627);
                text("U", -226, 627);
                text("R", -159, 627);
                text("T", -91, 627);
                text("H", -23, 627);
                break;
            case 25:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("F", 46, 627);
                text("I", 114, 627);
                text("F", 182, 627);
                text("T", 251, 627);
                text("H", 319, 627);
                break;
            case 26:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("S", -364, 702);
                text("I", -296, 702);
                text("X", -226, 702);
                text("T", -159, 702);
                text("H", -91, 702);
                break;
            case 28:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("E", -23, 702);
                text("I", 46, 702);
                text("G", 114, 702);
                text("H", 182, 702);
                text("T", 251, 702);
                text("H", 319, 702);
                break;
            case 29:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("N", -364, 778);
                text("I", -296, 778);
                text("N", -226, 778);
                text("T", -159, 778);
                text("H", -91, 778);
                break;
            case 4:
                fill(primary);
                text("F", -364, 627);
                text("O", -296, 627);
                text("U", -226, 627);
                text("R", -159, 627);
                text("T", -91, 627);
                text("H", -23, 627);
                break;
        }

    } else if (date === 7 || date === 10 || date === 17 || date === 19 || date === 27) {
        drawLayout3();

        switch (date) {
            case 10:
                fill(primary);
                text("T", -364, 702);
                text("E", -296, 702);
                text("N", -226, 702);
                text("T", -159, 702);
                text("H", -91, 702);
                break;
            case 17:
                fill(primary);
                text("S", -364, 627);
                text("E", -296, 627);
                text("V", -226, 627);
                text("E", -159, 627);
                text("N", -91, 627);

                text("T", -91, 778);
                text("E", -23, 778);
                text("E", 46, 778);
                text("N", 114, 778);
                text("T", 182, 778);
                text("H", 251, 778);
                break;
            case 19:
                fill(primary);
                text("N", -364, 778);
                text("I", -296, 778);
                text("N", -226, 778);
                text("E", -159, 778);
                text("T", -91, 778);
                text("E", -23, 778);
                text("E", 46, 778);
                text("N", 114, 778);
                text("T", 182, 778);
                text("H", 251, 778);
                break;
            case 27:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("N", 114, 551);
                text("T", 182, 551);
                text("Y", 251, 551);

                text("S", -364, 627);
                text("E", -296, 627);
                text("V", -226, 627);
                text("E", -159, 627);
                text("N", -91, 627);
                text("T", -23, 627);
                text("H", 46, 627);
                break;
            case 7:
                fill(primary);
                text("S", -364, 627);
                text("E", -296, 627);
                text("V", -226, 627);
                text("E", -159, 627);
                text("N", -91, 627);
                text("T", -23, 627);
                text("H", 46, 627);
                break;
        }

    } else if (date === 11 || date === 12 || date === 20 || date === 30) {
        drawLayout4();

        switch (date) {
            case 12:
                fill(primary);
                text("T", -91, 551);
                text("W", -23, 551);
                text("E", 46, 551);
                text("L", 114, 551);
                text("F", 182, 551);
                text("T", 251, 551);
                text("H", 319, 551);
                break;
            case 20:
                fill(primary);
                text("T", -364, 702);
                text("W", -296, 702);
                text("E", -226, 702);
                text("N", -159, 702);
                text("T", -91, 702);
                text("I", -23, 702);
                text("E", 46, 702);
                text("T", 114, 702);
                text("H", 182, 702);
                break;
            case 30:
                fill(primary);
                text("T", -226, 778);
                text("H", -159, 778);
                text("I", -91, 778);
                text("R", -23, 778);
                text("T", 46, 778);
                text("I", 114, 778);
                text("E", 182, 778);
                text("T", 251, 778);
                text("H", 319, 778);
                break;
            case 11:
                fill(primary);
                text("E", -364, 627);
                text("L", -296, 627);
                text("E", -226, 627);
                text("V", -159, 627);
                text("E", -91, 627);
                text("N", -23, 627);
                text("T", 46, 627);
                text("H", 114, 627);
                break;
        }
    }
}

function setup() {
    createCanvas(1080, 1920, WEBGL);
    textFont(Wordclock);
    textSize(90);
    frameRate(1);
    drawBase();
    drawCurrentTime();
}

function draw() {
    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    month = d.getMonth();
    date = d.getDate();
    day = d.getDay();

    if (second === 0) {
        drawBase();
        drawCurrentTime();
    }

    // unused function to control how often lifx's api is queried
    // if (second % 5 === 0){
    //lifx api request
    fetch('https://api.lifx.com/v1/lights/all', {
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Basic ' + btoa(token)
        },
    })
        .then(r => r.json())
        .then(r => {
            JSONResponse = JSON.stringify(r);
            JSONParsed = JSON.parse(JSONResponse);
            //console.log(JSONParsed);
            //display mode for multicolored lighting
            if (JSONParsed[2].color.saturation === 1) {
                primary = color('hsl(' + Math.round(JSONParsed[2].color.hue) + ', 100%, 50%)');
                secondary = color('hsl(' + Math.round(JSONParsed[2].color.hue) + ', 100%, 25%)');
                back = color('hsl(' + Math.round(JSONParsed[1].color.hue) + ', 100%, 30%)');
                drawBase();
                drawCurrentTime();

                //display mode for natural colored lighting
            } else if (JSONParsed[2].color.saturation === 0) {
                primary = "#ffffff"; //255
                secondary = "#282828"; //40
                back = "#000000"; //0
                drawBase();
                drawCurrentTime();
            }

        }).catch(error => console.error('Error', error))
    // }

}