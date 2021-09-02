import { ReferenceDataElement } from './mdm-reference-data-element.model';
import { FilterQueryParameters, MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';
export interface ReferenceDataValue {
    id: Uuid;
    rowNumber: number;
    value: string;
    referenceDataElement: ReferenceDataElement;
}
export interface ReferenceDataValueRow {
    columns: ReferenceDataValue[];
}
export interface ReferenceDataValueTable {
    /**
     * Gets the number of items in the returned list.
     */
    count: number;
    /**
     * Gets the list of items returned from the API.
     */
    rows: ReferenceDataValueRow[];
}
export declare type ReferenceDataValueTableResponse = MdmResponse<ReferenceDataValueTable>;
export declare type ReferenceDataValueIndexResponse = MdmIndexResponse<ReferenceDataValue>;
export declare type ReferenceDataValueDetailResponse = MdmResponse<ReferenceDataValue>;
export interface ReferenceDataValueFilterQueryParameters extends FilterQueryParameters {
    asRows?: boolean;
}
export interface ReferenceDataValueSearchQueryParameters extends ReferenceDataValueFilterQueryParameters {
    search?: string;
}
