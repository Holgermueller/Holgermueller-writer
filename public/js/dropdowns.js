$(document).ready(() => {

  $('#about-me-dropdown').on('click', e => {
    console.log('click');
    e.preventDefault();
    $(this).toggle();
  });

});