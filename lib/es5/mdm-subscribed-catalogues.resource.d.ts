import { SubscribedCatalogue, SubscribedDataModel } from './mdm-subscribed-catalogues.model';
import { RequestSettings, QueryParameters, Uuid } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing subscribed catalogues and federated models.
 */
export declare class MdmSubscribedCataloguesResource extends MdmResource {
    /**
     * `HTTP GET` - Gets a Subscribed Catalogue by ID.
     *
     * @param id The unique identifier of the Subscribed Catalogue to get.
     * @param query Optional query string parameters for the GET request.
     * @param options Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link SubscribedCatalogueResponse} containing a {@link SubscribedCatalogue}.
     */
    get(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all Subscribed Catalogues.
     *
     * @param query Optional query string parameters for the GET request.
     * @param options Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link SubscribedCatalogueIndexResponse} containing a list of {@link SubscribedCatalogue} items.
     */
    list(query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new Subscribed Catalogue.
     *
     * @param data The data to use for creation.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link SubscribedCatalogueResponse} containing a {@link SubscribedCatalogue}.
     */
    save(data: SubscribedCatalogue, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing Subscribed Catalogue.
     *
     * @param id The unique identifier of the Subscribed Catalogue to update.
     * @param data The data to use for the update.
     * @param options Optional REST handler parameters.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link SubscribedCatalogueResponse} containing a {@link SubscribedCatalogue}.
     */
    update(id: Uuid, data: SubscribedCatalogue, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing Subscribed Catalogue.
     *
     * @param id The unique identifier of the Subscribed Catalogue to remove.
     * @param query Optional query string parameters for the GET request.
     * @param options Optional REST handler parameters.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all available federated models from a Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param query Optional query string parameters for the GET request.
     * @param options Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link AvailableDataModelIndexResponse} containing a list of {@link AvailableDataModel} items.
     */
    listAvailableModels(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all federated models that this catalogue has subscribed to from a Subscribed Catalogue.
     *
     * @param id The unique identifier of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link SubscribedDataModelIndexResponse} containing a list of {@link SubscribedDataModel} items.
     */
    listSubscribedModels(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Federate a subscribed model to refresh.
     *
     * @param id The unique identifier of the Subscribed Model to federate.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link SubscribedDataModelResponse} containing a {@link SubscribedDataModel}.
     */
    federate(id: string, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a Subscribed Catalogue by ID.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to search in.
     * @param id The UUID of the subscription to get.
     * @param query Optional query string parameters for the GET request.
     * @param options Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link SubscribedDataModelResponse} containing a {@link SubscribedDataModel}.
     */
    getSubscribedModel(catalogueId: Uuid, id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new subscription to a model in a Subscribed Catalogue.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to save to.
     * @param data The data to use for creation.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link SubscribedDataModelResponse} containing a {@link SubscribedDataModel}.
     */
    saveSubscribedModel(catalogueId: Uuid, data: SubscribedDataModel, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing subscription to a model in a Subscribed Catalogue.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to remove from.
     * @param id The UUID of the subscribed model to remove.
     * @param query Optional query string parameters for the GET request.
     * @param options Optional REST handler parameters.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    removeSubscribedModel(catalogueId: Uuid, id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
}
