#!/usr/bin/env node

var fs = require("fs-extra");
var css_dir = "./app/view/public/public/css";
var js_dir = "./app/view/public/public/js";
var dist_css_dir = "./app/public/css";
var dist_js_dir = "./app/public/js";

var clean_dir = "./app/view/public/public";

fs.removeSync(dist_css_dir);
fs.removeSync(dist_js_dir);
console.log("clean dist dir success");

fs.copy(css_dir, dist_css_dir, function(error) {
	if (error) {
		return console.error(error);
	}
	console.log("copy css to dist success");
	fs.copy(js_dir, dist_js_dir, function(error) {
		if (error) {
			return console.error(error);
		}
		console.log("copy js to dist dir success");
		fs.removeSync(clean_dir);
	});
});
