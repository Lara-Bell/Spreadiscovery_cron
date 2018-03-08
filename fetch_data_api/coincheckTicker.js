const ccxt = require('ccxt');
const axios = require('./axios');

module.exports = async function () {
  let coincheck = new ccxt.coincheck();
  let ticker = await coincheck.fetchTicker("BTC/JPY");
  ticker = {
    symbol: ticker.symbol,
    datetime: ticker.datetime,
    high: ticker.high,
    low: ticker.low,
    bid: ticker.bid,
    ask: ticker.ask,
    last: ticker.last,
    baseVolume: ticker.baseVolume
  };
  await axios.post(`/coinchecks`, ticker)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}