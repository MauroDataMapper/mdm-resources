import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmDataElementResource extends MdmResource {
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    get(dataModelId: any, dataClassId: any, id: any, action: any, options: any): any;
    put(dataModelId: any, dataClassId: any, id: any, action: any, options: any): any;
    delete(dataModelId: any, dataClassId: any, id: any): any;
}
