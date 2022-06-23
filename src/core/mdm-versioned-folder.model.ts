/*
Copyright 2020-2021 University of Oxford
and Health and Social Care Information Centre, also known as NHS Digital

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
  Branchable,
  Finalisable,
  Historical,
  SecurableModel,
  Versionable
} from '../mdm-model-types.model';
import { Container, ContainerDetail } from '../mdm-container-types.model';
import { MdmIndexResponse, MdmResponse } from '../mdm-common.model';

/**
 * Represents a Versioned Folder in Mauro.
 *
 * This is similar to a {@link Folder} but also has the ability to be branched
 * and versioned, maintaining history for all contents within it also; to
 * finalise a Versioned Folder is to finalise everything within it.
 *
 * @see {@link Folder}
 */
export interface VersionedFolder extends Container {
  [key: string]: any;
  hasChildFolders?: boolean;
}

export type VersionedFolderDetail = VersionedFolder &
  ContainerDetail &
  SecurableModel &
  Historical &
  Branchable &
  Versionable &
  Finalisable;

export type VersionedFolderIndexResponse = MdmIndexResponse<VersionedFolder>;
export type VersionedFolderDetailResponse = MdmResponse<VersionedFolderDetail>;
