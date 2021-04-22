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
import { RequestOptions, QueryParameters } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 */
export class MdmNamespacesResource extends MdmResource {

    get(metadataId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/metadata/namespaces${metadataId ? `/${metadataId}`:''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
