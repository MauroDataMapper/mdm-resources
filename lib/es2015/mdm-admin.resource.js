import { MdmResource } from './mdm-resource';
/**
 * Controller: admin
 |   GET    | /api/admin/status                                                                                     | Action: status
 |   POST   | /api/admin/rebuildLuceneIndexes                                                                       | Action: rebuildLuceneIndexes
 *
 * Controller: mauroDataMapperProvider
 |   GET    | /api/admin/modules                                                                                    | Action: modules
 *
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 *
 * Controller: email
 |   GET    | /api/admin/emails                                                                                     | Action: index
 *
 * Controller: authenticating
 |   POST   | /api/admin/activeSessions                                                                             | Action: activeSessionsWithCredentials
 */
/**
 * MDM resource for administrative functions.
 *
 * **Note**: only an authenticated administrator user may use these endpoints.
 */
export class MdmAdminResource extends MdmResource {
    /**
     * `HTTP GET` - Gets the current status of this Mauro instance.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[MauroStatusResponse]] containing the [[MauroStatus]].
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description
     *
     * The status information will include details such as:
     *
     * * Version numbers for various components within Mauro
     * * Server operating system details
     * * Driver information for the server
     *
     * The property details may vary, so the property names of the [[MauroStatus]] object should
     * be referenced by index instead of field notation.
     *
     * @example Example output from this endpoint.
     *
     * ```ts
     * {
     *    "Mauro Data Mapper Version": "4.5.0-SNAPSHOT",
     *    "Grails Version": "4.0.6",
     *    "Java Version": "12.0.2",
     *    "Java Vendor": "Oracle Corporation",
     *    "OS Name": "Windows 10",
     *    "OS Version": "10.0",
     *    "OS Architecture": "amd64",
     *    "Driver Manager Drivers Available": [
     *        {
     *            "class": "org.postgresql.Driver",
     *            "version": "42.2"
     *        },
     *        {
     *            "class": "org.h2.Driver",
     *            "version": "1.4"
     *        }
     *    ]
     *}
     * ```
     */
    status(query, options) {
        const url = `${this.apiEndpoint}/admin/status`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP POST` - Request that Mauro Lucene search indexes are rebuilt.
     *
     * @param payload Payload for the request. Currently this is not required as there are no parameters available, provided for future use.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - operation was successful.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    rebuildLuceneIndexes(payload, options) {
        const url = `${this.apiEndpoint}/admin/rebuildLuceneIndexes`;
        return this.simplePost(url, payload, options);
    }
    /**
     * `HTTP GET` - Request a list of all loaded modules in the current Mauro instance.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[ModulesResponse]] containing a list of [[Module]] details.
     *
     * `403 Forbidden` - user is not an administrator.
     */
    modules(query, options) {
        const url = `${this.apiEndpoint}/admin/modules`;
        return this.simpleGet(url, query, options);
    }
    /**
     * @@deprecated Use [[MdmTreeItemResource.deletedModels]] instead.
     */
    deletedModels(containerDomainType, modelDomainType, query, options) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/deleted`;
        return this.simpleGet(url, query, options);
    }
    /**
     * @@deprecated Use [[MdmTreeItemResource.modelSupersededModels]] instead.
     */
    modelSupersededModels(containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @@deprecated Use [[MdmTreeItemResource.documentationSupersededModels]] instead.
     */
    documentationSupersededModels(containerDomainType, modelDomainType, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    emails(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/emails`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use [[MdmSessionResource.activeSessions]] instead.
     */
    activeSessions(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/activeSessions`;
        return this.simpleGet(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-admin.resource.js.map