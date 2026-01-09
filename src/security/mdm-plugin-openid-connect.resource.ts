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

import { OpenIdConnectProviderUpdatePayload } from './mdm-plugin-openid-connect.model';
import {
  FilterQueryParameters,
  QueryParameters,
  RequestSettings,
  Uuid
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * MDM resource for managing OpenID Connect providers in Mauro.
 *
 * In order to use these endpoints, the [mdm-plugin-authentication-openid-connect](https://github.com/MauroDataMapper-Plugins/mdm-plugin-authentication-openid-connect)
 * plugin must be installed in the Mauro instance.
 *
 * With the exception of the {@link MdmPluginOpenIdConnectResource.listPublic} endpoint, all these endpoints
 * require an authenticated administrator to use them.
 *
 * The OpenID Connect providers allow users of Mauro to authenticate via external providers supporting the OpenID Connect
 * specification, such as Google, Microsoft, etc. Once external authenticated, the user can then be redirected back
 * to the Mauro client application and complete a {@link MdmSecurityResource.login} request using a {@link OpenIdConnectLoginPayload}
 * with the authorization state needed.
 *
 * Most of these endpoints revolve around administration of the OpenID Connect providers in Mauro (add/edit/delete), but
 * {@link MdmPluginOpenIdConnectResource.listPublic} provides anonymous user access to all the providers available and
 * their authentication endpoints to redirect to. This data can be used for displaying in a login form, for example.
 *
 * @see {@link OpenIdConnectProvider}
 * @see {@link PublicOpenIdConnectProvider}
 * @see {@link OpenIdConnectProviderDetail}
 */
export class MdmPluginOpenIdConnectResource extends MdmResource {
  /**
   * `HTTP GET` - Gets a list of all OpenID Connect providers.
   *
   * @param query Optional query string parameters to filter the list, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link OpenIdConnectProvidersIndexResponse} containing a list of {@link OpenIdConnectProvider} items.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  list(query?: FilterQueryParameters, options?: RequestSettings): any {
    const url = `${this.apiEndpoint}/admin/openidConnectProviders`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of all publicly accessible OpenID Connect provider information. Administrator
   * permissions are _not_ required for this endpoint.
   *
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link PublicOpenIdConnectProvidersIndexResponse} containing a list of {@link PublicOpenIdConnectProvider} items.
   */
  listPublic(query?: FilterQueryParameters, options?: RequestSettings): any {
    const url = `${this.apiEndpoint}/openidConnectProviders`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets an OpenID Connect provider by ID.
   *
   * @param id The unique identifier of the provider to get.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link OpenIdConnectProvidersDetailResponse} containing a {@link OpenIdConnectProviderDetail}.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  get(id: Uuid, query?: QueryParameters, options?: RequestSettings): any {
    const url = `${this.apiEndpoint}/admin/openidConnectProviders/${id}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a new OpenID Connect provider.
   *
   * @param data The data to use for creation.
   * @param options Optional REST handler parameters.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link OpenIdConnectProvidersDetailResponse} containing a {@link OpenIdConnectProviderDetail}.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  save(
    data: OpenIdConnectProviderUpdatePayload,
    options?: RequestSettings
  ): any {
    const url = `${this.apiEndpoint}/admin/openidConnectProviders`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP PUT` - Updates an existing OpenID Connect provider.
   *
   * @param id The unique identifier of the provider to update.
   * @param data The data to use for the update.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link OpenIdConnectProvidersDetailResponse} containing a {@link OpenIdConnectProviderDetail}.
   *
   * `403 Forbidden` - user is not an administrator.
   */
  update(
    id: Uuid,
    data: OpenIdConnectProviderUpdatePayload,
    options?: RequestSettings
  ): any {
    const url = `${this.apiEndpoint}/admin/openidConnectProviders/${id}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing OpenID Connect provider.
   *
   * @param id The unique identifier of the provider to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(id: Uuid, query?: QueryParameters, options?: RequestSettings): any {
    const url = `${this.apiEndpoint}/admin/openidConnectProviders/${id}`;
    return this.simpleDelete(url, query, options);
  }
}
