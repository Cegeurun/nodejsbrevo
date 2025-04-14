# Node.js Brevo API Integration 🚀

Welcome to the Node.js Brevo API Integration project! This project demonstrates how to integrate the Brevo API into your Node.js application for seamless communication and data management. 

## Table of Contents 📚
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features ✨
- Send transactional emails 📧
- Manage contacts and lists 📇
- Track email statistics 📊
- Easy integration with existing Node.js applications ⚙️

## Installation 🛠️

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/brevo-api-integration.git
cd brevo-api-integration
npm install
```

## Usage 💻

To use the Brevo API, you need to set up your API key. Create a .env file in the root directory and add your Brevo API key:

```
BREVO_API_KEY=your_brevo_api_key
```

Example: Sending a Transactional Email
Here's a simple example of how to send a transactional email using the Brevo API:

```
const brevo = require('brevo-api'); // Import the Brevo API library
require('dotenv').config(); // Load environment variables

const apiKey = process.env.BREVO_API_KEY;
const client = brevo.ApiClient.instance;
client.authentications['api-key'].apiKey = apiKey;

const api = new brevo.TransactionalEmailsApi();

const sendEmail = async () => {
    const emailData = {
        sender: { email: 'your_email@example.com' },
        to: [{ email: 'recipient@example.com' }],
        subject: 'Hello from Brevo! 🌟',
        htmlContent: '<html><body><h1>Welcome!</h1><p>This is a test email.</p></body></html>',
    };

    try {
        const response = await api.sendTransacEmail(emailData);
        console.log('Email sent successfully!', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

sendEmail();
```

## API Endpoints 📡

* Send Transactional Email: POST /sendTransacEmail
* Create Contact: POST /contacts
* Get Email Statistics: GET /emailStatistics

Refer to the Brevo API Documentation for more details on available endpoints and their usage.

## Contributing 🤝

We welcome contributions! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License 📄

This project is licensed under the MIT License. See the LICENSE file for details.

<!-- Always document your changes, pull-request, bugfix, updates, patch notes for this final project. Always use this "🧊 Flight Booking" for commiting message for "pushing code" or "Pull-request"   -->
# 📫 Changelogs 
Chronological list of updates, bug fixes, new features, and other modifications for our Pharmaceutical Supply Chain Management.

## 💻 [1.0.0] - 2025-04-14  
### New Patch Notes
- ✨ Update

## [1.0.1] - 2025-04-15   
### Added  
- ✨ Add README.md
- ✨ Create documentation
- ✨ Add Integration
- ✨ Add API Endpoints
- ✨ Add Changelogs

## [1.0.2] - 2025-04-TBA   
### Added  
- ✨ Coming Soon
- ✨ Coming Soon
- ✨ Coming Soon

### 🧊 NodeJsBrevo


<!-- Introduction Pannel button link, it will redirect to the top -->

#### [Back to Table of Content](#-introduction)

<!-- End point line insert Thanks for visiting enjoy your day, feel free to modify this  -->
---

<p align="center">
<img src="https://readme-typing-svg.demolab.com/?lines=Thanks+For+Visiting+Enjoy+Your+Day+~!;" alt="mystreak"/>
</p>

<!-- Genshin Impact -->
<div align="center">
<img src="https://media.giphy.com/media/BqjYZq0yMVRYvyCfgL/giphy.gif?cid=ecf05e476fpqi63k6pmpvgbhklal1pw4ewurwhz1gezg1ag0&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="300">
</div>

<!-- End point line insert Comeback again next time, feel free to modify this  -->
<p align="center">
<img src="https://readme-typing-svg.demolab.com/?lines=💎💎Come+Back+Again+next+time💎💎" alt="mystreak"/>
</p>

</p>
    
<br>
<!-- End point insert background effect line of sight color red -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="1000">
