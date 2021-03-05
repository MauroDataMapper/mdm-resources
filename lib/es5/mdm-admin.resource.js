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
 * Controller: admin
 |   GET    | /api/admin/status                                                                                     | Action: status
 |   POST   | /api/admin/editProperties                                                                             | Action: editApiProperties
 |   POST   | /api/admin/rebuildLuceneIndexes                                                                       | Action: rebuildLuceneIndexes
 |   GET    | /api/admin/properties                                                                                 | Action: apiProperties
 *
 * Controller: mauroDataMapperProvider
 |   GET    | /api/admin/modules                                                                                    | Action: modules
 *
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 *
 * Controller: email
 |   GET    | /api/admin/emails                                                                                     | Action: index
 *
 * Controller: authenticating
 |   POST   | /api/admin/activeSessions                                                                             | Action: activeSessionsWithCredentials
 */
var MdmAdminResource = /** @class */ (function (_super) {
    __extends(MdmAdminResource, _super);
    function MdmAdminResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmAdminResource.prototype.status = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/status";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.editProperties = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/editProperties";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmAdminResource.prototype.rebuildLuceneIndexes = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/rebuildLuceneIndexes";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmAdminResource.prototype.properties = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/properties";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.modules = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/modules";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.deletedModels = function (containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/deleted";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.modelSupersededModels = function (containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/modelSuperseded";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.documentationSupersededModels = function (containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/tree/" + containerDomainType + "/" + modelDomainType + "/documentationSuperseded";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.emails = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/emails";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmAdminResource.prototype.activeSessions = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/activeSessions";
        return this.simpleGet(url, data, restHandlerOptions);
    };
    return MdmAdminResource;
}(MdmResource));
export { MdmAdminResource };
//# sourceMappingURL=mdm-admin.resource.js.map