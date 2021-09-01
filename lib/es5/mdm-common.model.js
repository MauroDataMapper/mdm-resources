/*
Copyright 2021 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
export var ContainerDomainType;
(function (ContainerDomainType) {
    ContainerDomainType["Classifiers"] = "classifiers";
    ContainerDomainType["Folders"] = "folders";
    ContainerDomainType["VersionedFolders"] = "versionedFolders";
})(ContainerDomainType || (ContainerDomainType = {}));
export var ModelDomainType;
(function (ModelDomainType) {
    ModelDomainType["Folders"] = "folders";
    ModelDomainType["DataModels"] = "dataModels";
    ModelDomainType["DataClasses"] = "dataClasses";
    ModelDomainType["DataTypes"] = "dataTypes";
    ModelDomainType["Terminologies"] = "terminologies";
    ModelDomainType["ReferenceDataModels"] = "referenceDataModels";
    ModelDomainType["Terms"] = "terms";
    ModelDomainType["Classifiers"] = "classifiers";
    ModelDomainType["VersionedFolders"] = "versionedFolders";
    ModelDomainType["All"] = "all";
})(ModelDomainType || (ModelDomainType = {}));
/**
 * Represents the available catalogue items in Mauro.
 *
 * @see {@link catalogueItemToMultiFacetAware}
 */
export var CatalogueItemDomainType;
(function (CatalogueItemDomainType) {
    CatalogueItemDomainType["Folder"] = "Folder";
    CatalogueItemDomainType["DataModel"] = "DataModel";
    CatalogueItemDomainType["DataClass"] = "DataClass";
    CatalogueItemDomainType["DataElement"] = "DataElement";
    CatalogueItemDomainType["Terminology"] = "Terminology";
    CatalogueItemDomainType["Term"] = "Term";
    CatalogueItemDomainType["CodeSet"] = "CodeSet";
    CatalogueItemDomainType["Classification"] = "Classification";
    CatalogueItemDomainType["ReferenceDataModel"] = "ReferenceDataModel";
    CatalogueItemDomainType["EnumerationType"] = "EnumerationType";
    CatalogueItemDomainType["PrimitiveType"] = "PrimitiveType";
    CatalogueItemDomainType["ReferenceType"] = "ReferenceType";
    CatalogueItemDomainType["TerminologyType"] = "TerminologyType";
    CatalogueItemDomainType["ReferenceDataModelType"] = "ReferenceDataModelType";
    CatalogueItemDomainType["ReferencePrimitiveType"] = "ReferencePrimitiveType";
    CatalogueItemDomainType["ReferenceEnumerationType"] = "ReferenceEnumerationType";
    CatalogueItemDomainType["ReferenceEnumerationValue"] = "ReferenceEnumerationValue";
    CatalogueItemDomainType["CodeSetType"] = "CodeSetType";
    CatalogueItemDomainType["ModelDataType"] = "ModelDataType";
    CatalogueItemDomainType["ReferenceFile"] = "ReferenceFile";
    CatalogueItemDomainType["VersionedFolder"] = "VersionedFolder";
    CatalogueItemDomainType["Root"] = "Root";
    CatalogueItemDomainType["LocalCatalogue"] = "LocalCatalogue";
    CatalogueItemDomainType["ExternalCatalogues"] = "ExternalCatalogues";
    CatalogueItemDomainType["SubscribedCatalogue"] = "SubscribedCatalogue";
    CatalogueItemDomainType["FederatedDataModel"] = "FederatedDataModel";
})(CatalogueItemDomainType || (CatalogueItemDomainType = {}));
/**
 * Represents any catalogue item that is "multi-facet aware", meaning an item that can contain multiple facets or metadata values.
 *
 * @description These string constants are typically used in URL endpoints to generalise endpoints that are grouped by action.
 *
 * @see {@link multiFacetAwareToCatalogueItem}
 */
