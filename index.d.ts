declare module "parameters" {
    export const addParameters: (originalFn: any, url: any, options: any) => void;
    export const addParameter: (key: any, value: any, url: any) => any;
    export const setParameter: (name: any, value: any) => Map<any, any>;
    export const removeParameter: (name: any) => boolean;
}
declare module "index" {
    export * from "parameters";
}
