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

const exercicio_4 = () => {
  $("#check4").on("click", () => {
    $("#result4").text("");
    var mark = $("#mark4").val();

    if (mark.length > 1 && mark.length < 5) {
      $.get(base_url + "api/classes/mark/" + mark, (res) => {
        if (res.status === "ok") {
          $("#result4").text(
            `Class Name: ${res.data.classname} - Mark: ${res.data.mark}`
          );
        } else {
          $("#result4").text(res.message);
        }
      });
    } else {
      $("#result4").text("Invalid Mark!");
    }
  });
};
