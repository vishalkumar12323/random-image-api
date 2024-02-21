const { PrismaClient } = require("@prisma/client");
const mongoose = require("mongoose");
const prisma = new PrismaClient();

const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Image = new mongoose.model("image", imageSchema);
module.exports = { prisma, Image };
