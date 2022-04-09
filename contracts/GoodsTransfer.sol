// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract GoodsTransfer {
    uint256 transactionCount = 0;
    //the event to be emmited when a transaction is made
    event Transfer(
        address from,
        address receiver,
        string content,
        uint256 timestamp
    );
    //the struct to be used to store the data of a transaction in the smart contract
    struct TransferStruct {
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }
    //the array of the structs
    TransferStruct[] public transfers;

    //the function to be called when a transaction is addempted
    function addToBlockchain(address payable receiver, string memory content)
        public
    {
        transactionCount += 1;
        transfers.push(
            TransferStruct(msg.sender, receiver, content, block.timestamp)
        );

        emit Transfer(msg.sender, receiver, content, block.timestamp);
    }

    //the function used to fetch the transactions
    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transfers;
    }

    //function used to fetch the number of transactions
    function getTrasactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
