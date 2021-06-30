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
    sourceId: Uuid;
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
export declare enum MergeUsed {
    Source = "source",
    Target = "target",
    Mixed = "mixed"
}
export declare type MergeResponse = MdmResponse<MergeItem>;
