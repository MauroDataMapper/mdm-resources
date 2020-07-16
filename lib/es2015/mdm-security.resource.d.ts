import { MdmResource } from './mdm-resource';
/**
 * Controller: authenticating
 |    *     | /api/authentication/logout                                                                                          | Action: logout
 |   POST   | /api/authentication/login                                                                                           | Action: login
 */
export declare class MdmSecurityResource extends MdmResource {
    login(data: any, restHandlerOptions?: any): any;
    logout(queryStringParams?: any, restHandlerOptions?: any): any;
    permissions(securableResourceDomainType: any, securableResourceId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
