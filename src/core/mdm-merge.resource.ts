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

import {
  CommitMergePayload,
  MergableMultiFacetAwareDomainType
} from './mdm-merge.model';
import { QueryParameters, RequestSettings, Uuid } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * MDM resource for merge operations against catalogue items.
 *
 * Note: these endpoints work for the latest path-based merge responses. To use the original Mauro merge data, see the deprecated
 * {@link MdmVersioningResource} endpoints.
 */
export class MdmMergeResource extends MdmResource {
  /**
   * `HTTP GET` - Locates the catalogue item that acts as the "main" branch of the provided catalogue item.
   *
   * @param domainType The domain type of the catalogue item. Only supported {@link MultiFacetAwareDomainType} values are allowed.
   * @param id The unique identifier of the current item.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MainBranchResponse} containing a {@link MainBranchItem} object.
   */
  currentMainBranch(
    domainType: MergableMultiFacetAwareDomainType,
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${domainType}/${id}/currentMainBranch`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a collection of differences between two catalogue items for the purpose of merging them together.
   *
   * @param domainType The domain type of catalogue items. Only supported {@link MultiFacetAwareDomainType} values are allowed.
   * @param sourceId The unique identifier of the source catalogue item - the catalogue item that is going to be _merged_ into the _target_.
   * @param targetId The unique identifier of the target catalogue item - the catalogue item that the _source_ will be _merged_ into.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MergeDiffResponse} containing a {@link MergeDiff} object.
   */
  mergeDiff(
    domainType: MergableMultiFacetAwareDomainType,
    sourceId: Uuid,
    targetId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const queryString = this.generateQueryString({
      isLegacy: false, // Required to use latest JSON response format
      ...query
    });
    const url = `${this.apiEndpoint}/${domainType}/${sourceId}/mergeDiff/${targetId}${queryString}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP PUT` - Merges a _source_ catalogue item into a _target_ catalogue item.
   *
   * This is achieved by applying a list of _patches_ to the _target_ catalogue item to save/override previous values.
   *
   * @param domainType The domain type of catalogue items. Only supported {@link MultiFacetAwareDomainType} values are allowed.
   * @param sourceId The unique identifier of the source catalogue item - the catalogue item that is going to be _merged_ into the _target_.
   * @param targetId The unique identifier of the target catalogue item - the catalogue item that the _source_ will be _merged_ into.
   * @param data The payload of the request containing all the patch details.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link CommittedMergeResponse} containing a {@link CommittedMergeCatalogueItem}.
   */
  mergeInto(
    domainType: MergableMultiFacetAwareDomainType,
    sourceId: Uuid,
    targetId: Uuid,
    data: CommitMergePayload,
    options?: RequestSettings
  ) {
    const queryString = this.generateQueryString({
      isLegacy: false // Required to use latest JSON response format
    });
    const url = `${this.apiEndpoint}/${domainType}/${sourceId}/mergeInto/${targetId}${queryString}`;
    return this.simplePut(url, data, options);
  }
}
