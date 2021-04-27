import { MdmResponse } from "mdm-common.model";
/**
 * Type to represent the status information of a Mauro instance.
 *
 * Indexed property names are used as the names may be simple strings.
 */
export interface MauroStatus {
    [key: string]: any;
}
/**
 * Type alias for an endpoint response to request current status of the Mauro instance.
 */
export declare type MauroStatusResponse = MdmResponse<MauroStatus>;
/**
 * Represents details about a module loaded into the current Mauro instance.
 */
export interface Module {
    name: string;
    version: string;
}
/**
 * Type alias for an endpoint response to request module information on the current Mauro instance.
 */
export declare type ModulesResponse = MdmResponse<Module[]>;
