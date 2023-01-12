import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallLeft as ArrowSmallLeftSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowSmallLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallLeft: Story = {}
