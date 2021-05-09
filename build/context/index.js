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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImageEngineContext = exports.ImageEngineProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ImageEngineContext = react_1.createContext({ deliveryAddress: "" });
function ImageEngineProvider(_a) {
    var children = _a.children, deliveryAddress = _a.deliveryAddress;
    return (jsx_runtime_1.jsx(ImageEngineContext.Provider, __assign({ value: {
            deliveryAddress: deliveryAddress.endsWith('/') ? deliveryAddress.slice(0, -1) : deliveryAddress
        } }, { children: children }), void 0));
}
exports.ImageEngineProvider = ImageEngineProvider;
function useImageEngineContext() {
    var ctx = react_1.useContext(ImageEngineContext);
    if (ctx.deliveryAddress === "") {
        throw new Error("Please ensure that you've defined <ImageEngineProvider deliveryAddress='...'> somewhere above <Image> components in the DOM tree.");
    }
    return ctx;
}
exports.useImageEngineContext = useImageEngineContext;
//# sourceMappingURL=index.js.map