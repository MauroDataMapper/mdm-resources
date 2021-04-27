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

import { Authority, Branchable, Classifier, Historical, ItemDomainType, MdmIndexResponse, MdmResponse, PageParameters, Payload, QueryParameters, Securable, SortParameters, Uuid, Version } from './mdm-common.model';
import { DataTypeProvider } from './mdm-data-type.model';

export type DataModelType = 'Data Standard' | 'Data Asset';

export type DataModelIndexParameters = SortParameters & PageParameters & QueryParameters;

export interface DataModel {
  id?: Uuid;
  domainType: ItemDomainType;
  type?: DataModelType;
  authority?: Authority;
  label: string;
  description?: string;
  author?: string;
  organisation?: string;
  aliases?: string[];
  semanticLinks?: any[];
  editable?: boolean;
  classifiers?: Classifier[];
  finalised: boolean;
  deleted?: boolean;
  modelVersion: Version;
  modelVersionTag?: string;
  documentationVersion?: Version;
  [key: string]: any;
}

export interface DataModelSecurable extends Securable {
  readableByEveryone?: boolean;
  readableByAuthenticatedUsers?: boolean;
}

export interface DataModelHistorical extends Historical {
  dateFinalised?: string;
}

export type DataModelDetail = DataModel & DataModelSecurable & DataModelHistorical & Branchable;

export type DataModelIndexResponse = MdmIndexResponse<DataModel>;
export type DataModelDetailResponse = MdmResponse<DataModelDetail>;

export interface DataModelCreatePayload {
  folder: Uuid;
  label: string;
  author: string;
  organisation: string;
  description?: string;
  type: DataModelType;
  classifiers?: Classifier[];
  [key: string]: any;
}

export interface DataModelCreateParameters {
  defaultDataTypeProvider?: string;
}

export type DataModelCreateQueryParameters = DataModelCreateParameters & QueryParameters;

export interface DataModelUpdatePayload {
  id: Uuid;
  domainType: ItemDomainType;
  label?: string;
  author?: string;
  organisation?: string;
  description?: string;
  type?: DataModelType;
  aliases?: string[];
  classifiers?: Classifier[];
  [key: string]: any;
}

export interface DataModelRemoveParameters {
  permanent: boolean;
}

export type DataModelRemoveQueryParameters = DataModelRemoveParameters & QueryParameters;

/**
 * Payload for the {@link MdmDataModelResource.finalise} request.
 */
export interface DataModelFinalisePayload extends Payload {
  /**
   * Define how to advance the version of the finalised data model.
   */
  versionChangeType: 'Major' | 'Minor' | 'Patch' | 'Custom';

  /**
   * If {@link versionChangeType} is `Custom`, sets the custom version number to use for the finalised data model.
   *
   * Has no affect for any other {@link versionChangeType}.
   */
  version?: Version;

  /**
   * Set an optional tag name to the finalised version.
   */
  versionTag?: string;
}

export type DataModelTypesResponse = MdmResponse<string[]>;
export type DataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;