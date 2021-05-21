import { Container } from './mdm-container-types.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Historical, SecurableModel } from './mdm-model-types.model';
/**
 * Represents a Folder in Mauro.
 *
 * A folder is a container that can hold further catalogue items to help
 * organise Mauro.
 *
 * @see {@link VersionedFolder}
 */
export interface Folder extends Container {
    hasChildFolders?: boolean;
    [key: string]: any;
}
export declare type FolderDetail = Folder & SecurableModel & Historical;
export declare type FolderIndexResponse = MdmIndexResponse<Folder>;
export declare type FolderDetailResponse = MdmResponse<FolderDetail>;
