"use strict";
exports.__esModule = true;
exports.ArrayManipulationService = void 0;
var ArrayManipulationService = /** @class */ (function () {
    function ArrayManipulationService() {
    }
    ArrayManipulationService.prototype.arrayFindMultiples = function (myArray) {
        var i = 0;
        var array = [];
        myArray.map(function (num) {
            if (typeof (num) == 'number') {
                if (num % 5 == 0) {
                    array[i] = num;
                }
            }
            i++;
        });
        return array;
    };
    ArrayManipulationService.prototype.arraySeparate = function (myArray) {
        var array2 = myArray.filter(function (num) {
            if (typeof (num) == 'string') {
                return num;
            }
        });
        return array2;
    };
    ArrayManipulationService.prototype.arraySplit = function (myString) {
        var prime_number = [];
        var k = 0;
        myString.filter(function (num) {
            var count = 0;
            if (typeof (num) == 'number') {
                for (var i = 2; i < num / 2; i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0) {
                    prime_number[k] = num;
                    k++;
                }
            }
        });
        return prime_number;
    };
    ArrayManipulationService.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return string_array;
    };
    ArrayManipulationService.prototype.arrayReplace = function (myArray) {
        return myArray.map(function (num) { return num % 3 == 0 ? 5 : num; });
    };
    return ArrayManipulationService;
}());
exports.ArrayManipulationService = ArrayManipulationService;
var myArray = [12, 90, "hello", "10", "world", 3, 85, 7, 20, 100,];
var string_array = ["a", "aa", "aaa", "aaaaaaaa", "aaa"];
var array = new ArrayManipulationService();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(string_array));
console.log(array.arrayReplace(myArray));
