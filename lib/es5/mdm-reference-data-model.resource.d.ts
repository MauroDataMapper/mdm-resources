import { FinalisePayload, ModelRemoveQueryParameters, ModelUpdatePayload } from './mdm-model-types.model';
import { FilterQueryParameters, QueryParameters, RequestSettings, Uuid } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 * |   GET    | /api/referenceDataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 * |   GET    | /api/referenceDataModels/providers/importers                                                                                                  | Action: importerProviders
 * |   GET    | /api/referenceDataModels/providers/exporters                                                                                                  | Action: exporterProviders
 * |   POST   | /api/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 * |   POST   | /api/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 * |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 * |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 * |   POST   | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 * |   GET    | /api/referenceDataModels                                                                                                                      | Action: index
 * |  DELETE  | /api/referenceDataModels/${id}                                                                                                                | Action: delete
 * |   PUT    | /api/referenceDataModels/${id}                                                                                                                | Action: update
 * |   GET    | /api/referenceDataModels/${id}                                                                                                                | Action: show
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newModelVersion                                                                              | Action: newModelVersion
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newDocumentationVersion                                                                      | Action: newDocumentationVersion
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/finalise                                                                                     | Action: finalise
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newBranchModelVersion                                                                        | Action: newBranchModelVersion
 * |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newForkModel                                                                                 | Action: newForkModel
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestModelVersion                                                                           | Action: latestModelVersion
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestFinalisedModel                                                                         | Action: latestFinalisedModel
 * |   GET    | /api/referenceDataModels/${referenceDataModelId}/modelVersionTree                                                                             | Action: modelVersionTree
 *
 */
/**
 * MDM resource for the management of Reference Data Models.
 */
export declare class MdmReferenceDataModelResource extends MdmResource {
    /**
     * `HTTP GET` - Request the available default type providers for creating reference data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
     */
    defaultDataTypes(query?: QueryParameters, options?: RequestSettings): any;
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: RequestSettings): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: RequestSettings): any;
    removeReadByAuthenticated(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByAuthenticated(referenceDataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
    removeReadByEveryone(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByEveryone(referenceDataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
    search(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    exportModel(referenceDataModelId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of reference data models.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelIndexResponse} containing a list of {@link ReferenceDataModel} items.
     *
     * @see {@link MdmReferenceDataModelResource.get}
     */
    list(query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing reference data model, either temporarily or permanently.
     *
     * @param referenceDataModelId The unique identifier of the reference data model to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the reference data model to remain in Mauro but hidden; the
     * operation may also be reversed by an administrator using the {@link MdmReferenceDataModelResource.undoSoftDelete} endpoint.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the reference data model will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmReferenceDataModelResource.undoSoftDelete}
     */
    remove(referenceDataModelId: Uuid, query?: ModelRemoveQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing reference data model.
     *
     * @param referenceDataModelId The unique identifier of the reference data model to update.
     * @param data The payload of the request containing all the details for the data model to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelDetailResponse} containing a {@link ReferenceDataModelDetail} object.
     */
    update(referenceDataModelId: Uuid, data: ModelUpdatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a reference data model.
     *
     * @param referenceDataModelId A unique identifier of the reference data model to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelDetailResponse} containing a {@link ReferenceDataModelDetail} object.
     */
    get(referenceDataModelId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    moveReferenceDataModelToFolder(referenceDataModelId: string, folderId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP PUT` - Restores a temporarily deleted reference data model.
     *
     * @param referenceDataModelId The unique identifier of the reference data model to restore.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelDetailResponse} containing a {@link ReferenceDataModelDetail} object.
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description **Note:** this endpoint may only be accessed by an administrator.
     *
     * This operation has no affect on _permanently_ deleted referenced data models, only those temporarily marked as "deleted". Any
     * permanently deleted reference data models are unretrievable.
     *
     * @see {@link MdmReferencedDataModelResource.remove}
     */
    undoSoftDelete(referenceDataModelId: Uuid, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Finalise a draft version of a reference data model to make it final and read-only.
     *
     * @param referenceDataModelId The unique identifier of the reference data model to finalise.
     * @param data The payload to pass to the request when finalising the reference data model.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelDetailResponse} containing a {@link ReferenceDataModelDetail} object.
     */
    finalise(referenceDataModelId: Uuid, data: FinalisePayload, options?: RequestSettings): any;
    newBranchModelVersion(referenceDataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
    newForkModel(referenceDataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
    latestModelVersion(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    latestFinalisedModel(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    modelVersionTree(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
