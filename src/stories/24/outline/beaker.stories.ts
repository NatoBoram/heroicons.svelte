import type { Meta, StoryObj } from '@storybook/svelte'
import { Beaker as BeakerSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BeakerSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BeakerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Beaker: Story = {}
