Package.describe({
	summary: "Bottomline api packaged for Meteor",
	version: "0.0.2",
	git: "http://github.com/ecwyne/meteor-bottomline",
	name: 'ecwyne:bottomline'
});

Npm.depends({
	bottomline: '0.0.2'
})

Package.onUse(function(api) {
	api.export('Bottomline', 'server')
	api.versionsFrom('METEOR@0.9.3');
	api.addFiles('bottomline.js', 'server');
});