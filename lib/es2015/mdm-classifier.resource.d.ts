import { ContainerUpdatePayload } from './mdm-container-types.model';
import { RequestSettings, QueryParameters, ModelDomainType, Uuid, FilterQueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
import { ModelRemoveQueryParameters } from './mdm-model-types.model';
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
export declare class MdmClassifierResource extends MdmResource {
    /**
     * `HTTP POST` - Creates a new root classifier.
     *
     * @param data The payload of the request containing all the details for the classifier to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ClassifierDetailResponse} containing a {@link ClassifierDetail} object.
     */
    save(data: ContainerUpdatePayload, options?: RequestSettings): any;
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
    saveChildrenOf(classifierId: Uuid, data: ContainerUpdatePayload, options?: RequestSettings): any;
    addToCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
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
    list(query?: FilterQueryParameters, options?: RequestSettings): any;
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
    listChildrenOf(classifierId: Uuid, query?: FilterQueryParameters, options?: RequestSettings): any;
    listCatalogueItemsFor(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listForCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
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
    remove(classifierId: Uuid, query: ModelRemoveQueryParameters, options?: RequestSettings): any;
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
    removeChildOf(classifierId: Uuid, childId: Uuid, query: ModelRemoveQueryParameters, options?: RequestSettings): any;
    removeFromCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
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
    update(classifierId: Uuid, data: ContainerUpdatePayload, options?: RequestSettings): any;
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
    updateChildOf(classifierId: Uuid, childId: Uuid, data: ContainerUpdatePayload, options?: RequestSettings): any;
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
    get(classifierId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
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
    getChildOf(classifierId: Uuid, childId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    getFromCatalogueItem(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeReadByAuthenticated(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByAuthenticated(classifierId: string, data?: any, restHandlerOptions?: RequestSettings): any;
    removeReadByEveryone(classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReadByEveryone(classifierId: string, data?: any, restHandlerOptions?: RequestSettings): any;
}
