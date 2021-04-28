import { RequestSettings, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing subscribed catalogues and federated models.
 */
export declare class MdmSubscribedCataloguesResource extends MdmResource {
    /**
     * `HTTP GET` - Gets a Subscribed Catalogue by ID.
     *
     * @param id The UUID of the Subscribed Catalogue to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     *
     * ```ts
     * {
     *     id: 'c7de1358-a4ce-4d72-abca-04013f7f4acc',
     *     url: 'http://test.mauro.com',
     *     apiKey: 'dd3aaf30-b0b0-4d6e-8cbd-a62bfaff672e',
     *     label: 'Another instance',
     *     description: 'Another instance',
     *     refreshPeriod: 7
     * }
     * ```
     */
    get(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all Subscribed Catalogues.
     *
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     *
     * ```ts
     * {
     *  count: 1,
     *  items: [
     *      {
     *          id: 'c7de1358-a4ce-4d72-abca-04013f7f4acc',
     *          url: 'http://test.mauro.com',
     *          apiKey: 'dd3aaf30-b0b0-4d6e-8cbd-a62bfaff672e',
     *          label: 'Another instance',
     *          description: 'Another instance',
     *          refreshPeriod: 7
     *      }
     *  ]
     * }
     * ```
     */
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new Subscribed Catalogue.
     *
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK`.
     */
    save(data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `PUT` request.
     *
     * On success, the response will be a `200 OK`.
     */
    update(id: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all available federated models from a Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK`.
     */
    listAvailableModels(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all federated models that this catalogue has subscribed to from a Subscribed Catalogue.
     *
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK`.
     */
    listSubscribedModels(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Federate a subscribed model to refresh.
     *
     * @param id The UUID of the Subscribed Model to federate.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK`.
     */
    federate(id: string, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a Subscribed Catalogue by ID.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to search in.
     * @param id The UUID of the subscription to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK`.
     */
    getSubscribedModel(catalogueId: string, id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new subscription to a model in a Subscribed Catalogue.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to save to.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK`.
     */
    saveSubscribedModel(catalogueId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing subscription to a model in a Subscribed Catalogue.
     *
     * @param catalogueId The UUID of the Subscribed Catalogue to remove from.
     * @param id The UUID of the subscribed model to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    removeSubscribedModel(catalogueId: string, id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
