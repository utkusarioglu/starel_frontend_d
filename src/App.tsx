import React, {useState} from 'react';
import { Text } from "@fluentui/react/lib/Text";

function App() {

  const [serverText, setServerText] = useState("Loading...");

  fetch(`${window.location.origin}:3000/api`)
  // fetch(`/api`)
  .then((data) => {
    // console.log(data)
    return data.json()
  })
  .then((json) => {
    // console.log(json);
    setServerText(json.content)
  })

  return (
    <div className="App">
      <Text>{serverText}</Text>
    </div>
  );
}

export default App;
