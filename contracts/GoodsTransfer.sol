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

    function getTrasactionCount() public view returns (uint256) {
        return transactionCount;
    }

    // uint256 transactionCount;

    // event Transfer(
    //     address from,
    //     address reciever,
    //     string comment,
    //     uint256 timestamp,
    //     string keyword
    // );

    // struct TransferStruct {
    //     address sender;
    //     address reciever;
    //     string comment;
    //     uint256 timestamp;
    //     string keyword;
    // }

    // TransferStruct[] transactions;

    // function addToBlockchain(
    //     address payable reciever,
    //     string memory comment,
    //     string memory keyword
    // ) public {
    //     transactionCount += 1;
    //     transactions.push(
    //         TransferStruct(
    //             msg.sender,
    //             reciever,
    //             comment,
    //             block.timestamp,
    //             keyword
    //         )
    //     );

    //     emit Transfer(msg.sender, reciever, comment, block.timestamp, keyword);
    // }

    // function getAllTransactions()
    //     public
    //     view
    //     returns (TransferStruct[] memory)
    // {
    //     return transactions;
    // }

    // function getTrasactionCount() public view returns (uint256) {
    //     return transactionCount;
    // }

    //     struct Transfer {
    //         string content;
    //         uint256 timestamp;
    //     }

    //     event TransferCreated(string content, uint256 timestamp);

    //     function addToBlockchain(string memory content) public {
    //         emit TransferCreated(content, block.timestamp);
    //     }
}
