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

import { DataTypeProvider } from './mdm-data-type.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, SecurableModel, Versionable } from './mdm-model-types.model';

export type ReferenceDataModelType = 'ReferenceDataModel';

export interface ReferenceDataModel extends Modelable {
  type?: ReferenceDataModelType;
  [key: string]: any;
}

export type ReferenceDataModelDetail =
  ReferenceDataModel
  & ModelableDetail
  & SecurableModel
  & Historical
  & Branchable
  & Versionable
  & Finalisable;

export type ReferenceDataModelIndexResponse = MdmIndexResponse<ReferenceDataModel>;
export type ReferenceDataModelDetailResponse = MdmResponse<ReferenceDataModelDetail>;

export type ReferenceDataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;