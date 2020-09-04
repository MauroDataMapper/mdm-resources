var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MdmAuthenticationResource = /** @class */ (function (_super) {
    __extends(MdmAuthenticationResource, _super);
    function MdmAuthenticationResource(resourcesConfig, restHandler) {
        if (resourcesConfig === void 0) { resourcesConfig = new MdmResourcesConfiguration(); }
        if (restHandler === void 0) { restHandler = new DefaultMdmRestHandler(); }
        var _this = _super.call(this, resourcesConfig, restHandler) || this;
        _this.securityResource = new MdmSecurityResource(resourcesConfig, restHandler);
        _this.sesisonResource = new MdmSessionResource(resourcesConfig, restHandler);
        return _this;
    }
    MdmAuthenticationResource.prototype.login = function (data, restHandlerOptions) {
        return this.securityResource.login(data, restHandlerOptions);
    };
    MdmAuthenticationResource.prototype.logout = function (queryStringParams, restHandlerOptions) {
        return this.securityResource.logout(queryStringParams, restHandlerOptions);
    };
    MdmAuthenticationResource.prototype.isAuthenticated = function (sessionId, queryStringParams, restHandlerOptions) {
        this.sesisonResource.isAuthenticated(sessionId, queryStringParams, restHandlerOptions);
    };
    return MdmAuthenticationResource;
}(MdmResource));
export { MdmAuthenticationResource };
//# sourceMappingURL=mdm-authentication.resource.js.map