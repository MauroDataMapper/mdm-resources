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
import {
  BranchModelPayload,
  ForkModelPayload,
  ModelDomain,
  VersionModelPayload
} from './mdm-model-types.model';
import {
  Payload,
  QueryParameters,
  RequestSettings,
  Uuid,
  Version
} from './mdm-common.model';
import {
  ExportModelsPayload,
  ExportQueryParameters
} from './mdm-import-export.model';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmRestHandler } from './mdm-rest-handler';
import { MdmCommonDomainResource } from './mdm-common.resource';

/**
 * Definition of resource operations for a domain that supports branching and versionining models.
 */
export interface BranchableResource {
  /**
   * `HTTP PUT` - Branch a model to create the next working copy of a model. Can be applied to create
   * the next version of the model, or to create a separate working branch to be merged back later.
   *
   * @param id The unique identifier of the model to branch.
   * @param data The payload to pass to the request when branching or creating the next version of the model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link ModelDomainDetailResponse} object containing a {@link ModelDomainDetail} object.
   * The body of the response could be cast to a more specific type if necessary e.g. {@link DataModelDetail}.
   *
   * `202 ACCEPTED` - will return when an asynchronous job has started successfully. This will instead return
   * an {@link AsyncJobResponse} with an {@link AsyncJob} of the new job started. Check the status of this job to determine
   * eventual completion.
   *
   * @see {@link MdmModelDomainResource.newForkModel}
   *
   * @example To start a new version of a model:
   *
   * ```ts
   * const id = '684c8134-d826-4c4a-a6d1-1412b7e8fc15';
   * modelResource.newBranchModelVersion(id, { });
   * ```
   *
   * @example To start a new branch of a model:
   *
   * ```ts
   * const id = '684c8134-d826-4c4a-a6d1-1412b7e8fc15';
   * modelResource.newBranchModelVersion(id, { branchName: 'new-branch' });
   * ```
   */
  newBranchModelVersion(
    id: Uuid,
    data: VersionModelPayload | BranchModelPayload,
    options?: RequestSettings
  );
}

/**
 * Definition of resource operations for a domain that supports forking models.
 */
export interface ForkableResource {
  /**
   * `HTTP PUT` - Fork a model to create a new copy of a model with a new 'main' branch.
   *
   * @param id The unique identifier of the model to fork.
   * @param data The payload to pass to the request when forking the model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link ModelDomainDetailResponse} object containing a {@link ModelDomainDetail} object.
   * The body of the response could be cast to a more specific type if necessary e.g. {@link DataModelDetail}.
   *
   * `202 ACCEPTED` - will return when an asynchronous job has started successfully. This will instead return
   * an {@link AsyncJobResponse} with an {@link AsyncJob} of the new job started. Check the status of this job to determine
   * eventual completion.
   *
   * @see {@link MdmModelDomainResource.newBranchModelVersion}
   */
  newForkModel(id: Uuid, data: ForkModelPayload, options?: RequestSettings);
}

/**
 * Definition of resource operations for a domain that supports importing models.
 */
export interface ImportableResource {
  /**
   * `HTTP GET` - Request the available importer providers for models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ImporterIndexResponse} containing an array of {@link Importer} objects.
   */
  importers(query?: QueryParameters, options?: RequestSettings);

  /**
   * `HTTP POST` - Imports a model.
   *
   * @param namespace The namespace of the importer provider to use.
   * @param name The unique name of the importer provider to use.
   * @param version The version of the importer provider to use.
   * @param data The payload of the request containing all the details for import. The contents of the payload will depend on the
   * parameters required for the import provider in use. The parameters required are requested via {@link MdmImporterResource.get}.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ImportResultIndexResponse} containing a list of {@link ImportResult} objects.
   *
   * `202 ACCEPTED` - will return when an asynchronous job has started successfully. This will instead return
   * an {@link AsyncJobResponse} with an {@link AsyncJob} of the new job started. Check the status of this job to determine
   * eventual completion.
   *
   * @see {@link MdmModelDomainResource.importers}
   * @see {@link ImporterDetail}
   * @see {@link MdmImporterResource}
   */
  importModels(
    namespace: string,
    name: string,
    version: Version,
    data: Payload,
    options?: RequestSettings
  );
}

/**
 * Definition of resource operations for a domain that supports exporting models.
 */
