export interface IMdmQueryStringParams {
    [key: string]: any;
}
export interface IMdmRestHandlerOptions {
    [key: string]: any;
}
export interface IMdmDefaultHttpRequestOptions {
    [key: string]: any;
}
export interface IMdmRestHandler {
    process(url: string, options: IMdmRestHandlerOptions): any;
}
export declare class DefaultMdmRestHandler implements IMdmRestHandler {
    process(url: string, options: IMdmRestHandlerOptions): Promise<any>;
}
