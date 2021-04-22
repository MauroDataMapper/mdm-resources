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
import { MdmResource, ModelDomainType } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';

/**
 * Controller: versionLink
 |   POST   | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: save
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: index
 |  DELETE  | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: delete
 |   PUT    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: update
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: show
 */
export class MdmVersionLinkResource extends MdmResource {
    save(modelDomainType: string | ModelDomainType, modelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(modelDomainType: string | ModelDomainType, modelId: string, versionLinkId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks/${versionLinkId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(modelDomainType: string | ModelDomainType, modelId: string, versionLinkId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks/${versionLinkId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(modelDomainType: string | ModelDomainType, modelId: string, versionLinkId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks/${versionLinkId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
