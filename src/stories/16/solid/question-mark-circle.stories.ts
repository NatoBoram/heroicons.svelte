import type { Meta, StoryObj } from '@storybook/svelte'
import QuestionMarkCircleSvelte from '../../../lib/16/solid/question-mark-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: QuestionMarkCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<QuestionMarkCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionMarkCircle: Story = {}
