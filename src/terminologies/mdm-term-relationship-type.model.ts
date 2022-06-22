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

import { Historical, Securable } from '../mdm-model-types.model';
import {
  CatalogueItem,
  MdmIndexResponse,
  MdmResponse,
  Navigatable,
  Uuid
} from '../mdm-common.model';
import { TermDetail } from './mdm-term.model';

export interface TermRelationshipType extends CatalogueItem, Navigatable {
  [key: string]: any;
  model?: Uuid;
  displayLabel: string;
  label?: string;
  parentalRelationship: boolean;
  childRelationship: boolean;
}

export type TermRelationshipTypeDetail = TermRelationshipType &
  Securable &
  Historical;

export type TermRelationshipTypeIndexResponse = MdmIndexResponse<
  TermRelationshipType
>;
export type TermRelationshipTypeDetailResponse = MdmResponse<
  TermRelationshipTypeDetail
>;

export interface TermRelationship extends CatalogueItem, Navigatable {
  [key: string]: any;
  model?: Uuid;
  displayLabel: string;
  label?: string;
  relationshipType: TermRelationshipType;
  sourceTerm: TermDetail;
  targetTerm: TermDetail;
}

export type TermRelationshipIndexResponse = MdmIndexResponse<TermRelationship>;
export type TermRelationshipDetailResponse = MdmResponse<TermRelationship>;
