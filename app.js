const cronJob = require('cron').CronJob;

const bitbankTicker = require('./fetch_data_api/bitbankTicker');
const bitflyerTicker = require('./fetch_data_api/bitflyerTicker');
const btcboxTicker = require('./fetch_data_api/btcboxTicker');
const coincheckTicker = require('./fetch_data_api/coincheckTicker');
const quoinexTicker = require('./fetch_data_api/quoinexTicker');
const zaifTicker = require('./fetch_data_api/zaifTicker');

const deleteTickers = require('./fetch_data_api/deleteTickers');

const cronTime = "*/30 * * * * *";

const tickerJob = new cronJob({
  cronTime: cronTime,

  onTick: function() {
    bitbankTicker();
    bitflyerTicker();
    btcboxTicker();
    coincheckTicker();
    quoinexTicker();
    zaifTicker();
  },

  // onComplete: function() {
  //   console.log('onComplete!')
  // },

  start: false,
  timeZone: "Asia/Tokyo"
});

const deleteJob = new cronJob({
  cronTime: "00 0 0 * * *",

  onTick: function() {
    // console.log('onTick!2', new Date());
    deleteTickers();
  },

  // onComplete: function() {
  //   console.log('onComplete!')
  // },

  start: false,
  timeZone: "Asia/Tokyo"
});

tickerJob.start();
deleteJob.start();
//job.stop();