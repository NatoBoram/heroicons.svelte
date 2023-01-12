import type { Meta, StoryObj } from '@storybook/svelte'
import { Beaker as BeakerSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BeakerSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BeakerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Beaker: Story = {}
