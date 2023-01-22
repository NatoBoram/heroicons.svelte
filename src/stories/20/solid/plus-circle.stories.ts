import type { Meta, StoryObj } from '@storybook/svelte'
import PlusCircleSvelte from '../../../lib/20/solid/plus-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PlusCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle: Story = {}
