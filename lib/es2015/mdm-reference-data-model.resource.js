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
export class MdmReferenceDataModelResource extends MdmResource {
    /**
     * `HTTP GET` - Request the available default type providers for creating reference data models.
     *
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
     */
    defaultDataTypes(query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, query, options);
    }
    importers(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exporters(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importModels(importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    exportModels(exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    removeReadByAuthenticated(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    search(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }
    exportModel(referenceDataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
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
    list(query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels`;
        return this.simpleGet(url, query, options);
    }
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
    remove(referenceDataModelId, query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simpleDelete(url, query, options);
    }
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
    update(referenceDataModelId, data, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simplePut(url, data, options);
    }
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
    get(referenceDataModelId, query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simpleGet(url, query, options);
    }
    moveReferenceDataModelToFolder(referenceDataModelId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
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
    undoSoftDelete(referenceDataModelId, options) {
        const url = `${this.apiEndpoint}/admin/referenceDataModels/${referenceDataModelId}/undoSoftDelete`;
        return this.simplePut(url, {}, options);
    }
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
    finalise(referenceDataModelId, data, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/finalise`;
        return this.simplePut(url, data, options);
    }
    newBranchModelVersion(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/newBranchModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    newForkModel(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/newForkModel`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    latestModelVersion(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/latestModelVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    latestFinalisedModel(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/latestFinalisedModel`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    modelVersionTree(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/modelVersionTree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * `HTTP GET` - Request a simplified model version tree for a Reference Data Model.
     *
     * @param referenceDataModelId The unique identifier of the reference data model.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link BasicModelVersionTreeResponse} containing a list of {@link BasicModelVersionItem} objects.
     */
    simpleModelVersionTree(referenceDataModelId, query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/simpleModelVersionTree`;
        return this.simpleGet(url, query, options);
    }
}
//# sourceMappingURL=mdm-reference-data-model.resource.js.map