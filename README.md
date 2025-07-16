
# 🧾 Transaction Validator App

A simple React-based app to validate Ethereum transactions using the [Etherscan API](https://etherscan.io/apis). This tool allows users to check the status, sender, receiver, value, and gas limit of a transaction on Ethereum **Mainnet** or **Sepolia Testnet**.

![App Preview](https://via.placeholder.com/800x400.png?text=Transaction+Validator+App+Preview)

---

## 🚀 Features

- Validate Ethereum transaction hashes
- Supports **Mainnet** and **Sepolia Testnet**
- Displays transaction:
  - Status (Success / Failed)
  - From and To address
  - Value in ETH
  - Gas Limit
- Responsive and mobile-friendly UI (TailwindCSS)
- Error handling and loading state included

---

## 🧰 Tech Stack

- React
- Axios
- Tailwind CSS
- Etherscan API

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tx-validator-app.git
cd tx-validator-app
```

### 2. 🛠 Install Dependencies

```bash
npm install
```

### T3. Set Up Your API Key
Create a .env file in the root directory and add your Etherscan API key:

```bash
REACT_APP_ETHERSCAN_API_KEY=your_key_here
```
Or replace YourEtherscanAPIKey in App.js if you want to hardcode (not recommended for production).

### 4. Run the App
```bash
npm start
The app will run on http://localhost:3000
```

### 📁 File Structure
```bash
src/
├── App.js
├── components/
│   └── TxValidatorForm.js
├── index.js
└── ...

```
### 🛠 Future Improvements

Support other chains (BNB Smart Chain, Polygon, etc.)
Add confirmation count
Add dark mode
Deploy to Netlify or Vercel

### 🧑‍💻 Author

Developed by Chinny G.