export var MultiFacetAwareDomainType;
(function (MultiFacetAwareDomainType) {
    MultiFacetAwareDomainType["Classifiers"] = "classifiers";
    MultiFacetAwareDomainType["CodeSets"] = "codeSets";
    MultiFacetAwareDomainType["DataClasses"] = "dataClasses";
    MultiFacetAwareDomainType["DataClassComponents"] = "dataClassComponents";
    MultiFacetAwareDomainType["DataElements"] = "dataElements";
    MultiFacetAwareDomainType["DataElementComponents"] = "dataElementComponents";
    MultiFacetAwareDomainType["DataFlows"] = "dataFlows";
    MultiFacetAwareDomainType["DataModels"] = "dataModels";
    MultiFacetAwareDomainType["DataTypes"] = "dataTypes";
    MultiFacetAwareDomainType["EnumerationTypes"] = "enumerationTypes";
    MultiFacetAwareDomainType["EnumerationValues"] = "enumerationValues";
    MultiFacetAwareDomainType["Folders"] = "folders";
    MultiFacetAwareDomainType["ModelDataTypes"] = "modelDataTypes";
    MultiFacetAwareDomainType["PrimitiveTypes"] = "primitiveTypes";
    MultiFacetAwareDomainType["ReferenceDataElements"] = "referenceDataElements";
    MultiFacetAwareDomainType["ReferenceDataModels"] = "referenceDataModels";
    MultiFacetAwareDomainType["ReferenceDataTypes"] = "referenceDataTypes";
    MultiFacetAwareDomainType["ReferenceEnumerationTypes"] = "referenceEnumerationTypes";
    MultiFacetAwareDomainType["ReferenceEnumerationValues"] = "referenceEnumerationValues";
    MultiFacetAwareDomainType["ReferencePrimitiveTypes"] = "referencePrimitiveTypes";
    MultiFacetAwareDomainType["ReferenceTypes"] = "referenceTypes";
    MultiFacetAwareDomainType["Terms"] = "terms";
    MultiFacetAwareDomainType["TermRelationships"] = "termRelationships";
    MultiFacetAwareDomainType["TermRelationshipTypes"] = "termRelationshipTypes";
    MultiFacetAwareDomainType["Terminologies"] = "terminologies";
    MultiFacetAwareDomainType["VersionedFolders"] = "versionedFolders";
})(MultiFacetAwareDomainType || (MultiFacetAwareDomainType = {}));
/**
 * Determine if a given domain type represents a Container.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a container type.
 */
export function isContainerDomainType(domainType) {
    return domainType === CatalogueItemDomainType.Classification
        || domainType === CatalogueItemDomainType.Folder
        || domainType === CatalogueItemDomainType.VersionedFolder;
}
/**
 * Determine if a given domain type represents a Model.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a model type.
 */
export function isModelDomainType(domainType) {
    return domainType === CatalogueItemDomainType.DataModel
        || domainType === CatalogueItemDomainType.CodeSet
        || domainType === CatalogueItemDomainType.Terminology
        || domainType === CatalogueItemDomainType.ReferenceDataModel;
}
/**
 * Determine if a given domain type represents a Mauro data type.
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a data type.
 */
export function isDataType(domainType) {
    return domainType === CatalogueItemDomainType.CodeSetType
        || domainType === CatalogueItemDomainType.ModelDataType
        || domainType === CatalogueItemDomainType.PrimitiveType
        || domainType === CatalogueItemDomainType.ReferenceType
        || domainType === CatalogueItemDomainType.EnumerationType
        || domainType === CatalogueItemDomainType.TerminologyType
        || domainType === CatalogueItemDomainType.ReferenceDataModelType;
}
/**
 * Maps a {@link CatalogueItemDomainType} to an equivalent {@link MultiFacetAwareDomainType}.
 * @param value The catalogue item domain type to map from.
 * @returns The correct {@link MultiFacetAwareDomainType} or `undefined` if there is no equivalent.
 *
 * @description Use this utility function for generalising some endpoints when only given an object that is a {@link CatalogueItem}.
 */
