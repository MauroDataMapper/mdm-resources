import { DataTypeProvider } from './mdm-data-type.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, SecurableModel, Versionable } from './mdm-model-types.model';
export declare type ReferenceDataModelType = 'ReferenceDataModel';
export interface ReferenceDataModel extends Modelable {
    type?: ReferenceDataModelType;
    [key: string]: any;
}
export declare type ReferenceDataModelDetail = ReferenceDataModel & ModelableDetail & SecurableModel & Historical & Branchable & Versionable & Finalisable;
export declare type ReferenceDataModelIndexResponse = MdmIndexResponse<ReferenceDataModel>;
export declare type ReferenceDataModelDetailResponse = MdmResponse<ReferenceDataModelDetail>;
export declare type ReferenceDataModelDefaultDataTypesResponse = MdmResponse<DataTypeProvider[]>;
