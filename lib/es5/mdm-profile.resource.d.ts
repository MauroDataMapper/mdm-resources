import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */
export declare class MdmProfileResource extends MdmResource {
    usedProfiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    unusedProfiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    otherMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    profile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, profileNamespace: string, profileName: string, profileVersion?: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveProfile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, profileNamespace: string, profileName: string, data: string, profileVersion?: string, restHandlerOptions?: MdmRequestOptions): any;
    deleteProfile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, profileNamespace: string, profileName: string, profileVersion?: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    validateProfile(profileNamespace: string, profileName: string, catalogueItemDomainType: string | ModelDomainType, id: string, data: string): any;
    providerDynamic(): any;
}
