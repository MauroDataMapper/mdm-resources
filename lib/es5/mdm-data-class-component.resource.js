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
/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
import { MdmResource } from './mdm-resource';
/**
 * Controller: dataClassComponent
 |   POST   | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents                                                                                                       | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents                                                                                                       | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${id}                                                                                                 | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${id}                                                                                                 | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${id}                                                                                                 | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}                                                        | Action: alterDataClasses
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}                                                        | Action: alterDataClasses
 */
var MdmDataClassComponentResource = /** @class */ (function (_super) {
    __extends(MdmDataClassComponentResource, _super);
    function MdmDataClassComponentResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmDataClassComponentResource.prototype.save = function (dataModelId, dataFlowId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataClassComponentResource.prototype.list = function (dataModelId, dataFlowId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataClassComponentResource.prototype.remove = function (dataModelId, dataFlowId, dataClassComponentId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataClassComponentResource.prototype.update = function (dataModelId, dataFlowId, dataClassComponentId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataClassComponentResource.prototype.get = function (dataModelId, dataFlowId, dataClassComponentId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataClassComponentResource.prototype.removeDataClass = function (dataModelId, dataFlowId, dataClassComponentId, type, dataClassId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/" + type + "/" + dataClassId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataClassComponentResource.prototype.updateDataClass = function (dataModelId, dataFlowId, dataClassComponentId, type, dataClassId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/dataClassComponents/" + dataClassComponentId + "/" + type + "/" + dataClassId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmDataClassComponentResource;
}(MdmResource));
export { MdmDataClassComponentResource };
//# sourceMappingURL=mdm-data-class-component.resource.js.map