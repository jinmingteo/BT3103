import React from "react";
import * as V from "victory";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryStack
} from "victory";
import { range } from "react-math";
import AppFrame from "./AppFrame";
import { compose } from "redux";
import { connect } from "react-redux";
const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 }
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 }
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 }
];

class VictoryComp extends React.Component {
  render() {
    return (
      <div>
        <AppFrame>
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
            <VictoryStack>
              <VictoryBar
                data={this.props.charts.Victory.data2012}
                x="quarter"
                y="earnings"
              />
              <VictoryBar
                data={this.props.charts.Victory.data2013}
                x="quarter"
                y="earnings"
              />
              <VictoryBar
                data={this.props.charts.Victory.data2014}
                x="quarter"
                y="earnings"
              />
              <VictoryBar
                data={this.props.charts.Victory.data2015}
                x="quarter"
                y="earnings"
              />
            </VictoryStack>
          </VictoryChart>
        </AppFrame>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { charts: state.val };
};

const mapDispatchToProps = dispatch => {};

const Victory = connect(mapStateToProps)(VictoryComp);

export default Victory;
