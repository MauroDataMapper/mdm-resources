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
 * Controller: dataClass
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: save
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: index
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/content                                                                    | Action: content
 * |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: delete
 * |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: update
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: show
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}                        | Action: copyDataClass
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: save
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: index
 * |   GET    | /api/dataModels/${dataModelId}/allDataClasses                                                                                        | Action: all
 * |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: delete
 * |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: update
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: show
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}                                                   | Action: copyDataClass
 *
 */
/**
 * MDM resource for managing data classes attached to data models.
 */
var MdmDataClassResource = /** @class */ (function (_super) {
    __extends(MdmDataClassResource, _super);
    function MdmDataClassResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP POST` - Creates a new data class under a chosen parent data class.
     *
     * @param dataModelId The unique identifier of the data model to add to.
     * @param dataClassId The unique identifier of the parent data class to add to.
     * @param data The payload of the request containing all the details for the data class to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.addChildDataClass = function (dataModelId, dataClassId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP GET` - Request the list of data classes contained under a parent data class.
     *
     * @param dataModelId The identifier of the data model to inspect.
     * @param dataClassId The identifier of the parent data class to inspect.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataClassIndexResponse} containing a list of {@link DataClass} items.
     *
     * @see {@link MdmDataClassResource.getChildDataClass}
     */
    MdmDataClassResource.prototype.listChildDataClasses = function (dataModelId, dataClassId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a full text search against the a parent data class within a data model.
     *
     * @param dataModelId The identifier of the data model to search in.
     * @param dataClassId The identifier of the parent data class to search in.
     * @param query Additional search parameters to filter the search results.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MdmTreeItemListResponse} containing a list of {@link MdmTreeItem} nodes.
     *
     * @see {@link TreeItemSearchParameters}
     */
    MdmDataClassResource.prototype.search = function (dataModelId, dataClassId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/search";
        return this.simplePost(url, query, options);
    };
    MdmDataClassResource.prototype.content = function (dataModelId, dataClassId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/content";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP DELETE` - Removes an existing data class from a parent data class.
     *
     * @param dataModelId The unique identifier of the data model.
     * @param dataClassId The unique indentifier of the parent data class.
     * @param childDataClassId The unique identifier of the child data class to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmDataClassResource.prototype.removeChildDataClass = function (dataModelId, dataClassId, childDataClassId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + childDataClassId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing data class under a chosen parent data class.
     *
     * @param dataModelId The unique identifier of the data model the data class exists under.
     * @param dataClassId The unique identifier of the parent data class.
     * @param childDataClassId The unique identifier of the child data class to update.
     * @param data The payload of the request containing all the details for the data class to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.updateChildDataClass = function (dataModelId, dataClassId, childDataClassId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + childDataClassId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a data class from a parent data class.
     *
     * @param dataModelId Unique identifier of the data model the type is under.
     * @param dataClassId The identifier of the parent data class to inspect.
     * @param childDataClassId Either a unique indentifier of the data class to get, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.getChildDataClass = function (dataModelId, dataClassId, childDataClassId, query, options) {
        var url = '';
        if (this.isGuid(childDataClassId)) {
            url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + childDataClassId;
        }
        else {
            url = this.apiEndpoint + "/dataModels/path/" + childDataClassId;
        }
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Copies an existing child data class from one data model to another target data model.
     *
     * @param dataModelId The unique identifier of the source data model.
     * @param dataClassId The unique identifier of the parent data class.
     * @param otherDataModelId The unique indentifier of the target data model to copy to.
     * @param otherDataClassId The unique identifier of the data class to copy.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing the new copy of a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.copyChildDataClass = function (dataModelId, dataClassId, otherDataModelId, otherDataClassId, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + otherDataModelId + "/" + otherDataClassId;
        return this.simplePost(url, {}, options);
    };
    /**
     * `HTTP POST` - Creates a new data class under a chosen data model.
     *
     * @param dataModelId The unique identifier of the data model to add to.
     * @param data The payload of the request containing all the details for the data class to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.save = function (dataModelId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP GET` - Request the list of data classes contained within a particular data model.
     *
     * @param dataModelId The identifier of the data model to inspect.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataClassIndexResponse} containing a list of {@link DataClass} items.
     *
     * @see {@link MdmDataClassResource.get}
     */
    MdmDataClassResource.prototype.list = function (dataModelId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses";
        return this.simpleGet(url, query, options);
    };
    MdmDataClassResource.prototype.all = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/allDataClasses";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP DELETE` - Removes an existing data class.
     *
     * @param dataModelId The unique identifier of the data model.
     * @param dataClasseId The unique indentifier of the data class to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmDataClassResource.prototype.remove = function (dataModelId, dataClassId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing data class under a chosen data model.
     *
     * @param dataModelId The unique identifier of the data model the data class exists under.
     * @param dataClassId The unique identifier of the data class to update.
     * @param data The payload of the request containing all the details for the data class to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.update = function (dataModelId, dataClassId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a data class from a data model.
     *
     * @param dataModelId Unique identifier of the data model the type is under.
     * @param dataClassId Either a unique indentifier of the data class to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.get = function (dataModelId, dataClassId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Copies an existing data class from one data model to another target data model.
     *
     * @param dataModelId The unique identifier of the source data model.
     * @param otherDataModelId The unique indentifier of the target data model to copy to.
     * @param otherDataClassId The unique identifier of the data class to copy.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataClassDetailResponse} containing the new copy of a {@link DataClassDetail} object.
     */
    MdmDataClassResource.prototype.copyDataClass = function (dataModelId, otherDataModelId, otherDataClassId, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + otherDataModelId + "/" + otherDataClassId;
        return this.simplePost(url, {}, restHandlerOptions);
    };
    return MdmDataClassResource;
}(MdmResource));
export { MdmDataClassResource };
//# sourceMappingURL=mdm-data-class.resource.js.map