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
export class MdmDataTypeResource extends MdmResource {
    /**
     * `HTTP POST` - Creates a new data type under a chosen data model.
     *
     * @param dataModelId The unique identifier of the data model to add to.
     * @param data The payload of the request containing all the details for the data type to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
     */
    save(dataModelId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
        return this.simplePost(url, data, options);
    }
    /**
     * `HTTP GET` - Request the list of data types contained within a particular data model.
     *
     * @param dataModelId The identifier of the data model to inspect.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataTypeIndexResponse} containing a list of {@link DataType} items.
     *
     * @see {@link MdmDataTypeResource.get}
     */
    list(dataModelId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP DELETE` - Removes an existing data type.
     *
     * @param dataModelId The unique identifier of the data model.
     * @param dataTypeId The unique indentifier of the data type to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(dataModelId, dataTypeId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP PUT` - Updates an existing data type under a chosen data model.
     *
     * @param dataModelId The unique identifier of the data model the data type exists under.
     * @param dataTypeId The unique identifier of the data type to update.
     * @param data The payload of the request containing all the details for the data type to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
     */
    update(dataModelId, dataTypeId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simplePut(url, data, options);
    }
    /**
     * `HTTP GET` - Request a data type from a data model.
     *
     * @param dataModelId Unique identifier of the data model the type is under.
     * @param dataTypeId Either a unique indentifier of the data type to get, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
     */
    get(dataModelId, dataTypeId, query, options) {
        let url = '';
        if (this.isGuid(dataModelId)) {
            url = url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        }
        else {
            url = url = `${this.apiEndpoint}/dataModels/path/${dataTypeId}`;
        }
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP POST` - Copies an existing data type from one data model to another target data model.
     *
     * @param dataModelId The unique identifier of the source data model.
     * @param otherDataModelId The unique indentifier of the target data model to copy to.
     * @param dataTypeId The unique identifier of the data type to copy.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DataTypeDetailResponse} containing the new copy of a {@link DataTypeDetail} object.
     */
    copyDataType(dataModelId, otherDataModelId, dataTypeId, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}`;
        return this.simplePost(url, {}, options);
    }
}
//# sourceMappingURL=mdm-data-type.resource.js.map