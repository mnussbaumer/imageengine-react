"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var context_1 = require("../context");
var utils_1 = require("../utils");
function Source(props) {
    var srcSet = props.srcSet, src = props.src, other = __rest(props, ["srcSet", "src"]);
    var deliveryAddress = context_1.useImageEngineContext().deliveryAddress;
    return (jsx_runtime_1.jsx("source", __assign({ srcSet: utils_1.generateSrcSetString(srcSet, deliveryAddress, src) }, other), void 0));
}
exports.Source = Source;
//# sourceMappingURL=Source.js.map