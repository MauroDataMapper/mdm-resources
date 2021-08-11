import { Profile } from './mdm-profile.model';
import { RequestSettings, QueryParameters, Uuid, Version, MultiFacetAwareDomainType, CatalogueItemDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */
/**
 * MDM resource for the management of profiles over catalogue items.
 *
 * Profiles act as projections over less structured catalogue item metadata.
 */
export declare class MdmProfileResource extends MdmResource {
    /**
     * `HTTP GET` - Gets a list of profiles used on a particular catalogue item.
     *
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
     */
    usedProfiles(domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of profiles not used on a particular catalogue item but are available.
     *
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
     */
    unusedProfiles(domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all metadata for a catalogue item that is not attached to any profile on that item.
     *
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MetadataIndexResponse} containing a list of {@link Metadata} objects.
     */
    otherMetadata(domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a profile from a catalogue item.
     *
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param profileNamespace The namespace of the profile to get.
     * @param profileName The name of the profile to get.
     * @param profileVersion Optional version of the profile to get. If not supplied, the latest version is used.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
     */
    profile(domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: Uuid, profileNamespace: string, profileName: string, profileVersion?: Version, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Saves a profile and its metadata values to a catalogue item.
     *
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param profileNamespace The namespace of the profile to save.
     * @param profileName The name of the profile to save.
     * @param data The data payload containing the profile sections/fields to save.
     * @param profileVersion Optional version of the profile to save. If not supplied, the latest version is used.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
     */
    saveProfile(domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: Uuid, profileNamespace: string, profileName: string, data: Profile, profileVersion?: Version, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing Digital Object Identifier from a catalogue item.
     *
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param profileNamespace The namespace of the profile to delete.
     * @param profileName The name of the profile to delete.
     * @param profileVersion Optional version of the profile to delete. If not supplied, the latest version is used.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    deleteProfile(domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: Uuid, profileNamespace: string, profileName: string, profileVersion?: Version, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Post a profile with values for a catalogue item and returns the same profile back with any validation errors included.
     *
     * @param profileNamespace The namespace of the profile to validate.
     * @param profileName The name of the profile to validate.
     * @param domainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param data The data payload containing the profile sections/fields to validate.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
     */
    validateProfile(profileNamespace: string, profileName: string, domainType: MultiFacetAwareDomainType | CatalogueItemDomainType, catalogueItemId: Uuid, data: Profile): any;
    providerDynamic(): any;
}
