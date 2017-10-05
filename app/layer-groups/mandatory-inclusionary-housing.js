import { lineStyle, fillStyle } from '../helpers/polygon-layer-styles';

const legendColor = 'rgba(82, 22, 124, 1)';

export default {
  id: 'mandatory-inclusionary-housing',
  title: 'Mandatory Inclusionary Housing',
  visible: false,
  legendIcon: 'polygon',
  legendColor,
  layers: [
    {
      layer: lineStyle('mandatory-inclusionary-housing-line', 'supporting-zoning', 'mandatory-inclusionary-housing', legendColor),
    },

    {
      layer: fillStyle('mandatory-inclusionary-housing-fill', 'supporting-zoning', 'mandatory-inclusionary-housing', legendColor),
      highlightable: true,
      tooltipTemplate: '{{projectnam}} - {{mih_option}}',
    },
  ],
};
