import type { Meta, StoryObj } from '@storybook/svelte'
import PlusCircleSvelte from '../../../lib/24/solid/plus-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PlusCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle: Story = {}
