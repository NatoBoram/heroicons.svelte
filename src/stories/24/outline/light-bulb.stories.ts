import type { Meta, StoryObj } from '@storybook/svelte'
import LightBulbSvelte from '../../../lib/24/outline/light-bulb.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: LightBulbSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LightBulbSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LightBulb: Story = {}
