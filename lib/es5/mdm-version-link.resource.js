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
 |   POST   | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: save
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: index
 |  DELETE  | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: delete
 |   PUT    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: update
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: show
 */
var MdmVersionLinkResource = /** @class */ (function (_super) {
    __extends(MdmVersionLinkResource, _super);
    function MdmVersionLinkResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmVersionLinkResource.prototype.save = function (modelDomainType, modelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmVersionLinkResource.prototype.list = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersionLinkResource.prototype.remove = function (modelDomainType, modelId, versionLinkId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks/" + versionLinkId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmVersionLinkResource.prototype.update = function (modelDomainType, modelId, versionLinkId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks/" + versionLinkId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmVersionLinkResource.prototype.get = function (modelDomainType, modelId, versionLinkId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks/" + versionLinkId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmVersionLinkResource;
}(MdmResource));
export { MdmVersionLinkResource };
//# sourceMappingURL=mdm-version-link.resource.js.map