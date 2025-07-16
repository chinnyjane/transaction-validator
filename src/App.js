import React, { useState } from "react";
import axios from "axios";
import TxValidatorForm from "./components/TxValidatorForm";

export default function TxValidatorApp() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ETHERSCAN_APIS = {
    mainnet: "https://api.etherscan.io/api",
    sepolia: "https://api-sepolia.etherscan.io/api",
  };

  const apiKey = "7V8G74VZ8TY6VYFM1EIXBPSG4E4R9RDRVF"; // Replace with your key

  const handleValidate = async (txHash, network) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const baseUrl = ETHERSCAN_APIS[network];

      const txDetails = await axios.get(baseUrl, {
        params: {
          module: "proxy",
          action: "eth_getTransactionByHash",
          txhash: txHash,
          apikey: apiKey,
        },
      });

      const txStatus = await axios.get(baseUrl, {
        params: {
          module: "transaction",
          action: "gettxreceiptstatus",
          txhash: txHash,
          apikey: apiKey,
        },
      });

      if (!txDetails.data.result) throw new Error("Invalid transaction hash or not found.");

      const tx = txDetails.data.result;
      const status = txStatus.data.result.status === "1" ? "✅ Success" : "❌ Failed";

      setResult({
        from: tx.from,
        to: tx.to,
        value: parseInt(tx.value, 16) / 1e18,
        gas: parseInt(tx.gas, 16),
        status,
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Transaction Validator</h1>
        <TxValidatorForm onValidate={handleValidate} loading={loading} />

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {result && (
          <div className="mt-6 border border-gray-200 p-4 rounded-lg bg-gray-100">
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>From:</strong> {result.from}</p>
            <p><strong>To:</strong> {result.to}</p>
            <p><strong>Value:</strong> {result.value} ETH</p>
            <p><strong>Gas Limit:</strong> {result.gas}</p>
          </div>
        )}
      </div>
    </div>
  );
}