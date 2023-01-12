import type { Meta, StoryObj } from '@storybook/svelte'
import { LightBulb as LightBulbSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: LightBulbSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LightBulbSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LightBulb: Story = {}
