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
import { MdmResourcesConfiguration, MdmRestHandler } from './mdm-resource';
import {
  MdmCommonDomainResource,
  SearchableItemResource
} from './mdm-common.resource';
import { ContainerDomain } from './mdm-container-types.model';
import { SearchQueryParameters, RequestSettings } from './mdm-common.model';

/**
 * Base class representing all the operations that a typical container can perform.
 *
 * Container domain types allowed are defined by the {@link ContainerDomain} type.
 */
export class MdmContainerDomainResource
  extends MdmCommonDomainResource
  implements SearchableItemResource {
  /**
   * Constructs a new `MdmContainerDomainResource`.
   *
   * @param domain The domain type for the container operations.
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    domain: ContainerDomain,
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super(domain, config, restHandler);
  }

  search(id: string, query?: SearchQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${this.domain}/${id}/search`;
    return this.simplePost(url, query, options);
  }
}
