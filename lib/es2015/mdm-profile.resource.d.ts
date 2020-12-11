import { MdmResource, ModelDomainType } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */
export declare class MdmProfileResource extends MdmResource {
    usedProfiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
