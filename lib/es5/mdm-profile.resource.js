var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MdmProfileResource = /** @class */ (function (_super) {
    __extends(MdmProfileResource, _super);
    function MdmProfileResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Gets a list of profiles used on a particular catalogue item.
     *
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
     */
    MdmProfileResource.prototype.usedProfiles = function (catalogueItemDomainType, catalogueItemId, query, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profiles/used";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Gets a list of profiles not used on a particular catalogue item but are available.
     *
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
     */
    MdmProfileResource.prototype.unusedProfiles = function (catalogueItemDomainType, catalogueItemId, query, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profiles/unused";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Gets a list of all metadata for a catalogue item that is not attached to any profile on that item.
     *
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MetadataIndexResponse} containing a list of {@link Metadata} objects.
     */
    MdmProfileResource.prototype.otherMetadata = function (catalogueItemDomainType, catalogueItemId, query, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profiles/otherMetadata";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Gets a profile from a catalogue item.
     *
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
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
    MdmProfileResource.prototype.profile = function (catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, profileVersion, query, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profile/" + profileNamespace + "/" + profileName;
        if (profileVersion) {
            url += "/" + profileVersion;
        }
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Saves a profile and its metadata values to a catalogue item.
     *
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
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
    MdmProfileResource.prototype.saveProfile = function (catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, data, profileVersion, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profile/" + profileNamespace + "/" + profileName;
        if (profileVersion) {
            url += "/" + profileVersion;
        }
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing Digital Object Identifier from a catalogue item.
     *
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
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
    MdmProfileResource.prototype.deleteProfile = function (catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, profileVersion, query, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profile/" + profileNamespace + "/" + profileName;
        if (profileVersion) {
            url += "/" + profileVersion;
        }
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP POST` - Post a profile with values for a catalogue item and returns the same profile back with any validation errors included.
     *
     * @param profileNamespace The namespace of the profile to validate.
     * @param profileName The name of the profile to validate.
     * @param catalogueItemDomainType The domain type of the catalogue item to get.
     * @param catalogueItemId The unique identifier of the catalogue item to get.
     * @param data The data payload containing the profile sections/fields to validate.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
     */
    MdmProfileResource.prototype.validateProfile = function (profileNamespace, profileName, catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/profiles/" + profileNamespace + "/" + profileName + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/validate";
        return this.simplePost(url, data);
    };
    MdmProfileResource.prototype.providerDynamic = function () {
        var url = this.apiEndpoint + "/profiles/providers/dynamic";
        return this.simpleGet(url);
    };
    return MdmProfileResource;
}(MdmResource));
export { MdmProfileResource };
//# sourceMappingURL=mdm-profile.resource.js.map