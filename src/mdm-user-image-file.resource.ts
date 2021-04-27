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
 * Controller: userImageFile
 |  DELETE  | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: delete
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: update
 |   GET    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: show
 |   POST   | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: save
 |   GET    | /api/userImageFiles/${id}
 */
export class MdmUserImageFileResource extends MdmResource {
    remove(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(catalogueUserId: string, data?: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(catalogueUserId: string, data?: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    getUserImageFile(userId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/userImageFiles/${userId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
