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
import { RequestOptions, QueryParameters, ContainerDomainType, ModelDomainType } from 'mdm-common.model';
import { TreeItemQueryParameters } from 'mdm-tree-item.model';
import { MdmResource } from './mdm-resource';

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
  /**
   * `HTTP GET` - Request a tree structure of models that are marked as deleted. **Note:** this endpoint is only accessible to an administrator.
   * 
   * @param containerDomainType State the container domain type to inspect.
   * @param modelDomainType State the model domain type to inspect.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   * 
   * `403 Forbidden` - user is not an administrator.
   * 
   * @description Only models marked as deleted can be returned. Any models permanantly deleted cannot be retrieved.
   */
  deletedModels(
    containerDomainType: string | ContainerDomainType,
    modelDomainType: string | ModelDomainType,
    query?: QueryParameters,
    options?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/deleted`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a tree structure of models with a model version that has been superseded. **Note:** this endpoint is only accessible to an administrator.
   * 
   * @param containerDomainType State the container domain type to inspect.
   * @param modelDomainType State the model domain type to inspect.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   * 
   * `403 Forbidden` - user is not an administrator.
   */
  modelSupersededModels(
    containerDomainType: string | ContainerDomainType,
    modelDomainType: string | ModelDomainType,
    query?: QueryParameters,
    options?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a tree structure of models with a documentation version that has been superseded. **Note:** this endpoint is only accessible to an administrator.
   * 
   * @param containerDomainType State the container domain type to inspect.
   * @param modelDomainType State the model domain type to inspect.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   * 
   * `403 Forbidden` - user is not an administrator.
   */
  documentationSupersededModels(
    containerDomainType: string | ContainerDomainType,
    modelDomainType: string | ModelDomainType,
    query?: QueryParameters,
    options?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded`;
    return this.simpleGet(url, query, options);
  }

  search(
    containerDomainType: string | ContainerDomainType,
    searchTerm: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/search/${searchTerm}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request a tree structure of model entities within the Mauro instance.
   * @param containerDomainType State the container domain type to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   */
  list(
    containerDomainType: string | ContainerDomainType,
    query?: TreeItemQueryParameters,
    options?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}`;
    return this.simpleGet(url, query, options);
  }

  get(
    containerDomainType: string | ContainerDomainType,
    catalogueItemDomainType,
    catalogueItemId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  getExpandedTree(
    containerDomainType: string | ContainerDomainType,
    catalogueItemId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestOptions
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/${catalogueItemId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }
}
