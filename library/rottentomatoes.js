$booktitle = $('#bookTitle').text();
if ($booktitle) {
  $booktitle = $booktitle.replace(/\((.*)/, ''); // remove subtitle in brackets
  //alert($booktitle);
  window.location.href = "http://voyager.falmouth.ac.uk/vwebv/search?searchArg="+$booktitle+"&searchCode=TKEY%5E&limitTo=TYPE%3Dam&recCount=10&searchType=1&page.search.search.button=Search"

} else {
  alert('sorry, no book title detected on this page');
}

/*
converted to jquery bookmarklet via http://benalman.com/code/test/jquery-run-code-bookmarklet/
javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){$booktitle = $('#bookTitle').text();if ($booktitle) {  $booktitle = $booktitle.replace(/\((.*)/, ''); // remove subtitle in brackets  //alert($booktitle);  window.location.href = "http://voyager.falmouth.ac.uk/vwebv/search?searchArg="+$booktitle+"&searchCode=TKEY%5E&limitTo=TYPE%3Dam&recCount=10&searchType=1&page.search.search.button=Search"} else {  alert('sorry, no book title detected on this page');}});
anchor tag:
<a href="javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){$booktitle = $('#bookTitle').text();if ($booktitle) {  $booktitle = $booktitle.replace(/\((.*)/, ''); // remove subtitle in brackets  //alert($booktitle);  window.location.href = "http://voyager.falmouth.ac.uk/vwebv/search?searchArg="+$booktitle+"&searchCode=TKEY%5E&limitTo=TYPE%3Dam&recCount=10&searchType=1&page.search.search.button=Search"} else {  alert('sorry, no book title detected on this page');}});">goodreads to library</a>
*/