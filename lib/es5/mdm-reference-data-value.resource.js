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
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */
var MdmReferenceDataValueResource = /** @class */ (function (_super) {
    __extends(MdmReferenceDataValueResource, _super);
    function MdmReferenceDataValueResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmReferenceDataValueResource.prototype.list = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataValues";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataValueResource.prototype.get = function (referenceDataModelId, referenceDataValueId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataValues/" + referenceDataValueId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataValueResource.prototype.save = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataValues";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmReferenceDataValueResource.prototype.update = function (referenceDataModelId, referenceDataValueId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataValues/" + referenceDataValueId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataValueResource.prototype.remove = function (referenceDataModelId, referenceDataValueId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataValues/" + referenceDataValueId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataValueResource.prototype.search = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceDataModels/" + referenceDataModelId + "/referenceDataValues/search?asRows=true";
        return this.simplePost(url, data, restHandlerOptions);
    };
    return MdmReferenceDataValueResource;
}(MdmResource));
export { MdmReferenceDataValueResource };
//# sourceMappingURL=mdm-reference-data-value.resource.js.map