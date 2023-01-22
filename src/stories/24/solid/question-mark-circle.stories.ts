import type { Meta, StoryObj } from '@storybook/svelte'
import QuestionMarkCircleSvelte from '../../../lib/24/solid/question-mark-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: QuestionMarkCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<QuestionMarkCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionMarkCircle: Story = {}
