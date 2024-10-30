import { isValidObjectId } from "mongoose"; // checks if a provided ID is a valid MongoDB project
import { Balance } from "../db/models/Balance.js";

// retrieve the balance of a user by their ID
export const getUserBalance = async (req, res) => {
  try {
    const { userId: loggedInUser } = req; // id of user who is logged in and making the request
    const { userId: userWeAreInterestedIn } = req.params; // id of user whose balance is requested

    //validate the user id
    if (!isValidObjectId(userWeAreInterestedIn)) {
      //check if user we are interested in is the valid one if not responds with a 400
      return res.status(400).json({
        message: "Deformed ID Passed",
      });
    }

    //Query the users balance- searches the balance collection for the balance document associate
    // with uerWeAreIntrestedIn
    const userBalance = await Balance.findOne({ user: userWeAreInterestedIn });

    if (!userBalance) {
      return res.status(400).json({
        message: "User with that ID does not exist",
      });
    }

    res.json({
      balance: userBalance.balance, // IF there is a userBalance.balance (it is defined), then use that.
      // If not, then 0
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
