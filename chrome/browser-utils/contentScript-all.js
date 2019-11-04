var url = document.URL;
console.log('Running content script for url - ' + url);

var hide_fb_up_next_vids = false;
chrome.storage.sync.get('hide_fb_up_next_vids', function(data) {
	hide_fb_up_next_vids = data.hide_fb_up_next_vids;
	console.log('hide_fb_up_next_vids=' + hide_fb_up_next_vids);
});

document.addEventListener("DOMNodeInserted", function(e) {
	
	if( url.match(/facebook.com\/watch\//) || url.match(/facebook.com\/.*\/videos\//) ) {
		if( hide_fb_up_next_vids ) {
			if( e.target.nodeName == "div" || e.target.nodeName == "DIV" ) {
				var arrVids = document.getElementsByClassName('_bne');
				for( el of arrVids ) {
					if( el.id.match( /video-up-next-/ ) ) {
						console.log("Removing Up Next facebook video - id=" + el.id);
						el.remove();
					}
				}
			}
		}
	}
	
}, false );
