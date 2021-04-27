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
import { MdmResource } from './mdm-resource';

/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */
export class MdmReferenceDataValueResource extends MdmResource {

    list(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    get(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    update(referenceDataModelId: string, referenceDataValueId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    remove(referenceDataModelId: string, referenceDataValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    search(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataValues/search?asRows=true`;
        return this.simplePost(url, data, restHandlerOptions);
    }
}
