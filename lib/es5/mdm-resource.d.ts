import { IMdmRestHandler } from './mdm-rest-handler';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
export declare class MdmResource {
    private restHandler;
    private resourcesConfig;
    protected apiEndpoint: string | URL;
    protected defaultRequestOptions: any;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    simplePost(url: any, data: any, options?: any): any;
    simpleGet(url: any, queryStringParams?: {}, options?: any): any;
    simpleDelete(url: any, queryStringParams?: {}, options?: any): any;
    simplePut(url: any, data: any, options?: any): any;
    simpleRequest(url: any, queryStringParams?: {}, options?: any): any;
}
