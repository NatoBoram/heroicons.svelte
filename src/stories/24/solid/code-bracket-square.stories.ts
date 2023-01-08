import type { Meta, StoryObj } from '@storybook/svelte'
import { CodeBracketSquare as CodeBracketSquareSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: CodeBracketSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CodeBracketSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracketSquare: Story = {}
