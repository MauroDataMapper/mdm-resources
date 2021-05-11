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
 * Controller: dataElementComponent
 |   POST   | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents                                                         | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents                                                         | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${id}                                                   | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${id}                                                   | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${id}                                                   | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}/${type}/${dataElementId}      | Action: alterDataElements
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}/${type}/${dataElementId}      | Action: alterDataElements
 */
var MdmDataElementComponentResource = /** @class */ (function (_super) {
    __extends(MdmDataElementComponentResource, _super);
    function MdmDataElementComponentResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmDataElementComponentResource.prototype.save = function (dataModelId, dataFlowId, dataClassComponentId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataElementComponentResource.prototype.list = function (dataModelId, dataFlowId, dataClassComponentId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataElementComponentResource.prototype.remove = function (dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents/" + dataElementComponentId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataElementComponentResource.prototype.update = function (dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents/" + dataElementComponentId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataElementComponentResource.prototype.get = function (dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents/" + dataElementComponentId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataElementComponentResource.prototype.removeDataElement = function (dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, type, dataElementId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents/" + dataElementComponentId + "/" + type + "/" + dataElementId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataElementComponentResource.prototype.updateDataElement = function (dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, type, dataElementId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/dataElementComponents/" + dataElementComponentId + "/" + type + "/" + dataElementId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmDataElementComponentResource;
}(MdmResource));
export { MdmDataElementComponentResource };
//# sourceMappingURL=mdm-data-element-component.resource.js.map