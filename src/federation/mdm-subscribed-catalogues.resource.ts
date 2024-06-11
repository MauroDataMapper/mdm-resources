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
import {
  SubscribedCatalogue,
  SubscribedDataModelPayload
} from './mdm-subscribed-catalogues.model';
import { RequestSettings, QueryParameters, Uuid } from '../mdm-common.model';
import { MdmCommonDomainResource } from '../mdm-common.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * MDM resource for managing subscribed catalogues and federated models.
 */
export class MdmSubscribedCataloguesResource extends MdmCommonDomainResource {
  /**
   * Constructs a new `MdmSubscribedCataloguesResource`.
   *
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('subscribedCatalogues', config, restHandler);
  }

  /**
   * `HTTP POST` - Creates a new Subscribed Catalogue.
   *
   * @param data The data to use for creation.
   * @param options Optional REST handler parameters.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link SubscribedCatalogueResponse} containing a {@link SubscribedCatalogue}.
   */
  save(data: SubscribedCatalogue, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/subscribedCatalogues`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP PUT` - Updates an existing Subscribed Catalogue.
   *
   * @param id The unique identifier of the Subscribed Catalogue to update.
   * @param data The data to use for the update.
   * @param options Optional REST handler parameters.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link SubscribedCatalogueResponse} containing a {@link SubscribedCatalogue}.
   */
  update(id: Uuid, data: SubscribedCatalogue, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${id}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Gets a list of all available connection types supported by Subscribed Catalogues.
   *
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link SubscribedCatalogueTypeResponse} containing a list of connnection type names.
   */
  types(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/types`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of all available authentication types supported by Subscribed Catalogues.
   *
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link SubscribedCatalogueAuthenticationTypeResponse} containing a list of connnection type names.
   */
  authenticationTypes(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/authenticationTypes`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of all published models from a Subscribed Catalogue.
   *
   * @param id The UUID of the Subscribed Catalogue to search in.
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link PublishedDataModelIndexResponse} containing a list of {@link PublishedDataModel} items.
   */
  listPublishedModels(
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/publishedModels`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of all federated models that this catalogue has subscribed to from a Subscribed Catalogue.
   *
   * @param id The unique identifier of the Subscribed Catalogue to search in.
   * @param queryStringParams Optional query string parameters for the GET request.
   * @param restHandlerOptions Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link SubscribedDataModelIndexResponse} containing a list of {@link SubscribedDataModel} items.
   */
  listSubscribedModels(
    id: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/subscribedModels`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP POST` - Federate a subscribed model to refresh.
   *
   * @param id The unique identifier of the Subscribed Model to federate.
   * @param options Optional REST handler parameters.
   * @returns The result of the `POST` request.
   * @deprecated no longer in use, perfomed as part of save operation
   *
   * `200 OK` - will return a {@link SubscribedDataModelResponse} containing a {@link SubscribedDataModel}.
   */
  federate(id: string, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/subscribedModels/${id}/federate`;
    return this.simplePost(url, null, options);
  }

  /**
   * `HTTP GET` - Gets a Subscribed Catalogue by ID.
   *
   * @param catalogueId The UUID of the Subscribed Catalogue to search in.
   * @param id The UUID of the subscription to get.
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link SubscribedDataModelResponse} containing a {@link SubscribedDataModel}.
   */
  getSubscribedModel(
    catalogueId: Uuid,
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels/${id}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a new subscription to a model in a Subscribed Catalogue.
   *
   * @param catalogueId The UUID of the Subscribed Catalogue to save to.
   * @param payload The data to use for creation.
   * @param options Optional REST handler parameters.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link SubscribedDataModelResponse} containing a {@link SubscribedDataModel}.
   */
  saveSubscribedModel(
    catalogueId: Uuid,
    payload: SubscribedDataModelPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels`;
    return this.simplePost(url, payload, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing subscription to a model in a Subscribed Catalogue.
   *
   * @param catalogueId The UUID of the Subscribed Catalogue to remove from.
   * @param id The UUID of the subscribed model to remove.
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeSubscribedModel(
    catalogueId: Uuid,
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${catalogueId}/subscribedModels/${id}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP GET` - Tests subscribed catalogue URL.
   *
   * @param id The unique identifier of the Subscribed Catalogue to get.
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a blank success.
   */
  testConnection(id: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${id}/testConnection`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Get all newer versions of current model.
   *
   * @param subscribedCatalogueId The unique identifier of the Subscribed Catalogue to get.
   * @param publishedModelId The unique identifier of the Published Model to get.
   * @param query Optional query string parameters for the GET request.
   * @param options Optional REST handler parameters.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a list of all newer models.
   */
  newerVersions(
    subscribedCatalogueId: Uuid,
    publishedModelId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/subscribedCatalogues/${subscribedCatalogueId}/publishedModels/${publishedModelId}/newerVersions`;
    return this.simpleGet(url, query, options);
  }
}
