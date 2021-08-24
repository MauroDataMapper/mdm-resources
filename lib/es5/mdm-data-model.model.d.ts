import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, ModelCreatePayload, SecurableModel, Versionable } from './mdm-model-types.model';
import { MdmIndexResponse, MdmResponse, QueryParameters } from './mdm-common.model';
import { DataTypeProvider } from './mdm-data-type.model';
export declare type DataModelType = 'Data Standard' | 'Data Asset';
export interface DataModel extends Modelable {
    [key: string]: any;
    type?: DataModelType;
    semanticLinks?: any[];
}
export declare type DataModelDetail = DataModel & ModelableDetail & SecurableModel & Historical & Branchable & Versionable & Finalisable;
export declare type DataModelIndexResponse = MdmIndexResponse<DataModel>;
export declare type DataModelDetailResponse = MdmResponse<DataModelDetail>;
export interface DataModelCreatePayload extends ModelCreatePayload {
    type: DataModelType;
}
export interface DataModelCreateParameters {
    defaultDataTypeProvider?: string;
}
export declare type DataModelCreateQueryParameters = DataModelCreateParameters & QueryParameters;
export declare type DataModelTypesResponse = MdmResponse<string[]>;
export declare type DataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;
