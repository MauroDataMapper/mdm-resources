import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmDataClassResource extends MdmResource {
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    get(dataModel: any, parentDataClass: any, id: any, action: any, options: any): any;
    post(dataModelId: any, id: any, action: any, options: any): any;
    put(dataModelId: any, parentDataClassId: any, id: any, action: any, options: any): any;
    delete(dataModelId: any, parentDataClassId: any, id: any): any;
}
