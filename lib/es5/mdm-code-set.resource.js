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
 * Controller: codeSet
 |   GET    | /api/codeSets/providers/importers                                                                          | Action: importerProviders                       |
 |   GET    | /api/codeSets/providers/exporters                                                                          | Action: exporterProviders                       |
 |   POST   | /api/codeSets/import/${importerNamespace}/${importerName}/${importerVersion}                               | Action: importModels                            |
 |   POST   | /api/codeSets/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModels                            |
 |  DELETE  | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |   PUT    | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |  DELETE  | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/newModelVersion                                                                 | Action: newModelVersion                         |
 |   PUT    | /api/codeSets/${codeSetId}/newDocumentationVersion                                                         | Action: newDocumentationVersion                 |
 |   PUT    | /api/codeSets/${codeSetId}/finalise                                                                        | Action: finalise                                |
 |   POST   | /api/folders/${folderId}/codeSets                                                                          | Action: save                                    |
 |   GET    | /api/folders/${folderId}/codeSets                                                                          | Action: index                                   |
 |  DELETE  | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/folder/${folderId}                                                              | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/diff/${otherModelId}                                                            | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/codeSets/${codeSetId}                                                             | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                  | Action: exportModel                             |
 |   GET    | /api/codeSets                                                                                              | Action: index                                   |
 |  DELETE  | /api/codeSets                                                                                              | Action: deleteAll                               |
 |  DELETE  | /api/codeSets/${id}                                                                                        | Action: delete                                  |
 |   PUT    | /api/codeSets/${id}                                                                                        | Action: update                                  |
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show
 */
var MdmCodeSetResource = /** @class */ (function (_super) {
    __extends(MdmCodeSetResource, _super);
    function MdmCodeSetResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private catalogueItem: MdmCatalogueItemResource;
    // constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    // }
    // get(id, action, options) {
    //     if (!options) {
    //         options = {};
    //     }
    //     // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
    //     //   return this.catalogueItem.get(id, action, options.contentType);
    //     // }
    //     switch (action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('codeSets', id, options);
    //         case 'annotations': return this.catalogueItem.listAnnotations('codeSets', id, options);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('codeSets', id, options);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('codeSets', id, options);
    //     }
    //     return this.getResource('codeSets', id, action, options);
    // }
    // post(id, action, options) {
    //     return this.postResource('codeSets', id, action, options);
    // }
    // delete(id, action, queryString, resource) {
    //     return this.deleteResource('codeSets', id, action, queryString, resource);
    // }
    // put(id, action, options) {
    //     return this.putResource('codeSets', id, action, options);
    // }
    MdmCodeSetResource.prototype.importers = function (queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/providers/importers";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.exporters = function (queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/providers/exporters";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.importModels = function (namespace, name, version, data) {
        var url = this.apiEndpoint + "/codeSets/import/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data);
    };
    MdmCodeSetResource.prototype.exportModels = function (namespace, name, version, data) {
        var url = this.apiEndpoint + "/codeSets/export/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data);
    };
    MdmCodeSetResource.prototype.newModelVersion = function (codeSetId, data) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/newModelVersion";
        return this.simplePut(url, data);
    };
    MdmCodeSetResource.prototype.newDocumentationVersion = function (codeSetId, data) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/newDocumentationVersion";
        return this.simplePut(url, data);
    };
    MdmCodeSetResource.prototype.finalise = function (codeSetId, data) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/finalise";
        return this.simplePut(url, data);
    };
    MdmCodeSetResource.prototype.addCodeSetsToFolder = function (folderId, data) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simplePost(url, data);
    };
    MdmCodeSetResource.prototype.listCodeSetsInFolder = function (folderId, queryStringParams) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.removeTerm = function (codeSetId, termId, queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/terms/" + termId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.alterTerm = function (codeSetId, termId, data) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/terms/" + termId;
        return this.simplePut(url, data);
    };
    MdmCodeSetResource.prototype.alterFolder = function (codeSetId, folderId, data) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/folder/" + folderId;
        return this.simplePut(url, data);
    };
    MdmCodeSetResource.prototype.diff = function (codeSetId, otherModelId, queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams);
    };
    // changeFolder(codeSetId, folderId, data) {
    //     const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
    //     return this.simplePut(url, data);
    // }
    MdmCodeSetResource.prototype.exportModel = function (codeSetId, exporterNamespace, exporterName, exporterVersion, queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.list = function (queryStringParams) {
        var url = this.apiEndpoint + "/codeSets";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.removeAll = function (queryStringParams) {
        var url = this.apiEndpoint + "/codeSets";
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.remove = function (codeSetId, queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.update = function (codeSetId, data) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId;
        return this.simplePut(url, data);
    };
    MdmCodeSetResource.prototype.get = function (codeSetId, queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCodeSetResource.prototype.terms = function (codeSetId, queryStringParams) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/terms";
        return this.simpleGet(url, queryStringParams);
    };
    return MdmCodeSetResource;
}(MdmResource));
export { MdmCodeSetResource };
//# sourceMappingURL=mdm-code-set.resource.js.map