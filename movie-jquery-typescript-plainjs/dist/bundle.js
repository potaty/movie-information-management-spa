/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Genre, genres, Movie, movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Genre\", function() { return Genre; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genres\", function() { return genres; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Movie\", function() { return Movie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movies\", function() { return movies; });\n/* Genre of movie */\nvar Genre;\n(function (Genre) {\n    Genre[Genre[\"Comedy\"] = 1] = \"Comedy\";\n    Genre[Genre[\"Horror\"] = 2] = \"Horror\";\n    Genre[Genre[\"Action\"] = 3] = \"Action\";\n    Genre[Genre[\"Drama\"] = 4] = \"Drama\";\n    Genre[Genre[\"Thriller\"] = 5] = \"Thriller\";\n    Genre[Genre[\"Romantic\"] = 6] = \"Romantic\";\n})(Genre || (Genre = {}));\n/* Genre name of movie */\nvar genres = [\n    \"\",\n    \"Comedy\",\n    \"Horror\",\n    \"Action\",\n    \"Drama\",\n    \"Thriller\",\n    \"Romantic\",\n];\n/* Movie object structure */\nvar Movie = /** @class */ (function () {\n    function Movie(name, director, year, genre, note) {\n        this.name = name;\n        this.director = director;\n        this.year = year;\n        this.genre = genre;\n        this.note = note;\n    }\n    return Movie;\n}());\n\n// movie instances\nvar movie1 = new Movie(\"Fight Club\", \"David Finch\", 1999, Genre.Action, \"Fight club is a film created by Hollywood's famous director David finch in 1999.\");\nvar movie2 = new Movie(\"Gold escort\", \"Sergio Leone\", 1966, Genre.Action, \"It was a comedy with violence as its carrier.\");\nvar movie3 = new Movie(\"Roman Holiday\", \"William Wyler\", 1953, Genre.Romantic, \"He story tells a romantic story between a princess and a reporter in Rome, Italy, in a day. \");\nvar movie4 = new Movie(\"Three fools make a big fuss in Bollywood\", \"Rajkumar Hirani\", 2011, Genre.Comedy, \"Lanche is a different college student, who breaks the traditional education concept of the college with wisdom.\");\nvar movie5 = new Movie(\"Quiet Place\", \"John kalasinsky\", 2018, Genre.Thriller, \"Keeping quiet is the only rule of life. They can't hear you, they can't chase you.\");\nvar movie6 = new Movie(\"Insidious: The Last Key\", \"Adam robittle\", 2018, Genre.Horror, \"Fear is the only way home?\");\nvar movie7 = new Movie(\"Teddy bear\", \"Seth MacFarlane\", 2012, Genre.Comedy, \"No, I look like a cuddly bear\");\nvar movie8 = new Movie(\"Son of the weather\", \"Xinhaicheng\", 2019, Genre.Romantic, \"It's starting to clear up now!\");\nvar movie9 = new Movie(\"Fireworks\", \"Xinhaicheng\", 2017, Genre.Romantic, \"Fireworks rising, looking from below? Or from the side?\");\nvar movie10 = new Movie(\"Joker\", \"Todd Phillips\", 2019, Genre.Action, \"People who are more lucky than them.\");\nvar movies = [\n    movie1,\n    movie2,\n    movie3,\n    movie4,\n    movie5,\n    movie6,\n    movie7,\n    movie8,\n    movie9,\n    movie10,\n];\n// searchWord === '' => not searching\n// searchWord !== '' => searching\nvar searchWord = \"\";\nvar editing = false;\nvar movieData;\nvar deleteRowId = \"\";\n// save data into localStorage\nvar localStorageSave = function () {\n    localStorage.setItem(\"movie\", JSON.stringify(movieData));\n};\nif (localStorage.getItem(\"movie\")) {\n    movieData = JSON.parse(localStorage.getItem(\"movie\"));\n}\nelse {\n    movieData = movies;\n    localStorageSave();\n}\n// save movie into movies data, and save into localstorage\nvar saveMovie = function (rowId, movie) {\n    movieData[parseInt(rowId)] = movie;\n    localStorageSave();\n    document.getElementById(\"modifysuccess\").showModal();\n    setTimeout(function () { document.getElementById(\"modifysuccess\").close(); }, 1000);\n};\n// add movie into movies data\nvar addMovie = function (movie) {\n    movieData.push(movie);\n    localStorageSave();\n    document.getElementById(\"addsuccess\").showModal();\n    setTimeout(function () { document.getElementById(\"addsuccess\").close(); }, 1000);\n};\n// submit new movie\nvar submit = function () {\n    // get json from form\n    var data = $('form').serializeArray().reduce(function (obj, item) {\n        // genre type is number.\n        if (item.name === \"genre\") {\n            obj[item.name] = parseInt(item.value);\n        }\n        else {\n            obj[item.name] = item.value;\n        }\n        return obj;\n    }, {});\n    // whether duplicate name\n    if (movieData.map(function (value) { return value.name; }).filter(function (value) { return value === data.name; }).length !== 0) {\n        document.getElementById(\"duplicate\").showModal();\n        setTimeout(function () { document.getElementById(\"duplicate\").close(); }, 1000);\n    }\n    else {\n        // add into movies data\n        addMovie(data);\n        load();\n    }\n};\n// delete from movies data\nvar deleteMovie = function () {\n    var rowNumber = parseInt(deleteRowId);\n    if (rowNumber < 0 || rowNumber >= movieData.length) {\n        alert(\"Please refresh the page\");\n    }\n    movieData = movieData.filter(function (_, index) {\n        return index != rowNumber;\n    });\n    load();\n    localStorageSave();\n    document.getElementById(\"deletesuccess\").showModal();\n    setTimeout(function () { document.getElementById(\"deletesuccess\").close(); }, 1000);\n};\n// use load() when movie data changed\n// it will reload the movie list\nvar load = function () {\n    var tableHTML = \"\";\n    tableHTML += '<table class=\"table table-hover\">';\n    tableHTML += \"<thead>\";\n    tableHTML += \"<tr>\";\n    tableHTML += \"<th>Name</th>\";\n    tableHTML += \"<th>Director</th>\";\n    tableHTML += \"<th>Year</th>\";\n    tableHTML += \"<th>Note</th>\";\n    tableHTML += \"<th>Genre</th>\";\n    tableHTML += \"<th>Action</th>\";\n    tableHTML += \"</tr>\";\n    tableHTML += \"</thead>\";\n    tableHTML += \"<tbody>\";\n    $.each(movieData, function (index, val) {\n        var rowId = index;\n        if (searchWord !== \"\") {\n            tableHTML += '<tr rowId=\"' + rowId + '\" ' +\n                (val[\"name\"].toLowerCase().includes(searchWord.toLowerCase()) ? '' : 'style=\"display: none\"') + ' > ';\n        }\n        else {\n            tableHTML += '<tr rowId=\"' + rowId + '\" > ';\n        }\n        tableHTML +=\n            '<td ><div class=\"row_data\" edit_type=\"click\" columnName=\"name\">' +\n                val[\"name\"] +\n                \"</div></td>\";\n        tableHTML +=\n            '<td ><div class=\"row_data\" edit_type=\"click\" columnName=\"director\">' +\n                val[\"director\"] +\n                \"</div></td>\";\n        tableHTML +=\n            '<td ><div class=\"row_data\" edit_type=\"click\" columnName=\"year\">' +\n                val[\"year\"] +\n                \"</div></td>\";\n        tableHTML +=\n            '<td ><div class=\"row_data\" edit_type=\"click\" columnName=\"note\">' +\n                val[\"note\"] +\n                \"</div></td>\";\n        tableHTML +=\n            '<td >' +\n                '<select class=\"row_data\" edit_type=\"click\" columnName=\"genre\" disabled>' +\n                '<option value=\"1\" ' + (val[\"genre\"] === 1 ? 'selected' : '') + '>Comedy</option>' +\n                '<option value=\"2\" ' + (val[\"genre\"] === 2 ? 'selected' : '') + '>Horror</option>' +\n                '<option value=\"3\" ' + (val[\"genre\"] === 3 ? 'selected' : '') + '>Action</option>' +\n                '<option value=\"4\" ' + (val[\"genre\"] === 4 ? 'selected' : '') + '>Drama </option>' +\n                '<option value=\"5\" ' + (val[\"genre\"] === 5 ? 'selected' : '') + '>Thriller </option>' +\n                '<option value=\"6\" ' + (val[\"genre\"] === 6 ? 'selected' : '') + '>Romantic</option>' +\n                '</select>' +\n                \"</td>\";\n        tableHTML += \"<td>\";\n        tableHTML +=\n            '<span class=\"btn-edit\" > <a href=\"#\" class=\"btn btn-link \" rowId=\"' +\n                rowId +\n                '\" > Edit</a> </span>';\n        tableHTML +=\n            '<span> <a href=\"#delete_modal\" class=\"btn btn-link btn-save-delete\" data-toggle=\"modal\" rowId=\"' +\n                rowId +\n                '\" > Delete</a> </span>';\n        tableHTML +=\n            '<span class=\"btn-save\"> <a href=\"#\" class=\"btn btn-link\"  rowId=\"' +\n                rowId +\n                '\"> Save</a> | </span>';\n        tableHTML +=\n            '<span class=\"btn-cancel\"> <a href=\"#\" class=\"btn btn-link\" rowId=\"' +\n                rowId +\n                '\"> Cancel</a> | </span>';\n        tableHTML += \"</td>\";\n        tableHTML += \"</tr>\";\n    });\n    tableHTML += \"</tbody>\";\n    tableHTML += \"</table>\";\n    $(document).find(\".tbl_movie_data\").html(tableHTML);\n    $(document).find(\".btn-save\").hide();\n    $(document).find(\".btn-cancel\").hide();\n};\nfunction submitted(event) {\n    // do not jump to head\n    event.preventDefault();\n    submit();\n}\n$(document).ready(function ($) {\n    load();\n    var form = document.querySelector(\"form\");\n    form.onsubmit = submitted.bind(form);\n    $(document).on(\"focusout\", \".row_data\", function (event) {\n        event.preventDefault();\n        if ($(this).attr(\"edit_type\") == \"button\") {\n            return false;\n        }\n        var rowId = $(this).closest(\"tr\").attr(\"rowId\");\n        var row_div = $(this).removeClass(\"bg-warning\").css(\"padding\", \"\");\n        var columnName = row_div.attr(\"columnName\");\n        var columnValue = row_div.html();\n        var movie = {};\n        movie[columnName] = columnValue;\n        $.extend(movie, { rowId: rowId });\n    });\n    // Edit\n    $(document).on(\"click\", \".btn-edit\", function (event) {\n        event.preventDefault();\n        editing = true;\n        var tableRow = $(this).closest(\"tr\");\n        var rowId = tableRow.attr(\"rowId\");\n        tableRow.find(\".btn-save\").show();\n        tableRow.find(\".btn-cancel\").show();\n        tableRow.find(\".btn-edit\").hide();\n        tableRow.find(\".btn-save-delete\").hide();\n        tableRow\n            .find(\".row_data\")\n            .attr(\"contenteditable\", \"plaintext-only\")\n            .attr(\"edit_type\", \"button\")\n            .addClass(\"bg-warning\")\n            .css(\"padding\", \"3px\");\n        tableRow.find(\"select\")\n            .removeAttr(\"disabled\");\n        tableRow.find(\".row_data\").each(function (index, val) {\n            $(this).attr(\"original_entry\", $(this).html());\n        });\n    });\n    // Cancel\n    $(document).on(\"click\", \".btn-cancel\", function (event) {\n        event.preventDefault();\n        var tableRow = $(this).closest(\"tr\");\n        var rowId = tableRow.attr(\"rowId\");\n        tableRow.find(\".btn-save\").hide();\n        tableRow.find(\".btn-cancel\").hide();\n        tableRow.find(\".btn-edit\").show();\n        tableRow.find(\".btn-save-delete\").show();\n        tableRow\n            .find(\".row_data\")\n            .attr(\"edit_type\", \"click\")\n            .removeClass(\"bg-warning\")\n            .css(\"padding\", \"\");\n        tableRow.find(\".row_data\").each(function (index, val) {\n            $(this).html($(this).attr(\"original_entry\"));\n        });\n    });\n    // Save\n    $(document).on(\"click\", \".btn-save\", function (event) {\n        event.preventDefault();\n        var tableRow = $(this).closest(\"tr\");\n        var rowId = tableRow.attr(\"rowId\");\n        tableRow.find(\".btn-save\").hide();\n        tableRow.find(\".btn-cancel\").hide();\n        tableRow.find(\".btn-edit\").show();\n        tableRow.find(\".btn-save-delete\").show();\n        tableRow\n            .find(\".row_data\")\n            .attr(\"edit_type\", \"click\")\n            .removeClass(\"bg-warning\")\n            .css(\"padding\", \"\");\n        tableRow.find(\"select\")\n            .attr(\"disabled\");\n        var movie = {};\n        // get all editable data\n        tableRow.find(\".row_data\").each(function (index, val) {\n            var columnName = $(this).attr(\"columnName\");\n            var columnValue = $(this).html();\n            if (columnName !== \"genre\")\n                movie[columnName] = columnValue;\n            else {\n                movie[columnName] = parseInt(tableRow.find(\".row_data\").children(\"option:selected\").val());\n            }\n        });\n        // year check\n        movie.name = movie.name.trim();\n        if (isNaN(movie.year)) {\n            document.getElementById(\"yearfailed\").showModal();\n            load();\n            setTimeout(function () { document.getElementById(\"yearfailed\").close(); }, 1000);\n            return;\n        }\n        // name check\n        if (movieData.filter(function (_, index) { return index !== parseInt(rowId); }).map(function (value) { return value.name; }).includes(movie.name)) {\n            document.getElementById(\"nameduplicate\").showModal();\n            load();\n            setTimeout(function () { document.getElementById(\"nameduplicate\").close(); }, 1000);\n            return;\n        }\n        // empty check\n        if (movie.name.length === 0 || movie.year.length === 0 || movie.director.length === 0) {\n            document.getElementById(\"emptystring\").showModal();\n            load();\n            setTimeout(function () { document.getElementById(\"emptystring\").close(); }, 1000);\n            return;\n        }\n        $.extend(movie, { rowId: rowId });\n        saveMovie(rowId, movie);\n        editing = false;\n        load();\n    });\n    // Delete\n    $(document).on(\"click\", \".btn-delete\", function (event) {\n        event.preventDefault();\n        var tableRow = $(this).closest(\"tr\");\n        var rowId = tableRow.attr(\"rowId\");\n        tableRow.hide();\n        var movie = {};\n        tableRow.find(\".row_data\").each(function (index, val) {\n            var columnName = $(this).attr(\"columnName\");\n            var columnValue = $(this).html();\n            movie[columnName] = columnValue;\n        });\n        deleteMovie();\n        load();\n    });\n    // save the deleting row number\n    $(document).on(\"click\", \".btn-save-delete\", function (event) {\n        event.preventDefault();\n        var tableRow = $(this).closest(\"tr\");\n        var rowId = tableRow.attr(\"rowId\");\n        deleteRowId = rowId;\n    });\n    $(\"#search\").keyup(function (e) {\n        searchWord = e.target.value;\n        load();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });