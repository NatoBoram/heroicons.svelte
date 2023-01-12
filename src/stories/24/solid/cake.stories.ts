import type { Meta, StoryObj } from '@storybook/svelte'
import { Cake as CakeSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CakeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CakeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cake: Story = {}
