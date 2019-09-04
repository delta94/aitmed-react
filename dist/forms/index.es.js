import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import cx from 'classnames';
import MuiDivider from '@material-ui/core/Divider';
import format from 'date-fns/format';
import formatString from 'format-string-by-pattern';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiTextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/styles/useTheme';
import Signature from 'react-signature-canvas';
import MUITypography from '@material-ui/core/Typography';
import MaterialUIButton from '@material-ui/core/Button';
import { FieldArray } from 'react-final-form-arrays';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiTableCell from '@material-ui/core/TableCell';
import Downshift from 'downshift';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import { IoIosSearch, IoIosCloseCircle } from 'react-icons/io';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import createDecorator from 'final-form-focus';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// @ts-ignore
var useStyles = makeStyles(function (theme) {
  return {
    root: function root(_ref) {
      var margin = _ref.margin;
      var smallMargin = typeof margin === 'number' ? margin / 2 : false;
      return _defineProperty({
        margin: margin || "".concat(theme.spacing(2.5) + 'px', " auto")
      }, theme.breakpoints.down('xs'), {
        margin: smallMargin || "".concat(theme.spacing(1.5) + 'px', " auto")
      });
    }
  };
});

var Divider = function Divider(_ref3) {
  var _ref3$classNames = _ref3.classNames,
      classNames = _ref3$classNames === void 0 ? {} : _ref3$classNames,
      props = _objectWithoutProperties(_ref3, ["classNames"]);

  var classes = useStyles(props);
  return React.createElement(MuiDivider, _extends({
    classes: _objectSpread2({}, classNames, {
      root: cx(classes.root, classNames.root)
    })
  }, props));
};

function formatOnlyNumbers(val) {
  if (!val) return val;
  var regex = /[^\d]/g;
  return String(val).replace(regex, '');
}
/* -------------------------------------------------------
  ---- PARSERS (pass into "parse" prop to <Field />)
-------------------------------------------------------- */
// Strips away non-numbers and returns the val in format --> +1 (626) 452-0559

function parsePhone(val) {
  var format = '+9 (999) 999-9999';
  return formatString(format, formatOnlyNumbers(val));
} // Turns a string into a social security number format

function parseSSN(val) {
  var format = '999-99-9999';
  return formatString(format, formatOnlyNumbers(val));
}

var Checkbox = function Checkbox(_ref) {
  var wrapperRootProps = _ref.wrapperRootProps,
      wrapperProps = _ref.wrapperProps,
      checkboxProps = _ref.checkboxProps,
      classNames = _ref.classNames,
      label = _ref.label,
      withTextField = _ref.withTextField,
      textField = _ref.textField,
      rest = _objectWithoutProperties(_ref, ["wrapperRootProps", "wrapperProps", "checkboxProps", "classNames", "label", "withTextField", "textField"]);

  return React.createElement("div", _extends({
    style: {
      flexGrow: 1
    }
  }, wrapperRootProps), React.createElement(FormControlLabel, _extends({
    control: React.createElement(MuiCheckbox, _extends({
      classes: classNames
    }, checkboxProps)),
    label: label
  }, rest)), !textField && withTextField && React.createElement(MuiTextField, withTextField), textField);
};

// @ts-ignore
var useStyles$1 = makeStyles(function (theme) {
  var _h, _h2, _h3, _h4, _h5, _h6, _subtitle, _subtitle2, _body, _body2, _button, _caption, _subheading;

  return {
    h1: (_h = {
      fontWeight: 600
    }, _defineProperty(_h, theme.breakpoints.down('md'), {
      fontSize: '4.5em'
    }), _defineProperty(_h, theme.breakpoints.down('sm'), {
      fontSize: '4em'
    }), _defineProperty(_h, theme.breakpoints.down('xs'), {
      fontSize: '1.7em'
    }), _h),
    h2: (_h2 = {
      fontWeight: 500
    }, _defineProperty(_h2, theme.breakpoints.down('md'), {
      fontSize: '3.3em'
    }), _defineProperty(_h2, theme.breakpoints.down('sm'), {
      fontSize: '3em !important'
    }), _defineProperty(_h2, theme.breakpoints.down('xs'), {
      fontSize: '1.4em !important'
    }), _h2),
    h3: (_h3 = {
      fontWeight: 500
    }, _defineProperty(_h3, theme.breakpoints.down('md'), {
      fontSize: '2.8em'
    }), _defineProperty(_h3, theme.breakpoints.down('sm'), {
      fontSize: '2.5em '
    }), _defineProperty(_h3, theme.breakpoints.down('xs'), {
      fontSize: '1.1em'
    }), _h3),
    h4: (_h4 = {
      fontWeight: 500
    }, _defineProperty(_h4, theme.breakpoints.down('sm'), {
      fontSize: '1.8em'
    }), _defineProperty(_h4, theme.breakpoints.down('xs'), {
      fontSize: '1em'
    }), _h4),
    h5: (_h5 = {
      fontSize: '2em',
      fontWeight: 500
    }, _defineProperty(_h5, theme.breakpoints.down('sm'), {
      fontSize: '1.55em'
    }), _defineProperty(_h5, theme.breakpoints.down('xs'), {
      fontSize: '0.95em'
    }), _h5),
    h6: (_h6 = {
      fontSize: '1.3em',
      fontWeight: 400
    }, _defineProperty(_h6, theme.breakpoints.down('sm'), {
      fontSize: '1.2em'
    }), _defineProperty(_h6, theme.breakpoints.down('xs'), {
      fontSize: '0.85em'
    }), _h6),
    subtitle1: (_subtitle = {}, _defineProperty(_subtitle, theme.breakpoints.down('sm'), {
      fontSize: '0.9em'
    }), _defineProperty(_subtitle, theme.breakpoints.down('xs'), {
      fontSize: '0.75em'
    }), _subtitle),
    subtitle2: (_subtitle2 = {}, _defineProperty(_subtitle2, theme.breakpoints.down('sm'), {
      fontSize: '0.8em'
    }), _defineProperty(_subtitle2, theme.breakpoints.down('xs'), {
      fontSize: '0.7em'
    }), _subtitle2),
    body1: (_body = {
      fontSize: '0.95em'
    }, _defineProperty(_body, theme.breakpoints.down('sm'), {
      fontSize: '0.82em'
    }), _defineProperty(_body, theme.breakpoints.down('xs'), {
      fontSize: '0.68em'
    }), _body),
    body2: (_body2 = {}, _defineProperty(_body2, theme.breakpoints.down('sm'), {
      fontSize: '0.73em'
    }), _defineProperty(_body2, theme.breakpoints.down('xs'), {
      fontSize: '0.6em'
    }), _body2),
    button: (_button = {}, _defineProperty(_button, theme.breakpoints.down('sm'), {
      fontSize: '0.8em'
    }), _defineProperty(_button, theme.breakpoints.down('xs'), {
      fontSize: '0.65em'
    }), _button),
    caption: (_caption = {}, _defineProperty(_caption, theme.breakpoints.down('sm'), {
      fontSize: '0.7em'
    }), _defineProperty(_caption, theme.breakpoints.down('xs'), {
      fontSize: '0.58em'
    }), _caption),
    subheading: (_subheading = {
      fontSize: '1.3em',
      fontWeight: 300
    }, _defineProperty(_subheading, theme.breakpoints.down('sm'), {
      fontSize: '1em'
    }), _defineProperty(_subheading, theme.breakpoints.down('xs'), {
      fontSize: '0.8em'
    }), _subheading),
    primary: {
      color: theme.palette.primary.main
    },
    secondary: {
      color: "".concat(theme.palette.secondary.main, " !important")
    },
    thirdary: {
      color: theme.palette.thirdary.main
    },
    darkBlue: {
      color: theme.palette.secondary.darker
    },
    link: {
      cursor: 'pointer',
      color: theme.palette.link.normal,
      '&:hover': {
        color: theme.palette.link.hovering
      }
    },
    italic: {
      fontStyle: 'italic'
    },
    unselected: {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    },
    centerOnSmall: _defineProperty({}, theme.breakpoints.down('xs'), {
      textAlign: 'center'
    })
  };
});

var Typography = function Typography(_ref) {
  var _ref2;

  var className = _ref.className,
      style = _ref.style,
      primaryProp = _ref.primary,
      secondaryProp = _ref.secondary,
      thirdaryProp = _ref.thirdary,
      darkBlue = _ref.darkBlue,
      white = _ref.white,
      black = _ref.black,
      soft = _ref.soft,
      inactive = _ref.inactive,
      errorProp = _ref.error,
      red = _ref.red,
      link = _ref.link,
      variant = _ref.variant,
      left = _ref.left,
      center = _ref.center,
      centerOnSmall = _ref.centerOnSmall,
      right = _ref.right,
      margin = _ref.margin,
      marginBottom = _ref.marginBottom,
      padding = _ref.padding,
      divider = _ref.divider,
      fontWeight = _ref.fontWeight,
      italic = _ref.italic,
      unselected = _ref.unselected,
      props = _objectWithoutProperties(_ref, ["className", "style", "primary", "secondary", "thirdary", "darkBlue", "white", "black", "soft", "inactive", "error", "red", "link", "variant", "left", "center", "centerOnSmall", "right", "margin", "marginBottom", "padding", "divider", "fontWeight", "italic", "unselected"]);

  var classes = useStyles$1();
  var theme = useTheme();
  var styles = {}; // Computes the font color

  if (primaryProp) styles.color = theme.palette.primary.main;else if (secondaryProp) styles.color = theme.palette.secondary.main;else if (thirdaryProp) styles.color = theme.palette.thirdary.main;else if (darkBlue) styles.color = theme.palette.secondary.dark;else if (errorProp || red) styles.color = theme.palette.error.main;else if (white) styles.color = '#fff';else if (black) styles.color = '#000';
  if (margin) styles.margin = margin;
  if (marginBottom) styles.marginBottom = marginBottom;
  if (padding) styles.padding = padding;
  if (fontWeight) styles.fontWeight = fontWeight;
  if (left) styles.textAlign = 'left';
  if (center) styles.textAlign = 'center';
  if (right) styles.textAlign = 'right';
  var classNames = [];
  if (centerOnSmall) classNames.push(classes.centerOnSmall);
  if (variant && variant !== 'subheading') classNames.push(classes[variant]);
  return React.createElement(React.Fragment, null, React.createElement(MUITypography, _extends({
    style: _objectSpread2({}, style, {}, styles),
    className: cx.apply(void 0, [className].concat(classNames, [(_ref2 = {}, _defineProperty(_ref2, classes.primary, !!primaryProp), _defineProperty(_ref2, classes.secondary, !!secondaryProp), _defineProperty(_ref2, classes.thirdary, !!thirdaryProp), _defineProperty(_ref2, classes.darkBlue, !!darkBlue), _defineProperty(_ref2, classes.link, !!link), _defineProperty(_ref2, classes.italic, !!italic), _defineProperty(_ref2, classes.unselected, !!unselected), _ref2)])) // @ts-ignore
    ,
    variant: variant !== 'subheading' ? variant : undefined
  }, props)), divider && React.createElement(MuiDivider, null));
};

