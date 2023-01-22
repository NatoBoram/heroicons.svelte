import type { Meta, StoryObj } from '@storybook/svelte'
import FireSvelte from '../../../lib/24/solid/fire.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: FireSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FireSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Fire: Story = {}
