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
 |   GET    | /api/terminologies/${terminologies}/latestModelVersion                                                     | Action: latestModelVersion                      |
 |   GET    | /api/terminologies/${terminologies}/latestFinalisedModel                                                   | Action: latestFinalisedModel                    |
 |   GET    | /api/dataModels/${dataModelId}/modelVersionTree                                                            | Action: modelVersionTree                        |
 */
export class MdmTerminologyResource extends MdmResource {
    constructor(resourcesConfig, restHandler) {
        super(resourcesConfig, restHandler);
        this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
        this.terms = new MdmTermResource(resourcesConfig, restHandler);
    }
    importers(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exporters(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importModels(namespace, name, version, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/import/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    exportModels(namespace, name, version, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/export/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    newModelVersion(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/newModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    newDocumentationVersion(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/newDocumentationVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    finalise(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/finalise`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    newBranchModelVersion(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/newBranchModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    newForkModel(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/newForkModel`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    tree(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/tree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    alterFolder(terminologyId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    diff(terminologyId, otherModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exportModel(terminologyId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${terminologyId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeAll(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    remove(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /// <summary>
    /// Get terminology by Id or a path
    /// </summary>
    /// <param name="terminologyId">Terminology Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(terminologyId, queryStringParams, restHandlerOptions) {
        let url = "";
        if (this.isGuid(terminologyId)) {
            url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
        }
        else {
            url = `${this.apiEndpoint}/terminologies/path/${terminologyId}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    termRelationships(terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    getTermRelationship(terminologyId, termRelationshipTypeId, termRelationshipId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${termRelationshipId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeReadByAuthenticated(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    latestModelVersion(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/latestModelVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    latestFinalisedModel(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/latestFinalisedModel`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    modelVersionTree(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/modelVersionTree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-terminology.resource.js.map