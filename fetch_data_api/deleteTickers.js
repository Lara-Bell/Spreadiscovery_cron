const axios = require('./axios');

module.exports = function(){
  axios.delete('/bitbanks/deleteTickers').then(res => console.log(res.data));
  axios.delete('/bitflyers/deleteTickers').then(res => console.log(res.data));
  axios.delete('/coinchecks/deleteTickers').then(res => console.log(res.data));
  axios.delete('/quoinexs/deleteTickers').then(res => console.log(res.data));
  axios.delete('/btcboxs/deleteTickers').then(res => console.log(res.data));
  axios.delete('/zaifs/deleteTickers').then(res => console.log(res.data));
}