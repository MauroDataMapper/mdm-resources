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
 * Controller: classifier
 |   POST   | /api/classifiers/${classifierId}/classifiers                                                          | Action: save
 |   GET    | /api/classifiers/${classifierId}/classifiers                                                          | Action: index
 |  DELETE  | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |   PUT    | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |  DELETE  | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   PUT    | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   GET    | /api/classifiers/${classifierId}/catalogueItems                                                       | Action: catalogueItems
 |  DELETE  | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: delete
 |   PUT    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: update
 |   GET    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: show
 |   POST   | /api/classifiers                                                                                      | Action: save
 |   GET    | /api/classifiers                                                                                      | Action: index
 |  DELETE  | /api/classifiers/${id}                                                                                | Action: delete
 |   PUT    | /api/classifiers/${id}                                                                                | Action: update
 |   GET    | /api/classifiers/${id}                                                                                | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 */
export class MdmClassifierResource extends MdmResource {
    // get(id, action, options) {
    //     return this.getResource('classifiers', id, action, options);
    // }

    // delete(id, action) {
    //     return this.deleteResource('classifiers', id, action);
    // }

    // put(id, action, options) {
    //     return this.putResource('classifiers', id, action, options);
    // }

    // post(id, action, options) {
    //     id = !id ? '' : id + '/';
    //     action = !action ? '' : action;
    //     return this.postResource('classifiers', id, action, options);
    //     // return this.resourcesService.post("classifiers" , id , action,  options.resource)
    // }

    save(data) {
        const url = `${this.apiEndpoint}/classifiers`;
        return this.simplePost(url, data);
    }

    saveChildrenOf(classifierId, data) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers`;
        return this.simplePost(url, data);
    }

    addToCatalogueItem(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simplePost(url, data);
    }

    list(queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers`;
        return this.simpleGet(url, queryStringParams);
    }

    listChildrenOf(classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers`;
        return this.simpleGet(url, queryStringParams);
    }

    listCatalogueItemsFor(classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/catalogueItems`;
        return this.simpleGet(url, queryStringParams);
    }

    listForCatalogueItem(catalogueItemDomainType, catalogueItemId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simpleGet(url, queryStringParams);
    }

    remove(classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    removeChildOf(classifierId, childId, queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    removeFromCatalogueItem(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    update(classifierId, data) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simplePut(url, data);
    }

    updateChildOf(classifierId, childId, data) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simplePut(url, data);
    }

    get(classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams);
    }

    getChildOf(classifierId, childId, queryStringParams?) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simpleGet(url, queryStringParams);
    }

    getFromCatalogueItem(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