var useStyles$2 = makeStyles(function (theme) {
  return {
    root: {
      position: 'relative',
      borderRadius: 50,
      boxShadow: 'none',
      background: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      color: '#fff',
      '&:hover': {
        background: 'none',
        color: theme.palette.primary.main
      }
    },
    primary: {
      border: "1px solid ".concat(theme.palette.primary.main),
      color: '#fff',
      background: "".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.dark, " !important"),
        background: "".concat(theme.palette.primary.dark, " !important"),
        color: '#fff'
      }
    },
    secondary: {
      border: "1px solid ".concat(theme.palette.secondary.main),
      color: '#fff',
      background: "".concat(theme.palette.secondary.main),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.dark, " !important"),
        background: "".concat(theme.palette.secondary.dark, " !important"),
        color: '#fff'
      }
    },
    thirdary: {
      border: "1px solid ".concat(theme.palette.thirdary.main),
      color: '#fff',
      background: theme.palette.thirdary.main,
      '&:hover': {
        border: "1px solid ".concat(theme.palette.thirdary.dark, " !important"),
        background: "".concat(theme.palette.thirdary.dark, " !important"),
        color: '#fff'
      }
    },
    neutral: {
      border: "1px solid ".concat(theme.palette.inactive),
      color: '#fff',
      background: 'grey',
      '&:hover': {
        background: 'none !important',
        color: theme.palette.text.light
      }
    },
    error: {
      border: "1px solid ".concat(theme.palette.error.main),
      color: '#fff',
      background: theme.palette.error.main,
      '&:hover': {
        background: "".concat(theme.palette.error.dark, " !important"),
        color: '#fff'
      }
    },
    hoverPrimaryOnSecondary: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        border: '1px solid #fff !important',
        color: '#fff !important'
      }
    },
    hoverPrimaryOnThirdary: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        border: '1px solid #fff !important',
        color: '#fff !important'
      }
    },
    hoverPrimaryOnWhite: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.primary.main, " !important")
      }
    },
    hoverPrimaryOnBlack: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main),
      '&:hover': {
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverSecondaryOnPrimary: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverSecondaryOnThirdary: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverSecondaryOnWhite: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.secondary.main, " !important")
      }
    },
    hoverSecondaryOnBlack: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverThirdaryOnPrimary: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverThirdaryOnSecondary: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main, " !important"),
      '&:hover': {
        border: '1px solid #fff !important',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverThirdaryOnWhite: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.thirdary.main, " !important")
      }
    },
    hoverThirdaryOnBlack: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main),
      '&:hover': {
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnPrimary: {
      color: theme.palette.text.normal,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.primary.lighter),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnSecondary: {
      color: theme.palette.text.normal,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.secondary.lighter),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnThirdary: {
      color: theme.palette.text.normal,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.thirdary.lighter),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnBlack: {
      color: theme.palette.text.soft,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.borders.slightlyDark),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.borders.cloud, " !important"),
        background: '#000 !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnPrimary: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnSecondary: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnThirdary: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnWhite: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: "1px solid ".concat(theme.palette.borders.dark, " !important"),
        background: 'none !important',
        color: "".concat(theme.palette.text.normal, " !important")
      }
    },
    hoverError: {
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.error.main, " !important")
      }
    },
    small: {
      fontSize: '0.65em'
    },
    medium: {
      fontSize: '0.8em'
    },
    large: _defineProperty({
      fontSize: '1.2em !important'
    }, theme.breakpoints.down('sm'), {
      fontSize: '0.9em !important'
    }),
    xlarge: {
      fontSize: '1.1em',
      padding: '20px 45px'
    },
    disabled: {
      background: "".concat(theme.palette.inactive, " !important"),
      border: "".concat(theme.palette.inactive, " !important"),
      color: '#fff !important'
    },
    outlined: {
      background: 'none !important'
    },
    textPrimary: {
      color: "".concat(theme.palette.primary.main, " !important")
    },
    textSecondary: {
      color: "".concat(theme.palette.secondary.main, " !important")
    },
    textThirdary: {
      color: "".concat(theme.palette.thirdary.main, " !important")
    },
    textNeutral: {
      color: "".concat(theme.palette.text.soft, " !important")
    },
    textDanger: {
      color: "".concat(theme.palette.error.main, " !important")
    },
    centerOnSmall: _defineProperty({}, theme.breakpoints.down('xs'), {
      textAlign: 'center',
      display: 'block',
      margin: 'auto'
    })
  };
});

var Button = function Button(_ref) {
  var _cx;

  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      thirdary = _ref.thirdary,
      neutral = _ref.neutral,
      error = _ref.error,
      red = _ref.red,
      danger = _ref.danger,
      _ref$hover = _ref.hover,
      hover = _ref$hover === void 0 ? {} : _ref$hover,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      xlarge = _ref.xlarge,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      disabled = _ref.disabled,
      outlined = _ref.outlined,
      textColor = _ref.textColor,
      background = _ref.background,
      overwriteClassName = _ref.overwriteClassName,
      overWrittenClassNames = _ref.overWrittenClassNames,
      centerOnSmall = _ref.centerOnSmall,
      others = _objectWithoutProperties(_ref, ["className", "children", "primary", "secondary", "thirdary", "neutral", "error", "red", "danger", "hover", "small", "medium", "large", "xlarge", "size", "disabled", "outlined", "textColor", "background", "overwriteClassName", "overWrittenClassNames", "centerOnSmall"]);

  var classes = useStyles$2();
  var muiSizes = ['small', 'medium', 'large'];
  var classNames = cx(classes.root, className, (_cx = {}, _defineProperty(_cx, classes.primary, !!primary), _defineProperty(_cx, classes.secondary, !!secondary), _defineProperty(_cx, classes.error, !!error || !!red || !!danger), _defineProperty(_cx, classes.root, !secondary), _defineProperty(_cx, classes.thirdary, !!thirdary), _defineProperty(_cx, classes.neutral, !!neutral || !primary && !secondary && !thirdary && !error && !outlined && !Object.keys(hover).length), _defineProperty(_cx, classes.hoverPrimaryOnSecondary, hover.primary === 'secondary'), _defineProperty(_cx, classes.hoverPrimaryOnThirdary, hover.primary === 'thirdary'), _defineProperty(_cx, classes.hoverPrimaryOnWhite, hover.primary === 'white'), _defineProperty(_cx, classes.hoverPrimaryOnBlack, hover.primary === 'black'), _defineProperty(_cx, classes.hoverSecondaryOnPrimary, hover.secondary === 'primary'), _defineProperty(_cx, classes.hoverSecondaryOnThirdary, hover.secondary === 'thirdary'), _defineProperty(_cx, classes.hoverSecondaryOnBlack, hover.secondary === 'black'), _defineProperty(_cx, classes.hoverSecondaryOnWhite, hover.secondary === 'white'), _defineProperty(_cx, classes.hoverThirdaryOnPrimary, hover.thirdary === 'primary'), _defineProperty(_cx, classes.hoverThirdaryOnSecondary, hover.thirdary === 'secondary'), _defineProperty(_cx, classes.hoverThirdaryOnWhite, hover.thirdary === 'white'), _defineProperty(_cx, classes.hoverThirdaryOnBlack, hover.thirdary === 'black'), _defineProperty(_cx, classes.hoverWhiteOnPrimary, hover.white === 'primary'), _defineProperty(_cx, classes.hoverWhiteOnSecondary, hover.white === 'secondary'), _defineProperty(_cx, classes.hoverWhiteOnThirdary, hover.white === 'thirdary'), _defineProperty(_cx, classes.hoverWhiteOnBlack, hover.white === 'black'), _defineProperty(_cx, classes.hoverBlackOnPrimary, hover.black === 'primary'), _defineProperty(_cx, classes.hoverBlackOnSecondary, hover.black === 'secondary'), _defineProperty(_cx, classes.hoverBlackOnThirdary, hover.black === 'thirdary'), _defineProperty(_cx, classes.hoverBlackOnWhite, hover.black === 'white'), _defineProperty(_cx, classes.hoverError, !!hover.red || !!hover.danger || !!hover.error), _defineProperty(_cx, classes.small, !!small), _defineProperty(_cx, classes.medium, !!medium), _defineProperty(_cx, classes.large, !!large), _defineProperty(_cx, classes.xlarge, !!xlarge), _defineProperty(_cx, classes.disabled, disabled), _defineProperty(_cx, classes.outlined, !!outlined), _defineProperty(_cx, classes.textPrimary, textColor === 'primary'), _defineProperty(_cx, classes.textSecondary, textColor === 'secondary' && (!!secondary || !!hover.secondary)), _defineProperty(_cx, classes.textThirdary, textColor === 'thirdary' && (!!thirdary || !!hover.primary)), _defineProperty(_cx, classes.textNeutral, textColor === 'neutral' && !!neutral), _defineProperty(_cx, classes.textDanger, ['error', 'red', 'danger'].includes(textColor || '') && (!!danger || !!red || !!error || !!hover.danger || !!hover.red || !!hover.error)), _defineProperty(_cx, classes.centerOnSmall, !!centerOnSmall), _cx));
  return React.createElement(MaterialUIButton, _extends({
    style: {
      background: background
    },
    className: overwriteClassName ? overWrittenClassNames : classNames,
    variant: !!outlined && 'outlined' || // @ts-ignore
    !!others.variant === 'outlined' && 'outlined' || 'contained',
    size: muiSizes.includes(size) && size || (small ? 'small' : medium ? 'medium' : large ? 'large' : 'medium'),
    disabled: disabled
  }, others), children);
};

var useStyles$3 = makeStyles(function (theme) {
  return {
    root: {},
    xsBlock: _defineProperty({}, theme.breakpoints.down('xs'), {
      display: 'block !important',
      // Sometimes we do a "wrapperProps={{ marginRight: 3 }} for input components".
      //    This is used to restore it on a mobile screen
      '& fieldset': {
        marginRight: 0
      }
    }),
    spaced: {
      '& fieldset': {
        marginRight: 4
      }
    }
  };
});

function computeJustify(props) {
  if (props.center) return 'center';
  if (props.spaceBetween) return 'space-between';
  if (props.spaceAround) return 'space-around';
  if (props.flexStart) return 'flex-start';
  if (props.flexEnd) return 'flex-end';
  return 'initial';
}

var Flex = function Flex(props) {
  var classes = useStyles$3(props);

  var style = props.style,
      center = props.center,
      spaceBetween = props.spaceBetween,
      spaceAround = props.spaceAround,
      flexStart = props.flexStart,
      flexEnd = props.flexEnd,
      flexGrow = props.flexGrow,
      flexDirection = props.flexDirection,
      flexWrap = props.flexWrap,
      textAlign = props.textAlign,
      wrap = props.wrap,
      xsBlock = props.xsBlock,
      rest = _objectWithoutProperties(props, ["style", "center", "spaceBetween", "spaceAround", "flexStart", "flexEnd", "flexGrow", "flexDirection", "flexWrap", "textAlign", "wrap", "xsBlock"]);

  return React.createElement("div", _extends({
    className: cx(classes.root, _defineProperty({}, classes.xsBlock, !!xsBlock)),
    style: _objectSpread2({
      display: 'flex',
      justifyContent: computeJustify(props),
      alignItems: 'center',
      flexGrow: flexGrow,
      flexDirection: flexDirection,
      textAlign: textAlign,
      flexWrap: wrap ? 'wrap' : flexWrap
    }, style)
  }, rest));
};

// @ts-ignore
var useStyles$4 = makeStyles(function (theme) {
  return {
    root: {
      position: 'relative'
    },
    contentRoot: {
      position: 'relative',
      width: '100%',
      '& h2': {
        fontWeight: 700,
        padding: '12px 12px 0'
      },
      '& label': {
        fontSize: '3.5em !important',
        fontWeight: 500
      },
      borderBottom: '2px solid #000',
      display: 'flex',
      alignItems: 'flex-end'
    },
    x: {
      position: 'relative',
      bottom: 15,
      userSelect: 'none',
      display: 'inline-block'
    },
    canvasContainer: {
      width: '100%'
    },
    canvas: _defineProperty({
      width: '90%',
      height: 90
    }, theme.breakpoints.down('xs'), {
      width: '100%'
    }),
    clearBtn: {
      position: 'absolute',
      right: 0,
      bottom: -30,
      zIndex: 9999,
      padding: '0 !important',
      margin: '0 !important',
      fontSize: 9.8,
      minHeight: 0,
      height: 20
    }
  };
});
/*
  An HTML canvas element used for signing purposes like forms.
  It just requires an onChange prop to update props.value, and signatureRef to grab a reference to it.
  The parent decides how to compute the state by passing in value and onChange as props.
  You can clear the canvas using the .clear() method by using the reference to the canvas.
  Supports react-final-form by applying input.value and input.onChange to props.value and props.onChange
*/

