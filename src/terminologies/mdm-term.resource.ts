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
import { Term } from './mdm-term.model';
import {
  RequestSettings,
  QueryParameters,
  Uuid,
  FilterQueryParameters,
  SearchQueryParameters
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: term
 |   GET    | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   POST   | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/tree/${termId}?                                                  | Action: tree                                    |
 |   POST   | /api/terminologies/${terminologyId}/terms                                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms                                                                  | Action: index                                   |
 |   GET    | /api/codeSets/${codeSetId}/terms                                                                           | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: show
 |   GET    | /api/terminologies/${terminologyId}/terms/${id}/codeSets                                                   | Action: show
 *
 * Controller: termRelationship
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships            | Action: index                                   |
 |   POST   | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: index                                   |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${id}      | Action: show                                    |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: show
 */

/**
 * MDM resource for the management of terms within terminologies.
 *
 * @see {@link MdmTerminologyResource}
 */
export class MdmTermResource extends MdmResource {
  /**
   * `HTTP POST` - Search within a terminology for terms that match one or more search terms.
   *
   * @param id The unique identifier of the terminology to search.
   * @param query The query parameters to control the search.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CatalogueItemSearchResponse} containing a collection of
   * {@link CatalogueItemSearchResult} object.
   */
  search(id: Uuid, query?: SearchQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/terminologies/${id}/terms/search`;
    return this.simplePost(url, query, options);
  }

  tree(
    terminologyId: Uuid,
    termId?: Uuid,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/tree${
      termId ? `/${termId}` : ''
    }`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP POST` - Creates a new term under a chosen terminology.
   *
   * @param terminologyId The unique identifier of the terminology to create the term under.
   * @param data The payload of the request containing all the details for the term to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
   */
  save(terminologyId: Uuid, data: Term, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Request the list of terms.
   *
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link TermIndexResponse} containing a list of {@link Term} items.
   *
   * @see {@link MdmTermResource.get}
   */
  list(
    terminologyId: Uuid,
    query?: FilterQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing term.
   *
   * @param terminologyId The unique identifier of the owner terminology.
   * @param termId The unique identifier of the term to remove.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(
    terminologyId: Uuid,
    termId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing term.
   *
   * @param terminologyId The unique identifier of the owner terminology.
   * @param termId The unique identifier of the term to update.
   * @param data The payload of the request containing all the details for the term to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
   */
  update(
    terminologyId: Uuid,
    termId: Uuid,
    data: Term,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a term.
   *
   * @param terminologyId The unique identifier of the owner terminology.
   * @param termId Either a unique identifier of the term, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
   *
   * This function does allow either an ID or a path string, but should ideally be used only for IDs. For using paths,
   * see the {@link MdmCatalogueItemResource.getPath()} function instead; there are no guarantees this function will support
   * paths in the future, but will currently be supported for backwards compatibility.
   */
  get(
    terminologyId: Uuid,
    termId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    let url = '';
    if (this.isGuid(terminologyId)) {
      url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
    } else {
      url = `${this.apiEndpoint}/terminologies/path/${termId}`;
    }

    return this.simpleGet(url, query, options);
  }

  addTermRelationships(
    terminologyId: Uuid,
    termId: Uuid,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  termRelationships(
    terminologyId: Uuid,
    termId: Uuid,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeTermRelationship(
    terminologyId: Uuid,
    termId: Uuid,
    termRelationshipId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateTermRelationship(
    terminologyId: Uuid,
    termId: Uuid,
    termRelationshipId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  getTermRelationship(
    terminologyId: Uuid,
    termId: Uuid,
    termRelationshipId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  codesetsForTerm(
    terminologyId: Uuid,
    termId: Uuid,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/codeSets`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }
}
