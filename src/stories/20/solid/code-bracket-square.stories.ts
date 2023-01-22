import type { Meta, StoryObj } from '@storybook/svelte'
import CodeBracketSquareSvelte from '../../../lib/20/solid/code-bracket-square.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CodeBracketSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CodeBracketSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracketSquare: Story = {}
