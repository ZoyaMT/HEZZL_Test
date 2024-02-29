var email = "test@hezzl.com";
var password = 123456;
var baseUrl = "https://api-prod.hezzl.com/";
var campaignId = 145602;
var accessToken = "string";
var timeZone = 'string';


// Проверка статуса кода 200
if(pm.response.code === 200) {
    console.log("Status code is 200");
} else {
    console.log("Status code is not 200");
}

// Получение JSON данных из ответа и установка переменной среды "timeZone"
var jsonData = pm.response.json();
pm.environment.set("timeZone", jsonData.time);

// Проверка наличия заголовка "data"
if(jsonData.hasOwnProperty('data')) {
    console.log("Data header is present");
} else {
    console.log("Data header is not present");
}

// Проверка наличия свойства "auth" в объекте "data"
if(jsonData.data.hasOwnProperty('auth')) {
    console.log("Data has auth");
} else {
    console.log("Data does not have auth");
}

// Получение JSON данных из ответа и установка переменной среды "accessToken"
var jsonData = pm.response.json();
pm.environment.set("accessToken", jsonData.accessToken);

// Проверка времени ответа менее 200 мс
if(pm.response.responseTime < 200) {
    console.log("Response time is less than 200ms");
} else {
    console.log("Response time is not less than 200ms");
}
