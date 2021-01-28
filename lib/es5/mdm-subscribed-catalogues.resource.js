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
/**
 * Controller: subscribedCatalogues
 |   GET    | /api/subscribedCatalogues/${id}                                                                                               | Action: show
 |   GET    | /api/subscribedCatalogues                                                                                                     | Action: index
 |   POST   | /api/subscribedCatalogues                                                                                                     | Action: save
 |   PUT    | /api/subscribedCatalogues/${id}                                                                                               | Action: update
 |  DELETE  | /api/subscribedCatalogues/${id}                                                                                               | Action: delete
 */
var MdmSubscribedCataloguesResource = /** @class */ (function (_super) {
    __extends(MdmSubscribedCataloguesResource, _super);
    function MdmSubscribedCataloguesResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmSubscribedCataloguesResource.prototype.get = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSubscribedCataloguesResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSubscribedCataloguesResource.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmSubscribedCataloguesResource.prototype.update = function (id, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmSubscribedCataloguesResource.prototype.remove = function (id, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/subscribedCatalogues/" + id;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmSubscribedCataloguesResource;
}(MdmResource));
export { MdmSubscribedCataloguesResource };
//# sourceMappingURL=mdm-subscribed-catalogues.resource.js.map