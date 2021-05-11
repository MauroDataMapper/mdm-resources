import { Container } from './mdm-container-types.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Historical, SecurableModel } from './mdm-model-types.model';
export interface Folder extends Container {
    hasChildFolders?: boolean;
    [key: string]: any;
}
export declare type FolderDetail = Folder & SecurableModel & Historical;
export declare type FolderIndexResponse = MdmIndexResponse<Folder>;
export declare type FolderDetailResponse = MdmResponse<FolderDetail>;
