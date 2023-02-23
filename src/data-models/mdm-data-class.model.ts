/*
Copyright 2020-2023 University of Oxford and NHS England

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
  QueryParameters,
  SortParameters,
  Uuid
} from '../mdm-common.model';
import { DataElementDetail } from './mdm-data-element.model';

export type DataClassIndexParameters = SortParameters &
  PageParameters &
  QueryParameters;

export interface DataClass {
  [key: string]: any;
  id?: Uuid;
  domainType: CatalogueItemDomainType;
  label: string;
  description?: string;
  model?: Uuid;
  parentDataClass?: Uuid;
  breadcrumbs?: Breadcrumb[];
  minMultiplicity?: number;
  maxMultipicity?: number;
}

export type DataClassDetail = DataClass & Securable & Historical;

export type DataClassIndexResponse = MdmIndexResponse<DataClass>;
export type DataClassDetailResponse = MdmResponse<DataClassDetail>;

/**
 * Represents information for a Data Class relating to a hierarchy.
 */
export interface DataClassNode {
  /**
   * The child data classes under this Data Class.
   */
  dataClasses?: DataClassFull[];

  /**
   * The Data Elements under this Data Class.
   */
  dataElements?: DataElementDetail[];
}

export type DataClassFull = DataClassDetail & DataClassNode;
