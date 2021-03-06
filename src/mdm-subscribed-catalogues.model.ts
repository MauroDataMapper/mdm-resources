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

import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, ModelDomainType, Payload, Uuid } from './mdm-common.model';

export interface SubscribedCatalogue {
  id?: Uuid;
  url: string;
  apiKey?: Uuid;
  label: string;
  description?: string;
  refreshPeriod?: number;
}

export type SubscribedCatalogueResponse = MdmResponse<SubscribedCatalogue>;
export type SubscribedCatalogueIndexResponse = MdmIndexResponse<SubscribedCatalogue>;

export interface AvailableDataModel {
  modelId?: Uuid;
  label: string;
  description?: string;
  modelType: CatalogueItemDomainType;
}

export interface SubscribedDataModel extends Payload {
  id?: Uuid;
  subscribedModelId: Uuid;
  subscribedModelType: CatalogueItemDomainType;
  folderId: Uuid;
}

export type AvailableDataModelIndexResponse = MdmIndexResponse<AvailableDataModel>;
export type SubscribedDataModelResponse = MdmResponse<SubscribedDataModel>;
export type SubscribedDataModelIndexResponse = MdmIndexResponse<SubscribedDataModel>;