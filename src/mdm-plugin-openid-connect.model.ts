/*
Copyright 2021 University of Oxford

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

import { MdmIndexResponse, MdmResponse, Payload, Uuid } from './mdm-common.model';

export type AuthorizationDisplayType = 'PAGE' | 'POPUP' | 'TOUCH' | 'WRAP';
export type AuthorizationPromptType = 'NONE' | 'LOGIN' | 'CONSENT' | 'SELECT_ACCOUNT';

/**
 * Represents a discovery document containing all endpoints for an OpenID Connect provider.
 */
export interface OpenIdDiscoveryDocument {
  id: Uuid;
  lastUpdated?: string;
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userinfoEndpoint?: string;
  endSessionEndpoint?: string;
  jwksUri: string;
  [key: string]: any;
}

/**
 * Represents the authorization endpoint parameters for an OpenID Connect provider.
 * 
 * @see https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint
 */
export interface OpenIdAuthorizationEndpointParameters {
  id: Uuid;
  lastUpdated?: string;
  scope?: string;
  responseType?: string;
  responseMode?: string;
  display?: AuthorizationDisplayType;
  prompt?: AuthorizationPromptType;
  maxAge?: number;
  uiLocales?: string;
  idTokenHint?: string;
  loginHint?: string;
  acrValues?: string;
  [key: string]: any;
}

/**
 * Represents the core details of an OpenID Connect provider registered in Mauro.
 * 
 * @description A provider can either be "Standard" or "Non-Standard", as denoted by
 * the {@link OpenIdConnectProviderCore.standardProvider} flag. "Standard" providers
 * support full discovery of endpoints, whilst "Non-Standard" providers must be manually 
 * configured with all necessary endpoints.
 */
export interface OpenIdConnectProviderCore {
  id: Uuid;
  label: string;  
  standardProvider: boolean;
  imageUrl?: string;
  [key: string]: any;
}

/**
 * Represents a publicly useable OpenID Connect provider. 
 * 
 * @description This is used for anonymous users to use on sign-in forms say, by using the provided 
 * {@link PublicOpenIdConnectProvider.authorizationEndpoint} to redirect to the provider.
 */
export interface PublicOpenIdConnectProvider extends OpenIdConnectProviderCore {
  authorizationEndpoint: string;
}

/**
 * Represents the minimal details of an OpenID Connect provider.
 * 
 * @description This object type contains properties used for administration purposes,
 * and should not be visible to anonymous users.
 * 
 * @see {@link PublicOpenIdConnectProvider}
 */
export interface OpenIdConnectProvider extends OpenIdConnectProviderCore {
  lastUpdated?: string;
}

/**
 * Represents the full details of an OpenID Connect provider.
 * 
 * @description This object type contains properties used for administration purposes,
 * and should not be visible to anonymous users.
 */
export interface OpenIdConnectProviderDetail extends OpenIdConnectProvider {
  clientId: string;
  clientSecret: string;
  authorizationEndpointParameters?: OpenIdAuthorizationEndpointParameters;

  /**
   * For standard providers, this provides the URL to the main discovery document for the provider.
   * 
   * This is used by Mauro to automatically fill the {@link OpenIdConnectProviderDetail.discoveryDocument}
   * property and key endpoints.
   * 
   * This is not required if the provided is non-standard.
   */
  discoveryDocumentUrl?: string;

  /**
   * Provides all the necessary endpoints for discovery, namely which endpoints to contact for authorization etc.
   * 
   * If this is a standard provider, this will be automatically managed by Mauro using the
   * {@link OpenIdConnectProviderDetail.discoveryDocumentUrl}. Otherwise this is manually entered.
   */
  discoveryDocument?: OpenIdDiscoveryDocument;
}

export type OpenIdConnectProvidersIndexResponse = MdmIndexResponse<OpenIdConnectProvider>;
export type PublicOpenIdConnectProvidersIndexResponse = MdmResponse<PublicOpenIdConnectProvider[]>;
export type OpenIdConnectProvidersDetailResponse = MdmResponse<OpenIdConnectProviderDetail>;

/**
 * Represents the payload state for creating/updating an OpenID Connect provider's discovery document.
 */
export interface OpenIdDiscoveryDocumentPayload extends Payload {
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  jwksUri: string;
  userinfoEndpoint?: string;
  endSessionEndpoint?: string;
}

/**
 * Represents the payload state for creating/updating an OpenID Connect provider's authorization endpoint parameters.
 */
export interface OpenIdAuthorizationEndpointParametersPayload extends Payload {
  scope?: string;
  responseType?: string;
  responseMode?: string;
  display?: AuthorizationDisplayType;
  prompt?: AuthorizationPromptType;
  maxAge?: number;
  uiLocales?: string;
  idTokenHint?: string;
  loginHint?: string;
  acrValues?: string;
}

/**
 * Represents the payload state for creating/updating an OpenID Connect provider.
 * 
 * @description This object type contains the core details necessary for creating an
 * OpenID Connect provider. However, the types {@link StandardOpenIdConnectProviderPayload}
 * and {@link NonStandardOpenIdConnectProviderPayload} should be used directly to create/update
 * the correct provider type.
 * 
 * @see {@link StandardOpenIdConnectProviderPayload}
 * @see {@link NonStandardOpenIdConnectProviderPayload}
 */
export interface OpenIdConnectProviderPayload extends Payload {
  label: string;  
  clientId: string;
  clientSecret: string;
  imageUrl?: string;
  authorizationEndpointParameters?: OpenIdAuthorizationEndpointParametersPayload;
}

/**
 * Represents the payload state for creating/updating a "Standard" OpenID Connect provider.
 * 
 * @description Every standard OpenID Connect provider requires a discovery document URL, which
 * Mauro will use to fill in all required endpoints.
 */
export interface StandardOpenIdConnectProviderPayload extends OpenIdConnectProviderPayload {
  standardProvider: true;
  discoveryDocumentUrl: string;
}

/**
 * Represents the payload state for creating/updating a "Non-Standard" OpenID Connect provider.
 * 
 * @description Every non-standard OpenID Connect provider requires the full list of endpoints
 * manually entered - Mauro will not be able to automatically fetch these details from the 
 * provider.
 */
export interface NonStandardOpenIdConnectProviderPayload extends OpenIdConnectProviderPayload {
  standardProvider: false;
  discoveryDocument: OpenIdDiscoveryDocumentPayload;
}

export type OpenIdConnectProviderUpdatePayload = 
  StandardOpenIdConnectProviderPayload 
  | NonStandardOpenIdConnectProviderPayload;

/**
 * Payload for login endpoint to authenticate a user after successful authentication from an
 * OpenID Connect provider.
 *
 * @see {@link MdmSecurityResource.login}
 */
export interface OpenIdConnectLoginPayload {
  /**
   * The unique identifier of the {@link OpenIdConnectProvider} used.
   */
  openidConnectProviderId: Uuid;

  /**
   * The session state value sent back from the provider.
   */
  sessionState: string;

  /**
   * The code value sent back from the provider.
   */
  code: string;

  /**
   * The state value sent back from the provider.
   */
  state: string;

  /**
   * The redirect URL sent by the application to the provider. This needs to be the *exact* URL used
   * when the user was redirected to the provider site.
   */
  redirectUrl: string;
}