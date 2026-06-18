import { prisma } from "../lib/prisma";
import { z } from "zod";

const Tag = z.object({
  name: z.string(),
  slug: z.string(),
});

const createTag = async (req: any, res: any) => {
  try {
    const data = Tag.parse(req.body);

    const tag = await prisma.tag.create({
      data,
    });

    return res.status(201).json({
      success:true,
      message: "Successfully created tag",
      data: tag,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      message: "Failed to create tag",
     
    });
  }
};

export default createTag;