import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler, IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
export declare class MdmAuthenticationResource extends MdmResource {
    private securityResource;
    private sesisonResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    login(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    logout(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    isAuthenticated(sessionId?: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): void;
}
