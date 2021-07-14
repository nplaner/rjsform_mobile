import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Form from "@rjsf/core";

const schema = {
  title: "Data Surge LLC Employee Form",
  type: "object",
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'number'
    },
    role: {
      type: 'string'
    },
    tasksDone: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string' }
        }
      }
    }
  }
};
// const ArrayFieldTemplate = (props) => {
//   return (
//     <div>
//       {props.items.map(element => element.children)}
//       {props.canAdd && <button type="button" onClick={props.onAddClick}>Add new task</button>}
//     </div>
//   );
// }

const App = () => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  }, [lat, lon])

  return (
    <View>
      <Form 
      schema={schema}
      // ArrayFieldTemplate={ArrayFieldTemplate}
      onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
      />
      <Text>Current longitude and latitude: {lon}, {lat}</Text>
    </View>
  );
}
export default App;