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
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
var MdmReferenceDataElementResource = /** @class */ (function (_super) {
    __extends(MdmReferenceDataElementResource, _super);
    function MdmReferenceDataElementResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmReferenceDataElementResource.prototype.list = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataElements";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.get = function (referenceDataModelId, referenceDataElementId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataElements/" + referenceDataElementId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.save = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataElements";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.update = function (referenceDataModelId, referenceDataElementId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataElements/" + referenceDataElementId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.remove = function (referenceDataModelId, referenceDataElementId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataElements/" + referenceDataElementId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmReferenceDataElementResource;
}(MdmResource));
export { MdmReferenceDataElementResource };
//# sourceMappingURL=mdm-reference-data-element.resource.js.map