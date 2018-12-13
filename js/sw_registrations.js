// // registering service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service_workers.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}