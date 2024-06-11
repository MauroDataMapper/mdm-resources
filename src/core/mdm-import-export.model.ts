/*
Copyright 2020-2024 University of Oxford and NHS England

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

import { CodeSetDetail } from '../terminologies/mdm-code-set.model';
import { DataModelDetail } from '../data-models/mdm-data-model.model';
import { ReferenceDataModelDetail } from '../reference-data/mdm-reference-data-model.model';
import { TerminologyDetail } from '../terminologies/mdm-terminology.model';
import {
  AsyncParameters,
  CatalogueItem,
  MdmIndexResponse,
  MdmResponse,
  QueryParameters,
  Uuid,
  Version
} from '../mdm-common.model';

export interface Importer {
  [key: string]: any;
  name: string;
  displayName: string;
  namespace: string;
  version: Version;
  providerType: string;
  paramClassType: string;
  canImportMultipleDomains: boolean;
  allowsExtraMetadataKeys: boolean;
  knownMetadataKeys: any[];
}

export interface ImporterProvider {
  name: string;
  namespace: string;
  version?: Version;
}

export type ImporterParameterType =
  | 'Integer'
  | 'String'
  | 'Text'
  | 'Password'
  | 'Boolean'
  | 'boolean'
  | 'int'
  | 'File'
  | 'Folder'
  | 'DataModel';

export interface ImporterParameter {
  [key: string]: any;
  name: string;
  displayName: string;
  description?: string;
  type: ImporterParameterType;
  optional: boolean;
}

export interface ImporterParameterGroup {
  name: string;
  parameters: ImporterParameter[];
}

export interface ImporterDetail {
  importer: Importer;
  parameterGroups: ImporterParameterGroup[];
}

export type ImportResult = CatalogueItem & { [key: string]: any };

export type ImporterIndexResponse = MdmResponse<Importer[]>;
export type ImporterDetailResponse = MdmResponse<ImporterDetail>;
export type ImportResultIndexResponse = MdmIndexResponse<ImportResult>;

export interface Exporter {
  [key: string]: any;
  name: string;
  displayName?: string;
  namespace: string;
  version: Version;
  providerType?: string;
  canExportMultipleDomains?: boolean;
  allowsExtraMetadataKeys?: boolean;
  knownMetadataKeys?: any[];
  fileExtension?: string;
  fileType?: string;
}

export type ExporterIndexResponse = MdmResponse<Exporter[]>;

export type ExportQueryParameters = AsyncParameters & QueryParameters;

export type ExportModelsPayload = Uuid[];

export interface ExportMetadata {
  exportedBy: string;
  exportedOn: string;
  exporter: Exporter;
}

export interface ExportModelDetail {
  exportMetadata: ExportMetadata;
  dataModel?: DataModelDetail;
  terminology?: TerminologyDetail;
  codeSet?: CodeSetDetail;
  referenceDataModel?: ReferenceDataModelDetail;
}

export type ExportModelDetailResponse = MdmResponse<ExportModelDetail>;

export interface ExportModelList {
  exportMetadata: ExportMetadata;
  dataModels?: DataModelDetail[];
  terminologies?: TerminologyDetail[];
  codeSets?: CodeSetDetail[];
  referenceDataModels?: ReferenceDataModelDetail[];
}

export type ExportModelIndexResponse = MdmResponse<ExportModelList>;
