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
 * MDM resource for managing Digital Object Identifiers (DOI) on catalogue items.
 *
 * In order to use these endpoints, the [mdm-plugin-digital-object-identifiers](https://github.com/MauroDataMapper-Plugins/mdm-plugin-digital-object-identifiers)
 * plugin must be installed in the Mauro instance.
 *
 * The Digital Object Identifiers plugin allows for the submission and usage of DOIs on Mauro catalogue items. See https://www.doi.org/ for more details on
 * Digital Object Identifiers.
 */
var MdmPluginDoiResource = /** @class */ (function (_super) {
    __extends(MdmPluginDoiResource, _super);
    function MdmPluginDoiResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Gets the Digital Object Identifier status of catalogue item.
     *
     * @param domainType The multi-facet aware domain type of the item to get.
     * @param id The unique identifier of the item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DoiStatusResponse} containing a {@link DoiStatus} object.
     */
    MdmPluginDoiResource.prototype.get = function (domainType, id, query, options) {
        var url = this.apiEndpoint + "/" + domainType + "/" + id + "/doi";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Submits the data required to generate a new Digital Object Identifier for a catalogue item.
     *
     * @param domainType The multi-facet aware domain type of the item to submit.
     * @param id The unique identifier of the item to submit.
     * @param query Optional query parameters to control the submission.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DoiSubmissionResponse} containing a {@link DoiSubmissionState} object.
     */
    MdmPluginDoiResource.prototype.save = function (domainType, id, query, options) {
        var queryString = this.generateQueryString(query);
        var url = this.apiEndpoint + "/" + domainType + "/" + id + "/doi" + queryString;
        return this.simplePost(url, {}, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing Digital Object Identifier from a catalogue item.
     *
     * @param domainType The multi-facet aware domain type of the item to remove the Digital Object Identifier from.
     * @param id The unique identifier of the item to remove the Digital Object Identifier from.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmPluginDoiResource.prototype.remove = function (domainType, id, query, options) {
        var url = this.apiEndpoint + "/" + domainType + "/" + id + "/doi";
        return this.simpleDelete(url, query, options);
    };
    return MdmPluginDoiResource;
}(MdmResource));
export { MdmPluginDoiResource };
//# sourceMappingURL=mdm-plugin-doi.resource.js.map