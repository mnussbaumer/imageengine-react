import { ReactNode } from "react";
declare type TProps = {
    children: ReactNode;
    deliveryAddress: string;
};
declare function ImageEngineProvider({ children, deliveryAddress }: TProps): JSX.Element;
declare function useImageEngineContext(): {
    deliveryAddress: string;
};
export { ImageEngineProvider, useImageEngineContext };
