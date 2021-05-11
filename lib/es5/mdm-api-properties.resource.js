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
 * MDM resource for managing system and user defined properties in Mauro.
 *
 * @description With the exception of the {@link MdmApiPropertyResources.listPublic} endpoint, all these endpoints
 * require an authenticated administrator to use them.
 *
 * @see {@link ApiProperty}
 */
var MdmApiPropertyResources = /** @class */ (function (_super) {
    __extends(MdmApiPropertyResources, _super);
    function MdmApiPropertyResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Gets a list of all API properties.
     *
     * @param query Optional query string parameters to filter the list, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ApiPropertyIndexResponse} containing a list of {@link ApiProperty} items.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmApiPropertyResources.prototype.list = function (query, options) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Gets a list of all publicly accessible API properties. Administrator permissions are _not_ required for this API.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ApiPropertyIndexResponse} containing a list of {@link ApiProperty} items.
     */
    MdmApiPropertyResources.prototype.listPublic = function (query, options) {
        var url = this.apiEndpoint + "/properties";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Gets an API property by ID.
     *
     * @param id The unique identifier of the property to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ApiPropertyResponse} containing a {@link ApiProperty}.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmApiPropertyResources.prototype.get = function (id, query, options) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Creates a new API property.
     *
     * @param data The data to use for creation.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ApiPropertyResponse} containing a {@link ApiProperty}.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmApiPropertyResources.prototype.save = function (data, options) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP PUT` - Updates an existing API property.
     *
     * @param id The unique identifier of the property to update.
     * @param data The data to use for the update.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link ApiPropertyResponse} containing a {@link ApiProperty}.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmApiPropertyResources.prototype.update = function (id, data, options) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing API property.
     *
     * @param id The unique identifier of the property to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmApiPropertyResources.prototype.remove = function (id, query, options) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simpleDelete(url, query, options);
    };
    return MdmApiPropertyResources;
}(MdmResource));
export { MdmApiPropertyResources };
//# sourceMappingURL=mdm-api-properties.resource.js.map