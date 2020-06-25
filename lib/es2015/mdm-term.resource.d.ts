import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmTermResource extends MdmResource {
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    get(terminologyId: any, id: any, action: any, options?: any): any;
    put(terminologyId: any, id: any, action: any, options: any): any;
    post(terminologyId: any, id: any, action: any, options: any): any;
    delete(terminologyId: any, id: any): any;
    makeUrl(terminologyId: string): string;
}
