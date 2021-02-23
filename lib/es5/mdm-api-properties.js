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
import { MdmResource } from "./mdm-resource";
var MdmApiPropertyResources = /** @class */ (function (_super) {
    __extends(MdmApiPropertyResources, _super);
    function MdmApiPropertyResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a list of all API properties.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    MdmApiPropertyResources.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * Gets a list of all publicly accessible API properties. Administrator permissions are not required for this API.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    MdmApiPropertyResources.prototype.listPublic = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/properties";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * Gets an API property by ID.
     * @param id The UUID of the property to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    MdmApiPropertyResources.prototype.get = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * Creates a new API property.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    MdmApiPropertyResources.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simplePost(url, data, restHandlerOptions);
    };
    /**
     * Updates an existing API property.
     * @param id The UUID of the property to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    MdmApiPropertyResources.prototype.update = function (id, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simplePut(url, data, restHandlerOptions);
    };
    /**
     * Removes an existing API property.
     * @param id The UUID of the property to remove.
     * @param queryStringParams Optional query string parameters for the request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    MdmApiPropertyResources.prototype.remove = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties/" + id;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmApiPropertyResources;
}(MdmResource));
export { MdmApiPropertyResources };
//# sourceMappingURL=mdm-api-properties.js.map