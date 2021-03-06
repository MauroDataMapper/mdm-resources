import { Historical, Securable } from './mdm-model-types.model';
import { Breadcrumb, CatalogueItemDomainType, MdmIndexResponse, MdmResponse, PageParameters, QueryParameters, SortParameters, Uuid } from './mdm-common.model';
import { DataTypeReference } from './mdm-data-type.model';
export declare type DataElementIndexParameters = SortParameters & PageParameters & QueryParameters;
export interface DataElement {
    id?: Uuid;
    domainType: CatalogueItemDomainType;
    label: string;
    description?: string;
    model?: Uuid;
    dataClass?: Uuid;
    dataType?: DataTypeReference;
    breadcrumbs?: Breadcrumb[];
    minMultiplicity?: number;
    maxMultipicity?: number;
    [key: string]: any;
}
export declare type DataElementDetail = DataElement & Securable & Historical;
export declare type DataElementIndexResponse = MdmIndexResponse<DataElement>;
export declare type DataElementDetailResponse = MdmResponse<DataElementDetail>;
