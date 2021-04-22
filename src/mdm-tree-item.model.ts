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

import { MdmResponse, QueryParameters, Uuid } from "mdm-common.model";

export enum TreeItemDomainType {
  Folder = 'Folder',
  DataModel = 'DataModel',
  DataClass = 'DataClass',
  DataElement = 'DataClass',
  Terminology = 'Terminology',
  Term = 'Term',
  CodeSet = 'CodeSet',
  Classification = 'Classification',
  ReferenceDataModel = 'ReferenceDataModel',
  EnumerationType = 'EnumerationType'
}

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
  domainType: TreeItemDomainType;
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
}

export interface TreeItemParameters {
  includeDocumentSuperseded?: boolean;
  includeModelSupersedd?: boolean;
  includeDeleted?: boolean;
}

export type TreeItemQueryParameters = TreeItemParameters & QueryParameters;

export type MdmTreeItemListResponse = MdmResponse<MdmTreeItem[]>