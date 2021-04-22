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

/**
 * Type to define the options to pass to an [[IMdmRestHandler]] to process
 * a resource.
 * 
 * This type uses an index signature to provide any property and value to this object, for example:
 * 
 * ```ts
 * const options: IMdmRestHandlerOptions = {
 *  method: 'POST',
 *  body: {
 *      id: 42,
 *      name: 'Test'
 *  }
 * };
 * ```
 * 
 * @see [[IMdmRestHandler]]
 */
export interface IMdmRestHandlerOptions {
    [key: string]: any;
}

/**
 * Type to define the options to pass to every [[IMdmRestHandler]] to process
 * a resource. These are the default options for every request, such as particular
 * HTTP headers to use.
 * 
 * This type uses an index signature to provide any property and value to this object, for example:
 * 
 * ```ts
 * const options: IMdmDefaultHttpRequestOptions = {
 *  headers: {
 *      'content-type': 'application/json'
*   }
 * };
 * ```
 * 
 * @see [[MdmResourcesConfiguration]]
 */
export interface IMdmDefaultHttpRequestOptions {
    [key: string]: any;
}

/**
 * Interface to define a REST handler for all `MdmResource` objects to handle HTTP requests/responses.
 * 
 * @see [[DefaultMdmRestHandler]]
 */
export interface IMdmRestHandler {
    /**
     * Processes a REST resource request and returns the response and data.
     * @param url The URL to the resource to request.
     * @param options The options as part of the request to further control the request.
     * @returns The response from the REST resource request.
     */
    process(url: string, options: IMdmRestHandlerOptions);
}

/**
 * Default implementation of the [[IMdmRestHandler]] interface, using the `fetch` API to
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
export class DefaultMdmRestHandler implements IMdmRestHandler {    
    async process(url: string, options: IMdmRestHandlerOptions) {
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
