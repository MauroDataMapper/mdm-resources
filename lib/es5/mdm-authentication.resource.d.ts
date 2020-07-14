import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmAuthenticationResource extends MdmResource {
    private securityResource;
    private sesisonResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    login(data: any): any;
    logout(): any;
    isAuthenticated(sessionId?: any): void;
}
