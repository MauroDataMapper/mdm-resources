import { RequestOptions, QueryParameters, Uuid } from './mdm-common.model';
import { SessionListQueryParameters } from './mdm-session.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing sessions in Mauro.
 */
export declare class MdmSessionResource extends MdmResource {
    keepAlive(query?: QueryParameters, options?: RequestOptions): any;
    /**
     * `HTTP GET` - Gets a list of all active sessions runnin in Mauro. **Note:** only authenticated administrators may use this endpoint.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[SessionListResponse]] containing the [[SessionList]].
     *
     * `403 Forbidden` - user is not an administrator.
     */
    activeSessions(query?: SessionListQueryParameters, options?: RequestOptions): any;
    /**
     * `HTTP GET` - Confirm if a session has been authenticated.
     *
     * @param sessionId An optional UUID representing a session to test. If not provided, the current session will be tested.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[AuthenticatedResponse]] containing the [[AuthenticatedResult]].
     *
     * @see [[MdmSecurityResource.login]]
     */
    isAuthenticated(sessionId?: Uuid, query?: QueryParameters, options?: RequestOptions): any;
    /**
     * `HTTP GET` - Confirm if the current authenticated session has administrative priviledges.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[AdminSessionResponse]] containing the [[AdminSessionResult]].
     */
    isApplicationAdministration(query?: QueryParameters, options?: RequestOptions): any;
}
