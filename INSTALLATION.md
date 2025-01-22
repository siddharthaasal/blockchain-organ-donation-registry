# Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Hardhat](https://hardhat.org/) (for blockchain development)
- [Ganache](https://trufflesuite.com/ganache/) (local blockchain development)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/siddharthaasal/blockchain-organ-donation-registry.git
   cd blockchain-organ-donation-registry 
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory based on `config/.env.example`.

4. **Initialize Hardhat**:
   ```bash
   cd blockchain
   npx hardhat
   ```

5. **Compile smart contracts**:
   ```bash
   npx hardhat compile
   ```

6. **Deploy the smart contracts**:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

7. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

8. **Start the frontend application**:
   ```bash
   cd frontend
   npm start
   ```
``` 

