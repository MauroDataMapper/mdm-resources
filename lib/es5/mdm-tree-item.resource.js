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
/**
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 |   GET    | /api/tree/${containerDomainType}/search/${searchTerm}                                                 | Action: search
 |   GET    | /api/tree/${containerDomainType}                                                                      | Action: index
 |   GET    | /api/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}                        | Action: show
 */
var MdmTreeItemResource = /** @class */ (function (_super) {
    __extends(MdmTreeItemResource, _super);
    function MdmTreeItemResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // get(id?, action?, options?) {
    //     return this.getResource('tree/folders', id, action, null);
    // }
    // getDomainItem(id, domainType, queryStringParams?, restHandlerOptions?) {
    //     return this.simpleGet(`${this.apiEndpoint}/tree/folders/${domainType}/${id}`, options);
    // }
    MdmTreeItemResource.prototype.deletedModels = function (containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/deleted";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTreeItemResource.prototype.modelSupersededModels = function (containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/modelSuperseded";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTreeItemResource.prototype.documentationSupersededModels = function (containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/documentationSuperseded";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTreeItemResource.prototype.search = function (containerDomainType, searchTerm, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType + "/search/" + searchTerm;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTreeItemResource.prototype.list = function (containerDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTreeItemResource.prototype.get = function (containerDomainType, catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/tree/" + containerDomainType + "/" + catalogueItemDomainType + "/" + catalogueItemId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmTreeItemResource;
}(MdmResource));
export { MdmTreeItemResource };
//# sourceMappingURL=mdm-tree-item.resource.js.map