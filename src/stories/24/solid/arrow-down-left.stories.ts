import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownLeft as ArrowDownLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowDownLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownLeft: Story = {}
