import { MdmRequestOptions, QueryParameters, Uuid } from './mdm-common.model';
import { LoginPayload, SecurableDomainType } from './mdm-security.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing security and authentication.
 */
export declare class MdmSecurityResource extends MdmResource {
    /**
     * `HTTP POST` - Login using a username and password to generate a new authenticated session.
     *
     * @param data The username/password to use.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a [[LoginResponse]] containing the [[LoginResult]].
     *
     * @see [[MdmSessionResource.isAuthenticated]]
     */
    login(data: LoginPayload, options?: MdmRequestOptions): any;
    /**
     * `HTTP GET` - Logout of an authenticated session.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `204 No Content` - successfully logged out, will contain no body.
     */
    logout(query?: QueryParameters, options?: MdmRequestOptions): any;
    /**
     * `HTTP GET` - Inspect the permissions for a particular Mauro resource.
     *
     * @param securableResourceDomainType The domain type to get permissions for.
     * @param securableResourceId The UUID of the resource to inspect.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[PermissionsResponse]] containing the [[Permissions]] of this Mauro resource.
     */
    permissions(domainType: SecurableDomainType, securableResourceId: Uuid, query?: QueryParameters, options?: MdmRequestOptions): any;
}
