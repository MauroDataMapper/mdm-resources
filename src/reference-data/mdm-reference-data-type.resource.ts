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
import { MdmModelChildDomainResource } from '../mdm-model-child.resource';
import { RequestSettings, Uuid } from '../mdm-common.model';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * Resource for managing Reference Data Types.
 *
 * All responses will return either {@link ReferenceDataType} (for lists) or
 * {@link ReferenceDataTypeDetail} (for individual operations).
 */
export class MdmReferenceDataTypeResource extends MdmModelChildDomainResource {
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('referenceDataModels', 'referenceDataTypes', config, restHandler);
  }

  /**
   * `HTTP POST` - Copies an existing Reference Data Type from one Reference Data Model to another target
   * Reference Data Model.
   *
   * @param targetModelId The unique indentifier of the target model to copy to.
   * @param sourceModelId The unique identifier of the source model.
   * @param sourceTypeId The unique identifier of the data type to copy.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ReferenceDataTypeDetailResponse} containing the new copy of a
   * {@link ReferenceDataTypeDetail} object.
   */
  copy(
    targetModelId: Uuid,
    sourceModelId: Uuid,
    sourceTypeId: Uuid,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.modelDomain}/${targetModelId}/${this.domain}/${sourceModelId}/${sourceTypeId}`;
    return this.simplePost(url, {}, options);
  }
}
