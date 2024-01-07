import type { Meta, StoryObj } from '@storybook/svelte'
import PlusCircleSvelte from '../../../lib/16/solid/plus-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PlusCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PlusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle: Story = {}
