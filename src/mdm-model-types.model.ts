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

import { CatalogueItemDomainType, Classifier, Payload, QueryParameters, Uuid, Version } from './mdm-common.model';

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
  'readByAuthenticated'
];

export type SecurableAction = typeof securableActions[number];

/**
 * Represents a Mauro entity that is securable and has a set of actions defined by the permissions of a user/session.
 */
export interface Securable {
  /**
   * A list of available actions that can be performed on this entity.
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

export interface Modelable {
  id?: Uuid;
  domainType: CatalogueItemDomainType;
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

export interface ModelRemoveParameters {
  permanent: boolean;
}

export type ModelRemoveQueryParameters = ModelRemoveParameters & QueryParameters;

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