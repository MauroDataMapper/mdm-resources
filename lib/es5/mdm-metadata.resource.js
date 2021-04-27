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
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 */
var MdmMetadataResource = /** @class */ (function (_super) {
    __extends(MdmMetadataResource, _super);
    function MdmMetadataResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmMetadataResource.prototype.namespaces = function (metadataId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/metadata/namespaces" + (metadataId ? "/" + metadataId : '');
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmMetadataResource.prototype.save = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmMetadataResource.prototype.list = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmMetadataResource.prototype.remove = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmMetadataResource.prototype.update = function (catalogueItemDomainType, catalogueItemId, metadataId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmMetadataResource.prototype.get = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmMetadataResource;
}(MdmResource));
export { MdmMetadataResource };
//# sourceMappingURL=mdm-metadata.resource.js.map