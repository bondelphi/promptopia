import { ConnectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    const prompts = await Prompt.find({
      prompt: { $regex: `.*${params.prompt}.*` },
    });
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch like prompts", {
      status: 500,
    });
  }
};
