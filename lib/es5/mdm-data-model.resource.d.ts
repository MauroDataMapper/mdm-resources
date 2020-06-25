import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmDataModelResource extends MdmResource {
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    get(id: any, action?: any, options?: any): any;
    post(id: any, action: any, options: any): any;
    put(id: any, action: any, options: any): any;
    delete(id: any, action: any, queryString: any, resource: any): any;
    export(dataModels: any, exporter: any, contentType: any): any;
    import(importPath: any, formData: any): any;
}
