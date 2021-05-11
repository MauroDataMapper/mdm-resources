/**
 * Type to store common configuration options for the `mdm-resources` library.
 */
export class MdmResourcesConfiguration {
    constructor() {
        /**
         * Defines the base API endpoint to direct all REST resource requests to.
         */
        this.apiEndpoint = 'http://localhost:8080/api';
        /**
         * Defines the default HTTP request options to apply to every request.
         */
        this.defaultHttpRequestOptions = {};
    }
}
//# sourceMappingURL=mdm-resources-configuration.js.map