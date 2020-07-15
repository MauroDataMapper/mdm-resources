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
export class MdmSecurableResource extends MdmResource {
    removeUserGroupFromSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    addUserGroupToSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, data) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}`;
        return this.simplePost(url, data);
    }

    addsScurableResourceGroupRole(securableResourceDomainType, securableResourceId, data) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles`;
        return this.simplePost(url, data);
    }

    listSecurableResourceGroupRoles(securableResourceDomainType, securableResourceId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles`;
        return this.simpleGet(url, queryStringParams);
    }

    removeSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, data) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simplePut(url, data);
    }

    getSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleGet(url, queryStringParams);
    }

    getGroupRoles(securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
