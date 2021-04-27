var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { MdmResource } from './mdm-resource';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/admin/providers/exporters                                                                        | Action: exporterProviders
 |   GET    | /api/admin/providers/emailers                                                                         | Action: emailProviders
 |   GET    | /api/admin/providers/dataLoaders                                                                      | Action: dataLoaderProviders
 |   GET    | /api/admin/providers/importers                                                                        | Action: importerProviders
 */
/**
 * MDM resource for fetching information related to providers, such as importers/exported and plugins.
 *
 * **Note**: only an authenticated administrator user may use these endpoints.
 */
var MdmProviderResource = /** @class */ (function (_super) {
    __extends(MdmProviderResource, _super);
    function MdmProviderResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP GET` - Request a list of all exporters in the current Mauro instance.
     * @param query Query parameters to control the request, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmProviderResource.prototype.exporters = function (query, options) {
        var url = this.apiEndpoint + "/admin/providers/exporters";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a list of all emailers in the current Mauro instance.
     * @param query Query parameters to control the request, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmProviderResource.prototype.emailers = function (query, options) {
        var url = this.apiEndpoint + "/admin/providers/emailers";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a list of all data loaders in the current Mauro instance.
     * @param query Query parameters to control the request, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmProviderResource.prototype.dataLoaders = function (query, options) {
        var url = this.apiEndpoint + "/admin/providers/dataLoaders";
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Request a list of all importers in the current Mauro instance.
     * @param query Query parameters to control the request, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    MdmProviderResource.prototype.importers = function (query, options) {
        var url = this.apiEndpoint + "/admin/providers/importers";
        return this.simpleGet(url, query, options);
    };
    return MdmProviderResource;
}(MdmResource));
export { MdmProviderResource };
//# sourceMappingURL=mdm-provider.resource.js.map