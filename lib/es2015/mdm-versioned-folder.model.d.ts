import { Branchable, Finalisable, Historical, SecurableModel, Versionable } from './mdm-model-types.model';
import { Container, ContainerDetail } from './mdm-container-types.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
/**
 * Represents a Versioned Folder in Mauro.
 *
 * This is similar to a {@link Folder} but also has the ability to be branched
 * and versioned, maintaining history for all contents within it also; to
 * finalise a Versioned Folder is to finalise everything within it.
 *
 * @see {@link Folder}
 */
export interface VersionedFolder extends Container {
    hasChildFolders?: boolean;
    [key: string]: any;
}
export declare type VersionedFolderDetail = VersionedFolder & ContainerDetail & SecurableModel & Historical & Branchable & Versionable & Finalisable;
export declare type VersionedFolderIndexResponse = MdmIndexResponse<VersionedFolder>;
export declare type VersionedFolderDetailResponse = MdmResponse<VersionedFolderDetail>;
