import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';
export interface SubscribedCatalogue {
    id?: Uuid;
    url: string;
    apiKey?: Uuid;
    label: string;
    description?: string;
    refreshPeriod?: number;
}
export declare type SubscribedCatalogueResponse = MdmResponse<SubscribedCatalogue>;
export declare type SubscribedCatalogueIndexResponse = MdmIndexResponse<SubscribedCatalogue>;
export interface AvailableDataModel {
    modelId?: Uuid;
    label: string;
    description?: string;
    modelType: CatalogueItemDomainType;
}
export interface SubscribedDataModel {
    id?: Uuid;
    subscribedModelId: Uuid;
    folderId: Uuid;
}
export declare type AvailableDataModelIndexResponse = MdmIndexResponse<AvailableDataModel>;
export declare type SubscribedDataModelResponse = MdmResponse<SubscribedDataModel>;
export declare type SubscribedDataModelIndexResponse = MdmIndexResponse<SubscribedDataModel>;
