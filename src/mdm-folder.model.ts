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

import { Container } from './mdm-container-types.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Historical, SecurableModel } from './mdm-model-types.model';

/**
 * Represents a Folder in Mauro.
 * 
 * A folder is a container that can hold further catalogue items to help 
 * organise Mauro.
 * 
 * @see {@link VersionedFolder}
 */
export interface Folder extends Container {
  hasChildFolders?: boolean;
  [key: string]: any;
}

export type FolderDetail =
  Folder
  & SecurableModel
  & Historical;

export type FolderIndexResponse = MdmIndexResponse<Folder>;
export type FolderDetailResponse = MdmResponse<FolderDetail>;