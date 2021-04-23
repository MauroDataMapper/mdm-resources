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

import { ItemDomainType, MdmResponse, QueryParameters, Uuid } from "mdm-common.model";

export interface MdmTreeItem {
  id: Uuid;
  label?: string;
  children?: MdmTreeItem[];
  hasChildren: boolean;
  created?: boolean;
  deleted?: boolean;
  selected?: boolean;
  isGhost?: boolean;
  modified?: boolean;
  finalised?: boolean;
  domainType: ItemDomainType;
  type?: string;
  terminology?: any;
  term?: any;    
  open?: boolean;
  folder?: string;
  disableChecked?: boolean;
  code?: string;
  hasChildFolders?: boolean;
  checked?: boolean;
  parentDataClass?: Node;
  dataModel?: any;
  isRoot?: boolean;
  superseded?: boolean;
  documentationVersion?: string;
  branchName?: string;
  modelVersion?: string;
  modelId?: string;
  parentId?: string;
  model?: any;
  [key: string]: any;
}

export interface TreeItemListParameters {
  includeDocumentSuperseded?: boolean;
  includeModelSupersedd?: boolean;
  includeDeleted?: boolean;
}

export interface TreeItemExpandedParameters {
  /**
   * State whether an expanded tree is required for the purposes of carry out merge differences.
   */
  forDiff: boolean;
}

export type TreeItemListQueryParameters = TreeItemListParameters & QueryParameters;
export type TreeItemExpandedQueryParameters = TreeItemExpandedParameters & QueryParameters;

export type MdmTreeItemListResponse = MdmResponse<MdmTreeItem[]>
export type MdmTreeItemResponse = MdmResponse<MdmTreeItem>;

export enum SearchDomainType {  
  DataModel = 'DataModel',
  DataClass = 'DataClass',
  DataElement = 'DataElement',
  DataType = 'DataType',
  EnumerationType = 'EnumerationType'
}

/**
 * Set of parameters to supply for searching the model tree.
 * 
 * @see {@link MdmTreeItemResource.search}
 */
export interface TreeItemSearchParameters {
  /**
   * The term, or terms, to search for. For an exact match, enclose the test in double quotes.
   */
  searchTerm: string;

  /**
   * Define how many search results to return in one request.
   */
  limit?: number;

  /**
   * Define the offset to the search results. Use in combination with {@link TreeItemSearchParameters.limit} to handle paging of results.
   */
  offset?: number;

  /**
   * List the domain types to search for. If not provided, then all domain types will be searched.
   */
  domainTypes?: SearchDomainType[];

  /**
   * Define if the search term should only be checked in the label of entities. If not defined or set to `false`, other text fields will be
   * included in the search.
   */
  labelOnly?: boolean;
  dataModelTypes?: string[];
  classifiers?: string[];
  classifierFilter?: any;

  /**
   * Provide a date to filter by last updated fields. Date must be provided as a string in the format `yyyy-MM-dd`.
   */
  lastUpdatedAfter?: string;

  /**
   * Provide a date to filter by last updated fields. Date must be provided as a string in the format `yyyy-MM-dd`.
   */
  lastUpdatedBefore?: string;

  /**
   * Provide a date to filter by created fields. Date must be provided as a string in the format `yyyy-MM-dd`.
   */
  createdAfter?: any;

  /**
   * Provide a date to filter by created fields. Date must be provided as a string in the format `yyyy-MM-dd`.
   */
  createdBefore?: any;

  /**
   * Define how many search results to return in one request.
   */
  pageSize?: number;

  /**
   * Define the offset to the search results. Use in combination with {@link TreeItemSearchParameters.pageSize} to handle paging of results.
   */
  pageIndex?: number;
}

export type TreeItemSearchQueryParameters = TreeItemSearchParameters & QueryParameters;