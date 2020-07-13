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
 * Controller: annotation
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show

 */
var MdmAnnotationResource = /** @class */ (function (_super) {
    __extends(MdmAnnotationResource, _super);
    function MdmAnnotationResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmAnnotationResource.prototype.save = function (catalogueItemDomainType, catalogueItemId, data, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simplePost(url, data, options);
    };
    MdmAnnotationResource.prototype.saveChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, data, options) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simplePost(url, data, options);
    };
    MdmAnnotationResource.prototype.list = function (catalogueItemDomainType, catalogueItemId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simpleGet(url, options);
    };
    MdmAnnotationResource.prototype.listChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simpleGet(url, options);
    };
    MdmAnnotationResource.prototype.remove = function (catalogueItemDomainType, catalogueItemId, annotationId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleDelete(url, options);
    };
    MdmAnnotationResource.prototype.removeChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleDelete(url, options);
    };
    MdmAnnotationResource.prototype.get = function (catalogueItemDomainType, catalogueItemId, annotationId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleGet(url, options);
    };
    MdmAnnotationResource.prototype.getChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleGet(url, options);
    };
    return MdmAnnotationResource;
}(MdmResource));
export { MdmAnnotationResource };
//# sourceMappingURL=mdm-annotation.resource.js.map