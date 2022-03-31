const base_url = "https://ersc-programacaoweb.getsandbox.com:443/";

window.onload = function () {
  //EXERCICIO 1
  exercicio_1();

  //EXERCICIO 2
  exercicio_2();

  //exercicio 3
  exercicio_3();

  //exercicio 4
  exercicio_4();
};

function exercicio_1() {
  $.get(base_url + "api/classes/name", (res) => {
    $("#classname").text(res.data);
  });
}

function exercicio_2() {
  $.get(base_url + "api/users/myprofile", (res) => {
    $("#fullname").text(res.firstName + " " + res.lastName);
    $("#address").text(res.street + ", " + res.city);
  });
}

function exercicio_3() {
  $("#check").on("click", function () {
    var nota = $("#mark").val();
    if (nota && nota >= 0 && nota <= 20) {
      if (nota < 10) {
        $("#resultcheck").text("Nota negativa!");
      } else {
        $("#resultcheck").text("Nota positiva!");
      }
    } else {
      $("#resultcheck").text("Nota inválida!");
    }
  });
}

function exercicio_4() {
  $("#search").on("click", function () {
    var classname = $("#classname").text();

    $.get(base_url + "api/classes/mark/" + classname, (res) => {
      console.log(res);
      if (res.status == "ok") {
        $("#resultcheck").text("Disciplina não existe!");
      } else {
        $("#resultcheck").text(res.data.mark);
      }
    });
  });
}

$("button").click(function () {
  $.get("demo_test.asp", function (data, status) {
    alert("Data: " + data + "\nStatus: " + status);
  });
});