export function catalogueItemToMultiFacetAware(value) {
    switch (value) {
        case CatalogueItemDomainType.Classification: return MultiFacetAwareDomainType.Classifiers;
        case CatalogueItemDomainType.CodeSet: return MultiFacetAwareDomainType.CodeSets;
        case CatalogueItemDomainType.DataClass: return MultiFacetAwareDomainType.DataClasses;
        case CatalogueItemDomainType.DataElement: return MultiFacetAwareDomainType.DataElements;
        case CatalogueItemDomainType.DataModel: return MultiFacetAwareDomainType.DataModels;
        case CatalogueItemDomainType.EnumerationType: return MultiFacetAwareDomainType.EnumerationTypes;
        case CatalogueItemDomainType.Folder: return MultiFacetAwareDomainType.Folders;
        case CatalogueItemDomainType.ModelDataType: return MultiFacetAwareDomainType.ModelDataTypes;
        case CatalogueItemDomainType.PrimitiveType: return MultiFacetAwareDomainType.PrimitiveTypes;
        case CatalogueItemDomainType.ReferenceDataModel: return MultiFacetAwareDomainType.ReferenceDataModels;
        case CatalogueItemDomainType.ReferenceType: return MultiFacetAwareDomainType.ReferenceTypes;
        case CatalogueItemDomainType.Term: return MultiFacetAwareDomainType.Terms;
        case CatalogueItemDomainType.Terminology: return MultiFacetAwareDomainType.Terminologies;
        case CatalogueItemDomainType.VersionedFolder: return MultiFacetAwareDomainType.VersionedFolders;
        default: return undefined;
    }
}
/**
 * Maps a {@link MultiFacetAwareDomainType} to an equivalent {@link CatalogueItemDomainType}.
 * @param value The multi facet aware domain type to map from.
 * @returns The correct {@link CatalogueItemDomainType} or `undefined` if there is no equivalent.
 */
export function multiFacetAwareToCatalogueItem(value) {
    switch (value) {
        case MultiFacetAwareDomainType.Classifiers: return CatalogueItemDomainType.Classification;
        case MultiFacetAwareDomainType.CodeSets: return CatalogueItemDomainType.CodeSet;
        case MultiFacetAwareDomainType.DataClasses: return CatalogueItemDomainType.DataClass;
        case MultiFacetAwareDomainType.DataElements: return CatalogueItemDomainType.DataElement;
        case MultiFacetAwareDomainType.DataModels: return CatalogueItemDomainType.DataModel;
        case MultiFacetAwareDomainType.EnumerationTypes: return CatalogueItemDomainType.EnumerationType;
        case MultiFacetAwareDomainType.Folders: return CatalogueItemDomainType.Folder;
        case MultiFacetAwareDomainType.ModelDataTypes: return CatalogueItemDomainType.ModelDataType;
        case MultiFacetAwareDomainType.PrimitiveTypes: return CatalogueItemDomainType.PrimitiveType;
        case MultiFacetAwareDomainType.ReferenceDataModels: return CatalogueItemDomainType.ReferenceDataModel;
        case MultiFacetAwareDomainType.ReferenceTypes: return CatalogueItemDomainType.ReferenceType;
        case MultiFacetAwareDomainType.Terms: return CatalogueItemDomainType.Term;
        case MultiFacetAwareDomainType.Terminologies: return CatalogueItemDomainType.Terminology;
        case MultiFacetAwareDomainType.VersionedFolders: return CatalogueItemDomainType.VersionedFolder;
        default: return undefined;
    }
}
function isValueOfEnum(object, token) {
    return Object.values(object).includes(token);
}
/**
 * Gets a {@link MultiFacetAwareDomainType}. If not originally  {@link MultiFacetAwareDomainType} then a conversion will be attempted.
 * @param value A value representing either a {@link MultiFacetAwareDomainType} or a {@link CatalogueItemDomainType}.
 * @returns A suitable {@link MultiFacetAwareDomainType}.
 */
export function getMultiFacetAwareDomainType(value) {
    if (isValueOfEnum(CatalogueItemDomainType, value)) {
        var multiFacetAware = catalogueItemToMultiFacetAware(value);
        if (!multiFacetAware) {
            throw new Error("Cannot determine MultiFacetAwareDomainType from '" + value + "'");
        }
        return multiFacetAware;
    }
    return value;
}
//# sourceMappingURL=mdm-common.model.js.map