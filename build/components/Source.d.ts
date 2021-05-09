/// <reference types="react" />
import { TSrcSet } from './Image';
export declare type TProps = Omit<JSX.IntrinsicElements["source"], "srcSet"> & {
    srcSet: TSrcSet;
};
export declare function Source(props: TProps): JSX.Element;
