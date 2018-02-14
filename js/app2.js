var patStores = []; 
var storeHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
function Store(id, name, minCust, maxCust, avgCookies){
    this.id = id;
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.hourlySales = [];
    this.dailySales = [];
    patStores.push(this);
    this.rate();
    this.salesHourly();
    this.render();
}
Store.prototype.rate = function() {
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
Store.prototype.test = function() {
    alert('test');
};
Store.prototype.salesHourly = function() {
    var total = 0;
    for (var i = 0; i < storeHours.length; i++){
      var temp = Math.floor((this.rate(this.minCust, this.maxCust) * this.avgCookies));
      this.hourlySales.push(temp);
      console.log(this.hourlySales);
      total += this.hourlySales[i];
      }
    this.dailySales.push(total);
  };
Store.prototype.render = function() {
    var ulEl = document.getElementById(this.id);
    this.salesHourly();
      for (var i = 0; i < storeHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i];
        ulEl.appendChild(liEl);
      } 
    var ulEl = document.getElementById(this.id)
      liEl.textContent = 'Daily Sales: ' + this.dailySales;
      ulEl.appendChild(liEl);
      console.log(this.dailySales);
    },

new Store('pike', 'pike', 23, 65, 6.3);
new Store('seatac', 'seatac', 12, 45, 5.4);