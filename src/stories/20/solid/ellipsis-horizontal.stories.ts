import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisHorizontalSvelte from '../../../lib/20/solid/ellipsis-horizontal.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: EllipsisHorizontalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EllipsisHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontal: Story = {}
