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

/**
 * Type alias for a unique indentifier type used in all entities in Mauro.
 */
export type Uuid = string;

/**
 * Type alias for a type defining a version number in Mauro.
 */
export type Version = string;

/**
 * Type alias for a date represented as a string.
 */
export type MdmDate = string;

export enum ContainerDomainType {
  Classifiers = 'classifiers',
  Folders = 'folders',
  VersionedFolders = 'versionedFolders'
}

export enum ModelDomainType {
  Folders = 'folders',
  DataModels = 'dataModels',
  DataClasses = 'dataClasses',
  DataTypes = 'dataTypes',
  Terminologies = 'terminologies',
  ReferenceDataModels = 'referenceDataModels',
  Terms = 'terms',
  Classifiers = 'classifiers',
  VersionedFolders = 'versionedFolders',
  All = 'all'
}

/**
 * Represents the available catalogue items in Mauro.
 *
 * @see {@link catalogueItemToMultiFacetAware}
 */
export enum CatalogueItemDomainType {
  Folder = 'Folder',
  DataModel = 'DataModel',
  DataClass = 'DataClass',
  DataElement = 'DataElement',
  Terminology = 'Terminology',
  Term = 'Term',
  CodeSet = 'CodeSet',
  Classifier = 'classifier',
  ReferenceDataModel = 'ReferenceDataModel',
  EnumerationType = 'EnumerationType',
  PrimitiveType = 'PrimitiveType',
  ReferenceType = 'ReferenceType',
  TerminologyType = 'TerminologyType',
  ReferenceDataModelType = 'ReferenceDataModelType',
  CodeSetType = 'CodeSetType',
  ModelDataType = 'ModelDataType',
  ReferenceFile = 'ReferenceFile',
  VersionedFolder = 'VersionedFolder',
  Root = 'Root',
  LocalCatalogue = 'LocalCatalogue',
  ExternalCatalogues = 'ExternalCatalogues',
  SubscribedCatalogue = 'SubscribedCatalogue',
  FederatedDataModel = 'FederatedDataModel',
  TermRelationshipType = 'TermRelationshipType',
  ReferencePrimitiveType = 'ReferencePrimitiveType',
  ReferenceEnumerationType = 'ReferenceEnumerationType'
}

/**
 * Represents any catalogue item that is "multi-facet aware", meaning an item that can contain multiple facets or metadata values.
 *
 * @description These string constants are typically used in URL endpoints to generalise endpoints that are grouped by action.
 *
 * @see {@link multiFacetAwareToCatalogueItem}
 */
export enum MultiFacetAwareDomainType {
  Classifiers = 'classifiers',
  CodeSets = 'codeSets',
  DataClasses = 'dataClasses',
  DataClassComponents = 'dataClassComponents',
  DataElements = 'dataElements',
  DataElementComponents = 'dataElementComponents',
  DataFlows = 'dataFlows',
  DataModels = 'dataModels',
  DataTypes = 'dataTypes',
  EnumerationTypes = 'enumerationTypes',
  EnumerationValues = 'enumerationValues',
  Folders = 'folders',
  ModelDataTypes = 'modelDataTypes',
  PrimitiveTypes = 'primitiveTypes',
  ReferenceDataElements = 'referenceDataElements',
  ReferenceDataModels = 'referenceDataModels',
  ReferenceDataTypes = 'referenceDataTypes',
  ReferenceEnumerationTypes = 'referenceEnumerationTypes',
  ReferenceEnumerationValues = 'referenceEnumerationValues',
  ReferencePrimitiveTypes = 'referencePrimitiveTypes',
  ReferenceTypes = 'referenceTypes',
  Terms = 'terms',
  TermRelationships = 'termRelationships',
  TermRelationshipTypes = 'termRelationshipTypes',
  Terminologies = 'terminologies',
  VersionedFolders = 'versionedFolders'
}

/**
 * Determine if a given domain type represents a Container.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a container type.
 */
export const isContainerDomainType = (domainType: CatalogueItemDomainType) => {
  return (
    domainType === CatalogueItemDomainType.Classifier ||
    domainType === CatalogueItemDomainType.Folder ||
    domainType === CatalogueItemDomainType.VersionedFolder
  );
};

/**
 * Determine if a given domain type represents a Model.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a model type.
 */
export const isModelDomainType = (domainType: CatalogueItemDomainType) => {
  return (
    domainType === CatalogueItemDomainType.DataModel ||
    domainType === CatalogueItemDomainType.CodeSet ||
    domainType === CatalogueItemDomainType.Terminology ||
    domainType === CatalogueItemDomainType.ReferenceDataModel
  );
};

/**
 * Determine if a given domain type represents a Mauro data type.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a data type.
 */
export const isDataType = (domainType: CatalogueItemDomainType) => {
  return (
    domainType === CatalogueItemDomainType.CodeSetType ||
    domainType === CatalogueItemDomainType.ModelDataType ||
    domainType === CatalogueItemDomainType.PrimitiveType ||
    domainType === CatalogueItemDomainType.ReferenceType ||
    domainType === CatalogueItemDomainType.EnumerationType ||
    domainType === CatalogueItemDomainType.TerminologyType ||
    domainType === CatalogueItemDomainType.ReferenceDataModelType
  );
};

