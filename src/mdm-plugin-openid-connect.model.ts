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

export interface OpenIdDiscoveryDocument {
  id: Uuid;
  lastUpdated?: string;
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userinfoEndpoint: string;
  endSessionEndpoint: string;
  jwksUri: string;
  [key: string]: any;
}

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

export interface OpenIdConnectProviderCore {
  id: Uuid;
  label: string;  
  standardProvider: boolean;
  imageUrl?: string;
  [key: string]: any;
}

export interface PublicOpenIdConnectProvider extends OpenIdConnectProviderCore {
  authorizationEndpoint: string;
}

export interface OpenIdConnectProvider extends OpenIdConnectProviderCore {
  lastUpdated?: string;
}

export interface OpenIdConnectProviderDetail extends OpenIdConnectProvider {
  clientId: string;
  clientSecret: string;
  authorizationEndpointParameters?: OpenIdAuthorizationEndpointParameters;
  discoveryDocument?: OpenIdDiscoveryDocument;
}

export type OpenIdConnectProvidersIndexResponse = MdmIndexResponse<OpenIdConnectProvider>;
export type PublicOpenIdConnectProvidersIndexResponse = MdmResponse<PublicOpenIdConnectProvider[]>;
export type OpenIdConnectProvidersDetailResponse = MdmResponse<OpenIdConnectProviderDetail>;

export interface OpenIdDiscoveryDocumentPayload extends Payload {
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  jwksUri: string;
  userinfoEndpoint?: string;
  endSessionEndpoint?: string;
}

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

export interface OpenIdConnectProviderPayload extends Payload {
  label: string;  
  clientId: string;
  clientSecret: string;
  imageUrl?: string;
  authorizationEndpointParameters?: OpenIdAuthorizationEndpointParametersPayload;
}

export interface StandardOpenIdConnectProviderPayload extends OpenIdConnectProviderPayload {
  standardProvider: true;
  discoveryDocumentUrl: string;
}

export interface NonStandardOpenIdConnectProviderPayload extends OpenIdConnectProviderPayload {
  standardProvider: false;
  discoveryDocument: OpenIdDiscoveryDocumentPayload;
}

export type OpenIdConnectProviderUpdatePayload = 
  StandardOpenIdConnectProviderPayload 
  | NonStandardOpenIdConnectProviderPayload;

export interface OpenIdConnectLoginPayload {
  openidConnectProviderId: Uuid;
  sessionState: string;
  code: string;
  state: string;
  redirectUrl: string;
}