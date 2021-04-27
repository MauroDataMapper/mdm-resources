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
 * Controller: annotation
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show

 */
var MdmAnnotationResource = /** @class */ (function (_super) {
    __extends(MdmAnnotationResource, _super);
    function MdmAnnotationResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmAnnotationResource.prototype.save = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.saveChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.list = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.listChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.remove = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.removeChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.get = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAnnotationResource.prototype.getChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmAnnotationResource;
}(MdmResource));
export { MdmAnnotationResource };
//# sourceMappingURL=mdm-annotation.resource.js.map