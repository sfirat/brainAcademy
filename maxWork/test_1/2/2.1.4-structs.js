var weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

//console.log(weekdays[numDay-1]);

var vasya = {
    name: "Vasya",
    day: 1, //Пн
    exp: 2
};

var ivanich = {
    name: "Ivan Ivanich",
    day: 4, //Чт
    exp: 15
};

function salaryOnExp(person){
    var base = 50;
    var m = 1.3;

    return base + person.exp * m;
}

function currencyTransform(numInDollar, toCurrency){
    var listOfCurrencies = {
        UAH: 26,
        EUR: 0.85,
        RUB: 75,
        JPN: 120
    };

    if(!listOfCurrencies[toCurrency]){
        return 0;
    }

    return numInDollar * listOfCurrencies[toCurrency];
}

function sendSmsManagerSalary(person, currency){
    var salary = salaryOnExp(person);

    salary = currencyTransform(salary, currency);

    console.log(person.name + " получает " + salary.toFixed(2) + " " + currency);
}

function sendSmsWarnWork(person){
    console.log("Здарова, " + person.name + "! Вам на смену в " + weekdays[person.day-1])
}

//user do smth
sendSmsManagerSalary(ivanich, "UsH");
sendSmsManagerSalary(vasya, "UAH");

