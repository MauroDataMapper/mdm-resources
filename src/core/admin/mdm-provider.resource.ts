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
import { RequestSettings } from '../../mdm-common.model';
import { ProviderQueryParameters } from './mdm-provider.model';
import { MdmResource } from '../../mdm-resource';

/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/admin/providers/exporters                                                                        | Action: exporterProviders
 |   GET    | /api/admin/providers/emailers                                                                         | Action: emailProviders
 |   GET    | /api/admin/providers/dataLoaders                                                                      | Action: dataLoaderProviders
 |   GET    | /api/admin/providers/importers                                                                        | Action: importerProviders
 */

/**
 * MDM resource for fetching information related to providers, such as importers/exported and plugins.
 *
 * **Note**: only an authenticated administrator user may use these endpoints.
 */
export class MdmProviderResource extends MdmResource {
  /**
   * `HTTP GET` - Request a list of all exporters in the current Mauro instance.
   *
   * @param query Query parameters to control the request, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  exporters(query?: ProviderQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/providers/exporters`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a list of all emailers in the current Mauro instance.
   *
   * @param query Query parameters to control the request, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  emailers(query?: ProviderQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/providers/emailers`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a list of all data loaders in the current Mauro instance.
   *
   * @param query Query parameters to control the request, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  dataLoaders(query?: ProviderQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/providers/dataLoaders`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a list of all importers in the current Mauro instance.
   *
   * @param query Query parameters to control the request, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProviderListResponse} containing a list of {@link Provider} details.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  importers(query?: ProviderQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/providers/importers`;
    return this.simpleGet(url, query, options);
  }
}
