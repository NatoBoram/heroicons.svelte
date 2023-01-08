import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisHorizontal as EllipsisHorizontalSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: EllipsisHorizontalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EllipsisHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontal: Story = {}
