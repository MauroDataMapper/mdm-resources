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

import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, ModelCreatePayload, SecurableModel, Versionable } from './mdm-model-types.model';
import { MdmIndexResponse, MdmResponse, Payload, QueryParameters, Uuid } from './mdm-common.model';
import { DataTypeProvider } from './mdm-data-type.model';

export type DataModelType = 'Data Standard' | 'Data Asset';

export interface DataModel extends Modelable {
  [key: string]: any;
  type?: DataModelType;
  semanticLinks?: any[];
}

export type DataModelDetail =
  DataModel
  & ModelableDetail
  & SecurableModel
  & Historical
  & Branchable
  & Versionable
  & Finalisable;

export type DataModelIndexResponse = MdmIndexResponse<DataModel>;
export type DataModelDetailResponse = MdmResponse<DataModelDetail>;

export interface DataModelCreatePayload extends ModelCreatePayload {
  type: DataModelType;
}

export interface DataModelCreateParameters {
  defaultDataTypeProvider?: string;
}

export type DataModelCreateQueryParameters = DataModelCreateParameters & QueryParameters;

export type DataModelTypesResponse = MdmResponse<string[]>;
export type DataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;

/**
 * Payload to control how to copy a subset of a data model to another target data model.
 */
export interface DataModelSubsetPayload extends Payload {
  /**
   * The list of identifiers to the elements to add.
   */
  additions: Uuid[];

  /**
   * The list of identifiers to the element to remove.
   */
  deletions: Uuid[];
}

/**
 * Represents the intersection between two Data Models, defining what is common between them.
 */
export interface DataModelIntersection {
  /**
   * The list of identifiers of elements that are in source model which match the target model.
   */
  intersects: Uuid[];
}

export type DataModelIntersectionResponse = MdmResponse<DataModelIntersection>;