const ccxt = require('ccxt');
const axios = require('./axios');
const moment = require('moment');

module.exports = async function () {
  let btcbox = new ccxt.btcbox();
  let ticker = await btcbox.fetchTicker("BTC/JPY");
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
  await axios.post(`/btcboxs`, ticker)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}