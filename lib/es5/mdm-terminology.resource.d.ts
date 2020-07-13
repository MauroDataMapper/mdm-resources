import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmTerminologyResource extends MdmResource {
    private catalogueItem;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    get(id: any, action: any, options?: any): any;
    post(id: any, action: any, options: any): any;
    put(id: any, action: any, options: any): any;
    delete(id: any, action: any, queryString: any): any;
    folder(id: any, options?: {}): any;
}
