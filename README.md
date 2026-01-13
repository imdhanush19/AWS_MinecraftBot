# AWS_MinecraftBot

This project demonstrates a Minecraft bot integrated with AWS cloud services to enable conversational interaction and automation. The system uses AWS managed services for backend processing and a Node.js-based frontend, along with a Java Spigot plugin for Minecraft integration.

The bot enables users to interact with Minecraft through cloud-powered intelligence using AWS services such as:

->Amazon Lex – Natural language chatbot interface
->AWS Lambda – Backend logic and request handling
->Amazon EC2 – Hosting and processing
->AWS Amplify – Frontend deployment
->Amazon SNS – Notifications and messaging
->Node.js – Frontend and Lambda invocation
->Java (Spigot Plugin) – Minecraft server integration

Most of the processing and configurations were done directly inside AWS services, so only the relevant frontend and integration files are available in this repository.

- app.js – Contains frontend logic and AWS Lambda invocation code.
- lexapi.js – Handles Amazon Lex API integration and chatbot communication.
- CSS files – Responsible for UI styling and layout.


Note: Since this is an AWS-based project, much of the backend logic exists inside AWS services (Lambda, Lex configuration, SNS, EC2 setup). These configurations are not available as source code in this repository.

