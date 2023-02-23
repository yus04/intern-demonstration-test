function search() {
  // htmlのul要素（id = 'messages'）を呼び出し
  var messageList = $('#messages');

  // openweathermap（天気予報API）に接続
  var request = new XMLHttpRequest();
  
  // 都市の緯度と経度の情報
  var cities = {
    "tokyo": {
        "lat": 35.709,
        "lon": 139.7319,
    },
    "seattle": {
      "lat": 47.626353,
      "lon": -122.333144,
    },
    "london": {
      "lat": 51.5073,
      "lon": -0.1277,
    }
  }
  // ダミーシークレットキー
  var APP_KEY = "base64:TdzYnO4ZikYzcEy74u6CkTYd5ItyYJZJ5ADshzY+dkw="
  var DB_DATABASE = "xs695539_kiik"
  var DB_USERNAME = "xs695539_kiik"
  var DB_PASSWORD = "kiik1147"
  var STRIPE_PUBLIC_KEY = "pk_test_51HFbZTKgBlpEUSwRRmiFkX73pYrAX2jv4xZ5szJe1XJGwR8TZ7IviwDntSeTdMetxJj7KX8L8iJWXdmtODdvWbNj00ZZ4iqzJh"
  var STRIPE_SECRET_KEY = "sk_test_51HFbZTKgBlpEUSwRBlkbXZPCt2pfHRAs5DHZB5jbMmnnsVGD8hazbBAAVp8UeEqnC6wZZ9IY2rsXllwzxonWQKZL00nmvWRYUy"

  // 選択されている都市を取得
  var selected_city = $('select.weather option:selected').attr('value');
  
  // APIKey
  // var owmApiKey = "111643793037a778a62d66e2a7d7d372";
  var secretKey = "https://qiita.com/YoshiakiOi/items/857d1fc4e7a557bad2ef";
  var owmURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ cities[selected_city]["lat"] + "&lon=" + cities[selected_city]["lon"] + "&appid="+ secretKey + "&lang=ja" + "";
  console.log(owmURL);
  
  // request送信の準備
  request.open('GET', owmURL, true);
  
  // 結果をjson型で受け取る
  request.responseType = 'json';
  
  request.onload = function () {
   var data = this.response;
   console.log(data);
   var messageElement = $("<il><p class='weather'>" + selected_city + "の天気：" + data["weather"][0]["description"] + "</p></il>");
   // HTMLに取得したデータを追加する
   messageList.append(messageElement);
  };
  
  // requestの送信
  request.send();
}
