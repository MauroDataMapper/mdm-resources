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
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceData/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceData/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceData/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
var MdmReferenceDataElementResource = /** @class */ (function (_super) {
    __extends(MdmReferenceDataElementResource, _super);
    function MdmReferenceDataElementResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmReferenceDataElementResource.prototype.list = function (referenceDataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/referenceDataElements";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.get = function (referenceDataModelId, referenceDataElementId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/referenceDataElements/" + referenceDataElementId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.save = function (referenceDataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/referenceDataElements";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.update = function (referenceDataModelId, referenceDataElementId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/referenceDataElements/" + referenceDataElementId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmReferenceDataElementResource.prototype.remove = function (referenceDataModelId, referenceDataElementId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/referenceData/" + referenceDataModelId + "/referenceDataElements/" + referenceDataElementId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmReferenceDataElementResource;
}(MdmResource));
export { MdmReferenceDataElementResource };
//# sourceMappingURL=mdm-reference-data-element.resource.js.map