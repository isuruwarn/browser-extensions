var url = document.URL;
console.log('Running content script for url - ' + url);

var hide_fb_up_next_vids = false;
var getting_hide_youtube_related_vids = browser.storage.sync.get('hide_fb_up_next_vids');
getting_hide_fb_up_next_vids.then( (res) => {
	console.log('hide_fb_up_next_vids=' + res.hide_fb_up_next_vids);
	hide_fb_up_next_vids = res.hide_fb_up_next_vids;
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
