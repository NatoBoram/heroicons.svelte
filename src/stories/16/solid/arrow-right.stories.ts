import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightSvelte from '../../../lib/16/solid/arrow-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRight: Story = {}
