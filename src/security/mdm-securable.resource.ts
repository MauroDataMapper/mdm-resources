/*
Copyright 2020-2023 University of Oxford and NHS England

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
import {
  RequestSettings,
  QueryParameters,
  CatalogueItemDomainType,
  Uuid,
  FilterQueryParameters
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

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
  removeUserGroupFromSecurableResourceGroupRole(
    securableResourceDomainType,
    securableResourceId: string,
    groupRoleId: string,
    userGroupId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  addUserGroupToSecurableResourceGroupRole(
    securableResourceDomainType,
    securableResourceId: string,
    groupRoleId: string,
    userGroupId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  addSecurableResourceGroupRole(
    securableResourceDomainType,
    securableResourceId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  listSecurableResourceGroupRoles(
    securableResourceDomainType,
    securableResourceId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeSecurableResourceGroupRole(
    securableResourceDomainType,
    securableResourceId: string,
    securableResourceGroupRoleId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateSecurableResourceGroupRole(
    securableResourceDomainType,
    securableResourceId: string,
    securableResourceGroupRoleId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Gets the available securable resource group roles for a securable resource.
   *
   * @param securableResourceDomainType The domain type of the resource to check.
   * @param securableResourceId The ID of the resource to check.
   * @param groupRoleId The ID of the particular securable resource group role to get. Leave blank to get all roles.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link SecurableResourceGroupRoleIndexResponse} for a list of roles, or a {@link SecurableResourceGroupRoleResponse} for a single role.
   */
  getSecurableResourceGroupRole(
    securableResourceDomainType: CatalogueItemDomainType,
    securableResourceId: Uuid,
    securableResourceGroupRoleId: Uuid,
    query?: FilterQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets the available group roles for a securable resource.
   *
   * @param securableResourceDomainType The domain type of the resource to check.
   * @param securableResourceId The ID of the resource to check.
   * @param groupRoleId The ID of the particular group role to get. Leave blank to get all roles.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link GroupRoleIndexResponse} for a list of roles, or a {@link GroupRoleResponse} for a single role.
   */
  getGroupRoles(
    securableResourceDomainType: CatalogueItemDomainType,
    securableResourceId: Uuid,
    groupRoleId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}`;
    return this.simpleGet(url, query, options);
  }
}
