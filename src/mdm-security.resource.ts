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
import { QueryParameters, Uuid } from 'mdm-common.model';
import { LoginPayload, SecurableDomainType } from 'mdm-security.model';
import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions } from './mdm-rest-handler';

/**
 * MDM resource for managing security and authentication.
 */
export class MdmSecurityResource extends MdmResource {
  /**
   * `HTTP POST` - Login using a username and password to generate a new authenticated session.
   * @param data The username/password to use.
   * @param restHandlerOptions Optional REST handler options, if required.
   * @returns The result of the `POST` request.
   * 
   * `200 OK` - will return a [[LoginResponse]] containing the [[LoginResult]].
   * 
   * @see [[MdmSessionResource.isAuthenticated]]
   */
  login(data: LoginPayload, restHandlerOptions?: IMdmRestHandlerOptions) {
    const url = `${this.apiEndpoint}/authentication/login`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Logout of an authenticated session.
   * @param queryStringParams Optional query string parameters, if required.
   * @param restHandlerOptions Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   * 
   * `204 No Content` - successfully logged out, will contain no body.
   */
  logout(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
    const url = `${this.apiEndpoint}/authentication/logout`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Inspect the permissions for a particular Mauro resource.
   * @param securableResourceDomainType The domain type to get permissions for.
   * @param securableResourceId The UUID of the resource to inspect.
   * @param queryStringParams Optional query string parameters, if required.
   * @param restHandlerOptions Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return a [[PermissionsResponse]] containing the [[Permissions]] of this Mauro resource.
   */
  permissions(
    domainType: SecurableDomainType,
    securableResourceId: Uuid,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: IMdmRestHandlerOptions) {
    const url = `${this.apiEndpoint}/${domainType}/${securableResourceId}/permissions`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }
}
