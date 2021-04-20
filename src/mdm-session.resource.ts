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
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';

/**
 * MDM resource for managing sessions.
 */
export class MdmSessionResource extends MdmResource {    
    keepAlive(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/session/keepAlive`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    activeSessions(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/activeSessions`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP GET` - Confirm if a session has been authenticated.
     * @param sessionId An optional UUID representing a session to test. If not provided, the current session will be tested.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     * 
     * ```ts
     * {
     *  authenticatedSession: true
     * }
     * ```
     */
    isAuthenticated(sessionId?: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/session/isAuthenticated${sessionId ? `/${sessionId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * `HTTP GET` - Confirm if the current authenticated session has administrative priviledges.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     * 
     * ```ts
     * {
     *  applicationAdministrationSession: true
     * }
     * ```
     */
    isApplicationAdministration(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/session/isApplicationAdministration`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
