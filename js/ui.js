$(".switch").find("input[type=checkbox]").on("change",function() {
      var status = $(this).prop('checked');

      if(status === true){
        //darkmode
        $('body').css("background-color", "#263238");
        $('#footer').css("background-color", "#263238");

        /* TEXT */
        $('#headlineNewtist').css("color", "white");
        $('#txtSearchArtist').css("color", "white");
        $('#txtNewReleases').removeClass('grey-text');
        $('#txtNewReleases').css("color", "white");
        $('.select-dropdown').css("color", "white");

        window.localStorage.setItem('colorMode', 'dark');

      }
      else{
        //whitemode
        $('body').css("background-color", "white");

        $('#headlineNewtist').css("color", "black");
        $('#txtSearchArtist').css("color", "black");
        $('#txtNewReleases').addClass('grey-text');
        $('.select-dropdown').css("color", "black");


        window.localStorage.setItem('colorMode', 'white');
      }
  });

  function switchColor(color){
    if(color === "dark"){
      //darkmode
      $('.switch').find('input[type=checkbox]').trigger('click');
      $('.switch').find('input[type=checkbox]').click();

      $('body').css("background-color", "#263238");
      $('#footer').css("background-color", "#263238");

      /* TEXT */
      $('#headlineNewtist').css("color", "white");
      $('#txtSearchArtist').css("color", "white");
      $('#txtNewReleases').removeClass('grey-text');
      $('#txtNewReleases').css("color", "white");
      $('.select-dropdown').css("color", "white");

      window.localStorage.setItem('colorMode', 'dark');

    }
    else{
      //whitemode
      $('body').css("background-color", "white");

      $('#headlineNewtist').css("color", "black");
      $('#txtSearchArtist').css("color", "black");
      $('#txtNewReleases').addClass('grey-text');
      $('.select-dropdown').css("color", "black");


      window.localStorage.setItem('colorMode', 'white');
    }
  };


  // FLOATING button

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      hoverEnabled: false
    });

    /* STORAGE COLORMODE */
    let colorMode = window.localStorage.getItem('colorMode');
    let mode = '';

    if(colorMode === 'dark') mode = 'dark';
    else mode = 'white';

    switchColor(mode);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  function scrollToTop(){
      $('html, body').animate({ scrollTop: ($('#txtSearchArtist').offset().top)}, 'slow');
  };