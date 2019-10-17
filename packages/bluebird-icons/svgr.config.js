const prettierConfig = require('@eigi/prettier-config');
const DEFAULT_STROKE_FILL_COLOR = '#5C5C5C'; // case sensitive

module.exports = {
  // Replace SVG "width" and "height" value by "1em" in order to make SVG size inherits from text size.
  icon: true,
  // use prettier config from @eigi standards
  prettierConfig: prettierConfig,
  // svgoConfig
  replaceAttrValues: {
    // remap provided stroke and fill colors to currentColor
    [DEFAULT_STROKE_FILL_COLOR]: 'currentColor',
  },
};
