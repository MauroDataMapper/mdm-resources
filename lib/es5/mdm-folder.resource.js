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
 |   GET    | /api/folders/${folderId}/search                                                                       | Action: search
 |   POST   | /api/folders/${folderId}/search                                                                       | Action: search
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
    MdmFolderResource.prototype.search = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/search";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.searchByGet = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/search";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.saveChildrenOf = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.listChildrenOf = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.remove = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.removeChildOf = function (folderId, childId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.update = function (folderId, data, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.updateChildOf = function (folderId, childId, data, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    /// <summary>
    /// Get folder by Id or a path
    /// </summary>
    /// <param name="folderId">Folder Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    MdmFolderResource.prototype.get = function (folderId, queryStringParams, restHandlerOptions) {
        var url = "";
        if (this.isGuid(folderId)) {
            url = this.apiEndpoint + "/folders/" + folderId;
        }
        else {
            url = this.apiEndpoint + "/folders/path/" + folderId;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.getChildOf = function (folderId, childId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.addCondeSets = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.codeSets = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.alterCodeSetFolder = function (codeSetId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets/" + codeSetId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.addTerminologies = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/terminologies";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.terminologies = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/terminologies";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.alterTerminologyFolder = function (terminologyId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/terminologies/" + terminologyId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.removeReadByAuthenticated = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.updateReadByAuthenticated = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmFolderResource.prototype.removeReadByEveryone = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmFolderResource.prototype.updateReadByEveryone = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmFolderResource;
}(MdmResource));
export { MdmFolderResource };
//# sourceMappingURL=mdm-folder.resource.js.map