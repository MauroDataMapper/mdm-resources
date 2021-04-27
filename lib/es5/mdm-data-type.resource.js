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
 * Controller: dataType
 |   POST   | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}                                                           | Action: copyDataType
 */
/**
 * MDM resource for managing data types attached to data models.
 */
var MdmDataTypeResource = /** @class */ (function (_super) {
    __extends(MdmDataTypeResource, _super);
    function MdmDataTypeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP POST` - Creates a new data type under a chosen data model.
     * @param dataModelId The unique identifier of the data model to add to.
     * @param data The payload of the request containing all the details for the data type to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
     */
    MdmDataTypeResource.prototype.save = function (dataModelId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP GET` - Request the list of data types contained within a particular data model.
     * @param dataModelId The identifier of the data model to inspect.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataTypeIndexResponse} containing a list of {@link DataType} items.
     *
     * @see {@link MdmDataTypeResource.get}
     */
    MdmDataTypeResource.prototype.list = function (dataModelId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes";
        return this.simpleGet(url, query, options);
    };
    /**
       * `HTTP DELETE` - Removes an existing data type.
       * @param dataModelId The unique identifier of the data model.
       * @param dataTypeId The unique indentifier of the data type to remove.
       * @param query Optional query string parameters, if required.
       * @param options Optional REST handler options, if required.
       * @returns The result of the `DELETE` request.
       *
       * On success, the response will be a `204 No Content` and the response body will be empty.
       */
    MdmDataTypeResource.prototype.remove = function (dataModelId, dataTypeId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing data type under a chosen data model.
     * @param dataModelId The unique identifier of the data model the data type exists under.
     * @param dataTypeId The unique identifier of the data type to update.
     * @param data The payload of the request containing all the details for the data type to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
     */
    MdmDataTypeResource.prototype.update = function (dataModelId, dataTypeId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a data type from a data model.
     * @param dataModelId Unique identifier of the data model the type is under.
     * @param dataTypeId Either a unique indentifier of the data type to get, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
     */
    MdmDataTypeResource.prototype.get = function (dataModelId, dataTypeId, query, options) {
        var url = '';
        if (this.isGuid(dataModelId)) {
            url = url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId;
        }
        else {
            url = url = this.apiEndpoint + "/dataModels/path/" + dataTypeId;
        }
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Copies an existing data type from one data model to another target data model.
     * @param dataModelId The unique identifier of the source data model.
     * @param otherDataModelId The unique indentifier of the target data model to copy to.
     * @param dataTypeId The unique identifier of the data type to copy.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing the new copy of a {@link DataTypeDetail} object.
     */
    MdmDataTypeResource.prototype.copyDataType = function (dataModelId, otherDataModelId, dataTypeId, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + otherDataModelId + "/" + dataTypeId;
        return this.simplePost(url, {}, options);
    };
    return MdmDataTypeResource;
}(MdmResource));
export { MdmDataTypeResource };
//# sourceMappingURL=mdm-data-type.resource.js.map