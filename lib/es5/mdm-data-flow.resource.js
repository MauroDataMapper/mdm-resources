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
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmDataClassComponentResource } from './mdm-data-class-component.resource';
import { DefaultMdmRestHandler } from './mdm-rest-handler';
import { MdmDataElementComponentResource } from './mdm-data-element-component.resource';
/**
 * Controller: dataFlow
 |   GET    | /api/dataFlows/providers/importers                                                                                                                                               | Action: importerProviders
 |   GET    | /api/dataFlows/providers/exporters                                                                                                                                               | Action: exporterProviders
 |   POST   | /api/dataFlows/import/${importerNamespace}/${importerName}/${importerVersion}                                                                                                    | Action: importDataFlows
 |   POST   | /api/dataFlows/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                                                                    | Action: exportDataFlows
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/diagramLayout                                                                                                             | Action: updateDiagramLayout
 |   POST   | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/import/${importerNamespace}/${importerName}/${importerVersion}                                                            | Action: importDataFlow
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                            | Action: exportDataFlow
 |   POST   | /api/dataModels/${dataModelId}/dataFlows                                                                                                                                         | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataFlows                                                                                                                                         | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${id}                                                                                                                                   | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${id}                                                                                                                                   | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${id}                                                                                                                                   | Action: show
 */
var MdmDataFlowResource = /** @class */ (function (_super) {
    __extends(MdmDataFlowResource, _super);
    function MdmDataFlowResource(resourcesConfig, restHandler) {
        if (resourcesConfig === void 0) { resourcesConfig = new MdmResourcesConfiguration(); }
        if (restHandler === void 0) { restHandler = new DefaultMdmRestHandler(); }
        var _this = _super.call(this, resourcesConfig, restHandler) || this;
        _this.dataClassComponents = new MdmDataClassComponentResource(resourcesConfig, restHandler);
        _this.dataElementComponents = new MdmDataElementComponentResource(resourcesConfig, restHandler);
        return _this;
    }
    MdmDataFlowResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataFlows/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataFlows/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.importDataFlows = function (importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataFlows/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.exportDataFlows = function (exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataFlows/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.updateDiagramLayout = function (dataModelId, dataFlowId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/diagramLayout";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.importDataFlow = function (dataModelId, dataFlowId, importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.exportDataFlow = function (dataModelId, dataFlowId, importerNamespace, importerName, importerVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId + "/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.save = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.list = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.remove = function (dataModelId, dataFlowId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.update = function (dataModelId, dataFlowId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataFlowResource.prototype.get = function (dataModelId, dataFlowId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataFlows/" + dataFlowId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmDataFlowResource;
}(MdmResource));
export { MdmDataFlowResource };
//# sourceMappingURL=mdm-data-flow.resource.js.map