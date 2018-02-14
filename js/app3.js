var storeHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
var patStores = [];
var storeTable = document.getElementById('pike'); 
function Store(id, name, minCust, maxCust, avgCookies) {
    this.id = id;
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.hourlySales = [];
    this.calcHourlySales();
    this.dailySales = [];
    this.calcDailySales();
    patStores.push(this);
    console.table(this);
    this.render();
}
Store.prototype.calcHourlySales = function(){
    for (var i = 0; i < storeHours.length; i++){
        this.hourlySales.push(
            Math.floor((Math.random() * (this.maxCust-this.minCust)) + this.minCust))
        };
};
Store.prototype.calcDailySales = function(){
    var total = 0;
    for (var i = 0; i < this.hourlySales.length; i++){
        total += this.hourlySales[i];
    };
    this.dailySales.push(total);
};
Store.prototype.render = function(){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
};
new Store('pike', 'pike', 23, 65, 6.3);
new Store('seatac', 'seatac', 11, 19, 2.2);
    
  /* Store.prototype.render = function() {
    var ulEl = document.getElementById(this.id);
    this.calcHourly();
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
    */