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
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/referenceData/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/referenceData/providers/exporters                                                                                                  | Action: exporterProviders
 |   POST   | /api/referenceData/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/referenceData/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/referenceData/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |   PUT    | /api/referenceData/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |  DELETE  | /api/referenceData/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   PUT    | /api/referenceData/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   GET    | /api/referenceData/${referenceDataModelId}/search                                                                                       | Action: search
 |   POST   | /api/referenceData/${referenceDataModelId}/search                                                                                       | Action: search
 |   GET    | /api/referenceData/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 |   GET    | /api/referenceData                                                                                                                      | Action: index
 |  DELETE  | /api/referenceData/${id}                                                                                                                | Action: delete
 |   PUT    | /api/referenceData/${id}                                                                                                                | Action: update
 |   GET    | /api/referenceData/${id}                                                                                                                | Action: show
 |   PUT    | /api/referenceData/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder

 */
var MdmReferenceDataModelResource = /** @class */ (function (_super) {
    __extends(MdmReferenceDataModelResource, _super);
    function MdmReferenceDataModelResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmReferenceDataModelResource.prototype.defaultDataTypes = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/providers/defaultDataTypeProviders";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.importModels = function (importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.exportModels = function (exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.removeReadByAuthenticated = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.updateReadByAuthenticated = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.removeReadByEveryone = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.updateReadByEveryone = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.search = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/search";
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.exportModel = function (referenceDataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.remove = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.update = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.get = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataModelResource.prototype.moveReferenceDataModelToFolder = function (referenceDataModelId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/folder/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmReferenceDataModelResource;
}(MdmResource));
export { MdmReferenceDataModelResource };
//# sourceMappingURL=mdm-reference-data-model.resource.js.map