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
 * MDM resource for managing system properties in the Mauro instance.
 */
var MdmApiPropertyResources = /** @class */ (function (_super) {
    __extends(MdmApiPropertyResources, _super);
    function MdmApiPropertyResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Gets a list of all API properties.
     *
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
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
     *          key: 'test.property',
     *          value: 'test',
     *          category: 'Test',
     *          publiclyVisible: false,
     *          lastUpdatedBy: 'user@test.com',
     *          createdBy: 'admin@test.com',
     *          lastUpdated: '2021-03-10T15:17:05.459Z'
     *      }
     *  ]
     * }
     * ```
     */
    MdmApiPropertyResources.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP GET` - Gets a list of all publicly accessible API properties. Administrator permissions are not required for this API.
     *
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
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
     *          key: 'test.property',
     *          value: 'test',
     *          category: 'Test',
     *          publiclyVisible: true,
     *          lastUpdatedBy: 'user@test.com',
     *          createdBy: 'admin@test.com',
     *          lastUpdated: '2021-03-10T15:17:05.459Z'
     *      }
     *  ]
     * }
     * ```
     */
    MdmApiPropertyResources.prototype.listPublic = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/properties";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP GET` - Gets an API property by ID.
     *
     * @param id The UUID of the property to get.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     *
     * ```ts
     *  {
     *      id: 'c7de1358-a4ce-4d72-abca-04013f7f4acc',
     *      key: 'test.property',
     *      value: 'test',
     *      category: 'Test',
     *      publiclyVisible: true,
     *      lastUpdatedBy: 'user@test.com',
     *      createdBy: 'admin@test.com',
     *      lastUpdated: '2021-03-10T15:17:05.459Z'
     *  }
     * ```
     */
    MdmApiPropertyResources.prototype.get = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP POST` - Creates a new API property.
     *
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK` and the response body will be the same as that returned
     * from the `get()` function.
     */
    MdmApiPropertyResources.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simplePost(url, data, restHandlerOptions);
    };
    /**
     * `HTTP PUT` - Updates an existing API property.
     *
     * @param id The UUID of the property to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * On success, the response will be a `200 OK` and the response body will be the same as that returned
     * from the `get()` function.
     */
    MdmApiPropertyResources.prototype.update = function (id, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simplePut(url, data, restHandlerOptions);
    };
    /**
     * `HTTP DELETE` - Removes an existing API property.
     *
     * @param id The UUID of the property to remove.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmApiPropertyResources.prototype.remove = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmApiPropertyResources;
}(MdmResource));
export { MdmApiPropertyResources };
//# sourceMappingURL=mdm-api-properties.resource.js.map