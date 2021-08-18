import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, Payload, Uuid, Version } from './mdm-common.model';
export declare type ProfileFieldDataType = 'boolean' | 'string' | 'text' | 'int' | 'decimal' | 'date' | 'datetime' | 'time' | 'folder' | 'model' | 'json';
export interface ProfileField {
    allowedValues?: string[];
    currentValue?: string;
    dataType: ProfileFieldDataType;
    derived?: boolean;
    derivedFrom?: string;
    description?: string;
    fieldName: string;
    maxMultiplicity?: number;
    metadataPropertyName: string;
    minMultiplicity?: number;
    regularExpressions?: any;
    uneditable?: boolean;
    [key: string]: any;
}
export interface ProfileSection {
    name: string;
    description?: string;
    fields: ProfileField[];
}
export interface Profile {
    id: Uuid;
    domainType: CatalogueItemDomainType;
    label: string;
    sections: ProfileSection[];
    [key: string]: any;
}
export declare type ProfileResponse = MdmResponse<Profile>;
export interface ProfileSummary {
    allowsExtraMetadataKeys: boolean;
    displayName: string;
    domains: CatalogueItemDomainType[];
    knownMetadataKeys: string[];
    metadataNamespace: string;
    name: string;
    namespace: string;
    providerType: string;
    version: Version;
    [key: string]: any;
}
export declare type ProfileSummaryIndexResponse = MdmResponse<ProfileSummary[]>;
export interface Metadata {
    id: Uuid;
    namespace: string;
    key: string;
    value?: string;
    lastUpdated?: string;
}
export declare type MetadataIndexResponse = MdmIndexResponse<Metadata>;
export declare type ProfilePayload = Profile & Payload;
export interface ProfileValidationError {
    fieldName: string;
    message: string;
    metadataPropertyName?: string;
}
export interface ProfileValidationErrorList {
    errors: ProfileValidationError[];
    total: number;
}
export declare type ProfileValidationResponse = MdmResponse<ProfileValidationErrorList>;
