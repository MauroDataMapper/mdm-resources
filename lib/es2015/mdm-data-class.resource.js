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
export class MdmDataClassResource extends MdmResource {
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
    addChildDataClass(dataModelId, dataClassId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses`;
        return this.simplePost(url, data, options);
    }
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
    listChildDataClasses(dataModelId, dataClassId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses`;
        return this.simpleGet(url, query, options);
    }
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
    search(dataModelId, dataClassId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/search`;
        return this.simplePost(url, query, options);
    }
    content(dataModelId, dataClassId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/content`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
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
    removeChildDataClass(dataModelId, dataClassId, childDataClassId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
        return this.simpleDelete(url, query, options);
    }
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
    updateChildDataClass(dataModelId, dataClassId, childDataClassId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
        return this.simplePut(url, data, options);
    }
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
    getChildDataClass(dataModelId, dataClassId, childDataClassId, query, options) {
        let url = '';
        if (this.isGuid(childDataClassId)) {
            url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
        }
        else {
            url = `${this.apiEndpoint}/dataModels/path/${childDataClassId}`;
        }
        return this.simpleGet(url, query, options);
    }
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
    copyChildDataClass(dataModelId, dataClassId, otherDataModelId, otherDataClassId, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
        return this.simplePost(url, {}, options);
    }
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
    save(dataModelId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses`;
        return this.simplePost(url, data, options);
    }
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
    list(dataModelId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses`;
        return this.simpleGet(url, query, options);
    }
    all(dataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/allDataClasses`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
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
    remove(dataModelId, dataClassId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
        return this.simpleDelete(url, query, options);
    }
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
    update(dataModelId, dataClassId, data, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
        return this.simplePut(url, data, options);
    }
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
    get(dataModelId, dataClassId, query, options) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
        return this.simpleGet(url, query, options);
    }
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
    copyDataClass(dataModelId, otherDataModelId, otherDataClassId, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
        return this.simplePost(url, {}, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-data-class.resource.js.map