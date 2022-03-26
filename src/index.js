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


function getElements(response, keyword, currency) {
  if (response.result === "success") {
    let output = keyword * response.conversion_rates[currency];
    $('.showResults').text(output);
      if (response.conversion_rates[currency] === undefined) {
        $('.showResults').text('The selection you have made is not a valid currency. Please select another currency and try again.');
      }
  } else if (response.result === "error") {
    $('.showResults').text(`There was an error processing your request: ${response['error-type']}`);
  }
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    const keyword = $('#searchKey').val();
    const currency = $("input:radio[name=currency]:checked").val();
    clearFields();
    ExchangeRate.getCurrency()
    .then(function(response) {
      getElements(response, keyword, currency);
    });
  });
});



