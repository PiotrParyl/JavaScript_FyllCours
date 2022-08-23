
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










































 



