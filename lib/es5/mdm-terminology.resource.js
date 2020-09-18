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
import { MdmCatalogueItemResource } from './mdm-catalogue-item.resource';
import { MdmTermResource } from './mdm-term.resource';
/**
 * Controller: terminology
 |   GET    | /api/terminologies/providers/importers                                                                     | Action: importerProviders                       |
 |   GET    | /api/terminologies/providers/exporters                                                                     | Action: exporterProviders                       |
 |   POST   | /api/terminologies/import/${importerNamespace}/${importerName}/${importerVersion}                          | Action: importModels                            |
 |   POST   | /api/terminologies/export/${exporterNamespace}/${exporterName}/${exporterVersion}                          | Action: exportModels                            |
 |  DELETE  | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |   PUT    | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |  DELETE  | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/newModelVersion                                                        | Action: newModelVersion                         |
 |   PUT    | /api/terminologies/${terminologyId}/newDocumentationVersion                                                | Action: newDocumentationVersion                 |
 |   PUT    | /api/terminologies/${terminologyId}/finalise                                                               | Action: finalise                                |
 |   GET    | /api/terminologies/${terminologyId}/tree                                                                   | Action: tree                                    |
 |   POST   | /api/folders/${folderId}/terminologies                                                                     | Action: save                                    |
 |   GET    | /api/folders/${folderId}/terminologies                                                                     | Action: index                                   |
 |   PUT    | /api/terminologies/${terminologyId}/folder/${folderId}                                                     | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/diff/${otherModelId}                                                   | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/terminologies/${terminologyId}                                                    | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}         | Action: exportModel                             |
 |   GET    | /api/terminologies                                                                                         | Action: index                                   |
 |  DELETE  | /api/terminologies                                                                                         | Action: deleteAll                               |
 |  DELETE  | /api/terminologies/${id}                                                                                   | Action: delete                                  |
 |   PUT    | /api/terminologies/${id}                                                                                   | Action: update                                  |
 |   GET    | /api/terminologies/${id}                                                                                   | Action: show                                    |
 |   PUT    | /api/terminologies/${terminologyId}/newBranchModelVersion                                                  | Action: newBranchModelVersion                   |
 |   PUT    | /api/terminologies/${terminologyId}/newForkModel                                                           | Action: newForkModel                            |
 |   GET    | /api/terminologies/${terminologies}/latestVersion                                                          | Action: latestVersion                           |
 */
var MdmTerminologyResource = /** @class */ (function (_super) {
    __extends(MdmTerminologyResource, _super);
    function MdmTerminologyResource(resourcesConfig, restHandler) {
        var _this = _super.call(this, resourcesConfig, restHandler) || this;
        _this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
        _this.terms = new MdmTermResource(resourcesConfig, restHandler);
        return _this;
    }
    MdmTerminologyResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.importModels = function (namespace, name, version, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/import/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.exportModels = function (namespace, name, version, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/export/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newModelVersion = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newDocumentationVersion = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newDocumentationVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.finalise = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/finalise";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newBranchModelVersion = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newBranchModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newForkModel = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newForkModel";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.tree = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/tree";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.alterFolder = function (terminologyId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/folder/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.diff = function (terminologyId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.exportModel = function (terminologyId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + terminologyId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.removeAll = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.remove = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.update = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.get = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.termRelationships = function (terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId + "/termRelationships";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.getTermRelationship = function (terminologyId, termRelationshipTypeId, termRelationshipId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId + "/termRelationships/" + termRelationshipId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.removeReadByAuthenticated = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.updateReadByAuthenticated = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.removeReadByEveryone = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.updateReadByEveryone = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.latestVersion = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/latestVersion";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmTerminologyResource;
}(MdmResource));
export { MdmTerminologyResource };
//# sourceMappingURL=mdm-terminology.resource.js.map