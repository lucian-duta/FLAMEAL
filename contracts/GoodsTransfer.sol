// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract GoodsTransfer {
    uint256 transactionCount = 0;

    event Transfer(
        address from,
        address reciever,
        string content,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address reciever;
        string content;
        uint256 timestamp;
    }

    TransferStruct[] public transfers;

    function addToBlockchain(address payable reciever, string memory content)
        public
    {
        transactionCount += 1;
        transfers.push(
            TransferStruct(msg.sender, reciever, content, block.timestamp)
        );

        emit Transfer(msg.sender, reciever, content, block.timestamp);
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transfers;
    }

    // function getTransfers()
    //     public
    //     view
    //     returns (
    //         address[] memory,
    //         address[] memory,
    //         string[] memory,
    //         uint256[] memory
    //     )
    // {
    //     address[] memory senders = new address[](transactionCount);
    //     address[] memory receivers = new address[](transactionCount);
    //     string[] memory contents = new string[](transactionCount);
    //     uint256[] memory timestamps = new uint256[](transactionCount);

    //     for (uint256 i = 0; i < 2; i++) {
    //         senders[i] = (transfers[i].sender);
    //         receivers[i] = (transfers[i].reciever);
    //         contents[i] = (transfers[i].content);
    //         timestamps[i] = (transfers[i].timestamp);
    //     }
    //     return (senders, receivers, contents, timestamps);
    // }

    function getTrasactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
