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
export class MdmCodeSetResource extends MdmResource {
    importers(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exporters(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importModels(namespace, name, version, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/import/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    exportModels(namespace, name, version, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/export/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    newModelVersion(codeSetId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    newDocumentationVersion(codeSetId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newDocumentationVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    finalise(codeSetId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/finalise`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    addCodeSetsToFolder(folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    listCodeSetsInFolder(folderId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeTerm(codeSetId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    alterTerm(codeSetId, termId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    alterFolder(codeSetId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    diff(codeSetId, otherModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    // changeFolder(codeSetId, folderId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
    //     const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
    //     return this.simplePut(url, data, restHandlerOptions);
    // }
    exportModel(codeSetId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeAll(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    remove(codeSetId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(codeSetId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(codeSetId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    terms(codeSetId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeReadByAuthenticated(codeSetId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(codeSetId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(codeSetId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(codeSetId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-code-set.resource.js.map