import { CatalogueItem, MdmResponse, QueryParameters } from './mdm-common.model';
export declare type DoiState = 'draft' | 'final' | 'retired' | 'not submitted';
export declare type DoiSubmissionState = 'draft' | 'finalise' | 'retire';
/**
 * Represents the status of a Digital Object Identifier on a catalogue item.
 */
export interface DoiStatus {
    /**
     * Gets the DOI applied to the catalogue item, if available.
     */
    identifier?: string;
    /**
     * Gets the current status of the DOI.
    */
    status: DoiState;
    [key: string]: any;
}
export declare type DoiStatusResponse = MdmResponse<DoiStatus>;
/**
 * Represents parameters that can be applied during the submission of a Digital Object Identifier.
 *
 * @see {@link MdmPluginDoiResource.save}
 */
export interface DoiSubmissionQueryParameters extends QueryParameters {
    /**
     * Declare what state the DOI should be in when created. If not provided, the default of `final` is used.
     */
    submissionType?: DoiSubmissionState;
}
export declare type DoiSubmissionStatus = CatalogueItem & {
    [key: string]: any;
};
export declare type DoiSubmissionResponse = MdmResponse<DoiSubmissionStatus>;
export declare type DoiResolvedItem = CatalogueItem & {
    [key: string]: any;
};
export declare type DoiResolvedItemResponse = MdmResponse<DoiResolvedItem>;
