'use strict';

var hide_youtube_related_vids = document.getElementById('hide_youtube_related_vids');
var hide_fb_up_next_vids = document.getElementById('hide_fb_up_next_vids');
console.log('hide_youtube_related_vids=' + hide_youtube_related_vids.checked );
console.log('hide_fb_up_next_vids=' + hide_fb_up_next_vids.checked );

var getting_hide_youtube_related_vids = browser.storage.sync.get('hide_youtube_related_vids');
getting_hide_youtube_related_vids.then( (res) => {
	console.log('hide_youtube_related_vids=' + res.hide_youtube_related_vids);
	if( res.hide_youtube_related_vids == true ) {
		hide_youtube_related_vids.checked = true;
	}
});

var getting_hide_fb_up_next_vids = browser.storage.sync.get('hide_fb_up_next_vids');
getting_hide_fb_up_next_vids.then( (res) => {
	console.log('hide_fb_up_next_vids=' + res.hide_fb_up_next_vids);
	if( res.hide_fb_up_next_vids == true ) {
		hide_fb_up_next_vids.checked = true;
	}
});

hide_youtube_related_vids.onclick = function(element) {
	console.log('Setting hide_youtube_related_vids to ' + element.target.checked );
	browser.storage.sync.set({
		hide_youtube_related_vids: element.target.checked
	});
};

hide_fb_up_next_vids.onclick = function(element) {
	console.log('Setting hide_fb_up_next_vids to ' + element.target.checked );
	browser.storage.sync.set({
		hide_fb_up_next_vids: element.target.checked
	});
};
