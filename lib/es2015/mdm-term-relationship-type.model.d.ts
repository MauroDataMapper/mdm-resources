import { Historical, Securable } from './mdm-model-types.model';
import { CatalogueItem, MdmIndexResponse, MdmResponse, Navigatable, Uuid } from './mdm-common.model';
export interface TermRelationshipType extends CatalogueItem, Navigatable {
    [key: string]: any;
    model?: Uuid;
    displayLabel: string;
    label?: string;
}
export declare type TermRelationshipTypeDetail = TermRelationshipType & Securable & Historical;
export declare type TermRelationshipTypeIndexResponse = MdmIndexResponse<TermRelationshipType>;
export declare type TermRelationshipTypeDetailResponse = MdmResponse<TermRelationshipTypeDetail>;
