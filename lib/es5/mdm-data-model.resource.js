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
var MdmDataModelResource = /** @class */ (function (_super) {
    __extends(MdmDataModelResource, _super);
    function MdmDataModelResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Request the available default type providers for creating data models.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
     */
    MdmDataModelResource.prototype.defaultDataTypes = function (query, options) {
        var url = this.apiEndpoint + "/dataModels/providers/defaultDataTypeProviders";
        return this.simpleGet(url, query, options);
    };
    MdmDataModelResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP GET` - Request the available types for creating data models.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelTypesResponse} containing an array of strings.
     */
    MdmDataModelResource.prototype.types = function (query, options) {
        var url = this.apiEndpoint + "/dataModels/types";
        return this.simpleGet(url, query, options);
    };
    MdmDataModelResource.prototype.importModels = function (importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.exportModels = function (exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeAllUnusedDataClasses = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/clean";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeAllUnusedDataTypes = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/clean";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.listInFolder = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeReadByAuthenticated = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.updateReadByAuthenticated = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.removeReadByEveryone = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.updateReadByEveryone = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.search = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/search";
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.hierarchy = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/hierarchy";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newModelVersion = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newDocumentationVersion = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newDocumentationVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    /**
     * `HTTP PUT` - Finalise a draft version of a data model to make it final and read-only.
     * @param dataModelId The unique identifier of the data model to finalise.
     * @param data The payload to pass to the request when finalising the data model.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    MdmDataModelResource.prototype.finalise = function (dataModelId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/finalise";
        return this.simplePut(url, data, options);
    };
    MdmDataModelResource.prototype.newBranchModelVersion = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newBranchModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.newForkModel = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newForkModel";
        return this.simplePut(url, data, restHandlerOptions);
    };
    /**
     * `HTTP POST` - Creates a new data model under a chosen folder.
     * @param folderId The unique identifier of the folder to create the data model under.
     * @param data The payload of the request containing all the details for the data model to create.
     * @param query Optional query parameters to control the creation of the data model, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    MdmDataModelResource.prototype.addToFolder = function (folderId, data, query, options) {
        var queryString = this.generateQueryString(query);
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels" + queryString;
        return this.simplePost(url, data, options);
    };
    MdmDataModelResource.prototype.updateDataModelInFolder = function (folderId, dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels/" + dataModelId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.moveDataModelToFolder = function (dataModelId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/folder/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmDataModelResource.prototype.suggestLinks = function (dataModelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/suggestLinks/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.diff = function (dataModelId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.exportModel = function (dataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP GET` - Request the list of data models.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelIndexResponse} containing a list of {@link DataModel} items.
     *
     * @see {@link MdmDataModelResource.get}
     */
    MdmDataModelResource.prototype.list = function (query, options) {
        var url = this.apiEndpoint + "/dataModels";
        return this.simpleGet(url, query, options);
    };
    MdmDataModelResource.prototype.removeAll = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP DELETE` - Removes an existing data model, either temporarily or permanently.
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
    MdmDataModelResource.prototype.remove = function (dataModelId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing data model.
     * @param dataModelId The unique identifier of the data model to update.
     * @param data The payload of the request containing all the details for the data model to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    MdmDataModelResource.prototype.update = function (dataModelId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a data model.
     * @param dataModelId Either a unique identifier of the data model, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
     */
    MdmDataModelResource.prototype.get = function (dataModelId, query, options) {
        var url = '';
        if (this.isGuid(dataModelId)) {
            url = this.apiEndpoint + "/dataModels/" + dataModelId;
        }
        else {
            url = this.apiEndpoint + "/dataModels/path/" + dataModelId;
        }
        return this.simpleGet(url, query, options);
    };
    MdmDataModelResource.prototype.latestModelVersion = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/latestModelVersion";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.latestFinalisedModel = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/latestFinalisedModel";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataModelResource.prototype.modelVersionTree = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/modelVersionTree";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP PUT` - Restores a temporarily deleted data model.
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
    MdmDataModelResource.prototype.undoSoftDelete = function (dataModelId, options) {
        var url = this.apiEndpoint + "/admin/dataModels/" + dataModelId + "/undoSoftDelete";
        return this.simplePut(url, {}, options);
    };
    return MdmDataModelResource;
}(MdmResource));
export { MdmDataModelResource };
//# sourceMappingURL=mdm-data-model.resource.js.map