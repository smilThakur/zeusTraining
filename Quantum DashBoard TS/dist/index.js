var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var alerts_container = document.getElementById("alerts_container");
var alert_content = document.getElementById("alert_content");
var alert_btn = document.getElementById("alert_btn");
var announcement_container = document.getElementById("announcements_container");
var annoucements_content = document.getElementById("announcements_content");
var annoucements_btn = document.getElementById("announcements_btn");
var collapse_btn = document.getElementById("collapse_btn");
var collapse_nav_container = document.getElementById("collapse_nav_container");
var course_grid = document.getElementById("course_card_grid");
if (announcement_container && alerts_container && collapse_nav_container) {
    announcement_container.style.display = "none";
    alerts_container.style.display = "none";
    collapse_nav_container.style.display = "none";
}
var alertJsonFilePath = "./alertData.json";
var annoucementJsonFilePath = "./announcementData.json";
var courseJsonFilePath = "./courseData.json";
var alert_data = [];
var announcement_data = [];
var course_card_data = [];
var fetchAlertJson = function () { return __awaiter(_this, void 0, Promise, function () {
    var response, jsonData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(alertJsonFilePath)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                jsonData = _a.sent();
                alert_data = jsonData;
                console.log(alert_data);
                load_alerts();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error fetching JSON:', error_1.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
fetchAlertJson();
var fetchAnnouncementJson = function () { return __awaiter(_this, void 0, Promise, function () {
    var response, jsonData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(annoucementJsonFilePath)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                jsonData = _a.sent();
                announcement_data = jsonData;
                load_announcements();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error("Error fetching JSON", error_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
fetchAnnouncementJson();
var fetchCourseJson = function () { return __awaiter(_this, void 0, Promise, function () {
    var response, jsonData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(courseJsonFilePath)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                jsonData = _a.sent();
                course_card_data = jsonData;
                load_course_cards();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error("Error fetching JSON", error_3.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
fetchCourseJson();
var load_course_cards = function () {
    course_card_data.forEach(function (cardData) {
        var courseCard = document.createElement("div");
        courseCard.className = "course_card";
        courseCard.innerHTML =
            " \n           " + (cardData.expired === true ?
                " <div class=\"expired\">EXPIRED</div>" :
                "") + "\n\n            <div class=\"course_card_header\">\n    <img src=" + cardData.img + " alt=\"\">\n    <div class=\"card_header_content\">\n        <div class=\"card_title\">\n            " + cardData.lessonTitle + "\n            <div class=\"favourite_btn\">\n                <img src=" + (cardData.favourite === true ? "assets/icons/favourite.svg" : "assets/icons/unfavourite.svg") + " alt=\"\">\n            </div>\n        </div>\n        <div class=\"subject_grade\">\n            <div class=\"subject\">\n                " + cardData.subject + "\n            </div>\n            <div class=\"sub_divide\"></div>\n            <div class=\"grade\">\n                Grade " + cardData.grade + " <span>+" + cardData.bonus + "</span>\n            </div>\n        </div>\n\n        <div class=\"course_content_container\">\n            <div class=\"course_content\">\n                <div class=\"course_content_no\">" + cardData.contents.units + "</div>\n                <div class=\"course_material\">Units</div>\n            </div>\n\n            <div class=\"course_content\">\n                <div class=\"course_content_no\">" + cardData.contents.lessons + "</div>\n                <div class=\"course_material\">Lessons</div>\n            </div>\n\n            <div class=\"course_content\">\n                <div class=\"course_content_no\">" + cardData.contents.topics + "</div>\n                <div class=\"course_material\">Topics</div>\n            </div>\n\n        </div>\n\n        <div class=\"dropdown_sort\">\n            <div class=\"dropdown\">\n                <div class=" + (cardData["class"] === null ? "class_name_null" : "") + ">\n                " + (cardData["class"] === null ? "No Classes" : cardData["class"]) + "\n                    <hr class=\"dropdown_hr\">\n                </div>\n                <img class=\"drop_icon\" src=\"assets/icons/arrow-down.svg\" alt=\"\">\n                " + (cardData["class"] === null ? "" : "<div class=\"dropdown-content\">\n                    <a href=\"#\">Item 1</a>\n                    <a href=\"#\">Item 2</a>\n                    <a href=\"#\">Item 3</a>\n                </div>") + "\n            </div>\n\n        </div>\n\n       \n       " + (cardData.stats === null ? "" :
                "<div class=\"class_stats\">\n            <div class=\"student\">\n                " + cardData.stats.students + " Students\n            </div>\n            " + (cardData.stats.duration === null ? "" :
                    "<div class=\"sub_divide\"></div>\n\n            <div class=\"date\">\n                " + cardData.stats.duration + "\n            </div>") + "\n        </div>") + "\n\n\n    </div>\n\n\n</div>\n\n<hr class=\"card_divider\">\n\n<div class=\"card_footer\">\n    <div class=\"card_footer_button\">\n        <img src=\"assets/icons/preview.svg\" alt=\"\">\n    </div>\n    <div class=\"card_footer_button\">\n        <img src=\"assets/icons/manage course.svg\" alt=\"\">\n    </div>\n    <div class=\"card_footer_button\">\n        <img src=\"assets/icons/grade submissions.svg\" alt=\"\">\n    </div>\n    <div class=\"card_footer_button\">\n        <img src=\"assets/icons/reports.svg\" alt=\"\">\n    </div>\n</div>";
        console.log(courseCard);
        course_grid === null || course_grid === void 0 ? void 0 : course_grid.appendChild(courseCard);
    });
};
var load_announcements = function () {
    announcement_data.forEach(function (annoucement) {
        var alertElement = document.createElement("div");
        alertElement.className = annoucement.checked === false ? "not_checked_alert" : "checked_alert";
        var annoucementUser = document.createElement("div");
        annoucementUser.className = "annoucement_user";
        var spanElement = document.createElement("span");
        spanElement.innerText = "PA: ";
        annoucementUser.appendChild(spanElement);
        annoucementUser.innerHTML += annoucement.user;
        alertElement.appendChild(annoucementUser);
        var alert_body = document.createElement("div");
        alert_body.className = "alert_body";
        alertElement.appendChild(alert_body);
        var alert_text = document.createElement("div");
        alert_text.className = "alert_text";
        var alertImg = document.createElement("div");
        alertImg.className = annoucement.checked === false ? "not_done_img" : "done_img";
        alert_text.innerHTML = annoucement.content;
        alert_body.appendChild(alert_text);
        alert_body.appendChild(alertImg);
        if (annoucement.sub_content !== null) {
            var alert_sub_body = document.createElement("div");
            alert_sub_body.className = "alert_sub_body";
            var alert_sub_body_title = document.createElement("div");
            alert_sub_body_title.className = "alert_sub_body_title";
            var alert_sub_body_content = document.createElement("div");
            alert_sub_body_content.className = "alert_sub_body_content";
            alertElement.appendChild(alert_sub_body);
            alert_sub_body.appendChild(alert_sub_body_title);
            alert_sub_body_title.innerHTML = annoucement.sub_content.title;
            alert_sub_body.appendChild(alert_sub_body_content);
            alert_sub_body_content.innerHTML = annoucement.sub_content.content;
        }
        var announcement_footer = document.createElement("div");
        announcement_footer.className = "announcements_footer";
        if (annoucement.files !== null) {
            var annoucement_files = document.createElement("div");
            annoucement_files.className = "announcement_files";
            var file_icon = document.createElement("div");
            file_icon.className = "file_icon";
            annoucement_files.appendChild(file_icon);
            annoucement_files.innerHTML += annoucement.files + " files are attached";
            announcement_footer.appendChild(annoucement_files);
        }
        else {
            announcement_footer.style.justifyContent = "end";
        }
        var annoucement_timestamp = document.createElement("div");
        annoucement_timestamp.className = "announcement_timestamp";
        annoucement_timestamp.innerHTML = annoucement.timestamp;
        announcement_footer.appendChild(annoucement_timestamp);
        alertElement.appendChild(announcement_footer);
        annoucements_content === null || annoucements_content === void 0 ? void 0 : annoucements_content.appendChild(alertElement);
    });
};
var load_alerts = function () {
    alert_data.forEach(function (alert) {
        console.log(alert);
        var alertElement = document.createElement("div");
        alertElement.className = alert["checked"] === false ? "not_checked_alert" : "checked_alert";
        var alert_body = document.createElement("div");
        alert_body.className = "alert_body";
        alertElement.appendChild(alert_body);
        var alert_text = document.createElement("div");
        alert_text.className = "alert_text";
        var alertImg = document.createElement("div");
        alertImg.className = alert["checked"] === false ? "not_done_img" : "done_img";
        alert_text.innerHTML = alert["content"];
        alert_body.appendChild(alert_text);
        alert_body.appendChild(alertImg);
        if (alert["sub_content"] !== null) {
            var alert_sub_body = document.createElement("div");
            alert_sub_body.className = "alert_sub_body";
            var alert_sub_body_title = document.createElement("div");
            alert_sub_body_title.className = "alert_sub_body_title";
            var alert_sub_body_content = document.createElement("div");
            alert_sub_body_content.className = "alert_sub_body_content";
            alertElement.appendChild(alert_sub_body);
            alert_sub_body.appendChild(alert_sub_body_title);
            alert_sub_body_title.innerHTML = alert["sub_content"]["title"];
            alert_sub_body.appendChild(alert_sub_body_content);
            alert_sub_body_content.innerHTML = alert["sub_content"]["content"];
        }
        var alert_timestamp = document.createElement("div");
        alert_timestamp.className = "alert_timestamp";
        alert_timestamp.innerHTML = alert["timestamp"];
        alertElement.appendChild(alert_timestamp);
        alert_content === null || alert_content === void 0 ? void 0 : alert_content.appendChild(alertElement);
    });
};
alert_btn === null || alert_btn === void 0 ? void 0 : alert_btn.addEventListener("mouseover", function () {
    if (alerts_container) {
        alerts_container.style.display = alerts_container.style.display === "none" ? "block" : "none";
        if (alert_btn) {
            alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
        }
    }
    if (announcement_container) {
        announcement_container.style.display = "none";
        if (annoucements_btn) {
            annoucements_btn.style.backgroundImage = announcement_container.style.display === "none" ? 'url("assets/icons/announcements.svg")' : 'url("assets/icons/announcements_selected.svg")';
        }
    }
    if (collapse_nav_container) {
        collapse_nav_container.style.display = "none";
        collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";
    }
});
annoucements_btn === null || annoucements_btn === void 0 ? void 0 : annoucements_btn.addEventListener("mouseover", function () {
    console.log("hello");
    if (announcement_container) {
        announcement_container.style.display = announcement_container.style.display === "none" ? "block" : "none";
        if (annoucements_btn) {
            annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"
                ? 'url("assets/icons/announcements.svg")'
                : 'url("assets/icons/announcements_selected.svg")';
        }
    }
    if (collapse_nav_container) {
        collapse_nav_container.style.display = "none";
        collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";
    }
    if (alerts_container) {
        alerts_container.style.display = "none";
        if (alert_btn) {
            alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
        }
    }
});
collapse_btn.addEventListener("mouseover", function () {
    if (announcement_container) {
        announcement_container.style.display = "none";
        if (annoucements_btn) {
            annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"
                ? 'url("assets/icons/announcements.svg")'
                : 'url("assets/icons/announcements_selected.svg")';
        }
    }
    if (collapse_nav_container) {
        collapse_nav_container.style.display = collapse_nav_container.style.display === "none" ? "block" : "none";
        collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";
    }
    if (alerts_container) {
        alerts_container.style.display = "none";
        if (alert_btn) {
            alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
        }
    }
});
alerts_container === null || alerts_container === void 0 ? void 0 : alerts_container.addEventListener("mouseleave", function () {
    if (alerts_container) {
        alerts_container.style.display = "none";
        if (alert_btn) {
            alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
        }
    }
});
announcement_container === null || announcement_container === void 0 ? void 0 : announcement_container.addEventListener("mouseleave", function () {
    if (announcement_container) {
        announcement_container.style.display = "none";
        if (annoucements_btn) {
            annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"
                ? 'url("assets/icons/announcements.svg")'
                : 'url("assets/icons/announcements_selected.svg")';
        }
    }
});
collapse_nav_container === null || collapse_nav_container === void 0 ? void 0 : collapse_nav_container.addEventListener("mouseleave", function () {
    if (collapse_nav_container) {
        collapse_nav_container.style.display = "none";
        collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";
    }
});
