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
import { MdmResource } from "./mdm-resource";
/**
 * Controller: subscribedCatalogues
 |   GET    | /api/subscribedCatalogues/${id}                                                                                               | Action: show
 |   GET    | /api/subscribedCatalogues                                                                                                     | Action: index
 |   POST   | /api/subscribedCatalogues                                                                                                     | Action: save
 |   PUT    | /api/subscribedCatalogues/${id}                                                                                               | Action: update
 |  DELETE  | /api/subscribedCatalogues/${id}                                                                                               | Action: delete
 |   GET    | /api/subscribedCatalogues/${id}/availableModels                                                                               | Action: index
 |   GET    | /api/subscribedCatalogues/${id}/subscribedModels                                                                              | Action: index
 |   GET    | /api/subscribedCatalogues/${catalogId}/subscribedModels/${id}                                                                 | Action: show
 |   POST   | /api/subscribedCatalogues/${catalogId}/subscribedModels                                                                       | Action: save
 |  DELETE  | /api/subscribedCatalogues/${catalogId}/subscribedModels/${id}                                                                 | Action: delete
 */
export class MdmSubscribedCataloguesResource extends MdmResource {
    /**
     * Gets a Subscribed Catalogue by ID.
     * @param id The UUID of the Subscribed Catalogue to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    get(id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * Gets a list of all Subscribed Catalogues.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * Creates a new Subscribed Catalogue.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    save(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    /**
     * Updates an existing Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    update(id, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /**
     * Removes an existing Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    remove(id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    /**
     * Gets a list of all available federated models from a Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    listAvailableModels(id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/availableModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * Gets a list of all federated models that this catalogue has subscribed to from a Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    listSubscribedModels(id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/subscribedModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * Gets a Subscribed Catalogue by ID.
     * @param catalogueId The UUID of the Subscribed Catalogue to search in.
     * @param id The UUID of the subscription to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    getSubscribedModel(catalogueId, id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels/${id}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * Creates a new subscription to a model in a Subscribed Catalogue.
     * @param catalogueId The UUID of the Subscribed Catalogue to save to.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    saveSubscribedModel(catalogueId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    /**
     * Removes an existing subscription to a model in a Subscribed Catalogue.
     * @param catalogueId The UUID of the Subscribed Catalogue to remove from.
     * @param id The UUID of the subscribed model to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    removeSubscribedModel(catalogueId, id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels/${id}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-subscribed-catalogues.resource.js.map