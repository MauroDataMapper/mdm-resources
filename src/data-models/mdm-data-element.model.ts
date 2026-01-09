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

import { Historical, Securable } from '../mdm-model-types.model';
import {
  Breadcrumb,
  CatalogueItemDomainType,
  MdmIndexResponse,
  MdmResponse,
  PageParameters,
  Payload,
  QueryParameters,
  SortParameters,
  Uuid
} from '../mdm-common.model';
import { DataType, DataTypeReference } from './mdm-data-type.model';

export type DataElementIndexParameters = SortParameters &
  PageParameters &
  QueryParameters;

export interface DataElement {
  [key: string]: any;
  id?: Uuid;
  domainType: CatalogueItemDomainType;
  label: string;
  description?: string;
  model?: Uuid;
  dataClass?: Uuid;
  dataType?: DataType | DataTypeReference;
  breadcrumbs?: Breadcrumb[];
  minMultiplicity?: number;
  maxMultipicity?: number;
}



export interface CopyDataElementPayload extends Payload {
  copyLabel : string;
  copyPermissions: boolean;
}

export type DataElementDetail = DataElement & Securable & Historical;

export type DataElementIndexResponse = MdmIndexResponse<DataElement>;
export type DataElementDetailResponse = MdmResponse<DataElementDetail>;
