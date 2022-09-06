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

import { Classifier } from './core/mdm-classifier.model';
import {
  AsyncParameters,
  CatalogueItem,
  CatalogueItemDomainType,
  CatalogueItemReference,
  MdmResponse,
  Payload,
  Uuid,
  Version
} from './mdm-common.model';

export type ModelDomain =
  | 'dataModels'
  | 'terminologies'
  | 'codeSets'
  | 'referenceDataModels'
  | 'versionedFolders';

export interface Authority {
  id: Uuid;
  label: string;
  url?: string;
}

declare const securableActions: readonly [
  'show',
  'update',
  'changeFolder',
  'delete',
  'disable',
  'index',
  'save',
  'comment',
  'editDescription',
  'softDelete',
  'newDocumentationVersion',
  'newBranchModelVersion',
  'finalise',
  'createNewVersions',
  'newForkModel',
  'newModelVersion',
  'mergeInto',
  'readByEveryone',
  'readByAuthenticated',
  'createFolder',
  'createVersionedFolder',
  'createContainer',
  'createModel',
  'createModelItem',
  'moveToFolder',
  'moveToVersionedFolder',
  'moveToContainer',
  'finalisedReadActions',
  'finalisedEditActions'
];

/**
 * Type alias to define available securable actions a catalogue item can perform.
 */
export type SecurableAction = typeof securableActions[number];

/**
 * Represents a Mauro entity that is securable and has a set of actions defined by the permissions of a user/session.
 */
export interface Securable {
  /**
   * A list of available actions that can be performed on this entity.
   *
   * @see {@link SecurableAction} - Type definition
   */
  availableActions: SecurableAction[];
}

/**
 * Represents a Mauro entity that is changed over time.
 */
export interface Historical {
  /**
   * The date and time this entity was last updated.
   */
  lastUpdated?: string;
}

/**
 * Represents a Mauro entity that can be branched for version control.
 */
export interface Branchable {
  /**
   * The name of the branch this entity applies to.
   */
  branchName?: string;
}

/**
 * Represents a Mauro entity that can be versioned.
 */
export interface Versionable {
  /**
   * The model version of this entity, if applicable.
   */
  modelVersion?: Version;

  /**
   * A custom tag assigned to this version of this entity, if applicable.
   */
  modelVersionTag?: string;

  /**
   * The documentation of this entity, if applicable.
   */
  documentationVersion?: Version;
}

/**
 * Represents a Mauro entity that can be finalised, such as a Data Model.
 */
export interface Finalisable {
  /**
   * Determine if this catalogue item is finalised or still in draft form.
   */
  finalised: boolean;

  /**
   * Gets the date/time this catalogue item was finalised. If still in draft form,
   * this will be undefined/not included.
   */
  dateFinalised?: string;
}

export interface Modelable extends CatalogueItem {
  label: string;
  description?: string;
  deleted?: boolean;
}

export interface ModelableDetail {
  authority?: Authority;
  author?: string;
  organisation?: string;
  aliases?: string[];
  classifiers?: Classifier[];
}

export interface SecurableModel extends Securable {
  readableByEveryone?: boolean;
  readableByAuthenticatedUsers?: boolean;
}

/**
 * Represents all the properties contained in a model domain object.
 */
export type ModelDomainDetail = Modelable &
  ModelableDetail &
  SecurableModel &
  Historical &
  Branchable &
  Versionable &
  Finalisable;

export type ModelDomainDetailResponse = MdmResponse<ModelDomainDetail>;

export interface ModelChildItem {
  /**
   * The unique identifier of the parent/owner model.
   */
  model?: Uuid;
}

/**
 * Payload for endpoints that finalise a model type.
 */
export interface FinalisePayload extends Payload {
  /**
   * Define how to advance the version of the finalised model.
   */
  versionChangeType: 'Major' | 'Minor' | 'Patch' | 'Custom';

  /**
   * If {@link versionChangeType} is `Custom`, sets the custom version number to use for the finalised model.
   *
   * Has no affect for any other {@link versionChangeType}.
   */
  version?: Version;

  /**
   * Set an optional tag name to the finalised version.
   */
  versionTag?: string;
}

export interface ModelCreatePayload extends Payload {
  folder: Uuid;
  label: string;
  author: string;
  organisation: string;
  description?: string;
  classifiers?: CatalogueItemReference[];
}

export interface ModelChildCreatePayload extends Payload {
  label: string;
  description?: string;
}

export interface ModelUpdatePayload extends Payload {
  id: Uuid;
  domainType: CatalogueItemDomainType;
  label?: string;
  author?: string;
  organisation?: string;
  description?: string;
  aliases?: string[];
  classifiers?: Classifier[];
}

export interface ModelChildUpdatePayload extends Payload {
  id: Uuid;
  label: string;
  description?: string;
}

/**
 * Payload describing how to fork a model.
 */
export interface ForkModelPayload extends Payload, AsyncParameters {
  /**
   * The new label for the forked model.
   */
  label: string;

  /**
   * State whether permissions from the source model should be copied across to the
   * forked model.
   */
  copyPermissions?: boolean;

  /**
   * State whether data flows from the source model should be copied across to the
   * forked model.
   */
  copyDataFlows?: boolean;
}

/**
 * Payload describing how to start a new version of a model.
 */
export type VersionModelPayload = Payload & AsyncParameters;

/**
 * Payload describing how to start a new branch for a model.
 */
export interface BranchModelPayload extends Payload, AsyncParameters {
  /**
   * The new branch name for the branched model.
   */
  branchName: string;
}

/**
 * Represents basic details of an item from a model version tree.
 *
 * @see {@link ModelVersionItem}
 */
export interface BasicModelVersionItem {
  id: Uuid;
  branch?: string;
  modelVersion?: Version;
  documentationVersion?: Version;
  displayName: string;
}

export type BasicModelVersionTreeResponse = MdmResponse<
  BasicModelVersionItem[]
>;

export interface ModelVersionItemTarget {
  id: Uuid;
  description?: string;
}

/**
 * Represents full details of an item from a model version tree.
 *
 * @see {@link BasicModelVersionItem}
 */
export interface ModelVersionItem {
  id: Uuid;
  label: string;
  branch?: string;
  modelVersion?: Version;
  documentationVersion?: Version;
  isNewBranchModelVersion?: boolean;
  isNewDocumentationVersion?: boolean;
  isNewFork?: boolean;
  targets: ModelVersionItemTarget[];
}

export type ModelVersionTreeResponse = MdmResponse<ModelVersionItem[]>;
