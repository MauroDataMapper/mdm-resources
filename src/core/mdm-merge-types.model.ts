/*
Copyright 2020-2023 University of Oxford and NHS England

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

import { Breadcrumb, MdmResponse, Uuid } from '../mdm-common.model';

/**
 * Represents the object values of a catalogue item or element under comparison.
 *
 * The {@link DiffObject} always has an `id`, then additional properties depending on the
 * property name of the {@link Diff} object.
 */
export interface DiffObject {
  [key: string]: any;
  /**
   * The unique identifer of this object.
   */
  id: Uuid;

  /**
   * Collection of properties and values for this object.
   */
}

/**
 * Represents a set of created elements for a model under comparision.
 *
 * These represent elements/objects/values that are created in the right (target) side, but not the left (source) side.
 */
export interface Creation {
  /**
   * Get all the {@link DiffObject} values representing what was created.
   */
  created: DiffObject[];
}

/**
 * Represents a set of deleted elements for a model under comparision.
 *
 * These represent elements/objects/values that are removed in the right (target) side, but not the left (source) side.
 */
export interface Deletion {
  deleted: DiffObject[];
}

/**
 * Represents a primitive, simple change for string values.
 *
 * @see {@link Modification}
 */
export interface PrimitiveChange {
  /**
   * Gets the value as it appears in the left (source) side.
   */
  left: string;

  /**
   * Gets the value as it appears in the right (target) side.
   */
  right: string;
}

/**
 * Represents a complex modification between two model elements.
 *
 * The complex modification is represented as a further {@link DiffCollection} with further details.
 */
export interface Modification {
  /**
   * Gets the collection of modified elements between two models.
   */
  modified: DiffCollection[];
}

/**
 * Represents the type of diffs available.
 */
export type DiffType = Creation | Deletion | PrimitiveChange | Modification;

/**
 * Represents a difference between two models.
 *
 * Each diff is a name-value pair. The `name` is the property of the model that has changed, and the `value` is
 * the {@link DiffType} that has occurred.
 */
export interface Diff {
  [key: string]: DiffType;
}

/**
 * Represents a collection of differences between two model catalogue items.
 */
export interface DiffCollection {
  /**
   * The label given to this diff collection.
   */
  label: string;

  /**
   * The unique identifier of the left side of the diff, i.e. the source.
   */
  leftId: Uuid;

  /**
   * The breadcrumb trail for the left-side catalogue item. This is only returned for comparisions against
   * lower level catalogue items, such as Data Elements.
   */
  leftBreadcrumbs?: Breadcrumb[];

  /**
   * The unique identifier of the right side of the diff, i.e. the target.
   */
  rightId: Uuid;

  /**
   * The breadcrumb trail for the right-side catalogue item. This is only returned for comparisions against
   * lower level catalogue items, such as Data Elements.
   */
  rightBreadcrumb?: Breadcrumb[];

  /**
   * Gets the number of differences found in the {@link DiffCollection.diffs} array.
   */
  count: number;

  /**
   * Gets the collection of differences found.
   */
  diffs: Diff[];
}

export type DiffCollectionResponse = MdmResponse<DiffCollection>;
