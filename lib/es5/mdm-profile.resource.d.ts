import { RequestSettings, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */
export declare class MdmProfileResource extends MdmResource {
    usedProfiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    unusedProfiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    otherMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    profile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, profileNamespace: string, profileName: string, profileVersion?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveProfile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, profileNamespace: string, profileName: string, data: string, profileVersion?: string, restHandlerOptions?: RequestSettings): any;
    deleteProfile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, profileNamespace: string, profileName: string, profileVersion?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    validateProfile(profileNamespace: string, profileName: string, catalogueItemDomainType: string | ModelDomainType, id: string, data: string): any;
    providerDynamic(): any;
}
