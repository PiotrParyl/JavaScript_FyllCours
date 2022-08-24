
// first comment
console.log("Hello JS")

/*
Multimple ine comment, veru usfull
*/

/* Data types:
undefined, null, boolean, string, symbol, number, and object (meny of thous are in python nice :)) )
*/

var myname = "pitrlolo" // when use var, it will be use whone my program 

myAge = 24

let yourname = "bobo" // this one , is use in moment (i gess :/)

const myweight = 80 // ;) this one will never change like ccrotka in python

var a;
var b=7;


a = 69;

// declaration ( so it looks like in JS we have to first declerate varable and then we can add some value to dhis varable (string,int, ore smth))

var twojaStara;
var wagaTwojejStarej;
var zarobkiTwojejStarej;

// and now we can put some numbers to this vatable 

twojaStara = 'Bronislawa';
wagaTwojejStarej = 69;
zarobkiTwojejStarej = 9000;

console.log(twojaStara, wagaTwojejStarej, zarobkiTwojejStarej)

// ok naw dude from cours teling me how to add two numbers xDDDD lest skip this one 

var xD = 10 + 10; 

// so in js when we wont make ouer number minus one mw have to use "--" operator, in python we use "-=" so far so good :))) 

// some oparation with decimals, so il looks like we have to have dwo decimal numbers and then we can add thows two. (id dont remember how it lok like python i go check xD )
// okeeee in python we can add int to float nice 

var numnumnumberssss = 2.0 + 3.3;

console.log(numnumnumberssss)

var whatnow = 2.2 + 5;

console.log(whatnow)
 // yo looks like we can allsow add float to int yo yo eminem nice. 

// right now he teling about strings ... 

// finaly something intresting with string, how to count leaters in word.

var password = 'qwerty1234'

console.log(password.length) // this functionality i use when i have to setup passwort for user. i python we use len().


// In js we cant change one letter in string, we have to change whole word. look:

var string = "Jello World";

string = 'Hello World';

console.log(string);

// finally some thin intresting, FUNCTIONS !!!!

function firsFunction (myFriend, whatHeDo, whereHeDoThat) {

    var name = myFriend;
    var whatdo  = whatHeDo;
    var where = whereHeDoThat;

    var resoult = `The ${name} is ${whatdo} to the ${where}`; // in python this f() function looks little better hihihihi

    return resoult;
}

console.log(firsFunction('Nowak','runing','shopcenter'));


// yep thats time to know list or array in JS !! i remember when i understand list in python my lerning skils up immediately.

var mylist = [12,44,54,32]

console.log(mylist[0])

// .appendet() function bot here we use .push() wery similar 


var yoursArrey = [123,'siuras', 13]

console.log(yoursArrey)

yoursArrey.push(69,420,2137) // wery nice and slim 

console.log(yoursArrey)


// some .pop() function in python we have .delete() orrrr .pop() as well :)) 


var myTeacherArrey = [1,4,2,3,3,6,3]

myTeacherArrey.pop()

console.log(myTeacherArrey)

// oki naw dude show .shift() function, this one remove first item from the list
// and unshift() put some shit in front odf aour list. 


// in this part dude show me how to use function but meeeen, it wos so incomprehensible xD like wtf is that hhahahaahhaha: 

/* 
var myGlobal = 10;

function fun1() {
    oppsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oppsGlobal != "undefined") {
        output += "oopsGlobal:" + oopsGlobal;
    }

    console.log(output);
}

    xDDDDDDDDDDDDDDDDDDDD

    let me understood it by my self (y)


*/

var global1 = 5;
var global2 = 10;
var global3 = 20;


function fun1(a) {
    if (a = global1) {
        console.log("output = 5");
    }

    if ( a = global2) {
        console.log("output = 10")
    }

    else {
        console.log("output != 5");
    }

}

fun1();

// Enodher day lerning JavaScript Yeeeeeeeeeeeeeeeeeeeeeeeeee
console.log("--------new day(2)-------")

var startNumber = 0;

function addToNumber(num) {
    return (num + 5) /2;
}

console.log(startNumber = addToNumber(5));


// oke now i have to del first item from the list and next add any number (69)

var test_list = [2137,2,3,4,5,6,7]

 function delFirstItem(list,intex) {
    list.push(intex)

    return list.shift();

 }




console.log( `List before: ${test_list}`)
console.log(`delete item: ${delFirstItem(test_list,13)}`)
console.log(`New list: ${JSON.stringify(test_list)}`) // oke it is some think like this yo yo 


// it time to True and False, the bool statement, aaaaand if/else (in python oc)



function isThisTrue(someBool) {
    if (someBool) {
        return "yest it is True";
    }
    return "Naaah it is not :/"
}


console.log(isThisTrue(false));


function checkNumber(number) {

    if (number == 10) {
        return "yooo number = 10"
    }
    return "Nah number != 10"
}

console.log(checkNumber(10));


// if and else, let's gooooo 

function ifNumber(num) {
    if (num > 5 ) {
        return `number is bigger then 5`;
    } else {
        return `number is smaller then 5 `
    }
}

console.log(ifNumber(2)) // So far i'm preeti confuse how much python helps me in lernint JavaScript WOOOW



// its time to something new, 'case' it somethink like if statement but much simpler


function printEndSemestMark(mark) {
    var anser = "";
    switch(mark){
        case 1:
            anser = "Niezdane";
            break;
        case 2:
            anser = "Dwoje, ale zdane";
            break;
        case 3:
            anser="Trujeczka,może być";
            break;
        case 4:
            anser="Czwureczka, ładnie"
            break;
        case 5:
            anser="Kuuurwa ale ładna piąteczka"
            break;
        }
    return anser;
}

console.log(printEndSemestMark(5))


// its time to know how to create Objects in JS, is look like objects in JS are like dict in python, loook bro


var namePlayer = {
    "name" : "maczo1928",
    "race" : "elf",
    "hp": 79,
    "lvl": 69,
}



console.log(namePlayer.name, namePlayer.hp)
console.log(namePlayer["name"], namePlayer["hp"])



// YEEEEEEEEEEEEEEE some loops now, finally we can make som more complikate programs <333


var loopNumber = 0;
var loop_list = []

while (loopNumber < 5) {
    loopNumber ++;
    loop_list.push(loopNumber);
    console.log(loopNumber);
}


console.log(loop_list);





















 



