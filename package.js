Package.describe({
	summary: "Fast, light, mobile-friendly and responsive lightbox and modal dialog plugin. Open inline HTML, ajax loaded content, image, form, iframe (YouTube video, Vimeo, Google Maps), photo gallery. Animation effects added with CSS3 transitions. For meteor."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files([
		'vendor/dist/magnific-popup.css',
		'vendor/dist/jquery.magnific-popup.js'
	], 'client');
});
