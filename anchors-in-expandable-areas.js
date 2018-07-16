// What: Provides functionality for cases where a named anchor is situated within an expandable content area.
// Who: Jan Macario
// When: 20180214
//
// Details:
// if there is a hash/anchor included in the URL...
// check to see if there is a corresponding anchor in the page, and...
// if the anchor is within an expandable content area, open that content area, and...
// scroll the viewport to that area...
// plus 100 pixels to account for the height of the header menu.

//is there a hash in the URL?
  if(window.location.hash) {
  //Get hash value
    anchor_name=window.location.hash.substr(1);
  //Get anchor element, if any
    $anchor = jQuery("a[name='" + anchor_name + "']")
  //Get parent expandable content area, if any
    $container = $anchor.parents("div.expanded-content");
  //Expand parent expended-content div, if any
    $container.slideToggle("fast");
  //Scroll viewport to anchor
    jQuery('html, body').animate({
      scrollTop: $anchor.offset().top-100
    }, 1000);
  }