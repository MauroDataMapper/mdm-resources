import { BranchModelPayload, FinalisePayload, ForkModelPayload, ModelRemoveQueryParameters, VersionModelPayload } from './mdm-model-types.model';
import { FilterQueryParameters, Payload, QueryParameters, RequestSettings, Uuid } from './mdm-common.model';
import { ContainerCreatePayload, ContainerUpdatePayload } from './mdm-container-types.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for the management of Versioned Folders in Mauro.
 *
 * @see {@link MdmFolderResource}
 */
export declare class MdmVersionedFolderResource extends MdmResource {
    /**
     * `HTTP POST` - Creates a new root versioned folder.
     *
     * @param data The payload of the request containing all the details for the versioned folder to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     */
    save(data: ContainerCreatePayload, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new versioned folder under a chosen folder.
     *
     * @param folderId The unique identifier of the folder to create the versioned folder under.
     * @param data The payload of the request containing all the details for the versioned folder to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @description A {@link VersionedFolder} may be created as a child of a {@link Folder}, but
     * a {@link VersionedFolder} cannot be a child of another {@link VersionedFolder}.
     */
    saveToFolder(folderId: Uuid, data: ContainerCreatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of versioned folders.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link VersionedFolderIndexResponse} containing a list of {@link VersionedFolder} items.
     *
     * @see {@link MdmVersionedFolderResource.get}
     */
    list(query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of child versioned folders under a parent folder.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link VersionedFolderIndexResponse} containing a list of {@link VersionedFolder} items.
     *
     * @see {@link MdmVersionedFolderResource.list}
     * @see {@link MdmVersionedFolderResource.get}
     */
    listInFolder(folderId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing versioned folder, either temporarily or permanently.
     *
     * @param versionedFolderId The unique identifier of the versioned folder to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the versioned folder to remain in Mauro but hidden.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the versioned folder will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmVersionedFolderResource.removeFromFolder}
     */
    remove(versionedFolderId: Uuid, query: ModelRemoveQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing child versioned folder of a parent folder, either temporarily or permanently.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param versionedFolderId The unique identifier of the child versioned folder to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the versioned folder to remain in Mauro but hidden.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the versioned folder will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmVersionedFolderResource.remove}
     */
    removeFromFolder(folderId: Uuid, versionedFolderId: Uuid, query: ModelRemoveQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing versioned folder.
     *
     * @param versionedFolderId The unique identifier of the versioned folder to update.
     * @param data The payload of the request containing all the details for the versioned folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.updateInFolder}
     */
    update(versionedFolderId: Uuid, data: ContainerUpdatePayload, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing child versioned folder within a parent folder.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param versionedFolderId The unique indentifier of the child versioned folder to update.
     * @param data The payload of the request containing all the details for the versioned folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.update}
     */
    updateInFolder(folderId: Uuid, versionedFolderId: Uuid, data: ContainerUpdatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a versioned folder.
     *
     * @param versionedFolderId A unique identifier of the versioned folder to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.getFromFolder}
     */
    get(versionedFolderId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a child versioned folder within a parent folder.
     *
     * @param folderId The unique identifier of the parent folder.
     * @param versionedFolderId The unique indentifier of the child versioned folder to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.get}
     */
    getFromFolder(folderId: Uuid, versionedFolderId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes the user access check for a versioned folder to only be readable by authenticated users.
     *
     * @param id The unique identifier of the versioned folder to update.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     */
    removeReadByAuthenticated(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Update a versioned folder to be readable only to authenticated users.
     *
     * @param id The unique identifier of the versioned folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     */
    updateReadByAuthenticated(id: Uuid, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes the user access check for a versioned folder to be readable by either authenticated or anonymous users.
     *
     * @param id The unique identifier of the versioned folder to update.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     */
    removeReadByEveryone(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Update a versioned folder to be readable to both authenticated and anonymous users.
     *
     * @param id The unique identifier of the versioned folder to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     */
    updateReadByEveryone(id: Uuid, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Searches this versioned folder for content.
     *
     * @param id The unique identifier of the versioned folder to search.
     * @param data The payload including the search parameters.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return an array of search result objects.
     */
    search(id: Uuid, data: Payload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Searches this versioned folder for content.
     *
     * @param id The unique identifier of the versioned folder to search.
     * @param data The payload including the search parameters.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return an array of search result objects.
     */
    searchByGet(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Finalise a draft version of a versioned folder to make it final and read-only.
     *
     * @param id The unique identifier of the versioned folder to finalise.
     * @param data The payload to pass to the request when finalising the versioned folder.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @description Finalising a versioned folder will automatically finalise all catalogue items within it.
     */
    finalise(id: Uuid, data: FinalisePayload, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Branch a versioned folder to create the next working copy of a versioned folder. Can be applied to create
     * the next version of the versioned folder, or to create a separate working branch to be merged back later.
     *
     * @param id The unique identifier of the versioned folder to branch.
     * @param data The payload to pass to the request when branching or creating the next version of the versioned folder.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.newDocumentationVersion}
     * @see {@link MdmVersionedFolderResource.newForkModel}
     *
     * @example To start a new version of a versioned folder:
     *
     * ```ts
     * const versionedFolderId = '684c8134-d826-4c4a-a6d1-1412b7e8fc15';
     * versionedFolderResource.newBranchModelVersion(versionedFolderId, { });
     * ```
     *
     * @example To start a new branch of a versioned folder:
     *
     * ```ts
     * const versionedFolderId = '684c8134-d826-4c4a-a6d1-1412b7e8fc15';
     * versionedFolderResource.newBranchModelVersion(versionedFolderId, { branchName: 'new-branch' });
     * ```
     */
    newBranchModelVersion(id: Uuid, data: VersionModelPayload | BranchModelPayload, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP PUT` - Create a new documentation version of a versioned folder.
     *
     * @param id The unique identifier of the versioned folder to version.
     * @param data The payload to pass to the request when creating the next version of the versioned folder.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.newBranchModelVersion}
     * @see {@link MdmVersionedFolderResource.newForkModel}
     */
    newDocumentationVersion(id: Uuid, data: VersionModelPayload, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Fork a versioned folder to create a new copy of a versioned folder with a new 'main' branch.
     *
     * @param id The unique identifier of the versioned folder to fork.
     * @param data The payload to pass to the request when forking the versioned folder.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link VersionedFolderDetailResponse} containing a {@link VersionedFolderDetail} object.
     *
     * @see {@link MdmVersionedFolderResource.newBranchModelVersion}
     * @see {@link MdmVersionedFolderResource.newDocumentationVersion}
     */
    newForkModel(id: Uuid, data: ForkModelPayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a full model version tree for a Versioned Folder.
     *
     * @param id The unique identifier of the versioned folder.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ModelVersionTreeResponse} containing a list of {@link ModelVersionItem} objects.
     */
    modelVersionTree(id: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a simplified model version tree for a Versioned Folder.
     *
     * @param id The unique identifier of the versioned folder.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link BasicModelVersionTreeResponse} containing a list of {@link BasicModelVersionItem} objects.
     */
    simpleModelVersionTree(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
}
