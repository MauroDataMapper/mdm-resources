import { Breadcrumb, Historical, ItemDomainType, MdmIndexResponse, MdmResponse, PageParameters, QueryParameters, Securable, SortParameters, Uuid } from './mdm-common.model';
import { DataType } from './mdm-data-type.model';
export declare type DataElementIndexParameters = SortParameters & PageParameters & QueryParameters;
export interface DataElement {
    id?: Uuid;
    domainType: ItemDomainType;
    label: string;
    description?: string;
    model?: Uuid;
    dataClass?: Uuid;
    dataType?: DataType;
    breadcrumbs?: Breadcrumb[];
    minMultiplicity?: number;
    maxMultipicity?: number;
    [key: string]: any;
}
export declare type DataElementDetail = DataElement & Securable & Historical;
export declare type DataElementIndexResponse = MdmIndexResponse<DataElement>;
export declare type DataElementDetailResponse = MdmResponse<DataElementDetail>;
