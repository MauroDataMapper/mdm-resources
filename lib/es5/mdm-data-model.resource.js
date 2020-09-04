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
 * Controller: dataModel
 |   GET    | /api/dataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/dataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/dataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   GET    | /api/dataModels/types                                                                                                                | Action: types
 |   POST   | /api/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/clean                                                                                     | Action: deleteAllUnusedDataClasses
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/clean                                                                                       | Action: deleteAllUnusedDataTypes
 |   GET    | /api/folders/${folderId}/dataModels                                                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |   PUT    | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |  DELETE  | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   PUT    | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   GET    | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   POST   | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   GET    | /api/dataModels/${dataModelId}/hierarchy                                                                                             | Action: hierarchy
 |   PUT    | /api/dataModels/${dataModelId}/newModelVersion                                                                                       | Action: newModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newDocumentationVersion                                                                               | Action: newDocumentationVersion
 |   PUT    | /api/dataModels/${dataModelId}/finalise                                                                                              | Action: finalise
 |   POST   | /api/folders/${folderId}/dataModels                                                                                                  | Action: save
 |   PUT    | /api/folders/${folderId}/dataModels/${dataModelId}                                                                                   | Action: changeFolder
 |   PUT    | /api/dataModels/${dataModelId}/folder/${folderId}                                                                                    | Action: changeFolder
 |   GET    | /api/dataModels/${dataModelId}/suggestLinks/${otherModelId}                                                                          | Action: suggestLinks
 |   GET    | /api/dataModels/${dataModelId}/diff/${otherModelId}                                                                                  | Action: diff
 |   GET    | /api/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                        | Action: exportModel
 |   GET    | /api/dataModels                                                                                                                      | Action: index
 |  DELETE  | /api/dataModels                                                                                                                      | Action: deleteAll
 |  DELETE  | /api/dataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/dataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/dataModels/${id}                                                                                                                | Action: show
 |   PUT    | /api/dataModels/${dataModelId}/newBranchModelVersion                                                                                 | Action: newBranchModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newForkModel                                                                                          | Action: newForkModel

 */
var MdmDataModelResource = /** @class */ (function (_super) {
    __extends(MdmDataModelResource, _super);
    function MdmDataModelResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmDataModelResource.prototype.defaultDataTypes = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/providers/defaultDataTypeProviders";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.types = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/types";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.importModels = function (importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.exportModels = function (exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeAllUnusedDataClasses = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/clean";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeAllUnusedDataTypes = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/clean";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.listInFolder = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeReadByAuthenticated = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.updateReadByAuthenticated = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeReadByEveryone = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.updateReadByEveryone = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.search = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/search";
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.hierarchy = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/hierarchy";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newModelVersion = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newDocumentationVersion = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newDocumentationVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.finalise = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/finalise";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newBranchModelVersion = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newBranchModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newForkModel = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newForkModel";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.addToFolder = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.updateDataModelInFolder = function (folderId, dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels/" + dataModelId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.updateFolderWithDataModel = function (dataModelId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/folder/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.suggestLinks = function (dataModelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/suggestLinks/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.diff = function (dataModelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.exportModel = function (dataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeAll = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.remove = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.update = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.get = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmDataModelResource;
}(MdmResource));
export { MdmDataModelResource };
//# sourceMappingURL=mdm-data-model.resource.js.map