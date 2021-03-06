var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//------------------------------------- Classes --------------------------------------------
var Locations = /** @class */ (function () {
    function Locations(city, zip, address, img) {
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.createdY = Math.round(Math.random() * 19) + 2001;
        this.createdM = Math.round(Math.random() * 11) + 1;
        this.createdD = Math.round(Math.random() * 28) + 1;
        this.createdH = Math.round(Math.random() * 24);
        this.createdMin = Math.round(Math.random() * 60);
        this.order = 1;
        array.push(this);
    }
    Locations.prototype.displayCard = function () {
        return "\n            <div class=\"myCard card\" style=\"width: 25rem; order: " + this.order + ";\">\n                <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                    <span class=\"created\">Created: " + this.createdD + "." + this.createdM + "." + this.createdY + ", " + this.createdH + ":" + this.createdMin + "</span>";
    };
    Locations.prototype.displayLoc = function () {
        return "\n                    <h5 class=\"card-title\">" + this.city + "</h5>";
    };
    Locations.prototype.closingDiv = function () {
        return "        \n                    <a id=\"" + this.city + "\" class=\"infoBtn btn btn-primary\">show me more</a>\n                </div>\n            </div>";
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(city, zip, address, img, rName, telNr, type, web) {
        var _this = _super.call(this, city, zip, address, img) || this;
        _this.rName = rName;
        _this.telNr = telNr;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Restaurants.prototype.displayCard = function () {
        return _super.prototype.displayCard.call(this) + "\n                    <h5 class=\"card-title\">" + this.rName + "</h5>\n                    <p class=\"card-text\">Type: " + this.type + "</p>\n                    <a href=\"" + this.web + "\">Homepage</a>\n                    <p class=\"card-text\">ZIP: " + this.zip + " " + this.city + "<Br>Address: " + this.address + "<Br>Tel.Nr.: +" + this.telNr + "</p>\n                </div>\n            </div>";
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zip, address, img, eventName, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, city, zip, address, img) || this;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.displayCard = function () {
        return _super.prototype.displayCard.call(this) + "\n                    <h5 class=\"card-title\">" + this.eventName + "</h5>\n                    <p class=\"card-text\">" + this.eventDate + ", " + this.eventTime + "</p>\n                    <p class=\"card-text\">ZIP: " + this.zip + " " + this.city + "<Br>Address: " + this.address + "<Br></p>\n                    <p class=\"price card-text\">Price: \u20AC " + this.ticketPrice + "</p>\n                </div>\n            </div>";
    };
    return Events;
}(Locations));
//------------------------------------- Arrays --------------------------------------------
var array = [];
var locArray = [
    new Locations("Colombo", 10502, "address", "img/Colombo.jpg"),
    new Locations("Galle", 80000, "address", "img/galle.jpg"),
    new Locations("Mirissa", 81740, "address", "img/mirissa.jpg"),
    new Locations("Weligama", 81700, "address", "img/weligama.jpg"),
    new Locations("Tangalle", 82200, "address", "img/tangalle.jpg"),
    new Locations("Ella", 90090, "address", "img/ella.jpg"),
    new Locations("Jaffna", 40000, "address", "img/Jaffna.jpg"),
    new Locations("Dambulla", 21120, "address", "img/Dambulla.jpg"),
];
var restArray = [
    new Restaurants("Colombo", 10502, "No. 65, C.W.W. Kannangara Mawatha,  Colombo 07", "img/upali.PNG", "Upali's Colombo", 94112695812, "Sri Lankan", "http://www.upalis.com/colombo/default.aspx"),
    new Restaurants("Colombo", 10502, "Liberty Arcade, Colombo 03", "img/raja.PNG", "Raja Bojun", 94114716171, "Sri Lankan", "http://rajabojun.lk/"),
    new Restaurants("Colombo", 10502, "No 25, Clifford Avenue, R.A.De Mel Mawatha, Colombo 03", "img/currypot.PNG", "Curry Pot", 94773454962, "Sri Lankan", "http://www.currypotlk.com/index.php"),
    new Restaurants("Colombo", 10502, "82 Srimath Anagarika Dharmapala Mawatha, Colombo 03", "img/mango.PNG", "The Mango Tree", 94759666999, "Sri Lankan", "https://themangotree.appigo.co/webstore/;jsessionid=C8D328AE257984B6A71AEB2BBC9E1EF9?state=&session=1616153582080&token=&cartId=&bid=BIZ_6ytc7e3s631"),
    new Restaurants("Galle", 80000, "472 Matara Rd", "img/shack.PNG", "The Shack Beach Cafe", 94775415117, "Sri Lankan, Italien, Burger", "https://theshackbeachcafe.com/"),
    new Restaurants("Galle", 80000, "188 Wakwella Road", "img/thousand.PNG", "Thousand Cafe", 94763065292, "Sri Laankan, Burger", "#"),
    new Restaurants("Galle", 80000, "34 Middle St", "img/elita.PNG", "Elita Restaurant", 94772423442, "Sri Lankan", "https://m.facebook.com/elita.restaurant/"),
    new Restaurants("Galle", 80000, "A2, Galle, Sri Lanka", "img/coco.PNG", "CoCo Bay", 94771947957, "Sri Lankan", "https://cocobayunawatuna.com/"),
    new Restaurants("Mirissa", 81740, "Tropical House Restaurant, Udapila Road", "img/tropical.PNG", "Tropical House", 94758009245, "Sri Lankan", "https://tropical-house-resturant-mirissa.business.site/?utm_source=gmb&utm_medium=referral"),
    new Restaurants("Mirissa", 81740, "138/1, Galle Road", "img/dimali.PNG", "Dimali Inn", 94754856245, "Sri Lankan", "https://dimaliinn.blogspot.com/"),
    new Restaurants("Mirissa", 81740, "2 Bandaramulla, Mirissa", "img/dhana.PNG", "Dhana's Curry Pot", 94754962445, "Sri Lankan", "https://dhanas-curry-pot.business.site/?utm_source=gmb&utm_medium=referral"),
    new Restaurants("Mirissa", 81740, "3 Diyagalana Road Yatipila Mirissa", "img/shady.jpg", "Shady Lane Mirissa", 94758034618, "Sri Lankan", "https://www.facebook.com/shadylanemirissa"),
    new Restaurants("Weligama", 81700, "486/C Matara Rd", "img/meewitha.PNG", "Meewitha Cool Spot & Restaurant", 94758079156, "Sri Lankan", "https://www.facebook.com/chamreggaeboy1/"),
    new Restaurants("Weligama", 81700, "No: 39, 1 St cross Road, pelana, Weligama", "img/dul.PNG", "Dulnetha Homestay & Restaurant", 94758045645, "Sri Lankan", "https://dulnetha-homestay-restaurant.business.site/"),
    new Restaurants("Weligama", 81700, "540 Weligama By Pass Road", "img/rooftop.PNG", "Hangten Rooftop", 94758488465, "Sri Lankan", "https://www.hangtimehostel.com/best-restaurant-weligama/"),
    new Restaurants("Weligama", 81700, "No.459 Matara Rd", "img/moms.PNG", "Mom's Kitchen", 94754646455, "Sri Lankan", "https://www.facebook.com/Moms-Kitchen-2231406157177193/"),
    new Restaurants("Tangalle", 82200, "No 131 Pagngnawasa Mawatha", "img/moon.PNG", "Little Moon Restaurant", 94758442156, "Sri Lankan", "https://little-moon-restaurant.business.site/?utm_source=gmb&utm_medium=referral"),
    new Restaurants("Tangalle", 82200, "NO/36 1A Dipankara Road", "img/restro.PNG", "Restro Ready", 94658112165, "Sri Lankan", "https://www.facebook.com/people/Restro-Ready-Restaurant/100054570034537/"),
    new Restaurants("Tangalle", 82200, "Hambantota Main Road Goyambokka", "img/hamb.PNG", "Pavilion", 94546546456, "Sri Lankan", "https://www.pavilion.lk/"),
    new Restaurants("Tangalle", 82200, "30 Deepankara Rd", "img/laroch.PNG", "La Rochelle Family Restaurant", 94218765178, "Sri Lankan", "https://www.facebook.com/La-Rochelle-Family-Restaurant-374075336468775/"),
    new Restaurants("Ella", 90090, "21 Kitalella", "img/elle1.jpg", "Bees Honey Cookery & Restaurant", 94757185713, "Sri Lankan", "https://m.facebook.com/nuwanjith.udara?ref=bookmarks"),
    new Restaurants("Ella", 90090, "No 56 A23, Ella", "img/ella2.jpg", "Cafe C Ella", 94756667812, "Sri Lankan", "http://cafe-c-ella.slue.io/"),
    new Restaurants("Ella", 90090, "No01, Passara Road", "img/raha.PNG", "Raha Ella Sri Lanka", 94626412828, "Sri Lankan", "https://raha-ella-sri-lanka.business.site/"),
    new Restaurants("Ella", 90090, "No.57 Wellawaya-Ella-Kumbalwela Hwy", "img/ella3.PNG", "Caf?? UFO Ella", 94874269426, "Sri Lankan", "https://cafe-ufo-ella.business.site/?utm_source=gmb&utm_medium=referral"),
    new Restaurants("Jaffna", 40000, "91 Ramanathan Rd", "img/jaffna1.PNG", "Chola Dum Biryani", 94216546541, "Sri Lankan", "https://m.facebook.com/CHOLA-DUM-Biryani-108428667595979/?ref=bookmarks"),
    new Restaurants("Jaffna", 40000, "250 Kovil Rd, Jaffna", "img/jaffna2.PNG", "Nallur Bhavan Restaurant", 94684158643, "Sri Lankan", "https://nallur-bhavan-vegetarian-restaurant.business.site/"),
    new Restaurants("Jaffna", 40000, "812 Hospital St, Jaffna", "img/jaffna3.PNG", "Jaffna Authentic Cuisine", 94576389845, "Sri Lankan", "http://www.jacdining.com/"),
    new Restaurants("Jaffna", 40000, "45 Stanley Rd, Jaffna", "img/jaffna4.jpg", "Akshathai/Nila", 94516515351, "Sri Lankan", "http://akshathai.lk/"),
    new Restaurants("Dambulla", 21120, "No 166 , temple junction", "img/dam1.PNG", "Sandra Restaurant", 94218964985, "Sri Lankan", "https://sandrarestaurant.business.site/?utm_source=gmb&utm_medium=referral"),
    new Restaurants("Dambulla", 21120, "Near the police station, Sigiriya Road, Kimbissa", "img/dam2.PNG", "Sanda Sisila Village Food", 94526468651, "Sri Lankan", "https://sandasisilafood.wixsite.com/sanda-sisila-food"),
    new Restaurants("Dambulla", 21120, "vihanga village batuyayapara, Dambulla", "img/dam3.PNG", "Vihanga village", 94565165158, "Sri Lankan", "https://vihangavillage.business.site/"),
    new Restaurants("Dambulla", 21120, "Ambepussa - Trincomalee Hwy, Dambulla", "img/dam4.jpg", "Perera & Sons Dambulla", 94565685156, "Sri Lankan", "https://pereraandsons.com/"),
];
var eventArray = [
    new Events("Colombo", 10502, "188 Wakwella Road", "img/metallica.jpg", "Metallica Live", "29.5.2022", "21:00", 23.00),
    new Events("Colombo", 10502, "188 Wakwella Road", "img/volbeat.jpg", "Volbeat Live", "15.7.2022", "20:30", 22.00),
    new Events("Galle", 80000, "No. 65, C.W.W. Kannangara Mawatha", "img/metallica.jpg", "Metallica Live", "30.5.2022", "21:00", 23.00),
    new Events("Galle", 80000, "No. 65, C.W.W. Kannangara Mawatha", "img/volbeat.jpg", "Volbeat Live", "16.7.2022", "20:30", 22.00),
    new Events("Mirissa", 81740, "Near the police station, Sigiriya Road", "img/metallica.jpg", "Metallica Live", "3.6.2022", "21:00", 23.00),
    new Events("Mirissa", 81740, "Near the police station, Sigiriya Road", "img/volbeat.jpg", "Volbeat Live", "18.7.2022", "20:30", 22.00),
    new Events("Weligama", 81700, "No.57 Wellawaya-Ella-Kumbalwela Hwy", "img/metallica.jpg", "Metallica Live", "5.6.2022", "21:00", 23.00),
    new Events("Weligama", 81700, "No.57 Wellawaya-Ella-Kumbalwela Hwy", "img/volbeat.jpg", "Volbeat Live", "19.7.2022", "20:30", 22.00),
    new Events("Tangalle", 82200, "No: 39, 1 St cross Road, pelana", "img/metallica.jpg", "Metallica Live", "8.6.2022", "21:00", 23.00),
    new Events("Tangalle", 82200, "No: 39, 1 St cross Road, pelana", "img/volbeat.jpg", "Volbeat Live", "21.7.2022", "20:30", 22.00),
    new Events("Ella", 90090, "138/1, Galle Road", "img/metallica.jpg", "Metallica Live", "11.6.2022", "21:00", 23.00),
    new Events("Ella", 90090, "138/1, Galle Road", "img/volbeat.jpg", "Volbeat Live", "23.7.2022", "20:30", 22.00),
    new Events("Jaffna", 40000, "472 Matara Rd", "img/metallica.jpg", "Metallica Live", "13.6.2022", "21:00", 23.00),
    new Events("Jaffna", 40000, "472 Matara Rd", "img/volbeat.jpg", "Volbeat Live", "25.7.2022", "20:30", 22.00),
    new Events("Dambulla", 21120, "No.57 Wellawaya-Ella-Kumbalwela Hwy", "img/metallica.jpg", "Metallica Live", "15.6.2022", "21:00", 23.00),
    new Events("Dambulla", 21120, "No.57 Wellawaya-Ella-Kumbalwela Hwy", "img/volbeat.jpg", "Volbeat Live", "28.7.2022", "20:30", 22.00),
];
//------------------------------------- Add Content --------------------------------------------
function addCards() {
    for (var _i = 0, locArray_1 = locArray; _i < locArray_1.length; _i++) {
        var value = locArray_1[_i];
        document.querySelector("#locCards").innerHTML += value.displayCard() + value.displayLoc() + value.closingDiv();
    }
    var infoBtns = document.getElementsByClassName("btn");
    var _loop_1 = function (i) {
        var infoBtn = infoBtns[i];
        infoBtn.addEventListener("click", function () {
            document.getElementById("locCards").style.display = "none";
            document.getElementById("sort").style.display = "none";
            document.getElementById("hRest").style.display = "block";
            document.getElementById("hEv").style.display = "block";
            for (var _i = 0, restArray_1 = restArray; _i < restArray_1.length; _i++) {
                var value = restArray_1[_i];
                if (value.city == infoBtn.id) {
                    document.getElementById("restCards").innerHTML += value.displayCard();
                }
            }
            for (var _a = 0, eventArray_1 = eventArray; _a < eventArray_1.length; _a++) {
                var value = eventArray_1[_a];
                if (value.city == infoBtn.id) {
                    document.getElementById("eventCards").innerHTML += value.displayCard();
                }
            }
        });
    };
    for (var i = 0; i < infoBtns.length; i++) {
        _loop_1(i);
    }
}
addCards();
//------------------------------------- Sort --------------------------------------------
document.getElementById("sortBtnML").addEventListener("click", function () {
    for (var i = 0; i < array.length; i++) {
        var order = (array[i].createdY + (array[i].createdM / 12) + ((array[i].createdD / 30) / 12) + (((array[i].createdH / 24) / 30) / 12) + ((((array[i].createdMin / 60) / 24) / 30) / 12)) * -1;
        array[i].order = Math.round(order * 100);
    }
    var rem = document.getElementById("locCards");
    while (rem.firstChild) {
        rem.removeChild(rem.lastChild);
    }
    addCards();
});
document.getElementById("sortBtnLL").addEventListener("click", function () {
    for (var i = 0; i < array.length; i++) {
        var order = (array[i].createdY + (array[i].createdM / 12) + ((array[i].createdD / 30) / 12) + (((array[i].createdH / 24) / 30) / 12) + ((((array[i].createdMin / 60) / 24) / 30) / 12));
        array[i].order = Math.round(order * 100);
    }
    var rem = document.getElementById("locCards");
    while (rem.firstChild) {
        rem.removeChild(rem.lastChild);
    }
    addCards();
});
