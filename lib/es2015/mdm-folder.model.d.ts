import { MdmIndexResponse, MdmResponse, Payload, Uuid } from './mdm-common.model';
import { Historical, Modelable, SecurableModel } from './mdm-model-types.model';
export interface Folder extends Modelable {
    hasChildFolders?: boolean;
    [key: string]: any;
}
export declare type FolderDetail = Folder & SecurableModel & Historical;
export declare type FolderIndexResponse = MdmIndexResponse<Folder>;
export declare type FolderDetailResponse = MdmResponse<FolderDetail>;
export interface FolderUpdatePayload extends Payload {
    id: Uuid;
    label?: string;
    description?: string;
}
