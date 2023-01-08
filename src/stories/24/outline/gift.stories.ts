import type { Meta, StoryObj } from '@storybook/svelte'
import { Gift as GiftSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: GiftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GiftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gift: Story = {}
