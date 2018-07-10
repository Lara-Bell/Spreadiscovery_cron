const ccxt = require('ccxt');
const axios = require('./axios');
const moment = require('moment');

module.exports = async function () {
  let coincheck = new ccxt.coincheck();
  let ticker = await coincheck.fetchTicker("BTC/JPY");
  ticker = {
    symbol: ticker.symbol,
    datetime: moment(ticker.datetime).utc().format('YYYY-MM-DD HH:mm:ss'),
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