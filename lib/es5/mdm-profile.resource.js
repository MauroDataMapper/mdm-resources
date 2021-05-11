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
var MdmProfileResource = /** @class */ (function (_super) {
    __extends(MdmProfileResource, _super);
    function MdmProfileResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmProfileResource.prototype.usedProfiles = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profiles/used";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmProfileResource.prototype.unusedProfiles = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profiles/unused";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmProfileResource.prototype.otherMetadata = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profiles/otherMetadata";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmProfileResource.prototype.profile = function (catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, profileVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profile/" + profileNamespace + "/" + profileName;
        if (profileVersion) {
            url += "/" + profileVersion;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmProfileResource.prototype.saveProfile = function (catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, data, profileVersion, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profile/" + profileNamespace + "/" + profileName;
        if (profileVersion) {
            url += "/" + profileVersion;
        }
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmProfileResource.prototype.deleteProfile = function (catalogueItemDomainType, catalogueItemId, profileNamespace, profileName, profileVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/profile/" + profileNamespace + "/" + profileName;
        if (profileVersion) {
            url += "/" + profileVersion;
        }
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmProfileResource.prototype.validateProfile = function (profileNamespace, profileName, catalogueItemDomainType, id, data) {
        var url = this.apiEndpoint + "/profiles/" + profileNamespace + "/" + profileName + "/" + catalogueItemDomainType + "/" + id + "/validate";
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