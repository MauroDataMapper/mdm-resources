/*
Copyright 2020-2021 University of Oxford
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

import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, Payload, Uuid, Version } from './mdm-common.model';

export type ProfileFieldDataType =
  'boolean'
  | 'string'
  | 'text'
  | 'int'
  | 'decimal'
  | 'date'
  | 'datetime'
  | 'time'
  | 'folder'
  | 'model'
  | 'json';

export interface ProfileField {
  [key: string]: any;
  allowedValues?: string[];
  currentValue?: string;
  dataType: ProfileFieldDataType;
  derived?: boolean;
  derivedFrom?: string;
  description?: string;
  fieldName: string;
  maxMultiplicity?: number;
  metadataPropertyName: string;
  minMultiplicity?: number;
  regularExpressions?: any;
  uneditable?: boolean;
}

export interface ProfileValidationError {
  fieldName: string;
  message: string;
  metadataPropertyName?: string;
}

export interface ProfileValidationErrorList {
  errors: ProfileValidationError[];
  total: number;
  fieldTotal?: number;
}

export type ProfileValidationResponse = MdmResponse<ProfileValidationErrorList>;

export interface ProfileSection {
  name: string;
  description?: string;
  fields: ProfileField[];
}

export interface Profile {
  [key: string]: any;
  id: Uuid;
  domainType: CatalogueItemDomainType;
  label: string;
  sections: ProfileSection[];
}

export type ProfileResponse = MdmResponse<Profile>;

export interface ProfileProvider {
  name: string;
  namespace: string;
  version?: Version;
}

export interface ProfileContext {
  profile: Profile;
  profileProviderService: ProfileProvider;
  errors?: ProfileValidationErrorList;
}

export interface ProfileContextCollection {
  count: number;
  profilesProvided: ProfileContext[];
}

export interface MultiFacetAwareItem {
  multiFacetAwareItemDomainType: CatalogueItemDomainType;
  multiFacetAwareItemId: Uuid;
}

export interface ProfileContextIndexPayload extends Payload {
  multiFacetAwareItems: MultiFacetAwareItem[];
  profileProviderServices: ProfileProvider[];
}

export interface ProfileContextValidationPayload extends Payload {
  profilesProvided: ProfileContext[];
}

export type ProfileContextIndexResponse = MdmResponse<ProfileContextCollection>;

export interface ProfileSummary {
  [key: string]: any;
  allowsExtraMetadataKeys: boolean;
  displayName: string;
  domains: CatalogueItemDomainType[];
  knownMetadataKeys: string[];
  metadataNamespace: string;
  name: string;
  namespace: string;
  providerType: string;
  version: Version;
}

export type ProfileSummaryIndexResponse = MdmResponse<ProfileSummary[]>;

export interface Metadata {
  id: Uuid;
  namespace: string;
  key: string;
  value?: string;
  lastUpdated?: string;
}

export type MetadataIndexResponse = MdmIndexResponse<Metadata>;

export type ProfilePayload = Profile & Payload;