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
export class MdmUserGroupsResource extends MdmResource {
    listInApplicationGroupRole(applicationGroupRoleId, queryStringParams) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups`;
        return this.simpleGet(url, queryStringParams);
    }
    removeFromApplicationGroupRole(applicationGroupRoleId, userGroupId, queryStringParams) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateInApplicationGroupRole(applicationGroupRoleId, userGroupId, data) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}`;
        return this.simplePut(url, data);
    }
    removeUserFromUserGroup(userGroupId, catalogueUserId, queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateUserInUserGroup(userGroupId, catalogueUserId, data) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data);
    }
    save(data) {
        const url = `${this.apiEndpoint}/userGroups`;
        return this.simplePost(url, data);
    }
    list(queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups`;
        return this.simpleGet(url, queryStringParams);
    }
    remove(userGroupId, queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    update(userGroupId, data) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simplePut(url, data);
    }
    get(userGroupId, queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simpleGet(url, queryStringParams);
    }
    listInSecurableResourceUserGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups`;
        return this.simpleGet(url, queryStringParams);
    }
    removeUserFromContainerUserGroup(containerDomainType, containerId, userGroupId, catalogueUserId, queryStringParams) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateUserFromContainerUserGroup(containerDomainType, containerId, userGroupId, catalogueUserId, data) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data);
    }
    addToContainer(containerDomainType, containerId, data) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups`;
        return this.simplePost(url, data);
    }
    listInContainer(containerDomainType, containerId, queryStringParams) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups`;
        return this.simpleGet(url, queryStringParams);
    }
    removeFromContainer(containerDomainType, containerId, userGroupId, queryStringParams) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateInContainer(containerDomainType, containerId, userGroupId, data) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simplePut(url, data);
    }
    getFromContainer(containerDomainType, containerId, userGroupId, queryStringParams) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simpleGet(url, queryStringParams);
    }
    addSecurableResourceGroupRole(userGroupId, data) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles`;
        return this.simplePost(url, data);
    }
    securableResourceGroupRoles(userGroupId, queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles`;
        return this.simpleGet(url, queryStringParams);
    }
    removeSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, data) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simplePut(url, data);
    }
    getSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, queryStringParams) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
//# sourceMappingURL=mdm-user-groups.resource.js.map