import { CatalogueItemReference, MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, ModelCreatePayload, ModelUpdatePayload, SecurableModel, Versionable } from './mdm-model-types.model';
export declare type CodeSetDataType = 'CodeSet';
export interface CodeSet extends Modelable {
    type?: CodeSetDataType;
    [key: string]: any;
}
export declare type CodeSetDetail = CodeSet & ModelableDetail & SecurableModel & Historical & Branchable & Versionable & Finalisable;
export declare type CodeSetIndexResponse = MdmIndexResponse<CodeSet>;
export declare type CodeSetDetailResponse = MdmResponse<CodeSet>;
export interface CodeSetCreatePayload extends ModelCreatePayload {
    terms?: CatalogueItemReference[];
}
export interface CodeSetUpdatePayload extends ModelUpdatePayload {
    terms?: CatalogueItemReference[];
}
