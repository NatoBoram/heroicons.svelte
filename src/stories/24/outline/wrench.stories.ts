import type { Meta, StoryObj } from '@storybook/svelte'
import WrenchSvelte from '../../../lib/24/outline/wrench.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: WrenchSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WrenchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wrench: Story = {}
