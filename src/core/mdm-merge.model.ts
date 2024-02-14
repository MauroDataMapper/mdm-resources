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

import { DataModelDetail } from '../data-models/mdm-data-model.model';
import { Branchable, Modelable } from '../mdm-model-types.model';
import { ReferenceDataModelDetail } from '../reference-data/mdm-reference-data-model.model';
import { TerminologyDetail } from '../terminologies/mdm-terminology.model';
import { VersionedFolderDetail } from '../core/mdm-versioned-folder.model';
import {
  MdmResponse,
  MultiFacetAwareDomainType,
  Payload,
  Uuid
} from '../mdm-common.model';

/**
 * Represents all {@link MultiFacetAwareDomainType} values that can be used for merge operations.
 */
export type MergableMultiFacetAwareDomainType =
  | MultiFacetAwareDomainType.DataModels
  | MultiFacetAwareDomainType.ReferenceDataModels
  | MultiFacetAwareDomainType.Terminologies
  | MultiFacetAwareDomainType.VersionedFolders;

/**
 * Represents the possible types that could be returned after a successful committed merge operation.
 */
export type MergableCatalogueItem =
  | DataModelDetail
  | ReferenceDataModelDetail
  | TerminologyDetail
  | VersionedFolderDetail;

/**
 * Represents a catalogue item that is the main branch of a branchable catalogue item.
 *
 * This type represents the minimal set of properties required to understand what type of catalogue item this is. The
 * {@link Branchable.branchName} should always be "main".
 */
export type MainBranchItem = Modelable & Branchable & { [key: string]: any };

export type MainBranchResponse = MdmResponse<MainBranchItem>;

/**
 * Represents the type of merge operation applied to a {@link MergeDiffItem}.
 */
export enum MergeDiffType {
  /**
   * States that the diff item will be created in the _target_ branch because it only exists in the _source_ branch.
   */
  Creation = 'creation',

  /**
   * States that the diff item will be removed from the _target_ branch because it does not exist in the _source_ branch.
   */
  Deletion = 'deletion',

  /**
   * States that the diff item appears in both _source_ and _target_ branches but contains a different value.
   */
  Modification = 'modification'
}

/**
 * Represents the resolution of a merge conflict.
 */
export enum MergeConflictResolution {
  /**
   * States that the _source_ branch value is being taken.
   */
  Source = 'source',

  /**
   * States that the _target_ branch value is being taken.
   */
  Target = 'target',

  /**
   * States that the conflict was resolved manually using a mixture of _source_ and _target_ values.
   */
  Mixed = 'mixed'
}

/**
 * Represents a single item from a {@link MergeDiff} collection.
 */
export interface MergeDiffItem {
  /**
   * Gets the fully qualified path to the item.
   */
  path: string;

  /**
   * Gets the field name of the item that has changed.
   */
  fieldName: string;

  /**
   * Gets the value of the field in the _source_ branch.
   */
  sourceValue?: string;

  /**
   * Gets the value of the field in the _target_ branch.
   */
  targetValue?: string;

  /**
   * Gets the common ancestor value of this field.
   */
  commonAncestorValue?: string;

  /**
   * Determines if this change will produce a merge conflict. If so, it must be resolved.
   */
  isMergeConflict: boolean;

  /**
   * Determines if the value was changed in _source_ but deleted in _target_.
   */
  isSourceModificationAndTargetDeletion?: boolean;

  /**
   * Gets the type of merge difference this is.
   */
  type: MergeDiffType;
}

/**
 * Represents a collection of differences found in a merge inspection operation between two branchable catalogue items.
 */
export interface MergeDiff {
  /**
   * Gets the unique identifier of the _source_ branch catalogue item.
   */
  sourceId: Uuid;

  /**
   * Gets the unique identifier of the _target_ branch catalogue item.
   */
  targetId: Uuid;

  /**
   * Gets the fully qualified path to the _source_ catalogue item.
   */
  path: string;

  /**
   * Gets the label of the _source_ catalogue item.
   */
  label: string;

  /**
   * Gets the number of differences found between _source_ and _target_.
   */
  count: number;

  /**
   * Gets the collection of differences found between _source_ and _target_.
   */
  diffs: MergeDiffItem[];
}

export type MergeDiffResponse = MdmResponse<MergeDiff>;

/**
 * Represents the patch information to apply to a _target_ catalogue item to complete a merge operation.
 *
 * @see {@link CommitMergePayload}
 */
export interface CommitMergePatchPayload extends Payload {
  /**
   * Gets the unique identifier of the _source_ branch catalogue item.
   */
  sourceId: Uuid;

  /**
   * Gets the unique identifier of the _target_ branch catalogue item.
   */
  targetId: Uuid;

  /**
   * Gets the fully qualified path to the _source_ catalogue item.
   */
  path?: string;

  /**
   * Gets the label of the _source_ catalogue item.
   */
  label?: string;

  /**
   * Gets the number of patches to apply to the _target_.
   */
  count?: number;

  /**
   * Gets the collection of patches to apply to the _target_.
   */
  patches: MergeDiffItem[];
}

/**
 * Represents the payload for committing a merge from a _source_ catalogue item into a _target_ catalogue item.
 *
 * The merge commit payload contains all the differences to apply to the _target_ to save all changes made. To find
 * the initial differences, use the {@link MdmMergeResource.mergeDiff} endpoint.
 *
 * @see {@link MdmMergeResource.mergeDiff}
 * @see {@link MergeDiff}
 */
export interface CommitMergePayload extends Payload {
  /**
   * The change notice to apply to the commit. This is a simple comment to explain the modifications made to the merge.
   */
  changeNotice?: string;

  /**
   * States whether the _source_ branch should be deleted once the merge operation is completed.
   */
  deleteBranch?: boolean;

  /**
   * Gets the patch information to apply to the _target_ branch.
   */
  patch: CommitMergePatchPayload;
}

export type CommittedMergeResponse = MdmResponse<MergableCatalogueItem>;
