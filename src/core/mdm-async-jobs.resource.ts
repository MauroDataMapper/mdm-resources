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
import { MdmCommonDomainResource } from '../mdm-common.resource';
import { MdmResourcesConfiguration, MdmRestHandler } from '../mdm-resource';

/**
 * Operations for managing async jobs.
 *
 * For operations that return data relating to jobs, use the type definitions:
 *
 * - {@link AsyncJobResponse} - for a single returned job, or
 * - {@link AsyncJobIndexResponse} - for multiple returned jobs.
 */
export class MdmAsyncJobsResource extends MdmCommonDomainResource {
  /**
   * Constructs a new `MdmAsyncJobsResource`.
   *
   * @param config Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific {@link MdmRestHandler}. If not provided, the {@link DefaultMdmRestHandler} implementation will be used.
   */
  constructor(
    config?: MdmResourcesConfiguration,
    restHandler?: MdmRestHandler
  ) {
    super('asyncJobs', config, restHandler);
  }
}
