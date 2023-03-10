import type { Meta, StoryObj } from '@storybook/svelte'
import QuestionMarkCircleSvelte from '../../../lib/20/solid/question-mark-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: QuestionMarkCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<QuestionMarkCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionMarkCircle: Story = {}
