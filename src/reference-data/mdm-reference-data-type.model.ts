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
import {
  CatalogueItemDetail,
  CatalogueItemDomainType,
  MdmIndexResponse,
  MdmResponse,
  Uuid
} from '../mdm-common.model';
import {
  Historical,
  ModelChildCreatePayload,
  ModelChildItem,
  Securable
} from '../mdm-model-types.model';

export interface ReferenceDataEnumerationValue {
  id: Uuid;
  index: number;
  key: string;
  value: string;
  category?: string;
}

export interface ReferenceDataType extends CatalogueItemDetail, ModelChildItem {
  referenceEnumerationValues?: ReferenceDataEnumerationValue[];
}

export type ReferenceDataTypeDetail = ReferenceDataType &
  Securable &
  Historical;

export type ReferenceDataTypeIndexResponse = MdmIndexResponse<
  ReferenceDataType
>;
export type ReferenceDataTypeDetailResponse = MdmResponse<
  ReferenceDataTypeDetail
>;

export interface ReferenceDataEnumerationValueCreatePayload {
  key: string;
  value: string;
  category?: string;
}

/**
 * Payload for creating a new Reference Data Type.
 *
 * For primitives, just set the `domainType` to `ReferencePrimitiveType` and provide the other required fields
 * e.g. label.
 *
 * For enumeration types, also pass an array of {@link ReferenceDataEnumerationValueCreatePayload} objects to
 * define the enumeration values.
 */
export interface ReferenceDataTypeCreatePayload
  extends ModelChildCreatePayload {
  domainType:
    | CatalogueItemDomainType.ReferencePrimitiveType
    | CatalogueItemDomainType.ReferenceEnumerationType;
  referenceEnumerationValues?: ReferenceDataEnumerationValueCreatePayload[];
}
