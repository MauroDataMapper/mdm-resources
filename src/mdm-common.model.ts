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

/**
 * Type alias for a unique indentifier type used in all entities in Mauro.
 */
export type Uuid = string;

/**
 * Type alias for a type defining a version number in Mauro.
 */
export type Version = string;

export enum ContainerDomainType {
  CLASSIFIERS = 'classifiers',
  FOLDERS = 'folders'
}

export enum ModelDomainType {
  FOLDERS = 'folders',
  DATA_MODELS = 'dataModels',
  DATA_CLASSES = 'dataClasses',
  DATA_TYPES = 'dataTypes',
  TERMINOLOGIES = 'terminologies',
  REFERENCEDATAMODELS = 'referenceDataModels',
  TERMS = 'terms',
  ALL = 'all'
}

export enum ItemDomainType {
  Folder = 'Folder',
  DataModel = 'DataModel',
  DataClass = 'DataClass',
  DataElement = 'DataElement',
  Terminology = 'Terminology',
  Term = 'Term',
  CodeSet = 'CodeSet',
  Classification = 'Classification',
  ReferenceDataModel = 'ReferenceDataModel',
  EnumerationType = 'EnumerationType'
}

/**
 * Represents a response from an [[MdmResource]] API endpoint.
 *
 * @typeparam T The type of object the body of the response represents.
 */
export interface MdmResponse<T> {
  /**
   * The body of the response from the endpoint.
   */
  body: T;
}

/**
 * Represents the body of a [[MdmResource]] response for an index/list request.
 *
 * @typeparam T The type of object each item in the list represents.
 *
 * @see [[MdmIndexResponse]]
 */
export interface MdmIndexBody<T> {
  /**
   * Gets the number of items in the returned list.
   */
  count: number;

  /**
   * Gets the list of items returned from the endpoint.
   */
  items: T[];
}

/**
 * Type alias for an [[MdmResource]] API endpoint response for an index/list request.
 *
 * @typeparam T The type of object each item in the list represents.
 *
 * @see [[MdmIndexBody]]
 */
export type MdmIndexResponse<T> = MdmResponse<MdmIndexBody<T>>;

/**
 * Type to define the query string parameters to pass to a `GET` resource request.
 *
 * This type uses an index signature to provide any property and value to this object, for example:
 *
 * ```ts
 * const parameters: QueryParameters = {
 *  id: 123,
 *  sort: 'name',
 *  enabled: true
 * };
 * ```
 */
export interface QueryParameters {
  [key: string]: any;
}

/**
 * Type to define sorting parameters for a query request.
 */
export interface SortParameters {
  /**
   * The field/property name to sort by.
   */
  sort?: string;

  /**
   * State what sort order to use. If supplied, must be either:
   *
   * * `'asc'` for ascending order, or
   * * `'desc'` for descending order.
   *
   * If not supplied, the default will value used will depend on the resource requested.
   */
  order?: 'asc' | 'desc';
}

/**
 * Type to define pagination parameters for a query request.
 */
export interface PageParameters {
  /**
   * Define the maximum number of results to return in a query.
   */
  max?: number;

  /**
   * Define the offset to start at when returning query results.
   */
  offset?: number;
}

/**
 * Type alias for common filtering/querying parameters to send as part of a `HTTP GET` query string.
 *
 * This type is a combination of:
 *
 * * Sorting
 * * Pagination
 * * Any other query string parameters, such as filters
 */
export type FilterQueryParameters = SortParameters & PageParameters & QueryParameters;

/**
 * Type to define the options to pass to an [[IMdmRestHandler]] to process
 * a resource.
 *
 * This type uses an index signature to provide any property and value to this object, for example:
 *
 * ```ts
 * const options: RequestOptions = {
 *  method: 'POST',
 *  body: {
 *      id: 42,
 *      name: 'Test'
 *  }
 * };
 * ```
 *
 * @see [[IMdmRestHandler]]
 */
export interface MdmRequestOptions {
  [key: string]: any;
}

/**
 * Represents a generic payload for a `POST` or `PUT` request.
 *
 * Use this only when the contents of the payload are not known in advance, otherwise choose to use
 * a more descriptive payload type.
 */
export interface Payload {
  [key: string]: any;
}

/**
 * Represents a Mauro entity that is securable and has a set of actions defined by the permissions of a user/session.
 */
export interface Securable {
  /**
   * A list of available actions that can be performed on this entity.
   */
  availableActions: string[];
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

export interface Breadcrumb {
  id: Uuid;
  label: string;
  domainType: ItemDomainType;
  finalised?: boolean;
}

export interface Authority {
  id: Uuid;
  label: string;
  url?: string;
}

export interface Classifier extends Historical {
  id: Uuid;
  label: string;
}