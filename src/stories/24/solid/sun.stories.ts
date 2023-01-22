import type { Meta, StoryObj } from '@storybook/svelte'
import SunSvelte from '../../../lib/24/solid/sun.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: SunSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SunSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {}
