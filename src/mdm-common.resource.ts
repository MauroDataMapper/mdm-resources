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
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmRestHandler } from './mdm-rest-handler';
import { MdmResource } from './mdm-resource';
import {
  FilterQueryParameters,
  QueryParameters,
  RemoveQueryParameters,
  RequestSettings,
  Uuid
} from './mdm-common.model';

/**
 * Definition of common resource operations i.e. CRUD operations.
 */
export interface CommonResource {
  /**
   * `HTTP GET` - Request the list of catalogue items for this domain.
   *
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmIndexResponse} containing a list of items. The items will be representative
   * of the type of {@link domain} they are for.
   *
   * @see {@link MdmCommonResource.get}
   */
  list(query?: FilterQueryParameters, options?: RequestSettings);

  /**
   * `HTTP GET` - Request a catalogue item.
   *
   * @param id A unique identifier of the item to fetch.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmResponse} containing an item in the body. The item will be representative
   * of the type of {@link domain} it is for.
   */
  get(id: Uuid, query?: QueryParameters, options?: RequestSettings);

  /**
   * `HTTP DELETE` - Removes an existing catalogue item, either temporarily or permanently.
   *
   * @param id The unique identifier of the item to remove.
   * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   *
   * @description Some domains allow either soft or permanent deletion. Refer to those domains to see what is supported.
   *
   * If the domain support either soft or permantent deletion, it is required to pass a {@link RemoveQueryParameters.permanent}
   * flag to explicitly state whether the operation is permanent or not. Setting this to `false` allows the item to remain in
   * Mauro but hidden; the operation may also be reversed by an administrator using an "undoSoftDelete" endpoint.
   *
   * If {@link RemoveQueryParameters.permanent} is set to `true`, then the data model will be permanently deleted with
   * no method of retrieving it.
   *
   * If the domain does not support the option of soft or permanent deletion, the {@link RemoveQueryParameters.permanent} will
   * have no effect.
   */
  remove(id: Uuid, query: RemoveQueryParameters, options?: RequestSettings);
}

export class MdmCommonDomainResource
  extends MdmResource
  implements CommonResource {
  /**
   * Constructs a new `MdmCommonDomainResource`.
   *
   * @param domain The domain type for the operations.
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    protected domain: string,
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super(config, restHandler);
  }

  list(query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}`;
    return this.simpleGet(url, query, options);
  }

  get(id: string, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}`;
    return this.simpleGet(url, query, options);
  }

  remove(id: string, query: RemoveQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}`;
    return this.simpleDelete(url, query, options);
  }
}
