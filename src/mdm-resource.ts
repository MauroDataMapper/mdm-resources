/*
Copyright 2020 University of Oxford

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
import { RequestOptions, QueryParameters } from './mdm-common.model';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { DefaultMdmRestHandler, IMdmRestHandler } from './mdm-rest-handler';

/**
 * Superclass for all Mauro resource classes.
 *
 * This superclass contains common functions to assist with carrying out resource requests.
 */
export class MdmResource {
  /**
   * Stores the base API endpoint for all REST requests.
   */
  protected apiEndpoint: string;

  /**
   * Stores the default options to apply to every REST request.
   */
  protected defaultRequestOptions: RequestOptions;
  private restHandler: IMdmRestHandler;
  private resourcesConfig: MdmResourcesConfiguration;

  /**
   * Constructs a new `MdmResource`.
   *
   * @param resourcesConfig Optionally provide configuration options to this resource class. If not provided, suitable defaults will be used.
   * @param restHandler Optionally provide a specific [[IMdmRestHandler]]. If not provided, the [[DefaultMdmRestHandler]] implementation will be used.
   */
  constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    this.resourcesConfig = resourcesConfig || new MdmResourcesConfiguration();
    this.restHandler = restHandler || new DefaultMdmRestHandler();
    this.apiEndpoint = this.resourcesConfig.apiEndpoint;
    this.defaultRequestOptions = this.resourcesConfig.defaultHttpRequestOptions;
  }

  /**
   * Send a HTTP `POST` request to the given resource.
   *
   * @param url The full URL to the REST resource.
   * @param data The data to include in the `POST` request body.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `POST` request.
   */
  simplePost(url: string, data: any, options?: RequestOptions) {
    const opts: RequestOptions = { ...this.defaultRequestOptions, body: data, ...options, method: 'POST' };
    return this.simpleRequest(url, {}, opts);
  }

  /**
   * Send a HTTP `GET` request to the given resource.
   *
   * @param url The full URL to the REST resource.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   */
  simpleGet(url: string, query: QueryParameters = {}, options?: RequestOptions) {
    const opts: RequestOptions = { ...this.defaultRequestOptions, ...options, method: 'GET' };
    return this.simpleRequest(url, query, opts);
  }

  /**
   * Send a HTTP `DELETE` request to the given resource.
   *
   * @param url The full URL to the REST resource.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   */
  simpleDelete(url: string, query: QueryParameters = {}, options?: RequestOptions) {
    const opts: RequestOptions = { ...this.defaultRequestOptions, ...options, method: 'DELETE' };
    return this.simpleRequest(url, query, opts);
  }

  /**
   * Send a HTTP `PUT` request to the given resource.
   *
   * @param url The full URL to the REST resource.
   * @param data The data to include in the `PUT` request body.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   */
  simplePut(url: string, data: any, options?: RequestOptions) {
    const opts: RequestOptions = { ...this.defaultRequestOptions, body: data, ...options, method: 'PUT' };
    return this.simpleRequest(url, {}, opts);
  }

  /**
   * Send a generic HTTP request to the given resource.
   *
   * @param url The full URL to the REST resource.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the request.
   *
   * All details of HTTP request must be included in the `options` parameter, particularly the HTTP method:
   *
   * ```ts
   * simpleRequest('http://localhost/api/test', { }, { method: 'GET' });
   * ```
   */
  simpleRequest(url: string, query: QueryParameters = {}, options?: RequestOptions) {
    const queryString = this.generateQueryString(query);
    return this.restHandler.process(`${url}${queryString}`, options);
  }

  /**
   * Test if a string represents a UUID.
   *
   * @param value The string to test.
   * @returns True if `value` represents a UUID.
   */
  protected isGuid(value) {
    if (value[0] === '{') {
      value = value.substring(1, value.length - 1);
    }
    const regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
    return regexGuid.test(value);
  }

  /**
   * Generate a query string for a URL based on object property values provided.
   *
   * @param query A query string parameters object to convert to a string.
   * @returns A URL encoded string containing each parameter and value, or an empty string if no properties were provided.
   */
  protected generateQueryString(query: QueryParameters = {}): string {
    const queryParams: string[] = Object.keys(query).map(key => `${key}=${query[key]}`);
    return (queryParams?.length > 0) ? `?${queryParams.join('&')}` : '';
  }
}