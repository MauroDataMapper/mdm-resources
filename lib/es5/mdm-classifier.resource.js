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
 * Controller: classifier
 |   POST   | /api/classifiers/${classifierId}/classifiers                                                          | Action: save
 |   GET    | /api/classifiers/${classifierId}/classifiers                                                          | Action: index
 |  DELETE  | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |   PUT    | /api/classifiers/${classifierId}/readByAuthenticated                                                  | Action: readByAuthenticated
 |  DELETE  | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   PUT    | /api/classifiers/${classifierId}/readByEveryone                                                       | Action: readByEveryone
 |   GET    | /api/classifiers/${classifierId}/catalogueItems                                                       | Action: catalogueItems
 |  DELETE  | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: delete
 |   PUT    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: update
 |   GET    | /api/classifiers/${classifierId}/classifiers/${id}                                                    | Action: show
 |   POST   | /api/classifiers                                                                                      | Action: save
 |   GET    | /api/classifiers                                                                                      | Action: index
 |  DELETE  | /api/classifiers/${id}                                                                                | Action: delete
 |   PUT    | /api/classifiers/${id}                                                                                | Action: update
 |   GET    | /api/classifiers/${id}                                                                                | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 */
/**
 * MDM resource for managing classifications.
 */
var MdmClassifierResource = /** @class */ (function (_super) {
    __extends(MdmClassifierResource, _super);
    function MdmClassifierResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP POST` - Creates a new root classifier.
     *
     * @param data The payload of the request containing all the details for the classifier to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     */
    MdmClassifierResource.prototype.save = function (data, options) {
        var url = this.apiEndpoint + "/classifiers";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP POST` - Creates a new classifier under a chosen classifier.
     *
     * @param classifierId The unique identifier of the classifier to create the classifier under.
     * @param data The payload of the request containing all the details for the classifier to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     */
    MdmClassifierResource.prototype.saveChildrenOf = function (classifierId, data, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers";
        return this.simplePost(url, data, options);
    };
    MdmClassifierResource.prototype.addToCatalogueItem = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simplePost(url, data, restHandlerOptions);
    };
    /**
     * `HTTP GET` - Request the list of classifiers.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ClassifierIndexResponse} containing a list of {@link Classifier} items.
     *
     * @see {@link MdmClassifierResource.get}
     */
    MdmClassifierResource.prototype.list = function (query, options) {
        var url = this.apiEndpoint + "/classifiers";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request the list of child classifiers under a parent.
     *
     * @param classifierId The unique identifier of the parent classifier.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ClassifierIndexResponse} containing a list of {@link Classifier} items.
     *
     * @see {@link MdmClassifierResource.list}
     * @see {@link MdmClassifierResource.get}
     */
    MdmClassifierResource.prototype.listChildrenOf = function (classifierId, query, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers";
        return this.simpleGet(url, query, options);
    };
    MdmClassifierResource.prototype.listCatalogueItemsFor = function (classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/catalogueItems";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmClassifierResource.prototype.listForCatalogueItem = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP DELETE` - Removes an existing classifier, either temporarily or permanently.
     *
     * @param classifierId The unique identifier of the classifier to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the classifier to remain in Mauro but hidden.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the classifier will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmClassifierResource.removeChildOf}
     */
    MdmClassifierResource.prototype.remove = function (classifierId, query, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP DELETE` - Removes an existing child classifier of a parent classifier, either temporarily or permanently.
     *
     * @param classifierId The unique identifier of the parent classifier.
     * @param childId The unique identifier of the child classifier to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the classifier to remain in Mauro but hidden.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the classifier will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmClassifierResource.remove}
     */
    MdmClassifierResource.prototype.removeChildOf = function (classifierId, childId, query, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers/" + childId;
        return this.simpleDelete(url, query, options);
    };
    MdmClassifierResource.prototype.removeFromCatalogueItem = function (catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP PUT` - Updates an existing classifier.
     *
     * @param classifierId The unique identifier of the classifier to update.
     * @param data The payload of the request containing all the details for the classifier to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     *
     * @see {@link MdmClassifierResource.updateChildOf}
     */
    MdmClassifierResource.prototype.update = function (classifierId, data, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP PUT` - Updates an existing child classifier of a parent.
     *
     * @param classifierId The unique identifier of the parent classifier.
     * @param childId The unique indentifier of the child classifier to update.
     * @param data The payload of the request containing all the details for the classifier to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     *
     * @see {@link MdmClassifierResource.update}
     */
    MdmClassifierResource.prototype.updateChildOf = function (classifierId, childId, data, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers/" + childId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a classifier.
     *
     * @param classifierId A unique identifier of the classifier to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     *
     * @see {@link MdmClassifierResource.getChildOf}
     */
    MdmClassifierResource.prototype.get = function (classifierId, query, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId;
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a child classifier of a parent.
     *
     * @param classifierId The unique identifier of the parent classifier.
     * @param childId The unique indentifier of the child classifier to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     *
     * @see {@link MdmClassifierResource.get}
     */
    MdmClassifierResource.prototype.getChildOf = function (classifierId, childId, query, options) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/classifiers/" + childId;
        return this.simpleGet(url, query, options);
    };
    MdmClassifierResource.prototype.getFromCatalogueItem = function (catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmClassifierResource.prototype.removeReadByAuthenticated = function (classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmClassifierResource.prototype.updateReadByAuthenticated = function (classifierId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmClassifierResource.prototype.removeReadByEveryone = function (classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmClassifierResource.prototype.updateReadByEveryone = function (classifierId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/classifiers/" + classifierId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    return MdmClassifierResource;
}(MdmResource));
export { MdmClassifierResource };
//# sourceMappingURL=mdm-classifier.resource.js.map