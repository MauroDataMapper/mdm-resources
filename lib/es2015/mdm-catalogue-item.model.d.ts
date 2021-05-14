import { CatalogueItem, MdmIndexResponse, MdmResponse, Payload } from './mdm-common.model';
/**
 * Represents a reference file (attachment) for model.
 */
export interface ReferenceFile extends CatalogueItem {
    /**
     * The name of the reference file.
     */
    fileName: string;
    /**
     * The size of the reference file in bytes.
     */
    fileSize: number;
    /**
     * The MIME type of the reference file.
     */
    fileType: string;
    /**
     * The date/time the reference file was last updated in string format.
     */
    lastUpdated: string;
    [key: string]: any;
}
export declare type ReferenceFileIndexResponse = MdmIndexResponse<ReferenceFile>;
export declare type ReferenceFileDetailResponse = MdmResponse<ReferenceFile>;
export interface ReferenceFileCreatePayload extends Payload {
    fileName: string;
    fileSize: number;
    fileType: string;
    /**
     * The raw data of the file contents to store in the reference file.
     */
    fileContents: any[];
}
