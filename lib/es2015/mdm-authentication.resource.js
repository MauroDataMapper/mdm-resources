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
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { DefaultMdmRestHandler } from './mdm-rest-handler';
import { MdmSecurityResource } from './mdm-security.resource';
import { MdmSessionResource } from './mdm-session.resource';
export class MdmAuthenticationResource extends MdmResource {
    constructor(resourcesConfig = new MdmResourcesConfiguration(), restHandler = new DefaultMdmRestHandler()) {
        super(resourcesConfig, restHandler);
        this.securityResource = new MdmSecurityResource(resourcesConfig, restHandler);
        this.sesisonResource = new MdmSessionResource(resourcesConfig, restHandler);
    }
    login(data) {
        return this.securityResource.login(data);
    }
    logout() {
        return this.securityResource.logout();
    }
    isAuthenticated(sessionId) {
        this.sesisonResource.isAuthenticated(sessionId);
    }
}
//# sourceMappingURL=mdm-authentication.resource.js.map