var FinalFormSignatureCanvas = function FinalFormSignatureCanvas(_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      canvasContainerProps = _ref.canvasContainerProps,
      canvasProps = _ref.canvasProps,
      clearBtnProps = _ref.clearBtnProps,
      className = _ref.className,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
      clearSignature = _ref.clearSignature,
      hideClear = _ref.hideClear,
      onChange = _ref.onChange,
      onDrawEnd = _ref.onDrawEnd,
      penColor = _ref.penColor,
      signatureRef = _ref.signatureRef,
      signatureInputRef = _ref.signatureInputRef,
      signatureCaption = _ref.signatureCaption,
      signatureLabel = _ref.signatureLabel,
      value = _ref.value,
      xProps = _ref.xProps;
  var classes = useStyles$4();
  var theme = useTheme(); // Pass input ref to outside, so input value can be change from outside

  if (signatureInputRef) signatureInputRef.current = input;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      trimmedDataUrl = _React$useState2[0],
      setTrimmedUrl = _React$useState2[1];

  if (onChange == undefined && !!input && _typeof(input) === 'object') {
    value = input.value;
    onChange = input.onChange;
  } else {
    console.warn('Warning: You tried to set value and onChange with "input.value" and "input.onChange" ' + 'but input was null or undefined');
  }

  var onDraw = function onDraw() {
    if (!value && typeof onChange === 'function') onChange(true); // @ts-ignore

    if (signatureRef.current) {
      // @ts-ignore
      setTrimmedUrl(signatureRef.current.toDataURL('image/png'));
    } else {
      console.warn('Tried to set the new drawing on canvas but signatureRef.current was null or undefined');
    }
  };

  var clear = function clear() {
    if (typeof onChange === 'function') onChange(false); // @ts-ignore

    if (signatureRef.current != null) signatureRef.current.clear();else if (typeof clearSignature === 'function') clearSignature();else {
      console.warn('Tried to clear the signature but no clearSignature function or signatureRef was available');
    }
  };

  return React.createElement("div", {
    className: classes.root
  }, React.createElement("div", {
    className: classes.contentRoot
  }, React.createElement(Flex, {
    flexDirection: "column"
  }, React.createElement(Typography, _extends({
    className: cx(classes.x, classNames.x),
    variant: "h2"
  }, xProps), "X"), React.createElement(Typography, {
    variant: "caption",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0
    }
  }, signatureLabel || 'Signature')), React.createElement("div", _extends({
    className: cx(classes.canvasContainer, classNames.canvasContainer)
  }, canvasContainerProps), trimmedDataUrl && meta.submitting ? React.createElement("img", {
    className: cx(classes.canvas, classNames.canvas, className),
    src: trimmedDataUrl
  }) : React.createElement(Signature, _extends({
    className: cx(classes.canvas, classNames.canvas, className),
    ref: signatureRef,
    penColor: penColor || theme.palette.secondary.dark,
    clearOnResize: false,
    onEnd: onDrawEnd || onDraw,
    clearButton: true,
    canvasProps: {
      className: cx(classes.canvas, classNames.canvas, className)
    }
  }, canvasProps)))), meta && meta.touched && meta.error && React.createElement(Typography, {
    variant: "caption",
    error: true
  }, meta.error), React.createElement(Typography, {
    variant: "caption"
  }, React.createElement("strong", null, "Note"), ": Changes in screen size or screen orientation will disrupt the cursor positioning behavior. If this happens, clear the signature by clicking on the \"Clear\" button and try again."), !hideClear && !!value && React.createElement(Button, _extends({
    id: "clear-button",
    className: classes.clearBtn,
    onClick: clear,
    hover: {
      secondary: 'white'
    },
    secondary: true
  }, clearBtnProps), "Clear"), signatureCaption);
};

// @ts-ignore
var useStyles$5 = makeStyles(function (theme) {
  return {
    helperTextRoot: {
      color: theme.palette.text.soft
    },
    select: {
      fontSize: '0.9rem !important'
    },
    marginRight: function marginRight(_ref) {
      var wrapperProps = _ref.wrapperProps;
      return wrapperProps && {
        '& fieldset': {
          marginRight: wrapperProps.marginRight
        }
      };
    },
    input: {
      fontSize: '0.9rem'
    }
  };
});

var FinalFormOutlinedTextField = function FinalFormOutlinedTextField(props) {
  var input = props.input,
      meta = props.meta,
      inline = props.inline,
      className = props.className,
      _props$wrapperProps = props.wrapperProps,
      wrapperProps = _props$wrapperProps === void 0 ? {} : _props$wrapperProps,
      _props$errorProps = props.errorProps,
      errorProps = _props$errorProps === void 0 ? {} : _props$errorProps,
      _props$classes = props.classes,
      classesProp = _props$classes === void 0 ? {} : _props$classes,
      _props$formHelperText = props.formHelperTextProps,
      formHelperTextProps = _props$formHelperText === void 0 ? {} : _props$formHelperText,
      _props$inputProps = props.inputProps,
      inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
      _props$inputLabelProp = props.inputLabelProps,
      inputLabelProps = _props$inputLabelProp === void 0 ? {} : _props$inputLabelProp,
      _props$selectProps = props.selectProps,
      selectProps = _props$selectProps === void 0 ? {} : _props$selectProps,
      otherProps = _objectWithoutProperties(props, ["input", "meta", "inline", "className", "wrapperProps", "errorProps", "classes", "formHelperTextProps", "inputProps", "inputLabelProps", "selectProps"]);

  var classes = useStyles$5({
    wrapperProps: wrapperProps
  });

  var marginRight = wrapperProps.marginRight,
      otherWrapperProps = _objectWithoutProperties(wrapperProps, ["marginRight"]);

  var fieldProps = {}; // If the caller wants this to be a select field, only pass in the select props
  //    to avoid spammy console errors

  if (otherProps.select) {
    fieldProps = {
      SelectProps: _objectSpread2({}, selectProps, {
        classes: _objectSpread2({}, classesProp, {}, selectProps.classes, {
          select: cx(classes.select, className, selectProps.classes && selectProps.classes.select)
        })
      }),
      inputProps: inputProps
    };
  } // If the caller wants this to be a textfield, only pass in the textfield props
  else {
      fieldProps = {
        classes: _objectSpread2({}, classesProp, {
          root: cx(classesProp.root, className)
        }),
        InputProps: _objectSpread2({}, inputProps, {
          classes: _objectSpread2({}, inputProps.classes, {
            input: classes.input
          })
        }),
        InputLabelProps: _objectSpread2({
          shrink: true
        }, inputLabelProps),
        FormHelperTextProps: _objectSpread2({}, formHelperTextProps, {
          classes: {
            root: cx(classes.helperTextRoot, formHelperTextProps.className, formHelperTextProps.classes ? formHelperTextProps.classes.root : undefined)
          }
        })
      };
    }

  return React.createElement("div", _extends({
    style: {
      display: inline ? 'inline-block' : 'block',
      flexGrow: 1
    }
  }, otherWrapperProps, {
    className: cx(wrapperProps.className, _defineProperty({}, classes.marginRight, marginRight != undefined))
  }), React.createElement(MuiTextField, _extends({
    margin: "dense"
  }, fieldProps, input, otherProps, {
    variant: "outlined"
  })), meta && meta.error && meta.touched && React.createElement(Typography, _extends({
    variant: "caption",
    error: true
  }, errorProps), meta.error));
};

// @ts-ignore
var useStyles$6 = makeStyles(function (theme) {
  return {
    spaced: {
      '& fieldset': {
        marginRight: 2
      }
    },
    checkboxRoot: _defineProperty({
      color: '#333',
      transform: 'scale(0.9)',
      padding: 3
    }, theme.breakpoints.down('xs'), {
      marginLeft: 8
    }),
    checkboxLabel: _defineProperty({
      fontSize: '0.72rem',
      marginLeft: 0,
      marginRight: 11,
      userSelect: 'none'
    }, theme.breakpoints.down('xs'), {
      fontSize: '0.67rem'
    })
  };
});

