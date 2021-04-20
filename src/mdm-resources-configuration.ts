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
import { IMdmDefaultHttpRequestOptions } from './mdm-rest-handler';

/**
 * Type to store common configuration options for the `mdm-resources` library.
 */
export class MdmResourcesConfiguration {
    /**
     * Defines the base API endpoint to direct all REST resource requests to.
     */
    apiEndpoint?: string = 'http://localhost:8080/api';

    /**
     * Defines the default HTTP request options to apply to every request.
     */
    defaultHttpRequestOptions?: IMdmDefaultHttpRequestOptions = {};
}
