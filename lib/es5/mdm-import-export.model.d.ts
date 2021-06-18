import { CatalogueItem, MdmIndexResponse, MdmResponse, Version } from './mdm-common.model';
export interface Importer {
    name: string;
    displayName: string;
    namespace: string;
    version: Version;
    providerType: string;
    paramClassType: string;
    canImportMultipleDomains: boolean;
    allowsExtraMetadataKeys: boolean;
    knownMetadataKeys: any[];
    [key: string]: any;
}
export declare type ImporterParameterType = 'Integer' | 'String' | 'Text' | 'Password' | 'Boolean' | 'boolean' | 'int' | 'File' | 'Folder' | 'DataModel';
export interface ImporterParameter {
    name: string;
    displayName: string;
    description?: string;
    type: ImporterParameterType;
    optional: boolean;
}
export interface ImporterParameterGroup {
    name: string;
    parameters: ImporterParameter[];
}
export interface ImporterDetail {
    importer: Importer;
    parameterGroups: ImporterParameterGroup[];
}
export declare type ImportResult = CatalogueItem & {
    [key: string]: any;
};
export declare type ImporterIndexResponse = MdmResponse<Importer[]>;
export declare type ImporterDetailResponse = MdmResponse<ImporterDetail>;
export declare type ImportResultIndexResponse = MdmIndexResponse<ImportResult>;
export interface Exporter {
    name: string;
    displayName: string;
    namespace: string;
    version: Version;
    providerType: string;
    canExportMultipleDomains: boolean;
    allowsExtraMetadataKeys: boolean;
    knownMetadataKeys: any[];
    fileExtension: string;
    fileType: string;
    [key: string]: any;
}
export declare type ExporterIndexResponse = MdmResponse<Exporter[]>;
