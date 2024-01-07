import type { Meta, StoryObj } from '@storybook/svelte'
import BeakerSvelte from '../../../lib/16/solid/beaker.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BeakerSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BeakerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Beaker: Story = {}
