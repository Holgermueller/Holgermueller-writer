$(document).ready(() => {

  $('#about-me-dropdown').on('click', e => {
    e.preventDefault();
    $('#aboutMeContent').toggle('show');
  });

  $('#blogButton').on('click', e => {
    e.preventDefault();
    $('#blogDropdown').toggle('show');
  });

  $('#contactDropdown').on('click', e => {
    e.preventDefault();
    $('#contactForm').toggle('show');
  });

  $('#chapOneBtn').on('click', e => {
    e.preventDefault();
    $('#chapterOneContent').toggle('show');
  });

});