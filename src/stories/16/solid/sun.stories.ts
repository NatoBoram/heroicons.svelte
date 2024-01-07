import type { Meta, StoryObj } from '@storybook/svelte'
import SunSvelte from '../../../lib/16/solid/sun.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SunSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SunSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {}
