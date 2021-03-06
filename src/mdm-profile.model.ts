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

import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, Payload, Uuid, Version } from './mdm-common.model';

export type ProfileFieldDataType =
  'BOOLEAN'
  | 'STRING'
  | 'TEXT'
  | 'INT'
  | 'DECIMAL'
  | 'DATE'
  | 'DATETIME'
  | 'TIME'
  | 'FOLDER'
  | 'MODEL'
  | 'JSON';

export interface ProfileField {
  allowedValues?: any;
  currentValue?: string;
  dataType: ProfileFieldDataType;
  description?: string;
  fieldName: string;
  maxMultiplicity?: number;
  metadataPropertyName: string;
  minMultiplicity?: number;
  regularExpressions?: any;
  validationErrors?: string[];
  [key: string]: any;
}

export interface ProfileSection {
  sectionName: string;
  sectionDescription?: string;
  fields: ProfileField[];
}

export interface Profile {
  id: Uuid;
  domainType: CatalogueItemDomainType;
  label: string;
  sections: ProfileSection[]; 
  [key: string]: any;
}

export type ProfileResponse = MdmResponse<Profile>;

export interface ProfileSummary {
  allowsExtraMetadataKeys: boolean;
  displayName: string;
  domains: CatalogueItemDomainType[];
  knownMetadataKeys: string[];
  metadataNamespace: string;
  name: string;
  namespace: string;
  providerType: string;
  version: Version;
  [key: string]: any;
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