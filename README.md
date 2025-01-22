# Organ Donation Registry

## Overview
The **Organ Donation Registry** is a blockchain-based platform designed to facilitate transparent and secure organ donation processes. By leveraging the immutability and decentralization of blockchain technology, the platform ensures trust, accountability, and streamlined operations for organ donors, recipients, and healthcare institutions.

## Features
- **Blockchain Integration**: Immutable smart contracts to store organ donor and recipient data securely.
- **Transparency**: Real-time tracking of donations and organ matches.
- **Privacy**: Donor and recipient information is anonymized to ensure confidentiality.
- **Decentralization**: Eliminates the need for a central authority, increasing trust.
- **Scalability**: Designed to handle a growing number of users and transactions.



### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/organ-donation-registry.git
   cd organ-donation-registry
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory based on `config/dotenv.example`.

4. **Run the blockchain network**:
   ```bash
   cd blockchain
   truffle develop
   ```

5. **Deploy the smart contracts**:
   ```bash
   truffle migrate
   ```

6. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

7. **Start the frontend application**:
   ```bash
   cd frontend
   npm start
   ```

### Running Tests
- **Blockchain Tests**:
  ```bash
  cd blockchain
  npm test
  ```

- **Backend Tests**:
  ```bash
  cd backend
  npm test
  ```

- **End-to-End Tests**:
  ```bash
  cd tests
  npm test
  ```

## Technologies Used
- **Frontend**: React, JavaScript
- **Backend**: Node.js, Express
- **Blockchain**: Solidity, Hardhat, Web3.js
- **Testing**: Jest, Mocha, Chai

## Contributing
Contributions are welcome! Please follow the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## License
This project is yet Unlicensed.

## Acknowledgments
- The Ethereum community for blockchain tools and documentation.
- Open-source contributors for providing inspiration and resources.
- The God - ChatGPT!

