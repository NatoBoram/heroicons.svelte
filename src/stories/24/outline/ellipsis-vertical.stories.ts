import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisVertical as EllipsisVerticalSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: EllipsisVerticalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisVertical: Story = {}
