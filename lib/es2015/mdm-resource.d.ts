import { IMdmRestHandler } from './mdm-rest-handler';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
export declare class MdmResource {
    private restHandler;
    private resourcesConfig;
    protected apiEndpoint: string | URL;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    getResource(name: any, id: any, action: any, options?: any): any;
    postResource(name: any, id: any, action: any, options: any, more?: any): any;
    putResource(name: any, id: any, action: any, options: any): any;
    deleteResource(name: any, id: any, action?: any, queryString?: any, resource?: any): any;
    request(url: any, HTTP: any, resource: any, contentType: any, more?: any): any;
    exportGet(dataModels: any, exporter: any, contentType: any, url: any): any;
    exportPost(dataModels: any, exporter: any, contentType: any, url: any): any;
    simplePost(url: any, options?: any): any;
    simpleGet(url: any, options?: any): any;
}
