var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { MdmResource } from './mdm-resource';
/**
 * Controller: termRelationshipType
 |   POST   | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}
 */
var MdmTermRelationshipTypeResource = /** @class */ (function (_super) {
    __extends(MdmTermRelationshipTypeResource, _super);
    function MdmTermRelationshipTypeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmTermRelationshipTypeResource.prototype.save = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmTermRelationshipTypeResource.prototype.list = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTermRelationshipTypeResource.prototype.remove = function (terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTermRelationshipTypeResource.prototype.update = function (terminologyId, termRelationshipTypeId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTermRelationshipTypeResource.prototype.get = function (terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmTermRelationshipTypeResource;
}(MdmResource));
export { MdmTermRelationshipTypeResource };
//# sourceMappingURL=mdm-term-replationship-type.resource.js.map