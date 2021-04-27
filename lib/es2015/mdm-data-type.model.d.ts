import { Breadcrumb, Historical, ItemDomainType, MdmIndexResponse, MdmResponse, Securable, Uuid, Version } from './mdm-common.model';
export interface EnumerationValue {
    index?: number;
    id?: Uuid;
    key: string;
    value: string;
    category?: any;
}
export interface ReferenceClass {
    id: Uuid;
    domainType?: ItemDomainType;
    label?: string;
    model?: Uuid;
    breadcrumbs?: Breadcrumb[];
    parentDataClass?: Uuid;
}
export interface DataTypeDescriptor {
    domainType: ItemDomainType;
    label: string;
    description?: string;
    [key: string]: any;
}
export interface DataTypeProvider {
    name: string;
    displayName: string;
    version: Version;
    dataTypes: DataTypeDescriptor[];
}
export interface DataTypeReference {
    id: Uuid;
    [key: string]: any;
}
export interface DataType {
    id?: Uuid;
    domainType: ItemDomainType;
    label: string;
    description?: string;
    model?: Uuid;
    breadcrumbs?: Breadcrumb[];
    enumerationValues?: EnumerationValue[];
    referenceClass?: ReferenceClass;
    [key: string]: any;
}
export declare type DataTypeDetail = DataType & Securable & Historical;
export declare type DataTypeIndexResponse = MdmIndexResponse<DataType>;
export declare type DataTypeDetailResponse = MdmResponse<DataTypeDetail>;
