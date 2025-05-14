// App.jsx
import React from "react";
import Form from "./Comeponents/From";
import CardContainer from "./Comeponents/Cardcontainer";

const App = () => {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-full mx-auto space-y-6">
        <Form />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
