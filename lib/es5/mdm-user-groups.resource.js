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
 * Controller: userGroup
 |   GET    | /api/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups                                               | Action: index
 |  DELETE  | /api/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}                                | Action: updateApplicationGroupRole
 |   PUT    | /api/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}                                | Action: updateApplicationGroupRole
 |  DELETE  | /api/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}                                                    | Action: alterMembers
 |   PUT    | /api/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}                                                    | Action: alterMembers
 |   POST   | /api/userGroups                                                                                                     | Action: save
 |   GET    | /api/userGroups                                                                                                     | Action: index
 |  DELETE  | /api/userGroups/${id}                                                                                               | Action: delete
 |   PUT    | /api/userGroups/${id}                                                                                               | Action: update
 |   GET    | /api/userGroups/${id}                                                                                               | Action: show
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups                     | Action: index
 |  DELETE  | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}              | Action: alterMembers
 |   PUT    | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}              | Action: alterMembers
 |   POST   | /api/${containerDomainType}/${containerId}/userGroups                                                               | Action: save
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups                                                               | Action: index
 |  DELETE  | /api/${containerDomainType}/${containerId}/userGroups/${id}                                                         | Action: delete
 |   PUT    | /api/${containerDomainType}/${containerId}/userGroups/${id}                                                         | Action: update
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups/${id}                                                         | Action: show
 *
 * Controller: securableResourceGroupRole
 |   POST   | /api/userGroups/${userGroupId}/securableResourceGroupRoles                                                          | Action: save
 |   GET    | /api/userGroups/${userGroupId}/securableResourceGroupRoles                                                          | Action: index
 |  DELETE  | /api/userGroups/${userGroupId}/securableResourceGroupRoles/${id}                                                    | Action: delete
 |   PUT    | /api/userGroups/${userGroupId}/securableResourceGroupRoles/${id}                                                    | Action: update
 |   GET    | /api/userGroups/${userGroupId}/securableResourceGroupRoles/${id}                                                    | Action: show
 */
var MdmUserGroupsResource = /** @class */ (function (_super) {
    __extends(MdmUserGroupsResource, _super);
    function MdmUserGroupsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmUserGroupsResource.prototype.listInApplicationGroupRole = function (applicationGroupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles/" + applicationGroupRoleId + "/userGroups";
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.removeFromApplicationGroupRole = function (applicationGroupRoleId, userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles/" + applicationGroupRoleId + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.updateInApplicationGroupRole = function (applicationGroupRoleId, userGroupId, data) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles/" + applicationGroupRoleId + "/userGroups/" + userGroupId;
        return this.simplePut(url, data);
    };
    MdmUserGroupsResource.prototype.removeUserFromUserGroup = function (userGroupId, catalogueUserId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.updateUserInUserGroup = function (userGroupId, catalogueUserId, data) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simplePut(url, data);
    };
    MdmUserGroupsResource.prototype.save = function (data) {
        var url = this.apiEndpoint + "/userGroups";
        return this.simplePost(url, data);
    };
    MdmUserGroupsResource.prototype.list = function (queryStringParams) {
        var url = this.apiEndpoint + "/userGroups";
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.remove = function (userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.update = function (userGroupId, data) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId;
        return this.simplePut(url, data);
    };
    MdmUserGroupsResource.prototype.get = function (userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.listInSecurableResourceUserGroupRole = function (securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId + "/userGroups";
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.removeUserFromContainerUserGroup = function (containerDomainType, containerId, userGroupId, catalogueUserId, queryStringParams) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.updateUserFromContainerUserGroup = function (containerDomainType, containerId, userGroupId, catalogueUserId, data) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simplePut(url, data);
    };
    MdmUserGroupsResource.prototype.addToContainer = function (containerDomainType, containerId, data) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups";
        return this.simplePost(url, data);
    };
    MdmUserGroupsResource.prototype.listInContainer = function (containerDomainType, containerId, queryStringParams) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups";
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.removeFromContainer = function (containerDomainType, containerId, userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.updateInContainer = function (containerDomainType, containerId, userGroupId, data) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId;
        return this.simplePut(url, data);
    };
    MdmUserGroupsResource.prototype.getFromContainer = function (containerDomainType, containerId, userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.addSecurableResourceGroupRole = function (userGroupId, data) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles";
        return this.simplePost(url, data);
    };
    MdmUserGroupsResource.prototype.securableResourceGroupRoles = function (userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles";
        return this.simpleGet(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.removeSecurableResourceGroupRole = function (userGroupId, securableResourceGroupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmUserGroupsResource.prototype.updateSecurableResourceGroupRole = function (userGroupId, securableResourceGroupRoleId, data) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simplePut(url, data);
    };
    MdmUserGroupsResource.prototype.getSecurableResourceGroupRole = function (userGroupId, securableResourceGroupRoleId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmUserGroupsResource;
}(MdmResource));
export { MdmUserGroupsResource };
//# sourceMappingURL=mdm-user-groups.resource.js.map