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
 * Controller: versionLink
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/
var MdmVersioningResource = /** @class */ (function (_super) {
    __extends(MdmVersioningResource, _super);
    function MdmVersioningResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmVersioningResource.prototype.commonAncestor = function (modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/commonAncestor/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.latestVersion = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/latestVersion";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.mergeDiff = function (modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/mergeDiff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.mergeDiffV2 = function (modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/mergeDiff/" + otherModelId + "?isLegacy=false";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.currentMainBranch = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/currentMainBranch";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.availableBranches = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/availableBranches";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.mergeInto = function (modelDomainType, sourceModelId, targetModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + sourceModelId + "/mergeInto/" + targetModelId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmVersioningResource;
}(MdmResource));
export { MdmVersioningResource };
//# sourceMappingURL=mdm-versioning.resource.js.map