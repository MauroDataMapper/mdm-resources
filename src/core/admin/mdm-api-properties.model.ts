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

import { MdmIndexResponse, MdmResponse, Uuid } from '../../mdm-common.model';

/**
 * Represents an API property in Mauro.
 *
 * An API property is a key/value pair that can be used in configuration scenarios.
 */
export interface ApiProperty {
  /**
   * The unique identifier of the API property. Not required if creating a new {@link ApiProperty}.
   */
  id?: Uuid;

  /**
   * The unique key name of this API property.
   */
  key: string;

  /**
   * The value assigned to this API property.
   */
  value: string;

  /**
   * State whether this API property is publicly visible to anonymous users. If `true` then only authenticated users will be able
   * to request and use this API property.
   */
  publiclyVisible?: boolean;

  /**
   * Optional category name to better group API properties together.
   */
  category?: string;

  /**
   * Gets the date/time this API property was last updated.
   */
  lastUpdated?: string;
}

export type ApiPropertyResponse = MdmResponse<ApiProperty>;
export type ApiPropertyIndexResponse = MdmIndexResponse<ApiProperty>;
