/**
 * @typedef {Object} Message
 * @property {string} content
 * @property {string} role
 */

/**
 * @typedef {Object} Choice
 * @property {string} finish_reason
 * @property {number} index
 * @property {any} [logprobs]
 * @property {Message} message
 */

/**
 * @typedef {Object} Xgroq
 * @property {string} id
 */

/**
 * @typedef {Object} AiResponse
 * @property {Choice[]} choices
 * @property {number} created
 * @property {string} id
 * @property {string} model
 * @property {string} object
 * @property {string} service_tier
 * @property {string} system_fingerprint
 * @property {any} [usage_breakdown]
 * @property {Xgroq} x_groq
 */


/**
 * 
 * @param {Choice[]} messages 
 * @returns 
 */
function makeAiRequest(messages) {
    
return fetch('https://ai.hackclub.com/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  // body: '{\n        "messages": [{"role": "user", "content": "Tell me a joke!"}]\n    }',
  body: JSON.stringify({
    'messages': messages
  })
}).then(r=>r.text())
/**
 * * @type {AiResponse}
 */
.then((d) => {
    console.log(d)
    /**
     * @type {AiResponse}
     */
const data = JSON.parse(d);
return data.choices[0].message
});
}
module.exports =  { makeAiRequest };
