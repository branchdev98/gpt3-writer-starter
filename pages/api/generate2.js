import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// const basePromptPrefix = `
// 给我写一首孙南风格押韵的歌, 说`;

// const basePromptPrefix = `
// Write me a song that rhymes in the style of Sun nan without chorus that talks about `;

const basePromptPrefix = `
  `;

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput2}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a song about ${req.body.userInput2} in funny and humorous way.`,
    temperature: 0.8,
    max_tokens: 940,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
