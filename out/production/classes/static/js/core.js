// Generated by CoffeeScript 2.3.0
(function() {
  var Passboy;

  Passboy = (function() {
    class Passboy {
      static init() {
        console.log("Init...");
        return this.listener(this.loginButton, "click", () => {
          return this.post(this.server + this.apiLogin, {
            email: this.loginInput.value
          }, (data) => {
            return alert(data);
          });
        });
      }

      static listener(element, event, callback) {
        return element.addEventListener(event, callback);
      }

      static post(url, data, callback) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.send(JSON.stringify(data));
        return xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            return callback(xhr.responseText);
          }
        };
      }

    };

    Passboy.server = "http://192.168.0.101:8080";

    Passboy.apiLogin = "/api/loginbyemail";

    Passboy.loginInput = document.querySelector(".wrap-login-input input");

    Passboy.loginButton = document.querySelector(".wrap-login-button");

    return Passboy;

  }).call(this);

  Passboy.init();

}).call(this);

//# sourceMappingURL=core.js.map