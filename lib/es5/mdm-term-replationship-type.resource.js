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
 * Controller: termRelationshipType
 |   POST   | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}
 */
var MdmTermRelationshipTypeResource = /** @class */ (function (_super) {
    __extends(MdmTermRelationshipTypeResource, _super);
    function MdmTermRelationshipTypeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmTermRelationshipTypeResource.prototype.save = function (terminologyId, data) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes";
        return this.simplePost(url, data);
    };
    MdmTermRelationshipTypeResource.prototype.list = function (terminologyId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes";
        return this.simpleGet(url, queryStringParams);
    };
    MdmTermRelationshipTypeResource.prototype.remove = function (terminologyId, termRelationshipTypeId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmTermRelationshipTypeResource.prototype.update = function (terminologyId, termRelationshipTypeId, data) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId;
        return this.simplePut(url, data);
    };
    MdmTermRelationshipTypeResource.prototype.get = function (terminologyId, termRelationshipTypeId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmTermRelationshipTypeResource;
}(MdmResource));
export { MdmTermRelationshipTypeResource };
//# sourceMappingURL=mdm-term-replationship-type.resource.js.map