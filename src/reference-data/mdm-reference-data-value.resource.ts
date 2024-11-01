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
  RequestSettings,
  QueryParameters,
  SearchQueryParameters
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */
export class MdmReferenceDataValueResource extends MdmResource {
  list(
    referenceDataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  get(
    referenceDataModelId: string,
    referenceDataValueId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  save(
    referenceDataModelId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  update(
    referenceDataModelId: string,
    referenceDataValueId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  remove(
    referenceDataModelId: string,
    referenceDataValueId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP POST` - Search within a reference data model for reference data values that match one or more search terms.
   *
   * @param id The unique identifier of the reference data model to search.
   * @param query The query parameters to control the search.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CatalogueItemSearchResponse} containing a collection of
   * {@link CatalogueItemSearchResult} object.
   */
  search(id: string, data: SearchQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${id}/referenceDataValues/search?asRows=true`;
    return this.simplePost(url, data, options);
  }
}