var DWC_1_Employee = function DWC_1_Employee(_ref) {
  var name = _ref.name,
      signatureRef = _ref.signatureRef,
      _ref$states = _ref.states,
      states = _ref$states === void 0 ? [] : _ref$states,
      rest = _objectWithoutProperties(_ref, ["name", "signatureRef", "states"]);

  var classes = useStyles$6(rest);
  return React.createElement(React.Fragment, null, React.createElement(Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Employee"), React.createElement(Flex, null, React.createElement(Field, {
    label: "Name",
    name: "".concat(name, ".name"),
    component: FinalFormOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    type: "date",
    label: "Today's Date",
    name: "".concat(name, ".date"),
    fullWidth: true,
    render: function render(_ref2) {
      var input = _ref2.input,
          meta = _ref2.meta,
          rest = _objectWithoutProperties(_ref2, ["input", "meta"]);

      return (// @ts-ignore
        React.createElement(FinalFormOutlinedTextField, _extends({}, input, rest, {
          value: format(new Date(), 'yyyy-MM-dd')
        }))
      );
    }
  })), React.createElement(Field, {
    label: "Home Address",
    name: "".concat(name, ".address"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Flex, null, React.createElement(Field, {
    label: "City",
    name: "".concat(name, ".city"),
    component: FinalFormOutlinedTextField,
    fullWidth: true,
    wrapperProps: {
      marginRight: 3
    }
  }), React.createElement(Field, {
    label: "Zip Code",
    name: "".concat(name, ".zip"),
    component: FinalFormOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".state"),
    component: FinalFormOutlinedTextField,
    selectProps: {
      "native": true
    },
    select: true,
    fullWidth: true
  }, ['Select State'].concat(_toConsumableArray(states)).map(function (state, index) {
    return React.createElement("option", {
      key: "state".concat(index),
      value: state
    }, state);
  }))), React.createElement(Flex, null, React.createElement(Field, {
    type: "date",
    label: "Date of Injury",
    name: "".concat(name, ".injury.date"),
    component: FinalFormOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    type: "time",
    label: "Time of Injury",
    name: "".concat(name, ".injury.time"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  })), React.createElement(Field, {
    label: "Address Injury Occurred",
    name: "".concat(name, ".injury.address"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Description of Injury",
    name: "".concat(name, ".injury.description"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Social Security No.",
    name: "".concat(name, ".ssn"),
    component: FinalFormOutlinedTextField,
    parse: parseSSN,
    fullWidth: true
  }), React.createElement(Field, {
    type: "email",
    label: "Email",
    name: "".concat(name, ".email"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement("div", {
    style: {
      padding: '10px 5px'
    }
  }, React.createElement(Field, {
    name: "".concat(name, ".receiveClaimNoticesByEmail"),
    type: "checkbox",
    render: function render(_ref3) {
      var input = _ref3.input,
          rest = _objectWithoutProperties(_ref3, ["input"]);

      return React.createElement(Checkbox, _extends({
        classes: {
          label: classes.checkboxLabel
        },
        classNames: {
          root: classes.checkboxRoot
        },
        label: "Check this box if you agree to receive notices about your claim by email only"
      }, input, rest));
    }
  })), React.createElement(Field // @ts-ignore
  , {
    component: FinalFormSignatureCanvas,
    name: "".concat(name, ".signature"),
    signatureLabel: "Patient Signature",
    signatureRef: signatureRef
  }));
};

var DWC_1_Employee$1 = function DWC_1_Employee(_ref) {
  var name = _ref.name,
      signatureRef = _ref.signatureRef;
  return React.createElement(React.Fragment, null, React.createElement(Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Employer"), React.createElement(Field, {
    label: "Name",
    name: "".concat(name, ".name"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Address",
    name: "".concat(name, ".address"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    type: "date",
    label: "Date first known of injury",
    name: "".concat(name, ".dateNoticedInjury"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    type: "date",
    label: "Date when claim form was provided to employee",
    name: "".concat(name, ".dateClaimFormProvidedToEmployee"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    type: "date",
    label: "Date when employer received claim form",
    name: "".concat(name, ".dateReceivedClaimForm"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Name of insurance carrier/adjusting agency",
    name: "".concat(name, ".insurance.name"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Address of insurance carrier/adjusting agency",
    name: "".concat(name, ".insurance.address"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Insurance policy number",
    name: "".concat(name, ".insurance.policyNumber"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Title",
    name: "".concat(name, ".title"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field, {
    label: "Phone",
    type: "phone",
    parse: parsePhone,
    name: "".concat(name, ".phone"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  }), React.createElement(Field // @ts-ignore
  , {
    component: FinalFormSignatureCanvas,
    name: "".concat(name, ".signature"),
    signatureLabel: "Signature of employer representative",
    signatureRef: signatureRef
  }));
};

var useStyles$7 = makeStyles({
  root: {},
  textFieldRoot: {}
});

var DWC_PR1 = function DWC_PR1(_ref) {
  var _render = _ref.render,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      _ref$states = _ref.states,
      states = _ref$states === void 0 ? [] : _ref$states,
      props = _objectWithoutProperties(_ref, ["render", "initialValues", "onSubmit", "states"]);

  var classes = useStyles$7(undefined);
  var employeeSignatureRef = React.useRef();
  var employerSignatureRef = React.createRef();
  return React.createElement(Form, _extends({
    keepDirtyOnReinitialize: true,
    onSubmit: onSubmit,
    subscription: {
      submitting: true
    } // @ts-ignore
    ,
    mutators: arrayMutators,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
          submitting = _ref2.submitting,
          rest = _objectWithoutProperties(_ref2, ["handleSubmit", "submitting"]);

      return React.createElement("form", {
        onSubmit: handleSubmit,
        className: classes.root
      }, React.createElement(DWC_1_Employee, {
        name: "employee",
        signatureRef: employeeSignatureRef,
        states: states
      }), React.createElement(Divider, null), React.createElement(DWC_1_Employee$1, {
        name: "employer",
        signatureRef: employerSignatureRef
      }), _render && _render(_objectSpread2({
        submitting: submitting
      }, rest)));
    },
    initialValues: initialValues
  }, props));
};

// cell name example:  diagnosis.code, diagnosis.description, diagnosis.comment
var useStyles$8 = makeStyles(function (theme) {
  return {
    cellRoot: {},
    cellHead: {
      backgroundColor: theme.palette.background.dark,
      color: theme.palette.common.white
    },
    cellBody: {
      fontSize: 14,
      padding: '0 !important'
    },
    cellFooter: {}
  };
});

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var classes = useStyles$8(rest);
  return React.createElement(MuiTableCell, _extends({
    classes: {
      root: classes.cellRoot,
      head: classes.cellHead,
      body: classes.cellBody,
      footer: classes.cellFooter
    }
  }, rest), children);
};

var useStyles$9 = makeStyles(function (theme) {
  return {
    tableRow: _defineProperty({
      height: 40
    }, theme.breakpoints.down('xs'), {
      height: 30,
      fontSize: '0.8rem',
      '& th': {
        fontSize: '0.65rem'
      }
    }),
    tableCell: {
      fontSize: '0.7rem'
    }
  };
});

var ICD10TableHeader = function ICD10TableHeader() {
  var classes = useStyles$9();
  return React.createElement(TableHead, null, React.createElement(TableRow, {
    className: classes.tableRow
  }, React.createElement(TableCell, {
    className: classes.tableCell,
    variant: "head"
  }, "Code"), React.createElement(TableCell, {
    className: classes.tableCell,
    variant: "head"
  }, "Description"), React.createElement(TableCell, {
    className: classes.tableCell,
    variant: "head"
  }, "Comment"), React.createElement(TableCell, {
    variant: "head"
  }, null)));
};

var TableHeader = React.memo(ICD10TableHeader);

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$6 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

var _baseReduce = baseReduce;

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray_1(collection) ? _arrayReduce : _baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, _baseIteratee(iteratee), accumulator, initAccum, _baseEach);
}

var reduce_1 = reduce;

var parseResponse = function parseResponse(data) {
  if (data) {
    var _reducer = function _reducer(acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          code = _ref2[0],
          description = _ref2[1];

      if (!acc.hasOwnProperty(code)) acc[code] = description;
      return acc;
    }; // @ts-ignore


    var _data = _slicedToArray(data, 4),
        totalResults = _data[0],
        codes = _data[1],
        _ = _data[2],
        codesAndNames = _data[3];

    return {
      total: totalResults,
      results: reduce_1(codesAndNames, _reducer, {}),
      codes: codes
    };
  }

  return;
}; // Supports cancelation of the previous onSearch request if a new onSearch is immediately invoked right after


var makeFetchICD10Request = function makeFetchICD10Request() {
  var call;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(keyword) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (call) call.cancel();
                call = axios.CancelToken.source();
                _context.next = 5;
                return axios({
                  method: 'get',
                  url: "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=".concat(keyword),
                  cancelToken: call.token
                });

              case 5:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

var downshiftReducer = function downshiftReducer(_, changes) {
  switch (changes.type) {
    case Downshift.stateChangeTypes.clickItem:
      return _objectSpread2({}, changes, {
        isOpen: false,
        inputValue: ''
      });

    case Downshift.stateChangeTypes.keyDownEnter:
      return _objectSpread2({}, changes, {
        highlightedIndex: 0,
        inputValue: ''
      });

    case Downshift.stateChangeTypes.changeInput:
      return _objectSpread2({}, changes, {
        highlightedIndex: 0
      });

    case Downshift.stateChangeTypes.unknown:
    case Downshift.stateChangeTypes.mouseUp:
    case Downshift.stateChangeTypes.itemMouseEnter:
    case Downshift.stateChangeTypes.keyDownArrowUp:
    case Downshift.stateChangeTypes.keyDownArrowDown:
    case Downshift.stateChangeTypes.keyDownEscape:
    case Downshift.stateChangeTypes.blurInput:
    case Downshift.stateChangeTypes.keyDownSpaceButton:
    case Downshift.stateChangeTypes.clickButton:
    case Downshift.stateChangeTypes.blurButton:
    case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
    case Downshift.stateChangeTypes.touchEnd:
      return changes;

    default:
      return changes;
  }
};

var initialState = {
  fetching: false,
  fetched: false,
  fetchError: null,
  data: {
    codes: [],
    results: {},
    total: 0
  }
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return _objectSpread2({}, state, {
        fetching: true,
        fetchError: null
      });

    case 'fetched':
      return _objectSpread2({}, state, {
        fetching: false,
        fetched: true,
        data: {
          codes: action.results.codes,
          results: action.results.results,
          total: action.results.total
        }
      });

    case 'fetch-failed':
      return _objectSpread2({}, state, {
        fetching: false,
        fetched: false,
        fetchError: action.error
      });

    case 'no-results':
      return _objectSpread2({}, state, {
        fetching: false
      });

    default:
      return state;
  }
};
/*
  onSearch takes in parameters: (keyword, { page, limit })
*/


var useICD10Searcher = function useICD10Searcher(_ref4) {
  var fields = _ref4.fields;

  var _React$useReducer = React.useReducer(reducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var callSearch = makeFetchICD10Request();

  var onSearch = function onSearch(keyword, downshift) {
    var isClicked = downshift.type === Downshift.stateChangeTypes.clickItem;
    if (isClicked) return;

    if (keyword) {
      dispatch({
        type: 'fetching'
      });
      callSearch(keyword).then(function (response) {
        var parsedResults = parseResponse(response.data);

        if (parsedResults) {
          var codes = parsedResults.codes;
          if (codes && !codes.length) return dispatch({
            type: 'no-results'
          });
          if (mounted) dispatch({
            type: 'fetched',
            results: parsedResults
          });
        } else dispatch({
          type: 'no-results'
        });
      })["catch"](function (error) {
        if (mounted && !axios.isCancel(error)) {
          dispatch({
            type: 'fetch-failed',
            error: error
          });
        }
      });
    }
  }; // This function will attempt to remove empty fields when adding new fields
  // It will also add an empty field when the user selects an item


  var onSelect = function onSelect(code, downshift) {
    var description;

    if (code) {
      fields.forEach(function (fieldName, index) {
        var codeElem = document.getElementById("".concat(fieldName, ".code"));
        var descriptionElem = document.getElementById("".concat(fieldName, ".description"));
        var commentElem = document.getElementById("".concat(fieldName, ".comment"));

        if (codeElem && descriptionElem) {
          if (!codeElem.value && !descriptionElem.value) {
            if (commentElem && !commentElem.value) {
              fields.remove(index);
            }
          }
        } else {
          try {
            fields.remove(index);
          } catch (error) {
            console.error;
          }
        }
      });
      description = state.data.results[code] || '';
      description = description.toUpperCase();
      fields.unshift({
        code: code,
        description: description,
        comment: ''
      });
      fields.push({
        code: '',
        description: '',
        comment: ''
      });
      downshift.clearSelection();
    }
  }; // Used to prevent review notes from opening when pressing enter


  var onKeyPress = function onKeyPress(e) {
    if (e.charCode === 13) e.preventDefault();
  };

  var stringify = function stringify(results) {
    return function (code) {
      return results[code] ? "".concat(code, ": ").concat(results[code].toUpperCase()) : '';
    };
  };

  React.useEffect(function () {
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, []);
  return _objectSpread2({}, state, {
    onSearch: onSearch,
    onSelect: onSelect,
    onKeyPress: onKeyPress,
    stringify: stringify,
    downshiftReducer: downshiftReducer
  });
};

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$1 = '[' + rsComboRange$1 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos$1, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$2 + ']',
    rsCombo$2 = '[' + rsComboRange$3 + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = _createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst_1(word);
});

var startCase_1 = startCase;

var useStyles$a = makeStyles(function (theme) {
  return {
    list: {
      borderRadius: 12,
      background: theme.palette.background.cool,
      border: "1px solid ".concat(theme.palette.borders.cool)
    },
    listItem: {
      border: '1px solid rgba(0, 0, 0, 0)',
      transition: 'all 0.1s ease-out',
      cursor: 'pointer',
      marginBottom: 2,
      '&:hover': {
        background: theme.palette.background.lightGrey2,
        '& $text': {
          transform: 'translateX(1.3px)',
          color: theme.palette.secondary.dark
        }
      }
    },
    text: _defineProperty({
      fontSize: '0.77rem',
      fontWeight: 500,
      transition: 'all 0.2s ease',
      color: theme.palette.text.soft
    }, theme.breakpoints.down('xs'), {
      fontSize: '0.65rem'
    }),
    highlighted: {
      border: "1px solid ".concat(theme.palette.thirdary.main)
    }
  };
});

var filterer = function filterer(results) {
  var inputValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function () {
    var acc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var code = arguments.length > 1 ? arguments[1] : undefined;
    var shouldShow = false;
    var diagnosisResult = results[code] || '';
    var hasInvalidChars = /^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$/g.test(inputValue);
    if (hasInvalidChars) return acc;

    if (!inputValue) {
      shouldShow = true;
    } else if (new RegExp(inputValue, 'i').test(diagnosisResult)) {
      shouldShow = true;
    } else if (new RegExp(inputValue, 'i').test(code)) shouldShow = true;

    if (shouldShow) acc.push(code);
    return acc;
  };
};

var ICD10PopupMenu = function ICD10PopupMenu(_ref) {
  var isOpen = _ref.isOpen,
      codes = _ref.codes,
      results = _ref.results,
      total = _ref.total,
      inputValue = _ref.inputValue,
      getMenuProps = _ref.getMenuProps,
      getItemProps = _ref.getItemProps,
      highlightedIndex = _ref.highlightedIndex;
  if (!isOpen || !total) return null;
  var classes = useStyles$a();
  var reducer = reduce_1(codes, filterer(results, inputValue), []);
  return React.createElement(List, _extends({
    className: classes.list,
    dense: true
  }, getMenuProps()), reducer.map(function (code, index) {
    return React.createElement(ListItem, getItemProps({
      key: "".concat(code).concat(index),
      index: index,
      item: code,
      className: cx(classes.listItem, _defineProperty({}, classes.highlighted, highlightedIndex === index))
    }), React.createElement(ListItemText, {
      className: classes.text,
      disableTypography: true
    }, code, ": ", startCase_1(results[code].toUpperCase())));
  }));
};

var useStyles$b = makeStyles(function (theme) {
  var _input;

  return {
    root: {
      margin: 'auto'
    },
    inputWrapper: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: '100%'
    }),
    input: (_input = {
      height: 40,
      minWidth: 400,
      borderRadius: 12,
      background: theme.palette.background.cool,
      border: "1px solid ".concat(theme.palette.borders.cool),
      '& input': {
        padding: '8px 3px',
        fontSize: '0.9rem'
      }
    }, _defineProperty(_input, theme.breakpoints.down('xs'), {
      minWidth: '100%',
      fontSize: '0.9rem'
    }), _defineProperty(_input, '&:hover', {
      background: theme.palette.background.lightGrey2,
      color: theme.palette.text.soft,
      '& $searchIcon': {
        color: theme.palette.text.soft
      }
    }), _input),
    searchIcon: {
      color: theme.palette.secondary.main,
      transition: 'all 1.5s ease-out',
      fontSize: '1.2rem',
      padding: '3px 5px'
    },
    searchIconSearching: {
      color: theme.palette.thirdary.dark
    },
    spinner: {
      transform: 'translateX(-16px)'
    }
  };
});

var LoadingSpinner = function LoadingSpinner(_ref) {
  var loading = _ref.loading,
      props = _objectWithoutProperties(_ref, ["loading"]);

  return loading && React.createElement(CircularProgress, _extends({
    color: "secondary",
    size: 30,
    thickness: 3,
    variant: "indeterminate"
  }, props));
};

var ICD10SearchInput = function ICD10SearchInput(_ref2) {
  var _ref2$codes = _ref2.codes,
      codes = _ref2$codes === void 0 ? [] : _ref2$codes,
      results = _ref2.results,
      total = _ref2.total,
      fetching = _ref2.fetching,
      onSelect = _ref2.onSelect,
      onInputValueChange = _ref2.onInputValueChange,
      stringify = _ref2.stringify,
      downshiftReducer = _ref2.downshiftReducer,
      onKeyPress = _ref2.onKeyPress;
  var classes = useStyles$b(); // Extracted this outside because TS was giving a weird error

  var SearchInput = function SearchInput(_ref3) {
    var getInputProps = _ref3.getInputProps,
        props = _objectWithoutProperties(_ref3, ["getInputProps"]);

    return React.createElement(Input, getInputProps(_objectSpread2({
      startAdornment: React.createElement(IoIosSearch, {
        className: cx(classes.searchIcon, _defineProperty({}, classes.searchIconSearching, fetching))
      }),
      endAdornment: React.createElement(LoadingSpinner, {
        className: classes.spinner,
        loading: fetching
      }),
      placeholder: ' Find references',
      disableUnderline: true,
      className: classes.input,
      title: 'Search ICD10 diagnosis',
      onKeyPress: onKeyPress
    }, props)));
  };

  return React.createElement(Downshift, {
    onSelect: onSelect,
    onInputValueChange: onInputValueChange,
    itemToString: stringify(results),
    stateReducer: downshiftReducer
  }, function (_ref4) {
    var getMenuProps = _ref4.getMenuProps,
        getInputProps = _ref4.getInputProps,
        getItemProps = _ref4.getItemProps,
        inputValue = _ref4.inputValue,
        highlightedIndex = _ref4.highlightedIndex,
        isOpen = _ref4.isOpen;
    return React.createElement("div", {
      className: classes.inputWrapper
    }, React.createElement(SearchInput, {
      getInputProps: getInputProps
    }), !!codes.length && React.createElement(ICD10PopupMenu, {
      codes: codes,
      results: results,
      total: total,
      isOpen: isOpen,
      inputValue: inputValue || '',
      getMenuProps: getMenuProps,
      getItemProps: getItemProps,
      highlightedIndex: highlightedIndex
    }));
  });
};

var StatusCaption = function StatusCaption(_ref) {
  var fetching = _ref.fetching,
      fetchError = _ref.fetchError,
      props = _objectWithoutProperties(_ref, ["fetching", "fetchError"]);

  return React.createElement(Typography, _extends({
    variant: "subtitle1",
    secondary: !fetchError && fetching,
    thirdary: !fetchError && !fetching,
    error: !!fetchError
  }, props), fetching && 'Searching...', !fetching && 'Search a keyword', fetchError && (fetchError ? fetchError.message || '' : 'An error occurred'));
};

var OptimizedStatusCaption = React.memo(StatusCaption, function (props, nextProps) {
  return props.fetching === nextProps.fetching || props.fetchError === nextProps.fetchError;
});
var useStyles$c = makeStyles({
  root: {
    marginBottom: 6
  },
  statusCaption: {
    margin: '0 10px'
  }
});

var ICD10Searcher = function ICD10Searcher(_ref2) {
  var highlightedField = _ref2.highlightedField,
      fields = _ref2.fields;
  var classes = useStyles$c();

  var _useICD10Searcher = useICD10Searcher({
    fields: fields
  }),
      fetching = _useICD10Searcher.fetching,
      fetchError = _useICD10Searcher.fetchError,
      onSelect = _useICD10Searcher.onSelect,
      onSearch = _useICD10Searcher.onSearch,
      onKeyPress = _useICD10Searcher.onKeyPress,
      downshiftReducer = _useICD10Searcher.downshiftReducer,
      stringify = _useICD10Searcher.stringify,
      _useICD10Searcher$dat = _useICD10Searcher.data,
      codes = _useICD10Searcher$dat.codes,
      results = _useICD10Searcher$dat.results,
      total = _useICD10Searcher$dat.total;

  return React.createElement("div", {
    className: classes.root
  }, React.createElement(OptimizedStatusCaption, {
    fetching: fetching,
    fetchError: fetchError,
    className: classes.statusCaption
  }), React.createElement(ICD10SearchInput, {
    codes: codes,
    results: results,
    total: total,
    fetching: fetching // @ts-ignore
    ,
    onSelect: onSelect // @ts-ignore
    ,
    onInputValueChange: onSearch,
    highlightedField: highlightedField,
    stringify: stringify,
    downshiftReducer: downshiftReducer,
    onKeyPress: onKeyPress
  }));
};

var areEqual = function areEqual(props, nextProps) {
  return props.highlightedField === nextProps.highlightedField;
};

var ICD10Searcher$1 = React.memo(ICD10Searcher, areEqual);

var useStyles$d = makeStyles(function (theme) {
  return {
    field: _defineProperty({
      '&:hover': {
        '& $closeIcon': {
          visibility: 'visible'
        }
      }
    }, theme.breakpoints.down('xs'), {
      height: 38
    }),
    input: _defineProperty({
      marginRight: 4,
      padding: '10px !important',
      border: "1px solid ".concat(theme.palette.borders.cool),
      marginBottom: 1,
      fontSize: '0.8rem',
      '&:hover': {
        border: "1px solid ".concat(theme.palette.thirdary.dark),
        background: '#fff',
        color: theme.palette.text.soft,
        '& $highlightedCell': {
          border: 'none !important'
        }
      }
    }, theme.breakpoints.down('xs'), {
      fontSize: '0.7rem',
      padding: 3
    }),
    selectedField: {
      borderBottom: '0 !important',
      '& input': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        color: theme.palette.text.normal,
        '&:hover': {
          border: "1px solid ".concat(theme.palette.thirdary.dark)
        }
      }
    },
    closeIcon: {
      transform: 'scale(1.6)',
      visibility: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.15s ease-out',
      '&:hover': {
        color: theme.palette.thirdary.dark,
        transform: 'scale(1.7)'
      }
    },
    highlightedCell: {}
  };
});

var ICD10RowRenderer = function ICD10RowRenderer(_ref) {
  var name = _ref.name,
      onDelete = _ref.onDelete,
      highlightField = _ref.highlightField,
      isHighlighted = _ref.isHighlighted;
  var classes = useStyles$d();
  var cells = ['code', 'description', 'comment'];
  return React.createElement(TableRow, {
    selected: isHighlighted,
    onClick: highlightField,
    classes: {
      root: classes.field,
      selected: classes.selectedField
    }
  }, cells.map(function (cellName, index) {
    return React.createElement(TableCell, {
      key: "".concat(cellName).concat(index)
    }, React.createElement(Field, {
      name: "".concat(name, ".").concat(cellName),
      render: function render(_ref2) {
        var input = _ref2.input,
            meta = _ref2.meta,
            rest = _objectWithoutProperties(_ref2, ["input", "meta"]);

        return React.createElement(Input, _extends({
          id: input.name,
          classes: {
            input: cx(classes.input, _defineProperty({}, classes.highlightedCell, isHighlighted))
          }
        }, input, rest, {
          autoFocus: cellName === 'code' && isHighlighted,
          disableUnderline: true
        }));
      }
    }));
  }), React.createElement(TableCell, null, React.createElement(IoIosCloseCircle, {
    onClick: onDelete,
    title: "Delete this row",
    className: classes.closeIcon
  })));
};

var EnhancedICD10RowRenderer = React.memo(ICD10RowRenderer, function (props, nextProps) {
  if (props.name !== nextProps.name || props.index !== nextProps.index || props.isHighlighted !== nextProps.isHighlighted) {
    return false;
  }

  return true;
});

var useStyles$e = makeStyles(function (theme) {
  return {
    root: {
      padding: '15px 0',
      '& hr': {
        height: '0px !important',
        border: '0 !important'
      }
    },
    inputArea: {},
    label: _defineProperty({
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: 10
    }, theme.breakpoints.down('xs'), {
      fontSize: '0.8rem'
    }),
    add: {
      margin: "".concat(theme.spacing(), "px 0")
    },
    addButton: {
      padding: 1,
      fontSize: '0.6rem'
    }
  };
});

var ICD10 = function ICD10(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? [] : _ref$fields;
  var classes = useStyles$e();

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      highlightedField = _React$useState2[0],
      setHighlightedField = _React$useState2[1];

  var highlightField = function highlightField(index) {
    return function () {
      return setHighlightedField(index);
    };
  };

  var onDelete = function onDelete(index) {
    return function () {
      return fields.remove(index);
    };
  };

  React.useEffect(function () {
    if (highlightedField !== fields.length - 1) {
      setHighlightedField(fields.length - 1);
    }
  }, [fields.length]);
  return React.createElement("div", {
    className: classes.root
  }, React.createElement(ICD10Searcher$1, {
    highlightedField: highlightedField,
    fields: fields
  }), React.createElement(Table, {
    padding: "checkbox",
    size: "small"
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null, fields.map(function (name, index) {
    return React.createElement(EnhancedICD10RowRenderer, {
      key: "row_renderer".concat(index),
      isHighlighted: highlightedField === index,
      highlightField: highlightField(index),
      name: name,
      index: index,
      onDelete: onDelete(index)
    });
  }))));
};

var Header = function Header() {
  return React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, React.createElement(Typography, {
    center: true
  }, "State of California "), React.createElement(Typography, null, "Division of Worker's Compensation"), React.createElement(Typography, {
    variant: "h6",
    fontWeight: 700
  }, "Primary Treating Physician's Progress Report (PR-2)"));
};

// Hook used to interact with many refs or values in one interface

var useCache = function useCache() {
  var initialCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cacheRef = React.useRef(initialCache);
  var cache = cacheRef.current;

  function cacheValue(key, value) {
    cache[key] = value;
  } // Utility to cache react elements on mount


  function onMountRef(key) {
    return function (e) {
      if (key) {
        // cacheValue(key, e)
        cache[key] = e;
      } else if (e.target && e.target.name) {
        // cacheValue(e.target.name, e)
        cache[e.target.name] = e;
      }
    };
  }

  return {
    cache: cache,
    cacheValue: cacheValue,
    onMountRef: onMountRef
  };
};

var reasons = {
  periodicReport: 'Periodic Report',
  changeInTreatmentPlan: 'Change in Treatment Plan',
  discharged: 'Discharged',
  changeInWorkStatus: 'Change in Work Status',
  referralOrConsultation: 'Need for Referral or Consultation',
  changeInPatientsCondition: "Change in Patient's Condition",
  surgeryOrHospitalization: 'Need for Surgery or Hospitalization',
  infoRequestedBy: 'Info Requested By',
  other: 'Other'
};
var reasonKeys = Object.keys(reasons);
var reasonsList = [reasonKeys.slice(0, 4), reasonKeys.slice(4, 7), reasonKeys.slice(7)];
// @ts-ignore
var useStyles$f = makeStyles(function (theme) {
  return {
    root: {},
    checkboxRoot: _defineProperty({
      color: '#333',
      transform: 'scale(0.9)',
      padding: 3
    }, theme.breakpoints.down('xs'), {
      marginLeft: 8
    }),
    checkboxLabel: _defineProperty({
      fontSize: '0.72rem',
      marginLeft: 0,
      marginRight: 11,
      userSelect: 'none'
    }, theme.breakpoints.down('xs'), {
      fontSize: '0.67rem'
    })
  };
});

var ReasonsForForm = function ReasonsForForm(_ref) {
  var input = _ref.input,
      _ref$withTextfields = _ref.withTextfields,
      withTextfields = _ref$withTextfields === void 0 ? [] : _ref$withTextfields;
  var classes = useStyles$f();

  var _useCache = useCache(),
      cache = _useCache.cache,
      onMountRef = _useCache.onMountRef;

  function updateOnBlur(key) {
    if (input && input.value) {
      if (cache[key]) {
        var nextValues = _objectSpread2({}, input.value);

        nextValues[key] = String(cache[key].value || '');
        input.onChange(nextValues);
      } else {
        console.warn("Warning: Tried to invoke input.onChange for textfield \"".concat(key, "\" inside updateOnBlur but it was not in the cache"));
      }
    }
  }

  var onChange = function onChange(key) {
    return function (e) {
      var checked = e.target.checked;

      if (input && input.value) {
        var nextValues = _objectSpread2({}, input.value);

        var node = cache[key]; // User is checking the box

        if (checked) {
          nextValues[key] = node ? node.value : '';

          if (withTextfields.includes(key)) {
            if (node) {
              nextValues[key] += String(cache[key].value || '');
            } else {
              nextValues[key] = '';
            }
          }
        } // User is unchecking the box
        else {
            if (key in nextValues) {
              delete nextValues[key];

              if (withTextfields.includes(key)) {
                if (node) {
                  node.value = '';
                  delete cache[key];
                }
              }
            }
          }

        input.onChange(nextValues);
      } else {
        console.warn('You tried to invoke onChange inside ReasonsForForm but input or input.value is not an object');
      }
    };
  };

  function onBlur(key) {
    return function () {
      updateOnBlur(key);
    };
  }

  function onKeyPress(key) {
    return function (e) {
      if (e.charCode === 13) {
        updateOnBlur(key);
      }
    };
  }

  return React.createElement(FormGroup, {
    className: classes.root,
    row: true
  }, reasonsList.map(function (list, index) {
    return React.createElement(Flex, {
      key: "reasonList".concat(index),
      xsBlock: true,
      flexGrow: 1,
      spaceAround: true
    }, list.map(function (key) {
      return React.createElement(Checkbox, {
        key: key,
        classes: {
          label: classes.checkboxLabel
        },
        classNames: {
          root: classes.checkboxRoot
        },
        label: reasons[key],
        checked: !!input && !!input.value && key in input.value,
        onChange: onChange(key),
        value: key,
        withTextField: withTextfields.includes(key) && {
          inputRef: onMountRef(key),
          onBlur: onBlur(key),
          onKeyPress: onKeyPress(key)
        }
      });
    }));
  }));
};

var useStyles$g = makeStyles(function (theme) {
  return {
    root: {},
    textFieldRoot: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: '100%'
    })
  };
});

var PatientInfo = function PatientInfo(_ref) {
  var name = _ref.name,
      genders = _ref.genders,
      props = _objectWithoutProperties(_ref, ["name", "genders"]);

  var classes = useStyles$g(props);

  var WrappedTextField = function WrappedTextField(props) {
    return React.createElement(FinalFormOutlinedTextField, _extends({
      classes: {
        root: classes.textFieldRoot
      }
    }, props));
  };

  return React.createElement(React.Fragment, null, React.createElement(Flex, null, React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".firstName"),
    label: "First Name",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".middleName"),
    label: "Middle Name",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".lastName"),
    label: "Last Name",
    fullWidth: true
  })), React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".sex"),
    wrapperProps: {
      marginRight: 3
    },
    selectProps: {
      "native": true
    },
    select: true,
    fullWidth: true
  }, ['Select Gender'].concat(_toConsumableArray(genders)).map(function (gender) {
    return React.createElement("option", {
      key: "gender_".concat(gender),
      value: gender
    }, gender);
  })), React.createElement(Field, {
    type: "date",
    component: WrappedTextField,
    name: "".concat(name, ".dob"),
    label: "Date of Birth",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".address"),
    label: "Address",
    fullWidth: true
  })), React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".occupation"),
    label: "Occupation",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".socialSecurity"),
    parse: parseSSN,
    label: "Social Security No.",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    component: WrappedTextField,
    name: "".concat(name, ".phone"),
    parse: parsePhone,
    label: "Phone",
    fullWidth: true
  })));
};

