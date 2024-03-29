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
import {
  RequestSettings,
  QueryParameters,
  ModelDomainType
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: versionLink
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/

export class MdmVersioningResource extends MdmResource {
  commonAncestor(
    modelDomainType: string | ModelDomainType,
    modelId: string,
    otherModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestVersion(
    modelDomainType: string | ModelDomainType,
    modelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/latestVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated use {@link MdmMergeResource.mergeDiff} instead. This endpoint is maintained until older Merge UIs have been deprecated.
   */
  mergeDiff(
    modelDomainType: string | ModelDomainType,
    modelId: string,
    otherModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated use {@link MdmMergeResource.currentMainBranch} instead. This endpoint is maintained until older Merge UIs have been deprecated.
   */
  currentMainBranch(
    modelDomainType: string | ModelDomainType,
    modelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/currentMainBranch`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  availableBranches(
    modelDomainType: string | ModelDomainType,
    modelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/availableBranches`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated use {@link MdmMergeResource.mergeInto} instead. This endpoint is maintained until older Merge UIs have been deprecated.
   */
  mergeInto(
    modelDomainType: string | ModelDomainType,
    sourceModelId: string,
    targetModelId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${modelDomainType}/${sourceModelId}/mergeInto/${targetModelId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }
}
