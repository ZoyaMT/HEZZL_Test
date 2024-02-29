const allure = require('allure-js-commons');

// Тест на проверку статус кода
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    allure.createStep("Verify status code is 200", () => {
        allure.attachment('Response', JSON.stringify(pm.response.json(), null, 2), 'application/json');
    })();
});

// Получение данных из ответа и сохранение в переменную среды
var jsonData = pm.response.json();
pm.environment.set("timeZone", jsonData.time);

// Тест на наличие заголовка 'data'
pm.test("Data header is present", () => {
    pm.expect(jsonData).to.have.property('data');
    allure.createStep("Verify data header is present", () => {
        allure.attachment('Response', JSON.stringify(jsonData, null, 2), 'application/json');
    })();
});

// Тест на наличие свойства 'auth' в поле 'data'
pm.test("Data has auth", () => {
    pm.expect(jsonData.data).to.have.property('auth');
    allure.createStep("Verify data has auth property", () => {
        allure.attachment('Response', JSON.stringify(jsonData, null, 2), 'application/json');
    })();
});

// Получение данных из ответа и сохранение в переменную среды
var jsonData = pm.response.json();
pm.environment.set("accessToken", jsonData.accessToken);

// Тест на проверку времени ответа
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
    allure.createStep("Verify response time is less than 200ms", () => {
        allure.attachment('Response', JSON.stringify(pm.response.json(), null, 2), 'application/json');
    })();
});

// Генерация отчета Allure
allure.endCase();