export const catalogueItemDomainTypeToContainerDomainType = (
  value: CatalogueItemDomainType
) => {
  switch (value) {
    case CatalogueItemDomainType.Classifier:
      return ContainerDomainType.Classifiers;
    case CatalogueItemDomainType.Folder:
      return ContainerDomainType.Folders;
    case CatalogueItemDomainType.VersionedFolder:
      return ContainerDomainType.VersionedFolders;
    default:
      throw new Error(`Domain type ${value} is not a container type`);
  }
};

/**
 * Maps a {@link CatalogueItemDomainType} to an equivalent {@link MultiFacetAwareDomainType}.
 *
 * @param value The catalogue item domain type to map from.
 * @returns The correct {@link MultiFacetAwareDomainType} or `undefined` if there is no equivalent.
 *
 * @description Use this utility function for generalising some endpoints when only given an object that is a {@link CatalogueItem}.
 */
export const catalogueItemToMultiFacetAware = (
  value: CatalogueItemDomainType
): MultiFacetAwareDomainType | undefined => {
  switch (value) {
    case CatalogueItemDomainType.Classifier:
      return MultiFacetAwareDomainType.Classifiers;
    case CatalogueItemDomainType.CodeSet:
      return MultiFacetAwareDomainType.CodeSets;
    case CatalogueItemDomainType.DataClass:
      return MultiFacetAwareDomainType.DataClasses;
    case CatalogueItemDomainType.DataElement:
      return MultiFacetAwareDomainType.DataElements;
    case CatalogueItemDomainType.DataModel:
      return MultiFacetAwareDomainType.DataModels;
    case CatalogueItemDomainType.EnumerationType:
      return MultiFacetAwareDomainType.EnumerationTypes;
    case CatalogueItemDomainType.Folder:
      return MultiFacetAwareDomainType.Folders;
    case CatalogueItemDomainType.ModelDataType:
      return MultiFacetAwareDomainType.ModelDataTypes;
    case CatalogueItemDomainType.PrimitiveType:
      return MultiFacetAwareDomainType.PrimitiveTypes;
    case CatalogueItemDomainType.ReferenceDataModel:
      return MultiFacetAwareDomainType.ReferenceDataModels;
    case CatalogueItemDomainType.ReferenceType:
      return MultiFacetAwareDomainType.ReferenceTypes;
    case CatalogueItemDomainType.Term:
      return MultiFacetAwareDomainType.Terms;
    case CatalogueItemDomainType.Terminology:
      return MultiFacetAwareDomainType.Terminologies;
    case CatalogueItemDomainType.VersionedFolder:
      return MultiFacetAwareDomainType.VersionedFolders;
    default:
      return undefined;
  }
};

/**
 * Maps a {@link MultiFacetAwareDomainType} to an equivalent {@link CatalogueItemDomainType}.
 *
 * @param value The multi facet aware domain type to map from.
 * @returns The correct {@link CatalogueItemDomainType} or `undefined` if there is no equivalent.
 */
export const multiFacetAwareToCatalogueItem = (
  value: MultiFacetAwareDomainType
): CatalogueItemDomainType | undefined => {
  switch (value) {
    case MultiFacetAwareDomainType.Classifiers:
      return CatalogueItemDomainType.Classifier;
    case MultiFacetAwareDomainType.CodeSets:
      return CatalogueItemDomainType.CodeSet;
    case MultiFacetAwareDomainType.DataClasses:
      return CatalogueItemDomainType.DataClass;
    case MultiFacetAwareDomainType.DataElements:
      return CatalogueItemDomainType.DataElement;
    case MultiFacetAwareDomainType.DataModels:
      return CatalogueItemDomainType.DataModel;
    case MultiFacetAwareDomainType.EnumerationTypes:
      return CatalogueItemDomainType.EnumerationType;
    case MultiFacetAwareDomainType.Folders:
      return CatalogueItemDomainType.Folder;
    case MultiFacetAwareDomainType.ModelDataTypes:
      return CatalogueItemDomainType.ModelDataType;
    case MultiFacetAwareDomainType.PrimitiveTypes:
      return CatalogueItemDomainType.PrimitiveType;
    case MultiFacetAwareDomainType.ReferenceDataModels:
      return CatalogueItemDomainType.ReferenceDataModel;
    case MultiFacetAwareDomainType.ReferenceTypes:
      return CatalogueItemDomainType.ReferenceType;
    case MultiFacetAwareDomainType.Terms:
      return CatalogueItemDomainType.Term;
    case MultiFacetAwareDomainType.Terminologies:
      return CatalogueItemDomainType.Terminology;
    case MultiFacetAwareDomainType.VersionedFolders:
      return CatalogueItemDomainType.VersionedFolder;
    default:
      return undefined;
  }
};

