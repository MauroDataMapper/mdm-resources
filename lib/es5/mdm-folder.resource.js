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
 * Controller: folder
 |   POST   | /api/folders/${folderId}/folders                                                                      | Action: save
 |   GET    | /api/folders/${folderId}/folders                                                                      | Action: index
 |  DELETE  | /api/folders/${folderId}/readByAuthenticated                                                          | Action: readByAuthenticated
 |   PUT    | /api/folders/${folderId}/readByAuthenticated                                                          | Action: readByAuthenticated
 |  DELETE  | /api/folders/${folderId}/readByEveryone                                                               | Action: readByEveryone
 |   PUT    | /api/folders/${folderId}/readByEveryone                                                               | Action: readByEveryone
 |  DELETE  | /api/folders/${folderId}/folders/${id}                                                                | Action: delete
 |   PUT    | /api/folders/${folderId}/folders/${id}                                                                | Action: update
 |   GET    | /api/folders/${folderId}/folders/${id}                                                                | Action: show
 
 |   POST   | /api/folders                                                                                          | Action: save
 |   GET    | /api/folders                                                                                          | Action: index
 |  DELETE  | /api/folders/${id}                                                                                    | Action: delete
 |   PUT    | /api/folders/${id}                                                                                    | Action: update
 |   GET    | /api/folders/${id}                                                                                    | Action: show
 */
var MdmFolderResource = /** @class */ (function (_super) {
    __extends(MdmFolderResource, _super);
    function MdmFolderResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   get(id, action, options?) {
    //     if (!options) {
    //       options = {};
    //     }
    //     return this.getResource('folders', id, action, options);
    //   }
    MdmFolderResource.prototype.post = function (id, action, options) {
        return this.postResource('folders', id, action, options);
    };
    //   put(id, action, options) {
    //     return this.putResource('folders', id, action, options);
    //   }
    //   delete(id, action, queryString) {
    //     return this.deleteResource('folders', id, action, queryString, null);
    //   }
    MdmFolderResource.prototype.save = function (data, options) {
        var url = this.apiEndpoint + "/folders";
        return this.simplePost(url, data, options);
    };
    MdmFolderResource.prototype.saveChildrenOf = function (folderId, data, options) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders";
        return this.simplePost(url, data, options);
    };
    MdmFolderResource.prototype.list = function (options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders";
        return this.simpleGet(url, options);
    };
    MdmFolderResource.prototype.listChildrenOf = function (folderId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders";
        return this.simpleGet(url, options);
    };
    MdmFolderResource.prototype.remove = function (folderId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId + "?permanent=" + !!options.permanant;
        return this.simpleDelete(url, options);
    };
    MdmFolderResource.prototype.removeChildOf = function (folderId, childId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId + "?permanent=" + !!options.permanant;
        return this.simpleDelete(url, options);
    };
    MdmFolderResource.prototype.update = function (folderId, data, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simplePut(url, data, options);
    };
    MdmFolderResource.prototype.updateChildOf = function (folderId, childId, data, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simplePut(url, data, options);
    };
    MdmFolderResource.prototype.get = function (folderId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simpleGet(url, options);
    };
    MdmFolderResource.prototype.getChildOf = function (folderId, childId, options) {
        if (options === void 0) { options = {}; }
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simpleGet(url, options);
    };
    return MdmFolderResource;
}(MdmResource));
export { MdmFolderResource };
//# sourceMappingURL=mdm-folder.resource.js.map