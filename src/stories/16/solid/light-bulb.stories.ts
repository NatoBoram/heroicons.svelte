import type { Meta, StoryObj } from '@storybook/svelte'
import LightBulbSvelte from '../../../lib/16/solid/light-bulb.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: LightBulbSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<LightBulbSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LightBulb: Story = {}
