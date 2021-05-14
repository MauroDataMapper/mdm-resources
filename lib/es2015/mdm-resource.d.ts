import { RequestSettings, QueryParameters } from './mdm-common.model';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmRestHandler } from './mdm-rest-handler';
/**
 * Superclass for all Mauro resource classes.
 *
 * This superclass contains common functions to assist with carrying out resource requests.
 */
export declare class MdmResource {
    /**
     * Stores the base API endpoint for all REST requests.
     */
    protected apiEndpoint: string;
    /**
     * Stores the default options to apply to every REST request.
     */
    protected defaultRequestOptions: RequestSettings;
    private restHandler;
    private resourcesConfig;
    /**
     * Constructs a new `MdmResource`.
     *
     * @param resourcesConfig Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
     * @param restHandler Optionally provide a specific [[MdmRestHandler]]. If not provided, the [[DefaultMdmRestHandler]] implementation will be used.
     */
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: MdmRestHandler);
    /**
     * Send a HTTP `POST` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param data The data to include in the `POST` request body.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     */
    simplePost(url: string, data: any, options?: RequestSettings): any;
    /**
     * Send a HTTP `GET` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     */
    simpleGet(url: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * Send a HTTP `DELETE` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     */
    simpleDelete(url: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * Send a HTTP `PUT` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param data The data to include in the `PUT` request body.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     */
    simplePut(url: string, data: any, options?: RequestSettings): any;
    /**
     * Send a generic HTTP request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the request.
     *
     * All details of HTTP request must be included in the `options` parameter, particularly the HTTP method:
     *
     * ```ts
     * simpleRequest('http://localhost/api/test', { }, { method: 'GET' });
     * ```
     */
    simpleRequest(url: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * Test if a string represents a UUID.
     *
     * @param value The string to test.
     * @returns True if `value` represents a UUID.
     */
    protected isGuid(value: any): boolean;
    /**
     * Generate a query string for a URL based on object property values provided.
     *
     * @param query A query string parameters object to convert to a string.
     * @returns A URL encoded string containing each parameter and value, or an empty string if no properties were provided.
     */
    protected generateQueryString(query?: QueryParameters): string;
}
