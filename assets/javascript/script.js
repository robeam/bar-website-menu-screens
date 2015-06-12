
$(document).ready(function() {

  $.backstretch("assets/images/bar_bg.jpg");

  //Wiondow Height
  var windowHeight = $(window).height();
  $('#window-height').css("height",windowHeight);

  $(window).resize(function() {
    windowAdjustedHeight = $(window).height();
    $('#window-height').css("height",windowAdjustedHeight);
  })


  //Spreadsheet ID
  var spreadsheet_id = '1acJiyyol2E9CcmhCR2DrmSjie6Nlih9M9viGV2HlR5c';

    (function() {
      var reponsive_table = new ResponsiveTable(spreadsheet_id, [["beer","Beer"],["style","Style"],["brewery","Brewery"],["location","Location"],["abv","ABV %"],["description","Description"],['small','150ml'],['medium','250ml'],['large','500ml'],['srm','SRM']]);

      var inIframe = function() {
        try {
          return window.self !== window.top;
        } catch (e) {
          return true;
        }
      };

      $(function() {
        if (inIframe())
          $('body').css('overflow-x', 'hidden');
      });
    })();


});
