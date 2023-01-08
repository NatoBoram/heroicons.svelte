import type { Meta, StoryObj } from '@storybook/svelte'
import { Cake as CakeSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: CakeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CakeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cake: Story = {}
