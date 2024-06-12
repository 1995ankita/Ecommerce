const express = require("express");
const { createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    unblockUser,
    blockUser,
    handleRefreshToken,
    logout
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.put("/edit-user", authMiddleware, updatedUser);
router.get("/all-users", authMiddleware, isAdmin, getallUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
router.put("/block-user/:id", authMiddleware, blockUser);
router.put("/unblock-user/:id", authMiddleware, unblockUser);



module.exports = router;