import { TDirectives, TSrcSet } from "../components/Image";
export declare function constructUrl(src: string, directives: TDirectives): string;
export declare function generateSrcSetString(srcSet: TSrcSet, deliveryAddress: string, originalUrl?: string): string;
export declare function buildUrlFromDeliveryAddress(deliveryAddress: string, src: string): string;
