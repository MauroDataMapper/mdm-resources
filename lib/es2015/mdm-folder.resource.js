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
export class MdmFolderResource extends MdmResource {
    search(folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/search`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    searchByGet(folderId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/search`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP POST` - Creates a new root folder.
     *
     * @param data The payload of the request containing all the details for the folder to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    save(data, options) {
        const url = `${this.apiEndpoint}/folders`;
        return this.simplePost(url, data, options);
    }
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
    saveChildrenOf(folderId, data, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders`;
        return this.simplePost(url, data, options);
    }
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
    list(query, options) {
        const url = `${this.apiEndpoint}/folders`;
        return this.simpleGet(url, query, options);
    }
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
    listChildrenOf(folderId, query, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders`;
        return this.simpleGet(url, query, options);
    }
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
    remove(folderId, query, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simpleDelete(url, query, options);
    }
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
    removeChildOf(folderId, childId, query, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simpleDelete(url, query, options);
    }
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
    update(folderId, data, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simplePut(url, data, options);
    }
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
    updateChildOf(folderId, childId, data, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simplePut(url, data, options);
    }
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
    get(folderId, query, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simpleGet(url, query, options);
    }
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
    getChildOf(folderId, childId, query, options) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simpleGet(url, query, options);
    }
    /**
     * @deprecated Use {@link MdmCodeSetResource.addToFolder} instead.
     */
    addCondeSets(folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCodeSetResource.listCodeSetsInFolder} instead.
     */
    codeSets(folderId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    alterCodeSetFolder(codeSetId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    addTerminologies(folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/terminologies`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    terminologies(folderId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/terminologies`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    alterTerminologyFolder(terminologyId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/terminologies/${terminologyId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
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
    removeReadByAuthenticated(id, query, options) {
        const url = `${this.apiEndpoint}/folders/${id}/readByAuthenticated`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP PUT` - Update a folder to be readable only to authenticated users.
     *
     * @param id The unique identifier of the folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    updateReadByAuthenticated(id, options) {
        const url = `${this.apiEndpoint}/folders/${id}/readByAuthenticated`;
        return this.simplePut(url, {}, options);
    }
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
    removeReadByEveryone(id, query, options) {
        const url = `${this.apiEndpoint}/folders/${id}/readByEveryone`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP PUT` - Update a folder to be readable to both authenticated and anonymous users.
     *
     * @param id The unique identifier of the folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link FolderDetailResponse} containing a {@link FolderDetail} object.
     */
    updateReadByEveryone(id, options) {
        const url = `${this.apiEndpoint}/folders/${id}/readByEveryone`;
        return this.simplePut(url, {}, options);
    }
}
//# sourceMappingURL=mdm-folder.resource.js.map