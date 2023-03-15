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
import { RequestSettings, QueryParameters } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: themeImageFile
 |  DELETE  | /api/admin/properties/${apiPropertiesId}/image                                                                                                                                     | Action: delete
 |   PUT    | /api/admin/properties/${apiPropertiesId}/image                                                                                                                                     | Action: update
 |   GET    | /api/admin/properties/${apiPropertiesId}/image                                                                                                                                     | Action: show
 |   POST   | /api/admin/properties/${apiPropertiesId}/image                                                                                                                                     | Action: save
 |   GET    | /api/themeImageFiles/${id}
 */
export class MdmThemeImageFileResource extends MdmResource {
  remove(
    apiPropertiesId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  update(
    apiPropertiesId: string,
    data?: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  get(
    apiPropertiesId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  save(
    apiPropertiesId: string,
    data?: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  getThemeImageFile(
    id: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/themeImageFiles/${id}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }
}
