/* 
 Created on : 25/08/2016, 20:40:56
 Author     : 201611386
 nome:  eduardo rodrigues fernandes
 matricula:  201611386 
 */
/* global atual */

function sendText() {
    
    var htpp = document.getElementById("idhtml").value;
    var resposta = document.getElementById("resposta");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', htpp, true);
    xhr.onload = function (d) {
        if (this.status === 200) {
            // document.getElementById("resposta").innerHTML = this.responseText;
            var body = this.responseText;
            var jsonData = JSON.parse(body);
            var result = jsonData.result;
            var msg = "";
            var resulto = result.length - 1;
            if (result.length > 0) {
                var titulo = "Telegram Msn";
                document.title = "(" + result.length + ")" + titulo;
                for (i = resulto; i > -1; i--) {
                    var text = result[i].message.text;
                    var nome = result[i].message.from.first_name;
                    var data = result[i].message.date;
                    var h = new Date(data * 1000);
                    var date = h.toLocaleString();
                    var msg = "<p>" + msg + (date + " : " + nome + " : " + text) + "</p>";
                    resposta.innerHTML = msg;
                }
            }
        }
    };
    xhr.send();
    
    // setInterval(sendText(),50000);//ser coloca 1000 gera muitas requisicoes e seu cpu nao aguenta..kk
}

function atualizar(){
$(document).ready(function () {
       setInterval(function() {
          $.get(sendText(), function (result) { // coloca a funçao send text para atualizar ela..
              $('idhtml').html(result);  // nome da DIV que vai atualizar.
          });
       }, 3000); // segundos
    });
    }




