import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { DefaultMdmRestHandler } from './mdm-rest-handler';
import { MdmSecurityResource } from './mdm-security.resource';
import { MdmSessionResource } from './mdm-session.resource';
/**
 * @deprecated Use [[MdmSecurityResource]] and [[MdmSessionResource]] instead.
 */
export class MdmAuthenticationResource extends MdmResource {
    constructor(resourcesConfig = new MdmResourcesConfiguration(), restHandler = new DefaultMdmRestHandler()) {
        super(resourcesConfig, restHandler);
        this.securityResource = new MdmSecurityResource(resourcesConfig, restHandler);
        this.sesisonResource = new MdmSessionResource(resourcesConfig, restHandler);
    }
    /**
     * @deprecated Use [[MdmSecurityResource.login]] instead.
     */
    login(data, restHandlerOptions) {
        return this.securityResource.login(data, restHandlerOptions);
    }
    /**
     * @deprecated Use [[MdmSecurityResource.logout]] instead.
     */
    logout(queryStringParams, restHandlerOptions) {
        return this.securityResource.logout(queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use [[MdmSessionResource.isAuthenticated]] instead.
     */
    isAuthenticated(sessionId, queryStringParams, restHandlerOptions) {
        this.sesisonResource.isAuthenticated(sessionId, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-authentication.resource.js.map