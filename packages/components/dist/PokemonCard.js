"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var utils_1 = require("@marlow/utils");
var PokemonDetails = function (props) {
    var _a = (0, react_1.useState)([]), details = _a[0], setDetails = _a[1];
    var _b = (0, react_1.useState)(null), pokemonHeight = _b[0], setPokemonHeight = _b[1];
    var _c = (0, react_1.useState)(null), pokemonWeight = _c[0], setPokemonWeight = _c[1];
    var _d = (0, react_1.useState)(false), isLoading = _d[0], setIsLoading = _d[1];
    var apiUrl = props.url;
    (0, react_1.useEffect)(function () {
        setIsLoading(true);
        (0, utils_1.fetchApiData)(apiUrl)
            .then(function (res) {
            setDetails(res.abilities);
            setPokemonHeight(res.height);
            setPokemonWeight(res.weight);
            setIsLoading(false);
        });
    }, [apiUrl]);
    if (isLoading) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Typography, { variant: 'h5' },
            "Name: ",
            props.name),
        react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "Abilities"),
        react_1.default.createElement(material_1.List, null, details.map(function (item, i) { return (react_1.default.createElement(material_1.ListItem, { key: i },
            react_1.default.createElement(material_1.ListItemText, { primary: item.ability.name }))); })),
        react_1.default.createElement(material_1.Typography, { variant: 'body1' },
            "Height: ",
            pokemonHeight),
        react_1.default.createElement(material_1.Typography, { variant: 'body1' },
            "Weight: ",
            pokemonWeight),
        react_1.default.createElement(material_1.Typography, { variant: 'body1' },
            "url: ",
            apiUrl)));
};
exports.default = PokemonDetails;
