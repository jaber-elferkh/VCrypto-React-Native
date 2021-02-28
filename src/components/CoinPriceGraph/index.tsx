import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import { LineChart } from 'react-native-chart-kit';

interface CoinProceGraphProps {
  dataString: string;
}

const CoinPriceGraph = ({ dataString }: CoinProceGraphProps) => {
  const data = JSON.parse(dataString);

  return (
    <View style={styles.root}>
      <LineChart
        data={{
          labels: ['-7d', '-6d', '-5d', '-4d', '-3d', '-2d', '-1d', 'now'],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withInnerLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(18, 85, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '1',
            // strokeWidth: '1',
            stroke: '#fafafa',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CoinPriceGraph;
