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
export class MdmClassifierResource extends MdmResource {
    /**
     * `HTTP POST` - Creates a new root classifier.
     *
     * @param data The payload of the request containing all the details for the classifier to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     */
    save(data, options) {
        const url = `${this.apiEndpoint}/classifiers`;
        return this.simplePost(url, data, options);
    }
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
    saveChildrenOf(classifierId, data, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers`;
        return this.simplePost(url, data, options);
    }
    addToCatalogueItem(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simplePost(url, data, restHandlerOptions);
    }
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
    list(query, options) {
        const url = `${this.apiEndpoint}/classifiers`;
        return this.simpleGet(url, query, options);
    }
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
    listChildrenOf(classifierId, query, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers`;
        return this.simpleGet(url, query, options);
    }
    listCatalogueItemsFor(classifierId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/catalogueItems`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listForCatalogueItem(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
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
    remove(classifierId, query, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simpleDelete(url, query, options);
    }
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
    removeChildOf(classifierId, childId, query, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simpleDelete(url, query, options);
    }
    removeFromCatalogueItem(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
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
    update(classifierId, data, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simplePut(url, data, options);
    }
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
    updateChildOf(classifierId, childId, data, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simplePut(url, data, options);
    }
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
    get(classifierId, query, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}`;
        return this.simpleGet(url, query, options);
    }
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
    getChildOf(classifierId, childId, query, options) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/classifiers/${childId}`;
        return this.simpleGet(url, query, options);
    }
    getFromCatalogueItem(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeReadByAuthenticated(classifierId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(classifierId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(classifierId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(classifierId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/classifiers/${classifierId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-classifier.resource.js.map