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
 * Controller: session
 |   GET    | /api/session/keepAlive                                                                                | Action: keepAlive
 |   GET    | /api/admin/activeSessions                                                                             | Action: activeSessions
 |   GET    | /api/session/isAuthenticated/${sesssionId}?                                                           | Action: isAuthenticatedSession
 */
export class MdmSessionResource extends MdmResource {
    keepAlive(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/session/keepAlive`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    activeSessions(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/session/activeSessions`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    isAuthenticated(sessionId?, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/session/isAuthenticated${sessionId ? `/${sessionId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    isApplicationAdministration(queryStringParams?, restHandlerOptions?)
    {
        const url = `${this.apiEndpoint}/session/isApplicationAdministration`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
