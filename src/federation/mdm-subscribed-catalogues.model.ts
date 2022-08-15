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
import { ImporterProvider } from '../core';
import {
  CatalogueItemDomainType,
  MdmIndexResponse,
  MdmResponse,
  Payload,
  Uuid
} from '../mdm-common.model';

export type SubscribedCatalogueTypeResponse = MdmResponse<string[]>;

export interface SubscribedCatalogue {
  id?: Uuid;
  url: string;
  apiKey?: Uuid;
  label: string;
  description?: string;
  refreshPeriod?: number;
  subscribedCatalogueType: string;
}

export type SubscribedCatalogueResponse = MdmResponse<SubscribedCatalogue>;
export type SubscribedCatalogueIndexResponse = MdmIndexResponse<
  SubscribedCatalogue
>;

export interface PublishedDataModelLink {
  contentType: string;
  url: string;
}

export interface PublishedDataModel {
  modelId?: Uuid;
  label: string;
  description?: string;
  modelType?: CatalogueItemDomainType;
  version?: string;
  dateCreated?: string;
  datePublished?: string;
  lastUpdated?: string;
  links?: PublishedDataModelLink[];
}

export interface SubscribedDataModel {
  id: Uuid;
  subscribedModelId: Uuid;
  folderId: Uuid;
  federated: boolean;
  localModelId?: Uuid;
}

export interface CreateSubscribedDataModel {
  subscribedModelId: Uuid;
  subscribedModelType: CatalogueItemDomainType;
  folderId: Uuid;
}

export interface SubscribedDataModelPayload extends Payload {
  /**
   * The details of the published model to subscribe to.
   */
  subscribedModel: CreateSubscribedDataModel;

  /**
   * Optional content URL to fetch the published model from.
   */
  url?: string;

  /**
   * Optional content type when using the URL.
   */
  contentType?: string;

  /**
   * Optional importer service to use for the subscription. This is not required, but can be used to
   * override the subscription process.
   */
  importerProviderService?: ImporterProvider;
}

export type PublishedDataModelIndexResponse = MdmIndexResponse<
  PublishedDataModel
>;
export type SubscribedDataModelResponse = MdmResponse<SubscribedDataModel>;
export type SubscribedDataModelIndexResponse = MdmIndexResponse<
  SubscribedDataModel
>;
