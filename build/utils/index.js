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
exports.buildUrlFromDeliveryAddress = exports.generateSrcSetString = exports.constructUrl = void 0;
var DIRECTIVE_MAPPING = {
    width: "w",
    autoWidthWithFallback: "w_auto",
    height: "h",
    compression: "cmpr",
    outputFormat: "f",
    fitMethod: "m",
    noOptimization: "pass",
    sharpness: "s",
    rotate: "r",
    scaleToScreenWidth: "pc",
    crop: "cr",
    inline: "in",
    keepMeta: "meta",
};
var DEV_ADDRESS = "dev";
function constructUrl(src, directives) {
    var params = Object.entries(directives).reduce(function (result, _a) {
        var key = _a[0], value = _a[1];
        if (value === null || value === undefined || value === "") {
            return result;
        }
        else if (DIRECTIVE_MAPPING[key]) {
            return result + ("/" + DIRECTIVE_MAPPING[key] + "_" + value);
        }
        console.warn("Directive '" + key + "' isn't recognized and won't be applied to the image.");
        return result;
    }, "");
    return params ? src + "?imgeng=" + params : src;
}
exports.constructUrl = constructUrl;
function generateSrcSetString(srcSet, deliveryAddress, originalUrl) {
    return srcSet.reduce(function (result, _a) {
        var src = _a.src, width = _a.width, directives = _a.directives;
        // Extract width directive and always apply it to the image as
        // its size has to match provided width descriptor.
        var widthDirective = {
            width: Number(width.replace("w", "")),
        };
        var fullAddress;
        // If the delivery address is "dev" set the fullAddress to originalUrl
        // Otherwise set it to deliveryAddress + the srcSet src
        if (deliveryAddress === DEV_ADDRESS && originalUrl) {
            fullAddress = originalUrl;
        }
        else {
            fullAddress = deliveryAddress + src;
        }
        var fullImageUrl = constructUrl(fullAddress, directives
            ? __assign(__assign({}, directives), widthDirective) : widthDirective);
        var entry = fullImageUrl + " " + width + ",\n";
        return result += entry;
    }, "");
}
exports.generateSrcSetString = generateSrcSetString;
;
function buildUrlFromDeliveryAddress(deliveryAddress, src) {
    if (deliveryAddress === DEV_ADDRESS) {
        return src;
    }
    else {
        return deliveryAddress + src;
    }
}
exports.buildUrlFromDeliveryAddress = buildUrlFromDeliveryAddress;
;
//# sourceMappingURL=index.js.map