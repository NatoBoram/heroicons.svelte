import type { Meta, StoryObj } from '@storybook/svelte'
import BeakerSvelte from '../../../lib/24/outline/beaker.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BeakerSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BeakerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Beaker: Story = {}
