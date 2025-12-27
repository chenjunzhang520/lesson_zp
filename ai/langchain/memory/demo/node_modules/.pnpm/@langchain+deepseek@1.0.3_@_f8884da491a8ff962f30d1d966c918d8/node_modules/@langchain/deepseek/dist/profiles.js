//#region src/profiles.ts
const PROFILES = {
	"deepseek-chat": {
		maxInputTokens: 128e3,
		imageInputs: false,
		audioInputs: false,
		pdfInputs: false,
		videoInputs: false,
		maxOutputTokens: 8192,
		reasoningOutput: false,
		imageOutputs: false,
		audioOutputs: false,
		videoOutputs: false,
		toolCalling: true,
		structuredOutput: false
	},
	"deepseek-reasoner": {
		maxInputTokens: 128e3,
		imageInputs: false,
		audioInputs: false,
		pdfInputs: false,
		videoInputs: false,
		maxOutputTokens: 128e3,
		reasoningOutput: true,
		imageOutputs: false,
		audioOutputs: false,
		videoOutputs: false,
		toolCalling: true,
		structuredOutput: false
	}
};
var profiles_default = PROFILES;

//#endregion
export { profiles_default as default };
//# sourceMappingURL=profiles.js.map