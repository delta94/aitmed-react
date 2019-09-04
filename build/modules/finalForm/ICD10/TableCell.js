var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TableCell as MuiTableCell } from '@material-ui/core';
// cell name example:  diagnosis.code, diagnosis.description, diagnosis.comment
var useStyles = makeStyles(function (theme) { return ({
    cellRoot: {},
    cellHead: {
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.common.white,
    },
    cellBody: {
        fontSize: 14,
        padding: '0 !important',
    },
    cellFooter: {},
}); });
var TableCell = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var classes = useStyles(rest);
    return (React.createElement(MuiTableCell, __assign({ classes: {
            root: classes.cellRoot,
            head: classes.cellHead,
            body: classes.cellBody,
            footer: classes.cellFooter,
        } }, rest), children));
};
export default TableCell;
//# sourceMappingURL=TableCell.js.map