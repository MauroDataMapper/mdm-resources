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
  FilterQueryParameters,
  QueryParameters,
  RequestSettings,
  Uuid
} from './mdm-common.model';
import { ModelChildCreatePayload, ModelDomain } from './mdm-model-types.model';
import {
  MdmResource,
  MdmResourcesConfiguration,
  MdmRestHandler
} from './mdm-resource';

/**
 * Base class representing all the operations that a typical child domain of a model can perform.
 *
 * Model domain types allowed are defined by the {@link ModelDomain} type.
 *
 * Child domains refer to elements within the model domain e.g. data types for data models.
 */
export class MdmModelChildDomainResource extends MdmResource {
  /**
   * Constructs a new `MdmCommonDomainResource`.
   *
   * @param modelDomain The domain type for the model operations - the parent domain of the children. This must be the pluralised form of the domain
   * name e.g. 'dataModels', etc.
   * @param domain The domain type for the child operations. This must be the pluralised form of the domain name e.g. 'dataTypes', 'dataElements', etc.
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    protected modelDomain: ModelDomain,
    protected domain: string,
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super(config, restHandler);
  }

  /**
   * `HTTP GET` - Request the list of child items for a model.
   *
   * @param modelId The unique identifier of the parent model.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmIndexResponse} containing a list of items. The items will be representative
   * of the type of {@link domain} they are for.
   *
   * @see {@link MdmModelChildResource.get}
   */
  list(
    modelId: Uuid,
    query?: FilterQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.modelDomain}/${modelId}/${this.domain}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a child item from a model.
   *
   * @param modelId The unique identifier of the parent model.
   * @param id A unique identifier of the item to fetch.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmResponse} containing an item in the body. The item will be representative
   * of the type of {@link domain} it is for.
   */
  get(
    modelId: Uuid,
    id: string,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.modelDomain}/${modelId}/${this.domain}/${id}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a new item under a chosen model.
   *
   * @param modelId The unique identifier of the parent model.
   * @param data The payload of the request containing all the details to create.
   * @param query Optional query parameters to control the creation of the item, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link MdmResponse} containing an item in the body. The item will be representative
   * of the type of {@link domain} it is for.
   */
  create<P extends ModelChildCreatePayload, Q extends QueryParameters>(
    modelId: Uuid,
    data: P,
    query?: Q,
    options?: RequestSettings
  ) {
    const queryString = this.generateQueryString(query);
    const url = `${this.apiEndpoint}/${this.modelDomain}/${modelId}/${
      this.domain
    }${queryString && queryString.length > 0 ? queryString : ''}`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP PUT` - Updates an existing model item.
   *
   * @param modelId The unique identifier of the parent model.
   * @param id The unique identifier of the item to update.
   * @param data The payload of the request containing all the details to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link MdmResponse} containing an item in the body. The item will be representative
   * of the type of {@link domain} it is for.
   */
  update<P extends ModelChildCreatePayload>(
    modelId: Uuid,
    id: Uuid,
    data: P,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.modelDomain}/${modelId}/${this.domain}/${id}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing item from a model.
   *
   * @param id The unique identifier of the item to remove.
   * @param query Optional query parameters to control the deletion of the item, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(
    modelId: Uuid,
    id: string,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.modelDomain}/${modelId}/${this.domain}/${id}`;
    return this.simpleDelete(url, query, options);
  }
}
