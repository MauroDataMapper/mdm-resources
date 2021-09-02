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

import { ReferenceDataElement } from './mdm-reference-data-element.model';
import { FilterQueryParameters, MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';

export interface ReferenceDataValue {
  id: Uuid;
  rowNumber: number;
  value: string;
  referenceDataElement: ReferenceDataElement;
}

export interface ReferenceDataValueRow {
  columns: ReferenceDataValue[];
}

export interface ReferenceDataValueTable {
  /**
   * Gets the number of items in the returned list.
   */
  count: number;

  /**
   * Gets the list of items returned from the API.
   */
  rows: ReferenceDataValueRow[];
}

export type ReferenceDataValueTableResponse = MdmResponse<ReferenceDataValueTable>;
export type ReferenceDataValueIndexResponse = MdmIndexResponse<ReferenceDataValue>;
export type ReferenceDataValueDetailResponse = MdmResponse<ReferenceDataValue>;

export interface ReferenceDataValueFilterQueryParameters extends FilterQueryParameters {
  asRows?: boolean;
}

export interface ReferenceDataValueSearchQueryParameters extends ReferenceDataValueFilterQueryParameters {
  search?: string;
}