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
import { FinalisePayload } from '../mdm-model-types.model';
import { QueryParameters, RequestSettings, Uuid } from '../mdm-common.model';
import { MdmModelDomainResource } from '../mdm-model-types.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * MDM resource for the management of Reference Data Models.
 */
export class MdmReferenceDataModelResource extends MdmModelDomainResource {
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('referenceDataModels', config, restHandler);
  }

  /**
   * `HTTP GET` - Request the available default type providers for creating reference data models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ReferenceDataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
   */
  defaultDataTypes(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/providers/defaultDataTypeProviders`;
    return this.simpleGet(url, query, options);
  }

  removeReadByAuthenticated(
    referenceDataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByAuthenticated(
    referenceDataModelId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  removeReadByEveryone(
    referenceDataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByEveryone(
    referenceDataModelId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  moveReferenceDataModelToFolder(
    referenceDataModelId: string,
    folderId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/folder/${folderId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP PUT` - Restores a temporarily deleted reference data model.
   *
   * @param referenceDataModelId The unique identifier of the reference data model to restore.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link ReferenceDataModelDetailResponse} containing a {@link ReferenceDataModelDetail} object.
   *
   * `403 Forbidden` - user is not an administrator.
   *
   * @description **Note:** this endpoint may only be accessed by an administrator.
   *
   * This operation has no affect on _permanently_ deleted referenced data models, only those temporarily marked as "deleted". Any
   * permanently deleted reference data models are unretrievable.
   *
   * @see {@link MdmReferencedDataModelResource.remove}
   */
  undoSoftDelete(referenceDataModelId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/referenceDataModels/${referenceDataModelId}/undoSoftDelete`;
    return this.simplePut(url, {}, options);
  }

  /**
   * `HTTP PUT` - Finalise a draft version of a reference data model to make it final and read-only.
   *
   * @param referenceDataModelId The unique identifier of the reference data model to finalise.
   * @param data The payload to pass to the request when finalising the reference data model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ReferenceDataModelDetailResponse} containing a {@link ReferenceDataModelDetail} object.
   */
  finalise(
    referenceDataModelId: Uuid,
    data: FinalisePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/finalise`;
    return this.simplePut(url, data, options);
  }

  latestModelVersion(
    referenceDataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/latestModelVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestFinalisedModel(
    referenceDataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/latestFinalisedModel`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request a full model version tree for a Reference Data Model.
   *
   * @param id The unique identifier of the reference data model.
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
    const url = `${this.apiEndpoint}/referenceDataModels/${id}/modelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a simplified model version tree for a Reference Data Model.
   *
   * @param id The unique identifier of the reference data model.
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
    const url = `${this.apiEndpoint}/referenceDataModels/${id}/simpleModelVersionTree`;
    return this.simpleGet(url, query, options);
  }
}
