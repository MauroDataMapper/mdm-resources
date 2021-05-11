var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { DefaultMdmRestHandler } from './mdm-rest-handler';
/**
 * Superclass for all Mauro resource classes.
 *
 * This superclass contains common functions to assist with carrying out resource requests.
 */
var MdmResource = /** @class */ (function () {
    /**
     * Constructs a new `MdmResource`.
     *
     * @param resourcesConfig Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
     * @param restHandler Optionally provide a specific [[MdmRestHandler]]. If not provided, the [[DefaultMdmRestHandler]] implementation will be used.
     */
    function MdmResource(resourcesConfig, restHandler) {
        this.resourcesConfig = resourcesConfig || new MdmResourcesConfiguration();
        this.restHandler = restHandler || new DefaultMdmRestHandler();
        this.apiEndpoint = this.resourcesConfig.apiEndpoint;
        this.defaultRequestOptions = this.resourcesConfig.defaultHttpRequestOptions;
    }
    /**
     * Send a HTTP `POST` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param data The data to include in the `POST` request body.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     */
    MdmResource.prototype.simplePost = function (url, data, options) {
        var opts = __assign(__assign(__assign(__assign({}, this.defaultRequestOptions), { body: data }), options), { method: 'POST' });
        return this.simpleRequest(url, {}, opts);
    };
    /**
     * Send a HTTP `GET` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     */
    MdmResource.prototype.simpleGet = function (url, query, options) {
        if (query === void 0) { query = {}; }
        var opts = __assign(__assign(__assign({}, this.defaultRequestOptions), options), { method: 'GET' });
        return this.simpleRequest(url, query, opts);
    };
    /**
     * Send a HTTP `DELETE` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     */
    MdmResource.prototype.simpleDelete = function (url, query, options) {
        if (query === void 0) { query = {}; }
        var opts = __assign(__assign(__assign({}, this.defaultRequestOptions), options), { method: 'DELETE' });
        return this.simpleRequest(url, query, opts);
    };
    /**
     * Send a HTTP `PUT` request to the given resource.
     *
     * @param url The full URL to the REST resource.
     * @param data The data to include in the `PUT` request body.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     */
    MdmResource.prototype.simplePut = function (url, data, options) {
        var opts = __assign(__assign(__assign(__assign({}, this.defaultRequestOptions), { body: data }), options), { method: 'PUT' });
        return this.simpleRequest(url, {}, opts);
    };
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
    MdmResource.prototype.simpleRequest = function (url, query, options) {
        if (query === void 0) { query = {}; }
        var queryString = this.generateQueryString(query);
        return this.restHandler.process("" + url + queryString, options);
    };
    /**
     * Test if a string represents a UUID.
     *
     * @param value The string to test.
     * @returns True if `value` represents a UUID.
     */
    MdmResource.prototype.isGuid = function (value) {
        if (value[0] === '{') {
            value = value.substring(1, value.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(value);
    };
    /**
     * Generate a query string for a URL based on object property values provided.
     *
     * @param query A query string parameters object to convert to a string.
     * @returns A URL encoded string containing each parameter and value, or an empty string if no properties were provided.
     */
    MdmResource.prototype.generateQueryString = function (query) {
        if (query === void 0) { query = {}; }
        var queryParams = Object.keys(query).map(function (key) { return key + "=" + query[key]; });
        return ((queryParams === null || queryParams === void 0 ? void 0 : queryParams.length) > 0) ? "?" + queryParams.join('&') : '';
    };
    return MdmResource;
}());
export { MdmResource };
//# sourceMappingURL=mdm-resource.js.map