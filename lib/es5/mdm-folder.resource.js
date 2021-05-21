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
/**
 * MDM resource for managing folders in Mauro.
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
    /**
     * `HTTP POST` - Creates a new root folder.
     *
     * @param data The payload of the request containing all the details for the folder to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    MdmFolderResource.prototype.save = function (data, options) {
        var url = this.apiEndpoint + "/folders";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP POST` - Creates a new folder under a chosen folder.
     *
     * @param folderId The unique identifier of the folder to create the folder under.
     * @param data The payload of the request containing all the details for the folder to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    MdmFolderResource.prototype.saveChildrenOf = function (folderId, data, options) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP GET` - Request the list of folders.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link FolderIndexResponse} containing a list of {@link Folder} items.
     *
     * @see {@link MdmFolderResource.get}
     */
    MdmFolderResource.prototype.list = function (query, options) {
        var url = this.apiEndpoint + "/folders";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request the list of child folders under a parent.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link FolderIndexResponse} containing a list of {@link Folder} items.
     *
     * @see {@link MdmFolderResource.list}
     * @see {@link MdmFolderResource.get}
     */
    MdmFolderResource.prototype.listChildrenOf = function (folderId, query, options) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing folder, either temporarily or permanently.
     *
     * @param folderId The unique identifier of the folder to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the folder to remain in Mauro but hidden.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the folder will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmFolderResource.removeChildOf}
     */
    MdmFolderResource.prototype.remove = function (folderId, query, options) {
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing child folder of a parent folder, either temporarily or permanently.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param childId The unique identifier of the child folder to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the folder to remain in Mauro but hidden.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the folder will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmFolderResource.remove}
     */
    MdmFolderResource.prototype.removeChildOf = function (folderId, childId, query, options) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing folder.
     *
     * @param folderId The unique identifier of the folder to update.
     * @param data The payload of the request containing all the details for the folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     *
     * @see {@link MdmFolderResource.updateChildOf}
     */
    MdmFolderResource.prototype.update = function (folderId, data, options) {
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP PUT` - Updates an existing child folder of a parent.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param childId The unique indentifier of the child folder to update.
     * @param data The payload of the request containing all the details for the folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     *
     * @see {@link MdmFolderResource.update}
     */
    MdmFolderResource.prototype.updateChildOf = function (folderId, childId, data, options) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a folder.
     *
     * @param folderId A unique identifier of the folder to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     *
     * @see {@link MdmFolderResource.getChildOf}
     */
    MdmFolderResource.prototype.get = function (folderId, query, options) {
        var url = this.apiEndpoint + "/folders/" + folderId;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a child folder of a parent.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param childId The unique indentifier of the child folder to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     *
     * @see {@link MdmFolderResource.get}
     */
    MdmFolderResource.prototype.getChildOf = function (folderId, childId, query, options) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/folders/" + childId;
        return this.simpleGet(url, query, options);
    };
    /**
     * @deprecated Use {@link MdmCodeSetResource.addToFolder} instead.
     */
    MdmFolderResource.prototype.addCondeSets = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simplePost(url, data, restHandlerOptions);
    };
    /**
     * @deprecated Use {@link MdmCodeSetResource.listCodeSetsInFolder} instead.
     */
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
    /**
     * `HTTP DELETE` - Removes the user access check for a folder to only be readable by authenticated users.
     *
     * @param id The unique identifier of the folder to update.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    MdmFolderResource.prototype.removeReadByAuthenticated = function (id, query, options) {
        var url = this.apiEndpoint + "/folders/" + id + "/readByAuthenticated";
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Update a folder to be readable only to authenticated users.
     *
     * @param id The unique identifier of the folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    MdmFolderResource.prototype.updateReadByAuthenticated = function (id, options) {
        var url = this.apiEndpoint + "/folders/" + id + "/readByAuthenticated";
        return this.simplePut(url, {}, options);
    };
    /**
     * `HTTP DELETE` - Removes the user access check for a folder to be readable by either authenticated or anonymous users.
     *
     * @param id The unique identifier of the folder to update.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    MdmFolderResource.prototype.removeReadByEveryone = function (id, query, options) {
        var url = this.apiEndpoint + "/folders/" + id + "/readByEveryone";
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Update a folder to be readable to both authenticated and anonymous users.
     *
     * @param id The unique identifier of the folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    MdmFolderResource.prototype.updateReadByEveryone = function (id, options) {
        var url = this.apiEndpoint + "/folders/" + id + "/readByEveryone";
        return this.simplePut(url, {}, options);
    };
    return MdmFolderResource;
}(MdmResource));
export { MdmFolderResource };
//# sourceMappingURL=mdm-folder.resource.js.map