import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing sessions in Mauro.
 */
export class MdmSessionResource extends MdmResource {
    keepAlive(query, options) {
        const url = `${this.apiEndpoint}/session/keepAlive`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Gets a list of all active sessions runnin in Mauro. **Note:** only authenticated administrators may use this endpoint.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[SessionListResponse]] containing the [[SessionList]].
     *
     * `403 Forbidden` - user is not an administrator.
     */
    activeSessions(query, options) {
        const url = `${this.apiEndpoint}/admin/activeSessions`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Confirm if a session has been authenticated.
     * @param sessionId An optional UUID representing a session to test. If not provided, the current session will be tested.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[AuthenticatedResponse]] containing the [[AuthenticatedResult]].
     *
     * @see [[MdmSecurityResource.login]]
     */
    isAuthenticated(sessionId, query, options) {
        const url = `${this.apiEndpoint}/session/isAuthenticated${sessionId ? `/${sessionId}` : ''}`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP GET` - Confirm if the current authenticated session has administrative priviledges.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[AdminSessionResponse]] containing the [[AdminSessionResult]].
     */
    isApplicationAdministration(query, options) {
        const url = `${this.apiEndpoint}/session/isApplicationAdministration`;
        return this.simpleGet(url, query, options);
    }
}
//# sourceMappingURL=mdm-session.resource.js.map