import type { Meta, StoryObj } from '@storybook/svelte'
import SunSvelte from '../../../lib/24/outline/sun.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: SunSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SunSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {}
