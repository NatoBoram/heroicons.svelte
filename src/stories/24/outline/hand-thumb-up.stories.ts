import type { Meta, StoryObj } from '@storybook/svelte'
import { HandThumbUp as HandThumbUpSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: HandThumbUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandThumbUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbUp: Story = {}
