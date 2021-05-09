"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Image_1 = require("./Image");
function Picture(props) {
    var imgChild = react_1.Children.toArray(props.children).find(function (child) {
        if (typeof child === 'object' && 'type' in child) {
            return child.type === Image_1.Image;
        }
    });
    if (!imgChild) {
        console.warn("A fallback <Image> is missing as the last child of the <Picture> component.", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture");
    }
    return (jsx_runtime_1.jsx("picture", { children: props.children }, void 0));
}
exports.Picture = Picture;
//# sourceMappingURL=Picture.js.map