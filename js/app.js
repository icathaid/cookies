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
  pushSales: function() {
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      this.sales.push(temp);
      }
    },
  render: function() {
    var ulEl = document.getElementById('pike');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.sales[i];
        ulEl.appendChild(liEl);
      }
    },
};
pike.pushSales();
pike.render();
// -=-=-=-=-=-=-
var seatac = {
  name: 'Seatac',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  sales: [],
  rate: function custPerHour(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushSales: function() {
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      this.sales.push(temp);
      }
    },
  render: function() {
    var ulEl = document.getElementById('seatac');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.sales[i];
        ulEl.appendChild(liEl);
      }
    },
};
seatac.pushSales();
seatac.render();
// -=-=-=-=-=-=-
var sc = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  sales: [],
  rate: function custPerHour(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushSales: function() {
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      this.sales.push(temp);
      }
    },
  render: function() {
    var ulEl = document.getElementById('sc');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.sales[i];
        ulEl.appendChild(liEl);
      }
    },
};
sc.pushSales();
sc.render();
// -=-=-=-=-=-=-
var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  sales: [],
  rate: function custPerHour(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushSales: function() {
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      this.sales.push(temp);
      }
    },
  render: function() {
    var ulEl = document.getElementById('capHill');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.sales[i];
        ulEl.appendChild(liEl);
      }
    },
};
capHill.pushSales();
capHill.render();
// -=-=-=-=-=-=-
var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  sales: [],
  rate: function custPerHour(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushSales: function() {
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      this.sales.push(temp);
      }
    },
  render: function() {
    var ulEl = document.getElementById('alki');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.sales[i];
        ulEl.appendChild(liEl);
      }
    },
};
alki.pushSales();
alki.render();
