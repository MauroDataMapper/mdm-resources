import { MdmResource } from './mdm-resource';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */
export class MdmProfileResource extends MdmResource {
    usedProfiles(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profiles/used`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    unusedProfiles(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profiles/unused`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    otherMetadata(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profiles/otherMetadata`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    profile(catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, profileVersion, queryStringParams, restHandlerOptions) {
        let url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
        if (profileVersion) {
            url += `/${profileVersion}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    saveProfile(catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, data, profileVersion, restHandlerOptions) {
        let url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
        if (profileVersion) {
            url += `/${profileVersion}`;
        }
        return this.simplePost(url, data, restHandlerOptions);
    }
    deleteProfile(catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, profileVersion, queryStringParams, restHandlerOptions) {
        let url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
        if (profileVersion) {
            url += `/${profileVersion}`;
        }
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    validateProfile(profileNamespace, profileName, catalogueItemDomainType, id, data) {
        const url = `${this.apiEndpoint}/profiles/${profileNamespace}/${profileName}/${catalogueItemDomainType}/${id}/validate`;
        return this.simplePost(url, data);
    }
    providerDynamic() {
        const url = `${this.apiEndpoint}/profiles/providers/dynamic`;
        return this.simpleGet(url);
    }
}
//# sourceMappingURL=mdm-profile.resource.js.map