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

import { FinalisePayload } from '../mdm-model-types.model';
import { RequestSettings, QueryParameters, Uuid } from '../mdm-common.model';
import {
  CodeSetCreatePayload,
  CodeSetUpdatePayload
} from './mdm-code-set.model';
import { MdmModelDomainResource } from '../mdm-model-types.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * MDM resources for the management of code sets.
 */
export class MdmCodeSetResource extends MdmModelDomainResource {
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('codeSets', config, restHandler);
  }

  /**
   * `HTTP PUT` - Finalise a draft version of a code set to make it final and read-only.
   *
   * @param codeSetId The unique identifier of the code set to finalise.
   * @param data The payload to pass to the request when finalising the data model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   */
  finalise(codeSetId: Uuid, data: FinalisePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/finalise`;
    return this.simplePut(url, data, options);
  }

  /**
   * @deprecated Use {@link MdmModelDomainResource.create()} instead.
   */
  addToFolder(
    folderId: Uuid,
    data: CodeSetCreatePayload,
    options?: RequestSettings
  ) {
    return this.create(folderId, data, null, options);
  }

  listCodeSetsInFolder(
    folderId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeTerm(
    codeSetId: string,
    termId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  alterTerm(
    codeSetId: string,
    termId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  moveCodeSetToFolder(
    codeSetId: string,
    folderId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/folder/${folderId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Performs a comparison between two code sets and returns the differences between them.
   *
   * @param leftModelId The unique identifier of the code set on the left (source) side of the comparison.
   * @param rightModelId The unique identifier of the code set on the right (target) side of the comparison.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DiffCollectionResponse} containing a list of {@link DiffCollection}.
   */
  diff(
    leftModelId: Uuid,
    rightModelId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${leftModelId}/diff/${rightModelId}`;
    return this.simpleGet(url, query, options);
  }

  removeAll(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  terms(
    codeSetId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeReadByAuthenticated(
    codeSetId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByAuthenticated(
    codeSetId: string,
    data?,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  removeReadByEveryone(
    codeSetId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByEveryone(
    codeSetId: string,
    data?,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  latestModelVersion(
    codeSetId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/latestModelVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestFinalisedModel(
    codeSetId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/latestFinalisedModel`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request a full model version tree for a Code Set.
   *
   * @param id The unique identifier of the code set.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ModelVersionTreeResponse} containing a list of {@link ModelVersionItem} objects.
   */
  modelVersionTree(
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${id}/modelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a simplified model version tree for a Code Set.
   *
   * @param id The unique identifier of the code set.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link BasicModelVersionTreeResponse} containing a list of {@link BasicModelVersionItem} objects.
   */
  simpleModelVersionTree(
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/codeSets/${id}/simpleModelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP PUT` - Restores a temporarily deleted code set.
   *
   * @param codeSetId The unique identifier of the code set to restore.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   *
   * `403 Forbidden` - user is not an administrator.
   *
   * @description **Note:** this endpoint may only be accessed by an administrator.
   *
   * This operation has no affect on _permanently_ deleted code set, only those temporarily marked as "deleted". Any
   * permanently deleted code set are unretrievable.
   *
   * @see {@link MdmCodeSetResource.remove}
   */
  undoSoftDelete(codeSetId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/codeSets/${codeSetId}/undoSoftDelete`;
    return this.simplePut(url, {}, options);
  }
}
