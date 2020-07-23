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
/**
 * Controller: session
 |   GET    | /api/session/keepAlive                                                                                | Action: keepAlive
 |   GET    | /api/admin/activeSessions                                                                             | Action: activeSessions
 |   GET    | /api/session/isAuthenticated/${sesssionId}?                                                           | Action: isAuthenticatedSession
 */
var MdmSessionResource = /** @class */ (function (_super) {
    __extends(MdmSessionResource, _super);
    function MdmSessionResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmSessionResource.prototype.keepAlive = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/session/keepAlive";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSessionResource.prototype.activeSessions = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/session/activeSessions";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSessionResource.prototype.isAuthenticated = function (sessionId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/session/isAuthenticated" + (sessionId ? "/" + sessionId : '');
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSessionResource.prototype.isApplicationAdministration = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/session/isApplicationAdministration";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmSessionResource;
}(MdmResource));
export { MdmSessionResource };
//# sourceMappingURL=mdm-session.resource.js.map