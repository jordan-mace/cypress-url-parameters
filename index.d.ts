declare module "parameters" {
    export const addParameters: (originalFn: any, url: string, options: any) => void;
    export const addParameter: (key: string, value: string, url: string) => string;
    export const setParameter: (name: string, value: string) => Map<string, string>;
    export const removeParameter: (name: string) => boolean;
}