// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BurdaToken is ERC20 {
    constructor() ERC20("BurdaToken", "BRD") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}