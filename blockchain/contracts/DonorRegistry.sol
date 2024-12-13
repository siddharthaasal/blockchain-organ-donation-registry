// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DonorRegistry {
    struct Donor {
        uint256 donorID;
        string donorName;
        uint256 age;
        string isAlive;
        string organType;
        bool availabilityStatus;
        uint256 timestamp;
    }

    mapping(uint256 => Donor) private donors;
    address public admin;

    event DonorRegistered(
        uint256 donorID,
        string donorName,
        uint256 age,
        string isAlive,
        string organType,
        bool availabilityStatus,
        uint256 timestamp
    );

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerDonor(
        uint256 _donorID,
        string memory _donorName,
        uint256 _age,
        string memory _isAlive,
        string memory _organType,
        bool _availabilityStatus
    ) public onlyAdmin {
        require(donors[_donorID].donorID == 0, "Donor already exists");

        donors[_donorID] = Donor({
            donorID: _donorID,
            donorName: _donorName,
            age: _age,
            isAlive: _isAlive,
            organType: _organType,
            availabilityStatus: _availabilityStatus,
            timestamp: block.timestamp
        });

        emit DonorRegistered(
            _donorID,
            _donorName,
            _age,
            _isAlive,
            _organType,
            _availabilityStatus,
            block.timestamp
        );
    }

    function getDonor(uint256 _donorID) public view returns (Donor memory) {
        require(donors[_donorID].donorID != 0, "Donor not found");
        return donors[_donorID];
    }
}
