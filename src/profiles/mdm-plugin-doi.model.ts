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
  CatalogueItem,
  MdmResponse,
  QueryParameters
} from '../mdm-common.model';

export type DoiState = 'draft' | 'final' | 'retired' | 'not submitted';
export type DoiSubmissionState = 'draft' | 'finalise' | 'retire';

/**
 * Represents the status of a Digital Object Identifier on a catalogue item.
 */
export interface DoiStatus {
  [key: string]: any;
  /**
   * Gets the DOI applied to the catalogue item, if available.
   */
  identifier?: string;

  /**
   * Gets the current status of the DOI.
   */
  status: DoiState;
}

export type DoiStatusResponse = MdmResponse<DoiStatus>;

/**
 * Represents parameters that can be applied during the submission of a Digital Object Identifier.
 *
 * @see {@link MdmPluginDoiResource.save}
 */
export interface DoiSubmissionQueryParameters extends QueryParameters {
  /**
   * Declare what state the DOI should be in when created. If not provided, the default of `final` is used.
   */
  submissionType?: DoiSubmissionState;
}

export type DoiSubmissionStatus = CatalogueItem & { [key: string]: any };

export type DoiSubmissionResponse = MdmResponse<DoiSubmissionStatus>;

export type DoiResolvedItem = CatalogueItem & { [key: string]: any };

export type DoiResolvedItemResponse = MdmResponse<DoiResolvedItem>;
