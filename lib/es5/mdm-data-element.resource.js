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
 * Controller: dataElement
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}             | Action: suggestLinks
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: index
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}      | Action: copyDataElement
 */
/**
 * MDM resource for managing data elements attached to data classes.
 */
var MdmDataElementResource = /** @class */ (function (_super) {
    __extends(MdmDataElementResource, _super);
    function MdmDataElementResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmDataElementResource.prototype.suggestLinks = function (dataModelId, dataClassId, dataElementId, otherDataModelId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId + "/suggestLinks/" + otherDataModelId;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Creates a new data element under a chosen data class.
     * @param dataModelId The unique identifier of the data model to add to.
     * @param dataClassId The unique identifier of the data class to add to.
     * @param data The payload of the request containing all the details for the data element to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataElementDetailResponse} containing a {@link DataElementDetail} object.
     */
    MdmDataElementResource.prototype.save = function (dataModelId, dataClassId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP GET` - Request the list of data elements contained within a particular data class.
     * @param dataModelId The identifier of the data model to inspect.
     * @param dataClassId The identifier of the data class to inspect.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataElementIndexResponse} containing a list of {@link DataElement} items.
     *
     * @see {@link MdmDataElementResource.get}
     */
    MdmDataElementResource.prototype.list = function (dataModelId, dataClassId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements";
        return this.simpleGet(url, query, options);
    };
    MdmDataElementResource.prototype.listWithDataType = function (dataModelId, dataTypeId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/dataElements";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing data element.
     * @param dataModelId The unique identifier of the data model.
     * @param dataClassId The unique indentifier of the data class.
     * @param dataElementId The unique identifier of the data element to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmDataElementResource.prototype.remove = function (dataModelId, dataClassId, dataElementId, query, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing data element under a chosen data class.
     * @param dataModelId The unique identifier of the data model the data element exists under.
     * @param dataClassId The unique identifier of the data class the data element exists under.
     * @param dataElementId The unique identifier of the data element to update.
     * @param data The payload of the request containing all the details for the data element to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataElementDetailResponse} containing a {@link DataElementDetail} object.
     */
    MdmDataElementResource.prototype.update = function (dataModelId, dataClassId, dataElementId, data, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a data element from a data class.
     * @param dataModelId Unique identifier of the data model the data element is under.
     * @param dataClassId Unique indentifier of the data class the data element is under.
     * @param dataElementId Either a unique indentifier of the data element to get, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataElementDetailResponse} containing a {@link DataElementDetail} object.
     */
    MdmDataElementResource.prototype.get = function (dataModelId, dataClassId, dataElementId, query, options) {
        var url = '';
        if (this.isGuid(dataElementId)) {
            url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId;
        }
        else {
            url = this.apiEndpoint + "/dataModels/path/" + dataElementId;
        }
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Copies an existing data element from one data class to another target data class.
     * @param dataModelId The unique identifier of the source data model.
     * @param dataClassId The unique identifier of the source data class.
     * @param otherDataModelId The unique indentifier of the target data model to copy to.
     * @param otherDataClassId The unique identifier of the target data class to copy to.
     * @param dataElementId The unique identifier of the data element to copy.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataElementDetailResponse} containing the new copy of a {@link DataElementDetail} object.
     */
    MdmDataElementResource.prototype.copyDataElement = function (dataModelId, dataClassId, otherDataModelId, otherDataClassId, dataElementId, options) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + otherDataModelId + "/" + otherDataClassId + "/" + dataElementId;
        return this.simplePost(url, {}, options);
    };
    return MdmDataElementResource;
}(MdmResource));
export { MdmDataElementResource };
//# sourceMappingURL=mdm-data-element.resource.js.map