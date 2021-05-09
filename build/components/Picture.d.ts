import { ReactElement } from "react";
import { TProps as TImageProps } from "./Image";
import { TProps as TSourceProps } from "./Source";
declare type TProps = Omit<JSX.IntrinsicElements["source"], "children"> & {
    children: [...Array<ReactElement<TSourceProps>>, ReactElement<TImageProps>];
};
export declare function Picture(props: TProps): JSX.Element;
export {};
