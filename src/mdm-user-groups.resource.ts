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
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from 'mdm-rest-handler';

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

    listInApplicationGroupRole(applicationGroupRoleId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeFromApplicationGroupRole(applicationGroupRoleId, userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateInApplicationGroupRole(applicationGroupRoleId, userGroupId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    removeUserFromUserGroup(userGroupId, catalogueUserId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateUserInUserGroup(userGroupId, catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(userGroupId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listInSecurableResourceUserGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeUserFromContainerUserGroup(containerDomainType, containerId, userGroupId, catalogueUserId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateUserFromContainerUserGroup(containerDomainType, containerId, userGroupId, catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    addToContainer(containerDomainType, containerId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listInContainer(containerDomainType, containerId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeFromContainer(containerDomainType, containerId, userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateInContainer(containerDomainType, containerId, userGroupId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getFromContainer(containerDomainType, containerId, userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    addSecurableResourceGroupRole(userGroupId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    securableResourceGroupRoles(userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
