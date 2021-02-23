/*
Copyright 2021 University of Oxford

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

import { MdmResource } from "./mdm-resource"
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from "./mdm-rest-handler";

export class MdmApiPropertyResources extends MdmResource {

    /**
     * Gets a list of all API properties.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any {
        const url = `${this.apiEndpoint}/admin/properties`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * Gets a list of all publicly accessible API properties. Administrator permissions are not required for this API.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing a count and array of items.
     */
    listPublic(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any {
        const url = `${this.apiEndpoint}/properties`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * Gets an API property by ID.
     * @param id The UUID of the property to get.
     * @param queryStringParams Optional query string parameters for the GET request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object containing the data.
     */
    get(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any {
        const url = `${this.apiEndpoint}/admin/properties/${id}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * Creates a new API property.
     * @param data The data to use for creation.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any {
        const url = `${this.apiEndpoint}/admin/properties`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    /**
     * Updates an existing API property.
     * @param id The UUID of the property to update.
     * @param data The data to use for the update.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    update(id: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any {
        const url = `${this.apiEndpoint}/admin/properties/${id}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    /**
     * Removes an existing API property.
     * @param id The UUID of the property to remove.
     * @param queryStringParams Optional query string parameters for the request.
     * @param restHandlerOptions Optional REST handler parameters.
     * @returns An HTTP response object.
     */
    remove(id: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any {
        const url = `${this.apiEndpoint}/admin/properties/${id}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }    
}