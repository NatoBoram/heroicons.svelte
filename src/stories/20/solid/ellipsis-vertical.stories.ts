import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisVertical as EllipsisVerticalSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: EllipsisVerticalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EllipsisVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisVertical: Story = {}
