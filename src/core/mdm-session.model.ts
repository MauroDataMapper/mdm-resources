/*
Copyright 2020-2023 University of Oxford
and Health and Social Care Information Centre, also known as NHS Digital

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
import {
  MdmResponse,
  QueryParameters,
  SortParameters,
  Uuid
} from '../mdm-common.model';

/**
 * Response body for a successful authentication check on a session.
 */
export interface AuthenticatedResult {
  authenticatedSession: boolean;
}

/**
 * Type alias for an endpoint response for confirming authenticated session status.
 */
export type AuthenticatedResponse = MdmResponse<AuthenticatedResult>;

/**
 * Response body for a successful administration session check.
 */
export interface AdminSessionResult {
  applicationAdministrationSession: boolean;
}

/**
 * Type alias for an endpoint response for confirming administrative access to the current session.
 */
export type AdminSessionResponse = MdmResponse<AdminSessionResult>;

/**
 * Defines the query parameters to use for requesting session lists.
 */
export type SessionListQueryParameters = SortParameters & QueryParameters;

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
export type SessionListResponse = MdmResponse<SessionList>;
