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
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var context_1 = require("../context");
var utils_1 = require("../utils");
var ALLOWED_INPUT_EXTENSIONS = [
    "png",
    "gif",
    "jpg",
    "bmp",
    "webp",
    "jpeg2000",
    "svg",
    "tif",
];
function Image(props) {
    var src = props.src, srcSet = props.srcSet, directives = props.directives, other = __rest(props, ["src", "srcSet", "directives"]);
    if (!src) {
        throw new Error("Please ensure that the image component has an 'src' prop.");
    }
    var deliveryAddress = context_1.useImageEngineContext().deliveryAddress;
    var imageUrl = utils_1.buildUrlFromDeliveryAddress(deliveryAddress, src);
    var imageExtension = src.split(".").slice(-1)[0];
    if (!ALLOWED_INPUT_EXTENSIONS.includes(imageExtension)) {
        console.warn("The following image's extension doesn't match any of the allowed types and won't be optimized: " + src + ".", "List of supported extensions: " + ALLOWED_INPUT_EXTENSIONS.join(", ") + ".");
    }
    return (jsx_runtime_1.jsx("img", __assign({ src: directives ? utils_1.constructUrl(imageUrl, directives) : imageUrl, srcSet: srcSet && utils_1.generateSrcSetString(srcSet, deliveryAddress, imageUrl) }, other), void 0));
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map