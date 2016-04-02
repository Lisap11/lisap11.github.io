$('a').smoothScroll();



var othersHiddenJB = false;
var othersHiddenDG = false;
var othersHiddenKY = false;

// JB
$( "#jb" ).click(function() {
  // 2)  if DG and KY are both hidden
  if(othersHiddenJB === true){
        // animate DG and KY so they're showing
        $( "#dguetta" ).animate({
          height: 400,
          opacity: 1
        }, 5000, function() {
         $( "#kygo" ).animate({
          height: 400,
          opacity: 1
        }, 5000, function() {
      });
    });
    // 3)  and note that DG and KY are no longer hidden    
    othersHiddenJB = false;
    // 4)  if DG and KY are both showing
  }else{
        // 5)  animate DG and KY so they're hidden
        $( "#dguetta" ).animate({
          height: 0,
          opacity: 0
        }, 5000, function() {
           $( "#kygo" ).animate({
          height: 0,
          opacity: 0
        }, 5000, function() {
      });
     });
    // 6)  and note that DG and KY are hidden
    othersHiddenJB = true;
  }
});

// DG
$( "#dguetta" ).click(function() {
  if(othersHiddenDG === true){
        $( "#jb" ).animate({
          height: 400,
          opacity: 1
        }, 5000, function() {
         $( "#kygo" ).animate({
          height: 400,
          opacity: 1
        }, 5000, function() {
      });
    });
    othersHiddenDG = false;
  }else{
        $( "#jb" ).animate({
          height: 0,
          opacity: 0
        }, 5000, function() {
           $( "#kygo" ).animate({
          height: 0,
          opacity: 0
        }, 5000, function() {
      });
     });
    othersHiddenDG = true;
  }
});

// KY
$( "#kygo" ).click(function() {
  if(othersHiddenKY === true){
        $( "#jb" ).animate({
          height: 400,
          opacity: 1
        }, 5000, function() {
         $( "#dguetta" ).animate({
          height: 400,
          opacity: 1
        }, 5000, function() {
      });
    });
    othersHiddenKY = false;
  }else{
        $( "#jb" ).animate({
          height: 0,
          opacity: 0
        }, 5000, function() {
           $( "#dguetta" ).animate({
          height: 0,
          opacity: 0
        }, 5000, function() {
      });
     });
    othersHiddenKY = true;
  }
});
