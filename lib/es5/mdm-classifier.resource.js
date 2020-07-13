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
 * Controller: classifier
 |   POST   | /api/classifiers/${classifierId}/classifiers                                                          | Action: save
 |   GET    | /api/classifiers/${classifierId}/classifiers                                                          | Action: index
 |  DELETE  | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |   PUT    | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |  DELETE  | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   PUT    | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   GET    | /api/classifiers/${classifierId}/catalogueItems                                                       | Action: catalogueItems
 |  DELETE  | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: delete
 |   PUT    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: update
 |   GET    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: show
 |   POST   | /api/classifiers                                                                                      | Action: save
 |   GET    | /api/classifiers                                                                                      | Action: index
 |  DELETE  | /api/classifiers/${id}                                                                                | Action: delete
 |   PUT    | /api/classifiers/${id}                                                                                | Action: update
 |   GET    | /api/classifiers/${id}                                                                                | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 */
var MdmClassifierResource = /** @class */ (function (_super) {
    __extends(MdmClassifierResource, _super);
    function MdmClassifierResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // get(id, action, options) {
    //     return this.getResource('classifiers', id, action, options);
    // }
    // delete(id, action) {
    //     return this.deleteResource('classifiers', id, action);
    // }
    // put(id, action, options) {
    //     return this.putResource('classifiers', id, action, options);
    // }
    // post(id, action, options) {
    //     id = !id ? '' : id + '/';
    //     action = !action ? '' : action;
    //     return this.postResource('classifiers', id, action, options);
    //     // return this.resourcesService.post("classifiers" , id , action,  options.resource)
    // }
    MdmClassifierResource.prototype.save = function (data, options) {
        var url = this.apiEndpoint + "/classifiers";
        return this.simplePost(url, data, options);
    };
    MdmClassifierResource.prototype.saveChildrenOf = function (classifierId, data, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers";
        return this.simplePost(url, data, options);
    };
    MdmClassifierResource.prototype.addToCatalogueItem = function (catalogueItemDomainType, catalogueItemId, data, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simplePost(url, data, options);
    };
    MdmClassifierResource.prototype.list = function (options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers";
        return this.simpleGet(url, options);
    };
    MdmClassifierResource.prototype.listChildrenOf = function (classifierId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers";
        return this.simpleGet(url, options);
    };
    MdmClassifierResource.prototype.listCatalogueItemsFor = function (classifierId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/catalogueItems";
        return this.simpleGet(url, options);
    };
    MdmClassifierResource.prototype.listForCatalogueItem = function (catalogueItemDomainType, catalogueItemId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simpleGet(url, options);
    };
    MdmClassifierResource.prototype.remove = function (classifierId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId;
        return this.simpleDelete(url, options);
    };
    MdmClassifierResource.prototype.removeChildOf = function (classifierId, childId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers/" + childId;
        return this.simpleDelete(url, options);
    };
    MdmClassifierResource.prototype.removeFromCatalogueItem = function (catalogueItemDomainType, catalogueItemId, classifierId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleDelete(url, options);
    };
    MdmClassifierResource.prototype.update = function (classifierId, data, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId;
        return this.simplePut(url, data, options);
    };
    MdmClassifierResource.prototype.updateChildOf = function (classifierId, childId, data, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers/" + childId;
        return this.simplePut(url, data, options);
    };
    MdmClassifierResource.prototype.get = function (classifierId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId;
        return this.simpleGet(url, options);
    };
    MdmClassifierResource.prototype.getChildOf = function (classifierId, childId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers/" + childId;
        return this.simpleGet(url, options);
    };
    MdmClassifierResource.prototype.getFromCatalogueItem = function (catalogueItemDomainType, catalogueItemId, classifierId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleGet(url, options);
    };
    return MdmClassifierResource;
}(MdmResource));
export { MdmClassifierResource };
//# sourceMappingURL=mdm-classifier.resource.js.map