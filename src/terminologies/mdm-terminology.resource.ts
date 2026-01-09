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
import { RequestSettings, QueryParameters, Uuid } from '../mdm-common.model';
import { FinalisePayload, ModelCreatePayload } from '../mdm-model-types.model';
import { MdmModelDomainResource } from '../mdm-model-types.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';
import { CopyModelPayload } from '../mdm-container-types.model';

/**
 * MDM resource for the management of terminologies.
 *
 * @see {@link MdmTermResource}
 */
export class MdmTerminologyResource extends MdmModelDomainResource {
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('terminologies', config, restHandler);
  }

  /**
   * `HTTP PUT` - Finalise a draft version of a terminology to make it final and read-only.
   *
   * @param terminologyId The unique identifier of the terminology to finalise.
   * @param data The payload to pass to the request when finalising the terminology.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
   */
  finalise(
    terminologyId: Uuid,
    data: FinalisePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/finalise`;
    return this.simplePut(url, data, options);
  }

  /**
   * @deprecated Use {@link MdmModelDomainResource.create()} instead.
   */
  addToFolder(
    folderId: Uuid,
    data: ModelCreatePayload,
    options?: RequestSettings
  ) {
    return this.create(folderId, data, null, options);
  }

  tree(
    terminologyId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/tree`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  moveTerminologyToFolder(
    terminologyId: string,
    folderId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/folder/${folderId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Performs a comparison between two terminologies and returns the differences between them.
   *
   * @param leftModelId The unique identifier of the terminology on the left (source) side of the comparison.
   * @param rightModelId The unique identifier of the terminology on the right (target) side of the comparison.
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
    const url = `${this.apiEndpoint}/terminologies/${leftModelId}/diff/${rightModelId}`;
    return this.simpleGet(url, query, options);
  }

  removeAll(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  termRelationships(
    terminologyId: string,
    termRelationshipTypeId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  getTermRelationship(
    terminologyId: string,
    termRelationshipTypeId: string,
    termRelationshipId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${termRelationshipId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeReadByAuthenticated(
    terminologyId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByAuthenticated`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }
  updateReadByAuthenticated(
    terminologyId: string,
    data?,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByAuthenticated`;
    return this.simplePut(url, data, restHandlerOptions);
  }
  removeReadByEveryone(
    terminologyId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByEveryone`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }
  updateReadByEveryone(
    terminologyId: string,
    data?,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/readByEveryone`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  latestModelVersion(
    terminologyId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/latestModelVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestFinalisedModel(
    terminologyId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/latestFinalisedModel`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request a full model version tree for a Terminology.
   *
   * @param id The unique identifier of the Terinology.
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
    const url = `${this.apiEndpoint}/terminologies/${id}/modelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a simplified model version tree for a Terminology.
   *
   * @param id The unique identifier of the terminology.
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
    const url = `${this.apiEndpoint}/terminologies/${id}/simpleModelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP PUT` - Restores a temporarily deleted terminology.
   *
   * @param terminologyId The unique identifier of the terminology to restore.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
   *
   * `403 Forbidden` - user is not an administrator.
   *
   * @description **Note:** this endpoint may only be accessed by an administrator.
   *
   * This operation has no affect on _permanently_ deleted terminologies, only those temporarily marked as "deleted". Any
   * permanently deleted terminologies are unretrievable.
   *
   * @see {@link MdmTerminologyResource.remove}
   */
  undoSoftDelete(terminologyId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/terminologies/${terminologyId}/undoSoftDelete`;
    return this.simplePut(url, {}, options);
  }

  /**
   * `HTTP PUT` - Copies a terminology to a new folder.
   *
   * @param sourceTerminologyId The unique identifier of the terminology to copy.
   * @param CopyContainerPayload The payload to pass to the request when copying the terminology.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
   */
  copy(
    sourceTerminologyId: Uuid,
    copyModelPayload: CopyModelPayload
  ) {
    const url = `${this.apiEndpoint}/terminologies/${sourceTerminologyId}/copy`;
    return this.simplePut(url, copyModelPayload);
  }
}
