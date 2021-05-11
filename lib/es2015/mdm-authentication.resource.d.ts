import { RequestSettings, QueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmRestHandler } from './mdm-rest-handler';
/**
 * @deprecated Use [[MdmSecurityResource]] and [[MdmSessionResource]] instead.
 */
export declare class MdmAuthenticationResource extends MdmResource {
    private securityResource;
    private sesisonResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: MdmRestHandler);
    /**
     * @deprecated Use [[MdmSecurityResource.login]] instead.
     */
    login(data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use [[MdmSecurityResource.logout]] instead.
     */
    logout(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use [[MdmSessionResource.isAuthenticated]] instead.
     */
    isAuthenticated(sessionId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): void;
}
