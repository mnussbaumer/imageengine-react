/// <reference types="react" />
export declare type TSrcSet = Array<{
    src: string;
    width: string;
    directives?: TDirectives;
}>;
export declare type TDirectives = {
    width?: number;
    autoWidthWithFallback?: number;
    height?: number;
    compression?: number;
    outputFormat?: "png" | "gif" | "jpg" | "bmp" | "webp" | "jp2" | "svg" | "mp4" | "jxr" | "avif" | "";
    fitMethod?: "stretch" | "box" | "letterbox" | "cropbox" | "";
    noOptimization?: true;
    sharpness?: number;
    rotate?: number;
    scaleToScreenWidth?: number;
    crop?: number[];
    inline?: true;
    keepMeta?: true;
};
export declare type TProps = Omit<JSX.IntrinsicElements["img"], "src" | "srcSet"> & {
    src: string;
    directives?: TDirectives;
    srcSet?: TSrcSet;
};
export declare function Image(props: TProps): JSX.Element;
