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
import {
  RequestSettings,
  QueryParameters,
  Uuid,
  FilterQueryParameters,
  RemoveQueryParameters
} from './mdm-common.model';
import {
  FinalisePayload,
  ModelCreatePayload,
  ModelUpdatePayload
} from './mdm-model-types.model';
import { MdmModelDomainResource } from './mdm-model-types.resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmRestHandler } from './mdm-rest-handler';

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
   * `HTTP POST` - Creates a new terminology under a chosen folder.
   *
   * @param folderId The unique identifier of the folder to create the terminology under.
   * @param data The payload of the request containing all the details for the terminology to create.
   * @param query Optional query parameters to control the creation of the terminology, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
   */
  addToFolder(
    folderId: Uuid,
    data: ModelCreatePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/folders/${folderId}/terminologies`;
    return this.simplePost(url, data, options);
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

  /**
   * `HTTP GET` - Request the list of terminologies.
   *
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link TerminologyIndexResponse} containing a list of {@link Terminology} items.
   *
   * @see {@link MdmTerminologyResource.get}
   */
  list(query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/terminologies`;
    return this.simpleGet(url, query, options);
  }

  removeAll(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP DELETE` - Removes an existing terminology, either temporarily or permanently.
   *
   * @param terminologyId The unique identifier of the terminology to remove.
   * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   *
   * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
   * the operation is permanent or not. Setting this to `false` allows the terminology to remain in Mauro but hidden; the
   * operation may also be reversed by an administrator using the {@link MdmTerminologyResource.undoSoftDelete} endpoint.
   *
   * If {@link ModelRemoveParameters.permanent} is set to `true`, then the terminology will be permanently deleted with
   * no method of retrieving it.
   *
   * @see {@link MdmDataModelResource.undoSoftDelete}
   */
  remove(
    terminologyId: Uuid,
    query: RemoveQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing terminology.
   *
   * @param terminologyId The unique identifier of the terminology to update.
   * @param data The payload of the request containing all the details for the terminology to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
   */
  update(
    terminologyId: Uuid,
    data: ModelUpdatePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a terminology.
   *
   * @param dataModelId Either a unique identifier of the terminology, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
   *
   * This function does allow either an ID or a path string, but should ideally be used only for IDs. For using paths,
   * see the {@link MdmCatalogueItemResource.getPath()} function instead; there are no guarantees this function will support
   * paths in the future, but will currently be supported for backwards compatibility.
   */
  get(terminologyId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    let url = '';
    if (this.isGuid(terminologyId)) {
      url = `${this.apiEndpoint}/terminologies/${terminologyId}`;
    } else {
      url = `${this.apiEndpoint}/terminologies/path/${terminologyId}`;
    }

    return this.simpleGet(url, query, options);
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
}
