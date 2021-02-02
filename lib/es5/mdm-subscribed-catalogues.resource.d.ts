import { MdmResource } from "./mdm-resource";
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from "./mdm-rest-handler";
/**
 * Controller: subscribedCatalogues
 |   GET    | /api/subscribedCatalogues/${id}                                                                                               | Action: show
 |   GET    | /api/subscribedCatalogues                                                                                                     | Action: index
 |   POST   | /api/subscribedCatalogues                                                                                                     | Action: save
 |   PUT    | /api/subscribedCatalogues/${id}                                                                                               | Action: update
 |  DELETE  | /api/subscribedCatalogues/${id}                                                                                               | Action: delete
 |   GET    | /api/subscribedCatalogues/${id}/availableModels                                                                               | Action: index
 |   GET    | /api/subscribedCatalogues/${id}/subscribedModels                                                                              | Action: index
 |   GET    | /api/subscribedCatalogues/${catalogId}/subscribedModels/${id}                                                                 | Action: show
 |   POST   | /api/subscribedCatalogues/${catalogId}/subscribedModels                                                                       | Action: save
 |  DELETE  | /api/subscribedCatalogues/${catalogId}/subscribedModels/${id}                                                                 | Action: delete
 */
export declare class MdmSubscribedCataloguesResource extends MdmResource {
    /**
     * Gets a Subscribed Catalogue by ID.
     * @param id The UUID of the Subscribed Catalogue to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    get(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Gets a list of all Subscribed Catalogues.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Creates a new Subscribed Catalogue.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Updates an existing Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    update(id: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Removes an existing Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    remove(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Gets a list of all available federated models from a Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    listAvailableModels(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Gets a list of all federated models that this catalogue has subscribed to from a Subscribed Catalogue.
     * @param id The UUID of the Subscribed Catalogue to search in.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    listSubscribedModels(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Gets a Subscribed Catalogue by ID.
     * @param catalogueId The UUID of the Subscribed Catalogue to search in.
     * @param id The UUID of the subscription to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    getSubscribedModel(catalogueId: string, id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Creates a new subscription to a model in a Subscribed Catalogue.
     * @param catalogueId The UUID of the Subscribed Catalogue to save to.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    saveSubscribedModel(catalogueId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Removes an existing subscription to a model in a Subscribed Catalogue.
     * @param catalogueId The UUID of the Subscribed Catalogue to remove from.
     * @param id The UUID of the subscribed model to remove.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    removeSubscribedModel(catalogueId: string, id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
