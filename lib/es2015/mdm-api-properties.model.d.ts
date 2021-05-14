import { MdmIndexResponse, MdmResponse, Uuid } from './mdm-common.model';
/**
 * Represents an API property in Mauro.
 *
 * An API property is a key/value pair that can be used in configuration scenarios.
 */
export interface ApiProperty {
    /**
     * The unique identifier of the API property. Not required if creating a new {@link ApiProperty}.
     */
    id?: Uuid;
    /**
     * The unique key name of this API property.
     */
    key: string;
    /**
     * The value assigned to this API property.
     */
    value: string;
    /**
     * State whether this API property is publicly visible to anonymous users. If `true` then only authenticated users will be able
     * to request and use this API property.
     */
    publiclyVisible?: boolean;
    /**
     * Optional category name to better group API properties together.
     */
    category?: string;
    /**
     * Gets the date/time this API property was last updated.
     */
    lastUpdated?: string;
}
export declare type ApiPropertyResponse = MdmResponse<ApiProperty>;
export declare type ApiPropertyIndexResponse = MdmIndexResponse<ApiProperty>;
