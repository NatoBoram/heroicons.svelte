import type { Meta, StoryObj } from '@storybook/svelte'
import LightBulbSvelte from '../../../lib/20/solid/light-bulb.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: LightBulbSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LightBulbSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LightBulb: Story = {}
