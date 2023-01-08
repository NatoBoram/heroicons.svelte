import type { Meta, StoryObj } from '@storybook/svelte'
import { Cog as CogSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: CogSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CogSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog: Story = {}
