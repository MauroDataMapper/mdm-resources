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

import { RequestSettings, QueryParameters } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';
import {
  MdmResourcesConfiguration,
  MdmRestHandler,
  DefaultMdmRestHandler
} from '../mdm-resource';
import { MdmSecurityResource } from './mdm-security.resource';
import { MdmSessionResource } from '../core/mdm-session.resource';
import { LoginPayload } from './mdm-security.model';

/**
 * @deprecated Use [[MdmSecurityResource]] and [[MdmSessionResource]] instead.
 */
export class MdmAuthenticationResource extends MdmResource {
  private securityResource: MdmSecurityResource;
  private sesisonResource: MdmSessionResource;

  constructor(
    resourcesConfig = new MdmResourcesConfiguration(),
    restHandler: MdmRestHandler = new DefaultMdmRestHandler()
  ) {
    super(resourcesConfig, restHandler);
    this.securityResource = new MdmSecurityResource(
      resourcesConfig,
      restHandler
    );
    this.sesisonResource = new MdmSessionResource(resourcesConfig, restHandler);
  }

  /**
   * @deprecated Use [[MdmSecurityResource.login]] instead.
   */
  login(data: LoginPayload, restHandlerOptions?: RequestSettings) {
    return this.securityResource.login(data, restHandlerOptions);
  }

  /**
   * @deprecated Use [[MdmSecurityResource.logout]] instead.
   */
  logout(
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    return this.securityResource.logout(queryStringParams, restHandlerOptions);
  }

  /**
   * @deprecated Use [[MdmSessionResource.isAuthenticated]] instead.
   */
  isAuthenticated(
    sessionId?: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    this.sesisonResource.isAuthenticated(
      sessionId,
      queryStringParams,
      restHandlerOptions
    );
  }
}
