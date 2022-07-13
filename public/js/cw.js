const currencyRatio = {
    USD: {
        KRW:1284.23,
        USD:1,
        unit:"달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
    },
    KRW: {
        KRW:1,
        USD:0.00078,
        unit:"원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let fromCurrency = 'KRW';
let toCurrency = 'USD';

function M_convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "from") {
        //입력값 받기
        amount = document.getElementById("fromAmount").value;
        //환전하기
        let M_convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
        //환전값 보여주기
        document.getElementById("toAmount").value = M_convertedAmount;
        //환전한값 한국어로
        M_renderKoreanNumber(amount, M_convertedAmount);
    } else {
        amount = document.getElementById("toAmount").value;
        let M_convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
        document.getElementById("fromAmount").value = M_convertedAmount;
        M_renderKoreanNumber(M_convertedAmount, amount);
    }
}
function M_renderKoreanNumber(from, to) {
    document.getElementById("fromNumToKorea").textContent = 
        M_readNum(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent =
        M_readNum(to) + currencyRatio[toCurrency].unit;
}
function M_readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
        let unitResult =
         (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
        resultArray[i] = unitResult;    
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
};









function convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "s_from") {
        //입력값 받기
        amount = document.querySelector("#s_fromAmount").value;
        //환전하기
        let convertedAmount = amount * Currency[FromCurrency][ToCurrency];
        //환전값 보여주기
        document.querySelector("#s_toAmount").value = convertedAmount;
        //환전한값 한국어로
        renderKoreanNumber(amount, convertedAmount);
    } else {
        amount = document.querySelector("#s_toAmount").value;
        let convertedAmount = amount * Currency[ToCurrency][FromCurrency];
        document.querySelector("#s_fromAmount").value = convertedAmount;
        renderKoreanNumber(convertedAmount, amount);
    }
}
function renderKoreanNumber(s_from, s_to) {
    document.querySelector("#s_fromNumToKorea").textContent = 
        readNum(s_from) + Currency[FromCurrency].unit;
    document.querySelector("#s_toNumToKorea").textContent =
        readNum(s_to) + Currency[ToCurrency].unit;
}
function readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
        let unitResult =
         (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
        resultArray[i] = unitResult;    
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
};

const Currency = {
    USD: {
        KRW:1284.23,
        USD:1,
        unit:"달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
    },
    KRW: {
        KRW:1,
        USD:0.00078,
        unit:"원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let ToButton = document.querySelector("#s_to-button");
let FromButton = document.querySelector("#s_from-button");
let FromCurrency = 'KRW';
let ToCurrency = 'USD';



function convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "s_from") {
        //입력값 받기
        amount = document.querySelector("#s_fromAmount").value;
        //환전하기
        let convertedAmount = amount * Currency[FromCurrency][ToCurrency];
        //환전값 보여주기
        document.querySelector("#s_toAmount").value = convertedAmount;
        //환전한값 한국어로
        renderKoreanNumber(amount, convertedAmount);
    } else {
        amount = document.querySelector("#s_toAmount").value;
        let convertedAmount = amount * Currency[ToCurrency][FromCurrency];
        document.querySelector("#s_fromAmount").value = convertedAmount;
        renderKoreanNumber(convertedAmount, amount);
    }
}
function renderKoreanNumber(s_from, s_to) {
    document.querySelector("#s_fromNumToKorea").textContent = 
        readNum(s_from) + Currency[FromCurrency].unit;
    document.querySelector("#s_toNumToKorea").textContent =
        readNum(s_to) + Currency[ToCurrency].unit;
}
function readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
        let unitResult =
         (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
        resultArray[i] = unitResult;    
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
};





const maCurrency = {
    USD: {
        KRW:1284.23,
        USD:1,
        unit:"달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
    },
    KRW: {
        KRW:1,
        USD:0.00078,
        unit:"원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
};
var ma_unitWords = ["", "만", "억", "조", "경"];
var ma_splitUnit = 10000;
let maToButton = document.querySelector("#ma_to-button");
let maFromButton = document.querySelector("#ma_from-button");
let maFromCurrency = 'KRW';
let maToCurrency = 'USD';



function ma_convert(type) {
    console.log("here");
    let ma_amount = 0;
    if (type == "ma_from") {
        //입력값 받기
        ma_amount = document.querySelector("#ma_fromAmount").value;
        //환전하기
        let convertedAmount = ma_amount * maCurrency[maFromCurrency][maToCurrency];
        //환전값 보여주기
        document.querySelector("#ma_toAmount").value = convertedAmount;
        //환전한값 한국어로
        ma_renderKoreanNumber(ma_amount, convertedAmount);
    } else {
        ma_amount = document.querySelector("#ma_toAmount").value;
        let convertedAmount = amount * maCurrency[maToCurrency][maFromCurrency];
        document.querySelector("#ma_fromAmount").value = convertedAmount;
        ma_renderKoreanNumber(convertedAmount, ma_amount);
    }
}
function ma_renderKoreanNumber(ma_from, ma_to) {
    document.querySelector("#ma_fromNumToKorea").textContent = 
        ma_readNum(ma_from) + maCurrency[maFromCurrency].unit;
    document.querySelector("#ma_toNumToKorea").textContent =
        ma_readNum(ma_to) + maCurrency[maToCurrency].unit;
}
function ma_readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < ma_unitWords.length; i++) {
        let unitResult =
         (num % Math.pow(ma_splitUnit, i + 1)) / Math.pow(ma_splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
        resultArray[i] = unitResult;    
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + ma_unitWords[i] + resultString;
    }
    return resultString;
};



var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        //접속이 성공적이면 null 값 반환, 그 외는 status 값 반환
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};


$(document).ready(function() {
    var weatherIcon = {
      '01' : 'fas fa-sun',
      '02' : 'fas fa-cloud-sun',
      '03' : 'fas fa-cloud',
      '04' : 'fas fa-cloud-meatball',
      '09' : 'fas fa-cloud-sun-rain',
      '10' : 'fas fa-cloud-showers-heavy',
      '11' : 'fas fa-poo-storm',
      '13' : 'far fa-snowflake',
      '50' : 'fas fa-smog'
    };

  $.ajax({
  url:'https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric',
  dataType:'json',
  type:'GET',
  success:function(data){
    var $Icon = (data.weather[0].icon).substr(0,2);
    var $Temp = Math.floor(data.main.temp) + 'º';
    var $city = data.name;

    $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
    $('.CurrTemp').prepend($Temp);
    $('.city').append($city);
    }
  })
  });

