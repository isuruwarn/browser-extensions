var url = document.URL;
console.log('Running content script for youtube url - ' + url);

var hide_youtube_related_vids = false;
chrome.storage.sync.get('hide_youtube_related_vids', function(data) {
	
	hide_youtube_related_vids = data.hide_youtube_related_vids;
	console.log('hide_youtube_related_vids=' + hide_youtube_related_vids);
	
	if( hide_youtube_related_vids ) {
		console.log('Removing related youtube videos section');
		document.getElementById("related").remove();
	}
});
