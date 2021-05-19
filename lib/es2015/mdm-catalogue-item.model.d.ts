import { Historical } from './mdm-model-types.model';
import { CatalogueItem, MdmIndexResponse, MdmResponse, Payload, Uuid } from './mdm-common.model';
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
    fileSize?: number;
    /**
     * The MIME type of the reference file.
     */
    fileType?: string;
    /**
     * The date/time the reference file was last updated in string format.
     */
    lastUpdated?: string;
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
/**
 * Represents an annotation, or comment, attached to a catalogue item.
 */
export interface Annotation extends Historical {
    /**
     * The unique identifier of this annotation.
     */
    id: Uuid;
    /**
     * The label/title of this annotation.
     */
    label: string;
    /**
     * An optional description, or further details, to apply to the annotation.
     */
    description?: string;
    /**
     * Gets the name of the user who created this annotation.
     */
    createdBy: string;
    /**
     * Annotations that are children to this annotation.
     */
    childAnnotations?: Annotation[];
    [key: string]: any;
}
export declare type AnnotationIndexResponse = MdmIndexResponse<Annotation>;
export declare type AnnotationDetailResponse = MdmResponse<Annotation>;
export interface AnnotationCreatePayload extends Payload {
    label: string;
    description?: string;
}
export interface AnnotationChildCreatePayload extends Payload {
    description: string;
}