var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
var statesArrayObjects = [{
  name: 'Alabama',
  abbreviation: 'AL'
}, {
  name: 'Alaska',
  abbreviation: 'AK'
}, {
  name: 'American Samoa',
  abbreviation: 'AS'
}, {
  name: 'Arizona',
  abbreviation: 'AZ'
}, {
  name: 'Arkansas',
  abbreviation: 'AR'
}, {
  name: 'California',
  abbreviation: 'CA'
}, {
  name: 'Colorado',
  abbreviation: 'CO'
}, {
  name: 'Connecticut',
  abbreviation: 'CT'
}, {
  name: 'Delaware',
  abbreviation: 'DE'
}, {
  name: 'District Of Columbia',
  abbreviation: 'DC'
}, {
  name: 'Federated States Of Micronesia',
  abbreviation: 'FM'
}, {
  name: 'Florida',
  abbreviation: 'FL'
}, {
  name: 'Georgia',
  abbreviation: 'GA'
}, {
  name: 'Guam',
  abbreviation: 'GU'
}, {
  name: 'Hawaii',
  abbreviation: 'HI'
}, {
  name: 'Idaho',
  abbreviation: 'ID'
}, {
  name: 'Illinois',
  abbreviation: 'IL'
}, {
  name: 'Indiana',
  abbreviation: 'IN'
}, {
  name: 'Iowa',
  abbreviation: 'IA'
}, {
  name: 'Kansas',
  abbreviation: 'KS'
}, {
  name: 'Kentucky',
  abbreviation: 'KY'
}, {
  name: 'Louisiana',
  abbreviation: 'LA'
}, {
  name: 'Maine',
  abbreviation: 'ME'
}, {
  name: 'Marshall Islands',
  abbreviation: 'MH'
}, {
  name: 'Maryland',
  abbreviation: 'MD'
}, {
  name: 'Massachusetts',
  abbreviation: 'MA'
}, {
  name: 'Michigan',
  abbreviation: 'MI'
}, {
  name: 'Minnesota',
  abbreviation: 'MN'
}, {
  name: 'Mississippi',
  abbreviation: 'MS'
}, {
  name: 'Missouri',
  abbreviation: 'MO'
}, {
  name: 'Montana',
  abbreviation: 'MT'
}, {
  name: 'Nebraska',
  abbreviation: 'NE'
}, {
  name: 'Nevada',
  abbreviation: 'NV'
}, {
  name: 'New Hampshire',
  abbreviation: 'NH'
}, {
  name: 'New Jersey',
  abbreviation: 'NJ'
}, {
  name: 'New Mexico',
  abbreviation: 'NM'
}, {
  name: 'New York',
  abbreviation: 'NY'
}, {
  name: 'North Carolina',
  abbreviation: 'NC'
}, {
  name: 'North Dakota',
  abbreviation: 'ND'
}, {
  name: 'Northern Mariana Islands',
  abbreviation: 'MP'
}, {
  name: 'Ohio',
  abbreviation: 'OH'
}, {
  name: 'Oklahoma',
  abbreviation: 'OK'
}, {
  name: 'Oregon',
  abbreviation: 'OR'
}, {
  name: 'Palau',
  abbreviation: 'PW'
}, {
  name: 'Pennsylvania',
  abbreviation: 'PA'
}, {
  name: 'Puerto Rico',
  abbreviation: 'PR'
}, {
  name: 'Rhode Island',
  abbreviation: 'RI'
}, {
  name: 'South Carolina',
  abbreviation: 'SC'
}, {
  name: 'South Dakota',
  abbreviation: 'SD'
}, {
  name: 'Tennessee',
  abbreviation: 'TN'
}, {
  name: 'Texas',
  abbreviation: 'TX'
}, {
  name: 'Utah',
  abbreviation: 'UT'
}, {
  name: 'Vermont',
  abbreviation: 'VT'
}, {
  name: 'Virgin Islands',
  abbreviation: 'VI'
}, {
  name: 'Virginia',
  abbreviation: 'VA'
}, {
  name: 'Washington',
  abbreviation: 'WA'
}, {
  name: 'West Virginia',
  abbreviation: 'WV'
}, {
  name: 'Wisconsin',
  abbreviation: 'WI'
}, {
  name: 'Wyoming',
  abbreviation: 'WY'
}];
var statesArrayObjectsMapper = statesArrayObjects.reduce(function (acc, stateObj) {
  if (acc[stateObj.name] === undefined) {
    acc[stateObj.name] = stateObj;
  }

  return acc;
}, {});
var statesArrayObjectsMapperv2 = statesArrayObjects.reduce(function (acc, stateObj) {
  if (acc[stateObj.abbreviation] === undefined) {
    acc[stateObj.abbreviation] = stateObj;
  }

  return acc;
}, {}); // mimicing server response

