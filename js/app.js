alert('stuff');
var storeHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
var pike = {
  name: 'Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  sales: [],
  rate: function custPerHour(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
}
  console.log('1st and Pike');
  for (var i = 0; i < storeHours.length; i++){
   var temp = Math.floor((pike.rate(pike.minCust, pike.maxCust) * pike.avgCookies));
   pike.sales.push(temp);
   console.log(storeHours[i] + ': ' + pike.sales[i])
}