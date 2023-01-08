import type { Meta, StoryObj } from '@storybook/svelte'
import { CodeBracketSquare as CodeBracketSquareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CodeBracketSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CodeBracketSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracketSquare: Story = {}
