var storeHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00'];
var patStores = [];
var storeTable = document.getElementById('pike'); 
var pikeForm = document.getElementById('pikeForm');
function Store(name, minCust, maxCust, avgCookies) {
    this.name = name + ' sales: ';
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.hourlySales = [];
    this.calcHourlySales();
    this.dailySales = [];
    this.calcDailySales();
    patStores.push(this);
}
Store.prototype.calcHourlySales = function(){
    for (var i = 0; i <= storeHours.length; i++){
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
    for (var i = 0; i < storeHours.length; i++){
        var tdEl = document.createElement('td');
        tdEl.textContent = this.hourlySales[i];
        trEl.appendChild(tdEl);
    };
    var tdEl = document.createElement('td')
    tdEl.textContent = this.dailySales;
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
};
new Store('pike', 23, 65, 6.3);
new Store('seatac', 11, 19, 2.2);
new Store('sc', 11, 38, 3.7);
new Store('capHill', 20, 38, 2.3);
new Store('alki', 2, 16, 4.6);
//-=-=-=-=-=-=-
function makeHeaderRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Name: ';
    trEl.appendChild(thEl);
    for (var i = 0; i < storeHours.length; i++){
        var thEl = document.createElement('td')
        thEl.textContent = storeHours[i];
        trEl.appendChild(thEl);
        storeTable.appendChild(trEl);
    }
    var thEl = document.createElement('td');
    thEl.textContent = 'Daily Total:';
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
};
function makeStoreRows(){
    for (var i = 0; i < patStores.length; i++){
        patStores[i].render();
    };
};
    makeHeaderRow();
    makeStoreRows();
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function appendForm(event){
    event.preventDefault();
    patStores = [];
    new Store(event.target.storeName.value, event.target.minCust.value, event.target.maxCust.value, event.target.avgCookies.value);
    if (!event.target.storeName.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookies.value){
        return alert('Fields cannot be empty!');
    };
    if (event.target.minCust.value - event.target.minCust.value !=0){
        return alert('Minimum Customers must be a number.')
    } else {
        if (event.target.maxCust.value - event.target.maxCust.value !=0){
            return alert('Maximum Customers must be a number.')
        } else {
            if (event.target.avgCookies.value - event.target.avgCookies.value !=0){
                return alert('Average Cookies must be a number.')
            } else {
                if (event.target.minCust.value < 0){
                    return alert('There must be at least 0 customers.')
                } else {
                    if (event.target.maxCust.value <=0){
                        return alert('Maximum Customers must be greater than 0.')
                    } else {
                        if (event.target.avgCookies.value <=0){
                            return alert('Average Cookies must be greater than 0.')
                        } else {
                            if (event.target.maxCust.value - event.target.minCust.value < 0){
                                return alert('Maximum Customers must be at least Minimum Customers.')
                            }
                        }
                    }
                }
            }
        }
    }
    var storeName = event.target.storeName.value;
    var minCust = event.target.minCust.value;
    var maxCust = event.target.maxCust.value;
    var avgCookies = event.target.avgCookies.value;
    makeStoreRows();
};
pikeForm.addEventListener('submit', appendForm);