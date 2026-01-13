const invokeLambdaFunction = async (input) => {
    const lambdaApiUrl = "https://wzte4vlvfg.execute-api.ap-southeast-1.amazonaws.com/lex-stage/api"; // Replace with your API Gateway endpoint
  
    const requestBody = {
      user_message:input, // Example user ID (you can replace this dynamically)
    };
    console.log(JSON.stringify(requestBody));
    try {
      const response = await fetch(lambdaApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json(); // Return the parsed response
    } catch (error) {
      console.error("Error invoking Lambda function:", error);
      throw error; // Propagate the error
    }
  };

  export default invokeLambdaFunction;
  