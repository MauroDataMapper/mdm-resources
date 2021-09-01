import { Historical, Securable } from './mdm-model-types.model';
import { Breadcrumb, CatalogueItem, MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';
export interface ReferenceDataType extends CatalogueItem {
    label: string;
    description?: string;
    model?: Uuid;
    breadcrumbs?: Breadcrumb[];
    [key: string]: any;
}
export declare type ReferenceDataTypeDetail = ReferenceDataType & Securable & Historical;
export declare type ReferenceDataTypeIndexResponse = MdmIndexResponse<ReferenceDataType>;
export declare type ReferenceDataTypeDetailResponse = MdmResponse<ReferenceDataTypeDetail>;
