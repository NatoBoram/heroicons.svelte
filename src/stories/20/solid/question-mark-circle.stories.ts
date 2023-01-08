import type { Meta, StoryObj } from '@storybook/svelte'
import { QuestionMarkCircle as QuestionMarkCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: QuestionMarkCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<QuestionMarkCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionMarkCircle: Story = {}
