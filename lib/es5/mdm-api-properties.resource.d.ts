import { ApiProperty } from './mdm-api-properties.model';
import { RequestSettings, QueryParameters, FilterQueryParameters, Uuid } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing system and user defined properties in Mauro.
 *
 * @description With the exception of the {@link MdmApiPropertyResources.listPublic} endpoint, all these endpoints
 * require an authenticated administrator to use them.
 *
 * @see {@link ApiProperty}
 */
export declare class MdmApiPropertyResources extends MdmResource {
    /**
     * `HTTP GET` - Gets a list of all API properties.
     *
     * @param query Optional query string parameters to filter the list, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ApiPropertyIndexResponse} containing a list of {@link ApiProperty} items.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    list(query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a list of all publicly accessible API properties. Administrator permissions are _not_ required for this API.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ApiPropertyIndexResponse} containing a list of {@link ApiProperty} items.
     */
    listPublic(query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets an API property by ID.
     *
     * @param id The unique identifier of the property to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ApiPropertyResponse} containing a {@link ApiProperty}.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    get(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new API property.
     *
     * @param data The data to use for creation.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ApiPropertyResponse} containing a {@link ApiProperty}.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    save(data: ApiProperty, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing API property.
     *
     * @param id The unique identifier of the property to update.
     * @param data The data to use for the update.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link ApiPropertyResponse} containing a {@link ApiProperty}.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    update(id: Uuid, data: ApiProperty, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing API property.
     *
     * @param id The unique identifier of the property to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
}
