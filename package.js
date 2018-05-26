Package.describe({
	summary: "Simple usage of bootstrap 3 modals.",
	version: "1.0.4",
	name: "jaredhliu:bootstrap-3-modal",
	git: "https://github.com/jaredliu2018/bootstrap-3-modal.git"
})

Package.onUse(function(api){
	
	api.versionsFrom('METEOR@1.0.3')
	
	api.use([
		'templating',
		'jquery'
	], 'client')
	
	api.addFiles([
		'main.js'
	], 'client')
	
	api.export('Modal', 'client')
	
})