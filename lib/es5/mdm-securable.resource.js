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
 * Controller: securableResourceGroupRole
 |  DELETE  | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}      | Action: delete
 |   POST   | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}      | Action: save
 |   POST   | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles                              | Action: save
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles                              | Action: index
 |  DELETE  | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${id}                        | Action: delete
 |   PUT    | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${id}                        | Action: update
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${id}                        | Action: show
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}                                | Action: index
 */
var MdmSecurableResource = /** @class */ (function (_super) {
    __extends(MdmSecurableResource, _super);
    function MdmSecurableResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmSecurableResource.prototype.removeUserGroupFromSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmSecurableResource.prototype.addUserGroupToSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, data) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId + "/userGroups/" + userGroupId;
        return this.simplePost(url, data);
    };
    MdmSecurableResource.prototype.addsScurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, data) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles";
        return this.simplePost(url, data);
    };
    MdmSecurableResource.prototype.listSecurableResourceGroupRoles = function (securableResourceDomainType, securableResourceId, queryStringParams) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles";
        return this.simpleGet(url, queryStringParams);
    };
    MdmSecurableResource.prototype.removeSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmSecurableResource.prototype.updateSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, data) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simplePut(url, data);
    };
    MdmSecurableResource.prototype.getSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmSecurableResource.prototype.getGroupRoles = function (securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmSecurableResource;
}(MdmResource));
export { MdmSecurableResource };
//# sourceMappingURL=mdm-securable.resource.js.map