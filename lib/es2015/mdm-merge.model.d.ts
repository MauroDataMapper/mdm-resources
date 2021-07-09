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
export interface CommitMergePayload {
    changeNotice?: string;
    deleteBranch?: boolean;
    patch: {
        sourceId: Uuid;
        targetId: Uuid;
        path?: string;
        label?: string;
        count?: number;
        patches: Array<MergeItem>;
    };
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
export declare type MergeResponse = MdmResponse<Merge>;
