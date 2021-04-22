/*
Copyright 2021 University of Oxford

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

import { QueryParameters } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions } from './mdm-rest-handler';

/**
 * MDM resource for managing subscribed catalogues and federated models.
 */
export class MdmSubscribedCataloguesResource extends MdmResource {
    /**
     * `HTTP GET` - Gets a Subscribed Catalogue by ID.
     *
     * @param id The UUID of the Subscribed Catalogue to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     * 
     * ```ts
     * {
     *     id: 'c7de1358-a4ce-4d72-abca-04013f7f4acc',
     *     url: 'http://test.mauro.com',
     *     apiKey: 'dd3aaf30-b0b0-4d6e-8cbd-a62bfaff672e',
     *     label: 'Another instance',
     *     description: 'Another instance',
     *     refreshPeriod: 7
     * }
     * ```
     */
    get(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP GET` - Gets a list of all Subscribed Catalogues.
     *
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     * 
     * ```ts
     * {
     *  count: 1,
     *  items: [
     *      {
     *          id: 'c7de1358-a4ce-4d72-abca-04013f7f4acc',
     *          url: 'http://test.mauro.com',
     *          apiKey: 'dd3aaf30-b0b0-4d6e-8cbd-a62bfaff672e',
     *          label: 'Another instance',
     *          description: 'Another instance',
     *          refreshPeriod: 7
     *      }
     *  ]
     * }
     * ```
     */
    list(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP POST` - Creates a new Subscribed Catalogue.
     *
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    /**
     * `HTTP PUT` - Updates an existing Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `PUT` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    update(id: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    /**
     * `HTTP DELETE` - Removes an existing Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `DELETE` request.
     * 
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP GET` - Gets a list of all available federated models from a Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    listAvailableModels(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/availableModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP GET` - Gets a list of all federated models that this catalogue has subscribed to from a Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    listSubscribedModels(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/subscribedModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP POST` - Federate a subscribed model to refresh.
     *
     * @param id The UUID of the Subscribed Model to federate.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    federate(id: string, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedModels/${id}/federate`;
        return this.simplePost(url, null, restHandlerOptions);
    }

    /**
     * `HTTP GET` - Gets a Subscribed Catalogue by ID.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to search in.
     * @param id The UUID of the subscription to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    getSubscribedModel(catalogueId: string, id: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels/${id}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP POST` - Creates a new subscription to a model in a Subscribed Catalogue.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to save to.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     * 
     * On success, the response will be a `200 OK`.
     */
    saveSubscribedModel(catalogueId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    /**
     * `HTTP DELETE` - Removes an existing subscription to a model in a Subscribed Catalogue.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to remove from.
     * @param id The UUID of the subscribed model to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `DELETE` request.
     * 
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    removeSubscribedModel(catalogueId: string, id: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels/${id}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
}