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
 * Controller: authenticating
 |    *     | /api/authentication/logout                                                                                          | Action: logout
 |   POST   | /api/authentication/login                                                                                           | Action: login
 */
export class MdmSecurityResource extends MdmResource {
    login(data) {
        const url = `${this.apiEndpoint}/authentication/login`;
        return this.simplePost(url, data);
    }
    logout(queryStringParams) {
        const url = `${this.apiEndpoint}/authentication/logout`;
        return this.simpleGet(url, queryStringParams);
    }
    permissions(securableResourceDomainType, securableResourceId, queryStringParams) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/permissions`;
        return this.simpleGet(url, queryStringParams);
    }
}
//# sourceMappingURL=mdm-security.resource.js.map