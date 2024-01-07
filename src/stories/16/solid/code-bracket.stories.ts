import type { Meta, StoryObj } from '@storybook/svelte'
import CodeBracketSvelte from '../../../lib/16/solid/code-bracket.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CodeBracketSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CodeBracketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracket: Story = {}
