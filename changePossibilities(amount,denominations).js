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
    let result = [];
    let obj = {};
    let i = 1;

    if (ln == 1) {
        if (amt % coins[0] == 0) {
            result = [Array(amt / coins[0]).fill(coins[0])];
        }
    } else if (ln == 2) {
        if (amt % coins[0] == 0) {
            result = [Array(amt / coins[0]).fill(coins[0])];
        }
        let i = 1;
        amt = amt - coins[1];
        while (amt >= 0) {

            if (amt % coins[0] == 0) {
                result = result.concat([Array(amt / coins[0]).fill(coins[0]).concat(Array(i).fill(coins[1]))]);
            }
            i++;
            amt = amt - coins[1];
        }
    } else {
        lastcoin = coins.pop();

        coinschange(coins, amount);
        amt -= lastcoin;
        while (amt >= 0) {
            coinschange(coins, amount - lastcoin);
            result.map((x) => x.push(lastcoin))
            i++;
            amt -= lastcoin;
        }
    }
    for (k of result) {
        console.log(k);
    }
}
coinschange([1, 2], 3);
