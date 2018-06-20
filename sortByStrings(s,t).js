//*******Problem description*****************
//    
//    Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
//    
//    
//***********************End****************

//My question to them: is the string 's' or 't' case sensitive??

function sortByString(s, t) {
    let result = "";
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (t[i] == s[j]) {
                result += t[i];
            }
        }
    }
    return result;
}

sortByString("My study and plans are going OK", "great");
sortByString("weather", "therapyw");
sortByString("good", "odg");
