import { Historical, Securable } from './mdm-model-types.model';
import { ReferenceDataType } from './mdm-reference-data-type.model';
import { Breadcrumb, CatalogueItem, MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';
export interface ReferenceDataElement extends CatalogueItem {
    label: string;
    description?: string;
    model?: Uuid;
    breadcrumbs?: Breadcrumb[];
    referenceDataType?: ReferenceDataType;
    [key: string]: any;
}
export declare type ReferenceDataElementDetail = ReferenceDataType & Securable & Historical;
export declare type ReferenceDataElementIndexResponse = MdmIndexResponse<ReferenceDataElement>;
export declare type ReferenceDataElementDetailResponse = MdmResponse<ReferenceDataElementDetail>;
