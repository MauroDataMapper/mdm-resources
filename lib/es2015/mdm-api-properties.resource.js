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
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing system properties in the Mauro instance.
 */
export class MdmApiPropertyResources extends MdmResource {
    /**
     * `HTTP GET` - Gets a list of all API properties.
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
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/properties`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP GET` - Gets a list of all publicly accessible API properties. Administrator permissions are not required for this API.
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
    listPublic(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/properties`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP GET` - Gets an API property by ID.
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
    get(id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/properties/${id}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP POST` - Creates a new API property.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK` and the response body will be the same as that returned
     * from the `get()` function.
     */
    save(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/properties`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    /**
     * `HTTP PUT` - Updates an existing API property.
     * @param id The UUID of the property to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * On success, the response will be a `200 OK` and the response body will be the same as that returned
     * from the `get()` function.
     */
    update(id, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/properties/${id}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /**
     * `HTTP DELETE` - Removes an existing API property.
     * @param id The UUID of the property to remove.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(id, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/properties/${id}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-api-properties.resource.js.map