/*
Copyright 2020-2023 University of Oxford and NHS England

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
  RequestSettings,
  QueryParameters,
  ContainerDomainType,
  ModelDomainType,
  Uuid,
  MultiFacetAwareDomainType,
  SearchQueryParameters
} from '../mdm-common.model';
import {
  TreeItemExpandedQueryParameters,
  TreeItemListQueryParameters
} from './mdm-tree-item.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 |   GET    | /api/tree/${containerDomainType}/search/${searchTerm}                                                 | Action: search
 |   GET    | /api/tree/${containerDomainType}                                                                      | Action: index
 |   GET    | /api/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}                        | Action: show
 */

/**
 * MDM resource for tree item management.
 *
 * Mauro represents all models and entities under a related tree, for instance:
 *
 * * Folders contain models
 * * Models contain data classes
 * * Terminologies contain terms
 * * And so on.
 *
 * Use this resource to fetch child items for the following container types:
 *
 * * {@link ContainerDomainType.FOLDERS} for the main model tree.
 * * {@link ContainerDomainType.CLASSIFIERS} for all models listed under classifications.
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
   * @description Only models marked as deleted can be returned. Any models _permanantly_ deleted cannot be retrieved.
   */
  deletedModels(
    containerDomainType: string | ContainerDomainType,
    modelDomainType: string | ModelDomainType,
    query?: QueryParameters,
    options?: RequestSettings
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
    options?: RequestSettings
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
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a full text search against the Mauro model tree.
   *
   * @param containerDomainType State the container domain type to search.
   * @param searchTerm Provide the term(s) to search for.
   * @param query Additional search parameters to filter the search results.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   *
   * @see {@link TreeItemSearchParameters}
   */
  search(
    containerDomainType: ContainerDomainType,
    searchTerm: string,
    query?: SearchQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/search/${searchTerm}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request the top level tree structure of model entities within the Mauro instance.
   *
   * @param containerDomainType State the container domain type to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   *
   * @see {@link MdmTreeItemResource.get}
   */
  list(
    containerDomainType: ContainerDomainType,
    query?: TreeItemListQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request children model entities within the Mauro instance for a given parent entity.
   *
   * @param containerDomainType State the container domain type to inspect.
   * @param modelDomainType State the model domain type to inspect.
   * @param id The unique identifier of the parent entity to fetch children for.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a [[MdmTreeItemListResponse]] containing a list of [[MdmTreeItem]] nodes.
   *
   * @see {@link MdmTreeItemResource.list}
   */
  get(
    containerDomainType: string | ContainerDomainType,
    modelDomainType: string | ModelDomainType,
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/${modelDomainType}/${id}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request the complete expanded tree of an entity in one operation.
   *
   * @param modelDomainType State the model domain type to inspect.
   * @param id The unique identifier of the parent entity to fetch children for.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} node. If the tree item contains any children,
   * these will be returned also under {@link MdmTreeItem.children}.
   *
   * @see {@link MdmTreeItemResource.list}
   */
  getExpandedTree(
    modelDomainType: ModelDomainType,
    id: Uuid,
    query?: TreeItemExpandedQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/full/${modelDomainType}/${id}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request the children of the folder
   *
   *
   * @param id The unique identifier of the folder to fetch children for.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} node. If the tree item contains any children,
   * these will be returned also under {@link MdmTreeItem.children}.
   *
   * @see {@link MdmTreeItemResource.list}
   */
  getFolder(
    id: Uuid,
    query?: TreeItemExpandedQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/folders/${id}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - get all the ancestor items from the tree for a given catalogue tree item.
   *
   * @param containerDomainType State the container domain type to inspect.
   * @param multiFacetAwareDomainType State the model domain type to inspect.
   * @param id The unique identifier of the entity to fetch ancestors for.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} with children down to
   * the original tree item.
   */
  ancestors(
    containerDomainType: ContainerDomainType,
    multiFacetAwareDomainType: MultiFacetAwareDomainType,
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/${multiFacetAwareDomainType}/${id}/ancestors`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - get all the ancestor items from the tree for a given container.
   *
   * @param containerDomainType State the container domain type to inspect.
   * @param id The unique identifier of the container to fetch ancestors for.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MdmTreeItemResponse} containing a {@link MdmTreeItem} with children down to
   * the original tree item.
   */
  containerAncestors(
    containerDomainType: ContainerDomainType,
    id: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/tree/${containerDomainType}/${id}/ancestors`;
    return this.simpleGet(url, query, options);
  }
}
