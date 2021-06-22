/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/

import { OpenIdConnectLoginPayload } from './mdm-plugin-openid-connect.model';
import { MdmResponse, Uuid } from './mdm-common.model';

/**
 * Payload for login endpoint to authenticate a user with username and password.
 *
 * @see [[MdmSecurityResource.login]]
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
export type LoginPayload = 
  BasicLoginPayload 
  | OpenIdConnectLoginPayload;

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
export type LoginResponse = MdmResponse<LoginResult>;

/**
 * Set of allowed domain types for testing securable permissions.
 */
export enum SecurableDomainType {
  Classifiers = 'classifiers',
  CodeSets = 'codeSets',
  DataModels = 'dataModels',
  Folders = 'folders',
  ReferenceDataModels = 'referenceDataModels',
  VersionedFolders = 'versionedFolders'
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
export type PermissionsResponse = MdmResponse<Permissions>;