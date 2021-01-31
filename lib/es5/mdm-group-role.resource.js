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
 * Controller: groupRole
 |   POST   | /api/admin/groupRoles                                                                                               | Action: save
 |   GET    | /api/admin/groupRoles                                                                                               | Action: index
 |   GET    | /api/admin/applicationGroupRoles                                                                                    | Action: listApplicationGroupRoles
 |  DELETE  | /api/admin/groupRoles/${id}                                                                                         | Action: delete
 |   PUT    | /api/admin/groupRoles/${id}                                                                                         | Action: update
 |   GET    | /api/admin/groupRoles/${id}                                                                                         | Action: show
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles                                               | Action: listGroupRolesAvailableToSecurableResource
 */
var MdmGroupRoleResource = /** @class */ (function (_super) {
    __extends(MdmGroupRoleResource, _super);
    function MdmGroupRoleResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmGroupRoleResource.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/groupRoles";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmGroupRoleResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/groupRoles";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmGroupRoleResource.prototype.applicationGroupRoles = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmGroupRoleResource.prototype.remove = function (groupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/groupRoles/" + groupRoleId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmGroupRoleResource.prototype.update = function (groupRoleId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/groupRoles/" + groupRoleId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmGroupRoleResource.prototype.get = function (groupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/groupRoles/" + groupRoleId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmGroupRoleResource.prototype.listForSecurableResource = function (securableResourceDomainType, securableResourceId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles ";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmGroupRoleResource;
}(MdmResource));
export { MdmGroupRoleResource };
//# sourceMappingURL=mdm-group-role.resource.js.map