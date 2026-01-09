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
  FilterQueryParameters,
  QueryParameters,
  RequestSettings,
  Uuid
} from '../mdm-common.model';
import { DomainExportListFilters } from './mdm-domain-exports.model';
import { MdmCommonDomainResource } from '../mdm-common.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * Operations for managing domain level exports of catalogue data.
 *
 * For operations that return data relating to domain exports, use the type definitions:
 *
 * - {@link DomainExportResponse} - for a single returned domain export, or
 * - {@link DomainExportIndexResponse} - for multiple returned domain export.
 */
export class MdmDomainExportsResource extends MdmCommonDomainResource {
  /**
   * Constructs a new `MdmDomainExportsResource`.
   *
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('domainExports', config, restHandler);
  }

  /**
   * `HTTP GET` - Downloads a domain export.
   *
   * @param id The unique identifier of the domain export to download.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return an {@link ExportModelDetailResponse} containing the {@link ExportModelDetail} object.
   *
   * @description The response body will depend on the type of exporter used, for example JSON, XML etc.
   * It is advised to take the entire content of the response body and save the entirety of it to file
   * to provide a downloadable source.
   */
  download(id: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}/download`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request the list of domain exports filtered by domain object and possibly exporter type.
   *
   * @param filters Define the filters to use.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DomainExportIndexResponse} containing a list of {@link DomainExport} objects.
   *
   * @see {@link MdmCommonResource.list}
   */
  listByDomain(
    filters: DomainExportListFilters,
    query?: FilterQueryParameters,
    options?: RequestSettings
  ) {
    let url = `${this.apiEndpoint}/${filters.domainType}/${filters.domainId}}/${this.domain}`;
    if (filters.namespace && filters.name) {
      url += `/${filters.namespace}/${filters.name}`;
      if (filters.version) {
        url += `/${filters.version}`;
      }
    }
    return this.simpleGet(url, query, options);
  }
}
