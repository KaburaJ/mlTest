import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [prediction, setPrediction] = useState(null);
    const [inputData, setInputData] = useState({ N: 83, P: 45, K: 60, temperature: 128, humidity: 118.3, pH: 7.0, rainfall: 150.9 });

    const handlePredict = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', { features: Object.values(inputData) });
            setPrediction(response.data.prediction[0]);
        } catch (error) {
            console.error('Error predicting:', error);
        }
    };

    return (
        <div>
            <button onClick={handlePredict}>Predict</button>
            {prediction !== null && <p>Prediction: {prediction}</p>}
        </div>
    );
};

export default App;
