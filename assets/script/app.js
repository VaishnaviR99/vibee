$(document).ready(function() {
  const toggleSwitch = $('.switch input');
  const storedTheme = localStorage.getItem('theme') || 'light-theme';

  if (storedTheme) {
    $('body').addClass(storedTheme);
    toggleSwitch.prop('checked', storedTheme === 'dark-theme');
  } else {
    $('body').addClass('light-theme');
  }

  toggleSwitch.change(function() {
    const newTheme = $(this).is(':checked') ? 'dark-theme' : 'light-theme';
    $('body').toggleClass( 'dark-theme','light-theme');
    localStorage.setItem('theme', newTheme);
  });
});
