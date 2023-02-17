/*
Copyright 2020-2023 University of Oxford
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
import { Securable } from '../mdm-model-types.model';
import {
  CatalogueItemDomainType,
  Identifiable,
  MdmIndexResponse,
  MdmResponse,
  Uuid
} from '../mdm-common.model';
import { UserGroup } from './mdm-user-groups.model';

export interface GroupRole extends Identifiable, Securable {
  name: string;
  displayName: string;
  createdBy?: string;
  parent?: Uuid;
  applicationLevelRole: boolean;
}

export type GroupRoleIndexResponse = MdmIndexResponse<GroupRole>;
export type GroupRoleResponse = MdmResponse<GroupRole>;

export interface SecurableResourceGroupRole extends Identifiable, Securable {
  securableResourceDomainType: CatalogueItemDomainType;
  securableResourceId: Uuid;
  createdBy?: string;
  groupRole: GroupRole;
  userGroup: UserGroup;
}

export type SecurableResourceGroupRoleIndexResponse =
  MdmIndexResponse<SecurableResourceGroupRole>;
export type SecurableResourceGroupRoleResponse =
  MdmResponse<SecurableResourceGroupRole>;
