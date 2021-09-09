/*
Copyright 2020-2021 University of Oxford
and Health and Social Care Information Centre, also known as NHS Digital

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
import { RequestSettings, QueryParameters, Uuid } from './mdm-common.model';
import { SessionListQueryParameters } from './mdm-session.model';
import { MdmResource } from './mdm-resource';

/**
 * MDM resource for managing sessions in Mauro.
 */
export class MdmSessionResource extends MdmResource {
  keepAlive(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/session/keepAlive`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of all active sessions runnin in Mauro. **Note:** only authenticated administrators may use this endpoint.
   *
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a [[SessionListResponse]] containing the [[SessionList]].
   *
   * `403 Forbidden` - user is not an administrator.
   */
  activeSessions(query?: SessionListQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/activeSessions`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Confirm if a session has been authenticated.
   *
   * @param sessionId An optional UUID representing a session to test. If not provided, the current session will be tested.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a [[AuthenticatedResponse]] containing the [[AuthenticatedResult]].
   *
   * @see [[MdmSecurityResource.login]]
   */
  isAuthenticated(sessionId?: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/session/isAuthenticated${sessionId ? `/${sessionId}` : ''}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Confirm if the current authenticated session has administrative priviledges.
   *
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a [[AdminSessionResponse]] containing the [[AdminSessionResult]].
   */
  isApplicationAdministration(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/session/isApplicationAdministration`;
    return this.simpleGet(url, query, options);
  }
}
