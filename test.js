function myFunc(arrrrrrg) {
	console.log(arrrrrrg);
}

var promise = new Promise(function (resolve, reject) {
	if (window.awesome) {
		resolve('awesome');
	} else {
		reject('not very cool.');
	}
});

promise.then(setTimeout)
.then(parseInt)
.then(console.log)
.then(function (nothing) {
	// do something
});

var obj = {
	prop1: 'asdf'
};
