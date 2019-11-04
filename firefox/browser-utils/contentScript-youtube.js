var url = document.URL;
console.log('Running content script for youtube url - ' + url);

var getting_hide_youtube_related_vids = browser.storage.sync.get('hide_youtube_related_vids');
getting_hide_youtube_related_vids.then( (res) => {
	console.log('hide_youtube_related_vids=' + res.hide_youtube_related_vids);
});

document.addEventListener("DOMNodeInserted", function(e) {

	if( hide_youtube_related_vids && ( e.target.nodeName == "div" || e.target.nodeName == "DIV" ) && document.getElementById("related") ) {
		console.log('Removing related youtube videos section' );
		document.getElementById("related").remove();
	}

}, false );