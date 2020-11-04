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
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/
var MdmVersioningResource = /** @class */ (function (_super) {
    __extends(MdmVersioningResource, _super);
    function MdmVersioningResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmVersioningResource.prototype.commonAncestor = function (modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/commonAncestor/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.latestVersion = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/latestVersion";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.mergeDiff = function (modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/mergeDiff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.currentMainBranch = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/currentMainBranch";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.availableBranches = function (modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + modelDomainType + "/" + modelId + "/availableBranches";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmVersioningResource.prototype.mergeInto = function (sourceModelId, targetModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + sourceModelId + "/mergeInto/" + targetModelId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmVersioningResource;
}(MdmResource));
export { MdmVersioningResource };
//# sourceMappingURL=mdm-versioning.resource.js.map