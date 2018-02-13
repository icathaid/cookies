var storeHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
var pike = {
  name: 'Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  dailySales: [],
  rate: function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushHourlySales: function() {
    var total = 0;
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      total += parseInt(temp);
      this.hourlySales.push(temp);
      }
    this.dailySales.push(total);
  },
  render: function() {
    var ulEl = document.getElementById('pike');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i];
        ulEl.appendChild(liEl);
      } 
    var ulEl = document.getElementById('pikeTotal')
      liEl.textContent = 'Daily Sales: ' + this.dailySales;
      ulEl.appendChild(liEl);
      console.log('Pike Place Total: ' + this.dailySales);
    },
};
pike.pushHourlySales();
pike.render();
//-=-=-=-=-=-=-=-=-=-=-//
var seatac = {
  name: 'seatac',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlySales: [],
  dailySales: [],
  rate: function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushHourlySales: function() {
    var total = 0;
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      total += parseInt(temp);
      this.hourlySales.push(temp);
      }
    this.dailySales.push(total);
  },
  render: function() {
    var ulEl = document.getElementById('seatac');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i];
        ulEl.appendChild(liEl);
      } 
    var ulEl = document.getElementById('seatacTotal')
      liEl.textContent = 'Daily Sales: ' + this.dailySales;
      ulEl.appendChild(liEl);
      console.log('Seatac Total: ' + this.dailySales);
    },
};
seatac.pushHourlySales();
seatac.render();
//-=-=-=-=-=-=-=-=-=-=-//
var sc = {
  name: 'sc',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hourlySales: [],
  dailySales: [],
  rate: function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushHourlySales: function() {
    var total = 0;
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      total += parseInt(temp);
      this.hourlySales.push(temp);
      }
    this.dailySales.push(total);
  },
  render: function() {
    var ulEl = document.getElementById('sc');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i];
        ulEl.appendChild(liEl);
      } 
    var ulEl = document.getElementById('scTotal')
      liEl.textContent = 'Daily Sales: ' + this.dailySales;
      ulEl.appendChild(liEl);
      console.log('Seattle Center Total: ' + this.dailySales);
    },
};
sc.pushHourlySales();
sc.render();
//-=-=-=-=-=-=-=-=-=-=-//
var capHill = {
  name: 'capitol hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourlySales: [],
  dailySales: [],
  rate: function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushHourlySales: function() {
    var total = 0;
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      total += parseInt(temp);
      this.hourlySales.push(temp);
      }
    this.dailySales.push(total);
  },
  render: function() {
    var ulEl = document.getElementById('capHill');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i];
        ulEl.appendChild(liEl);
      } 
    var ulEl = document.getElementById('capHillTotal')
      liEl.textContent = 'Daily Sales: ' + this.dailySales;
      ulEl.appendChild(liEl);
      console.log('Capitol Hill Total: ' + this.dailySales);
    },
};
capHill.pushHourlySales();
capHill.render();
//-=-=-=-=-=-=-=-=-=-=-//
var alki = {
  name: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlySales: [],
  dailySales: [],
  rate: function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
  },
  pushHourlySales: function() {
    var total = 0;
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      total += parseInt(temp);
      this.hourlySales.push(temp);
      }
    this.dailySales.push(total);
  },
  render: function() {
    var ulEl = document.getElementById('alki');
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i];
        ulEl.appendChild(liEl);
      } 
    var ulEl = document.getElementById('alkiTotal')
      liEl.textContent = 'Daily Sales: ' + this.dailySales;
      ulEl.appendChild(liEl);
      console.log('Alki Total: ' + this.dailySales);
    },
};
alki.pushHourlySales();
alki.render();