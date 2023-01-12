import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisHorizontal as EllipsisHorizontalSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: EllipsisHorizontalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontal: Story = {}
