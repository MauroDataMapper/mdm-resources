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
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';

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

    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    saveChildrenOf(classifierId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    addToCatalogueItem(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listChildrenOf(classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listCatalogueItemsFor(classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/catalogueItems`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listForCatalogueItem(catalogueItemDomainType, catalogueItemId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeChildOf(classifierId, childId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeFromCatalogueItem(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(classifierId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    updateChildOf(classifierId, childId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    getChildOf(classifierId, childId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    getFromCatalogueItem(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeReadByAuthenticated(classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(classifierId, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(classifierId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(classifierId, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
