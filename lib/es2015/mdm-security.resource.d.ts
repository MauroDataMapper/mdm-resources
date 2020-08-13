import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
/**
 * Controller: authenticating
 |    *     | /api/authentication/logout                                                                                          | Action: logout
 |   POST   | /api/authentication/login                                                                                           | Action: login
 */
export declare class MdmSecurityResource extends MdmResource {
    login(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    logout(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    permissions(securableResourceDomainType: any, securableResourceId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
