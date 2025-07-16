import React, { useState } from "react";

export default function TxValidatorForm({ onValidate, loading }) {
  const [txHash, setTxHash] = useState("");
  const [network, setNetwork] = useState("sepolia");

  const handleSubmit = (e) => {
    e.preventDefault();
    onValidate(txHash, network);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter transaction hash"
        value={txHash}
        onChange={(e) => setTxHash(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <select
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="sepolia">Ethereum Sepolia</option>
        <option value="mainnet">Ethereum Mainnet</option>
      </select>

      <button
        type="submit"
        disabled={loading || !txHash}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Validating..." : "Validate Transaction"}
      </button>
    </form>
  );
}