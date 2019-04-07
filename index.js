function sendSMS(brand) {
    var TMClient = require('textmagic-rest-client');
    let counter = 0;
    let phoneNumber;
    switch(brand) {
        case "truman":
            phoneNumber ="972548120818"; // OMRI
            break;
        case "zozobra":
            phoneNumber ="972502525800"; // RAZ
            break;
        case "labriut":
            phoneNumber ="972523982995"; // MAXIM
            break;
        case "la salata":
            phoneNumber ="972545486339"; // ANAT
            break;
    }

    console.log("phone number",phoneNumber);
    console.log("the brand", brand);
    if(brand && !counter) {
        counter++;
        console.log("sending you an SMS")
        var c = new TMClient('maximparamonov', 'dIhK5GNIosHN9uJfF5pGBDOu0kNTKq');

        c.Messages.send({text: "your order from - ההזמנה שלך התקבלה " + brand , phones: phoneNumber}, function (err, res) {

            console.log('Messages.send()', err, res);

        })
    }

};

window.sendSMS = sendSMS;
