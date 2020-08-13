import { IMdmRestHandler, IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
export declare class MdmResource {
    private restHandler;
    private resourcesConfig;
    protected apiEndpoint: string;
    protected defaultRequestOptions: IMdmRestHandlerOptions;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    simplePost(url: string, data: any, options?: IMdmRestHandlerOptions): any;
    simpleGet(url: string, queryStringParams?: IMdmQueryStringParams, options?: IMdmRestHandlerOptions): any;
    simpleDelete(url: string, queryStringParams?: IMdmQueryStringParams, options?: IMdmRestHandlerOptions): any;
    simplePut(url: string, data: any, options?: IMdmRestHandlerOptions): any;
    simpleRequest(url: string, queryStringParams?: IMdmQueryStringParams, options?: IMdmRestHandlerOptions): any;
}
