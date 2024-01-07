import type { Meta, StoryObj } from '@storybook/svelte'
import MoonSvelte from '../../../lib/16/solid/moon.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MoonSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MoonSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Moon: Story = {}
