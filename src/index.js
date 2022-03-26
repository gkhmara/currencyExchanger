import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/business.js';

function clearFields() {
  // $('#searchKey').val("");
  $('.showImages').text("");
  $('.showResults').text("");
}


function getElements(response, keyword) {
  for (let i = 0; i < 1; i++) {
  if (response.conversion_rates['ZMW']) {
    let output = keyword * response.conversion_rates['ZMW'];
    $('.showResults').text(output);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.message}`);
  }
}}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    const keyword = $('#searchKey').val();
    clearFields();
    ExchangeRate.getBike()
    .then(function(response) {
      getElements(response, keyword);
    });
  });
});



