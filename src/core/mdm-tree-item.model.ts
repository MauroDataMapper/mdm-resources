/*
Copyright 2020-2024 University of Oxford and NHS England

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
import { Securable } from '../mdm-model-types.model';
import {
  CatalogueItem,
  MdmResponse,
  QueryParameters,
  Uuid,
  Version
} from '../mdm-common.model';

export interface MdmTreeItem extends Required<CatalogueItem>, Securable {
  [key: string]: any;
  label?: string;
  children?: MdmTreeItem[];
  hasChildFolders?: boolean;
  deleted?: boolean;
  finalised?: boolean;
  type?: string;
  parentFolder?: string;
  superseded?: boolean;
  documentationVersion?: Version;
  branchName?: string;
  modelVersion?: Version;
  modelVersionTag?: string;
  modelId?: Uuid;
  parentId?: Uuid;
  path?: string;
}

export interface TreeItemListParameters {
  includeDocumentSuperseded?: boolean;
  includeModelSupersedd?: boolean;
  includeDeleted?: boolean;
  noCache?: boolean;
}

export interface TreeItemExpandedParameters {
  /**
   * State whether an expanded tree is required for the purposes of carry out merge differences.
   */
  forDiff: boolean;
}

export type TreeItemListQueryParameters = TreeItemListParameters &
  QueryParameters;
export type TreeItemExpandedQueryParameters = TreeItemExpandedParameters &
  QueryParameters;

export type MdmTreeItemListResponse = MdmResponse<MdmTreeItem[]>;
export type MdmTreeItemResponse = MdmResponse<MdmTreeItem>;
