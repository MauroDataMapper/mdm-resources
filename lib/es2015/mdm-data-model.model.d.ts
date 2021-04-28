import { Authority, Branchable, Classifier, CatalogueItemReference, Historical, CatalogueItemDomainType, MdmIndexResponse, MdmResponse, PageParameters, Payload, QueryParameters, Securable, SortParameters, Uuid, Version } from './mdm-common.model';
import { DataTypeProvider } from './mdm-data-type.model';
export declare type DataModelType = 'Data Standard' | 'Data Asset';
export declare type DataModelIndexParameters = SortParameters & PageParameters & QueryParameters;
export interface DataModel {
    id?: Uuid;
    domainType: CatalogueItemDomainType;
    type?: DataModelType;
    authority?: Authority;
    label: string;
    description?: string;
    author?: string;
    organisation?: string;
    aliases?: string[];
    semanticLinks?: any[];
    editable?: boolean;
    classifiers?: Classifier[];
    finalised: boolean;
    deleted?: boolean;
    modelVersion: Version;
    modelVersionTag?: string;
    documentationVersion?: Version;
    [key: string]: any;
}
export interface DataModelSecurable extends Securable {
    readableByEveryone?: boolean;
    readableByAuthenticatedUsers?: boolean;
}
export interface DataModelHistorical extends Historical {
    dateFinalised?: string;
}
export declare type DataModelDetail = DataModel & DataModelSecurable & DataModelHistorical & Branchable;
export declare type DataModelIndexResponse = MdmIndexResponse<DataModel>;
export declare type DataModelDetailResponse = MdmResponse<DataModelDetail>;
export interface DataModelCreatePayload {
    folder: Uuid;
    label: string;
    author: string;
    organisation: string;
    description?: string;
    type: DataModelType;
    classifiers?: CatalogueItemReference[];
    [key: string]: any;
}
export interface DataModelCreateParameters {
    defaultDataTypeProvider?: string;
}
export declare type DataModelCreateQueryParameters = DataModelCreateParameters & QueryParameters;
export interface DataModelUpdatePayload {
    id: Uuid;
    domainType: CatalogueItemDomainType;
    label?: string;
    author?: string;
    organisation?: string;
    description?: string;
    type?: DataModelType;
    aliases?: string[];
    classifiers?: Classifier[];
    [key: string]: any;
}
export interface DataModelRemoveParameters {
    permanent: boolean;
}
export declare type DataModelRemoveQueryParameters = DataModelRemoveParameters & QueryParameters;
/**
 * Payload for the {@link MdmDataModelResource.finalise} request.
 */
export interface DataModelFinalisePayload extends Payload {
    /**
     * Define how to advance the version of the finalised data model.
     */
    versionChangeType: 'Major' | 'Minor' | 'Patch' | 'Custom';
    /**
     * If {@link versionChangeType} is `Custom`, sets the custom version number to use for the finalised data model.
     *
     * Has no affect for any other {@link versionChangeType}.
     */
    version?: Version;
    /**
     * Set an optional tag name to the finalised version.
     */
    versionTag?: string;
}
export declare type DataModelTypesResponse = MdmResponse<string[]>;
export declare type DataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;
