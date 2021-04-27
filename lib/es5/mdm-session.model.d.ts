import { MdmResponse, QueryParameters, SortParameters, Uuid } from "mdm-common.model";
/**
 * Response body for a successful authentication check on a session.
 */
export interface AuthenticatedResult {
    authenticatedSession: boolean;
}
/**
 * Type alias for an endpoint response for confirming authenticated session status.
 */
export declare type AuthenticatedResponse = MdmResponse<AuthenticatedResult>;
/**
 * Response body for a successful administration session check.
 */
export interface AdminSessionResult {
    applicationAdministrationSession: boolean;
}
/**
 * Type alias for an endpoint response for confirming administrative access to the current session.
 */
export declare type AdminSessionResponse = MdmResponse<AdminSessionResult>;
/**
 * Defines the query parameters to use for requesting session lists.
 */
export declare type SessionListQueryParameters = SortParameters & QueryParameters;
export interface Session {
    id: Uuid;
    lastAccessedDateTime: string;
    creationDateTime: string;
    userEmailAddress: string;
    userName: string;
    userOrganisation: string;
    lastAccessedUrl: string;
}
export interface SessionList {
    countAuthorised: number;
    countUnauthorised: number;
    items: Session[];
}
/**
 * Type alias for an endpoint response for fetching a list of sessions in use.
 */
export declare type SessionListResponse = MdmResponse<SessionList>;
