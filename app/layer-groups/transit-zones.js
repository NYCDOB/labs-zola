import { lineStyle, fillStyle } from '../helpers/polygon-layer-styles';

const legendColor = 'purple';

export default {
  id: 'transit-zones',
  title: 'Transit Zones',
  visible: false,
  legendIcon: 'polygon',
  legendColor,
  titleTooltip: 'Areas where parking requirements are eliminated or reduced for affordable and senior housing units',
  layers: [
    {
      layer: lineStyle('transit-zones-line', 'supporting-zoning', 'transit-zones', legendColor),
    },
    {
      layer: fillStyle('transit-zones-fill', 'supporting-zoning', 'transit-zones', legendColor),
      highlightable: true,
      tooltipTemplate: 'Transit Zone',
    },
  ],
};