var languages = [{
  code: 'en-US',
  english: 'English',
  translated: 'English'
}, {
  code: 'zh-CN',
  english: 'Chinese(Simplified)',
  translated: '中文简体'
}, {
  code: 'zh-TW',
  english: 'Chinese(Traditional)',
  translated: '中文繁体'
}, {
  code: 'es-ES',
  english: 'Spanish',
  translated: 'Español'
}];
var languagesList = languages.map(function (_ref) {
  var code = _ref.code;
  return code;
});
var languagesMapper = languages.reduce(function (acc, lang) {
  if (!acc[lang.code]) {
    acc[lang.code] = lang;
  }

  return acc;
}, {});

var useStyles$h = makeStyles(function (theme) {
  return {
    textFieldRoot: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: '100% !important'
    })
  };
});

var ClaimsAdministration = function ClaimsAdministration(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  var classes = useStyles$h(props);

  var WrappedTextField = function WrappedTextField(props) {
    return React.createElement(FinalFormOutlinedTextField, _extends({
      classes: {
        root: classes.textFieldRoot
      }
    }, props));
  };

  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    name: "".concat(name, ".name"),
    component: WrappedTextField,
    label: "Name",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".claimNumber"),
    component: WrappedTextField,
    label: "Claim Number",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".fax"),
    component: WrappedTextField,
    parse: parsePhone,
    label: "Fax",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".address"),
    component: WrappedTextField,
    label: "Address",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  })), React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    name: "".concat(name, ".city"),
    component: WrappedTextField,
    label: "City",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".zip"),
    component: WrappedTextField,
    parse: formatOnlyNumbers,
    label: "Zip",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".phone"),
    component: WrappedTextField,
    parse: parsePhone,
    label: "Phone",
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".state"),
    component: WrappedTextField,
    selectProps: {
      "native": true
    },
    select: true,
    fullWidth: true
  }, ['Select State'].concat(_toConsumableArray(states)).map(function (state, index) {
    return React.createElement("option", {
      key: "state".concat(index),
      value: state
    }, state);
  }))));
};

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$9.call(object, key);
}

var _baseHas = baseHas;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$e.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$b.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$f.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$c.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$3 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return _cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return _cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$3:
      return new Ctor;

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);

    case regexpTag$2:
      return _cloneRegExp(object);

    case setTag$3:
      return new Ctor;

    case symbolTag$2:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var mapTag$4 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$4;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

var isMap_1 = isMap;

/** `Object#toString` result references. */
var setTag$4 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$4;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$3 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] =
cloneableTags[numberTag$3] = cloneableTags[objectTag$3] =
cloneableTags[regexpTag$3] = cloneableTags[setTag$5] =
cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}

var cloneDeep_1 = cloneDeep;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

var set_1 = set;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : _baseUnset(object, path);
}

var unset_1 = unset;

var useObjectizedCheckboxes = function useObjectizedCheckboxes(_ref) {
  var input = _ref.input;

  var _useCache = useCache(),
      cache = _useCache.cache,
      onMountRef = _useCache.onMountRef;

  function updateOnBlur(key) {
    if (input && input.value) {
      if (has_1(cache, key)) {
        var inputEl = get_1(cache, key, null);
        var inputValues = cloneDeep_1(input.value);
        var nextValue = String(inputEl && inputEl.value || '');
        set_1(inputValues, key, nextValue);
        input.onChange(inputValues);
        if (inputEl) inputEl.value = nextValue;
      } else {
        console.warn("Warning: Tried  to call updateOnBlur but the key \"".concat(key, "\" it was not in the cache"));
      }
    } else {
      console.warn("Warning: Tried to call updateOnBlur with key \"".concat(key, "\" but input or input.value was null or undefined"));
    }
  }

  function onChange(key) {
    return function (e) {
      if (e && e.target) {
        var inputValues = cloneDeep_1(input.value);
        var checked = e.target.checked;
        var nextValue = '';

        if (inputValues) {
          var inputEl = get_1(cache, key, null);

          if (checked) {
            if (inputEl) nextValue = inputEl.value || '';
            set_1(inputValues, key, nextValue);
          } else {
            if (has_1(inputValues, key)) {
              var path = key.split('.');
              var indexLast = path.length - 1 || 0;
              var deleteKey = path[indexLast];
              var isDeleted = unset_1(inputValues, deleteKey);

              if (!isDeleted) {
                return console.warn("Tried to delete path \"".concat(key, "\" with delete key \"").concat(deleteKey, "\" but it was not found or an error occurred"));
              }
            }
          }

          if (inputEl) inputEl.value = nextValue;
          input.onChange(inputValues);
        }
      } else {
        console.warn('Could not invoke onChange because e.target is null or undefined');
      }
    };
  }

  function onBlur(key) {
    return function () {
      updateOnBlur(key);
    };
  }

  function onKeyPress(key) {
    return function (e) {
      if (e.charCode === 13) {
        updateOnBlur(key);
      }
    };
  }

  function getTextFieldProps(_ref2) {
    var _ref2$name = _ref2.name,
        name = _ref2$name === void 0 ? '' : _ref2$name,
        rest = _objectWithoutProperties(_ref2, ["name"]);

    return _objectSpread2({
      inputRef: onMountRef(name),
      onBlur: onBlur(name),
      onKeyPress: onKeyPress(name)
    }, rest);
  }

  return {
    nodes: cache,
    onBlur: onBlur,
    onChange: onChange,
    onKeyPress: onKeyPress,
    onMountRef: onMountRef,
    getTextFieldProps: getTextFieldProps
  };
};

// @ts-ignore
var useStyles$i = makeStyles(function (theme) {
  return {
    root: {},
    checkboxRoot: {
      color: '#333',
      transform: 'scale(0.9)',
      padding: 3
    },
    checkboxLabel: _defineProperty({
      fontSize: '0.72rem',
      marginLeft: 0,
      marginRight: 11,
      userSelect: 'none'
    }, theme.breakpoints.down('xs'), {
      marginRight: 0
    }),
    textField: {
      fontSize: '0.72rem !important'
    }
  };
});

var EnhancedTextField = function EnhancedTextField(props) {
  var classes = useStyles$i(props);
  return React.createElement(MuiTextField, _extends({
    margin: "dense"
  }, props, {
    classes: _objectSpread2({
      root: classes.textField
    }, props.classes)
  }));
};

