import type { Meta, StoryObj } from '@storybook/svelte'
import FireSvelte from '../../../lib/16/solid/fire.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FireSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FireSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Fire: Story = {}
