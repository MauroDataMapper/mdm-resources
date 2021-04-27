import { MdmResponse, QueryParameters, SortParameters } from './mdm-common.model';
export declare type ProviderQueryParameters = SortParameters & QueryParameters;
export interface Provider {
    name: string;
    version: string;
    displayName: string;
    namespace: string;
    allowsExtraMetadataKeys?: boolean;
    knownMetadataKeys?: string[];
    providerType?: string;
    paramClassType?: string;
    canImportMultipleDomains?: boolean;
}
export declare type ProviderListResponse = MdmResponse<Provider[]>;
