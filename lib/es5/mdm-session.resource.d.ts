import { MdmResource } from './mdm-resource';
/**
 * Controller: session
 |   GET    | /api/session/keepAlive                                                                                | Action: keepAlive
 |   GET    | /api/admin/activeSessions                                                                             | Action: activeSessions
 |   GET    | /api/session/isAuthenticated/${sesssionId}?                                                           | Action: isAuthenticatedSession
 */
export declare class MdmSessionResource extends MdmResource {
    keepAlive(options?: {}): any;
    activeSessions(options?: {}): any;
    isAuthenticated(sessionId?: any, options?: {}): any;
}
