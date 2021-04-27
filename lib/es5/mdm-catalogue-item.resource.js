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
 * Controller: annotation
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: remove
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: remove
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show
 *
 * Controller: classifier
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: remove
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 *
 * Controller: metadata
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: remove
 * |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 *
 * Controller: referenceFiles
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles                                     | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles                                     | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: delete
 * |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: update
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: show
 *
 * Controller: search
 * |   GET    | /api/catalogueItems/search                                                                            | Action: search
 * |   POST   | /api/catalogueItems/search                                                                            | Action: search
 *
 * Controller: semanticLink
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: delete
 * |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: update
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: show
 *
 */
var MdmCatalogueItemResource = /** @class */ (function (_super) {
    __extends(MdmCatalogueItemResource, _super);
    function MdmCatalogueItemResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Search
    MdmCatalogueItemResource.prototype.search = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueItems/search";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.searchByGet = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueItems/search";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    // Annotation
    MdmCatalogueItemResource.prototype.saveAnnotations = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.saveAnnotationChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listAnnotations = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listAnnotationChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeAnnotation = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeAnnotationChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.getAnnotation = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.getAnnotationChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    // Classifier
    MdmCatalogueItemResource.prototype.saveClassifiers = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listClassifiers = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeClassifier = function (catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.getClassifier = function (catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    // Metadata
    MdmCatalogueItemResource.prototype.saveMetadata = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listMetadata = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeMetadata = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.updateMetadata = function (catalogueItemDomainType, catalogueItemId, metadataId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.getMetadata = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    // Reference Files
    MdmCatalogueItemResource.prototype.saveReferenceFiles = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listReferenceFiles = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeReferenceFile = function (catalogueItemDomainType, catalogueItemId, referenceFileId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles/" + referenceFileId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.updateReferenceFile = function (catalogueItemDomainType, catalogueItemId, referenceFileId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles/" + referenceFileId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.getReferenceFile = function (catalogueItemDomainType, catalogueItemId, referenceFileId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles/" + referenceFileId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    // Semantic Links
    MdmCatalogueItemResource.prototype.saveSemanticLinks = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listSemanticLinks = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeSemanticLink = function (catalogueItemDomainType, catalogueItemId, semanticLinkId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks/" + semanticLinkId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.updateSemanticLink = function (catalogueItemDomainType, catalogueItemId, semanticLinkId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks/" + semanticLinkId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.getSemanticLink = function (catalogueItemDomainType, catalogueItemId, semanticLinkId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks/" + semanticLinkId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listRules = function (catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.saveRule = function (catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.updateRule = function (catalogueItemDomainType, catalogueItemId, ruleId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules/" + ruleId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.listRuleRepresentations = function (catalogueItemDomainType, catalogueItemId, ruleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules/" + ruleId + "/representations";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.saveRulesRepresentation = function (catalogueItemDomainType, catalogueItemId, data, ruleId, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules/" + ruleId + "/representations";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.updateRulesRepresentation = function (catalogueItemDomainType, catalogueItemId, data, ruleId, representationId, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules/" + ruleId + "/representations/" + representationId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeRule = function (catalogueItemDomainType, catalogueItemId, ruleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules/" + ruleId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueItemResource.prototype.removeRulesRepresentation = function (catalogueItemDomainType, catalogueItemId, ruleId, representationId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/rules/" + ruleId + "/representations/" + representationId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    return MdmCatalogueItemResource;
}(MdmResource));
export { MdmCatalogueItemResource };
//# sourceMappingURL=mdm-catalogue-item.resource.js.map