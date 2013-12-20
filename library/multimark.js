var site=null;
site = window.location.host;

var selector=null;
var media=null;
switch(site)
{
  case 'www.goodreads.com':
    selector = '#bookTitle';
    media = 'type=am'; // book
    break;
  case 'www.rottentomatoes.com':
    selector = '.movie_title span';
    media = 'medium=v'; // video
    break;
  case 'www.imdb.com':
    selector = '#overview-top h1.header span.itemprop';
    media = 'medium=v'; // video
    break;
  case 'www.suggestmemovie.com':
    selector = '.left-content .contentbox h1';
    media = 'medium=v'; // video
    break;
  case 'en.wikipedia.org':
    selector = '#firstHeading';
    media = ''; // video
    break;
  case 'www.flixster.com':
    selector = 'div.bd h1.title span.bold[itemprop=name]'; // shakey - poor semantics, relies on bold
    media = 'medium=v'; // video
    break;
}

if (selector) {
  title = $(selector).text().trim();
  goto_catalogue(title, media);
} else {
   alert("Can't find the item on this page I shoul look up, sorry");
}


function validate_title(title) {
  title = title.replace(/\((.*)/, ''); // remove brackets
  title = encodeURIComponent(title);
  return title;
}

function goto_catalogue(title, media) {
  var searchargument = 'title';
  switch (searchargument) {
  case 'title':
    title = validate_title(title);
    query = "http://voyager.falmouth.ac.uk/vwebv/search?searchArg1="+title+"&argType1=phrase&searchCode1=TKEY&combine2=and&searchArg2=&argType2=any&searchCode2=GKEY&combine3=and&searchArg3=&argType3=any&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&"+media+"&recCount=10&searchType=2&page.search.search.button=Search";
    window.location.href = query;
    break;
  case 'keyword':
    title = validate_title(title);
    query = "http://voyager.falmouth.ac.uk/vwebv/search?searchArg1="+title+"&argType1=phrase&searchCode1=GKEY&combine2=and&searchArg2=&argType2=any&searchCode2=GKEY&combine3=and&searchArg3=&argType3=any&searchCode3=GKEY&year=2012-2013&fromYear=&toYear=&"+media+"&recCount=10&searchType=2&page.search.search.button=Search";
    window.location.href = query;
    break;
  }

}