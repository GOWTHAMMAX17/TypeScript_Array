import { StringManipulationService } from "./app-service";
export class ArrayManipulationService implements StringManipulationService{
    arrayFindMultiples(myArray: any): number[]{
        let i = 0;
        let array = [];
        myArray.map(num => 
        {
            if (typeof (num) == 'number') 
            {
                if(num % 5 == 0)
                {
                    array[i] = num;
                }
            }
            i++;
        });
        return array;
    }
    
    arraySeparate(myArray: any): number[] {
       var array2 = myArray.filter(num =>{
           if(typeof(num)=='string'){
               return num;
           }
       })
       return array2;
    }
    arraySplit(myString: any): any[] {
        let prime_number = [];
        let k = 0;
        myString.filter(num => 
        {
            let count = 0;
            if (typeof (num) == 'number') 
            {
                for (let i = 2; i < num / 2; i++) 
                {
                    if (num % i == 0) 
                    {
                        count++;
                    }
                }
                if (count == 0) 
                {
                    prime_number[k] = num;
                    k++;
                }
            }
        });
        return prime_number;
    }
    arraySort(myArray: any): number[] {
        myArray.sort();
        myArray.reverse();
        return string_array;
    }
    arrayReplace(myArray: any): number[] {
       return myArray.map(num=>num%3==0?5:num);
    }

}
let myArray: any[] = [12, 90,"hello","10","world", 3, 85, 7, 20, 100,];
let string_array:any[]=["a","aa","aaa","aaaaaaaa", "aaa"];
let array = new ArrayManipulationService();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(string_array));
console.log(array.arrayReplace(myArray));
