import React from 'react';
import { View, Text } from 'react-native';

interface PercentageChangeProps {
  value: number;
  style?: object;
}

const PercentageChange = ({ value, style = {} }: PercentageChangeProps) => {
  return (
    <View>
      <Text style={[style, { color: value > 0 ? 'green' : 'red' }]}>
        {value > 0 && '+'} {value}%
      </Text>
    </View>
  );
};

export default PercentageChange;
