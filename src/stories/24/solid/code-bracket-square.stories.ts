import type { Meta, StoryObj } from '@storybook/svelte'
import CodeBracketSquareSvelte from '../../../lib/24/solid/code-bracket-square.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CodeBracketSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CodeBracketSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracketSquare: Story = {}
