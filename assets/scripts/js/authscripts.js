'use strict'

const displayForm = function(event) {
  if (event.target.value === '2') {
    if ($('#log-login-show').is(':checked')) {
      $('#message').text('')
      $('.register-info-box').fadeOut();
      $('.login-info-box').fadeIn();

      $('.white-panel').addClass('right-log');
      $('.register-show').addClass('show-log-panel');
      $('.login-show').removeClass('show-log-panel');
    } else if ($('#log-reg-show').is(':checked')) {
      $('#message').text('')
      $('.register-info-box').fadeIn();
      $('.login-info-box').fadeOut();

      $('.white-panel').removeClass('right-log');

      $('.login-show').addClass('show-log-panel');
      $('.register-show').removeClass('show-log-panel');
    }
  }
  if (event.target.value === '1') {
    if ($('#log-login-show').is(':checked')) {
        $('#message').text('')
      $('.register-info-box').fadeOut();
      $('.login-info-box').fadeIn();

      $('.white-panel').addClass('right-log');
      $('.register-show').addClass('show-log-panel');
      $('.login-show').removeClass('show-log-panel');

    }

  }
}

module.exports = {
  displayForm
}
