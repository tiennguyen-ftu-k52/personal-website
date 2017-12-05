$(document).ready(function() {
  //Navbar
  $('.header .navbar .navbar-nav .nav-item').on('click', function (e) {
    $('.header .navbar .navbar-nav .nav-item').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  //Circle progress bar
  function createCircleProgressBar(selector, text, textColor, toColor) {
    return new ProgressBar.Circle(selector, {
      color: textColor,
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6,
      from: {color: '#FFEA82', a:0},
      to: {color: toColor, a:1},
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.setText(text);
        circle.text.style.fontWeight = 500;
      }
    });
  }
  var vietnameseCircleBar = createCircleProgressBar('.section-languages #vietnamese', 'Vietnamese', '#01BAFD', '#01BAFD');
  var englishCircleBar =createCircleProgressBar('.section-languages #english', 'English', '#01BAFD', '#01BAFD');
  vietnameseCircleBar.animate(1.0);
  englishCircleBar.animate(0.7);

  // My latest works
  function listProjects(selector, projects) {
    $('.section-latest-works #' + selector).on('click', function (e) {
      $('.section-latest-works .btn-group .btn.btn-outline-primary').removeClass('active');
      $(e.currentTarget).addClass('active');
      $('.section-latest-works .project').addClass('hidden');
      projects.map(function (project) {
        $('.section-latest-works #' + project).removeClass('hidden');
      });
    });
  }
  listProjects('all', ['camos', 'victoria-secret', 'lumin-pdf', 'talent-wasabi', 'time-tracking', 'versaclimber']);
  listProjects('meteor', ['lumin-pdf', 'time-tracking', 'versaclimber']);
  listProjects('react', ['camos', 'talent-wasabi']);
  listProjects('electron', ['camos']);
  listProjects('node', ['camos', 'victoria-secret', 'lumin-pdf', 'talent-wasabi']);
});