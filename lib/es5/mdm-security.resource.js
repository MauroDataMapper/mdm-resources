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
 * MDM resource for managing security and authentication.
 */
var MdmSecurityResource = /** @class */ (function (_super) {
    __extends(MdmSecurityResource, _super);
    function MdmSecurityResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * `HTTP POST` - Login to Mauro to generate a new authenticated session.
     *
     * @param data The payload to use.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link LoginResponse} containing the {@link LoginResult}.
     *
     * @see {@link MdmSessionResource.isAuthenticated}
     *
     * @description There can be multiple methods of logging in to generate a session:
     *
     * * The most basic authentication method is via username and password to match against
     * an existing user account in the Mauro instance. This requires a {@link BasicLoginPayload}
     * where the username and password must be provided.
     *
     * * An alternative authentication method is via OpenID Connect. This requires the
     * [mdm-plugin-authentication-openid-connect](https://github.com/MauroDataMapper-Plugins/mdm-plugin-authentication-openid-connect)
     * plugin to be installed in the Mauro instance to work. With this authentication method, a user
     * is authenticated via an external provider using a different account (e.g. Google or Microsoft account),
     * and the success response returned by the OpenID Connect provider will be passed to Mauro via
     * an {@link OpenIdConnectLoginPayload} containing the authorization state data.
     *
     * @example To login with basic authentication:
     *
     * ```ts
     * const payload: BasicLoginPayload = {
     *  username: 'test',
     *  password: 'secret'
     * };
     *
     * const response = securityResource.login(payload);
     * ```
     *
     * @example To login with OpenID Connect (assuming the
     * [mdm-plugin-authentication-openid-connect](https://github.com/MauroDataMapper-Plugins/mdm-plugin-authentication-openid-connect)
     * is installed):
     *
     * ```ts
     * const payload: OpenIdConnectPayload = {
     *  openidConnectProviderId: 'Uuid-of-OpenID-connect-provider';
     *  sessionState: 'value-from-provider';
     *  code: 'value-from-provider';
     *  state: 'value-from-provider';
     *  redirectUrl: 'https://ui.url/redirect';
     * };
     *
     * const response = securityResource.login(payload);
     * ```
     */
    MdmSecurityResource.prototype.login = function (data, options) {
        var url = this.apiEndpoint + "/authentication/login";
        return this.simplePost(url, data, options);
    };
    /**
     * `HTTP GET` - Logout of an authenticated session.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `204 No Content` - successfully logged out, will contain no body.
     */
    MdmSecurityResource.prototype.logout = function (query, options) {
        var url = this.apiEndpoint + "/authentication/logout";
        return this.simpleGet(url, query, options);
    };
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
    MdmSecurityResource.prototype.permissions = function (domainType, securableResourceId, query, options) {
        var url = this.apiEndpoint + "/" + domainType + "/" + securableResourceId + "/permissions";
        return this.simpleGet(url, query, options);
    };
    return MdmSecurityResource;
}(MdmResource));
export { MdmSecurityResource };
//# sourceMappingURL=mdm-security.resource.js.map