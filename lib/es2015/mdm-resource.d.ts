import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmQueryStringParams, IMdmRestHandler, IMdmRestHandlerOptions } from './mdm-rest-handler';
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
export declare enum ContainerDomainType {
    CLASSIFIERS = "classifiers",
    FOLDERS = "folders"
}
export declare enum ModelDomainType {
    FOLDERS = "folders",
    DATA_MODELS = "dataModels",
    DATA_CLASSES = "dataClasses",
    DATA_TYPES = "dataTypes",
    TERMINOLOGIES = "terminologies",
    TERMS = "terms",
    ALL = "all"
}
