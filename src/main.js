import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { shapeArea } from './shape';

$(document).ready(function () {
  $('#rectangle').submit(function (event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = shapeArea(goal);

    $('#solution').append(output);
  });
});