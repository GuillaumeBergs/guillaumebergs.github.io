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

var fromus_selectedText='';
if (window.getSelection) 
{fromus_selectedText = window.getSelection();}
else if (document.selection) 
{fromus_selectedText = document.selection.createRange().text;}

var fromus_txt    = getSelectionHTML();
fromus_txt        = fromus_txt.replace(/\n/g,'');
alert(fromus_txt);



if(/id=\"/.test(fromus_txt))
{
 var fromus_idmatch    = fromus_txt.match(/id=(\"[^\"]{1,}\")/mgi);
  alert(fromus_idmatch);
  
}
if(/class=\"/.test(fromus_txt))
{
var fromus_classmatch = fromus_txt.match(/class=(\"[^\"]{1,}\")/mgi);  
  alert(fromus_classmatch);
  
}

alert("Ce qui est ajouté à la base de données est...");

if(fromus_idmatch !=undefined)
{
    if(fromus_classmatch !=undefined)
  {
     // id et class     
 alert("<getprodpricetype>\"id\"<\/getprodpricetype>\n<getprodprice>"+fromus_idmatch[0].substring(3,fromus_idmatch[0].length)+"<\/getprodprice>");
 alert("<getprodpricetype>\"class\"<\/getprodpricetype>\n<getprodprice>"+fromus_classmatch[0].substring(6,fromus_classmatch[0].length)+"<\/getprodprice>");
     
  }
    else
  {
    //id sans class
 alert("<getprodpricetype>\"id\"<\/getprodpricetype>\n<getprodprice>"+fromus_idmatch[0].substring(3,fromus_idmatch[0].length)+"<\/getprodprice>");
      
  }
}
else
{
    if(fromus_classmatch !=undefined)
  {

 alert("<getprodpricetype>\"class\"<\/getprodpricetype>\n<getprodprice>"+fromus_classmatch[0].substring(6,fromus_classmatch[0].length)+"<\/getprodprice>");
  
  }
    else
  {
    //ni class ni id
  }  
}
alert("Et ce qui est affiché dans la case est...");
alert(fromus_selectedtext);
