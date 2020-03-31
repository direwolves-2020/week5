

// calculateCommission(account, stock)


function fetchAccountDetails() {
    console.log("Fetching account dtails");

    new Promise(function(resolve, reject) {
        resolve({
            "ac": 1
        });
    })
};

function fetchPositionDetails() {
    console.log("Fetching position details");

    return Promise(function(resolve, reject) {
        resolve({
            "symbol": "IBM",
            "quantity": 10
        });
    })
}

function fetchMarketData(symbol) {
    return Promise(function(resolve, reject) {
        resolve({
            symbol: 100
        });
    })
}

function calculateCommission(ac, po, mk) {
    console.log("Calculating commission");
}


let accountPromise = fetchAccountDetails();



// Chaining of promises.
accountPromise.then(function(account) {
  return fetchPositionDetails();
})
.then(function(position) {
    return fetchMarketData(position.symbol);
})
.then(function(marketData) {
    return calculateCommission(ac, pos, mark)
});



accountPromise.then(function(account) {
    let positionPromise = fetchPositionDetails();

    positionPromise.then(function(position) {

        let marketDataPromise = fetchMarketData(position.symbol);

        marketDataPromise.then(function(marketData) {
            calculateCommission(account, position, marketData);
        });
    });
})


// let account = fetchAccountDetails();

// let position = fetchPositionDetails();

// calculateCommission(account, position);