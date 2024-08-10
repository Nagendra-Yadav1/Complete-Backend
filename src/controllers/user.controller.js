import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "This is the register route for the form changes" });
});

export { registerUser };
