var url = document.URL;
console.log('Running content script for - ' + url);

if( url.match(/youtube.com\/watch/) ) {
	
	var dont_show_youtube_related_vids = false;
	chrome.storage.sync.get('dont_show_youtube_related_vids', function(data) {
		
		dont_show_youtube_related_vids = data.dont_show_youtube_related_vids;
		console.log('dont_show_youtube_related_vids=' + dont_show_youtube_related_vids);
		
		if( dont_show_youtube_related_vids ) {
			console.log('Removing related youtube videos section');
			document.getElementById("related").remove();
		}
	});

} else if( url.match(/facebook.com\/watch\//) || url.match(/facebook.com\/.*\/videos\//) ) {
	
	var dont_show_fb_up_next_vids = false;
	chrome.storage.sync.get('dont_show_fb_up_next_vids', function(data) {
		
		dont_show_fb_up_next_vids = data.dont_show_fb_up_next_vids;
		console.log('dont_show_fb_up_next_vids=' + dont_show_fb_up_next_vids);
		
		if( dont_show_fb_up_next_vids ) {
			console.log('Removing facebook next up videos section');
			document.addEventListener("DOMNodeInserted", function(e) {
				if( e.target.nodeName == "div" || e.target.nodeName == "DIV" ) {
					var arrVids = document.getElementsByClassName('_bne');
					for( el of arrVids ) {
						if( el.id.match( /video-up-next-/ ) ) {
							console.log("Removing Up Next facebook video - id=" + el.id);
							el.remove();
						}
					}
				}
			}, false);
		}
	});
	
}



/*
//var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    //port.postMessage(event.data.text);
  }
}, false);
*/



/*
window.addEventListener('hashchange', function(e){
	console.log('hash changed')
});

window.addEventListener('locationchange', function(){
    console.log('location changed!');
});

window.addEventListener('popstate', function(){
    console.log('popstate changed!');
});

window.addEventListener('onclick', function(){
    console.log('onclick!');
});
*/

