import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, Payload, Uuid, Version } from './mdm-common.model';
export declare type ProfileFieldDataType = 'BOOLEAN' | 'STRING' | 'TEXT' | 'INT' | 'DECIMAL' | 'DATE' | 'DATETIME' | 'TIME' | 'FOLDER' | 'MODEL' | 'JSON';
export interface ProfileField {
    allowedValues?: any;
    currentValue?: string;
    dataType: ProfileFieldDataType;
    description?: string;
    fieldName: string;
    maxMultiplicity?: number;
    metadataPropertyName: string;
    minMultiplicity?: number;
    regularExpressions?: any;
    validationErrors?: string[];
    [key: string]: any;
}
export interface ProfileSection {
    sectionName: string;
    sectionDescription?: string;
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
