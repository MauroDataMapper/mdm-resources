import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, SecurableModel, Versionable } from './mdm-model-types.model';
import { Classifier, CatalogueItemReference, CatalogueItemDomainType, MdmIndexResponse, MdmResponse, QueryParameters, Uuid } from './mdm-common.model';
import { DataTypeProvider } from './mdm-data-type.model';
export declare type DataModelType = 'Data Standard' | 'Data Asset';
export interface DataModel extends Modelable {
    type?: DataModelType;
    semanticLinks?: any[];
    [key: string]: any;
}
export declare type DataModelDetail = DataModel & ModelableDetail & SecurableModel & Historical & Branchable & Versionable & Finalisable;
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
export declare type DataModelTypesResponse = MdmResponse<string[]>;
export declare type DataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;
