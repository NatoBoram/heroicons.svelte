import type { Meta, StoryObj } from '@storybook/svelte'
import CakeSvelte from '../../../lib/16/solid/cake.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CakeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CakeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cake: Story = {}
