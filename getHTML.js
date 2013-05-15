getSelectionHTML = function () {
  var userSelection;
  if (window.getSelection) {
    // W3C Ranges
    userSelection = window.getSelection ();
    // Get the range:
    if (userSelection.getRangeAt)
      var range = userSelection.getRangeAt (0);
    else {
      var range = document.createRange ();
      range.setStart (userSelection.anchorNode, userSelection.anchorOffset);
      range.setEnd (userSelection.focusNode, userSelection.focusOffset);
    }
    // And the HTML:
    var clonedSelection = range.cloneContents ();
    var div = document.createElement ('div');
    div.appendChild (clonedSelection);
    return div.innerHTML;
  } else if (document.selection) {
    // Explorer selection, return the HTML
    userSelection = document.selection.createRange ();
    return userSelection.htmlText;
  } else {
    return '';
  }
};
var fromus_txt  = getSelectionHTML();
fromus_txt      = fromus_txt.replace(/\n/g,'');
alert(fromus_txt);
if(/id=\"/.test(fromus_txt))
{alert(/(id=\"[^\"]{1,}\")/gi.match(fromus_txt));}
if(/class=\"/.test(fromus_txt))
{alert(/(class=\"[^\"]{1,}\")/gi.match(fromus_txt));}

