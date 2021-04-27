import { Breadcrumb, Historical, ItemDomainType, MdmIndexResponse, MdmResponse, PageParameters, QueryParameters, Securable, SortParameters, Uuid } from "mdm-common.model";
export declare type DataClassIndexParameters = SortParameters & PageParameters & QueryParameters;
export interface DataClass {
    id?: Uuid;
    domainType: ItemDomainType;
    label: string;
    description?: string;
    model?: Uuid;
    parentDataClass?: Uuid;
    breadcrumbs?: Breadcrumb[];
    minMultiplicity?: number;
    maxMultipicity?: number;
    [key: string]: any;
}
export declare type DataClassDetail = DataClass & Securable & Historical;
export declare type DataClassIndexResponse = MdmIndexResponse<DataClass>;
export declare type DataClassDetailResponse = MdmResponse<DataClassDetail>;
