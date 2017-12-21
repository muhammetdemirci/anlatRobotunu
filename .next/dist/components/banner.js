"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _globalStyle = require("../components/globalStyle");

var _globalStyle2 = _interopRequireDefault(_globalStyle);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Banner = function Banner() {
    return _react2.default.createElement("div", { className: "above-the-fold", id: "home", "data-jsx": 2631593876
    }, _react2.default.createElement(_style2.default, {
        styleId: 2631593876,
        css: ".above-the-fold[data-jsx=\"2631593876\"]{background-image:url( \"http://ieee.metu.edu.tr/anlatrobotunu/background.png\" );background-size:100%;background-repeat:no-repeat;background-size:cover;height:100vh;position:relative;color:#eee}.above-the-fold[data-jsx=\"2631593876\"] .centered-text[data-jsx=\"2631593876\"]{position:absolute;height:350px;top:0;bottom:0;left:0;right:0;margin:auto}.above-the-fold[data-jsx=\"2631593876\"] h1[data-jsx=\"2631593876\"]{color:#ee742a;font-size:3.5rem;margin:4px}.above-the-fold[data-jsx=\"2631593876\"] h2[data-jsx=\"2631593876\"]{marginTop:30px}.overlay[data-jsx=\"2631593876\"]{padding:3px;background:-webkit-radial-gradient(circle,rgba(0,0,0,0.5),#2F2727);position:absolute;top:0;bottom:0;left:0;right:0}"
    }), _react2.default.createElement("div", { className: "overlay", "data-jsx": 2631593876
    }), _react2.default.createElement("div", { className: "centered-text", "data-jsx": 2631593876
    }, _react2.default.createElement("h1", {
        "data-jsx": 2631593876
    }, " IEEE ODT\xDC "), _react2.default.createElement("br", {
        "data-jsx": 2631593876
    }), _react2.default.createElement("h1", {
        "data-jsx": 2631593876
    }, " Anlat Robotunu "), " ", _react2.default.createElement("br", {
        "data-jsx": 2631593876
    }), _react2.default.createElement("br", {
        "data-jsx": 2631593876
    }), _react2.default.createElement("nav", {
        "data-jsx": 2631593876
    }, _react2.default.createElement(_link2.default, { href: "/anlatrobotunu/register" }, _react2.default.createElement("a", { className: "button page", "data-jsx": 2631593876
    }, "Ba\u015Fvur"))), _react2.default.createElement("br", {
        "data-jsx": 2631593876
    }), _react2.default.createElement("br", {
        "data-jsx": 2631593876
    }), _react2.default.createElement("h3", {
        "data-jsx": 2631593876
    }, " Son Ba\u015Fvuru Tarihi 6 Nisan 2018 "), _react2.default.createElement("br", {
        "data-jsx": 2631593876
    })));
};

exports.default = Banner;