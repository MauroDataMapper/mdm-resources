/**
 * Type to store common configuration options for the `mdm-resources` library.
 */
var MdmResourcesConfiguration = /** @class */ (function () {
    function MdmResourcesConfiguration() {
        /**
         * Defines the base API endpoint to direct all REST resource requests to.
         */
        this.apiEndpoint = 'http://localhost:8080/api';
        /**
         * Defines the default HTTP request options to apply to every request.
         */
        this.defaultHttpRequestOptions = {};
    }
    return MdmResourcesConfiguration;
}());
export { MdmResourcesConfiguration };
//# sourceMappingURL=mdm-resources-configuration.js.map