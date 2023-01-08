import type { Meta, StoryObj } from '@storybook/svelte'
import { PlusCircle as PlusCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: PlusCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle: Story = {}