var WorkStatusCheckboxes = function WorkStatusCheckboxes(_ref) {
  var _ref$input = _ref.input,
      input = _ref$input === void 0 ? {} : _ref$input,
      meta = _ref.meta,
      rest = _objectWithoutProperties(_ref, ["input", "meta"]);

  var classes = useStyles$i(rest);

  var _useObjectizedCheckbo = useObjectizedCheckboxes({
    input: input
  }),
      onChange = _useObjectizedCheckbo.onChange,
      getTextFieldProps = _useObjectizedCheckbo.getTextFieldProps;

  var checkboxProps = {
    classes: {
      label: classes.checkboxLabel
    },
    classNames: {
      root: classes.checkboxRoot
    }
  };
  return React.createElement(FormGroup, _extends({
    className: classes.root,
    row: true
  }, rest), React.createElement(Flex, {
    spaceBetween: true
  }, React.createElement(Checkbox, _extends({
    label: "Remain off-work until",
    value: input.value && get_1(input.value, "".concat(input.name, ".remainOffWorkUntil")),
    onChange: onChange('remainOffWorkUntil'),
    checked: !!input.value && has_1(input.value, 'remainOffWorkUntil')
  }, checkboxProps)), React.createElement(EnhancedTextField, getTextFieldProps({
    name: 'remainOffWorkUntil'
  }))), React.createElement("div", null, React.createElement(Checkbox, _extends({
    label: React.createElement(Flex, {
      xsBlock: true
    }, React.createElement(Flex, null, React.createElement("span", {
      style: {
        minWidth: 150
      }
    }, "Return to modified work on"), "\xA0", React.createElement(EnhancedTextField, getTextFieldProps({
      name: 'returnToModifiedWork.on'
    }))), "with the following limitations or restrictions:"),
    value: input.value && get_1(input.value, "".concat(input.name, ".returnToModifiedWork")),
    onChange: onChange('returnToModifiedWork'),
    checked: !!input.value && has_1(input.value, 'returnToModifiedWork')
  }, checkboxProps)), React.createElement(Typography, {
    variant: "body2"
  }, "(List all specific restrictions re: standing, sitting, bending, use of hands, etc.)"), React.createElement(EnhancedTextField, _extends({
    fullWidth: true
  }, getTextFieldProps({
    name: 'returnToModifiedWork.limitations'
  })))), React.createElement(Checkbox, _extends({
    label: React.createElement(Flex, {
      xsBlock: true
    }, React.createElement(Flex, null, React.createElement("span", {
      style: {
        minWidth: 120
      }
    }, "Return to full duty on"), React.createElement(EnhancedTextField, getTextFieldProps({
      name: 'returnToFullDuty.on'
    }))), "with no limitations or restrictions."),
    value: input.value && get_1(input.value, "".concat(input.name, ".returnToFullDuty")),
    onChange: onChange('returnToFullDuty'),
    checked: !!input.value && has_1(input.value, 'returnToFullDuty')
  }, checkboxProps)));
};

var useStyles$j = makeStyles(function (theme) {
  return {
    root: {},
    textFieldRoot: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: '100% !important'
    })
  };
});

var Label = function Label(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Typography, _extends({
    variant: "overline",
    fontWeight: 700
  }, rest), children);
};

var PR2 = function PR2(_ref2) {
  var _render = _ref2.render,
      initialValues = _ref2.initialValues,
      onSubmit = _ref2.onSubmit,
      _ref2$genders = _ref2.genders,
      genders = _ref2$genders === void 0 ? [] : _ref2$genders,
      _ref2$specialties = _ref2.specialties,
      specialties = _ref2$specialties === void 0 ? [] : _ref2$specialties,
      props = _objectWithoutProperties(_ref2, ["render", "initialValues", "onSubmit", "genders", "specialties"]);

  var classes = useStyles$j(undefined);
  var signatureRef = React.createRef();

  var TextField = function TextField(props) {
    return React.createElement(MuiTextField, _extends({
      className: classes.textFieldRoot,
      margin: "dense",
      variant: "outlined",
      fullWidth: true
    }, props));
  };

  var WrappedOutlinedTextField = function WrappedOutlinedTextField(props) {
    return React.createElement(FinalFormOutlinedTextField, _extends({
      className: classes.textFieldRoot
    }, props));
  }; // Extracted these fields outside since TS was giving a useless component prop error


  var workStatusForPatient = // @ts-ignore
  React.createElement(Field, {
    name: "workStatusForPatient",
    component: WorkStatusCheckboxes
  });
  var signatureCanvas = React.createElement(Field, {
    component: FinalFormSignatureCanvas,
    name: "signature",
    signatureRef: signatureRef
  });
  return React.createElement(Form, _extends({
    keepDirtyOnReinitialize: true,
    onSubmit: onSubmit,
    subscription: {
      submitting: true
    } // @ts-ignore
    ,
    mutators: arrayMutators,
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          submitting = _ref3.submitting,
          rest = _objectWithoutProperties(_ref3, ["handleSubmit", "submitting"]);

      return React.createElement("form", {
        onSubmit: handleSubmit,
        className: classes.root
      }, React.createElement(Header, null), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "body2"
      }, "Check the box(es) which indicate why you are submitting a report at this time. If the patient is \u201CPermanent and Stationary\u201D (i.e., has reached maximum medical improvement), do not use this form. You may use DWC Form PR-3 or IMC Form 81556."), React.createElement(Divider, {
        margin: "10px auto"
      }), React.createElement(Field, {
        name: "reasonsForForm" // @ts-ignore
        ,
        component: ReasonsForForm,
        withTextfields: ['infoRequestedBy', 'other']
      }), React.createElement(Divider, null), React.createElement(Label, null, "Patient:"), React.createElement(PatientInfo, {
        name: "patientInfo",
        genders: genders
      }), React.createElement("br", null), React.createElement(Label, null, "Claims Administration:"), React.createElement(ClaimsAdministration, {
        name: "claimsAdministration"
      }), React.createElement("br", null), React.createElement(Typography, {
        gutterBottom: true,
        paragraph: true,
        italic: true
      }, "The information below must be provided. You may use this form or you may substitute or append a narrative report."), React.createElement(Label, null, "Subjective Complaints:"), React.createElement(Field, {
        name: "subjectiveComplaints",
        component: FinalFormOutlinedTextField,
        rows: 5,
        rowsMax: 10,
        multiline: true,
        fullWidth: true
      }), React.createElement("br", null), React.createElement("br", null), React.createElement(Label, null, "Objective Findings:", React.createElement("br", null), React.createElement(Typography, {
        variant: "caption"
      }, "(Include significant physical examination, laboratory, imaging, or other diagnostic findings.)")), React.createElement(Field, {
        name: "objectiveFindings",
        component: WrappedOutlinedTextField,
        rows: 5,
        rowsMax: 10,
        multiline: true,
        fullWidth: true
      }), React.createElement("br", null), React.createElement("br", null), React.createElement(Label, null, "Diagnoses:"), React.createElement(FieldArray, {
        component: ICD10,
        name: "diagnoses"
      }), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "body1",
        gutterBottom: true,
        paragraph: true
      }, React.createElement("b", null, "Treatment Plan"), ": (Include treatment rendered to date. List methods, frequency and duration of planned treatment(s). Specify consultation/referral, surgery, and hospitalization.", ' ', React.createElement("strong", null, "Identify each physician and non-physician provider"), ". Specify type, frequency and duration of physical medicine services (e.g., physical therapy, manipulation, acupuncture). Use of CPT codes is encouraged. Have there been any ", React.createElement("strong", null, "changes"), " in treatment plan? If so, why?"), React.createElement(Field, {
        name: "treatmentPlan",
        component: FinalFormOutlinedTextField,
        rows: 5,
        rowsMax: 10,
        multiline: true,
        fullWidth: true
      }), React.createElement("br", null), React.createElement("br", null), React.createElement(Label, null, "Work Status:"), workStatusForPatient, React.createElement(Divider, null), React.createElement(Flex, {
        spaceBetween: true
      }, React.createElement(Typography, {
        variant: "caption"
      }, "Primary Treating Physician: (Original signature, do not stamp)"), React.createElement(Field, {
        name: "dateOfExam",
        type: "date",
        render: function render(_ref4) {
          var input = _ref4.input,
              meta = _ref4.meta,
              rest = _objectWithoutProperties(_ref4, ["input", "meta"]);

          return React.createElement(TextField, _extends({
            helperText: "Date of Exam",
            FormHelperTextProps: {
              style: {
                color: '#333'
              }
            }
          }, input, rest));
        }
      })), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "caption"
      }, "I declare under penalty of perjury that this report is true and correct to the best of my knowledge and that I have not violated Labor Code \xA7 139.3."), React.createElement("br", null), React.createElement("br", null), React.createElement(Flex, {
        xsBlock: true,
        spaceBetween: true
      }, React.createElement(Field, {
        label: "California License No.",
        name: "licenseNumber",
        component: WrappedOutlinedTextField,
        wrapperProps: {
          marginRight: 3
        },
        fullWidth: true
      }), React.createElement(Field, {
        label: "Phone",
        name: "phone",
        parse: parsePhone,
        component: WrappedOutlinedTextField,
        fullWidth: true
      })), React.createElement(Flex, {
        xsBlock: true,
        spaceBetween: true
      }, React.createElement(Field, {
        type: "date",
        label: "Executed At",
        name: "executedAt",
        component: WrappedOutlinedTextField,
        wrapperProps: {
          marginRight: 3
        },
        fullWidth: true
      }), React.createElement(Field, {
        type: "date",
        name: "date",
        label: "Date",
        fullWidth: true,
        render: function render(_ref5) {
          var input = _ref5.input,
              meta = _ref5.meta,
              rest = _objectWithoutProperties(_ref5, ["input", "meta"]);

          return React.createElement(WrappedOutlinedTextField, _extends({}, input, rest, {
            value: format(new Date(), 'yyyy-MM-dd')
          }));
        }
      })), React.createElement(Flex, {
        xsBlock: true,
        spaceBetween: true
      }, React.createElement(Field, {
        label: "Name",
        name: "name",
        component: WrappedOutlinedTextField,
        wrapperProps: {
          marginRight: 3
        },
        fullWidth: true
      }), React.createElement(Field, {
        name: "specialty",
        component: WrappedOutlinedTextField,
        selectProps: {
          "native": true
        },
        select: true,
        fullWidth: true
      }, ['Select Specialty'].concat(_toConsumableArray(specialties)).map(function (specialty) {
        return React.createElement("option", {
          key: "specialty_".concat(specialty),
          value: specialty
        }, specialty);
      }))), React.createElement(Flex, {
        xsBlock: true,
        spaceBetween: true
      }, React.createElement(Field, {
        label: "Address",
        name: "address",
        component: WrappedOutlinedTextField,
        fullWidth: true
      })), React.createElement(Divider, null), React.createElement(Flex, null, React.createElement(Typography, {
        variant: "body2"
      }, "Next report due no later than: \xA0\xA0"), React.createElement(Field, {
        name: "nextReportDueNoLaterThan",
        type: "date",
        render: function render(_ref6) {
          var input = _ref6.input,
              meta = _ref6.meta,
              rest = _objectWithoutProperties(_ref6, ["input", "meta"]);

          return React.createElement(MuiTextField, _extends({}, input, rest));
        }
      })), React.createElement(Divider, null), signatureCanvas, _render && _render(_objectSpread2({
        submitting: submitting
      }, rest)));
    },
    initialValues: _objectSpread2({
      reasonsForForm: {// periodicReport: '',
        // changeInTreatmentPlan: '',
        // discharged: '',
        // changeInWorkStatus: '',
        // referralOrConsultation: '',
        // infoRequestedBy: '',
        // changeInPatientsCondition: '',
        // surgeryOrHospitalization: '',
        // other: '',
      },
      // patientInfo: {
      //   lastName: '',
      //   firstName: '',
      //   middleName: '',
      //   sex: '',
      //   dob: '',
      //   address: '',
      //   city: '',
      //   state: '',
      //   zip: '',
      //   occupation: '',
      //   socialSecurity: '',
      //   phone: '',
      // },
      // claimsAdministration: {
      //   name: '',
      //   claimNumber: '',
      //   address: '',
      //   city: '',
      //   state: '',
      //   zip: '',
      //   phone: '',
      //   fax: '',
      // },
      // subjectiveComplaints: '',
      // objectiveFindings: '',
      // diagnoses: [
      // {
      //   diagnose: '',
      //   icd9: '',
      // },
      // {
      //   diagnose: '',
      //   icd9: '',
      // },
      // {
      //   diagnose: '',
      //   icd9: '',
      // },
      // ],
      // treatmentPlan: '',
      workStatusForPatient: {// remainOffWorkUntil: '',
        // returnToModifiedWork: {
        //   on: '',
        //   limitations: '',
        // },
        // returnToFullDuty: {
        //   on: '',
        // },
      }
    }, initialValues)
  }, props));
};

