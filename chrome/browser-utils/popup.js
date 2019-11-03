// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let hide_youtube_related_vids = document.getElementById('hide_youtube_related_vids');
let hide_fb_up_next_vids = document.getElementById('hide_fb_up_next_vids');

chrome.storage.sync.get('hide_youtube_related_vids', function(data) {
	console.log('hide_youtube_related_vids=' + data.hide_youtube_related_vids);
	if( data.hide_youtube_related_vids == true ) {
		hide_youtube_related_vids.checked = true;
	}
});
chrome.storage.sync.get('hide_fb_up_next_vids', function(data) {
	console.log('hide_fb_up_next_vids=' + data.hide_fb_up_next_vids);
	if( data.hide_fb_up_next_vids == true ) {
		hide_fb_up_next_vids.checked = true;
	}
});

hide_youtube_related_vids.onclick = function(element) {
	chrome.storage.sync.set({ hide_youtube_related_vids: element.target.checked }, function() {
		console.log('Setting hide_youtube_related_vids to ' + element.target.checked );
	});
};

hide_fb_up_next_vids.onclick = function(element) {
	chrome.storage.sync.set({ hide_fb_up_next_vids: element.target.checked }, function() {
		console.log('Setting hide_fb_up_next_vids to ' + element.target.checked );
	});
};