export interface ExportableResource {
  /**
   * `HTTP GET` - Request the available exporter providers for models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ExporterIndexResponse} containing an array of {@link Exporter} objects.
   */
  exporters(query?: QueryParameters, options?: RequestSettings);

  /**
   * `HTTP GET` - Exports a model.
   *
   * @param id The unique identifier of the model to export.
   * @param namespace The namespace of the exporter provider to use.
   * @param name The unique name of the exporter provider to use.
   * @param version The version of the exporter provider to use.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return an {@link ExportModelDetailResponse} containing the {@link ExportModelDetail} object.
   *
   * `202 ACCEPTED` - will return when an asynchronous job has started successfully. This will instead return
   * an {@link AsyncJobResponse} with an {@link AsyncJob} of the new job started. Check the status of this job to determine
   * eventual completion.
   *
   * @description The response body will depend on the type of exporter used, for example JSON, XML etc.
   * It is advised to take the entire content of the response body and save the entirety of it to file
   * to provide a downloadable source.
   *
   * @see {@link MdmModelDomainResource.exporters}
   * @see {@link MdmModelDomainResource.exportModels}
   */
  exportModel(
    id: Uuid,
    namespace: string,
    name: string,
    version: Version,
    query?: ExportQueryParameters,
    options?: RequestSettings
  );

  /**
   * `HTTP POST` - Exports one or more models.
   *
   * @param namespace The namespace of the exporter provider to use.
   * @param name The unique name of the exporter provider to use.
   * @param version The version of the exporter provider to use.
   * @param payload The list of data model identifiers to export.
   * @param query Optional query parameters to control the export.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return an {@link ExportModelIndexResponse} containing the {@link ExportModelList} object.
   *
   * `202 ACCEPTED` - will return when an asynchronous job has started successfully. This will instead return
   * an {@link AsyncJobResponse} with an {@link AsyncJob} of the new job started. Check the status of this job to determine
   * eventual completion.
   *
   * @description The response body will depend on the type of exporter used, for example JSON, XML etc.
   * It is advised to take the entire content of the response body and save the entirety of it to file
   * to provide a downloadable source.
   *
   * @see {@link MdmModelDomainResource.exporters}
   * @see {@link MdmModelDomainResource.exportModel}
   */
  exportModels(
    namespace: string,
    name: string,
    version: Version,
    payload: ExportModelsPayload,
    query?: ExportQueryParameters,
    options?: RequestSettings
  );
}

/**
 * Base class representing all the operations that a typical model can perform.
 *
 * Model domain types allowed are defined by the {@link ModelDomain} type.
 */
export class MdmModelDomainResource
  extends MdmCommonDomainResource
  implements
    BranchableResource,
    ForkableResource,
    ImportableResource,
    ExportableResource {
  /**
   * Constructs a new `MdmModelDomainResource`.
   *
   * @param domain The domain type for the model operations.
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    domain: ModelDomain,
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super(domain, config, restHandler);
  }

  newBranchModelVersion(
    id: Uuid,
    data: VersionModelPayload | BranchModelPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}/newBranchModelVersion`;
    return this.simplePut(url, data, options);
  }

  newForkModel(id: Uuid, data: ForkModelPayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}/newForkModel`;
    return this.simplePut(url, data, options);
  }

  importers(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/providers/importers`;
    return this.simpleGet(url, query, options);
  }

  importModels(
    namespace: string,
    name: string,
    version: Version,
    data: Payload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.domain}/import/${namespace}/${name}/${version}`;
    return this.simplePost(url, data, options);
  }

  exporters(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/providers/exporters`;
    return this.simpleGet(url, query, options);
  }

  exportModel(
    id: Uuid,
    namespace: string,
    name: string,
    version: Version,
    query?: ExportQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}/export/${namespace}/${name}/${version}`;
    return this.simpleGet(url, query, options);
  }

  exportModels(
    namespace: string,
    name: string,
    version: Version,
    payload: ExportModelsPayload,
    query?: ExportQueryParameters,
    options?: RequestSettings
  ) {
    const queryString = this.generateQueryString(query);
    const url = `${this.apiEndpoint}/${this.domain}/export/${namespace}/${name}/${version}${queryString}`;
    return this.simplePost(url, payload, options);
  }
}