var RFA_Header = function RFA_Header() {
  return React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, React.createElement(Typography, {
    center: true
  }, "State of California, Division of Worker's Compensation"), React.createElement(Typography, {
    variant: "h6",
    fontWeight: 700
  }, "REQUEST FOR AUTHORIZATION"), React.createElement(Typography, {
    variant: "caption",
    fontWeight: 700
  }, "DWC Form RFA"));
};

var RFA_Subheader = function RFA_Subheader() {
  return React.createElement(Typography, {
    variant: "subtitle2",
    style: {
      padding: '15px 0'
    }
  }, "Attach the Doctor\u2019s First Report of Occupational Injury or Illness, Form DLSR 5021, a Treating Physician\u2019s Progress Report, DWC Form PR-2, or equivalent narrative report substantiating the requested treatment.", ' ');
};

var RFA_Employee = function RFA_Employee(_ref) {
  var name = _ref.name,
      WrappedOutlinedTextField = _ref.component;
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    spaceBetween: true
  }, React.createElement(Field, {
    label: "First Name",
    name: "".concat(name, ".firstName"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Middle Name",
    name: "".concat(name, ".middleName"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Last Name",
    name: "".concat(name, ".lastName"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    type: "date",
    label: "Date of Injury",
    name: "".concat(name, ".dateOfInjury"),
    component: FinalFormOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    type: "date",
    label: "Date of Birth",
    name: "".concat(name, ".dob"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, {
    spaceBetween: true
  }, React.createElement(Field, {
    label: "Claim Number",
    name: "".concat(name, ".claimNumber"),
    component: FinalFormOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Employer",
    name: "".concat(name, ".employer"),
    component: FinalFormOutlinedTextField,
    fullWidth: true
  })));
};

var RFA_Physician = function RFA_Physician(_ref) {
  var name = _ref.name,
      WrappedOutlinedTextField = _ref.component,
      _ref$specialties = _ref.specialties,
      specialties = _ref$specialties === void 0 ? [] : _ref$specialties;
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    label: "Name",
    name: "".concat(name, ".name"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Practice Name",
    name: "".concat(name, ".practiceName"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Contact Name",
    name: "".concat(name, ".contactName"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, {
    spaceBetween: true
  }, React.createElement(Field, {
    label: "Address",
    name: "".concat(name, ".address"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "City",
    name: "".concat(name, ".city"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".state"),
    component: WrappedOutlinedTextField,
    selectProps: {
      SelectProps: {
        "native": true
      }
    },
    select: true,
    fullWidth: true
  }, ['Select State'].concat(_toConsumableArray(states)).map(function (state) {
    return React.createElement("option", {
      key: "select_".concat(state),
      value: state
    }, state);
  }))), React.createElement(Flex, {
    spaceBetween: true
  }, React.createElement(Field, {
    label: "Zip Code",
    name: "".concat(name, ".zip"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Phone",
    name: "".concat(name, ".phone"),
    parse: parsePhone,
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Fax",
    name: "".concat(name, ".fax"),
    parse: parsePhone,
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, {
    spaceBetween: true
  }, React.createElement(Field, {
    name: "".concat(name, ".specialty"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    selectProps: {
      SelectProps: {
        "native": true
      }
    },
    select: true,
    fullWidth: true
  }, ['Select Specialty'].concat(_toConsumableArray(specialties)).map(function (specialty) {
    return React.createElement("option", {
      key: "select_".concat(specialty),
      value: specialty
    }, specialty);
  })), React.createElement(Field, {
    format: formatOnlyNumbers,
    label: "NPI",
    name: "".concat(name, ".NPI"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Field, {
    type: "email",
    label: "Email",
    name: "".concat(name, ".email"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  }));
};

var RFA_ClaimsAdministrator = function RFA_ClaimsAdministrator(_ref) {
  var name = _ref.name,
      WrappedOutlinedTextField = _ref.component;
  return React.createElement(React.Fragment, null, React.createElement(Flex, null, React.createElement(Field, {
    label: "Company Name",
    name: "".concat(name, ".companyName"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Contact Name",
    name: "".concat(name, ".contactName"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, null, React.createElement(Field, {
    label: "Address",
    name: "".concat(name, ".address"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "City",
    name: "".concat(name, ".city"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    name: "".concat(name, ".state"),
    component: WrappedOutlinedTextField,
    selectProps: {
      SelectProps: {
        "native": true
      }
    },
    select: true,
    fullWidth: true
  }, ['Select State'].concat(_toConsumableArray(states)).map(function (state) {
    return React.createElement("option", {
      key: "select_".concat(state),
      value: state
    }, state);
  }))), React.createElement(Flex, null, React.createElement(Field, {
    label: "Zip Code",
    name: "".concat(name, ".zip"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Phone",
    name: "".concat(name, ".phone"),
    parse: parsePhone,
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Fax",
    parse: parsePhone,
    name: "".concat(name, ".fax"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Field, {
    type: "email",
    label: "Email",
    name: "".concat(name, ".email"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  }));
};

var RFA_UROResponse = function RFA_UROResponse(_ref) {
  var name = _ref.name,
      WrappedOutlinedTextField = _ref.textfield,
      WrappedCheckbox = _ref.checkbox,
      signatureRef = _ref.signatureRef;
  return React.createElement(React.Fragment, null, React.createElement(Field, {
    component: WrappedCheckbox,
    type: "checkbox",
    label: "Approved",
    name: "uroResponse.approved"
  }), React.createElement(Field, {
    component: WrappedCheckbox,
    type: "checkbox",
    label: "Denied or Modified",
    name: "uroResponse.deniedOrModified"
  }), React.createElement(Field, {
    component: WrappedCheckbox,
    type: "checkbox",
    label: "Delay (See separate notification of delay)",
    name: "uroResponse.delay"
  }), React.createElement(Field, {
    component: WrappedCheckbox,
    type: "checkbox",
    label: "Requested treatment has been previously denied",
    name: "uroResponse.treatmentPreviouslyDenied"
  }), React.createElement(Field, {
    component: WrappedCheckbox,
    type: "checkbox",
    label: "Liability for treatment is disputed (See separate letter)",
    name: "uroResponse.liabilityForTreatmentDisputed"
  }), React.createElement("br", null), React.createElement(Flex, {
    xsBlock: true
  }, React.createElement(Field, {
    label: "Authorization Number (if assigned)",
    name: "".concat(name, ".authorizationNumber"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Authorized Agent Name",
    name: "".concat(name, ".authorizedAgentName"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, null, React.createElement(Field, {
    label: "Phone",
    parse: parsePhone,
    name: "".concat(name, ".phone"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    label: "Fax",
    parse: parsePhone,
    name: "".concat(name, ".fax"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Flex, null, React.createElement(Field, {
    type: "date",
    label: "Date",
    name: "".concat(name, ".date"),
    component: WrappedOutlinedTextField,
    wrapperProps: {
      marginRight: 3
    },
    fullWidth: true
  }), React.createElement(Field, {
    type: "email",
    label: "Email",
    name: "".concat(name, ".email"),
    component: WrappedOutlinedTextField,
    fullWidth: true
  })), React.createElement(Field // @ts-ignore
  , {
    component: FinalFormSignatureCanvas,
    name: "".concat(name, ".signed"),
    signatureLabel: "Requesting Physicians Signature",
    signatureRef: signatureRef
  }), React.createElement("br", null), React.createElement(Field, {
    label: "Comments",
    name: "".concat(name, ".comments"),
    component: WrappedOutlinedTextField,
    rows: 4,
    rowsMax: 5,
    multiline: true,
    fullWidth: true
  }));
};

// @ts-ignore
var useStyles$k = makeStyles(function (theme) {
  return {
    root: {
      overflowX: 'hidden'
    },
    checkboxRoot: {
      color: '#333',
      transform: 'scale(0.9)',
      padding: 0,
      marginLeft: 12
    },
    checkboxLabel: _defineProperty({
      fontSize: '0.72rem',
      marginLeft: 0,
      marginRight: 11,
      userSelect: 'none'
    }, theme.breakpoints.down('xs'), {
      fontSize: '0.67rem'
    })
  };
});
var focusOnError = createDecorator();

var DWC_RFA = function DWC_RFA(_ref) {
  var _render = _ref.render,
      _ref$initialValues = _ref.initialValues,
      initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues,
      onSubmit = _ref.onSubmit,
      _ref$specialties = _ref.specialties,
      specialties = _ref$specialties === void 0 ? [] : _ref$specialties,
      props = _objectWithoutProperties(_ref, ["render", "initialValues", "onSubmit", "specialties"]);

  var signatureRef = React.useRef();
  var uroSignatureRef = React.useRef();
  var classes = useStyles$k(props);

  var WrappedOutlinedTextField = function WrappedOutlinedTextField(args) {
    return React.createElement(FinalFormOutlinedTextField, _extends({
      classes: {
        root: classes.textFieldRoot
      }
    }, args));
  };

  var WrappedCheckbox = function WrappedCheckbox(_ref2) {
    var input = _ref2.input,
        meta = _ref2.meta,
        rest = _objectWithoutProperties(_ref2, ["input", "meta"]);

    return React.createElement(Checkbox, _extends({
      classes: {
        label: classes.checkboxLabel
      },
      classNames: {
        root: classes.checkboxRoot
      }
    }, input, rest));
  };

  var todaysDate = format(new Date(), 'yyyy-MM-dd');
  return React.createElement(Form, {
    keepDirtyOnReinitialize: true,
    onSubmit: onSubmit,
    subscription: {
      submitting: true
    },
    decorators: [focusOnError],
    initialValues: _objectSpread2({}, initialValues, {
      physicianSignature: _objectSpread2({
        date: todaysDate
      }, initialValues.physicianSignature)
    }),
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          submitting = _ref3.submitting,
          rest = _objectWithoutProperties(_ref3, ["handleSubmit", "submitting"]);

      return React.createElement("form", {
        onSubmit: handleSubmit,
        className: classes.root
      }, React.createElement(RFA_Header, null), React.createElement(RFA_Subheader, null), React.createElement(Divider, null), React.createElement(Field, {
        component: WrappedCheckbox,
        type: "checkbox",
        label: "New Request",
        name: "newRequest"
      }), React.createElement(Field, {
        component: WrappedCheckbox,
        type: "checkbox",
        label: "Expedited Review: Check box if employee faces an imminent and serious threat to his or her health",
        name: "expeditedReview"
      }), React.createElement(Field, {
        component: WrappedCheckbox,
        type: "checkbox",
        label: " Check box if request is a written confirmation of a prior oral request",
        name: "confirmationPriorOralRequest"
      }), React.createElement(Field, {
        component: WrappedCheckbox,
        type: "checkbox",
        label: "Resubmission \u2013 Change in Material Facts",
        name: "resubmission"
      }), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "h6",
        gutterBottom: true,
        paragraph: true
      }, "Employee Information"), React.createElement(RFA_Employee, {
        name: "employee",
        component: WrappedOutlinedTextField
      }), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "h6",
        gutterBottom: true,
        paragraph: true
      }, "Requesting Physician Information"), React.createElement(RFA_Physician, {
        name: "physician",
        component: WrappedOutlinedTextField,
        specialties: specialties
      }), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "h6",
        gutterBottom: true,
        paragraph: true
      }, "Claims Administrator Information"), React.createElement(RFA_ClaimsAdministrator, {
        name: "claimsAdministrator",
        component: WrappedOutlinedTextField
      }), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "h6",
        gutterBottom: true,
        paragraph: true
      }, "Requested Treatment"), React.createElement(Typography, {
        variant: "subtitle2",
        gutterBottom: true,
        paragraph: true
      }, "List each specific requested medical services, goods, or items in the below space or indicate the specific page number(s) of the attached medical report on which the requested treatment can be found. Up to five (5) procedures may be entered."), React.createElement(Field // @ts-ignore
      , {
        component: FinalFormSignatureCanvas,
        name: "physicianSignature.signed",
        signatureLabel: "Requesting Physician Signature",
        signatureRef: signatureRef
      }), React.createElement("br", null), React.createElement(Field, {
        name: "physicianSignature.date",
        render: function render(_ref4) {
          var input = _ref4.input;
          return React.createElement(WrappedOutlinedTextField, {
            label: "Date",
            value: format(new Date(input.value), 'MM-dd-yyyy'),
            disabled: true
          });
        }
      }), React.createElement(Divider, null), React.createElement(Typography, {
        variant: "h6",
        gutterBottom: true,
        paragraph: true
      }, "Claims Administrator/Utilization Review Organization (URO) Response"), React.createElement(RFA_UROResponse, {
        name: "uroResponse",
        textfield: WrappedOutlinedTextField,
        checkbox: WrappedCheckbox,
        signatureRef: uroSignatureRef
      }), _render && _render(_objectSpread2({
        submitting: submitting
      }, rest)));
    }
  });
};

export { DWC_PR1, PR2 as DWC_PR2, DWC_RFA };
//# sourceMappingURL=index.es.js.map