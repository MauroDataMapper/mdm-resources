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
  CatalogueItemReference,
  MdmIndexResponse,
  MdmResponse
} from '../mdm-common.model';
import {
  Modelable,
  ModelCreatePayload,
  ModelDomainDetail,
  ModelUpdatePayload
} from '../mdm-model-types.model';

export type CodeSetDataType = 'CodeSet';

export interface CodeSet extends Modelable {
  [key: string]: any;
  type?: CodeSetDataType;
}

export type CodeSetDetail = CodeSet & ModelDomainDetail;

export type CodeSetIndexResponse = MdmIndexResponse<CodeSet>;
export type CodeSetDetailResponse = MdmResponse<CodeSetDetail>;

export interface CodeSetCreatePayload extends ModelCreatePayload {
  terms?: CatalogueItemReference[];
}

export interface CodeSetUpdatePayload extends ModelUpdatePayload {
  terms?: CatalogueItemReference[];
}
