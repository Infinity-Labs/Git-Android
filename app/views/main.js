var observableModule = require("data/observable");
var observableArray = require("data/observable-array");
var viewModule = require("ui/core/view");

var repoItems = new observableArray.ObservableArray([]);
var pageData = new observableModule.Observable();
var page;

exports.onPageLoaded = function(args) {
	page = args.object;
	pageData.set("repoItems", repoItems);
	page.bindingContext = pageData;
	repoItems.push({ name: "nativescript"});
	repoItems.push({ name: "javascript"});
	repoItems.push({ name: "html"});
	alert("you");
};

exports.new = function() {
	// TODO: Open Dialog for Information
    alert("added")
};