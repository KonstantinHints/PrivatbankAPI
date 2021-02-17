$.getJSON('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',    //ссылка на API привата. можно добавить в переменную, чтобы потом быстро менять.
function (data) {
	console.log(data);                                                           //добавил чтобы проверять работу API
	for(var i = 0; i < data.length; i++) {                                       //length дает к-во элементов массива
		var usdCoursBuy = data[0].buy;
		var usdCoursSale = data[0].sale;
		var eurCoursBuy = data[1].buy;
		var eurCoursSale = data[1].sale;
		var rurCoursBuy = data[2].buy;
		var rurCoursSale = data[2].sale;
	}
	$(".usdCoursBuy").append(usdCoursBuy);
	$(".usdCoursSale").append(usdCoursSale);
	$(".eurCoursBuy").append(eurCoursBuy);
	$(".eurCoursSale").append(eurCoursSale);
	$(".rurCoursBuy").append(rurCoursBuy);
	$(".rurCoursSale").append(rurCoursSale);
	});
$.getJSON('https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', //api НБУ
function (data) {
	console.log(data);                                                             //добавил чтобы проверять работу API
	if (data.length > 2) {                                                         //начиная с 16 00 пятницы и до 8 утра понедельника дает только USD
		for(var i = 0; i < data.length; i++) {
			var nbuUsdCours = data[27].rate;
			var nbuEurCours = data[34].rate;
			var nbuRurCours = data[19].rate;
		}
		} else {
		alert ('У НБУ выходной :)');                                                //когда от НБУ нет данных - скажет об этом пользователю и выедет 0
		var nbuUsdCours = 0;
		var nbuEurCours = 0;
		var nbuRurCours = 0;
	}
	$(".nbuEurCours").append(nbuEurCours);
	$(".nbuRurCours").append(nbuRurCours);
	$(".nbuUsdCours").append(nbuUsdCours);
});


