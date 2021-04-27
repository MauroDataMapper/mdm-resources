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
export class MdmProviderResource extends MdmResource {
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
    exporters(query, options) {
        const url = `${this.apiEndpoint}/admin/providers/exporters`;
        return this.simpleGet(url, query, options);
    }
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
    emailers(query, options) {
        const url = `${this.apiEndpoint}/admin/providers/emailers`;
        return this.simpleGet(url, query, options);
    }
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
    dataLoaders(query, options) {
        const url = `${this.apiEndpoint}/admin/providers/dataLoaders`;
        return this.simpleGet(url, query, options);
    }
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
    importers(query, options) {
        const url = `${this.apiEndpoint}/admin/providers/importers`;
        return this.simpleGet(url, query, options);
    }
}
//# sourceMappingURL=mdm-provider.resource.js.map