
module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate() {

    let date = new Date();//this givest the long format with gmt and all
    let day = "";

    let options = { weekday: 'long', month: 'long', day: 'numeric' };

    day = date.toLocaleDateString("en-us", options);
    return day;
}

function getDay() {

    let date = new Date();//this givest the long format with gmt and all
    let day = "";

    let options = { weekday: 'long' };

    day = date.toLocaleDateString("en-us", options);

    return day;
}

