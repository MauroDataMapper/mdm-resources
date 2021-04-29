/**
 * Type alias for a unique indentifier type used in all entities in Mauro.
 */
export declare type Uuid = string;
/**
 * Type alias for a type defining a version number in Mauro.
 */
export declare type Version = string;
export declare enum ContainerDomainType {
    CLASSIFIERS = "classifiers",
    FOLDERS = "folders"
}
export declare enum ModelDomainType {
    FOLDERS = "folders",
    DATA_MODELS = "dataModels",
    DATA_CLASSES = "dataClasses",
    DATA_TYPES = "dataTypes",
    TERMINOLOGIES = "terminologies",
    REFERENCEDATAMODELS = "referenceDataModels",
    TERMS = "terms",
    ALL = "all"
}
export declare enum CatalogueItemDomainType {
    Folder = "Folder",
    DataModel = "DataModel",
    DataClass = "DataClass",
    DataElement = "DataElement",
    Terminology = "Terminology",
    Term = "Term",
    CodeSet = "CodeSet",
    Classification = "Classification",
    ReferenceDataModel = "ReferenceDataModel",
    EnumerationType = "EnumerationType",
    PrimitiveType = "PrimitiveType",
    ReferenceType = "ReferenceType",
    TerminologyType = "TerminologyType",
    ReferenceDataModelType = "ReferenceDataModelType",
    CodeSetType = "CodeSetType",
    ModelDataType = "ModelDataType"
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
export declare type MdmIndexResponse<T> = MdmResponse<MdmIndexBody<T>>;
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
export declare type FilterQueryParameters = SortParameters & PageParameters & QueryParameters;
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
    /**
     * The unique identifier of the other catalogue item.
     */
    id: Uuid;
    /**
     * Any additional properties that may optionally be needed for this object.
     */
    [key: string]: any;
}
export interface Classifier {
    id: Uuid;
    label: string;
    lastUpdated?: string;
}
