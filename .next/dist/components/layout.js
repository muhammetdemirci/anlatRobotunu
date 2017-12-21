"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _globalStyle = require("./globalStyle");

var _globalStyle2 = _interopRequireDefault(_globalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "İEEE ODTÜ" : _ref$title;
    return _react2.default.createElement("div", null, _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, title), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" }), _react2.default.createElement("meta", { charSet: "utf-8" }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto:300,400", rel: "stylesheet" }), _react2.default.createElement("link", { href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet" })), _react2.default.createElement("header", { className: "header section dark" }, _react2.default.createElement("nav", null, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", { className: "navlink" }, "IEEE ODT\xDC")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/anlatrobotunu#whatisit" }, _react2.default.createElement("a", { className: "navlink" }, "Nedir")), _react2.default.createElement(_link2.default, { href: "/anlatrobotunu/register" }, _react2.default.createElement("a", { className: "navlink highlight" }, "Ba\u015Fvur")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/anlatrobotunu#purpose" }, _react2.default.createElement("a", { className: "navlink" }, "Amac\u0131m\u0131z")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/anlatrobotunu/doc" }, _react2.default.createElement("a", { className: "navlink" }, "Yararl\u0131 Kaynaklar")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/anlatrobotunu/rules" }, _react2.default.createElement("a", { className: "navlink" }, "\u015Eartname"))), _react2.default.createElement(_globalStyle2.default, null)), children, _react2.default.createElement("footer", { className: "section dark" }, _react2.default.createElement("p", null, "Copyright \xA9 2017"), _react2.default.createElement("p", null, "IEEE ODT\xDC ")));
};

var _React$PropTypes = _react2.default.PropTypes,
    string = _React$PropTypes.string,
    any = _React$PropTypes.any;

exports.default = Layout;