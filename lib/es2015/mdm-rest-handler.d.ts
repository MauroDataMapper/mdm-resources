export interface IMdmRestHandler {
    process(url: string, options: any): any;
}
export declare class DefaultMdmRestHandler implements IMdmRestHandler {
    process(url: string, options: any): Promise<any>;
}
