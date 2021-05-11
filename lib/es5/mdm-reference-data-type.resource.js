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
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: delete
 */
var MdmReferenceDataTypeResource = /** @class */ (function (_super) {
    __extends(MdmReferenceDataTypeResource, _super);
    function MdmReferenceDataTypeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmReferenceDataTypeResource.prototype.list = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataTypes";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataTypeResource.prototype.get = function (referenceDataModelId, referenceDataTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataTypes/" + referenceDataTypeId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataTypeResource.prototype.save = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataTypes";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmReferenceDataTypeResource.prototype.update = function (referenceDataModelId, referenceDataTypeId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataTypes/" + referenceDataTypeId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataTypeResource.prototype.remove = function (referenceDataModelId, referenceDataTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataTypes/" + referenceDataTypeId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmReferenceDataTypeResource;
}(MdmResource));
export { MdmReferenceDataTypeResource };
//# sourceMappingURL=mdm-reference-data-type.resource.js.map