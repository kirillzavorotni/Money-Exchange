// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if(currency <= 0) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var result = {};
    var coins = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    };

    for(var key in coins){

        var cur = currency / coins[key];
        if(Math.floor(cur) === 0){
            continue;
        } else {
            var quantity = Math.floor(cur);
            result[key] = quantity;
            currency -= coins[key] * quantity;
            if(currency === 0){
                return result;
            }
        }
    }

    return result;

}
