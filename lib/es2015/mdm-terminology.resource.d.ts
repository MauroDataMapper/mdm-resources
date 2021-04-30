import { MdmResource } from './mdm-resource';
import { RequestSettings, QueryParameters, Uuid, FilterQueryParameters } from './mdm-common.model';
import { FinalisePayload, ModelRemoveQueryParameters, ModelUpdatePayload } from './mdm-model-types.model';
/**
 * Controller: terminology
 |   GET    | /api/terminologies/providers/importers                                                                     | Action: importerProviders                       |
 |   GET    | /api/terminologies/providers/exporters                                                                     | Action: exporterProviders                       |
 |   POST   | /api/terminologies/import/${importerNamespace}/${importerName}/${importerVersion}                          | Action: importModels                            |
 |   POST   | /api/terminologies/export/${exporterNamespace}/${exporterName}/${exporterVersion}                          | Action: exportModels                            |
 |  DELETE  | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |   PUT    | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |  DELETE  | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/newModelVersion                                                        | Action: newModelVersion                         |
 |   PUT    | /api/terminologies/${terminologyId}/newDocumentationVersion                                                | Action: newDocumentationVersion                 |
 |   PUT    | /api/terminologies/${terminologyId}/finalise                                                               | Action: finalise                                |
 |   GET    | /api/terminologies/${terminologyId}/tree                                                                   | Action: tree                                    |
 |   POST   | /api/folders/${folderId}/terminologies                                                                     | Action: save                                    |
 |   GET    | /api/folders/${folderId}/terminologies                                                                     | Action: index                                   |
 |   PUT    | /api/terminologies/${terminologyId}/folder/${folderId}                                                     | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/diff/${otherModelId}                                                   | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/terminologies/${terminologyId}                                                    | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}         | Action: exportModel                             |
 |   GET    | /api/terminologies                                                                                         | Action: index                                   |
 |  DELETE  | /api/terminologies                                                                                         | Action: deleteAll                               |
 |  DELETE  | /api/terminologies/${id}                                                                                   | Action: delete                                  |
 |   PUT    | /api/terminologies/${id}                                                                                   | Action: update                                  |
 |   GET    | /api/terminologies/${id}                                                                                   | Action: show                                    |
 |   PUT    | /api/terminologies/${terminologyId}/newBranchModelVersion                                                  | Action: newBranchModelVersion                   |
 |   PUT    | /api/terminologies/${terminologyId}/newForkModel                                                           | Action: newForkModel                            |
 |   GET    | /api/terminologies/${terminologyId}/latestModelVersion                                                     | Action: latestModelVersion                      |
 |   GET    | /api/terminologies/${terminologyId}/latestFinalisedModel                                                   | Action: latestFinalisedModel                    |
 |   GET    | /api/terminologies/${terminologyId}/modelVersionTree                                                       | Action: modelVersionTree                        |
 */
/**
 * MDM resource for the management of terminologies.
 *
 * @see {@link MdmTermResource}
 */
export declare class MdmTerminologyResource extends MdmResource {
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    importModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestSettings): any;
    exportModels(namespace: any, name: any, version: any, data: any, restHandlerOptions?: RequestSettings): any;
    newModelVersion(terminologyId: string, data: any, restHandlerOptions?: RequestSettings): any;
    newDocumentationVersion(terminologyId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP PUT` - Finalise a draft version of a terminology to make it final and read-only.
     *
     * @param terminologyId The unique identifier of the terminology to finalise.
     * @param data The payload to pass to the request when finalising the terminology.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     */
    finalise(terminologyId: Uuid, data: FinalisePayload, options?: RequestSettings): any;
    newBranchModelVersion(terminologyId: string, data: any, restHandlerOptions?: RequestSettings): any;
    newForkModel(terminologyId: string, data: any, restHandlerOptions?: RequestSettings): any;
    tree(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    moveTerminologyToFolder(terminologyId: string, folderId: string, data: any, restHandlerOptions?: RequestSettings): any;
    diff(terminologyId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    exportModel(terminologyId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of terminologies.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link TerminologyIndexResponse} containing a list of {@link Terminology} items.
     *
     * @see {@link MdmTerminologyResource.get}
     */
    list(query?: FilterQueryParameters, options?: RequestSettings): any;
    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing terminology, either temporarily or permanently.
     *
     * @param dataModelId The unique identifier of the terminology to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the terminology to remain in Mauro but hidden; the
     * operation may also be reversed by an administrator using the {@link MdmTerminologyResource.undoSoftDelete} endpoint.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the terminology will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmDataModelResource.undoSoftDelete}
     */
    remove(terminologyId: Uuid, query: ModelRemoveQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing terminology.
     *
     * @param terminologyId The unique identifier of the terminology to update.
     * @param data The payload of the request containing all the details for the terminology to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     */
    update(terminologyId: Uuid, data: ModelUpdatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a terminology.
     *
     * @param dataModelId Either a unique identifier of the terminology, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     */
    get(terminologyId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    termRelationships(terminologyId: string, termRelationshipTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getTermRelationship(terminologyId: string, termRelationshipTypeId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeReadByAuthenticated(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByAuthenticated(terminologyId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    removeReadByEveryone(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByEveryone(terminologyId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    latestModelVersion(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    latestFinalisedModel(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    modelVersionTree(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP PUT` - Restores a temporarily deleted terminology.
     *
     * @param terminologyId The unique identifier of the terminology to restore.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description **Note:** this endpoint may only be accessed by an administrator.
     *
     * This operation has no affect on _permanently_ deleted terminologies, only those temporarily marked as "deleted". Any
     * permanently deleted terminologies are unretrievable.
     *
     * @see {@link MdmTerminologyResource.remove}
     */
    undoSoftDelete(terminologyId: Uuid, options?: RequestSettings): any;
}
