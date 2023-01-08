import type { Meta, StoryObj } from '@storybook/svelte'
import { Sun as SunSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: SunSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SunSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {}
