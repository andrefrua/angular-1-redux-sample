
import * as _ from 'lodash';

export const createCombinedSelector = (...args) => {
  var cachedParams = [];
  var cachedResult;
  var fn = args.pop();
  return ($$) => {
    var params = _.map(args, (arg) => _.isFunction(arg) ? arg.apply(null, [$$]) : arg);
    if (cachedResult && !_.some(cachedParams, (param, index) => param !== params[index])) {
      return cachedResult;
    }
    cachedParams = _.concat([], params);
    return cachedResult = fn.apply(null, params);
  };
};

export const createParametricSelectorGenerator = (fn) => {
  var cachedSelectors = {};
  var l = () => Object.keys(cachedSelectors);
  var d = (key) => delete cachedSelectors[key];
  var c = () => cachedSelectors = {};

  if (!_.isFunction(fn)) { return null; }

  var f = (param) => {
    if (_.isNil(param)) { return null; }
    if (!cachedSelectors[param]) {
      cachedSelectors[param] = fn.apply(null, [param]) || _.identity;
      cachedSelectors[param].$cache = { key: param, delete: () => d(param) };
    }

    return cachedSelectors[param];
  };
  f.$cache = { list: l, delete: d, clear: c };
  return f;
};
