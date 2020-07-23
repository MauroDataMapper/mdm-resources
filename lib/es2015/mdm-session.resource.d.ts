import { MdmResource } from './mdm-resource';
/**
 * Controller: session
 |   GET    | /api/session/keepAlive                                                                                | Action: keepAlive
 |   GET    | /api/admin/activeSessions                                                                             | Action: activeSessions
 |   GET    | /api/session/isAuthenticated/${sesssionId}?                                                           | Action: isAuthenticatedSession
 */
export declare class MdmSessionResource extends MdmResource {
    keepAlive(queryStringParams?: any, restHandlerOptions?: any): any;
    activeSessions(queryStringParams?: any, restHandlerOptions?: any): any;
    isAuthenticated(sessionId?: any, queryStringParams?: any, restHandlerOptions?: any): any;
    isApplicationAdministration(queryStringParams?: any, restHandlerOptions?: any): any;
}
