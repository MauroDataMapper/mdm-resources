import { MdmResponse, Uuid } from "./mdm-common.model";
export interface MergeItem {
    path: string;
    fieldName: string;
    sourceValue?: string;
    targetValue?: string;
    commonAncestorValue?: string;
    isMergeConflict: boolean;
    isSourceModificationAndTargetDeletion?: boolean;
    type: MergeType;
}
export interface Merge {
    sourceID: Uuid;
    targetId: Uuid;
    path: string;
    label: string;
    count: number;
    diffs: Array<MergeItem>;
}
export declare enum MergeType {
    Creation = "creation",
    Deletion = "deletion",
    Modification = "modification"
}
export declare type VersioningResponse = MdmResponse<MergeItem>;