const isValueOfEnum = <T>(object: T, token: any): token is T[keyof T] => {
  return Object.values(object).includes(token);
};

/**
 * Gets a {@link MultiFacetAwareDomainType}. If not originally  {@link MultiFacetAwareDomainType} then a conversion will be attempted.
 *
 * @param value A value representing either a {@link MultiFacetAwareDomainType} or a {@link CatalogueItemDomainType}.
 * @returns A suitable {@link MultiFacetAwareDomainType}.
 */
export const getMultiFacetAwareDomainType = (
  value: MultiFacetAwareDomainType | CatalogueItemDomainType
): MultiFacetAwareDomainType => {
  if (isValueOfEnum(CatalogueItemDomainType, value)) {
    const multiFacetAware = catalogueItemToMultiFacetAware(value);
    if (!multiFacetAware) {
      throw new Error(
        `Cannot determine MultiFacetAwareDomainType from '${value}'`
      );
    }

    return multiFacetAware;
  }

  return value;
};

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

  /**
   * If wanting to request all objects, pass the `all: true` parameter. Note that this automatically overrides
   * any `max` and/or `offset` set.
   */
  all?: boolean;
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
export type FilterQueryParameters = SortParameters &
  PageParameters &
  QueryParameters;

/**
 * Type to define remove options for removing/deleting catalogue items.
 */
export interface RemoveParameters {
  /**
   * State if the removal is permanent.
   */
  permanent?: boolean;
}

export type RemoveQueryParameters = RemoveParameters & QueryParameters;

/**
 * Type to define the options to pass to an [[MdmRestHandler]] to process
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
 * @see [[MdmRestHandler]]
 */
export interface RequestSettings {
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

export interface Breadcrumb {
  id: Uuid;
  label: string;
  domainType: CatalogueItemDomainType;
  finalised?: boolean;
}

/**
 * Represents an identifiable item in Mauro.
 */
export interface Identifiable {
  /**
   * The unique identifier of this item.
   */
  id: Uuid;
}

/**
 * Represents a general catalogue item in Mauro.
 */
export interface CatalogueItem {
  /**
   * The unique identifier of this catalogue item.
   */
  id?: Uuid;

  /**
   * The domain type of this catalogue item.
   */
  domainType: CatalogueItemDomainType;
}

export interface Pathable {
  /**
   * A read-only path generated by Mauro representing the location of this item in the catalogue.
   */
  path: string;
}

export interface CatalogueItemDetail extends Required<CatalogueItem> {
  [key: string]: any;
  label: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

/**
 * Represents a Mauro entity that can be navigated.
 */
export interface Navigatable {
  /**
   * The ordered list of breadcrumbs to navigate through the catalogue item chain.
   */
  breadcrumbs?: Breadcrumb[];
}

/**
 * Represents a reference to another catalogue item.
 */
export interface CatalogueItemReference {
  [key: string]: any;
  /**
   * The unique identifier of the other catalogue item.
   */
  id: Uuid;

  /**
   * Any additional properties that may optionally be needed for this object.
   */
}

/**
 * Represents the standard query parameters to use for a search operation.
 */
export interface SearchQueryParameters
  extends SortParameters,
    PageParameters,
    QueryParameters {
  /**
   * The term(s) to search for in the catalogue.
   *
   * You can supply the search term "*" to return all catalogue items under a catalogue or parent catalogue item.
   */
  searchTerm?: string;

  /**
   * State whether to only search for terms within labels of catalogue items.
   */
  labelOnly?: boolean;

  lastUpdatedBefore?: MdmDate;
  lastUpdatedAfter?: MdmDate;
  createdBefore?: MdmDate;
  createdAfter?: MdmDate;
  domainTypes?: string[];
  dataModelTypes?: string[];
  classifiers?: string[];

  /**
   * The profile filter query data to use for filtering the search results.
   */
  profileFields?: ProfileFieldQueryData[];
}

export interface ProfileFieldQueryData {
  metadataNamespace: string;
  metadataPropertyName: string;
  filterTerm: string;
  type: PhraseOrKeyword;
}

export type PhraseOrKeyword = 'phrase' | 'keyword';

/**
 * Represents the result of a catalogue search.
 */
export interface CatalogueItemSearchResult extends CatalogueItem {
  [key: string]: any;
  label: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
}

export type CatalogueItemSearchResponse =
  MdmIndexResponse<CatalogueItemSearchResult>;

/**
 * Set of parameters to define if an operation should be handled asynchronously.
 */
export interface AsyncParameters {
  /**
   * State if an operation should be handled asynchronously in Mauro.
   *
   * If not provided or `false`, then the request sent to Mauro will wait until it is completed before sending a response back.
   *
   * If `true`, the Mauro endpoint will return a `HTTP 202 (ACCEPTED)` status code back in the response almost immediately.
   * The operation will continue to run in Mauro until it is completed, but the client application may continue to send
   * other requests.
   */
  asynchronous?: boolean;
}
