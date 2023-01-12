import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowRight as ArrowRightSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRight: Story = {}
