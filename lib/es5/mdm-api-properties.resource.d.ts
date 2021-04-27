import { RequestOptions, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing system properties in the Mauro instance.
 */
export declare class MdmApiPropertyResources extends MdmResource {
    /**
     * `HTTP GET` - Gets a list of all API properties.
     *
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
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
     *          key: 'test.property',
     *          value: 'test',
     *          category: 'Test',
     *          publiclyVisible: false,
     *          lastUpdatedBy: 'user@test.com',
     *          createdBy: 'admin@test.com',
     *          lastUpdated: '2021-03-10T15:17:05.459Z'
     *      }
     *  ]
     * }
     * ```
     */
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    /**
     * `HTTP GET` - Gets a list of all publicly accessible API properties. Administrator permissions are not required for this API.
     *
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
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
     *          key: 'test.property',
     *          value: 'test',
     *          category: 'Test',
     *          publiclyVisible: true,
     *          lastUpdatedBy: 'user@test.com',
     *          createdBy: 'admin@test.com',
     *          lastUpdated: '2021-03-10T15:17:05.459Z'
     *      }
     *  ]
     * }
     * ```
     */
    listPublic(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    /**
     * `HTTP GET` - Gets an API property by ID.
     *
     * @param id The UUID of the property to get.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     *
     * ```ts
     *  {
     *      id: 'c7de1358-a4ce-4d72-abca-04013f7f4acc',
     *      key: 'test.property',
     *      value: 'test',
     *      category: 'Test',
     *      publiclyVisible: true,
     *      lastUpdatedBy: 'user@test.com',
     *      createdBy: 'admin@test.com',
     *      lastUpdated: '2021-03-10T15:17:05.459Z'
     *  }
     * ```
     */
    get(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    /**
     * `HTTP POST` - Creates a new API property.
     *
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * On success, the response will be a `200 OK` and the response body will be the same as that returned
     * from the `get()` function.
     */
    save(data: any, restHandlerOptions?: RequestOptions): any;
    /**
     * `HTTP PUT` - Updates an existing API property.
     *
     * @param id The UUID of the property to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * On success, the response will be a `200 OK` and the response body will be the same as that returned
     * from the `get()` function.
     */
    update(id: string, data: any, restHandlerOptions?: RequestOptions): any;
    /**
     * `HTTP DELETE` - Removes an existing API property.
     *
     * @param id The UUID of the property to remove.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(id: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
