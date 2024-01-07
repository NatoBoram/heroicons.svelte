import type { Meta, StoryObj } from '@storybook/svelte'
import CodeBracketSquareSvelte from '../../../lib/16/solid/code-bracket-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CodeBracketSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CodeBracketSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracketSquare: Story = {}
