import type { Meta, StoryObj } from '@storybook/svelte'
import { PlusCircle as PlusCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PlusCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle: Story = {}
