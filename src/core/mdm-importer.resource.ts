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
import { RequestSettings, QueryParameters, Version } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: importer
 |   GET    | /api/importer/parameters/${ns}?/${name}?/${version}?                                                  | Action: parameters
 */

/**
 * MDM resources for getting detailed information about importer providers.
 *
 * Each domain type that supports importing of models is able to provide the list of importer providers
 * that can be used. Use these endpoints to get further details on each importer provider.
 *
 * The details provided include a list of {@link ImporterParameterGroup} and {@link ImporterParameter} objects.
 * These make up the definitions of the parameters required to import a model into the catalogue and are used
 * to make up the payload required for importing.
 *
 * @see {@link MdmDataModelResource.importers}
 * @see {@link MdmDataModelResource.importModels}
 * @see {@link MdmCodeSetResource.importers}
 * @see {@link MdmCodeSetResource.importModels}
 * @see {@link MdmTerminologyResource.importers}
 * @see {@link MdmTerminologyResource.importModels}
 * @see {@link MdmReferenceDataModelResource.importers}
 * @see {@link MdmReferenceDataModelResource.importModels}
 */
export class MdmImporterResource extends MdmResource {
  /**
   * `HTTP GET` - Request the importer details for a particular importer provider.
   *
   * @param namespace The namespace of the importer provider to use.
   * @param name The unique name of the importer provider to use.
   * @param version The version of the import provider to use.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ImporterDetailResponse} containing an {@link ImporterDetail}.
   *
   * @description Use the returned {@link ImporterDetail} to understand what the required parameters
   * are for this importer provider, as the payload for triggering the import process depends on
   * the correct data being supplied.
   */
  get(
    namespace: string,
    name: string,
    version: Version,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/importer/parameters/${namespace}/${name}/${version}`;
    return this.simpleGet(url, query, options);
  }
}
