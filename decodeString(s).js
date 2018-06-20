//*******Problem description*****************
//  Given an encoded string, return its corresponding decoded string. 
//
//The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 
//
//For s = "4[ab]", the output should be decodeString(s) = "abababab" 
//For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
//   
//***********************End****************

//My question to them: can the string have numbers and letters mixed in it, like "4[a2v]"??

function decodeString(s) {


    let str = s.split(']').join('').split('[');
    let result = str[str.length - 1];

    for (let i = str.length - 2; i >= 0; i--) {
        arr = str[i].match(/[a-zA-Z]+|[0-9]+/g);
        num = Number(arr[arr.length - 1]);
        result = result.repeat(num);

        if (arr.length == 2) {
            result = arr[0] + result;
        }
    }
    return result;
}
decodeString("4[a2[b]]");
decodeString("4[ab]");
decodeString("2[b3[a]]");
