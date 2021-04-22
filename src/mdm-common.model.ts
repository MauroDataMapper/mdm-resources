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
 * Represents a response from an [[MdmResource]] API endpoint.
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

export interface SortOptions {
  sort: string;
  order?: 'asc' | 'desc'
}

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
 export interface RequestOptions {
  [key: string]: any;
}