import { RequestSettings } from './mdm-common.model';
/**
 * Type to store common configuration options for the `mdm-resources` library.
 */
export declare class MdmResourcesConfiguration {
    /**
     * Defines the base API endpoint to direct all REST resource requests to.
     */
    apiEndpoint?: string;
    /**
     * Defines the default HTTP request options to apply to every request.
     */
    defaultHttpRequestOptions?: RequestSettings;
}
