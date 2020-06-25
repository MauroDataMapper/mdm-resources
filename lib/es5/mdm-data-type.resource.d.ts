import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmDataTypeResource extends MdmResource {
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    get(dataModelId: any, id: any, action: any, options: any): any;
    post(dataModelId: any, id: any, action: any, options: any): any;
    put(dataModelId: any, id: any, action: any, options: any): any;
    delete(dataModelId: any, id: any): any;
    makeUrl(dataModelId: any): string;
}
