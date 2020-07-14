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
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 */
var MdmMetadataResource = /** @class */ (function (_super) {
    __extends(MdmMetadataResource, _super);
    function MdmMetadataResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmMetadataResource.prototype.namespaces = function (metadataId, queryStringParams) {
        var url = this.apiEndpoint + "/metadata/namespaces" + (metadataId ? "/" + metadataId : '');
        return this.simpleGet(url, queryStringParams);
    };
    MdmMetadataResource.prototype.save = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simplePost(url, data);
    };
    MdmMetadataResource.prototype.list = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simpleGet(url, queryStringParams);
    };
    MdmMetadataResource.prototype.remove = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmMetadataResource.prototype.update = function (catalogueItemDomainType, catalogueItemId, metadataId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simplePut(url, data);
    };
    MdmMetadataResource.prototype.get = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmMetadataResource;
}(MdmResource));
export { MdmMetadataResource };
//# sourceMappingURL=mdm-metadata.resource.js.map