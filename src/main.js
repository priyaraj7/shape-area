import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Rectangle, Circle, Triangle } from "./shape";

$(document).ready(function() {
  // for rectangle and circle add error showing function
  $("#rectangle").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("#height").val());
    var width = parseInt($("#width").val());
    var rectangleArea = new Rectangle(height, width);
    $("#solution").empty();
    $("#solution").append(rectangleArea.calculateArea());
  });

  $("#circle").submit(function(event) {
    event.preventDefault();
    //debugger;
    var radius = parseInt($("#radius").val());

    var circleArea = new Circle(radius);
    $("#solution1").empty();
    $("#solution1").text(circleArea.calculateArea().toFixed(2));
  });

  $("#triangle").submit(function(event) {
    try {
      event.preventDefault();
      var height1 = validateInput("#height1");
      var base = validateInput("#base");
      var triangleArea = new Triangle(height1, base);
      $("#solution2").empty();
      $("#solution2").append(triangleArea.calculateArea());
    } catch (e) {
      // console.log(e);
    }
  });
  // error showing function
  function validateInput(selector, errorMsg = "Please enter a valid number") {
    const element = $(selector);
    if (element.length === 0) {
      alert("Please pass an valid element");
    }
    const value = parseInt(element.val(), 10);

    if (Number.isNaN(value)) {
      alert(errorMsg);
      $(selector).focus();
      throw new Error(errorMsg);
    }
    return value;
  }
});
