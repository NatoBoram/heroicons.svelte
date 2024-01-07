import type { Meta, StoryObj } from '@storybook/svelte'
import WrenchSvelte from '../../../lib/16/solid/wrench.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: WrenchSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<WrenchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wrench: Story = {}
