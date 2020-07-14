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
    importers(queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/providers/importers`;
        return this.simpleGet(url, queryStringParams);
    }
    exporters(queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/providers/exporters`;
        return this.simpleGet(url, queryStringParams);
    }
    importModels(namespace, name, version, data) {
        const url = `${this.apiEndpoint}/codeSets/import/${namespace}/${name}/${version}`;
        return this.simplePost(url, data);
    }
    exportModels(namespace, name, version, data) {
        const url = `${this.apiEndpoint}/codeSets/export/${namespace}/${name}/${version}`;
        return this.simplePost(url, data);
    }
    newModelVersion(codeSetId, data) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newModelVersion`;
        return this.simplePut(url, data);
    }
    newDocumentationVersion(codeSetId, data) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newDocumentationVersion`;
        return this.simplePut(url, data);
    }
    finalise(codeSetId, data) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/finalise`;
        return this.simplePut(url, data);
    }
    addCodeSetsToFolder(folderId, data) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simplePost(url, data);
    }
    listCodeSetsInFolder(folderId, queryStringParams) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simpleGet(url, queryStringParams);
    }
    removeTerm(codeSetId, termId, queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    alterTerm(codeSetId, termId, data) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
        return this.simplePut(url, data);
    }
    alterFolder(codeSetId, folderId, data) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/folder/${folderId}`;
        return this.simplePut(url, data);
    }
    diff(codeSetId, otherModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams);
    }
    // changeFolder(codeSetId, folderId, data) {
    //     const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
    //     return this.simplePut(url, data);
    // }
    exportModel(codeSetId, exporterNamespace, exporterName, exporterVersion, queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams);
    }
    list(queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets`;
        return this.simpleGet(url, queryStringParams);
    }
    removeAll(queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets`;
        return this.simpleDelete(url, queryStringParams);
    }
    remove(codeSetId, queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    update(codeSetId, data) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simplePut(url, data);
    }
    get(codeSetId, queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simpleGet(url, queryStringParams);
    }
    terms(codeSetId, queryStringParams) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms`;
        return this.simpleGet(url, queryStringParams);
    }
}
//# sourceMappingURL=mdm-code-set.resource.js.map