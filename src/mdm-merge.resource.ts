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

import { CommitMergePayload } from "mdm-merge.model";
import { ModelDomainType, QueryParameters, RequestSettings, Uuid } from "./mdm-common.model";
import { MdmResource } from "./mdm-resource";

export class MdmMergeResource extends MdmResource {
    apiEndpoint: any;

      /**
   * `HTTP GET` - Request a the current main branch of the current item.
   *
   * @param modelDomainType The model domain type of item
   * @param modelId The unique identifier of the item.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a object containing the main branch.
   */
    currentMainBranch(modelDomainType: string | ModelDomainType, modelId: string, query?: QueryParameters, options?: RequestSettings) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/currentMainBranch`;
        return this.simpleGet(url, query, options);
    }
    
      /**
   * `HTTP PUT` - Updates an existing data model.
   *
   * @param modelDomainType The model domain type of item
   * @param sourceModelId The id of the source model
   * @param targetModelId The id of the target model
   * @param data The payload of the request containing all the details for merge
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK`.
   */

    mergeInto(
        modelDomainType: string | ModelDomainType,
        sourceModelId: Uuid,
        targetModelId: Uuid,
        data: CommitMergePayload,
        restHandlerOptions?: RequestSettings
      ) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${sourceModelId}/mergeInto/${targetModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
      }

}