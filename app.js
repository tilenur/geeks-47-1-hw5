var красный = false;
var желтый = false;
var зеленый = false;

var userInput = "зеленый";

if (userInput === "красный") {
    красный = true;
}
else if (userInput === "желтый") {
    желтый = true;
}
else if (userInput === "зеленый") {
    зеленый = true;
}

if (красный)  {
    console.log("Остановитесь!")
}
else if (желтый) {
    console.log("Приготовьтесь!")
}
else  if (зеленый) {
    console.log("Можно ехать!")
}

else {
    console.log("Ошибка: некорректный цвет светофора.")
}


