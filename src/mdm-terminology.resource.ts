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
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
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
 |   GET    | /api/terminologies/${id}                                                                                   | Action: show  
 */
export class MdmTerminologyResource extends MdmResource {
    private catalogueItem: MdmCatalogueItemResource;
    public terms: MdmTermResource;

    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
        super(resourcesConfig, restHandler);
        this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
        this.terms = new MdmTermResource(resourcesConfig, restHandler);
    }

    //   get(id, action: any = {}) {
    //     if (!options) {
    //       options = {};
    //     }
    //     // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
    //     //   return this.catalogueItem.get(id, action.contentType);
    //     // }

    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('terminologies', id);
    //         case 'annotations': return this.catalogueItem.listAnnotations('terminologies', id);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('terminologies', id);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('terminologies', id);
    //     }

    //     return this.getResource('terminologies', id, action);
    //   }

    //   post(id, action) {
    //     return this.postResource('terminologies', id, action);
    //   }

    //   put(id, action) {
    //     return this.putResource('terminologies', id, action);
    //   }

    //   delete(id, action, queryString) {
    //     return this.deleteResource('terminologies', id, action, queryString);
    //   }

    //   folder(id = {}) {
    //       return this.simpleGet(`${this.apiEndpoint}/terminologies/${id}/terms`);
    //   }

    importers(queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies/providers/importers`;
        return this.simpleGet(url, queryStringParams);
    }

    exporters(queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies/providers/exporters`;
        return this.simpleGet(url, queryStringParams);
    }

    importModels(namespace, name, version, data) {
        const url = `${this.apiEndpoint}/terminologies/import/${namespace}/${name}/${version}`;
        return this.simplePost(url, data);
    }

    exportModels(namespace, name, version, data) {
        const url = `${this.apiEndpoint}/terminologies/export/${namespace}/${name}/${version}`;
        return this.simplePost(url, data);
    }

    newModelVersion(terminologyId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/newModelVersion`;
        return this.simplePut(url, data);
    }

    newDocumentationVersion(terminologyId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/newDocumentationVersion`;
        return this.simplePut(url, data);
    }

    finalise(terminologyId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/finalise`;
        return this.simplePut(url, data);
    }

    tree(terminologyId, queryStringParams) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/tree`;
        return this.simpleGet(url, queryStringParams);
    }

    alterFolder(terminologyId, folderId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/folder/${folderId}`;
        return this.simplePut(url, data);
    }

    diff(terminologyId, otherModelId, queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams);
    }

    exportModel(terminologyId, exporterNamespace, exporterName, exporterVersion, queryStringParams?) {
        const url = `${this.apiEndpoint}/codeSets/${terminologyId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams);
    }

    list(queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies`;
        return this.simpleGet(url, queryStringParams);
    }

    removeAll(queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies`;
        return this.simpleDelete(url, queryStringParams);
    }

    remove(terminologyId, queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    update(terminologyId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
        return this.simplePut(url, data);
    }

    get(terminologyId, queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
        return this.simpleGet(url, queryStringParams);
    }

    termRelationships(terminologyId, termRelationshipTypeId, queryStringParams) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships`;
        return this.simpleGet(url, queryStringParams);
    }

    getTermRelationship(terminologyId, termRelationshipTypeId, termRelationshipId, queryStringParams?) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${termRelationshipId}`;
        return this.simpleGet(url, queryStringParams);
    }

}
