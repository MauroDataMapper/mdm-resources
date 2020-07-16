import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmAuthenticationResource extends MdmResource {
    private securityResource;
    private sesisonResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    login(data: any, restHandlerOptions?: any): any;
    logout(queryStringParams?: any, restHandlerOptions?: any): any;
    isAuthenticated(sessionId?: any, queryStringParams?: any, restHandlerOptions?: any): void;
}
