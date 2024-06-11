/*
Copyright 2020-2024 University of Oxford and NHS England

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
import { RequestSettings, QueryParameters } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

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
export class MdmGroupRoleResource extends MdmResource {
  save(data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/groupRoles`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  list(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/groupRoles`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  applicationGroupRoles(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/applicationGroupRoles`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  remove(
    groupRoleId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/groupRoles/${groupRoleId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  update(groupRoleId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/groupRoles/${groupRoleId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  get(
    groupRoleId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/groupRoles/${groupRoleId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  listForSecurableResource(
    securableResourceDomainType,
    securableResourceId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles `;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }
}
