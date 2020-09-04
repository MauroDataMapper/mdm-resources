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

export interface IMdmQueryStringParams {
    [key: string]: any;
}

export interface IMdmRestHandlerOptions {
    [key: string]: any;
}

export interface IMdmDefaultHttpRequestOptions {
    [key: string]: any;
}

export interface IMdmRestHandler {
    process(url: string, options: IMdmRestHandlerOptions);
}

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
