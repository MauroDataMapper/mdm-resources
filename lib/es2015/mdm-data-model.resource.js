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
export class MdmDataModelResource extends MdmResource {
    /**
     * `HTTP GET` - Request the available default type providers for creating data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
     */
    defaultDataTypes(query, options) {
        const url = `${this.apiEndpoint}/dataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Request the available importer providers for data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ImporterIndexResponse} containing an array of {@link Importer} objects.
     */
    importers(query, options) {
        const url = `${this.apiEndpoint}/dataModels/providers/importers`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Request the available exporter providers for data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ExporterIndexResponse} containing an array of {@link Exporter} objects.
     */
    exporters(query, options) {
        const url = `${this.apiEndpoint}/dataModels/providers/exporters`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Request the available types for creating data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelTypesResponse} containing an array of strings.
     */
    types(query, options) {
        const url = `${this.apiEndpoint}/dataModels/types`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP POST` - Imports a data model.
     *
     * @param namespace The namespace of the importer provider to use.
     * @param name The unique name of the importer provider to use.
     * @param version The version of the importer provider to use.
     * @param data The payload of the request containing all the details for import. The contents of the payload will depend on the
     * parameters required for the import provider in use. The parameters required are requested via {@link MdmImporterResource.get}.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ImportResultIndexResponse} containing a list of {@link ImportResult} objects.
     *
     * @see {@link MdmDataModelResource.importers}
     * @see {@link ImporterDetail}
     * @see {@link MdmImporterResource}
     */
    importModels(namespace, name, version, data, options) {
        const url = `${this.apiEndpoint}/dataModels/import/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, options);
    }
    /**
     * `HTTP POST` - Exports one or more data models.
     *
     * @param namespace The namespace of the exporter provider to use.
     * @param name The unique name of the exporter provider to use.
     * @param version The version of the exporter provider to use.
     * @param modelIds The list of data model identifiers to export.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return the exported data models as the body of the response.
     *
     * @description The response body will depend on the type of exporter used, for example JSON, XML etc.
     * It is advised to take the entire content of the response body and save the entirety of it to file
     * to provide a downloadable source.
     *
     * @see {@link MdmDataModelResource.exporters}
     * @see {@link MdmDataModelResource.exportModel}
     */
    exportModels(namespace, name, version, modelIds, options) {
        const url = `${this.apiEndpoint}/dataModels/export/${namespace}/${name}/${version}`;
        return this.simplePost(url, modelIds, options);
    }
    removeAllUnusedDataClasses(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/clean`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    removeAllUnusedDataTypes(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/clean`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    listInFolder(folderId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP DELETE` - Removes the user access check for a data model to only be readable by authenticated users.
     *
     * @param id The unique identifier of the data model to update.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    removeReadByAuthenticated(id, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${id}/readByAuthenticated`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP PUT` - Update a data model to be readable only to authenticated users.
     *
     * @param id The unique identifier of the data model to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    updateReadByAuthenticated(id, options) {
        const url = `${this.apiEndpoint}/dataModels/${id}/readByAuthenticated`;
        return this.simplePut(url, {}, options);
    }
    /**
     * `HTTP DELETE` - Removes the user access check for a data model to be readable by either authenticated or anonymous users.
     *
     * @param id The unique identifier of the data model to update.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    removeReadByEveryone(id, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${id}/readByEveryone`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP PUT` - Update a data model to be readable to both authenticated and anonymous users.
     *
     * @param id The unique identifier of the data model to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    updateReadByEveryone(id, options) {
        const url = `${this.apiEndpoint}/dataModels/${id}/readByEveryone`;
        return this.simplePut(url, {}, options);
    }
    search(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }
    hierarchy(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/hierarchy`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    newModelVersion(dataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    newDocumentationVersion(dataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newDocumentationVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
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
    finalise(dataModelId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/finalise`;
        return this.simplePut(url, data, options);
    }
    /**
     * `HTTP PUT` - Branch a data model to create the next working copy of a data model. Can be applied to create
     * the next version of the data model, or to create a separate working branch to be merged back later.
     *
     * @param id The unique identifier of the data model to branch.
     * @param data The payload to pass to the request when branching or creating the next version of the data model.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     *
     * @see {@link MdmDataModelResource.newForkModel}
     *
     * @example To start a new version of a data model:
     *
     * ```ts
     * const dataModelId = '684c8134-d826-4c4a-a6d1-1412b7e8fc15';
     * dataModelResource.newBranchModelVersion(dataModelId, { });
     * ```
     *
     * @example To start a new branch of a data model:
     *
     * ```ts
     * const dataModelId = '684c8134-d826-4c4a-a6d1-1412b7e8fc15';
     * dataModelResource.newBranchModelVersion(dataModelId, { branchName: 'new-branch' });
     * ```
     */
    newBranchModelVersion(id, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${id}/newBranchModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /**
     * `HTTP PUT` - Fork a data model to create a new copy of a data model with a new 'main' branch.
     *
     * @param id The unique identifier of the data model to fork.
     * @param data The payload to pass to the request when forking the data model.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     *
     * @see {@link MdmDataModelResource.newBranchModelVersion}
     */
    newForkModel(id, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${id}/newForkModel`;
        return this.simplePut(url, data, options);
    }
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
    addToFolder(folderId, data, query, options) {
        const queryString = this.generateQueryString(query);
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels${queryString}`;
        return this.simplePost(url, data, options);
    }
    updateDataModelInFolder(folderId, dataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels/${dataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    moveDataModelToFolder(dataModelId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    suggestLinks(dataModelId, otherModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/suggestLinks/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP GET` - Performs a comparison between two data models and returns the differences between them.
     *
     * @param leftModelId The unique identifier of the data model on the left (source) side of the comparison.
     * @param rightModelId The unique identifier of the data model on the right (target) side of the comparison.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DiffCollectionResponse} containing a list of {@link DiffCollection}.
     */
    diff(leftModelId, rightModelId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${leftModelId}/diff/${rightModelId}`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Exports a data model.
     *
     * @param id The unique identifier of the data model to export.
     * @param namespace The namespace of the exporter provider to use.
     * @param name The unique name of the exporter provider to use.
     * @param version The version of the exporter provider to use.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return the exported data model as the body of the response.
     *
     * @description The response body will depend on the type of exporter used, for example JSON, XML etc.
     * It is advised to take the entire content of the response body and save the entirety of it to file
     * to provide a downloadable source.
     *
     * @see {@link MdmDataModelResource.exporters}
     * @see {@link MdmDataModelResource.exportModels}
     */
    exportModel(id, namespace, name, version, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${id}/export/${namespace}/${name}/${version}`;
        return this.simpleGet(url, query, options);
    }
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
    list(query, options) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleGet(url, query, options);
    }
    removeAll(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
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
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the data model to remain in Mauro but hidden; the
     * operation may also be reversed by an administrator using the {@link MdmDataModelResource.undoSoftDelete} endpoint.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the data model will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmDataModelResource.undoSoftDelete}
     */
    remove(dataModelId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simpleDelete(url, query, options);
    }
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
    update(dataModelId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simplePut(url, data, options);
    }
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
    get(dataModelId, query, options) {
        let url = '';
        if (this.isGuid(dataModelId)) {
            url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        }
        else {
            url = `${this.apiEndpoint}/dataModels/path/${dataModelId}`;
        }
        return this.simpleGet(url, query, options);
    }
    latestModelVersion(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestModelVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    latestFinalisedModel(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestFinalisedModel`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    modelVersionTree(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/modelVersionTree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
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
    undoSoftDelete(dataModelId, options) {
        const url = `${this.apiEndpoint}/admin/dataModels/${dataModelId}/undoSoftDelete`;
        return this.simplePut(url, {}, options);
    }
}
//# sourceMappingURL=mdm-data-model.resource.js.map