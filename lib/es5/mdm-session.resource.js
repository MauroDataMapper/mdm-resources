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
 * MDM resource for managing sessions in Mauro.
 */
var MdmSessionResource = /** @class */ (function (_super) {
    __extends(MdmSessionResource, _super);
    function MdmSessionResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmSessionResource.prototype.keepAlive = function (query, options) {
        var url = this.apiEndpoint + "/session/keepAlive";
        return this.simpleGet(url, query, options);
    };
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
    MdmSessionResource.prototype.activeSessions = function (query, options) {
        var url = this.apiEndpoint + "/admin/activeSessions";
        return this.simpleGet(url, query, options);
    };
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
    MdmSessionResource.prototype.isAuthenticated = function (sessionId, query, options) {
        var url = this.apiEndpoint + "/session/isAuthenticated" + (sessionId ? "/" + sessionId : '');
        return this.simpleGet(url, query, options);
    };
    /**
     * `HTTP GET` - Confirm if the current authenticated session has administrative priviledges.
     *
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a [[AdminSessionResponse]] containing the [[AdminSessionResult]].
     */
    MdmSessionResource.prototype.isApplicationAdministration = function (query, options) {
        var url = this.apiEndpoint + "/session/isApplicationAdministration";
        return this.simpleGet(url, query, options);
    };
    return MdmSessionResource;
}(MdmResource));
export { MdmSessionResource };
//# sourceMappingURL=mdm-session.resource.js.map