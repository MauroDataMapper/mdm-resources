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

import { FinalisePayload, ModelUpdatePayload } from '../mdm-model-types.model';
import {
  RequestSettings,
  QueryParameters,
  Uuid,
  FilterQueryParameters
} from '../mdm-common.model';
import {
  DataModelCreatePayload,
  DataModelCreateQueryParameters,
  DataModelSubsetPayload,
  SourceTargetIntersectionPayload
} from './mdm-data-model.model';
import { MdmModelDomainResource } from '../mdm-model-types.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * MDM resource for managing data models.
 *
 * Create new data models by placing them under folders using the {@link MdmDataModelResource.addToFolder} endpoint.
 *
 * @see {@link MdmDataClassResource}
 * @see {@link MdmDataElementResource}
 * @see {@link MdmDataTypeResource}
 */
export class MdmDataModelResource extends MdmModelDomainResource {
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('dataModels', config, restHandler);
  }

  /**
   * `HTTP GET` - Request the available default type providers for creating data models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
   */
  defaultDataTypes(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/providers/defaultDataTypeProviders`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request the available types for creating data models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelTypesResponse} containing an array of strings.
   */
  types(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/types`;
    return this.simpleGet(url, query, options);
  }

  removeAllUnusedDataClasses(
    dataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/clean`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  removeAllUnusedDataTypes(
    dataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/clean`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  listInFolder(
    folderId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP DELETE` - Removes the user access check for a data model to only be readable by authenticated users.
   *
   * @param id The unique identifier of the data model to update.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  removeReadByAuthenticated(
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${id}/readByAuthenticated`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Update a data model to be readable only to authenticated users.
   *
   * @param id The unique identifier of the data model to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  updateReadByAuthenticated(id: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${id}/readByAuthenticated`;
    return this.simplePut(url, {}, options);
  }

  /**
   * `HTTP DELETE` - Removes the user access check for a data model to be readable by either authenticated or anonymous users.
   *
   * @param id The unique identifier of the data model to update.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  removeReadByEveryone(
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${id}/readByEveryone`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Update a data model to be readable to both authenticated and anonymous users.
   *
   * @param id The unique identifier of the data model to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  updateReadByEveryone(id: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${id}/readByEveryone`;
    return this.simplePut(url, {}, options);
  }

  /**
   * Gets the hierarchical information for a Data Model, returning all child classes, elements and types.
   *
   * @param id The unique identifier of the data model to get.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelFullResponse} containing a single {@link DataModelFull} object,
   * including all details of the Data Model/Type/Class/Element hierarchy.
   */
  hierarchy(id: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${id}/hierarchy`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP PUT` - Finalise a draft version of a data model to make it final and read-only.
   *
   * @param dataModelId The unique identifier of the data model to finalise.
   * @param data The payload to pass to the request when finalising the data model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  finalise(
    dataModelId: Uuid,
    data: FinalisePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/finalise`;
    return this.simplePut(url, data, options);
  }

  /**
   * @deprecated Use {@link MdmModelDomainResource.create()} instead.
   */
  addToFolder(
    folderId: Uuid,
    data: DataModelCreatePayload,
    query?: DataModelCreateQueryParameters,
    options?: RequestSettings
  ) {
    return this.create(folderId, data, query, options);
  }

  updateDataModelInFolder(
    folderId: string,
    dataModelId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/folders/${folderId}/dataModels/${dataModelId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  moveDataModelToFolder(
    dataModelId: string,
    folderId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/folder/${folderId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  suggestLinks(
    dataModelId: string,
    otherModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/suggestLinks/${otherModelId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Performs a comparison between two data models and returns the differences between them.
   *
   * @param leftModelId The unique identifier of the data model on the left (source) side of the comparison.
   * @param rightModelId The unique identifier of the data model on the right (target) side of the comparison.
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
    const url = `${this.apiEndpoint}/dataModels/${leftModelId}/diff/${rightModelId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request the list of  data Elements on a  data model.
   *
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataElementIndexResponse} containing a list of {@link DataElements} items.
   *
   * @see {@link MdmDataModelResource.get}
   */
  dataElements(
    dataModelId: Uuid,
    query?: FilterQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataElements`;
    return this.simpleGet(url, query, options);
  }

  removeAll(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  latestModelVersion(
    dataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestModelVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestFinalisedModel(
    dataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestFinalisedModel`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request a full model version tree for a Data Model.
   *
   * @param id The unique identifier of the Data Model.
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
    const url = `${this.apiEndpoint}/dataModels/${id}/modelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a simplified model version tree for a Data Model.
   *
   * @param id The unique identifier of the Data Model.
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
    const url = `${this.apiEndpoint}/dataModels/${id}/simpleModelVersionTree`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP PUT` - Restores a temporarily deleted data model.
   *
   * @param dataModelId The unique identifier of the data model to restore.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   *
   * `403 Forbidden` - user is not an administrator.
   *
   * @description **Note:** this endpoint may only be accessed by an administrator.
   *
   * This operation has no affect on _permanently_ deleted data models, only those temporarily marked as "deleted". Any
   * permanently deleted data models are unretrievable.
   *
   * @see {@link MdmDataModelResource.remove}
   */
  undoSoftDelete(dataModelId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/dataModels/${dataModelId}/undoSoftDelete`;
    return this.simplePut(url, {}, options);
  }

  /**
   * `HTTP PUT` - Import a data type into specified data model.
   *
   * @param dataModelId The unique identifier of the target data model.
   * @param otherDataModelId The unique identifier of the data model the imported data type exists under.
   * @param otherDataTypeId The unique identifier of the imported data type.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  importDataType(
    dataModelId: Uuid,
    otherDataModelId: Uuid,
    otherDataTypeId: Uuid,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${otherDataTypeId}`;
    return this.simplePut(url, {}, options);
  }

  /**
   * `HTTP DELETE` - Removes an imported data type from specified data model.
   *
   * @param dataModelId The unique identifier of the target data model.
   * @param otherDataModelId The unique identifier of the data model the imported data type exists under.
   * @param otherDataTypeId The unique identifier of the imported data type to remove.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeImportedDataType(
    dataModelId: Uuid,
    otherDataModelId: Uuid,
    otherDataTypeId: Uuid,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${otherDataTypeId}`;
    return this.simpleDelete(url, {}, options);
  }

  /**
   * `HTTP PUT` - Import a data class into specified data model.
   *
   * @param dataModelId The unique identifier of the target data model.
   * @param otherDataModelId The unique identifier of the data model the imported data class exists under.
   * @param otherDataClassId The unique identifier of the imported data class.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  importDataClass(
    dataModelId: Uuid,
    otherDataModelId: Uuid,
    otherDataClassId: Uuid,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
    return this.simplePut(url, {}, options);
  }

  /**
   * `HTTP DELETE` - Removes an imported data class from specified data model.
   *
   * @param dataModelId The unique identifier of the targetdata model.
   * @param otherDataModelId The unique identifier of the data model the imported data class exists under.
   * @param otherDataClassId The unique identifier of the imported data class to remove.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeImportedDataClass(
    dataModelId: Uuid,
    otherDataModelId: Uuid,
    otherDataClassId: Uuid,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
    return this.simpleDelete(url, {}, options);
  }

  /**
   * `HTTP PUT` - Copy a subset of a Data Model to another Data Model. Define which Data Elements to add/remove and the related
   * schema will also be copied to the target as well.
   *
   * @param sourceId The unique identifier of the source Data Model to copy from.
   * @param targetId The unique identifier of the target Data Model to copy to.
   * @param payload The payload containing details on what to copy.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  copySubset(
    sourceId: Uuid,
    targetId: Uuid,
    payload: DataModelSubsetPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${sourceId}/subset/${targetId}`;
    return this.simplePut(url, payload, options);
  }

  /**
   * `HTTP GET` - Identify the intersection between two Data Models, determining what are common between them.
   * Will provide a list of Data Element identifiers from the source model that match what is in the target model.
   *
   * @param sourceId The unique identifier of the source Data Model to copy from.
   * @param targetId The unique identifier of the target Data Model to copy to.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelIntersectionResponse} containing a {@link DataModelIntersection} object.
   */
  intersects(
    sourceId: Uuid,
    targetId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${sourceId}/intersects/${targetId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Identify the intersections between a source Data Model and many target Data Models, determining
   * for each target the data elements - checking only the list of data elements provided in the request body - from the
   * source which exist in the target.
   * Will provide a collection of SourceTargetIntersection, each of which lists the data elements intersecting between the
   * source and target.
   *
   * @param sourceId The unique identifier of the source Data Model
   * @param data The payload of the request containing all the details for the intersection. The payload is a SourceTargetIntersectionPayload
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link MdmIndexResponse} containing a collection of {@link SourceTargetIntersection} objects.
   */
  intersectsMany(
    sourceId: Uuid,
    data: SourceTargetIntersectionPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${sourceId}/intersectsMany`;
    return this.simplePost(url, data, options);
  }
}
