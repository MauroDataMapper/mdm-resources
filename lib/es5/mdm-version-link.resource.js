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
 * Controller: versionLink
 |   POST   | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: save
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: index
 |  DELETE  | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: delete
 |   PUT    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: update
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: show
 */
var MdmVersionLinkResource = /** @class */ (function (_super) {
    __extends(MdmVersionLinkResource, _super);
    function MdmVersionLinkResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmVersionLinkResource.prototype.save = function (modelDomainType, modelId, data) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks";
        return this.simplePost(url, data);
    };
    MdmVersionLinkResource.prototype.list = function (modelDomainType, modelId, queryStringParams) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks";
        return this.simpleGet(url, queryStringParams);
    };
    MdmVersionLinkResource.prototype.remove = function (modelDomainType, modelId, versionLinkId, queryStringParams) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks/" + versionLinkId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmVersionLinkResource.prototype.update = function (modelDomainType, modelId, versionLinkId, data) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks/" + versionLinkId;
        return this.simplePut(url, data);
    };
    MdmVersionLinkResource.prototype.get = function (modelDomainType, modelId, versionLinkId, queryStringParams) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/versionLinks/" + versionLinkId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmVersionLinkResource;
}(MdmResource));
export { MdmVersionLinkResource };
//# sourceMappingURL=mdm-version-link.resource.js.map