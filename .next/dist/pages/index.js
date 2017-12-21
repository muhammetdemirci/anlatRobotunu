"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _banner = require("../components/banner");

var _banner2 = _interopRequireDefault(_banner);

var _globalStyle = require("../components/globalStyle");

var _globalStyle2 = _interopRequireDefault(_globalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  // const speakerSpotlights = props.speakers.slice( 0, 8 ).map(
  //     ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
  // );

  // const sponsorSpotlights = props.sponsors.map(
  //     ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
  // );

  return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_globalStyle2.default, null), _react2.default.createElement(_banner2.default, null), _react2.default.createElement("div", { className: "section light", id: "whatisit" }, _react2.default.createElement("h2", null, "Nedir ?"), _react2.default.createElement("p", null, "Anlat Robotu yar\u0131\u015Fmas\u0131nda hayalindeki robotu bize oyun geli\u015Ftirerek anlatman\u0131 istiyoruz. ", _react2.default.createElement("br", null), _react2.default.createElement("br", null), "Amac\u0131m\u0131z \xF6\u011Frencilere bili\u015Fim bilincini a\u015F\u0131lamak ama\xE7l\u0131 hayal g\xFC\xE7lerini kullanarak ak\u0131ll\u0131 telefon oyunlar\u0131 geli\u015Ftirmeleri", _react2.default.createElement("br", null), _react2.default.createElement("br", null), "\xD6n elemeyi ge\xE7en \xF6\u011Frencileri 3 g\xFCnl\xFCk ODT\xDC kamp\u0131na \xE7a\u011F\u0131r\u0131yoruz ve ODT\xDC'de bir yandan yaz\u0131l\u0131m, robotik gibi teknik e\u011Fitimler verirken di\u011Fer yandan beraber lunaparka gidip e\u011Fleniyoruz")), _react2.default.createElement("div", { className: "section dark", id: "register" }, _react2.default.createElement("nav", null, _react2.default.createElement(_link2.default, { href: "/anlatrobotunu/register" }, _react2.default.createElement("a", { className: "button page" }, "Ba\u015Fvur")))), _react2.default.createElement("div", { className: "section light", id: "purpose" }, _react2.default.createElement("h2", null, "Amac\u0131m\u0131z ?"), _react2.default.createElement("p", null, "\xD6\u011Frencilere bili\u015Fim bilinci kazand\u0131rmak ", _react2.default.createElement("br", null), "\xD6\u011Frencilerin hayal g\xFC\xE7lerini geli\u015Ftirmek ", _react2.default.createElement("br", null), "\xD6\u011Frencilerin toplum \xF6n\xFCnde kendilerini ifade etmelerine yard\u0131mc\u0131 olmak", _react2.default.createElement("br", null), "\xDCniversitede e\u011Fitim g\xF6rmeleri i\xE7in te\u015Fvik etmek", _react2.default.createElement("br", null))), _react2.default.createElement("div", { className: "section dark" }, _react2.default.createElement("h2", null, " Yararl\u0131 Linkler"), _react2.default.createElement("p", null, "Oyun geli\u015Ftirmene destek \xE7\u0131kmak i\xE7in yaral\u0131 linklerin oldu\u011Fu bir d\xF6k\xFCman haz\u0131rlad\u0131k"), _react2.default.createElement(_link2.default, { prefetch: true, href: "/anlatrobotunu/doc" }, _react2.default.createElement("a", { className: "button page" }, "D\xF6k\xFCmantasyon"))), _react2.default.createElement("div", { className: "section light" }, _react2.default.createElement("h2", null, " \u015Eartname"), _react2.default.createElement("p", null, "Yar\u0131\u015Fma Kurallar\u0131n\u0131 \u015Eartnameyi okuyarak \xF6\u011Frenebilirsin"), _react2.default.createElement(_link2.default, { prefetch: true, href: "/anlatrobotunu/rules" }, _react2.default.createElement("a", { className: "button page dark" }, "\u015Eartname"))));
};

exports.default = Home;