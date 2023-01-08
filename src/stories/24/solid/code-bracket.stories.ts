import type { Meta, StoryObj } from '@storybook/svelte'
import { CodeBracket as CodeBracketSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: CodeBracketSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CodeBracketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracket: Story = {}
