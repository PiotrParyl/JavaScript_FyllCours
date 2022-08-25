function prinValueInArr(my_list) {
    var  test_number = 1;


    for (var i=0; i<my_list.length; i++) {
        for (var j=0; j < my_list[i].length; j++) {
            test_number *= my_list[i][j];
            
        }
    }
    return test_number;
}

var test_number = prinValueInArr([[1,2,3],[4,5],[6,7,8]]);

console.log(test_number); // Whay this one dont wor ??

console.log("Test bo coś nie dział")

