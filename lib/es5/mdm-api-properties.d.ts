import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
export declare class MdmApiPropertyResources extends MdmResource {
    /**
     * Gets a list of all API properties.
     *
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Gets a list of all publicly accessible API properties. Administrator permissions are not required for this API.
     *
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    listPublic(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Gets an API property by ID.
     *
     * @param id The UUID of the property to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    get(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Creates a new API property.
     *
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Updates an existing API property.
     *
     * @param id The UUID of the property to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    update(id: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    /**
     * Removes an existing API property.
     *
     * @param id The UUID of the property to remove.
     * @param queryStringParams Optional query string parameters for the request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    remove(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
