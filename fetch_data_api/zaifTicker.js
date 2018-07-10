const ccxt = require('ccxt');
const axios = require('./axios');
const moment = require('moment');

module.exports = async function () {
  let zaif = new ccxt.zaif();
  let ticker = await zaif.fetchTicker("BTC/JPY");
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
  await axios.post(`/zaifs`, ticker)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}