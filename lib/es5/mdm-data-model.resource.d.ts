import { MdmRequestOptions, QueryParameters, Uuid } from './mdm-common.model';
import { DataModelCreatePayload, DataModelCreateQueryParameters, DataModelFinalisePayload, DataModelIndexParameters, DataModelRemoveQueryParameters, DataModelUpdatePayload } from './mdm-data-model.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: dataModel
 |   GET    | /api/dataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/dataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/dataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   GET    | /api/dataModels/types                                                                                                                | Action: types
 |   POST   | /api/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/clean                                                                                     | Action: deleteAllUnusedDataClasses
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/clean                                                                                       | Action: deleteAllUnusedDataTypes
 |   GET    | /api/folders/${folderId}/dataModels                                                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |   PUT    | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |  DELETE  | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   PUT    | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   GET    | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   POST   | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   GET    | /api/dataModels/${dataModelId}/hierarchy                                                                                             | Action: hierarchy
 |   PUT    | /api/dataModels/${dataModelId}/newModelVersion                                                                                       | Action: newModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newDocumentationVersion                                                                               | Action: newDocumentationVersion
 |   PUT    | /api/dataModels/${dataModelId}/finalise                                                                                              | Action: finalise
 |   POST   | /api/folders/${folderId}/dataModels                                                                                                  | Action: save
 |   PUT    | /api/folders/${folderId}/dataModels/${dataModelId}                                                                                   | Action: changeFolder
 |   PUT    | /api/dataModels/${dataModelId}/folder/${folderId}                                                                                    | Action: changeFolder
 |   GET    | /api/dataModels/${dataModelId}/suggestLinks/${otherModelId}                                                                          | Action: suggestLinks
 |   GET    | /api/dataModels/${dataModelId}/diff/${otherModelId}                                                                                  | Action: diff
 |   GET    | /api/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                        | Action: exportModel
 |   GET    | /api/dataModels                                                                                                                      | Action: index
 |  DELETE  | /api/dataModels                                                                                                                      | Action: deleteAll
 |  DELETE  | /api/dataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/dataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/dataModels/${id}                                                                                                                | Action: show
 |   PUT    | /api/dataModels/${dataModelId}/newBranchModelVersion                                                                                 | Action: newBranchModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newForkModel                                                                                          | Action: newForkModel
 |   GET    | /api/dataModels/${dataModelId}/latestModelVersion                                                                                    | Action: latestModelVersion
 |   GET    | /api/dataModels/${dataModelId}/latestFinalisedModel                                                                                  | Action: latestFinalisedModel
 |   GET    | /api/dataModels/${dataModelId}/modelVersionTree                                                                                      | Action: modelVersionTree
 */
/**
 * MDM resource for managing data models.
 *
 * Create new data models by placing them under folders using the {@link MdmDataModelResource.addToFolder} endpoint.
 *
 * @see {@link MdmDataClassResource}
 * @see {@link MdmDataElementResource}
 * @see {@link MdmDataTypeResource}
 */
export declare class MdmDataModelResource extends MdmResource {
    /**
     * `HTTP GET` - Request the available default type providers for creating data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
     */
    defaultDataTypes(query?: QueryParameters, options?: MdmRequestOptions): any;
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    /**
     * `HTTP GET` - Request the available types for creating data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelTypesResponse} containing an array of strings.
     */
    types(query?: QueryParameters, options?: MdmRequestOptions): any;
    importModels(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: MdmRequestOptions): any;
    exportModels(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeAllUnusedDataClasses(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeAllUnusedDataTypes(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByAuthenticated(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByAuthenticated(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeReadByEveryone(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReadByEveryone(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    search(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    hierarchy(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    newModelVersion(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    newDocumentationVersion(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    /**
     * `HTTP PUT` - Finalise a draft version of a data model to make it final and read-only.
     *
     * @param dataModelId The unique identifier of the data model to finalise.
     * @param data The payload to pass to the request when finalising the data model.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    finalise(dataModelId: Uuid, data: DataModelFinalisePayload, options?: MdmRequestOptions): any;
    newBranchModelVersion(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    newForkModel(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    /**
     * `HTTP POST` - Creates a new data model under a chosen folder.
     *
     * @param folderId The unique identifier of the folder to create the data model under.
     * @param data The payload of the request containing all the details for the data model to create.
     * @param query Optional query parameters to control the creation of the data model, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    addToFolder(folderId: Uuid, data: DataModelCreatePayload, query?: DataModelCreateQueryParameters, options?: MdmRequestOptions): any;
    updateDataModelInFolder(folderId: string, dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    moveDataModelToFolder(dataModelId: string, folderId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    suggestLinks(dataModelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    diff(dataModelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    exportModel(dataModelId: string, exporterNamespace: any, exporterName: any, exporterVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    /**
     * `HTTP GET` - Request the list of data models.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelIndexResponse} containing a list of {@link DataModel} items.
     *
     * @see {@link MdmDataModelResource.get}
     */
    list(query?: DataModelIndexParameters, options?: MdmRequestOptions): any;
    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    /**
     * `HTTP DELETE` - Removes an existing data model, either temporarily or permanently.
     *
     * @param dataModelId The unique identifier of the data model to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link DataModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the data model to remain in Mauro but hidden; the
     * operation may also be reversed by an administrator using the {@link MdmDataModelResource.undoSoftDelete} endpoint.
     *
     * If {@link DataModelRemoveParameters.permanent} is set to `true`, then the data model will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmDataModelResource.undoSoftDelete}
     */
    remove(dataModelId: Uuid, query: DataModelRemoveQueryParameters, options?: MdmRequestOptions): any;
    /**
     * `HTTP PUT` - Updates an existing data model.
     *
     * @param dataModelId The unique identifier of the data model to update.
     * @param data The payload of the request containing all the details for the data model to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    update(dataModelId: Uuid, data: DataModelUpdatePayload, options?: MdmRequestOptions): any;
    /**
     * `HTTP GET` - Request a data model.
     *
     * @param dataModelId Either a unique identifier of the data model, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    get(dataModelId: Uuid, query?: QueryParameters, options?: MdmRequestOptions): any;
    latestModelVersion(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    latestFinalisedModel(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    modelVersionTree(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    /**
     * `HTTP PUT` - Restores a temporarily deleted data model.
     *
     * @param dataModelId The unique identifier of the data model to restore.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description **Note:** this endpoint may only be accessed by an administrator.
     *
     * This operation has no affect on _permanently_ deleted data models, only those temporarily marked as "deleted". Any
     * permanently deleted data models are unretrievable.
     *
     * @see {@link MdmDataModelResource.remove}
     */
    undoSoftDelete(dataModelId: Uuid, options?: MdmRequestOptions): any;
}
