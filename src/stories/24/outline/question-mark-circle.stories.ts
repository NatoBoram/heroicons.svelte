import type { Meta, StoryObj } from '@storybook/svelte'
import { QuestionMarkCircle as QuestionMarkCircleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: QuestionMarkCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<QuestionMarkCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionMarkCircle: Story = {}
