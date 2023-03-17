import { Configuration, OpenAIApi } from 'openai'
import { renderSupportMessage } from './renderSupportMessage.js'

const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)

export async function run(value, context) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'assistant', content: value }],
    max_tokens: 20,
  })

  context.prepend(renderSupportMessage(completion.data.choices[0].message.content))
}
