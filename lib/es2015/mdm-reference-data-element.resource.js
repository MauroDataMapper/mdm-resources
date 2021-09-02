import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
/**
 * MDM resource for the management of Reference Data Elements.
 */
export class MdmReferenceDataElementResource extends MdmResource {
    /**
     * `HTTP GET` - Request the list of reference data elements for a reference data model.
     *
     * @param modelId The ID of the reference data model containing the data elements.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataElementIndexResponse} containing a list of {@link ReferenceDataElement} items.
     *
     * @see {@link MdmReferenceDataTypeResource.get}
     */
    list(modelId, query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataElements`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Request a reference data element from a reference data model.
     *
     * @param modelId Unique identifier of the reference data model the element is under.
     * @param elementId Unique indentifier of the data element to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataElementDetailResponse} containing a {@link ReferenceDataElementDetail} object.
     */
    get(modelId, elementId, query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataElements/${elementId}`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP POST` - Creates a new reference data element under a chosen reference data model.
     *
     * @param modelId The unique identifier of the reference data model to add to.
     * @param data The payload of the request containing all the details for the reference data element to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ReferenceDataElementDetailResponse} containing a {@link ReferenceDataElementDetail} object.
     */
    save(modelId, data, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataElements`;
        return this.simplePost(url, data, options);
    }
    /**
     * `HTTP PUT` - Updates an existing reference data element under a chosen reference data model.
     *
     * @param modelId The unique identifier of the reference data model the data element exists under.
     * @param elementId The unique identifier of the reference data element to update.
     * @param data The payload of the request containing all the details for the data element to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link ReferenceDataElementDetailResponse} containing a {@link ReferenceDataElementDetail} object.
     */
    update(modelId, elementId, data, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataElements/${elementId}`;
        return this.simplePut(url, data, options);
    }
    /**
     * `HTTP DELETE` - Removes an existing reference data element from a reference data model.
     *
     * @param modelId The unique identifier of the reference data model.
     * @param elementId The unique indentifier of the reference data element to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(modelId, elementId, query, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataElements/${elementId}`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP POST` - Copies an existing reference data element from one reference data model to another target reference data model.
     *
     * @param modelId The unique identifier of the source data model.
     * @param otherModelId The unique indentifier of the target data model to copy to.
     * @param elementId The unique identifier of the data element to copy.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ReferenceDataElementDetailResponse} containing the new copy of a {@link ReferenceDataElementDetail} object.
     */
    copyDataType(modelId, otherModelId, elementId, options) {
        const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataElements/${otherModelId}/${elementId}`;
        return this.simplePost(url, {}, options);
    }
}
//# sourceMappingURL=mdm-reference-data-element.resource.js.map