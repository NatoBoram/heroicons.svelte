import type { Meta, StoryObj } from '@storybook/svelte'
import CodeBracketSvelte from '../../../lib/20/solid/code-bracket.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CodeBracketSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CodeBracketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracket: Story = {}
