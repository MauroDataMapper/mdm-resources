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
 * Controller: term
 |   GET    | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   POST   | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/tree/${termId}?                                                  | Action: tree                                    |
 |   POST   | /api/terminologies/${terminologyId}/terms                                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms                                                                  | Action: index                                   |
 |   GET    | /api/codeSets/${codeSetId}/terms                                                                           | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: show
 *
 * Controller: termRelationship
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships            | Action: index                                   |
 |   POST   | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: index                                   |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${id}      | Action: show                                    |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: show
 */
export class MdmTermResource extends MdmResource {
    //   private catalogueItem: MdmCatalogueItemResource;
    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }
    //   get(terminologyId, id, action: any = {}) {
    //     // if (['metadata', 'annotations', 'classifiers'].includes(action)) {
    //     //   return this.catalogueItem.get(id, action.contentType);
    //     // }
    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('terms', id);
    //         case 'annotations': return this.catalogueItem.listAnnotations('terms', id);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('terms', id);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('terms', id);
    //     }
    //     return this.getResource(this.makeUrl(terminologyId), id, action);
    //   }
    //   put(terminologyId, id, action) {
    //     return this.putResource(this.makeUrl(terminologyId), id, action);
    //   }
    //   post(terminologyId, id, action) {
    //     return this.postResource(this.makeUrl(terminologyId), id, action);
    //   }
    //   delete(terminologyId, id) {
    //     return this.deleteResource(this.makeUrl(terminologyId), id);
    //   }
    //   makeUrl(terminologyId: string) {
    //     return `terminologies/${terminologyId}/terms/`;
    //   }
    search(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/search`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    tree(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/tree${termId ? `/${termId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(terminologyId, termId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    addTermRelationships(terminologyId, termId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    termRelationships(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeTermRelationship(terminologyId, termId, termRelationshipId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateTermRelationship(terminologyId, termId, termRelationshipId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getTermRelationship(terminologyId, termId, termRelationshipId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-term.resource.js.map