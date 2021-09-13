/*
Copyright 2021 University of Oxford

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

import { Historical, Securable } from './mdm-model-types.model';
import { MdmIndexResponse, MdmResponse, Navigatable, Uuid } from './mdm-common.model';

export type TermRelationshipTypeType = 'TermRelationshipType';

export interface TermRelationshipType {
  [key: string]: any;
  id?: Uuid;
  domainType: TermRelationshipTypeType;
  model?: Uuid;
  displayLabel: string;
  label?: string;
}

export type TermRelationshipTypeDetail =
  TermRelationshipType
  & Navigatable
  & Securable
  & Historical;

export type TermRelationshipTypeIndexResponse = MdmIndexResponse<TermRelationshipType & Navigatable>;
export type TermRelationshipTypeDetailResponse = MdmResponse<TermRelationshipTypeDetail>;