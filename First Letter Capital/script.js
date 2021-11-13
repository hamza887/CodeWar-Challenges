// Check If It's a Title String

// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.


function checkTitle(title) {
		const h= title.split(' ');
  const maptitle= h.map(a=> a.charAt(0).toUpperCase()===a.charAt(0));
  return maptitle.includes(false)? false:true;
}

checkTitle("A Mind boggling Achievement") 