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
import {
    ContainerDomainType,
    MdmResource,
    ModelDomainType,
} from './mdm-resource';
import {
    IMdmQueryStringParams,
    IMdmRestHandlerOptions,
} from './mdm-rest-handler';

/**
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 |   GET    | /api/tree/${containerDomainType}/search/${searchTerm}                                                 | Action: search
 |   GET    | /api/tree/${containerDomainType}                                                                      | Action: index
 |   GET    | /api/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}                        | Action: show
 */
export class MdmTreeItemResource extends MdmResource {
    deletedModels(
        containerDomainType: string | ContainerDomainType,
        modelDomainType: string | ModelDomainType,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/deleted`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    modelSupersededModels(
        containerDomainType: string | ContainerDomainType,
        modelDomainType: string | ModelDomainType,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    documentationSupersededModels(
        containerDomainType: string | ContainerDomainType,
        modelDomainType: string | ModelDomainType,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    search(
        containerDomainType: string | ContainerDomainType,
        searchTerm: string,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/tree/${containerDomainType}/search/${searchTerm}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    list(
        containerDomainType: string | ContainerDomainType,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/tree/${containerDomainType}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    get(
        containerDomainType: string | ContainerDomainType,
        catalogueItemDomainType,
        catalogueItemId: string,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    getExpandedTree(
        containerDomainType: string | ContainerDomainType,
        catalogueItemId: string,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions
    ) {
        const url = `${this.apiEndpoint}/tree/${containerDomainType}/${catalogueItemId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
