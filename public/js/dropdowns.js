$(document).ready(() => {


  $('#about-me-dropdown').on('click', e => {
    e.preventDefault();
    $('#aboutMeContent').toggle('show');
  });

  $('#contactDropdown').on('click', e => {
    e.preventDefault();
    $('#contactForm').toggle('show');
  });

});