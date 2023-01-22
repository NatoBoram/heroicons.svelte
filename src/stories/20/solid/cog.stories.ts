import type { Meta, StoryObj } from '@storybook/svelte'
import CogSvelte from '../../../lib/20/solid/cog.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CogSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CogSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog: Story = {}
