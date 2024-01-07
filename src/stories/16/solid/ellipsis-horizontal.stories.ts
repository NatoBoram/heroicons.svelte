import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisHorizontalSvelte from '../../../lib/16/solid/ellipsis-horizontal.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EllipsisHorizontalSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EllipsisHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontal: Story = {}
