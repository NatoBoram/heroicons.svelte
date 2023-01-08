import type { Meta, StoryObj } from '@storybook/svelte'
import { CodeBracket as CodeBracketSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CodeBracketSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CodeBracketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CodeBracket: Story = {}
