import { Identifiable, MdmResponse } from '../mdm-common.model';
import { Historical } from '../mdm-model-types.model';

/**
 * The payload of an image file to create or update.
 */
export interface ImageFilePayload {
  /**
   * The image data stored as a string.
   *
   * This data would be in the format of a Data URI e.g.
   *
   * ```
   * data:image/png;base64,VBORw0KGgoAAAANSUhEUgAAA...
   * ```
   */
  image: string;

  /**
   * The MIME type of the image e.g. "image/png"
   */
  type: string;
}

/**
 * Represents the image file information for a stored image in Mauro.
 *
 * This does not provide the image itself, use other `GET` endpoints to view the image.
 */
export interface ImageFile extends Identifiable, Historical {
  domainType: 'UserImageFile' | 'ThemeImageFile';
  fileSize: number;
  fileName: string;
  fileType: string;
}

export type ImageFileResponse = MdmResponse<ImageFile>;
