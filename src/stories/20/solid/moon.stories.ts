import type { Meta, StoryObj } from '@storybook/svelte'
import MoonSvelte from '../../../lib/20/solid/moon.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MoonSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MoonSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Moon: Story = {}
