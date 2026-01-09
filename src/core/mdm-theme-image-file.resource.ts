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
import { RequestSettings, QueryParameters, Uuid } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';
import { ImageFilePayload } from './mdm-image-file.model';

/**
 * Resources to manage theme image files stored in Mauro.
 *
 * @description With the exception of the {@link MdmThemeImageFileResource.getThemeImageFile} endpoint, all these endpoints
 * require an authenticated administrator to use them.
 */
export class MdmThemeImageFileResource extends MdmResource {
  /**
   * `HTTP DELETE` - Removes a theme image.
   *
   * @param apiPropertiesId The ID of the API property that is the parent of this image.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(
    apiPropertiesId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates a theme image.
   *
   * @param apiPropertiesId The ID of the API property that is the parent of this image.
   * @param data The payload of the request containing the image to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return an {@link ImageFileResponse} containing an {@link ImageFile} object.
   */
  update(
    apiPropertiesId: Uuid,
    data: ImageFilePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Gets a theme image.
   *
   * @param apiPropertiesId The ID of the API property that is the parent of this image.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return the actual image in the HTTP response to render to a page.
   *
   * @description This endpoint is only accessible to authenticated administrators. Use
   * {@link MdmThemeImageFileResource.getThemeImageFile} instead for public access.
   */
  get(
    apiPropertiesId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a theme image.
   *
   * @param apiPropertiesId The ID of the API property that is the parent of this image.
   * @param data The payload of the request containing the image to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return an {@link ImageFileResponse} containing an {@link ImageFile} object.
   */
  save(
    apiPropertiesId: Uuid,
    data: ImageFilePayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/properties/${apiPropertiesId}/image`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Gets a theme image.
   *
   * @param id The ID of the image to get.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return the actual image in the HTTP response to render to a page.
   *
   * @description This endpoint is accessible to any user, whether authenticated or not.
   *
   * @see {@link MdmThemeImageFileResource.get}
   */
  getThemeImageFile(
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/themeImageFiles/${id}`;
    return this.simpleGet(url, query, options);
  }
}
