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

import { Historical, Securable } from '../mdm-model-types.model';
import {
  Breadcrumb,
  CatalogueItemDomainType,
  MdmIndexResponse,
  MdmResponse,
  Uuid,
  Version,
  CatalogueItemReference
} from '../mdm-common.model';

export interface EnumerationValue {
  index?: number;
  id?: Uuid;
  key: string;
  value: string;
  category?: any;
}

export interface ReferenceClass {
  id: Uuid;
  domainType?: CatalogueItemDomainType;
  label?: string;
  model?: Uuid;
  breadcrumbs?: Breadcrumb[];
  parentDataClass?: Uuid;
}

export interface DataTypeDescriptor {
  [key: string]: any;
  domainType: CatalogueItemDomainType;
  label: string;
  description?: string;
}

export interface DataTypeProvider {
  name: string;
  displayName: string;
  version: Version;
  dataTypes: DataTypeDescriptor[];
}

export interface DataTypeReference {
  [key: string]: any;
  id: Uuid;
}

export interface DataType {
  [key: string]: any;
  id?: Uuid;
  domainType: CatalogueItemDomainType;
  label: string;
  description?: string;
  model?: Uuid;
  breadcrumbs?: Breadcrumb[];
  enumerationValues?: EnumerationValue[];
  referenceClass?: ReferenceClass;
  classifiers?: CatalogueItemReference[];
}

export type DataTypeDetail = DataType & Securable & Historical;

export type DataTypeIndexResponse = MdmIndexResponse<DataType>;
export type DataTypeDetailResponse = MdmResponse<DataTypeDetail>;
