import type { Meta, StoryObj } from '@storybook/svelte'
import CodeBracketSvelte from '../../../lib/24/outline/code-bracket.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CodeBracketSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CodeBracketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracket: Story = {}
