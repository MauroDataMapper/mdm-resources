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
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing subscribed catalogues and federated models.
 */
var MdmSubscribedCataloguesResource = /** @class */ (function (_super) {
    __extends(MdmSubscribedCataloguesResource, _super);
    function MdmSubscribedCataloguesResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    MdmSubscribedCataloguesResource.prototype.get = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP POST` - Creates a new Subscribed Catalogue.
     *
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK`.
     */
    MdmSubscribedCataloguesResource.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues";
        return this.simplePost(url, data, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.update = function (id, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id;
        return this.simplePut(url, data, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.remove = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.listAvailableModels = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id + "/availableModels";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.listSubscribedModels = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id + "/subscribedModels";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP POST` - Federate a subscribed model to refresh.
     *
     * @param id The UUID of the Subscribed Model to federate.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK`.
     */
    MdmSubscribedCataloguesResource.prototype.federate = function (id, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedModels/" + id + "/federate";
        return this.simplePost(url, null, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.getSubscribedModel = function (catalogueId, id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + catalogueId + "/subscribedModels/" + id;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.saveSubscribedModel = function (catalogueId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + catalogueId + "/subscribedModels";
        return this.simplePost(url, data, restHandlerOptions);
    };
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
    MdmSubscribedCataloguesResource.prototype.removeSubscribedModel = function (catalogueId, id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + catalogueId + "/subscribedModels/" + id;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmSubscribedCataloguesResource;
}(MdmResource));
export { MdmSubscribedCataloguesResource };
//# sourceMappingURL=mdm-subscribed-catalogues.resource.js.map