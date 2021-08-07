import { FinalisePayload, ModelRemoveQueryParameters } from './mdm-model-types.model';
import { RequestSettings, QueryParameters, Uuid, FilterQueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
import { CodeSetCreatePayload, CodeSetUpdatePayload } from './mdm-code-set.model';
/**
 * Controller: codeSet
 |   GET    | /api/codeSets/providers/importers                                                                          | Action: importerProviders                       |
 |   GET    | /api/codeSets/providers/exporters                                                                          | Action: exporterProviders                       |
 |   POST   | /api/codeSets/import/${importerNamespace}/${importerName}/${importerVersion}                               | Action: importModels                            |
 |   POST   | /api/codeSets/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModels                            |
 |  DELETE  | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |   PUT    | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |  DELETE  | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/newModelVersion                                                                 | Action: newModelVersion                         |
 |   PUT    | /api/codeSets/${codeSetId}/newDocumentationVersion                                                         | Action: newDocumentationVersion                 |
 |   PUT    | /api/codeSets/${codeSetId}/finalise                                                                        | Action: finalise                                |
 |   POST   | /api/folders/${folderId}/codeSets                                                                          | Action: save                                    |
 |   GET    | /api/folders/${folderId}/codeSets                                                                          | Action: index                                   |
 |  DELETE  | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/folder/${folderId}                                                              | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/diff/${otherModelId}                                                            | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/codeSets/${codeSetId}                                                             | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                  | Action: exportModel                             |
 |   GET    | /api/codeSets                                                                                              | Action: index                                   |
 |  DELETE  | /api/codeSets                                                                                              | Action: deleteAll                               |
 |  DELETE  | /api/codeSets/${id}                                                                                        | Action: delete                                  |
 |   PUT    | /api/codeSets/${id}                                                                                        | Action: update                                  |
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show                                    |
 |   PUT    | /api/codeSets/${codeSetId}/newBranchModelVersion                                                           | Action: newBranchModelVersion                   |
 |   PUT    | /api/codeSets/${codeSetId}/newForkModel                                                                    | Action: newForkModel                            |
 |   GET    | /api/codeSets/${codeSetId}/latestModelVersion                                                              | Action: latestModelVersion                      |
 |   GET    | /api/codeSets/${codeSetId}/latestFinalisedModel                                                            | Action: latestFinalisedModel                    |
 |   GET    | /api/codeSets/${codeSetId}/modelVersionTree                                                                | Action: modelVersionTree                        |
 */
/**
 * MDM resources for the management of code sets.
 */
export declare class MdmCodeSetResource extends MdmResource {
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    importModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestSettings): any;
    exportModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestSettings): any;
    newModelVersion(codeSetId: string, data: any, restHandlerOptions?: RequestSettings): any;
    newDocumentationVersion(codeSetId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP PUT` - Finalise a draft version of a code set to make it final and read-only.
     *
     * @param codeSetId The unique identifier of the code set to finalise.
     * @param data The payload to pass to the request when finalising the data model.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
     */
    finalise(codeSetId: Uuid, data: FinalisePayload, options?: RequestSettings): any;
    newBranchModelVersion(codeSetId: string, data: any, restHandlerOptions?: RequestSettings): any;
    newForkModel(codeSetId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new code set under a chosen folder.
     *
     * @param folderId The unique identifier of the folder to create the code set under.
     * @param data The payload of the request containing all the details for the code set to create.
     * @param query Optional query parameters to control the creation of the code set, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
     */
    addToFolder(folderId: Uuid, data: CodeSetCreatePayload, options?: RequestSettings): any;
    listCodeSetsInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeTerm(codeSetId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    alterTerm(codeSetId: string, termId: string, data: any, restHandlerOptions?: RequestSettings): any;
    moveCodeSetToFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Performs a comparison between two code sets and returns the differences between them.
     *
     * @param leftModelId The unique identifier of the code set on the left (source) side of the comparison.
     * @param rightModelId The unique identifier of the code set on the right (target) side of the comparison.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DiffCollectionResponse} containing a list of {@link DiffCollection}.
     */
    diff(leftModelId: Uuid, rightModelId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    exportModel(codeSetId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of code sets.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link CodeSetIndexResponse} containing a list of {@link CodeSet} items.
     *
     * @see {@link MdmCodeSetResource.get}
     */
    list(query?: FilterQueryParameters, options?: RequestSettings): any;
    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing code set, either temporarily or permanently.
     *
     * @param codeSetId The unique identifier of the code set to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the code set to remain in Mauro but hidden; the
     * operation may also be reversed by an administrator using the {@link MdmCodeSetResource.undoSoftDelete} endpoint.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the code set will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmCodeSetResource.undoSoftDelete}
     */
    remove(codeSetId: Uuid, query?: ModelRemoveQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing code set.
     *
     * @param codeSetId The unique identifier of the code set to update.
     * @param data The payload of the request containing all the details for the code set to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
     */
    update(codeSetId: Uuid, data: CodeSetUpdatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a code set.
     *
     * @param dataModelId Either a unique identifier of the code set, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
     */
    get(codeSetId: Uuid | string, query?: QueryParameters, options?: RequestSettings): any;
    terms(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeReadByAuthenticated(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByAuthenticated(codeSetId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    removeReadByEveryone(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByEveryone(codeSetId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    latestModelVersion(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    latestFinalisedModel(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a full model version tree for a Code Set.
     *
     * @param id The unique identifier of the code set.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ModelVersionTreeResponse} containing a list of {@link ModelVersionItem} objects.
     */
    modelVersionTree(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a simplified model version tree for a Code Set.
     *
     * @param id The unique identifier of the code set.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link BasicModelVersionTreeResponse} containing a list of {@link BasicModelVersionItem} objects.
     */
    simpleModelVersionTree(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Restores a temporarily deleted code set.
     *
     * @param codeSetId The unique identifier of the code set to restore.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description **Note:** this endpoint may only be accessed by an administrator.
     *
     * This operation has no affect on _permanently_ deleted code set, only those temporarily marked as "deleted". Any
     * permanently deleted code set are unretrievable.
     *
     * @see {@link MdmCodeSetResource.remove}
     */
    undoSoftDelete(codeSetId: Uuid, options?: RequestSettings): any;
}
