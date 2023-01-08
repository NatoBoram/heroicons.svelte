import type { Meta, StoryObj } from '@storybook/svelte'
import { Fire as FireSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FireSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FireSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Fire: Story = {}
