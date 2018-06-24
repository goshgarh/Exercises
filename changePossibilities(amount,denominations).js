//*******Problem description*****************
//
//Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 
//
//Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 
//
//Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 
//
//1¢, 1¢, 1¢, 1¢
//1¢, 1¢, 2¢
//1¢, 3¢
//2¢, 2¢

//https://www.surveymonkey.com/r/2018spotifyfellowship

//***********************End****************
function coinschange(coins, amount) {
    let ln = coins.length;
    let amt = amount;

    let arr = [];
    let arr1 = [];
    let i = 1;

    if (ln == 1) {
        if (amt % coins[0] == 0) {

            arr = [Array(amt / coins[0]).fill(coins[0])];
            return arr[0];
        }
    } else if (ln == 2) {

        let i = 0;

        while (amt >= 0) {

            if (amt % coins[0] == 0) {
                arr1 = Array(amt / coins[0]).fill(coins[0]);
                arr = arr.concat([arr1.concat(Array(i).fill(coins[1]))]);
            }
            i++;
            amt = amt - coins[1];
        }
        return arr;
    } else {
        ln = coins.length;
        lastcoin = coins.pop();
        i = 0;
        coinschange(coins, amt);
        while (amt >= 0) {

            arr = arr.concat(coinschange(coins, amt).map((x) => x.concat(Array(i).fill(lastcoin))));

            i++;
            amt -= lastcoin;
        }
        return arr;
    }
    for (k of arr) {
        console.log(k);
    }
}

coinschange([1, 2, 3, 4], 11);
coinschange([1, 2], 11);
