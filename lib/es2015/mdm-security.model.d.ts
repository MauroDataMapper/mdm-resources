import { OpenIdConnectLoginPayload } from './mdm-plugin-openid-connect.model';
import { MdmResponse, Uuid } from './mdm-common.model';
/**
 * Payload for login endpoint to authenticate a user with username and password.
 *
 * @see {@link MdmSecurityResource.login}
 */
export interface BasicLoginPayload {
    username: string;
    password: string;
}
/**
 * Payload for login endpoint to authenticate a user.
 *
 * Login payload could be one of:
 *
 * * A {@link BasicLoginPayload} with username/password
 * * An {@link OpenIdConnectLoginPayload} for handling login after external authorization. This
 * will only work when the Open ID Connect plugin is installed in Mauro.
 */
export declare type LoginPayload = BasicLoginPayload | OpenIdConnectLoginPayload;
/**
 * Response body for a successful login attempt of a user.
 */
export interface LoginResult {
    id: Uuid;
    token?: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    pending?: boolean;
    disabled?: boolean;
    createdBy?: string;
    userRole?: string;
    needsToResetPassword?: boolean;
    [key: string]: any;
}
/**
 * Type alias for an endpoint response for authenticating a user successfully.
 */
export declare type LoginResponse = MdmResponse<LoginResult>;
/**
 * Set of allowed domain types for testing securable permissions.
 */
export declare enum SecurableDomainType {
    Classifiers = "classifiers",
    CodeSets = "codeSets",
    DataModels = "dataModels",
    Folders = "folders",
    ReferenceDataModels = "referenceDataModels",
    VersionedFolders = "versionedFolders"
}
export interface PermissionGroup {
    id: Uuid;
    name: string;
    description: string;
}
/**
 * Represents the permissions for a securable domain object and which users/groups are able to access it.
 */
export interface Permissions {
    readableByEveryone: boolean;
    readableByAuthenticated: boolean;
    readableByGroups: PermissionGroup[];
    writeableByGroups: PermissionGroup[];
    readableByUsers: any[];
    writeableByUsers: any[];
}
/**
 * Type alias for an endpoint response for fetching permissions on a securable domain object.
 */
export declare type PermissionsResponse = MdmResponse<Permissions>;
