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

import { Historical, Securable } from 'mdm-model-types.model';
import { ReferenceDataType } from 'mdm-reference-data-type.model';
import { Breadcrumb, CatalogueItem, MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';

export interface ReferenceDataElement extends CatalogueItem {
  label: string;
  description?: string;
  model?: Uuid;
  breadcrumbs?: Breadcrumb[];
  referenceDataType?: ReferenceDataType;
  [key: string]: any;
}

export type ReferenceDataElementDetail =
  ReferenceDataType
  & Securable
  & Historical;

export type ReferenceDataElementIndexResponse = MdmIndexResponse<ReferenceDataElement>;
export type ReferenceDataElementDetailResponse = MdmResponse<ReferenceDataElementDetail>;