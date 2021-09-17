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
import { RequestSettings } from './mdm-common.model';

/**
 * Interface to define a REST handler for all `MdmResource` objects to handle HTTP requests/responses.
 *
 * @see [[DefaultMdmRestHandler]]
 */
export interface MdmRestHandler {
  /**
   * Processes a REST resource request and returns the response and data.
   *
   * @param url The URL to the resource to request.
   * @param options The options as part of the request to further control the request.
   * @returns The response from the REST resource request.
   */
  process(url: string, options: RequestSettings);
}

/**
 * Default implementation of the [[MdmRestHandler]] interface, using the `fetch` API to
 * complete HTTP requests.
 *
 * By using the `fetch` API, all `process()` return values will become promises
 * to handle the asynchronous responses and finally return the `json` body content of each response.
 *
 * @example
 *
 * ```ts
 * const handler = new DefaultMdmRestHandler();
 * handler.process(url, options).then(json => { ... });
 * ```
 */
export class DefaultMdmRestHandler implements MdmRestHandler {
  async process(url: string, options: RequestSettings) {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: options.headers,
      credentials: options.credentials || options.withCredentials ? 'include' : 'same-origin',
      body: JSON.stringify(options.body)
    });
    const json = await response.json();
    return json;
  }
}
