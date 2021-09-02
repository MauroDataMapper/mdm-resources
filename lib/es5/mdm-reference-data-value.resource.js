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
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */
/**
 * MDM resource for the management of Reference Data Values.
 */
var MdmReferenceDataValueResource = /** @class */ (function (_super) {
    __extends(MdmReferenceDataValueResource, _super);
    function MdmReferenceDataValueResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Request the list of reference data values for a reference data model.
     *
     * @param modelId The ID of the reference data model containing the data types.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return one of two values depending on if `query.asRows` is provided:
     *
     * 1. `query.asRows = true` - will return a {@link ReferenceDataValueTableResponse} containing a {@link ReferenceDataValueTable}.
     * 2. `query.asRows = false` - will return a {@link ReferenceDataValueIndexResponse} containing a list of {@link ReferenceDataValue} items.
     */
    MdmReferenceDataValueResource.prototype.list = function (modelId, query, options) {
        var url = this.apiEndpoint + "/referenceDataModels/" + modelId + "/referenceDataValues";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a reference data value from a reference data model.
     *
     * @param modelId Unique identifier of the reference data model the value is under.
     * @param valueId Unique indentifier of the data value to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceDataValueDetailResponse} containing a {@link ReferenceDataValue} object.
     */
    MdmReferenceDataValueResource.prototype.get = function (modelId, valueId, query, options) {
        var url = this.apiEndpoint + "/referenceDataModels/" + modelId + "/referenceDataValues/" + valueId;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP POST` - Creates a new reference data value under a chosen reference data model.
     *
     * @param modelId The unique identifier of the reference data model to add to.
     * @param data The payload of the request containing all the details for the reference data value to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ReferenceDataValueDetailResponse} containing a {@link ReferenceDataValue} object.
     */
    MdmReferenceDataValueResource.prototype.save = function (modelId, data, options) {
        var url = this.apiEndpoint + "/referenceDataModels/" + modelId + "/referenceDataValues";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP PUT` - Updates an existing reference data value under a chosen reference data model.
     *
     * @param modelId The unique identifier of the reference data model the data value exists under.
     * @param valueId The unique identifier of the reference data value to update.
     * @param data The payload of the request containing all the details for the data value to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link ReferenceDataValueDetailResponse} containing a {@link ReferenceDataValue} object.
     */
    MdmReferenceDataValueResource.prototype.update = function (modelId, valueId, data, options) {
        var url = this.apiEndpoint + "/referenceDataModels/" + modelId + "/referenceDataValues/" + valueId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing reference data value from a reference data model.
     *
     * @param modelId The unique identifier of the reference data model.
     * @param valueId The unique indentifier of the reference data value to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    MdmReferenceDataValueResource.prototype.remove = function (modelId, valueId, query, options) {
        var url = this.apiEndpoint + "/referenceDataModels/" + modelId + "/referenceDataValues/" + valueId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP POST` - Searches a reference data model for a data value.
     *
     * @param modelId The unique identifier of the source data model.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return one of two values depending on if `query.asRows` is provided:
     *
     * 1. `query.asRows = true` - will return a {@link ReferenceDataValueTableResponse} containing a {@link ReferenceDataValueTable}.
     * 2. `query.asRows = false` - will return a {@link ReferenceDataValueIndexResponse} containing a list of {@link ReferenceDataValue} items.
     */
    MdmReferenceDataValueResource.prototype.search = function (modelId, query, options) {
        var queryString = this.generateQueryString(query);
        var url = this.apiEndpoint + "/referenceDataModels/" + modelId + "/referenceDataValues/search" + queryString;
        return this.simplePost(url, {}, options);
    };
    return MdmReferenceDataValueResource;
}(MdmResource));
export { MdmReferenceDataValueResource };
//# sourceMappingURL=mdm-reference-data-value.resource.js.map